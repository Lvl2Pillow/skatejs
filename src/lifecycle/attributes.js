import chain from '../util/chain';
import protos from '../util/protos';

var lifecycleNames = ['created', 'updated', 'removed'];

function unique (arr) {
  return arr.filter(function (key, idx, arr) {
    return arr.lastIndexOf(key) === idx;
  });
}

function keys (obj = {}) {
  return unique(protos(obj).reduce(function (prev, curr) {
    return prev.concat(Object.getOwnPropertyNames(curr));
  }, []));
}

function valid (obj) {
  return keys(obj).filter(function (key) {
    return lifecycleNames.some(function (val) {
      return key.indexOf(val) !== -1;
    });
  });
}

function resolveType (oldValue, newValue) {
  var newValueIsString = typeof newValue === 'string';
  var oldValueIsString = typeof oldValue === 'string';

  if (!oldValueIsString && newValueIsString) {
    return 'created';
  } else if (oldValueIsString && newValueIsString) {
    return 'updated';
  } else if (oldValueIsString && !newValueIsString) {
    return 'removed';
  }
}

function makeSpecificCallback (types) {
  if (typeof types === 'function') {
    return types;
  }

  var map = valid(types).reduce(function (obj, unsplit) {
    return unsplit.split(' ').reduce(function (obj, split) {
      (obj[split] = obj[split] || []).push(unsplit);
      return obj;
    }, obj);
  }, {});

  return function (elem, diff) {
    map[diff.type].forEach(function (cb) {
      types[cb](elem, diff);
    });
  };
}

function makeGlobalCallback (attrs) {
  if (typeof attrs === 'function') {
    return attrs;
  }

  var fns = Object.keys(attrs || {}).reduce(function (prev, curr) {
    prev[curr] = makeSpecificCallback(attrs[curr]);
    return prev;
  }, {});

  return function (elem, diff) {
    chain(fns[diff.name]).call(this, elem, diff);
  };
}

export default function (attributes) {
  var callback = makeGlobalCallback(attributes);
  return function (name, oldValue, newValue) {
    callback(this, {
      name: name,
      newValue: newValue === undefined ? null : newValue,
      oldValue: oldValue === undefined ? null : oldValue,
      type: resolveType(oldValue, newValue)
    });
  };
}