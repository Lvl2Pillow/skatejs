import skate from '../../../../../src/index';

export default skate('sk-page-docs-options-attached', {
  template () {
    this.innerHTML = `
      <sk-docs-layout>
        <h2><code>options.attached</code></h2>

        <p>A function that is called whenever the element is attached to the DOM.</p>
        <noscript is="sk-code" lang="js">
          skate('my-element', {
            attached () {
              // Reference to the element.
              this;
            }
          });
        </noscript>
        <p>
          In the <code>attached</code> callback <code>this</code> refers to the component's <a href="https://developer.mozilla.org/en-US/docs/Web/API/Element"> element</a>.
        </p>
      </sk-docs-layout>
    `;
  }
});