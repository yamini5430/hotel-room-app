module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/RoomList/BuildControl/BuildControl.css":
/*!***********************************************************!*\
  !*** ./components/RoomList/BuildControl/BuildControl.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/RoomList/BuildControl/BuildControl.js":
/*!**********************************************************!*\
  !*** ./components/RoomList/BuildControl/BuildControl.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _UI_SelectBox_SelectBox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../UI/SelectBox/SelectBox */ "./components/UI/SelectBox/SelectBox.js");



var buildControl = function buildControl(props) {
  var type = props.type;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "room-data"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "adult-count"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: ""
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Adults"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "(18+)")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_UI_SelectBox_SelectBox__WEBPACK_IMPORTED_MODULE_1__["default"], {
    defaultVal: props.peopleData.adultCount,
    updatePersonHandler: props.updatePersonHandler,
    disabledInfo: props.disabledInfo,
    identifier: "adultCount",
    optionsData: [1, 2],
    type: type
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "children-count"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: ""
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Children"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "(0-17)")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_UI_SelectBox_SelectBox__WEBPACK_IMPORTED_MODULE_1__["default"], {
    defaultVal: props.peopleData.childrenCount,
    updatePersonHandler: props.updatePersonHandler,
    disabledInfo: props.disabledInfo,
    identifier: "childrenCount",
    optionsData: [0, 1, 2],
    type: type
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (buildControl);

/***/ }),

/***/ "./components/RoomList/Room/Room.css":
/*!*******************************************!*\
  !*** ./components/RoomList/Room/Room.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/RoomList/Room/Room.js":
/*!******************************************!*\
  !*** ./components/RoomList/Room/Room.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _BuildControl_BuildControl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../BuildControl/BuildControl */ "./components/RoomList/BuildControl/BuildControl.js");
/* harmony import */ var _UI_CheckBox_CheckBox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../UI/CheckBox/CheckBox */ "./components/UI/CheckBox/CheckBox.js");




var Room = function Room(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "room" + (!props.data.enabled ? " disabled" : "")
  }, props.type != "room1" ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_UI_CheckBox_CheckBox__WEBPACK_IMPORTED_MODULE_2__["default"], {
    label: props.data.name,
    type: props.type,
    checkChangeHandler: props.checkChangeHandler,
    isChecked: props.data.enabled
  }) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "title"
  }, props.data.name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_BuildControl_BuildControl__WEBPACK_IMPORTED_MODULE_1__["default"], {
    disabledInfo: !props.data.enabled,
    peopleData: props.data.data,
    updatePersonHandler: props.updatePersonHandler,
    type: props.type
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Room);

/***/ }),

/***/ "./components/RoomList/RoomList.js":
/*!*****************************************!*\
  !*** ./components/RoomList/RoomList.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Room_Room__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Room/Room */ "./components/RoomList/Room/Room.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }




var RoomList = function RoomList(props) {
  var transformedData = props.data ? Object.keys(props.data).map(function (igKey) {
    return _toConsumableArray(Array(props.data[igKey])).map(function (data, index) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Room_Room__WEBPACK_IMPORTED_MODULE_1__["default"], {
        type: igKey,
        key: data['key'],
        data: data,
        checkChangeHandler: props.checkChangeHandler,
        updatePersonHandler: props.updatePersonHandler
      });
    });
  }).reduce(function (arr, curr) {
    return arr.concat(curr);
  }, []) : [];
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "roomList"
  }, transformedData);
};

/* harmony default export */ __webpack_exports__["default"] = (RoomList);

/***/ }),

/***/ "./components/UI/CheckBox/CheckBox.js":
/*!********************************************!*\
  !*** ./components/UI/CheckBox/CheckBox.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var Checkbox =
/*#__PURE__*/
function (_Component) {
  _inherits(Checkbox, _Component);

  function Checkbox() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Checkbox);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Checkbox)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      isChecked: _this.props.isChecked || false
    });

    _defineProperty(_assertThisInitialized(_this), "toggleCheckboxChange", function (e) {
      var _this$props = _this.props,
          checkChangeHandler = _this$props.checkChangeHandler,
          type = _this$props.type;

      _this.setState(function (_ref) {
        var isChecked = _ref.isChecked;
        return {
          isChecked: !isChecked
        };
      });

      checkChangeHandler(type, e);
    });

    return _this;
  }

  _createClass(Checkbox, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.isChecked != this.state.isChecked) {
        this.setState({
          isChecked: nextProps.isChecked
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var label = this.props.label;
      var isChecked = this.state.isChecked;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "checkbox"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "checkbox",
        value: label,
        checked: isChecked,
        onChange: this.toggleCheckboxChange
      }), label));
    }
  }]);

  return Checkbox;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]); // Checkbox.propTypes = {
//   label: PropTypes.string.isRequired,
//   handleCheckboxChange: PropTypes.func.isRequired,
// };


/* harmony default export */ __webpack_exports__["default"] = (Checkbox);

/***/ }),

