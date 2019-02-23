"use strict";

var _react = _interopRequireDefault(require("react"));

var _antd = require("antd");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Meta = _antd.Card.Meta;

var CardComponent = function CardComponent(props) {
  return _react.default.createElement(_antd.Card, {
    hoverable: true,
    style: {
      width: 240
    },
    cover: _react.default.createElement("img", {
      alt: "example",
      src: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
    })
  }, _react.default.createElement(Meta, {
    title: "Europe Street beat",
    description: "www.instagram.com"
  }));
};