"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _lodash = _interopRequireDefault(require("lodash"));

var _antd = require("antd");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var Meta = _antd.Card.Meta;

var Card4 = function Card4() {
  var styles = {
    width: 300
  };
  return _react.default.createElement("div", {
    style: {
      background: '#ECECEC',
      padding: '30px'
    }
  }, _react.default.createElement(_antd.Row, {
    gutter: 16
  }, _react.default.createElement(_antd.Col, {
    span: 8
  }, _react.default.createElement(_antd.Card, {
    title: "Card title",
    bordered: false
  }, "Card content")), _react.default.createElement(_antd.Col, {
    span: 8
  }, _react.default.createElement(_antd.Card, {
    title: "Card title",
    bordered: false
  }, "Card content")), _react.default.createElement(_antd.Col, {
    span: 8
  }, _react.default.createElement(_antd.Card, {
    title: "Card title",
    bordered: false
  }, "Card content"))));
};

var _default = Card4;
exports.default = _default;