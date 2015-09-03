import skate from '../../../src/index';
import template from '../util/template';

export default skate('sk-page-index', {
  template: template(function () {
    return `
      <div class="jumbotron">
        <div class="container">
          <div class="row">
            <div class="col-md-2">
              <skate transform>skate</skate>
            </div>
            <div class="col-md-10">
              <h1>SkateJS <span class="badge badge-default"><gh-version repo="skatejs/skatejs"><fa-spin></fa-spin></gh-version></span></h1>
              <p>Skate provides an API to bind behaviours to DOM elements. It's based on the W3C specification for  <a href="http://w3c.github.io/webcomponents/spec/custom/">Custom Elements</a>.</p>
            </div>
          </div>
        </div>
      </div>
      <div class="well well-loud text-center">
        <a class="btn btn-default" target="_blank" href="https://github.com/skatejs/skatejs">
          <bs-icon type="github-alt"></bs-icon>
          Start Skating
          <bs-label type="default">
            <bs-icon type="star"></bs-icon>
            <gh-stars repo="skatejs/skatejs"><fa-spin></fa-spin></gh-stars>
          </bs-label>
        </a>
        <a class="btn btn-default" target="_blank" href="https://www.npmjs.com/package/skatejs">
          <bs-icon type="download"></bs-icon>
          npm install skatejs
        </a>
        <a class="btn btn-default" target="_blank" href="http://bower.io/search/?q=skatejs">
          <bs-icon type="download"></bs-icon>
          bower install skatejs
        </a>
      </div>
      <div class="well well-overview">
        <div class="container">
          <sk-grid>
            <div>
              <h3>HTML</h3>
              <noscript is="sk-code" lang="html">
                <my-element></my-element>
              </noscript>
            </div>
            <div>
              <h3>JavaScript</h3>
              <noscript is="sk-code" lang="js">
                skate('my-element', {
                  created: function () {
                    this.textContent = 'Hello, World!';
                  }
                });
              </noscript>
            </div>
            <div>
              <h3>Result</h3>
              <noscript is="sk-code" lang="html">
                <my-element>Hello, World!</my-element>
              </noscript>
            </div>
          </sk-grid>
        </div>
      </div>
      <div class="well well-general">
        <div class="container">
          <sk-grid class="feature">
            <div>
              <h3>Tiny</h3>
              <p><bs-icon from="bs" type="scale" class="fa-flip-horizontal"></bs-icon></p>
              <p>Skate is small: 5kb minified and gzipped.</p>
            </div>
            <div>
              <h3>Fast</h3>
              <p><bs-icon type="tachometer"></bs-icon></p>
              <p>Built and measured to perform under extreme circumstances, even in IE.</p>
            </div>
            <div>
              <h3>Simple</h3>
              <p><bs-icon from="bs" type="ice-lolly-tasted"></bs-icon></p>
              <p>Helps keep you focused and productive while making your code clear and expressive</p>
            </div>
            <div>
              <h3>Compatible</h3>
              <p>
                <bs-icon type="mobile"></bs-icon>
                <bs-icon type="tablet"></bs-icon>
                <bs-icon type="laptop"></bs-icon>
              </p>
              <p>Easily transition from selector-based behaviour binding to element binding.</p>
            </div>
          </sk-grid>
        </div>
      </div>
      <div class="well well-general">
        <iframe src="http://jsbin.com/zaruxomoye/4/embed?js,output"></iframe>
      </div>
    `;
  })
});
