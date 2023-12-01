"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _react = _interopRequireDefault(require("react"));
var _RefreshIcon = _interopRequireDefault(require("./RefreshIcon"));
var _UploadIcon = _interopRequireDefault(require("./UploadIcon"));
var _excluded = ["image"];
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var List = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2["default"])(List, _React$Component);
  var _super = _createSuper(List);
  function List() {
    var _this;
    (0, _classCallCheck2["default"])(this, List);
    _this = _super.call(this);
    _this.state = {
      spin: false
    };
    return _this;
  }
  (0, _createClass2["default"])(List, [{
    key: "render",
    value: function render() {
      var _this2 = this;
      var _this$props = this.props,
        _this$props$image = _this$props.image,
        uid = _this$props$image.uid,
        name = _this$props$image.name,
        size = _this$props$image.size,
        done = _this$props$image.done,
        abort = _this$props$image.abort,
        click = _this$props$image.click,
        error = _this$props$image.error,
        remove = _this$props$image.remove,
        source = _this$props$image.source,
        upload = _this$props$image.upload,
        refresh = _this$props$image.refresh,
        progress = _this$props$image.progress,
        uploading = _this$props$image.uploading,
        props = (0, _objectWithoutProperties2["default"])(_this$props, _excluded),
        spin = this.state.spin,
        showProgress = !done && !error ? "__active" : "";
      return /*#__PURE__*/_react["default"].createElement("div", (0, _extends2["default"])({}, props, {
        key: uid,
        className: "rug-list"
      }), uploading && /*#__PURE__*/_react["default"].createElement("div", {
        className: "rug-list-progress ".concat(showProgress),
        style: {
          width: "".concat(progress, "%")
        }
      }), uploading && /*#__PURE__*/_react["default"].createElement("span", {
        className: "rug-list-progress-count ".concat(showProgress)
      }, progress || 0, "%"), !(done || error || uploading) && /*#__PURE__*/_react["default"].createElement("div", {
        onClick: upload,
        className: "rug-list-upload-button"
      }, /*#__PURE__*/_react["default"].createElement(_UploadIcon["default"], null)), error && typeof refresh === "function" && /*#__PURE__*/_react["default"].createElement("div", {
        onClick: function onClick() {
          if (spin) return;
          _this2.setState({
            spin: true
          });
          setTimeout(function () {
            _this2.setState({
              spin: false
            });
            refresh();
          }, 700);
        },
        className: "rug-list-refresh ".concat(spin ? "__spin" : "")
      }, /*#__PURE__*/_react["default"].createElement("div", {
        style: {
          padding: 3
        }
      }, /*#__PURE__*/_react["default"].createElement(_RefreshIcon["default"], null))), /*#__PURE__*/_react["default"].createElement("div", {
        className: "rug-list-image",
        onClick: click
      }, /*#__PURE__*/_react["default"].createElement("img", {
        src: source,
        alt: name
      })), /*#__PURE__*/_react["default"].createElement("div", {
        className: "rug-list-content",
        onClick: click
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "rug-list-name"
      }, name), /*#__PURE__*/_react["default"].createElement("div", {
        className: "rug-list-size"
      }, size)), /*#__PURE__*/_react["default"].createElement("div", {
        className: "rug-list-remove",
        onClick: remove
      }, /*#__PURE__*/_react["default"].createElement("svg", {
        viewBox: "0 0 40 40"
      }, /*#__PURE__*/_react["default"].createElement("path", {
        stroke: "current",
        strokeLinecap: "round",
        strokeWidth: "4",
        d: "M 10,10 L 30,30 M 30,10 L 10,30"
      }))));
    }
  }]);
  return List;
}(_react["default"].Component);
exports["default"] = List;