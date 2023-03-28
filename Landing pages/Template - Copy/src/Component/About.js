"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _SpecialHeading = _interopRequireDefault(require("./SpecialHeading"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var About = function About() {
  var name_p1 = "About";
  var name_p2 = "Less is more work";
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_SpecialHeading.default, {
    name_p1: name_p1,
    name_p2: name_p2
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "about",
    id: "about"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "container "
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "about-content "
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "image"
  }, /*#__PURE__*/_react.default.createElement("img", {
    decoding: "async",
    src: "./imgaes/about.jpg",
    alt: ""
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "text"
  }, /*#__PURE__*/_react.default.createElement("p", null, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil nemo neque voluptate tempora velit cum non, fuga vitae architecto delectus sed maxime rerum impedit aliquam obcaecati, aut excepturi iusto laudantium!"), /*#__PURE__*/_react.default.createElement("hr", null), /*#__PURE__*/_react.default.createElement("p", null, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, sapiente. Velit iure exercitationem dolores nesciunt dolore. Eum officiis dolorum hic voluptate quaerat minima, similique inventore esse, alias, sed quo officia?"))))));
};
var _default = About;
exports.default = _default;
//# sourceMappingURL=About.js.map
