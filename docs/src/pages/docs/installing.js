import skate from '../../../../src/index';

export default skate('sk-page-docs-installing', {
  template () {
    this.innerHTML = `
      <sk-docs-layout>
        <h2 id="h2-installing">Installing</h2>

        <p>Skate is available on NPM:</p>
        <noscript is="sk-code" lang="bash">
          npm install skatejs
        </noscript>

        <p>and Bower:</p>
        <noscript is="sk-code" lang="bash">
          bower install skatejs
        </noscript>

        <p>or you can download the <a href="https://github.com/skatejs/skatejs">source</a> from GitHub.</p>



        <h3>ES6 Modules</h3>

        <p>The Skate source resides in <code>src/</code> and is written using ES2015 (formerly ES6). If you're using a transpilation method, then you can <code>import skate from 'src/index';</code>.</p>



        <h3>UMD (AMD / CommonJS)</h3>

        <p>UMD files are located in the <code>lib/</code> directory. Load the <code>lib/index.js</code> file using the CommonJS or AMD loader of your choice.</p>
        <p class="notice notice-info">Skate does not provide a named AMD module. You should use an optimiser such as <a href="https://github.com/scalableminds/amd-optimize">amd-optimize</a> or <a href="https://github.com/jrburke/r.js/">r.js</a> that will generate this for you.</p>



        <h3>Global</h3>

        <p>If you're still skating old school the <code>dist/</code> directory contains the compiled ES5 source. The compiled source does not use a module loader; everything will just work. Access Skate as a global with <code>window.skate</code>.</p>
        <p class="notice notice-info">The global is always set no matter what and will trump any existing globals stored under <code>window.skate</code>. If you're using multiple versions of Skate on the same page, use a module format if possible. If it is not possible, you may call <code>skate.noConflict()</code> to restore the previous global and return the current one.</p>
      </sk-docs-layout>
    `;
  }
});