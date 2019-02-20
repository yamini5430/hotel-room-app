webpackHotUpdate("static/development/pages/home.js",{

/***/ "./containers/RoomApp/RoomApp.js":
/*!***************************************!*\
  !*** ./containers/RoomApp/RoomApp.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_RoomList_RoomList__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/RoomList/RoomList */ "./components/RoomList/RoomList.js");
/* harmony import */ var _RoomApp_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./RoomApp.css */ "./containers/RoomApp/RoomApp.css");
/* harmony import */ var _RoomApp_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_RoomApp_css__WEBPACK_IMPORTED_MODULE_11__);









var _jsxFileName = "/Users/yaminisukhija/roomjs-app/containers/RoomApp/RoomApp.js";



var roomArr = ['room1', 'room2', 'room3', 'room4'];

var RoomApp =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(RoomApp, _Component);

  function RoomApp(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, RoomApp);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(RoomApp).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "getRoomDefaultData", function () {
      var newObj = roomArr.reduce(function (obj, v, i) {
        obj[v] = {
          enabled: i > 0 ? false : true,
          key: v + "-key",
          name: "Room " + (i + 1),
          data: {
            "adultCount": 1,
            "childrenCount": 0
          }
        };
        return obj;
      }, {});
      return newObj;
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "setRoomStatus", function (roomArrData, status) {
      var updatedState = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, _this.state.roomData);

      roomArrData.forEach(function (v, i) {
        var roomObj = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, _this.state.roomData[v]);

        roomObj["enabled"] = status;
        roomObj["data"] = {
          adultCount: 1,
          childrenCount: 0
        };
        updatedState[v] = roomObj;
      });

      _this.setState({
        roomData: updatedState
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "checkChangeHandler", function (key, event) {
      var checked = event.target.checked;
      var newRoomArr = [].concat(roomArr);
      newRoomArr.shift();

      if (checked) {
        var updatedArr = newRoomArr.filter(function (v) {
          return newRoomArr.indexOf(v) <= newRoomArr.indexOf(key);
        });

        _this.setRoomStatus(updatedArr, true);
      } else {
        var _updatedArr = newRoomArr.filter(function (v) {
          return newRoomArr.indexOf(v) >= newRoomArr.indexOf(key);
        });

        _this.setRoomStatus(_updatedArr, false);
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "updatePersonHandler", function (event, type, comp) {
      var selectValue = event.target.value;

      var updatedState = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, _this.state.roomData);

      var updatedRoomObj = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, _this.state.roomData[type]);

      updatedRoomObj["data"][comp] = selectValue;
      updatedState[type] = updatedRoomObj;

      _this.setState({
        roomData: updatedState
      });
    });

    _this.state = {
      roomData: {}
    };
    _this.handleSubmit = _this.handleSubmit.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(RoomApp, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var data = {};

      if (localStorage && localStorage.getItem('roomData')) {
        data = JSON.parse(localStorage.getItem('roomData'));
      } else {
        data = this.getRoomDefaultData();
      }

      this.setState({
        roomData: data
      });
    }
  }, {
    key: "handleSubmit",
    value: function handleSubmit() {
      localStorage.setItem('roomData', _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(this.state.roomData));
      alert("Hi User, Your data has been recorded!");
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "roomApp",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_components_RoomList_RoomList__WEBPACK_IMPORTED_MODULE_10__["default"], {
        data: this.state.roomData,
        checkChangeHandler: this.checkChangeHandler,
        updatePersonHandler: this.updatePersonHandler,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("button", {
        className: "submitDetails",
        onClick: this.handleSubmit,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        },
        __self: this
      }, "Submit"));
    }
  }]);

  return RoomApp;
}(react__WEBPACK_IMPORTED_MODULE_9__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (RoomApp);

/***/ })

})
//# sourceMappingURL=home.js.d9a68af3a6e1bdb366b7.hot-update.js.map