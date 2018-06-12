module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/result.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_router__ = __webpack_require__("next/router");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_redux__ = __webpack_require__("react-redux");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_redux__);
var _jsxFileName = "/Volumes/Work/Workspace/starlight/pages/result.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }




var taxData = [{
  min: 0,
  max: 18200,
  eachDollar: 0,
  plus: 0
}, {
  min: 18200,
  max: 37000,
  eachDollar: 0.19,
  plus: 0
}, {
  min: 37000,
  max: 87000,
  eachDollar: 0.325,
  plus: 3572
}, {
  min: 87000,
  max: 180000,
  eachDollar: 0.37,
  plus: 19822
}, {
  min: 180000,
  max: 'Infinite',
  eachDollar: 0.45,
  plus: 54232
}];

var Result =
/*#__PURE__*/
function (_Component) {
  _inherits(Result, _Component);

  function Result() {
    var _ref;

    var _temp, _this;

    _classCallCheck(this, Result);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_ref = Result.__proto__ || Object.getPrototypeOf(Result)).call.apply(_ref, [this].concat(args))), Object.defineProperty(_assertThisInitialized(_this), "handleGoBack", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        __WEBPACK_IMPORTED_MODULE_2_next_router___default.a.push('/');
      }
    }), _temp));
  }

  _createClass(Result, [{
    key: "generateOutput",
    value: function generateOutput() {
      var _props$data = this.props.data,
          firstname = _props$data.firstname,
          lastname = _props$data.lastname,
          annualSalary = _props$data.annualSalary,
          superRate = _props$data.superRate,
          period = _props$data.period;
      var grossIncome = annualSalary / 12;
      var incomeTax = 0;

      for (var _i = 0; _i < taxData.length; _i++) {
        var data = taxData[_i];
        var min = data.min,
            max = data.max,
            eachDollar = data.eachDollar,
            plus = data.plus;

        if (max !== 'Infinite') {
          if (annualSalary >= min && annualSalary < max) {
            incomeTax = (plus + eachDollar * (annualSalary - min)) / 12;
            break;
          }
        }

        incomeTax = (plus + eachDollar * (annualSalary - min)) / 12;
      }

      var netIncome = grossIncome - incomeTax;
      var superAmount = grossIncome * superRate / 100;
      var name = "".concat(firstname, " ").concat(lastname);
      return {
        name: name,
        period: period,
        grossIncome: Math.round(grossIncome),
        incomeTax: Math.round(incomeTax),
        netIncome: Math.round(netIncome),
        superAmount: Math.round(superAmount)
      };
    }
  }, {
    key: "render",
    value: function render() {
      var _generateOutput = this.generateOutput(),
          name = _generateOutput.name,
          period = _generateOutput.period,
          grossIncome = _generateOutput.grossIncome,
          incomeTax = _generateOutput.incomeTax,
          netIncome = _generateOutput.netIncome,
          superAmount = _generateOutput.superAmount;

      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        className: "jsx-3467649381" + " " + "result-table"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        className: "jsx-3467649381"
      }, "Output"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("table", {
        border: "1",
        cellpadding: "0",
        cellspacing: "0",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        className: "jsx-3467649381"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("thead", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        className: "jsx-3467649381"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("tr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        className: "jsx-3467649381"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("td", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        className: "jsx-3467649381"
      }, "Name"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("td", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        className: "jsx-3467649381"
      }, "Pay period"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("td", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        className: "jsx-3467649381"
      }, "Gross Income"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("td", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        className: "jsx-3467649381"
      }, "Income Tax"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("td", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        className: "jsx-3467649381"
      }, "Net Income"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("td", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        className: "jsx-3467649381"
      }, "Super Amount"))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("tbody", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        className: "jsx-3467649381"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("tr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        className: "jsx-3467649381"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("td", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        className: "jsx-3467649381"
      }, name), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("td", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        className: "jsx-3467649381"
      }, period), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("td", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        className: "jsx-3467649381"
      }, grossIncome), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("td", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        className: "jsx-3467649381"
      }, incomeTax), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("td", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        className: "jsx-3467649381"
      }, netIncome), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("td", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        className: "jsx-3467649381"
      }, superAmount)))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("button", {
        onClick: this.handleGoBack,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        className: "jsx-3467649381"
      }, "Go Back"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
        styleId: "3467649381",
        css: ".result-table.jsx-3467649381{position:absolute;left:50%;top:200px;-webkit-transform:translate(-50%,0);-ms-transform:translate(-50%,0);transform:translate(-50%,0);text-align:center;}.result-table.jsx-3467649381 td.jsx-3467649381{padding:20px;}.result-table.jsx-3467649381 button.jsx-3467649381{margin:10px 0;padding:10px 20px;text-transform:uppercase;background-color:#2196f3;color:white;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3Jlc3VsdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFvRW9CLEFBRytCLEFBUUwsQUFJQyxhQUhoQixDQUlvQixJQVpULFNBQ0MsS0FZZSxLQVhJLG9CQVlKLHlCQUNiLFlBQ2QsdUNBYm9CLGtCQUNwQiIsImZpbGUiOiJwYWdlcy9yZXN1bHQuanMiLCJzb3VyY2VSb290IjoiL1ZvbHVtZXMvV29yay9Xb3Jrc3BhY2Uvc3RhcmxpZ2h0Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcidcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCdcblxuY29uc3QgdGF4RGF0YSA9IFtcbiAgeyBtaW46IDAsIG1heDogMTgyMDAsIGVhY2hEb2xsYXI6IDAsIHBsdXM6IDAgfSxcbiAgeyBtaW46IDE4MjAwLCBtYXg6IDM3MDAwLCBlYWNoRG9sbGFyOiAwLjE5LCBwbHVzOiAwIH0sXG4gIHsgbWluOiAzNzAwMCwgbWF4OiA4NzAwMCwgZWFjaERvbGxhcjogMC4zMjUsIHBsdXM6IDM1NzIgfSxcbiAgeyBtaW46IDg3MDAwLCBtYXg6IDE4MDAwMCwgZWFjaERvbGxhcjogMC4zNywgcGx1czogMTk4MjIgfSxcbiAgeyBtaW46IDE4MDAwMCwgbWF4OiAnSW5maW5pdGUnLCBlYWNoRG9sbGFyOiAwLjQ1LCBwbHVzOiA1NDIzMn1cbl1cblxuY2xhc3MgUmVzdWx0IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgZ2VuZXJhdGVPdXRwdXQoKSB7XG4gICAgY29uc3QgeyBkYXRhOiB7IGZpcnN0bmFtZSwgbGFzdG5hbWUsIGFubnVhbFNhbGFyeSwgc3VwZXJSYXRlLCBwZXJpb2QgfSB9ID0gdGhpcy5wcm9wc1xuICAgIGNvbnN0IGdyb3NzSW5jb21lID0gYW5udWFsU2FsYXJ5IC8gMTI7XG4gICAgbGV0IGluY29tZVRheCA9IDA7XG5cbiAgICBmb3IgKGNvbnN0IGRhdGEgb2YgdGF4RGF0YSkge1xuICAgICAgY29uc3QgeyBtaW4sIG1heCwgZWFjaERvbGxhciwgcGx1cyB9ID0gZGF0YVxuICAgICAgaWYgKG1heCAhPT0gJ0luZmluaXRlJykge1xuICAgICAgICBpZiAoYW5udWFsU2FsYXJ5ID49IG1pbiAmJiBhbm51YWxTYWxhcnkgPCBtYXgpIHtcbiAgICAgICAgICBpbmNvbWVUYXggPSAocGx1cyArIGVhY2hEb2xsYXIgKiAoYW5udWFsU2FsYXJ5IC0gbWluKSkgLyAxMlxuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGluY29tZVRheCA9IChwbHVzICsgZWFjaERvbGxhciAqIChhbm51YWxTYWxhcnkgLSBtaW4pKSAvIDEyXG4gICAgfVxuXG4gICAgY29uc3QgbmV0SW5jb21lID0gZ3Jvc3NJbmNvbWUgLSBpbmNvbWVUYXhcbiAgICBjb25zdCBzdXBlckFtb3VudCA9IGdyb3NzSW5jb21lICogc3VwZXJSYXRlIC8gMTAwXG4gICAgY29uc3QgbmFtZSA9IGAke2ZpcnN0bmFtZX0gJHtsYXN0bmFtZX1gXG5cbiAgICByZXR1cm4geyBuYW1lLCBwZXJpb2QsIGdyb3NzSW5jb21lOiBNYXRoLnJvdW5kKGdyb3NzSW5jb21lKSwgaW5jb21lVGF4OiBNYXRoLnJvdW5kKGluY29tZVRheCksIG5ldEluY29tZTogTWF0aC5yb3VuZChuZXRJbmNvbWUpLCBzdXBlckFtb3VudDogTWF0aC5yb3VuZChzdXBlckFtb3VudCkgfVxuICB9XG5cbiAgaGFuZGxlR29CYWNrID0gKCkgPT4ge1xuICAgIFJvdXRlci5wdXNoKCcvJylcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IG5hbWUsIHBlcmlvZCwgZ3Jvc3NJbmNvbWUsIGluY29tZVRheCwgbmV0SW5jb21lLCBzdXBlckFtb3VudCB9ID0gdGhpcy5nZW5lcmF0ZU91dHB1dCgpXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVzdWx0LXRhYmxlXCI+XG4gICAgICAgIDxoMz5PdXRwdXQ8L2gzPlxuICAgICAgICA8dGFibGUgYm9yZGVyPVwiMVwiIGNlbGxwYWRkaW5nPVwiMFwiIGNlbGxzcGFjaW5nPVwiMFwiPlxuICAgICAgICAgIDx0aGVhZD5cbiAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgPHRkPk5hbWU8L3RkPlxuICAgICAgICAgICAgICA8dGQ+UGF5IHBlcmlvZDwvdGQ+XG4gICAgICAgICAgICAgIDx0ZD5Hcm9zcyBJbmNvbWU8L3RkPlxuICAgICAgICAgICAgICA8dGQ+SW5jb21lIFRheDwvdGQ+XG4gICAgICAgICAgICAgIDx0ZD5OZXQgSW5jb21lPC90ZD5cbiAgICAgICAgICAgICAgPHRkPlN1cGVyIEFtb3VudDwvdGQ+XG4gICAgICAgICAgICA8L3RyPlxuICAgICAgICAgIDwvdGhlYWQ+XG4gICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICA8dGQ+e25hbWV9PC90ZD5cbiAgICAgICAgICAgICAgPHRkPntwZXJpb2R9PC90ZD5cbiAgICAgICAgICAgICAgPHRkPntncm9zc0luY29tZX08L3RkPlxuICAgICAgICAgICAgICA8dGQ+e2luY29tZVRheH08L3RkPlxuICAgICAgICAgICAgICA8dGQ+e25ldEluY29tZX08L3RkPlxuICAgICAgICAgICAgICA8dGQ+e3N1cGVyQW1vdW50fTwvdGQ+XG4gICAgICAgICAgICA8L3RyPlxuICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgIDwvdGFibGU+XG4gICAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy5oYW5kbGVHb0JhY2t9PkdvIEJhY2s8L2J1dHRvbj5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIC5yZXN1bHQtdGFibGUge1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICAgICAgdG9wOiAyMDBweDtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDApO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5yZXN1bHQtdGFibGUgdGQge1xuICAgICAgICAgICAgcGFkZGluZzogMjBweDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAucmVzdWx0LXRhYmxlIGJ1dHRvbiB7XG4gICAgICAgICAgICBtYXJnaW46IDEwcHggMDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjE5NmYzO1xuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgIH1cbiAgICAgICAgYH1cbiAgICAgICAgPC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5jb25zdCBzZWxlY3RvcnMgPSAoc3RhdGUpID0+IHtcbiAgY29uc3QgeyBkYXRhIH0gPSBzdGF0ZVxuICByZXR1cm4geyBkYXRhIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChzZWxlY3RvcnMpKFJlc3VsdCkiXX0= */\n/*@ sourceURL=pages/result.js */"
      }));
    }
  }]);

  return Result;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

var selectors = function selectors(state) {
  var data = state.data;
  return {
    data: data
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(__WEBPACK_IMPORTED_MODULE_3_react_redux__["connect"])(selectors)(Result));

/***/ }),

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/result.js");


/***/ }),

/***/ "next/router":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-redux":
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "styled-jsx/style":
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=result.js.map