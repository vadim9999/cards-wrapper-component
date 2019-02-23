"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _antd = require("antd");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var Meta = _antd.Card.Meta;

var Card3 = function Card3(_ref) {
  var title = _ref.title,
      description = _ref.description,
      children = _ref.children,
      _ref$type = _ref.type,
      type = _ref$type === void 0 ? 'all' : _ref$type;
  var styles = {
    width: 300
  };

  var cover = _react.default.createElement("img", {
    alt: "example",
    src: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
  }); // actions


  var actions;

  switch (type) {
    case 'all':
      actions = [_react.default.createElement(_antd.Icon, {
        type: "setting"
      }), _react.default.createElement(_antd.Icon, {
        type: "edit"
      }), _react.default.createElement(_antd.Icon, {
        type: "ellipsis"
      })];
      break;

    default:
      actions = [];
  }

  return _react.default.createElement(_antd.Card, {
    style: styles,
    cover: cover,
    actions: actions
  }, _react.default.createElement(Meta, {
    avatar: _react.default.createElement(_antd.Avatar, {
      src: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
    }),
    title: title,
    description: description
  }));
};

var _default = Card3;
exports.default = _default;