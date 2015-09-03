import skate from '../../../../../src/index';

export default skate('sk-page-docs-options-events', {
  template () {
    this.innerHTML = `
      <sk-docs-layout>
        <h2><code>options.events</code></h2>
        <p>Registers event listeners on the element using <a href=""><code>skate.event()</code></a>. In each listener <code>this</code> refers to the element the listener was bound to. The only parameter is the event object that was dispatched.</p>

        <p>
          The first and only argument in all event handlers (<code>e</code> in the examples below) is the <a href="https://developer.mozilla.org/en/docs/Web/API/Event">event object</a>.
        </p>

        <h3>Normal Events</h3>

        <p>The following would be called for all <code>click</code> events that were either bubbled or triggered on the element itself:</p>
        <noscript is="sk-code" lang="js">
          skate('my-element', {
            events: {
              click (e) {}
            }
          });
        </noscript>



        <h3>Event Delegation</h3>

        <p>The following would be called for all events that were triggered from a descendant of, or by an element matching <code>.some [selector]</code>.</p>
        <noscript is="sk-code" lang="js">
          skate('my-element', {
            events: {
              'click .some [selector]' (e) {}
            }
          });
        </noscript>

        <p class="notice notice-info">The <code>e.delegateTarget</code> property is set on the event object that is passed to all event handlers. When delegating it is the element that matched the selector. When not delegating, it is the same thing as <code>e.target</code>.</p>
      </sk-docs-layout>
    `;
  }
});