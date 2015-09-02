import skate from '../../../src/index';

export default skate('sk-page-docs-skate', {
  template () {
    this.innerHTML = `
      <sk-docs-layout>
        <h2><code>options.properties</code></h2>

        <p>Defines custom properties on the element. Each property definition is different than that normally specified to <code>Object.defineProperty()</code>.</p>
        <noscript is="sk-code" lang="js">
          skate('my-element', {
            properties: {
              prop1: { /* property options */ },
              prop2: { /* property options */ }
            }
          });
        </noscript>
        <p>Each property accepts the following options:</p>



        <h3><code>attr</code></h3>

        <p>Whether or not to link the property to an attribute. If falsy, then the attribute is not linked. If truthy it is.</p>
        <p>If <code>true</code>, then the property name will be converted from <code>camelCase</code> to <code>dash-case</code> and the result will be used as the linked attribute.</p>
        <noscript is="sk-code" lang="js">
          attr: true
        </noscript>

        <p>If a <code>String</code>, then that will be used as the linked attribute exactly as it is specified.</p>
        <noscript is="sk-code" lang="js">
          attr: 'my-attribute-name'
        </noscript>



        <h3><code>get</code></h3>
        <p>The custom getter for this property. If not specified, then the value is stored internally when the value is set and returned whenever it is retrieved. The element is passed as <code>this</code>.</p>
        <p>If you want to make a property read-only, then specify <code>get</code> without <code>set</code>.</p>



        <h3><code>emit</code></h3>
        <p>Whether or not to emit an event when the property is set. Defaults to <code>true</code>.</p>

        <p>If <code>true</code>, then a <code>skate.property</code> event is emitted:</p>
        <noscript is="sk-code" lang="js">
          notify: true
        </noscript>

        <p>If a <code>String</code>, then the value is used as the event name that is emitted.</p>
        <noscript is="sk-code" lang="js">
          notify: 'emit-this-instead'
        </noscript>

        <p>You may also specify any type of event spec that <code>skate.emit()</code> takes. This means you can specify a space-separated <code>String</code> or an <code>Array</code> of event names.</p>
        <noscript is="sk-code" lang="js">
          notify: 'event1 event2',
          notify: [ 'event1', 'event2' ]
        </noscript>

        <p>The event that gets emitted contains the following information in its <code>detail</code> property:</p>
        <ul>
          <li><code>name</code> The property name.</li>
          <li><code>newValue</code> The new value that was just set on the property.</li>
          <li><code>oldValue</code> The previous value of the property.</li>
        </ul>



        <h3><code>init</code></h3>

        <p>The initial value for the property. It will be coerced and pass through the setter when initialised.</p>
        <noscript is="sk-code" lang="js">
          init: 'initial value'
        </noscript>

        <p>If you specify a <code>Function</code> then it will be called and the return value used as the initial value.</p>
        <noscript is="sk-code" lang="js">
          init: function () {
            return 'initial value';
          }
        </noscript>

        <p>The element is passed as <code>this</code>, however, keep in mind that property initialisation order is not guaranteed. If you need the element in order to compute the value, it's better to use <code>get</code> or <code>set</code> instead.</p>
        <p>If you wanted to have a property linked to a boolean attribute and have it set on the element by default, all you'd have to do is:</p>
        <noscript is="sk-code" lang="js">
          attr: true,
          type: Boolean,
          value: true
        </noscript>



        <h3><code>set</code></h3>

        <p>The custom setter for this property. The return value is ignored, so the logic in this method is responsible for setting the value however it needs to.</p>
        <noscript is="sk-code" lang="js">
          set: function (newValue, oldValue) {
            this.someOtherValue = oldValue + newValue;
          }
        </noscript>



        <h3><code>type</code></h3>

        <p>Responsible for coercing the value before the setter is called. The return value of this function is what is passed as <code>newValue</code> into the setter.</p>
        <noscript is="sk-code" lang="js">
          type: Number
        </noscript>

        <p>You can use <code>type</code> in conjunction with <code>attr</code> to make a boolean attribute:</p>
        <noscript is="sk-code" lang="js">
          attr: true,
          type: Boolean
        </noscript>

        <p>When the property is passed a truthy value, the attribute is added and void of a value. When passed a falsy value, the attribute is removed.</p>
      </sk-docs-layout>
    `;
  }
});
