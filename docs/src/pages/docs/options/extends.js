import skate from '../../../../../src/index';

export default skate('sk-page-docs-options-extends', {
  template () {
    this.innerHTML = `
      <sk-docs-layout>
        <h2><code>options.extends</code></h2>
        <p>The name of the element that this component is extending.</p>
        <noscript is="sk-code" lang="js">
          skate('my-element', {
            extends: 'p'
          });
        </noscript>
        <p>This is a standard option in the custom element spec and may be used by binding types to help identify elements in which they should bind to.</p>
      </sk-docs-layout>
    `;
  }
});
