webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/ChildrenCard.js":
/*!************************************!*\
  !*** ./components/ChildrenCard.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
var _this = undefined,
    _jsxFileName = "/home/emre/project/stimulus-plus/components/ChildrenCard.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var useState = function useState() {
  var state = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(function (_ref) {
    var filingYear = _ref.filingYear,
        numOfChildren = _ref.numOfChildren;
    return {
      filingYear: filingYear,
      numOfChildren: numOfChildren
    };
  }, react_redux__WEBPACK_IMPORTED_MODULE_1__["shallowEqual"]);
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();

  var setNumOfChildren = function setNumOfChildren(val) {
    return dispatch({
      type: 'SET_NUM_OF_CHILDREN',
      payload: val
    });
  };

  return {
    state: state,
    setNumOfChildren: setNumOfChildren
  };
};

var ChildrenCard = function ChildrenCard() {
  var _useState = useState(),
      state = _useState.state,
      setNumOfChildren = _useState.setNumOfChildren;

  var maxChildren = 20;
  return __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Card"], {
    className: ' num-of-children-card',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 9
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["CardHeader"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 13
    }
  }, "# of Claimed Children"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["CardBody"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 13
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["CardText"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 17
    }
  }, "How many children (age 16 or younger) did you claim on your ", __jsx("u", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 87
    }
  }, state.filingYear), " filing?"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Input"], {
    type: "number",
    placeholder: "0",
    min: "0",
    max: maxChildren,
    onChange: function onChange(e) {
      return setNumOfChildren(e.target.value);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 17
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (ChildrenCard);

/***/ })

})
//# sourceMappingURL=index.js.e22d59aec01579625804.hot-update.js.map