import createElement from '../native/create-element';
import createEvent from '../native/create-event';
import utilElementContains from '../util/element-contains';

const CustomEvent = (function (CustomEvent) {
  if (CustomEvent) {
    try {
      new CustomEvent();
    } catch (e) {
      return undefined;
    }
  }
  return CustomEvent;
}(window.CustomEvent));

function createCustomEvent (name, opts = {}) {
  if (CustomEvent) {
    return new CustomEvent(name, opts);
  }

  var e = createEvent('CustomEvent');
  e.initCustomEvent(name, opts.bubbles, opts.cancelable, opts.detail);
  return e;
}

function dispatch (elem, cEvent) {
  if (!elem.disabled) {
    return elem.dispatchEvent(cEvent);
  }
  cEvent.isPropagationStopped = true;
}

const hasBubbleOnDetachedElements = (function () {
  var parent = createElement('div');
  var child = createElement('div');
  var hasBubbleOnDetachedElements = false;
  parent.appendChild(child);
  parent.addEventListener('test', () => hasBubbleOnDetachedElements = true);
  child.dispatchEvent(createCustomEvent('test', { bubbles: true }));
  return hasBubbleOnDetachedElements;
}());

function createReadableStopPropagation (oldStopPropagation) {
  return function () {
    this.isPropagationStopped = true;
    oldStopPropagation.call(this);
  };
}

function simulateBubbling (elem, cEvent) {
  let didPreventDefault;
  let currentElem = elem;
  cEvent.stopPropagation = createReadableStopPropagation(cEvent.stopPropagation);
  Object.defineProperty(cEvent, 'target', { get: () => elem });
  while (currentElem && !cEvent.isPropagationStopped) {
    cEvent.currentTarget = currentElem;
    if (dispatch(currentElem, cEvent) === false) {
      didPreventDefault = false;
    }
    currentElem = currentElem.parentNode;
  }
  return didPreventDefault;
}

function emitOne (elem, name, opts) {
  var cEvent, shouldSimulateBubbling;

  /* jshint expr: true */
  opts.bubbles === undefined && (opts.bubbles = true);
  opts.cancelable === undefined && (opts.cancelable = true);
  cEvent = createCustomEvent(name, opts);
  shouldSimulateBubbling = opts.bubbles &&
    !hasBubbleOnDetachedElements &&
    !utilElementContains(document, elem);

  return shouldSimulateBubbling ?
    simulateBubbling(elem, cEvent) :
    dispatch(elem, cEvent);
}

export default function (elem, name, opts = {}) {
  var names = (typeof name === 'string' ? name.split(' ') : name);
  return names.reduce(function (prev, curr) {
    if (emitOne(elem, curr, opts) === false) {
      prev.push(curr);
    }
    return prev;
  }, []);
}
