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
        filingYear = _ref.filingYear,
        dependentStatus = _ref.dependentStatus;
    return {
      filingYear: filingYear,
      filingStatus: filingStatus,
      dependentStatus: dependentStatus
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

  var setDependentStatus = function setDependentStatus(val) {
    return dispatch({
      type: 'SET_DEPENDENT_STATUS',
      payload: val
    });
  };

  return {
    state: state,
    setFilingYear: setFilingYear,
    setFilingStatus: setFilingStatus,
    setDependentStatus: setDependentStatus
  };
};

var TaxFilingCard = function TaxFilingCard() {
  var _useState = useState(),
      state = _useState.state,
      setFilingYear = _useState.setFilingYear,
      setFilingStatus = _useState.setFilingStatus,
      setDependentStatus = _useState.setDependentStatus;

  return __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Card"], {
    className: ' tax-filing-card',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 9
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["CardHeader"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 13
    }
  }, "Tax Filing Status"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["CardBody"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 13
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Label"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 17
    }
  }, "Did you file your 2019 taxes? ", ' ', " \xA0", __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    style: {
      fontSize: '12px',
      fontWeight: '700'
    },
    outline: true,
    type: "button",
    id: "fileTaxPopover",
    color: "info",
    size: "sm",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 21
    }
  }, "Info"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["UncontrolledPopover"], {
    trigger: "focus",
    placement: "top",
    target: "fileTaxPopover",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 21
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["PopoverBody"], {
    style: {
      fontWeight: '700'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 25
    }
  }, "If you filed both 2019 and 2018, your 2019 filing will be used. You must have filed either 2019 or 2018 taxes to qualify. If you have not filed 2018, or do not qualify for 2018 filing (e.g. you were a dependent), file your 2019 ASAP."))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["ButtonGroup"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
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
      lineNumber: 76,
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
      lineNumber: 81,
      columnNumber: 21
    }
  }, "No")), __jsx("hr", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 17
    }
  }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Label"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 17
    }
  }, "Were you claimed as a dependent in ", __jsx("u", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 56
    }
  }, state.filingYear), "? ", ' ', " \xA0", __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    style: {
      fontSize: '12px',
      fontWeight: '700'
    },
    outline: true,
    type: "button",
    id: "dependentPopover",
    color: "info",
    size: "sm",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 21
    }
  }, "Info"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["UncontrolledPopover"], {
    trigger: "focus",
    placement: "top",
    target: "dependentPopover",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 21
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["PopoverBody"], {
    style: {
      fontWeight: '700'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 25
    }
  }, "If you were claimed as a dependent on someone else", "'", "s tax return (e.g. your parents), you are not eligible to receive anything :(. However, if you were no longer a dependent in 2019, and haven", "'", "t filed yet, you should do so ASAP."))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["ButtonGroup"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 17
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    outline: true,
    color: "primary",
    onClick: function onClick() {
      return setDependentStatus(1);
    },
    active: state.dependentStatus === 1,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 21
    }
  }, "Yes"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    outline: true,
    color: "primary",
    onClick: function onClick() {
      return setDependentStatus(0);
    },
    active: state.dependentStatus === 0,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 21
    }
  }, "No")), __jsx("hr", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 17
    }
  }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Label"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 17
    }
  }, "Filing status for ", __jsx("u", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 42
    }
  }, state.filingYear), ":"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["ButtonGroup"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 17
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    outline: true,
    color: "primary",
    onClick: function onClick() {
      return setFilingStatus(1);
    },
    active: state.filingStatus === 1,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 21
    }
  }, "Single"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    outline: true,
    color: "primary",
    onClick: function onClick() {
      return setFilingStatus(2);
    },
    active: state.filingStatus === 2,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 21
    }
  }, "Married"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    outline: true,
    color: "primary",
    onClick: function onClick() {
      return setFilingStatus(3);
    },
    active: state.filingStatus === 3,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 21
    }
  }, "Head of Household"))));
};

/* harmony default export */ __webpack_exports__["default"] = (TaxFilingCard);

/***/ }),

/***/ "./reducers/store.js":
/*!***************************!*\
  !*** ./reducers/store.js ***!
  \***************************/
/*! exports provided: initializeStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initializeStore", function() { return initializeStore; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-devtools-extension */ "./node_modules/redux-devtools-extension/index.js");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__);


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



var initialState = {
  filingYear: 2019,
  filingStatus: 1,
  dependentStatus: -1,
  numOfChildren: 0,
  incomeAmount: 50000
};

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'SET_FILING_YEAR':
      return _objectSpread({}, state, {
        filingYear: action.payload
      });

    case 'SET_FILING_STATUS':
      return _objectSpread({}, state, {
        filingStatus: action.payload
      });

    case 'SET_DEPENDENT_STATUS':
      return _objectSpread({}, state, {
        dependentStatus: action.payload
      });

    case 'SET_NUM_OF_CHILDREN':
      return _objectSpread({}, state, {
        numOfChildren: action.payload
      });

    case 'SET_INCOME_AMOUNT':
      return _objectSpread({}, state, {
        incomeAmount: action.payload
      });

    default:
      return state;
  }
};

var initializeStore = function initializeStore() {
  var preloadedState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  return Object(redux__WEBPACK_IMPORTED_MODULE_1__["createStore"])(reducer, preloadedState, Object(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__["composeWithDevTools"])(Object(redux__WEBPACK_IMPORTED_MODULE_1__["applyMiddleware"])()));
};

/***/ })

})
//# sourceMappingURL=index.js.1da9ab6c5902824a9c0a.hot-update.js.map