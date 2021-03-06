(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['module', 'exports', '../../util/empty'], factory);
  } else if (typeof exports !== "undefined") {
    factory(module, exports, require('../../util/empty'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, mod.exports, global.empty);
    global.string = mod.exports;
  }
})(this, function (module, exports, _empty) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _empty2 = _interopRequireDefault(_empty);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var alwaysUndefinedIfEmpty = function alwaysUndefinedIfEmpty(val) {
    return (0, _empty2.default)(val) ? undefined : String(val);
  };

  exports.default = {
    coerce: alwaysUndefinedIfEmpty,
    deserialize: alwaysUndefinedIfEmpty,
    serialize: alwaysUndefinedIfEmpty
  };
  module.exports = exports['default'];
});