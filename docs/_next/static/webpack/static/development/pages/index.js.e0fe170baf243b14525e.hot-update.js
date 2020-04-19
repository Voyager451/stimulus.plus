webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/TaxFilingCard.js":
/*!*************************************!*\
  !*** ./components/TaxFilingCard.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
var _this = undefined,
    _jsxFileName = "/home/emre/project/stimulus-plus/components/TaxFilingCard.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var useState = function useState() {
  var state = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(function (_ref) {
    var filingStatus = _ref.filingStatus,
        filingYear = _ref.filingYear;
    return {
      filingYear: filingYear,
      filingStatus: filingStatus
    };
  }, react_redux__WEBPACK_IMPORTED_MODULE_1__["shallowEqual"]);
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();

  var setFilingYear = function setFilingYear(val) {
    return dispatch({
      type: 'SET_FILING_YEAR',
      payload: val
    });
  };

  var setFilingStatus = function setFilingStatus(val) {
    return dispatch({
      type: 'SET_FILING_STATUS',
      payload: val
    });
  };

  return {
    state: state,
    setFilingYear: setFilingYear,
    setFilingStatus: setFilingStatus
  };
};

var TaxFilingCard = function TaxFilingCard() {
  var _useState = useState(),
      state = _useState.state,
      setFilingYear = _useState.setFilingYear,
      setFilingStatus = _useState.setFilingStatus;

  return __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Card"], {
    className: ' tax-filing-card',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 9
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["CardHeader"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 13
    }
  }, "Tax Filing Status"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["CardBody"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 13
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Label"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 17
    }
  }, "Did you file your 2019 taxes? ", '  ', __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    style: {
      fontSize: '12px',
      fontWeight: '700'
    },
    outline: true,
    type: "button",
    id: "fileTaxPopover",
    color: "secondary",
    size: "sm",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 21
    }
  }, "Info"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["UncontrolledPopover"], {
    trigger: "focus",
    placement: "top",
    target: "fileTaxPopover",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 21
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["PopoverHeader"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 25
    }
  }, "Focus Trigger"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["PopoverBody"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 25
    }
  }, "Focusing on the trigging element makes this popover appear. Blurring (clicking away) makes it disappear. You cannot select this text as the popover will disappear when you try."))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["ButtonGroup"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 17
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    outline: true,
    color: "primary",
    onClick: function onClick() {
      return setFilingYear(2019);
    },
    active: state.filingYear === 2019,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 21
    }
  }, "Yes"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    outline: true,
    color: "primary",
    onClick: function onClick() {
      return setFilingYear(2018);
    },
    active: state.filingYear === 2018,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 21
    }
  }, "No")), __jsx("hr", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 17
    }
  }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Label"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 17
    }
  }, "Filing status for ", __jsx("u", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 42
    }
  }, state.filingYear), ":"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["ButtonGroup"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 17
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    color: "secondary",
    onClick: function onClick() {
      return setFilingStatus(1);
    },
    active: state.filingStatus === 1,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 21
    }
  }, "Single"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    color: "secondary",
    onClick: function onClick() {
      return setFilingStatus(2);
    },
    active: state.filingStatus === 2,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 21
    }
  }, "Married"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    color: "secondary",
    onClick: function onClick() {
      return setFilingStatus(3);
    },
    active: state.filingStatus === 3,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 21
    }
  }, "Head of Household"))));
};

/* harmony default export */ __webpack_exports__["default"] = (TaxFilingCard);

/***/ })

})
//# sourceMappingURL=index.js.e0fe170baf243b14525e.hot-update.js.map