import skate from '../../../src/index';

export default skate('sk-page-docs-skate', {
  template () {
    this.innerHTML = `
      <sk-docs-layout>
        <h2><code>options.detached</code></h2>
        <p>A function that is called whenever the element is detached from the DOM.</p>
        <noscript is="sk-code" lang="js">
          skate('my-element', {
            detached () {
              // Reference to the element.
              this;
            }
          });
        </noscript>
        <p>
          In the <code>detached</code> callback <code>this</code> refers to the component's <a href="https://developer.mozilla.org/en-US/docs/Web/API/Element"> element</a>.
        </p>
      </sk-docs-layout>
    `;
  }
});
