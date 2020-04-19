webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/IncomeCard.js":
/*!**********************************!*\
  !*** ./components/IncomeCard.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
var _this = undefined,
    _jsxFileName = "/home/emre/project/stimulus-plus/components/IncomeCard.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var useState = function useState() {
  var state = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(function (_ref) {
    var filingYear = _ref.filingYear,
        incomeAmount = _ref.incomeAmount;
    return {
      filingYear: filingYear,
      incomeAmount: incomeAmount
    };
  }, react_redux__WEBPACK_IMPORTED_MODULE_1__["shallowEqual"]);
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();

  var setIncomeAmount = function setIncomeAmount(val) {
    return dispatch({
      type: 'SET_INCOME_AMOUNT',
      payload: val
    });
  };

  return {
    state: state,
    setIncomeAmount: setIncomeAmount
  };
};

var IncomeCard = function IncomeCard() {
  var _useState = useState(),
      state = _useState.state,
      setIncomeAmount = _useState.setIncomeAmount;

  var maxIncome = 400000;
  return __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Card"], {
    className: '',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 9
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["CardHeader"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 13
    }
  }, "Income"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["CardBody"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 13
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["CardText"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 17
    }
  }, "Enter", __jsx("a", {
    href: "https://www.irs.gov/e-file-providers/definition-of-adjusted-gross-income",
    target: "_blank",
    rel: "noreferrer noopener",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 21
    }
  }, "adjusted gross income"), " for ", __jsx("u", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 30
    }
  }, state.filingYear), " filing."), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Input"], {
    id: "income-input",
    value: state.incomeAmount,
    onChange: function onChange(e) {
      return setIncomeAmount(e.target.value);
    },
    type: "number",
    placeholder: "0",
    min: "0",
    max: maxIncome,
    step: "1000",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 17
    }
  }), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 17
    }
  }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["CustomInput"], {
    value: state.incomeAmount,
    onChange: function onChange(e) {
      return setIncomeAmount(e.target.value);
    },
    type: "range",
    step: "1000",
    min: "0",
    max: maxIncome,
    id: "incomeInput",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 17
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (IncomeCard);

/***/ })

})
//# sourceMappingURL=index.js.3f483ff2e55880293051.hot-update.js.map