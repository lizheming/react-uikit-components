webpackHotUpdate(0,{

/***/ 619:
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nfunction _typeof(obj) { return obj && typeof Symbol !== \"undefined\" && obj.constructor === Symbol ? \"symbol\" : typeof obj; }\n\nvar _extends = Object.assign || function (target) {\n  for (var i = 1; i < arguments.length; i++) {\n    var source = arguments[i];for (var key in source) {\n      if (Object.prototype.hasOwnProperty.call(source, key)) {\n        target[key] = source[key];\n      }\n    }\n  }return target;\n};\n\nvar _createClass = (function () {\n  function defineProperties(target, props) {\n    for (var i = 0; i < props.length; i++) {\n      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if (\"value\" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);\n    }\n  }return function (Constructor, protoProps, staticProps) {\n    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;\n  };\n})();\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(170);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _ufunc = __webpack_require__(171);\n\nvar _ufunc2 = _interopRequireDefault(_ufunc);\n\nvar _cuid = __webpack_require__(395);\n\nvar _cuid2 = _interopRequireDefault(_cuid);\n\nvar _posOffset = __webpack_require__(620);\n\nvar _posOffset2 = _interopRequireDefault(_posOffset);\n\nvar _ramda = __webpack_require__(248);\n\nvar _ramda2 = _interopRequireDefault(_ramda);\n\nvar _reactUikitBase = __webpack_require__(249);\n\nvar _reactUikitBase2 = _interopRequireDefault(_reactUikitBase);\n\nvar _reactUikitTrigger = __webpack_require__(622);\n\nvar _reactUikitTrigger2 = _interopRequireDefault(_reactUikitTrigger);\n\nvar _dropbody = __webpack_require__(797);\n\nvar _dropbody2 = _interopRequireDefault(_dropbody);\n\nvar _reactUikitButton = __webpack_require__(411);\n\nvar _reactUikitButton2 = _interopRequireDefault(_reactUikitButton);\n\nfunction _interopRequireDefault(obj) {\n  return obj && obj.__esModule ? obj : { default: obj };\n}\n\nfunction _classCallCheck(instance, Constructor) {\n  if (!(instance instanceof Constructor)) {\n    throw new TypeError(\"Cannot call a class as a function\");\n  }\n}\n\nfunction _possibleConstructorReturn(self, call) {\n  if (!self) {\n    throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");\n  }return call && ((typeof call === \"undefined\" ? \"undefined\" : _typeof(call)) === \"object\" || typeof call === \"function\") ? call : self;\n}\n\nfunction _inherits(subClass, superClass) {\n  if (typeof superClass !== \"function\" && superClass !== null) {\n    throw new TypeError(\"Super expression must either be null or a function, not \" + (typeof superClass === \"undefined\" ? \"undefined\" : _typeof(superClass)));\n  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;\n}\n\nvar Dropdown = (function (_React$Component) {\n  _inherits(Dropdown, _React$Component);\n\n  function Dropdown(props) {\n    _classCallCheck(this, Dropdown);\n\n    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Dropdown).call(this, props));\n\n    _this.state = {\n      opened: false\n    };\n\n    _this.dataId = props.kitid || (0, _cuid2.default)();\n    return _this;\n  }\n\n  _createClass(Dropdown, [{\n    key: 'componentDidMount',\n    value: function componentDidMount() {\n      var _this2 = this;\n\n      window.addEventListener('click', function () {\n        return _this2.handleListener();\n      }, true);\n    }\n  }, {\n    key: 'componentWillUnmount',\n    value: function componentWillUnmount() {\n      var _this3 = this;\n\n      window.removeEventListener('click', function () {\n        return _this3.handleListener();\n      }, false);\n    }\n  }, {\n    key: 'handleListener',\n    value: function handleListener(e) {\n      if (this.state.opened) {\n        var dropbody = _reactUikitBase2.default.helpers.queryData('dropdown-' + this.dataId);\n        dropbody.style.display = 'none';\n        this.setState({ opened: false });\n      }\n    }\n  }, {\n    key: 'handleTriggerClick',\n    value: function handleTriggerClick(e) {\n      var _this4 = this;\n\n      e.preventDefault();\n      var props = this.props;\n      var dropbody = _reactUikitBase2.default.helpers.queryData('dropdown-' + this.dataId);\n      var trigger = e.currentTarget;\n\n      var toHidden = function toHidden(element) {\n        element.style.display = 'block';\n        element.style.visibility = 'hidden';\n\n        return element;\n      };\n\n      var justify = function justify(element) {\n        if (props.justify) {\n          var _justify = _reactUikitBase2.default.helpers.queryData(props.justify);\n          element.style.width = _posOffset2.default.dim(_justify).width + 'px';\n        }\n\n        return element;\n      };\n\n      var getPosition = function getPosition(element) {\n        var elementOffset = _posOffset2.default.offset(trigger, element)(props.pos);\n        element.style.top = elementOffset.top + 'px';\n\n        if (props.type === 'button-group') {\n          var buttonGroup = document.querySelector('.uk-button-group');\n          var paddingLeft = window.getComputedStyle(buttonGroup, null).getPropertyValue('padding-left');\n\n          element.style.left = paddingLeft;\n        } else {\n          element.style.left = elementOffset.left + 'px';\n        }\n\n        return element;\n      };\n\n      var animate = function animate(element) {\n        var animateIn = function animateIn() {\n          _this4.setState({ opened: true });\n          props.trigger.animate.in(element);\n        };\n\n        var animateOut = function animateOut() {\n          _this4.setState({ opened: false });\n          props.trigger.animate.out(element);\n        };\n\n        _ufunc2.default.either(animateIn, animateOut)(!_this4.state.opened);\n      };\n\n      _ramda2.default.pipe(toHidden, justify, getPosition, animate)(dropbody);\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      var _this5 = this;\n\n      var props = this.props;\n      var kitid = _ufunc2.default.either(props.kitid, this.dataId)(props.kitid);\n\n      // CSS classes\n      var type = {\n        button: 'uk-button-dropdown',\n        dropdown: null,\n        grid: 'uk-grid uk-dropdown-grid',\n        navbar: 'uk-parent'\n      };\n\n      var cssClassNames = _reactUikitBase2.default.helpers.cleanClasses([type[props.type] || type['dropdown'], props.classes, props.className]);\n\n      var cssDropClassNames = _reactUikitBase2.default.helpers.cleanClasses([!props.blank ? 'uk-dropdown' : 'uk-dropdown-blank', props.small ? 'uk-dropdown-small' : null, props.scrollable ? 'uk-dropdown-scrollable' : null]);\n\n      // Elements\n      var cleanProps = _reactUikitBase2.default.helpers.cleanProps(props, ['type']);\n      var cleanTriggerProps = _ufunc2.default.either(_reactUikitBase2.default.helpers.cleanProps(props.trigger, ['body']), props.trigger)(props.type === 'button-group');\n\n      var attr = {\n        'aria-haspopup': 'true',\n        'aria-expanded': this.state.opened ? 'true' : 'false',\n        'data-kitid': 'dropContainer-' + kitid,\n        'className': cssClassNames\n      };\n\n      var dropbody = _react2.default.createElement(_dropbody2.default, _extends({}, props.bodyProps, {\n        style: props.justify ? { width: _posOffset2.default.dim(this) } : null,\n        'data-kitid': 'dropdown-' + kitid,\n        className: cssDropClassNames\n      }), props.children);\n\n      var trigger = function trigger(mode) {\n        return _react2.default.createElement(_reactUikitTrigger2.default, _extends({}, cleanTriggerProps, {\n          icon: props.icon || 'caret-down',\n          kitid: kitid,\n          onClick: function onClick(e) {\n            return _this5.handleTriggerClick(e);\n          }\n        }));\n      };\n\n      var component = {\n        dropdown: _react2.default.createElement('div', _extends({}, cleanProps, attr), trigger(), dropbody),\n\n        'button-group': _react2.default.createElement('div', _extends({}, cleanProps, {\n          className: 'uk-button-group' }), _react2.default.createElement(_reactUikitButton2.default, null, props.children), _react2.default.createElement('div', attr, trigger('link'), dropbody)),\n\n        navbar: _react2.default.createElement('li', _extends({}, cleanProps, {\n          className: 'uk-dropdown-navbar' }), _react2.default.createElement(_reactUikitButton2.default, null, props.children), _react2.default.createElement('div', attr, trigger('link'), dropbody))\n      };\n\n      // Return Component\n      return component[props.type] || component['dropdown'];\n    }\n  }]);\n\n  return Dropdown;\n})(_react2.default.Component);\n\nDropdown.propTypes = {\n  blank: _react2.default.PropTypes.bool,\n  boundary: _react2.default.PropTypes.string,\n  bodyProps: _react2.default.PropTypes.object,\n  children: _react2.default.PropTypes.any,\n  className: _react2.default.PropTypes.string,\n  classes: _react2.default.PropTypes.array,\n  grid: _react2.default.PropTypes.bool,\n  items: _react2.default.PropTypes.array,\n  justify: _react2.default.PropTypes.string,\n  kitid: _react2.default.PropTypes.string,\n  navbar: _react2.default.PropTypes.bool,\n  parent: _react2.default.PropTypes.bool,\n  pos: _react2.default.PropTypes.string,\n  scrollable: _react2.default.PropTypes.bool,\n  small: _react2.default.PropTypes.bool,\n  trigger: _react2.default.PropTypes.object,\n  type: _react2.default.PropTypes.oneOf(['button', 'button-group', 'dropdown', 'grid', 'nav'])\n};\n;\n\nexports.default = _reactUikitBase2.default.base(Dropdown);\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vY29tcG9uZW50cy9yZWFjdC11aWtpdC1kcm9wZG93bi9saWIvZHJvcGRvd24uanM/ZWE1MiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7Ozs7QUFFYixJQUFJLFFBQVEsR0FBRyxNQUFNLENBQUMsTUFBTSxJQUFJLFVBQVUsTUFBTSxFQUFFO0FBQUUsT0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7QUFBRSxRQUFJLE1BQU0sR0FBRyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUUsS0FBSyxJQUFJLEdBQUcsSUFBSSxNQUFNLEVBQUU7QUFBRSxVQUFJLE1BQU0sQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLEVBQUU7QUFBRSxjQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO09BQUU7S0FBRTtHQUFHLE9BQU8sTUFBTSxDQUFDO0NBQUUsQ0FBQzs7QUFFalEsSUFBSSxZQUFZLEdBQUcsQ0FBQyxZQUFZO0FBQUUsV0FBUyxnQkFBZ0IsQ0FBQyxNQUFNLEVBQUUsS0FBSyxFQUFFO0FBQUUsU0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7QUFBRSxVQUFJLFVBQVUsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUUsVUFBVSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUMsVUFBVSxJQUFJLEtBQUssQ0FBRSxVQUFVLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBRSxJQUFJLE9BQU8sSUFBSSxVQUFVLEVBQUUsVUFBVSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUUsTUFBTSxDQUFDLGNBQWMsQ0FBQyxNQUFNLEVBQUUsVUFBVSxDQUFDLEdBQUcsRUFBRSxV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QUFPLENBQUMsU0FBUyxDQUFDLENBQUM7O0FBRTlCLFFBQVEsQ0FBQyxTQUFTLEdBQUc7QUFDbkIsT0FBSyxFQUFFLE9BQU8sQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLElBQUk7QUFDckMsVUFBUSxFQUFFLE9BQU8sQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLE1BQU07QUFDMUMsV0FBUyxFQUFFLE9BQU8sQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLE1BQU07QUFDM0MsVUFBUSxFQUFFLE9BQU8sQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLEdBQUc7QUFDdkMsV0FBUyxFQUFFLE9BQU8sQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLE1BQU07QUFDM0MsU0FBTyxFQUFFLE9BQU8sQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLEtBQUs7QUFDeEMsTUFBSSxFQUFFLE9BQU8sQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLElBQUk7QUFDcEMsT0FBSyxFQUFFLE9BQU8sQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLEtBQUs7QUFDdEMsU0FBTyxFQUFFLE9BQU8sQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLE1BQU07QUFDekMsT0FBSyxFQUFFLE9BQU8sQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLE1BQU07QUFDdkMsUUFBTSxFQUFFLE9BQU8sQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLElBQUk7QUFDdEMsUUFBTSxFQUFFLE9BQU8sQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLElBQUk7QUFDdEMsS0FBRyxFQUFFLE9BQU8sQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLE1BQU07QUFDckMsWUFBVSxFQUFFLE9BQU8sQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLElBQUk7QUFDMUMsT0FBSyxFQUFFLE9BQU8sQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLElBQUk7QUFDckMsU0FBTyxFQUFFLE9BQU8sQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLE1BQU07QUFDekMsTUFBSSxFQUFFLE9BQU8sQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDLFFBQVEsRUFBRSxjQUFjLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxLQUFLLENBQUMsQ0FBQztDQUM3RixDQUFDO0FBQ0YsQ0FBQzs7QUFFRCxPQUFPLENBQUMsT0FBTyxHQUFHLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDIiwiZmlsZSI6IjYxOS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IChmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KSgpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfdWZ1bmMgPSByZXF1aXJlKCd1ZnVuYycpO1xuXG52YXIgX3VmdW5jMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3VmdW5jKTtcblxudmFyIF9jdWlkID0gcmVxdWlyZSgnY3VpZCcpO1xuXG52YXIgX2N1aWQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY3VpZCk7XG5cbnZhciBfcG9zT2Zmc2V0ID0gcmVxdWlyZSgnLi9wb3NPZmZzZXQnKTtcblxudmFyIF9wb3NPZmZzZXQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcG9zT2Zmc2V0KTtcblxudmFyIF9yYW1kYSA9IHJlcXVpcmUoJ3JhbWRhJyk7XG5cbnZhciBfcmFtZGEyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmFtZGEpO1xuXG52YXIgX3JlYWN0VWlraXRCYXNlID0gcmVxdWlyZSgncmVhY3QtdWlraXQtYmFzZScpO1xuXG52YXIgX3JlYWN0VWlraXRCYXNlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0VWlraXRCYXNlKTtcblxudmFyIF9yZWFjdFVpa2l0VHJpZ2dlciA9IHJlcXVpcmUoJy4uLy4uL3JlYWN0LXVpa2l0LXRyaWdnZXInKTtcblxudmFyIF9yZWFjdFVpa2l0VHJpZ2dlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdFVpa2l0VHJpZ2dlcik7XG5cbnZhciBfZHJvcGJvZHkgPSByZXF1aXJlKCcuL2Ryb3Bib2R5Jyk7XG5cbnZhciBfZHJvcGJvZHkyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZHJvcGJvZHkpO1xuXG52YXIgX3JlYWN0VWlraXRCdXR0b24gPSByZXF1aXJlKCdyZWFjdC11aWtpdC1idXR0b24nKTtcblxudmFyIF9yZWFjdFVpa2l0QnV0dG9uMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0VWlraXRCdXR0b24pO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbnZhciBEcm9wZG93biA9IChmdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICBfaW5oZXJpdHMoRHJvcGRvd24sIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIERyb3Bkb3duKHByb3BzKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIERyb3Bkb3duKTtcblxuICAgIHZhciBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIE9iamVjdC5nZXRQcm90b3R5cGVPZihEcm9wZG93bikuY2FsbCh0aGlzLCBwcm9wcykpO1xuXG4gICAgX3RoaXMuc3RhdGUgPSB7XG4gICAgICBvcGVuZWQ6IGZhbHNlXG4gICAgfTtcblxuICAgIF90aGlzLmRhdGFJZCA9IHByb3BzLmtpdGlkIHx8ICgwLCBfY3VpZDIuZGVmYXVsdCkoKTtcbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoRHJvcGRvd24sIFt7XG4gICAga2V5OiAnY29tcG9uZW50RGlkTW91bnQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBfdGhpczIuaGFuZGxlTGlzdGVuZXIoKTtcbiAgICAgIH0sIHRydWUpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2NvbXBvbmVudFdpbGxVbm1vdW50JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICB2YXIgX3RoaXMzID0gdGhpcztcblxuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gX3RoaXMzLmhhbmRsZUxpc3RlbmVyKCk7XG4gICAgICB9LCBmYWxzZSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnaGFuZGxlTGlzdGVuZXInLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBoYW5kbGVMaXN0ZW5lcihlKSB7XG4gICAgICBpZiAodGhpcy5zdGF0ZS5vcGVuZWQpIHtcbiAgICAgICAgdmFyIGRyb3Bib2R5ID0gX3JlYWN0VWlraXRCYXNlMi5kZWZhdWx0LmhlbHBlcnMucXVlcnlEYXRhKCdkcm9wZG93bi0nICsgdGhpcy5kYXRhSWQpO1xuICAgICAgICBkcm9wYm9keS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgb3BlbmVkOiBmYWxzZSB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdoYW5kbGVUcmlnZ2VyQ2xpY2snLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBoYW5kbGVUcmlnZ2VyQ2xpY2soZSkge1xuICAgICAgdmFyIF90aGlzNCA9IHRoaXM7XG5cbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIHZhciBwcm9wcyA9IHRoaXMucHJvcHM7XG4gICAgICB2YXIgZHJvcGJvZHkgPSBfcmVhY3RVaWtpdEJhc2UyLmRlZmF1bHQuaGVscGVycy5xdWVyeURhdGEoJ2Ryb3Bkb3duLScgKyB0aGlzLmRhdGFJZCk7XG4gICAgICB2YXIgdHJpZ2dlciA9IGUuY3VycmVudFRhcmdldDtcblxuICAgICAgdmFyIHRvSGlkZGVuID0gZnVuY3Rpb24gdG9IaWRkZW4oZWxlbWVudCkge1xuICAgICAgICBlbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICBlbGVtZW50LnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcblxuICAgICAgICByZXR1cm4gZWxlbWVudDtcbiAgICAgIH07XG5cbiAgICAgIHZhciBqdXN0aWZ5ID0gZnVuY3Rpb24ganVzdGlmeShlbGVtZW50KSB7XG4gICAgICAgIGlmIChwcm9wcy5qdXN0aWZ5KSB7XG4gICAgICAgICAgdmFyIF9qdXN0aWZ5ID0gX3JlYWN0VWlraXRCYXNlMi5kZWZhdWx0LmhlbHBlcnMucXVlcnlEYXRhKHByb3BzLmp1c3RpZnkpO1xuICAgICAgICAgIGVsZW1lbnQuc3R5bGUud2lkdGggPSBfcG9zT2Zmc2V0Mi5kZWZhdWx0LmRpbShfanVzdGlmeSkud2lkdGggKyAncHgnO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XG4gICAgICB9O1xuXG4gICAgICB2YXIgZ2V0UG9zaXRpb24gPSBmdW5jdGlvbiBnZXRQb3NpdGlvbihlbGVtZW50KSB7XG4gICAgICAgIHZhciBlbGVtZW50T2Zmc2V0ID0gX3Bvc09mZnNldDIuZGVmYXVsdC5vZmZzZXQodHJpZ2dlciwgZWxlbWVudCkocHJvcHMucG9zKTtcbiAgICAgICAgZWxlbWVudC5zdHlsZS50b3AgPSBlbGVtZW50T2Zmc2V0LnRvcCArICdweCc7XG5cbiAgICAgICAgaWYgKHByb3BzLnR5cGUgPT09ICdidXR0b24tZ3JvdXAnKSB7XG4gICAgICAgICAgdmFyIGJ1dHRvbkdyb3VwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnVrLWJ1dHRvbi1ncm91cCcpO1xuICAgICAgICAgIHZhciBwYWRkaW5nTGVmdCA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGJ1dHRvbkdyb3VwLCBudWxsKS5nZXRQcm9wZXJ0eVZhbHVlKCdwYWRkaW5nLWxlZnQnKTtcblxuICAgICAgICAgIGVsZW1lbnQuc3R5bGUubGVmdCA9IHBhZGRpbmdMZWZ0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGVsZW1lbnQuc3R5bGUubGVmdCA9IGVsZW1lbnRPZmZzZXQubGVmdCArICdweCc7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZWxlbWVudDtcbiAgICAgIH07XG5cbiAgICAgIHZhciBhbmltYXRlID0gZnVuY3Rpb24gYW5pbWF0ZShlbGVtZW50KSB7XG4gICAgICAgIHZhciBhbmltYXRlSW4gPSBmdW5jdGlvbiBhbmltYXRlSW4oKSB7XG4gICAgICAgICAgX3RoaXM0LnNldFN0YXRlKHsgb3BlbmVkOiB0cnVlIH0pO1xuICAgICAgICAgIHByb3BzLnRyaWdnZXIuYW5pbWF0ZS5pbihlbGVtZW50KTtcbiAgICAgICAgfTtcblxuICAgICAgICB2YXIgYW5pbWF0ZU91dCA9IGZ1bmN0aW9uIGFuaW1hdGVPdXQoKSB7XG4gICAgICAgICAgX3RoaXM0LnNldFN0YXRlKHsgb3BlbmVkOiBmYWxzZSB9KTtcbiAgICAgICAgICBwcm9wcy50cmlnZ2VyLmFuaW1hdGUub3V0KGVsZW1lbnQpO1xuICAgICAgICB9O1xuXG4gICAgICAgIF91ZnVuYzIuZGVmYXVsdC5laXRoZXIoYW5pbWF0ZUluLCBhbmltYXRlT3V0KSghX3RoaXM0LnN0YXRlLm9wZW5lZCk7XG4gICAgICB9O1xuXG4gICAgICBfcmFtZGEyLmRlZmF1bHQucGlwZSh0b0hpZGRlbiwganVzdGlmeSwgZ2V0UG9zaXRpb24sIGFuaW1hdGUpKGRyb3Bib2R5KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdyZW5kZXInLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICB2YXIgX3RoaXM1ID0gdGhpcztcblxuICAgICAgdmFyIHByb3BzID0gdGhpcy5wcm9wcztcbiAgICAgIHZhciBraXRpZCA9IF91ZnVuYzIuZGVmYXVsdC5laXRoZXIocHJvcHMua2l0aWQsIHRoaXMuZGF0YUlkKShwcm9wcy5raXRpZCk7XG5cbiAgICAgIC8vIENTUyBjbGFzc2VzXG4gICAgICB2YXIgdHlwZSA9IHtcbiAgICAgICAgYnV0dG9uOiAndWstYnV0dG9uLWRyb3Bkb3duJyxcbiAgICAgICAgZHJvcGRvd246IG51bGwsXG4gICAgICAgIGdyaWQ6ICd1ay1ncmlkIHVrLWRyb3Bkb3duLWdyaWQnLFxuICAgICAgICBuYXZiYXI6ICd1ay1wYXJlbnQnXG4gICAgICB9O1xuXG4gICAgICB2YXIgY3NzQ2xhc3NOYW1lcyA9IF9yZWFjdFVpa2l0QmFzZTIuZGVmYXVsdC5oZWxwZXJzLmNsZWFuQ2xhc3NlcyhbdHlwZVtwcm9wcy50eXBlXSB8fCB0eXBlWydkcm9wZG93biddLCBwcm9wcy5jbGFzc2VzLCBwcm9wcy5jbGFzc05hbWVdKTtcblxuICAgICAgdmFyIGNzc0Ryb3BDbGFzc05hbWVzID0gX3JlYWN0VWlraXRCYXNlMi5kZWZhdWx0LmhlbHBlcnMuY2xlYW5DbGFzc2VzKFshcHJvcHMuYmxhbmsgPyAndWstZHJvcGRvd24nIDogJ3VrLWRyb3Bkb3duLWJsYW5rJywgcHJvcHMuc21hbGwgPyAndWstZHJvcGRvd24tc21hbGwnIDogbnVsbCwgcHJvcHMuc2Nyb2xsYWJsZSA/ICd1ay1kcm9wZG93bi1zY3JvbGxhYmxlJyA6IG51bGxdKTtcblxuICAgICAgLy8gRWxlbWVudHNcbiAgICAgIHZhciBjbGVhblByb3BzID0gX3JlYWN0VWlraXRCYXNlMi5kZWZhdWx0LmhlbHBlcnMuY2xlYW5Qcm9wcyhwcm9wcywgWyd0eXBlJ10pO1xuICAgICAgdmFyIGNsZWFuVHJpZ2dlclByb3BzID0gX3VmdW5jMi5kZWZhdWx0LmVpdGhlcihfcmVhY3RVaWtpdEJhc2UyLmRlZmF1bHQuaGVscGVycy5jbGVhblByb3BzKHByb3BzLnRyaWdnZXIsIFsnYm9keSddKSwgcHJvcHMudHJpZ2dlcikocHJvcHMudHlwZSA9PT0gJ2J1dHRvbi1ncm91cCcpO1xuXG4gICAgICB2YXIgYXR0ciA9IHtcbiAgICAgICAgJ2FyaWEtaGFzcG9wdXAnOiAndHJ1ZScsXG4gICAgICAgICdhcmlhLWV4cGFuZGVkJzogdGhpcy5zdGF0ZS5vcGVuZWQgPyAndHJ1ZScgOiAnZmFsc2UnLFxuICAgICAgICAnZGF0YS1raXRpZCc6ICdkcm9wQ29udGFpbmVyLScgKyBraXRpZCxcbiAgICAgICAgJ2NsYXNzTmFtZSc6IGNzc0NsYXNzTmFtZXNcbiAgICAgIH07XG5cbiAgICAgIHZhciBkcm9wYm9keSA9IF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICBfZHJvcGJvZHkyLmRlZmF1bHQsXG4gICAgICAgIF9leHRlbmRzKHt9LCBwcm9wcy5ib2R5UHJvcHMsIHtcbiAgICAgICAgICBzdHlsZTogcHJvcHMuanVzdGlmeSA/IHsgd2lkdGg6IF9wb3NPZmZzZXQyLmRlZmF1bHQuZGltKHRoaXMpIH0gOiBudWxsLFxuICAgICAgICAgICdkYXRhLWtpdGlkJzogJ2Ryb3Bkb3duLScgKyBraXRpZCxcbiAgICAgICAgICBjbGFzc05hbWU6IGNzc0Ryb3BDbGFzc05hbWVzXG4gICAgICAgIH0pLFxuICAgICAgICBwcm9wcy5jaGlsZHJlblxuICAgICAgKTtcblxuICAgICAgdmFyIHRyaWdnZXIgPSBmdW5jdGlvbiB0cmlnZ2VyKG1vZGUpIHtcbiAgICAgICAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KF9yZWFjdFVpa2l0VHJpZ2dlcjIuZGVmYXVsdCwgX2V4dGVuZHMoe30sIGNsZWFuVHJpZ2dlclByb3BzLCB7XG4gICAgICAgICAgaWNvbjogcHJvcHMuaWNvbiB8fCAnY2FyZXQtZG93bicsXG4gICAgICAgICAga2l0aWQ6IGtpdGlkLFxuICAgICAgICAgIG9uQ2xpY2s6IGZ1bmN0aW9uIG9uQ2xpY2soZSkge1xuICAgICAgICAgICAgcmV0dXJuIF90aGlzNS5oYW5kbGVUcmlnZ2VyQ2xpY2soZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KSk7XG4gICAgICB9O1xuXG4gICAgICB2YXIgY29tcG9uZW50ID0ge1xuICAgICAgICBkcm9wZG93bjogX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgJ2RpdicsXG4gICAgICAgICAgX2V4dGVuZHMoe30sIGNsZWFuUHJvcHMsIGF0dHIpLFxuICAgICAgICAgIHRyaWdnZXIoKSxcbiAgICAgICAgICBkcm9wYm9keVxuICAgICAgICApLFxuXG4gICAgICAgICdidXR0b24tZ3JvdXAnOiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAnZGl2JyxcbiAgICAgICAgICBfZXh0ZW5kcyh7fSwgY2xlYW5Qcm9wcywge1xuICAgICAgICAgICAgY2xhc3NOYW1lOiAndWstYnV0dG9uLWdyb3VwJyB9KSxcbiAgICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgIF9yZWFjdFVpa2l0QnV0dG9uMi5kZWZhdWx0LFxuICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICAgIHByb3BzLmNoaWxkcmVuXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICdkaXYnLFxuICAgICAgICAgICAgYXR0cixcbiAgICAgICAgICAgIHRyaWdnZXIoJ2xpbmsnKSxcbiAgICAgICAgICAgIGRyb3Bib2R5XG4gICAgICAgICAgKVxuICAgICAgICApLFxuXG4gICAgICAgIG5hdmJhcjogX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgJ2xpJyxcbiAgICAgICAgICBfZXh0ZW5kcyh7fSwgY2xlYW5Qcm9wcywge1xuICAgICAgICAgICAgY2xhc3NOYW1lOiAndWstZHJvcGRvd24tbmF2YmFyJyB9KSxcbiAgICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgIF9yZWFjdFVpa2l0QnV0dG9uMi5kZWZhdWx0LFxuICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICAgIHByb3BzLmNoaWxkcmVuXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICdkaXYnLFxuICAgICAgICAgICAgYXR0cixcbiAgICAgICAgICAgIHRyaWdnZXIoJ2xpbmsnKSxcbiAgICAgICAgICAgIGRyb3Bib2R5XG4gICAgICAgICAgKVxuICAgICAgICApXG4gICAgICB9O1xuXG4gICAgICAvLyBSZXR1cm4gQ29tcG9uZW50XG4gICAgICByZXR1cm4gY29tcG9uZW50W3Byb3BzLnR5cGVdIHx8IGNvbXBvbmVudFsnZHJvcGRvd24nXTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gRHJvcGRvd247XG59KShfcmVhY3QyLmRlZmF1bHQuQ29tcG9uZW50KTtcblxuRHJvcGRvd24ucHJvcFR5cGVzID0ge1xuICBibGFuazogX3JlYWN0Mi5kZWZhdWx0LlByb3BUeXBlcy5ib29sLFxuICBib3VuZGFyeTogX3JlYWN0Mi5kZWZhdWx0LlByb3BUeXBlcy5zdHJpbmcsXG4gIGJvZHlQcm9wczogX3JlYWN0Mi5kZWZhdWx0LlByb3BUeXBlcy5vYmplY3QsXG4gIGNoaWxkcmVuOiBfcmVhY3QyLmRlZmF1bHQuUHJvcFR5cGVzLmFueSxcbiAgY2xhc3NOYW1lOiBfcmVhY3QyLmRlZmF1bHQuUHJvcFR5cGVzLnN0cmluZyxcbiAgY2xhc3NlczogX3JlYWN0Mi5kZWZhdWx0LlByb3BUeXBlcy5hcnJheSxcbiAgZ3JpZDogX3JlYWN0Mi5kZWZhdWx0LlByb3BUeXBlcy5ib29sLFxuICBpdGVtczogX3JlYWN0Mi5kZWZhdWx0LlByb3BUeXBlcy5hcnJheSxcbiAganVzdGlmeTogX3JlYWN0Mi5kZWZhdWx0LlByb3BUeXBlcy5zdHJpbmcsXG4gIGtpdGlkOiBfcmVhY3QyLmRlZmF1bHQuUHJvcFR5cGVzLnN0cmluZyxcbiAgbmF2YmFyOiBfcmVhY3QyLmRlZmF1bHQuUHJvcFR5cGVzLmJvb2wsXG4gIHBhcmVudDogX3JlYWN0Mi5kZWZhdWx0LlByb3BUeXBlcy5ib29sLFxuICBwb3M6IF9yZWFjdDIuZGVmYXVsdC5Qcm9wVHlwZXMuc3RyaW5nLFxuICBzY3JvbGxhYmxlOiBfcmVhY3QyLmRlZmF1bHQuUHJvcFR5cGVzLmJvb2wsXG4gIHNtYWxsOiBfcmVhY3QyLmRlZmF1bHQuUHJvcFR5cGVzLmJvb2wsXG4gIHRyaWdnZXI6IF9yZWFjdDIuZGVmYXVsdC5Qcm9wVHlwZXMub2JqZWN0LFxuICB0eXBlOiBfcmVhY3QyLmRlZmF1bHQuUHJvcFR5cGVzLm9uZU9mKFsnYnV0dG9uJywgJ2J1dHRvbi1ncm91cCcsICdkcm9wZG93bicsICdncmlkJywgJ25hdiddKVxufTtcbjtcblxuZXhwb3J0cy5kZWZhdWx0ID0gX3JlYWN0VWlraXRCYXNlMi5kZWZhdWx0LmJhc2UoRHJvcGRvd24pO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4uL2NvbXBvbmVudHMvcmVhY3QtdWlraXQtZHJvcGRvd24vbGliL2Ryb3Bkb3duLmpzXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==");

/***/ }

})