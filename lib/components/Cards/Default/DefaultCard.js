"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DefaultCard5 = exports.DefaultCard4 = exports.DefaultCard3 = exports.DefaultCard2 = exports.DefaultCard1 = void 0;

var _react = _interopRequireWildcard(require("react"));

var _antd = require("antd");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

// <Icon type="picture" />
// import { Card } from 'antd';
// import { Card, Icon, Avatar } from 'antd';
// import { Card, Col, Row } from 'antd';
var Meta = _antd.Card.Meta;

var DefaultCard1 = function DefaultCard1() {
  return _react.default.createElement(_antd.Card, {
    title: "Card title",
    extra: _react.default.createElement("a", {
      href: "#"
    }, "More"),
    style: {
      width: 300
    }
  }, _react.default.createElement("p", null, "Card content"), _react.default.createElement("p", null, "Card content"), _react.default.createElement("p", null, "Card content"));
};

exports.DefaultCard1 = DefaultCard1;

var DefaultCard2 = function DefaultCard2() {
  return _react.default.createElement("div", {
    style: {
      background: '#ECECEC',
      padding: '30px'
    }
  }, _react.default.createElement(_antd.Card, {
    title: "Card title",
    bordered: false,
    style: {
      width: 300
    }
  }, _react.default.createElement("p", null, "Card content"), _react.default.createElement("p", null, "Card content"), _react.default.createElement("p", null, "Card content")));
};

exports.DefaultCard2 = DefaultCard2;

var DefaultCard3 = function DefaultCard3() {
  return _react.default.createElement(_antd.Card, {
    style: {
      width: 300
    },
    cover: _react.default.createElement("img", {
      alt: "example",
      src: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
    }),
    actions: [_react.default.createElement(_antd.Icon, {
      type: "setting"
    }), _react.default.createElement(_antd.Icon, {
      type: "edit"
    }), _react.default.createElement(_antd.Icon, {
      type: "ellipsis"
    })]
  }, _react.default.createElement(Meta, {
    avatar: _react.default.createElement(_antd.Avatar, {
      src: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
    }),
    title: "Card title",
    description: "This is the description"
  }));
}; // https://codesandbox.io/s/vvvpj6y603


exports.DefaultCard3 = DefaultCard3;

var DefaultCard4 = function DefaultCard4() {
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

exports.DefaultCard4 = DefaultCard4;

var DefaultCard5 = function DefaultCard5() {
  return _react.default.createElement("div", {
    style: {
      margin: 24
    }
  }, _react.default.createElement("p", {
    style: {
      marginBottom: 24
    }
  }, "Current antd version: ", version, " ", _react.default.createElement("br", null), "You can change antd version on the left panel (Dependencies section)."), _react.default.createElement(_antd.Card, {
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
    }), _react.default.createElement(Dropdown, {
      trigger: ["click"],
      overlay: _react.default.createElement(Menu, {
        onClick: function onClick() {
          return openNotification();
        }
      }, _react.default.createElement(Menu.Item, {
        key: "site-overview"
      }, _react.default.createElement(_antd.Icon, {
        type: "eye-o"
      }), _react.default.createElement("span", {
        style: {
          marginLeft: "6px"
        }
      }, "Overview")), _react.default.createElement(Menu.Item, {
        key: "marketing"
      }, _react.default.createElement(_antd.Icon, {
        type: "area-chart"
      }), _react.default.createElement("span", {
        style: {
          marginLeft: "6px"
        }
      }, "Marketing")), _react.default.createElement(Menu.Item, {
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

exports.DefaultCard5 = DefaultCard5;