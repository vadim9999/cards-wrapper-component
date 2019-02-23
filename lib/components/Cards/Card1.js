"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _antd = require("antd");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var Meta = _antd.Card.Meta;

var Card1 = function Card1(_ref) {
  var title = _ref.title,
      path = _ref.path,
      children = _ref.children;
  var recipe = getRandomRecipe();
  title = recipe.title;
  var styles = {
    width: 300
  };
  return _react.default.createElement(_antd.Card, {
    title: title,
    extra: _react.default.createElement("a", {
      href: path
    }, "More"),
    style: styles
  }, children);
};

var _default = Card1;
exports.default = _default;