/***/ "./components/UI/SelectBox/SelectBox.js":
/*!**********************************************!*\
  !*** ./components/UI/SelectBox/SelectBox.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var SelectBox =
/*#__PURE__*/
function (_React$Component) {
  _inherits(SelectBox, _React$Component);

  function SelectBox(props) {
    var _this;

    _classCallCheck(this, SelectBox);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SelectBox).call(this, props));
    _this.state = {
      value: props.defaultVal
    };
    _this.handleChange = _this.handleChange.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(SelectBox, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.defaultVal != this.state.defaultVal) {
        this.setState({
          value: nextProps.defaultVal
        });
      }
    }
  }, {
    key: "handleChange",
    value: function handleChange(event) {
      this.setState({
        value: event.target.value
      });
      this.props.updatePersonHandler(event, this.props.type, this.props.identifier);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("select", {
        value: this.state.value,
        onChange: this.handleChange,
        disabled: this.props.disabledInfo
      }, this.props.optionsData.map(function (v) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
          key: _this2.props.identifier + v,
          value: v
        }, v);
      }));
    }
  }]);

  return SelectBox;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (SelectBox);

/***/ }),

/***/ "./containers/RoomApp/RoomApp.css":
/*!****************************************!*\
  !*** ./containers/RoomApp/RoomApp.css ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./containers/RoomApp/RoomApp.js":
/*!***************************************!*\
  !*** ./containers/RoomApp/RoomApp.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_RoomList_RoomList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/RoomList/RoomList */ "./components/RoomList/RoomList.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var roomArr = ['room1', 'room2', 'room3', 'room4'];

var RoomApp =
/*#__PURE__*/
function (_Component) {
  _inherits(RoomApp, _Component);

  function RoomApp(props) {
    var _this;

    _classCallCheck(this, RoomApp);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(RoomApp).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "getRoomDefaultData", function () {
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

    _defineProperty(_assertThisInitialized(_this), "setRoomStatus", function (roomArrData, status) {
      var updatedState = _objectSpread({}, _this.state.roomData);

      roomArrData.forEach(function (v, i) {
        var roomObj = _objectSpread({}, _this.state.roomData[v]);

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

    _defineProperty(_assertThisInitialized(_this), "checkChangeHandler", function (key, event) {
      var checked = event.target.checked;
      var newRoomArr = [].concat(roomArr);

      var tempState = _objectSpread({}, _this.state.roomData);

      newRoomArr.shift();

      if (checked) {
        var updatedArr = newRoomArr.filter(function (v) {
          return newRoomArr.indexOf(v) <= newRoomArr.indexOf(key) && !tempState[v]["enabled"];
        });

        _this.setRoomStatus(updatedArr, true);
      } else {
        var _updatedArr = newRoomArr.filter(function (v) {
          return newRoomArr.indexOf(v) >= newRoomArr.indexOf(key) && tempState[v]["enabled"];
        });

        _this.setRoomStatus(_updatedArr, false);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "updatePersonHandler", function (event, type, comp) {
      var selectValue = event.target.value;

      var updatedState = _objectSpread({}, _this.state.roomData);

      var updatedRoomObj = _objectSpread({}, _this.state.roomData[type]);

      updatedRoomObj["data"][comp] = selectValue;
      updatedState[type] = updatedRoomObj;

      _this.setState({
        roomData: updatedState
      });
    });

    _this.state = {
      roomData: {}
    };
    _this.handleSubmit = _this.handleSubmit.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(RoomApp, [{
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
      localStorage.setItem('roomData', JSON.stringify(this.state.roomData));
      alert("Hi User, Your data has been recorded!");
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "roomApp"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_RoomList_RoomList__WEBPACK_IMPORTED_MODULE_1__["default"], {
        data: this.state.roomData,
        checkChangeHandler: this.checkChangeHandler,
        updatePersonHandler: this.updatePersonHandler
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        className: "submitDetails",
        onClick: this.handleSubmit
      }, "Submit"));
    }
  }]);

  return RoomApp;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (RoomApp);

/***/ }),

/***/ "./pages/home.js":
/*!***********************!*\
  !*** ./pages/home.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _containers_RoomApp_RoomApp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../containers/RoomApp/RoomApp */ "./containers/RoomApp/RoomApp.js");
/* harmony import */ var _containers_RoomApp_RoomApp_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../containers/RoomApp/RoomApp.css */ "./containers/RoomApp/RoomApp.css");
/* harmony import */ var _containers_RoomApp_RoomApp_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_containers_RoomApp_RoomApp_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_RoomList_Room_Room_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/RoomList/Room/Room.css */ "./components/RoomList/Room/Room.css");
/* harmony import */ var _components_RoomList_Room_Room_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_components_RoomList_Room_Room_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_RoomList_BuildControl_BuildControl_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/RoomList/BuildControl/BuildControl.css */ "./components/RoomList/BuildControl/BuildControl.css");
/* harmony import */ var _components_RoomList_BuildControl_BuildControl_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_components_RoomList_BuildControl_BuildControl_css__WEBPACK_IMPORTED_MODULE_4__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }







var Home =
/*#__PURE__*/
function (_Component) {
  _inherits(Home, _Component);

  function Home() {
    _classCallCheck(this, Home);

    return _possibleConstructorReturn(this, _getPrototypeOf(Home).apply(this, arguments));
  }

  _createClass(Home, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_RoomApp_RoomApp__WEBPACK_IMPORTED_MODULE_1__["default"], null));
    }
  }]);

  return Home;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home */ "./pages/home.js");



var App = function App() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_home__WEBPACK_IMPORTED_MODULE_1__["default"], null));
};

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/yaminisukhija/roomjs-app/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map