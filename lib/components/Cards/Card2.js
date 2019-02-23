"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _antd = require("antd");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var Meta = _antd.Card.Meta;

var Card2 = function Card2(_ref) {
  var title = _ref.title,
      children = _ref.children;
  var styles = {
    width: 300
  };
  return _react.default.createElement("div", {
    style: {
      background: '#ECECEC',
      padding: '30px'
    }
  }, _react.default.createElement(_antd.Card, {
    title: title,
    bordered: false,
    style: styles
  }, children));
};

var _default = Card2;
exports.default = _default;