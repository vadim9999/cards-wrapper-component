"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _antd = require("antd");

var _ = require("../..");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var DefaultCardsExample = function DefaultCardsExample() {
  return _react.default.createElement(_react.Fragment, null, _react.default.createElement(_antd.Divider, null), _react.default.createElement(_.DefaultCard1, null), _react.default.createElement(_antd.Divider, null), _react.default.createElement(_.DefaultCard2, null), _react.default.createElement(_antd.Divider, null), _react.default.createElement(_.DefaultCard3, null), _react.default.createElement(_antd.Divider, null), _react.default.createElement(_.DefaultCard4, null), _react.default.createElement(_antd.Divider, null), _react.default.createElement(_.DefaultCard5, null), _react.default.createElement(_antd.Divider, null));
};

var _default = DefaultCardsExample;
exports.default = _default;