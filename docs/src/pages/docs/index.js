import skate from '../../../src/index';

export default skate('sk-page-docs-index', {
  template () {
    this.innerHTML = `
      <sk-docs-layout>
        <h2 id="h2-what-is-skate">What is Skate?</h2>
        <p>Skate provides an API to bind behaviours to DOM elements. It's based on the W3C specification for  <a href="http://w3c.github.io/webcomponents/spec/custom/">Custom Elements</a>.</p>

        <h3 id="custom-elements-header">Custom Elements</h3>

        <p>Skate uses the <a href="http://w3c.github.io/webcomponents/spec/custom/">W3C Custom Element Spec</a> as the basis for defining its functionality and extends it to make it easier for you to build new custom elements as well as transition your legacy components to custom elements.</p>
        <p>Custom elements are just normal HTML elements that you give a custom name and functionality to:</p>
        <noscript is="sk-code" lang="html">
          <todo-list>
            <todo-item>Get milk</todo-item>
            <todo-item>Feed cats</todo-item>
          </todo-list>
        </noscript>

        <h3> Why should you use it?</h3>
        <ul>
          <li>Skate is small: 5kb minified and gzipped.</li>
          <li>Built and measured to perform under extreme circumstances, even in IE.</li>
          <li>Helps keep you focused and productive while making your code clear and expressive.</li>
          <li>Easily transition from selector-based behaviour binding to element binding.</li>
        </ul>

      </sk-docs-layout>
    `;
  }
});
