"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _SpecialHeading = _interopRequireDefault(require("./SpecialHeading"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var Contact = function Contact() {
  var name_p1 = "Contact";
  var name_p2 = "We are born to create";
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
    className: "contact",
    id: "contact"
  }, /*#__PURE__*/_react.default.createElement(_SpecialHeading.default, {
    name_p1: name_p1,
    name_p2: name_p2
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "container"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "info row"
  }, /*#__PURE__*/_react.default.createElement("p", {
    className: "label"
  }, "Feel free to drop us a line at:"), /*#__PURE__*/_react.default.createElement("a", {
    href: "mailto:leonagency@mail.com?subject=Contact",
    className: "link"
  }, "leonagency@mail.com"), /*#__PURE__*/_react.default.createElement("div", {
    className: "social"
  }, "Find Us On Social Networks", /*#__PURE__*/_react.default.createElement("i", {
    className: "fab fa-youtube"
  }), /*#__PURE__*/_react.default.createElement("i", {
    className: "fab fa-facebook-f"
  }), /*#__PURE__*/_react.default.createElement("i", {
    className: "fab fa-twitter"
  }))))), /*#__PURE__*/_react.default.createElement("div", {
    className: "footer"
  }, "\xA9 2023 ", /*#__PURE__*/_react.default.createElement("span", null, "Leon"), " All Right Reserved"));
};
var _default = Contact;
exports.default = _default;
//# sourceMappingURL=Contact.js.map
