webpackHotUpdate(4,{

/***/ "./components/InputForm.js":
false,

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("./node_modules/styled-jsx/style.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_router__ = __webpack_require__("./node_modules/next/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_redux__ = __webpack_require__("./node_modules/react-redux/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__store_js__ = __webpack_require__("./store.js");
var _jsxFileName = "/Volumes/Work/Workspace/starlight/pages/index.js";


(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }






var Index =
/*#__PURE__*/
function (_Component) {
  _inherits(Index, _Component);

  function Index() {
    var _ref;

    var _temp, _this;

    _classCallCheck(this, Index);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), Object.defineProperty(_assertThisInitialized(_this), "handleSubmit", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(evt) {
        evt.preventDefault();

        if (!evt.target.checkValidity()) {
          return;
        }

        var data = {};
        var fields = ['firstname', 'lastname', 'annualSalary', 'superRate', 'period'];
        fields.forEach(function (field) {
          data[field] = document.getElementsByName(field)[0].value;
        });

        _this.props.setData(data);

        __WEBPACK_IMPORTED_MODULE_2_next_router___default.a.push('/result');
      }
    }), _temp));
  }

  _createClass(Index, [{
    key: "render",
    value: function render() {
      var _props$data = this.props.data,
          firstname = _props$data.firstname,
          lastname = _props$data.lastname,
          annualSalary = _props$data.annualSalary,
          superRate = _props$data.superRate,
          period = _props$data.period;
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("form", {
        onSubmit: this.handleSubmit,
        noValidate: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        className: "jsx-3738109858" + " " + "form"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        className: "jsx-3738109858" + " " + "form-group"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        className: "jsx-3738109858"
      }, "First Name:"), " ", __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("input", {
        type: "text",
        name: "firstname",
        value: firstname,
        required: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        className: "jsx-3738109858"
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        className: "jsx-3738109858" + " " + "form-group"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        className: "jsx-3738109858"
      }, "Last Name:"), " ", __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("input", {
        type: "text",
        name: "lastname",
        value: lastname,
        required: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        className: "jsx-3738109858"
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        className: "jsx-3738109858" + " " + "form-group"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        className: "jsx-3738109858"
      }, "Annual Salary:"), " ", __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("input", {
        type: "number",
        name: "annualSalary",
        value: annualSalary,
        required: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        className: "jsx-3738109858"
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        className: "jsx-3738109858" + " " + "form-group"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        className: "jsx-3738109858"
      }, "Super Rate:"), " ", __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("input", {
        type: "number",
        name: "superRate",
        value: superRate,
        required: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        className: "jsx-3738109858"
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        className: "jsx-3738109858" + " " + "form-group"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        className: "jsx-3738109858"
      }, "Payment Start Date:"), " ", __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("input", {
        type: "text",
        name: "period",
        value: period,
        required: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        className: "jsx-3738109858"
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        className: "jsx-3738109858" + " " + "form-group"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("button", {
        type: "submit",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        className: "jsx-3738109858"
      }, "Calculate")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
        styleId: "3738109858",
        css: ".form.jsx-3738109858{position:fixed;left:50%;top:200px;-webkit-transform:translate(-50%,0);-ms-transform:translate(-50%,0);transform:translate(-50%,0);text-align:center;}.form.jsx-3738109858 .form-group.jsx-3738109858{margin:10px 0;}.form.jsx-3738109858 .form-group.jsx-3738109858 label.jsx-3738109858{display:inline-block;width:200px;margin-right:15px;text-align:right;}.form.jsx-3738109858 .form-group.jsx-3738109858 input.jsx-3738109858{height:20px;padding:5px;}.form.jsx-3738109858 .form-group.jsx-3738109858 button.jsx-3738109858{margin:10px 0;padding:10px 20px;text-transform:uppercase;background-color:#2196f3;color:white;}.form.jsx-3738109858 .form-group.jsx-3738109858 button.jsx-3738109858:focus{outline:none;box-shadow:none;}.form.jsx-3738109858 .form-group.jsx-3738109858 input.jsx-3738109858:focus{outline:none;}.form.jsx-3738109858 .form-group.jsx-3738109858 input.jsx-3738109858:invalid{border:1px solid red;color:red;}.form.jsx-3738109858 .form-group.jsx-3738109858 input.jsx-3738109858:required.jsx-3738109858::-webkit-input-placeholder{color:red;opacity:1;}.form.jsx-3738109858 .form-group.jsx-3738109858 input.jsx-3738109858:required.jsx-3738109858::-moz-placeholder{color:red;opacity:1;}.form.jsx-3738109858 .form-group.jsx-3738109858 input.jsx-3738109858:required.jsx-3738109858:-ms-input-placeholder{color:red;opacity:1;}.form.jsx-3738109858 .form-group.jsx-3738109858 input.jsx-3738109858:required.jsx-3738109858::placeholder{color:red;opacity:1;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTZDb0IsQUFHNEIsQUFRRCxBQUlPLEFBT1QsQUFLRSxBQVFELEFBS0EsQUFJUSxBQUtYLFVBQ0EsRUEzQkUsQ0FhSSxBQUtsQixDQTdCQSxBQWdCb0IsQ0F4QlQsS0ErQ1gsQ0FuQ2MsQUE2QkYsR0F4Q0EsQUFtQlosS0FhQSxFQVNBLENBakIyQixDQVpQLENBWFcsaUJBWVosTUFZUSxXQVgzQixjQVljLFlBQ2Qsb0NBekJvQixrQkFDcEIiLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJzb3VyY2VSb290IjoiL1ZvbHVtZXMvV29yay9Xb3Jrc3BhY2Uvc3RhcmxpZ2h0Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcidcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQgeyBzZXREYXRhIH0gZnJvbSAnLi4vc3RvcmUuanMnXG5cbmNsYXNzIEluZGV4IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgaGFuZGxlU3VibWl0ID0gKGV2dCkgPT4ge1xuICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGlmICghZXZ0LnRhcmdldC5jaGVja1ZhbGlkaXR5KCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBkYXRhID0ge31cbiAgICBjb25zdCBmaWVsZHMgPSBbJ2ZpcnN0bmFtZScsICdsYXN0bmFtZScsICdhbm51YWxTYWxhcnknLCAnc3VwZXJSYXRlJywgJ3BlcmlvZCddXG5cbiAgICBmaWVsZHMuZm9yRWFjaChmaWVsZCA9PiB7XG4gICAgICBkYXRhW2ZpZWxkXSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKGZpZWxkKVswXS52YWx1ZTtcbiAgICB9KVxuXG4gICAgdGhpcy5wcm9wcy5zZXREYXRhKGRhdGEpXG4gICAgUm91dGVyLnB1c2goJy9yZXN1bHQnKVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgZGF0YTogeyBmaXJzdG5hbWUsIGxhc3RuYW1lLCBhbm51YWxTYWxhcnksIHN1cGVyUmF0ZSwgcGVyaW9kIH0gfSA9IHRoaXMucHJvcHNcbiAgICByZXR1cm4gKFxuICAgICAgPGZvcm0gY2xhc3NOYW1lPVwiZm9ybVwiIG9uU3VibWl0PXt0aGlzLmhhbmRsZVN1Ym1pdH0gbm9WYWxpZGF0ZT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgPGxhYmVsPkZpcnN0IE5hbWU6PC9sYWJlbD4gPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImZpcnN0bmFtZVwiIHZhbHVlPXtmaXJzdG5hbWV9IHJlcXVpcmVkIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICA8bGFiZWw+TGFzdCBOYW1lOjwvbGFiZWw+IDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJsYXN0bmFtZVwiIHZhbHVlPXtsYXN0bmFtZX0gcmVxdWlyZWQgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgIDxsYWJlbD5Bbm51YWwgU2FsYXJ5OjwvbGFiZWw+IDxpbnB1dCB0eXBlPVwibnVtYmVyXCIgbmFtZT1cImFubnVhbFNhbGFyeVwiIHZhbHVlPXthbm51YWxTYWxhcnl9IHJlcXVpcmVkIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICA8bGFiZWw+U3VwZXIgUmF0ZTo8L2xhYmVsPiA8aW5wdXQgdHlwZT1cIm51bWJlclwiIG5hbWU9XCJzdXBlclJhdGVcIiB2YWx1ZT17c3VwZXJSYXRlfSByZXF1aXJlZCAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgPGxhYmVsPlBheW1lbnQgU3RhcnQgRGF0ZTo8L2xhYmVsPiA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwicGVyaW9kXCIgdmFsdWU9e3BlcmlvZH0gcmVxdWlyZWQgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPkNhbGN1bGF0ZTwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIC5mb3JtIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgICAgIGxlZnQ6IDUwJTtcbiAgICAgICAgICAgIHRvcDogMjAwcHg7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAwKTtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuZm9ybSAuZm9ybS1ncm91cCB7XG4gICAgICAgICAgICBtYXJnaW46IDEwcHggMDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuZm9ybSAuZm9ybS1ncm91cCBsYWJlbCB7XG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICB3aWR0aDogMjAwcHg7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuZm9ybSAuZm9ybS1ncm91cCBpbnB1dCB7XG4gICAgICAgICAgICBoZWlnaHQ6IDIwcHg7XG4gICAgICAgICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmZvcm0gLmZvcm0tZ3JvdXAgYnV0dG9uIHtcbiAgICAgICAgICAgIG1hcmdpbjogMTBweCAwO1xuICAgICAgICAgICAgcGFkZGluZzogMTBweCAyMHB4O1xuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyMTk2ZjM7XG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmZvcm0gLmZvcm0tZ3JvdXAgYnV0dG9uOmZvY3VzIHtcbiAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgICAgICBib3gtc2hhZG93OiBub25lO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5mb3JtIC5mb3JtLWdyb3VwIGlucHV0OmZvY3VzIHtcbiAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmZvcm0gLmZvcm0tZ3JvdXAgaW5wdXQ6aW52YWxpZCB7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XG4gICAgICAgICAgICBjb2xvcjogcmVkO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5mb3JtIC5mb3JtLWdyb3VwIGlucHV0OnJlcXVpcmVkOjpwbGFjZWhvbGRlciB7XG4gICAgICAgICAgICBjb2xvcjogcmVkO1xuICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICB9ICAgICAgICAgIFxuICAgICAgICBgfVxuICAgICAgICA8L3N0eWxlPlxuICAgICAgPC9mb3JtPlxuICAgIClcbiAgfVxufVxuXG5cbmNvbnN0IHNlbGVjdG9ycyA9IHN0YXRlID0+IHtcbiAgY29uc3QgeyBkYXRhIH0gPSBzdGF0ZVxuICByZXR1cm4geyBkYXRhIH1cbn1cblxuY29uc3QgYWN0aW9ucyA9IHtcbiAgc2V0RGF0YSxcbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChzZWxlY3RvcnMsIGFjdGlvbnMpKEluZGV4KVxuIl19 */\n/*@ sourceURL=pages/index.js */"
      }));
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return Index;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

var selectors = function selectors(state) {
  var data = state.data;
  return {
    data: data
  };
};

var actions = {
  setData: __WEBPACK_IMPORTED_MODULE_4__store_js__["b" /* setData */]
};

var _default = Object(__WEBPACK_IMPORTED_MODULE_3_react_redux__["b" /* connect */])(selectors, actions)(Index);

/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Index, "Index", "/Volumes/Work/Workspace/starlight/pages/index.js");
  reactHotLoader.register(selectors, "selectors", "/Volumes/Work/Workspace/starlight/pages/index.js");
  reactHotLoader.register(actions, "actions", "/Volumes/Work/Workspace/starlight/pages/index.js");
  reactHotLoader.register(_default, "default", "/Volumes/Work/Workspace/starlight/pages/index.js");
  leaveModule(module);
})();

;
    (function (Component, route) {
      if(!Component) return
      if (false) return
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=4.64594b2bee95a37151f3.hot-update.js.map