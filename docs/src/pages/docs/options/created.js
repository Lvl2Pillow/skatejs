import skate from '../../../../../src/index';

export default skate('sk-page-docs-options-created', {
  template () {
    this.innerHTML = `
      <sk-docs-layout>
        <h2><code>options.created</code></h2>

        <p>A function that is called once when the element is created.</p>

        <noscript is="sk-code" lang="js">
          var MyElement = skate('my-element', {
            created: function () {
              // Reference to the element.
              this;
            }
          });
        </noscript>

        <p>
          In the <code>created</code> callback <code>this</code> refers to the component's <a href="https://developer.mozilla.org/en-US/docs/Web/API/Element"> element</a>.
        </p>
      </sk-docs-layout>
    `;
  }
});