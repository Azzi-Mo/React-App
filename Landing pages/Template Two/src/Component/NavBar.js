import React from "react";
// import items from "./Data";

// eslint-disable-next-line no-undef
// const allCategories = [...new Set(items.map((item) => item.category))];
// eslint-disable-next-line react-hooks/rules-of-hooks
// const [categories] = useState(allCategories);

const NavBar = () => {
  // if (!categories.length) {
  //   return null;
  // }

  return /*#__PURE__*/React.createElement("section", {
    className: "navbar container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "Logo"
  }, /*#__PURE__*/React.createElement("img", {
    decoding: "async",
    className: "logo",
    src: "./imgaes/logo.png",
    alt: "navbar logo"
  })), /*#__PURE__*/React.createElement("div", {
    className: "icon"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-bars"
  }), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "#services"
  }, "Services")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "#portfolio"
  }, "Portfolio")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "#contact"
  }, "Contact")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "#about"
  }, "About")))));
};
export default NavBar;
//# sourceMappingURL=NavBar.js.map
