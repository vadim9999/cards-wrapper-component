"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _antd = require("antd");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var Meta = _antd.Card.Meta;

var openNotification = function openNotification() {
  _antd.message.info("This is a normal message");
};

var Card5 = function Card5() {
  var styles = {
    width: 300
  };
  return _react.default.createElement("div", {
    style: {
      margin: 24
    }
  }, _react.default.createElement("p", {
    style: {
      marginBottom: 24
    }
  }, "Current antd version: ", _antd.version, " ", _react.default.createElement("br", null), "You can change antd version on the left panel (Dependencies section)."), _react.default.createElement(_antd.Card, {
    style: {
      width: 300
    },
    cover: _react.default.createElement("img", {
      alt: "site preview",
      src: "https://via.placeholder.com/350x250"
    }),
    actions: [_react.default.createElement(_antd.Icon, {
      className: "card-action-content",
      type: "edit",
      onClick: function onClick() {
        return openNotification();
      }
    }), _react.default.createElement(_antd.Icon, {
      className: "card-action-content",
      type: "delete",
      onClick: function onClick() {
        return openNotification();
      }
    }), _react.default.createElement(_antd.Dropdown, {
      trigger: ["click"],
      overlay: _react.default.createElement(_antd.Menu, {
        onClick: function onClick() {
          return openNotification();
        }
      }, _react.default.createElement(_antd.Menu.Item, {
        key: "site-overview"
      }, _react.default.createElement(_antd.Icon, {
        type: "eye-o"
      }), _react.default.createElement("span", {
        style: {
          marginLeft: "6px"
        }
      }, "Overview")), _react.default.createElement(_antd.Menu.Item, {
        key: "marketing"
      }, _react.default.createElement(_antd.Icon, {
        type: "area-chart"
      }), _react.default.createElement("span", {
        style: {
          marginLeft: "6px"
        }
      }, "Marketing")), _react.default.createElement(_antd.Menu.Item, {
        key: "activity"
      }, _react.default.createElement(_antd.Icon, {
        type: "calendar"
      }), _react.default.createElement("span", {
        style: {
          marginLeft: "6px"
        }
      }, "Activity")))
    }, _react.default.createElement(_antd.Icon, {
      className: "card-action-content",
      type: "ellipsis"
    }))]
  }, _react.default.createElement(_antd.Card.Meta, {
    title: "card title",
    description: "description"
  })));
};

var _default = Card5;
exports.default = _default;