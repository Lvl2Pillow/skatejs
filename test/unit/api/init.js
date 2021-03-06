import helperElement from '../../lib/element';
import helperFixture from '../../lib/fixture';
import skate from '../../../src/index';

describe('api/init', function () {
  let tagName;

  beforeEach(function () {
    tagName = helperElement('my-el');
    skate(tagName.safe, {
      created: function (elem) {
        elem.textContent = 'test';
      }
    });
    helperFixture(`<${tagName.safe}></${tagName.safe}>`);
  });

  it('should accept a node', function () {
    const elem = helperFixture().querySelector(tagName.safe);
    skate.init(elem);
    expect(elem.textContent).to.equal('test');
  });

  describe('sync', function () {
    it('should take an element', function () {
      var initialised = false;
      var { safe: tagName } = helperElement('div');

      skate(tagName, {
        attached: function () {
          initialised = true;
        }
      });

      skate.init(helperFixture(`<${tagName}></${tagName}>`).querySelector(tagName));
      expect(initialised).to.equal(true);
    });
  });

  describe('duplication', function () {
    it('should not initialise a single component more than once on a single element', function () {
      var calls = 0;
      var {safe: tagName} = helperElement('my-element');

      skate(tagName, {
        created: function () {
          ++calls;
        }
      });

      var el = skate.create(tagName);
      expect(calls).to.equal(1);
      skate.init(el);
      expect(calls).to.equal(1);
    });
  });

  describe('forms', function () {
    it('#110 - should initialise forms properly', function () {
      skate('x-form', {
        properties: {
          initialised: {
            get (elem) {
              return elem.querySelector('form').initialised;
            }
          }
        },
        render (elem) {
          elem.innerHTML = '<form></form>';
        },
        ready (elem) {
          elem.querySelector('form').initialised = true;
        }
      });

      const form = document.createElement('x-form');
      skate.init(form);
      expect(form.initialised).to.equal(true);
    });
  });
});
