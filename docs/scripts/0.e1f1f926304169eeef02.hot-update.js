webpackHotUpdate(0,{

/***/ 618:
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nfunction _typeof(obj) { return obj && typeof Symbol !== \"undefined\" && obj.constructor === Symbol ? \"symbol\" : typeof obj; }\n\nvar _extends = Object.assign || function (target) {\n  for (var i = 1; i < arguments.length; i++) {\n    var source = arguments[i];for (var key in source) {\n      if (Object.prototype.hasOwnProperty.call(source, key)) {\n        target[key] = source[key];\n      }\n    }\n  }return target;\n};\n\nvar _createClass = (function () {\n  function defineProperties(target, props) {\n    for (var i = 0; i < props.length; i++) {\n      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if (\"value\" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);\n    }\n  }return function (Constructor, protoProps, staticProps) {\n    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;\n  };\n})();\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(274);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _ufunc = __webpack_require__(170);\n\nvar _ufunc2 = _interopRequireDefault(_ufunc);\n\nvar _reactUikitBase = __webpack_require__(410);\n\nvar _reactUikitBase2 = _interopRequireDefault(_reactUikitBase);\n\nvar _cuid = __webpack_require__(393);\n\nvar _cuid2 = _interopRequireDefault(_cuid);\n\nvar _reactUikitTrigger = __webpack_require__(621);\n\nvar _reactUikitTrigger2 = _interopRequireDefault(_reactUikitTrigger);\n\nvar _posOffset = __webpack_require__(619);\n\nvar _posOffset2 = _interopRequireDefault(_posOffset);\n\nfunction _interopRequireDefault(obj) {\n  return obj && obj.__esModule ? obj : { default: obj };\n}\n\nfunction _classCallCheck(instance, Constructor) {\n  if (!(instance instanceof Constructor)) {\n    throw new TypeError(\"Cannot call a class as a function\");\n  }\n}\n\nfunction _possibleConstructorReturn(self, call) {\n  if (!self) {\n    throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");\n  }return call && ((typeof call === \"undefined\" ? \"undefined\" : _typeof(call)) === \"object\" || typeof call === \"function\") ? call : self;\n}\n\nfunction _inherits(subClass, superClass) {\n  if (typeof superClass !== \"function\" && superClass !== null) {\n    throw new TypeError(\"Super expression must either be null or a function, not \" + (typeof superClass === \"undefined\" ? \"undefined\" : _typeof(superClass)));\n  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;\n}\n\nvar Dropdown = (function (_React$Component) {\n  _inherits(Dropdown, _React$Component);\n\n  function Dropdown(props) {\n    _classCallCheck(this, Dropdown);\n\n    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Dropdown).call(this, props));\n\n    _this.state = {\n      opened: false\n    };\n\n    _this.dataId = props.kitid || (0, _cuid2.default)();\n\n    return _this;\n  }\n\n  _createClass(Dropdown, [{\n    key: 'componentDidMount',\n    value: function componentDidMount() {\n      var _this2 = this;\n\n      window.addEventListener('click', function () {\n        return _this2.handleListener();\n      }, true);\n    }\n  }, {\n    key: 'componentWillUnmount',\n    value: function componentWillUnmount() {\n      var _this3 = this;\n\n      window.removeEventListener('click', function () {\n        return _this3.handleListener();\n      }, false);\n    }\n  }, {\n    key: 'handleListener',\n    value: function handleListener(e) {\n      if (this.state.opened) {\n        var dropbody = _reactUikitBase2.default.helpers.queryData('dropdown-' + this.dataId);\n        dropbody.style.display = 'none';\n      }\n    }\n  }, {\n    key: 'handleTriggerClick',\n    value: function handleTriggerClick(e) {\n      var _this4 = this;\n\n      e.preventDefault();\n      var dropbody = _reactUikitBase2.default.helpers.queryData('dropdown-' + this.dataId);\n\n      dropbody.style.display = 'block';\n      dropbody.style.visibility = 'hidden';\n\n      var props = this.props;\n      var trigger = e.currentTarget;\n      var elementOffset = _posOffset2.default.offset(trigger, dropbody)(props.pos);\n\n      if (props.justify) {\n        var justify = _reactUikitBase2.default.helpers.queryData(props.justify);\n\n        dropbody.style.width = _posOffset2.default.dim(justify).width + 'px';\n      }\n\n      dropbody.style.top = elementOffset.top + 'px';\n      dropbody.style.left = elementOffset.left + 'px';\n\n      var animateIn = function animateIn() {\n        _this4.setState({ opened: true });\n        props.trigger.animate.in(dropbody);\n      };\n\n      var animateOut = function animateOut() {\n        _this4.setState({ opened: false });\n        props.trigger.animate.out(dropbody);\n      };\n\n      _ufunc2.default.either(animateIn, animateOut)(!this.state.opened);\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      var _this5 = this;\n\n      var props = this.props;\n      var kitid = _ufunc2.default.either(props.kitid, this.dataId)(props.kitid);\n\n      // CSS classes\n      var type = {\n        button: 'uk-button-dropdown',\n        'button-group': 'uk-button-group',\n        dropdown: null,\n        grid: 'uk-grid uk-dropdown-grid',\n        nav: 'uk-parent'\n      };\n\n      var cssClassNames = _reactUikitBase2.default.helpers.cleanClasses([type[props.type] || null, props.classes, props.className]);\n\n      var cssDropClassNames = _reactUikitBase2.default.helpers.cleanClasses([!props.blank ? 'uk-dropdown' : 'uk-dropdown-blank', props.small ? 'uk-dropdown-small' : null, props.navbar ? 'uk-dropdown-navbar' : null, props.scrollable ? 'uk-dropdown-scrollable' : null]);\n\n      // Elements\n      var dropdown = _react2.default.createElement('div', {\n        style: { width: _posOffset2.default.dim(this) },\n        'data-kitid': 'dropdown-' + kitid,\n        className: cssDropClassNames\n      }, props.children);\n\n      var trigger = _react2.default.createElement(_reactUikitTrigger2.default, _extends({}, props.trigger, {\n        kitid: kitid,\n        onClick: function onClick(e) {\n          return _this5.handleTriggerClick(e);\n        }\n      }));\n\n      var attr = {\n        'aria-haspopup': 'true',\n        'aria-expanded': this.state.opened ? 'true' : 'false',\n        'data-kitid': 'dropContainer-' + kitid\n      };\n\n      var div = _react2.default.createElement('div', _extends({\n        className: cssClassNames\n      }, attr), trigger, dropdown);\n\n      var list = _react2.default.createElement('li', _extends({\n        className: cssClassNames\n      }, attr), trigger, dropdown);\n\n      // Return Component\n      var component = _ufunc2.default.either(list, div);\n      return component(props.list || props.navbar);\n    }\n  }]);\n\n  return Dropdown;\n})(_react2.default.Component);\n\nDropdown.propTypes = {\n  blank: _react2.default.PropTypes.bool,\n  boundary: _react2.default.PropTypes.string,\n  children: _react2.default.PropTypes.any,\n  className: _react2.default.PropTypes.string,\n  classes: _react2.default.PropTypes.array,\n  grid: _react2.default.PropTypes.bool,\n  items: _react2.default.PropTypes.array,\n  justify: _react2.default.PropTypes.string,\n  kitid: _react2.default.PropTypes.string,\n  list: _react2.default.PropTypes.bool,\n  navbar: _react2.default.PropTypes.bool,\n  parent: _react2.default.PropTypes.bool,\n  pos: _react2.default.PropTypes.string,\n  scrollable: _react2.default.PropTypes.bool,\n  small: _react2.default.PropTypes.bool,\n  type: _react2.default.PropTypes.oneOf(['button', 'button-group', 'dropdown', 'grid', 'nav'])\n};\n;\n\nexports.default = _reactUikitBase2.default.base(Dropdown);\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vY29tcG9uZW50cy9yZWFjdC11aWtpdC1kcm9wZG93bi9saWIvZHJvcGRvd24uanM/ZWE1MiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7Ozs7QUFFYixJQUFJLFFBQVEsR0FBRyxNQUFNLENBQUMsTUFBTSxJQUFJLFVBQVUsTUFBTSxFQUFFO0FBQUUsT0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7QUFBRSxRQUFJLE1BQU0sR0FBRyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUUsS0FBSyxJQUFJLEdBQUcsSUFBSSxNQUFNLEVBQUU7QUFBRSxVQUFJLE1BQU0sQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLEVBQUU7QUFBRSxjQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO09BQUU7S0FBRTtHQUFHLE9BQU8sTUFBTSxDQUFDO0NBQUUsQ0FBQzs7QUFFalEsSUFBSSxZQUFZLEdBQUcsQ0FBQyxZQUFZO0FBQUUsV0FBUyxnQkFBZ0IsQ0FBQyxNQUFNLEVBQUUsS0FBSyxFQUFFO0FBQUUsU0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7QUFBRSxVQUFJLFVBQVUsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUUsVUFBVSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUMsVUFBVSxJQUFJLEtBQUssQ0FBRSxVQUFVLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBRSxJQUFJLE9BQU8sSUFBSSxVQUFVLEVBQUUsVUFBVSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUUsTUFBTSxDQUFDLGNBQWMsQ0FBQyxNQUFNLEVBQUUsVUFBVSxDQUFDLEdBQUcsRUFBRSxV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LE9BQUssRUFBRSxPQUFPLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxJQUFJO0FBQ3JDLFVBQVEsRUFBRSxPQUFPLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxNQUFNO0FBQzFDLFVBQVEsRUFBRSxPQUFPLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxHQUFHO0FBQ3ZDLFdBQVMsRUFBRSxPQUFPLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxNQUFNO0FBQzNDLFNBQU8sRUFBRSxPQUFPLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxLQUFLO0FBQ3hDLE1BQUksRUFBRSxPQUFPLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxJQUFJO0FBQ3BDLE9BQUssRUFBRSxPQUFPLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxLQUFLO0FBQ3RDLFNBQU8sRUFBRSxPQUFPLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxNQUFNO0FBQ3pDLE9BQUssRUFBRSxPQUFPLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxNQUFNO0FBQ3ZDLE1BQUksRUFBRSxPQUFPLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxJQUFJO0FBQ3BDLFFBQU0sRUFBRSxPQUFPLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxJQUFJO0FBQ3RDLFFBQU0sRUFBRSxPQUFPLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxJQUFJO0FBQ3RDLEtBQUcsRUFBRSxPQUFPLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxNQUFNO0FBQ3JDLFlBQVUsRUFBRSxPQUFPLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxJQUFJO0FBQzFDLE9BQUssRUFBRSxPQUFPLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxJQUFJO0FBQ3JDLE1BQUksRUFBRSxPQUFPLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxRQUFRLEVBQUUsY0FBYyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsS0FBSyxDQUFDLENBQUM7Q0FDN0YsQ0FBQztBQUNGLENBQUM7O0FBRUQsT0FBTyxDQUFDLE9BQU8sR0FBRyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyIsImZpbGUiOiI2MTguanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSAoZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSkoKTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX3VmdW5jID0gcmVxdWlyZSgndWZ1bmMnKTtcblxudmFyIF91ZnVuYzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF91ZnVuYyk7XG5cbnZhciBfcmVhY3RVaWtpdEJhc2UgPSByZXF1aXJlKCdyZWFjdC11aWtpdC1iYXNlJyk7XG5cbnZhciBfcmVhY3RVaWtpdEJhc2UyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3RVaWtpdEJhc2UpO1xuXG52YXIgX2N1aWQgPSByZXF1aXJlKCdjdWlkJyk7XG5cbnZhciBfY3VpZDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jdWlkKTtcblxudmFyIF9yZWFjdFVpa2l0VHJpZ2dlciA9IHJlcXVpcmUoJy4uLy4uL3JlYWN0LXVpa2l0LXRyaWdnZXInKTtcblxudmFyIF9yZWFjdFVpa2l0VHJpZ2dlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdFVpa2l0VHJpZ2dlcik7XG5cbnZhciBfcG9zT2Zmc2V0ID0gcmVxdWlyZSgnLi9wb3NPZmZzZXQnKTtcblxudmFyIF9wb3NPZmZzZXQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcG9zT2Zmc2V0KTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG52YXIgRHJvcGRvd24gPSAoZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgX2luaGVyaXRzKERyb3Bkb3duLCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBEcm9wZG93bihwcm9wcykge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBEcm9wZG93bik7XG5cbiAgICB2YXIgX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoRHJvcGRvd24pLmNhbGwodGhpcywgcHJvcHMpKTtcblxuICAgIF90aGlzLnN0YXRlID0ge1xuICAgICAgb3BlbmVkOiBmYWxzZVxuICAgIH07XG5cbiAgICBfdGhpcy5kYXRhSWQgPSBwcm9wcy5raXRpZCB8fCAoMCwgX2N1aWQyLmRlZmF1bHQpKCk7XG5cbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoRHJvcGRvd24sIFt7XG4gICAga2V5OiAnY29tcG9uZW50RGlkTW91bnQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBfdGhpczIuaGFuZGxlTGlzdGVuZXIoKTtcbiAgICAgIH0sIHRydWUpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2NvbXBvbmVudFdpbGxVbm1vdW50JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICB2YXIgX3RoaXMzID0gdGhpcztcblxuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gX3RoaXMzLmhhbmRsZUxpc3RlbmVyKCk7XG4gICAgICB9LCBmYWxzZSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnaGFuZGxlTGlzdGVuZXInLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBoYW5kbGVMaXN0ZW5lcihlKSB7XG4gICAgICBpZiAodGhpcy5zdGF0ZS5vcGVuZWQpIHtcbiAgICAgICAgdmFyIGRyb3Bib2R5ID0gX3JlYWN0VWlraXRCYXNlMi5kZWZhdWx0LmhlbHBlcnMucXVlcnlEYXRhKCdkcm9wZG93bi0nICsgdGhpcy5kYXRhSWQpO1xuICAgICAgICBkcm9wYm9keS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2hhbmRsZVRyaWdnZXJDbGljaycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGhhbmRsZVRyaWdnZXJDbGljayhlKSB7XG4gICAgICB2YXIgX3RoaXM0ID0gdGhpcztcblxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgdmFyIGRyb3Bib2R5ID0gX3JlYWN0VWlraXRCYXNlMi5kZWZhdWx0LmhlbHBlcnMucXVlcnlEYXRhKCdkcm9wZG93bi0nICsgdGhpcy5kYXRhSWQpO1xuXG4gICAgICBkcm9wYm9keS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgIGRyb3Bib2R5LnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcblxuICAgICAgdmFyIHByb3BzID0gdGhpcy5wcm9wcztcbiAgICAgIHZhciB0cmlnZ2VyID0gZS5jdXJyZW50VGFyZ2V0O1xuICAgICAgdmFyIGVsZW1lbnRPZmZzZXQgPSBfcG9zT2Zmc2V0Mi5kZWZhdWx0Lm9mZnNldCh0cmlnZ2VyLCBkcm9wYm9keSkocHJvcHMucG9zKTtcblxuICAgICAgaWYgKHByb3BzLmp1c3RpZnkpIHtcbiAgICAgICAgdmFyIGp1c3RpZnkgPSBfcmVhY3RVaWtpdEJhc2UyLmRlZmF1bHQuaGVscGVycy5xdWVyeURhdGEocHJvcHMuanVzdGlmeSk7XG5cbiAgICAgICAgZHJvcGJvZHkuc3R5bGUud2lkdGggPSBfcG9zT2Zmc2V0Mi5kZWZhdWx0LmRpbShqdXN0aWZ5KS53aWR0aCArICdweCc7XG4gICAgICB9XG5cbiAgICAgIGRyb3Bib2R5LnN0eWxlLnRvcCA9IGVsZW1lbnRPZmZzZXQudG9wICsgJ3B4JztcbiAgICAgIGRyb3Bib2R5LnN0eWxlLmxlZnQgPSBlbGVtZW50T2Zmc2V0LmxlZnQgKyAncHgnO1xuXG4gICAgICB2YXIgYW5pbWF0ZUluID0gZnVuY3Rpb24gYW5pbWF0ZUluKCkge1xuICAgICAgICBfdGhpczQuc2V0U3RhdGUoeyBvcGVuZWQ6IHRydWUgfSk7XG4gICAgICAgIHByb3BzLnRyaWdnZXIuYW5pbWF0ZS5pbihkcm9wYm9keSk7XG4gICAgICB9O1xuXG4gICAgICB2YXIgYW5pbWF0ZU91dCA9IGZ1bmN0aW9uIGFuaW1hdGVPdXQoKSB7XG4gICAgICAgIF90aGlzNC5zZXRTdGF0ZSh7IG9wZW5lZDogZmFsc2UgfSk7XG4gICAgICAgIHByb3BzLnRyaWdnZXIuYW5pbWF0ZS5vdXQoZHJvcGJvZHkpO1xuICAgICAgfTtcblxuICAgICAgX3VmdW5jMi5kZWZhdWx0LmVpdGhlcihhbmltYXRlSW4sIGFuaW1hdGVPdXQpKCF0aGlzLnN0YXRlLm9wZW5lZCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAncmVuZGVyJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgdmFyIF90aGlzNSA9IHRoaXM7XG5cbiAgICAgIHZhciBwcm9wcyA9IHRoaXMucHJvcHM7XG4gICAgICB2YXIga2l0aWQgPSBfdWZ1bmMyLmRlZmF1bHQuZWl0aGVyKHByb3BzLmtpdGlkLCB0aGlzLmRhdGFJZCkocHJvcHMua2l0aWQpO1xuXG4gICAgICAvLyBDU1MgY2xhc3Nlc1xuICAgICAgdmFyIHR5cGUgPSB7XG4gICAgICAgIGJ1dHRvbjogJ3VrLWJ1dHRvbi1kcm9wZG93bicsXG4gICAgICAgICdidXR0b24tZ3JvdXAnOiAndWstYnV0dG9uLWdyb3VwJyxcbiAgICAgICAgZHJvcGRvd246IG51bGwsXG4gICAgICAgIGdyaWQ6ICd1ay1ncmlkIHVrLWRyb3Bkb3duLWdyaWQnLFxuICAgICAgICBuYXY6ICd1ay1wYXJlbnQnXG4gICAgICB9O1xuXG4gICAgICB2YXIgY3NzQ2xhc3NOYW1lcyA9IF9yZWFjdFVpa2l0QmFzZTIuZGVmYXVsdC5oZWxwZXJzLmNsZWFuQ2xhc3NlcyhbdHlwZVtwcm9wcy50eXBlXSB8fCBudWxsLCBwcm9wcy5jbGFzc2VzLCBwcm9wcy5jbGFzc05hbWVdKTtcblxuICAgICAgdmFyIGNzc0Ryb3BDbGFzc05hbWVzID0gX3JlYWN0VWlraXRCYXNlMi5kZWZhdWx0LmhlbHBlcnMuY2xlYW5DbGFzc2VzKFshcHJvcHMuYmxhbmsgPyAndWstZHJvcGRvd24nIDogJ3VrLWRyb3Bkb3duLWJsYW5rJywgcHJvcHMuc21hbGwgPyAndWstZHJvcGRvd24tc21hbGwnIDogbnVsbCwgcHJvcHMubmF2YmFyID8gJ3VrLWRyb3Bkb3duLW5hdmJhcicgOiBudWxsLCBwcm9wcy5zY3JvbGxhYmxlID8gJ3VrLWRyb3Bkb3duLXNjcm9sbGFibGUnIDogbnVsbF0pO1xuXG4gICAgICAvLyBFbGVtZW50c1xuICAgICAgdmFyIGRyb3Bkb3duID0gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICdkaXYnLFxuICAgICAgICB7XG4gICAgICAgICAgc3R5bGU6IHsgd2lkdGg6IF9wb3NPZmZzZXQyLmRlZmF1bHQuZGltKHRoaXMpIH0sXG4gICAgICAgICAgJ2RhdGEta2l0aWQnOiAnZHJvcGRvd24tJyArIGtpdGlkLFxuICAgICAgICAgIGNsYXNzTmFtZTogY3NzRHJvcENsYXNzTmFtZXNcbiAgICAgICAgfSxcbiAgICAgICAgcHJvcHMuY2hpbGRyZW5cbiAgICAgICk7XG5cbiAgICAgIHZhciB0cmlnZ2VyID0gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoX3JlYWN0VWlraXRUcmlnZ2VyMi5kZWZhdWx0LCBfZXh0ZW5kcyh7fSwgcHJvcHMudHJpZ2dlciwge1xuICAgICAgICBraXRpZDoga2l0aWQsXG4gICAgICAgIG9uQ2xpY2s6IGZ1bmN0aW9uIG9uQ2xpY2soZSkge1xuICAgICAgICAgIHJldHVybiBfdGhpczUuaGFuZGxlVHJpZ2dlckNsaWNrKGUpO1xuICAgICAgICB9XG4gICAgICB9KSk7XG5cbiAgICAgIHZhciBhdHRyID0ge1xuICAgICAgICAnYXJpYS1oYXNwb3B1cCc6ICd0cnVlJyxcbiAgICAgICAgJ2FyaWEtZXhwYW5kZWQnOiB0aGlzLnN0YXRlLm9wZW5lZCA/ICd0cnVlJyA6ICdmYWxzZScsXG4gICAgICAgICdkYXRhLWtpdGlkJzogJ2Ryb3BDb250YWluZXItJyArIGtpdGlkXG4gICAgICB9O1xuXG4gICAgICB2YXIgZGl2ID0gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICdkaXYnLFxuICAgICAgICBfZXh0ZW5kcyh7XG4gICAgICAgICAgY2xhc3NOYW1lOiBjc3NDbGFzc05hbWVzXG4gICAgICAgIH0sIGF0dHIpLFxuICAgICAgICB0cmlnZ2VyLFxuICAgICAgICBkcm9wZG93blxuICAgICAgKTtcblxuICAgICAgdmFyIGxpc3QgPSBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgJ2xpJyxcbiAgICAgICAgX2V4dGVuZHMoe1xuICAgICAgICAgIGNsYXNzTmFtZTogY3NzQ2xhc3NOYW1lc1xuICAgICAgICB9LCBhdHRyKSxcbiAgICAgICAgdHJpZ2dlcixcbiAgICAgICAgZHJvcGRvd25cbiAgICAgICk7XG5cbiAgICAgIC8vIFJldHVybiBDb21wb25lbnRcbiAgICAgIHZhciBjb21wb25lbnQgPSBfdWZ1bmMyLmRlZmF1bHQuZWl0aGVyKGxpc3QsIGRpdik7XG4gICAgICByZXR1cm4gY29tcG9uZW50KHByb3BzLmxpc3QgfHwgcHJvcHMubmF2YmFyKTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gRHJvcGRvd247XG59KShfcmVhY3QyLmRlZmF1bHQuQ29tcG9uZW50KTtcblxuRHJvcGRvd24ucHJvcFR5cGVzID0ge1xuICBibGFuazogX3JlYWN0Mi5kZWZhdWx0LlByb3BUeXBlcy5ib29sLFxuICBib3VuZGFyeTogX3JlYWN0Mi5kZWZhdWx0LlByb3BUeXBlcy5zdHJpbmcsXG4gIGNoaWxkcmVuOiBfcmVhY3QyLmRlZmF1bHQuUHJvcFR5cGVzLmFueSxcbiAgY2xhc3NOYW1lOiBfcmVhY3QyLmRlZmF1bHQuUHJvcFR5cGVzLnN0cmluZyxcbiAgY2xhc3NlczogX3JlYWN0Mi5kZWZhdWx0LlByb3BUeXBlcy5hcnJheSxcbiAgZ3JpZDogX3JlYWN0Mi5kZWZhdWx0LlByb3BUeXBlcy5ib29sLFxuICBpdGVtczogX3JlYWN0Mi5kZWZhdWx0LlByb3BUeXBlcy5hcnJheSxcbiAganVzdGlmeTogX3JlYWN0Mi5kZWZhdWx0LlByb3BUeXBlcy5zdHJpbmcsXG4gIGtpdGlkOiBfcmVhY3QyLmRlZmF1bHQuUHJvcFR5cGVzLnN0cmluZyxcbiAgbGlzdDogX3JlYWN0Mi5kZWZhdWx0LlByb3BUeXBlcy5ib29sLFxuICBuYXZiYXI6IF9yZWFjdDIuZGVmYXVsdC5Qcm9wVHlwZXMuYm9vbCxcbiAgcGFyZW50OiBfcmVhY3QyLmRlZmF1bHQuUHJvcFR5cGVzLmJvb2wsXG4gIHBvczogX3JlYWN0Mi5kZWZhdWx0LlByb3BUeXBlcy5zdHJpbmcsXG4gIHNjcm9sbGFibGU6IF9yZWFjdDIuZGVmYXVsdC5Qcm9wVHlwZXMuYm9vbCxcbiAgc21hbGw6IF9yZWFjdDIuZGVmYXVsdC5Qcm9wVHlwZXMuYm9vbCxcbiAgdHlwZTogX3JlYWN0Mi5kZWZhdWx0LlByb3BUeXBlcy5vbmVPZihbJ2J1dHRvbicsICdidXR0b24tZ3JvdXAnLCAnZHJvcGRvd24nLCAnZ3JpZCcsICduYXYnXSlcbn07XG47XG5cbmV4cG9ydHMuZGVmYXVsdCA9IF9yZWFjdFVpa2l0QmFzZTIuZGVmYXVsdC5iYXNlKERyb3Bkb3duKTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuLi9jb21wb25lbnRzL3JlYWN0LXVpa2l0LWRyb3Bkb3duL2xpYi9kcm9wZG93bi5qc1xuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=");

/***/ }

})