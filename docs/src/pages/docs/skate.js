import skate from '../../../../src/index';

export default skate('sk-page-docs-skate', {
  template () {
    this.innerHTML = `
      <sk-docs-layout>
        <h2><code>skate (name, options)</code></h2>

        <p>You define a component by passing a component name and some options to the <code>skate()</code> function. By default, the name you specify corresponds to one of the following:</p>
        <ul>
          <li>Tag name</li>
          <li>Value of the <code>is</code> attribute when the <a href="options/extends.html">extends</a> option is defined.</li>
        </ul>
        <sk-notice>Skate allows you to define custom binding types. This means that you can write a binding type that can bind behaviour to an element based on other identifers such as attributes and class names. See the <a href="options/type.html">type</a> option for more information.</sk-notice>

        <p>To create a component, simply call <code>skate()</code> and give it a <code>name</code> and some <code>options</code> to customise its behaviour</p>
        <noscript is="sk-code" lang="js">
          var element = skate('my-element', {});
        </noscript>

        <p>The <code>return</code> value is a function / constructor that you can use to instantiate your component as an element:</p>
        <noscript is="sk-code" lang="js">
          // Use it like a function, but not spec compliant.
          // Awesomest way to create an element. Ever.
          document.body.appendChild(element());

          // Or a constructor.
          // Not as cool as using a function, but conforms to the spec.
          document.body.appendChild(new element());
        </noscript>

        <p>You may also pass properties that you want to set on the element instance after it's constructed:</p>
        <noscript is="sk-code" lang="js">
          var element = skate('my-element', {});
          var instance = element({
            prop1: true
          });

          // true;
          instance.prop1;
        </noscript>



        <h3>Native vs Polyfill</h3>
        <p>Underneath the hood, Skate will use native custom elements if the following criteria is met:</p>
        <ul>
          <li>Your browser supports <code>document.registerElement()</code>.</li>
          <li>Your component uses the default binding type.</li>
          <li>Your component has a hyphen in its name.</li>
        </ul>
        <p>In all other instances Skate will use a <code>MutationObserver</code> to polyfill the same behaviour. In browsers that do not have native support for Mutation Observers, you will need to include your own polyfill.</p>
        <sk-notice>You should always try and meet this criteria because using Native will <em>always</em> be faster than using Mutation Observers.</sk-notice>



        <h3>Binding Types</h3>

        <p>Below are examples of the built-in binding types. For more information on custom binding types see the <a href="options/type.html">type</a> option.</p>

        <h4>Tag Name</h4>

        <p>Tag names are the <strong>default</strong> and <strong>preferred</strong> way to bind behaviour because it is the most explicit form of binding behaviour to an element. You should use this form unless you absolutely need to use the other types.</p>
        <p>Use this form when:</p>
        <ul>
          <li>You're not sure what form you should use.</li>
          <li>Your component is templated.</li>
          <li>Your element has semantic meaning to the beahviour in which is bound to it.</li>
        </ul>

        <p>The following component:</p>
        <noscript is="sk-code" lang="js">
          skate('my-element', {});
        </noscript>

        <p>Would bind to:</p>
        <noscript is="sk-code" lang="html">
          <my-element></my-element>
        </noscript>

        <sk-notice>You should hyphenate your element names whenever possible because non-hyphenated names prevent Skate from using the native custom element implementation and it makes it clear to others that it is a custom element. Try to only use non-hyphenated names when you're polyfilling elements for browsers that don't support them such as <code>datalist</code> in IE9.</sk-notice>



        <h4><code>is</code> Attribute</h4>

        <p>The <code>is</code> attribute is used when you want to extend the functionality of an element that already has defined functionality, or that already is defined by the HTML spec.</p>
        <p>Use this form when:</p>
        <ul>
          <li>You want to use a custom element, but want to bind behaviour to an existing element.</li>
        </ul>
        <sk-notice type="warning">There is current <a href="">some contention</a> about extending elements using this form. Until this part of the spec is finalised, support for this is subject to change.</sk-notice>

        <p>The following component:</p>
        <noscript is="sk-code" lang="js">
          skate('my-element', {
            extends: 'input'
          });
        </noscript>

        <p>Would bind to:</p>
        <noscript is="sk-code" lang="html">
          <input is="my-element">
        </noscript>
      </sk-docs-layout>
    `;
  }
});
