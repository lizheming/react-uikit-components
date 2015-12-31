webpackHotUpdate(0,{

/***/ 3805:
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nvar _extends = Object.assign || function (target) {\n  for (var i = 1; i < arguments.length; i++) {\n    var source = arguments[i];for (var key in source) {\n      if (Object.prototype.hasOwnProperty.call(source, key)) {\n        target[key] = source[key];\n      }\n    }\n  }return target;\n};\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(3729);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactUikitBase = __webpack_require__(202);\n\nvar _reactUikitBase2 = _interopRequireDefault(_reactUikitBase);\n\nvar _ufunc = __webpack_require__(3730);\n\nvar _ufunc2 = _interopRequireDefault(_ufunc);\n\nvar _listItem = __webpack_require__(3731);\n\nvar _listItem2 = _interopRequireDefault(_listItem);\n\nfunction _interopRequireDefault(obj) {\n  return obj && obj.__esModule ? obj : { default: obj };\n}\n\nvar handleClick = function handleClick(e, props) {\n  console.log(props.OnSelect);\n  if (props.OnSelect) {\n    props.OnSelect(e);\n  }\n};\n\nvar List = function List(props) {\n  var ignoreProps = ['type'];\n  var cleanProps = _reactUikitBase2.default.helpers.cleanProps(ignoreProps)(props);\n\n  // CSS classes\n  var isLine = _ufunc2.default.either('uk-list-line', 'uk-description-list-line');\n  var isHor = _ufunc2.default.maybeIf('uk-description-list-horizontal')(props.type === 'description');\n\n  var cssClassNames = _reactUikitBase2.default.helpers.cleanClasses([props.type !== 'description' ? 'uk-list' : null, props.horizontal ? isHor : null, !props.line ? null : isLine(props.type !== 'description'), props.striped ? 'uk-list-striped' : null, props.space ? 'uk-list-space' : null, props.classes, props.className]);\n\n  // Elements\n  var selectable = function selectable(index) {\n    return _ufunc2.default.maybeIf(_react2.default.createElement('input', {\n      'data-kitid': '$item-{index}-' + props.kitid,\n      type: 'checkbox',\n      className: 'close',\n      checked: props.checked,\n      onClick: props.onSelect\n    }))(props.onSelect);\n  };\n\n  var link = function link(item, index) {\n    return _react2.default.createElement(_listItem2.default, _extends({\n      key: index\n    }, item, {\n      onClick: function onClick(e, props) {\n        return handleClick(e, props);\n      }\n    }), selectable(index));\n  };\n\n  var text = function text(item, index) {\n    return _react2.default.createElement(_listItem2.default, {\n      key: index,\n      body: item,\n      onClick: function onClick(e, props) {\n        return handleClick(e, props);\n      }\n    }, selectable(index));\n  };\n\n  var items = undefined;\n  if (props.items) {\n    items = props.items.map(function (item, index) {\n      return _ufunc2.default.either(link(item, index), text(item, index))(item.href);\n    });\n  }\n\n  var attr = _extends({}, cleanProps, _reactUikitBase2.default.events(props), {\n    'data-kitid': props.kitid,\n    className: cssClassNames\n  });\n\n  var type = {\n    unorderd: _react2.default.createElement('ul', attr, items, props.children),\n\n    ordered: _react2.default.createElement('ol', attr, items, props.children),\n\n    description: _react2.default.createElement('dl', attr, props.children)\n  };\n\n  // Return Component\n  return type[props.type] || type['unorderd'];\n};\n\nList.propTypes = {\n  children: _react2.default.PropTypes.any,\n  className: _react2.default.PropTypes.string,\n  classes: _react2.default.PropTypes.array,\n  description: _react2.default.PropTypes.string,\n  items: _react2.default.PropTypes.array,\n  horizontal: _react2.default.PropTypes.bool,\n  kitid: _react2.default.PropTypes.string,\n  line: _react2.default.PropTypes.bool,\n  striped: _react2.default.PropTypes.bool,\n  onSelect: _react2.default.PropTypes.func,\n  space: _react2.default.PropTypes.bool,\n  type: _react2.default.PropTypes.oneOf(['description', 'ordered', 'unorderd'])\n};\n\nexports.default = _reactUikitBase2.default.base(List);\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vY29tcG9uZW50cy9yZWFjdC11aWtpdC1saXN0L2xpYi9saXN0LmpzPzdhYjYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOztBQUViLElBQUksUUFBUSxHQUFHLE1BQU0sQ0FBQyxNQUFNLElBQUksVUFBVSxNQUFNLEVBQUU7QUFBRSxPQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsU0FBUyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtBQUFFLFFBQUksTUFBTSxHQUFHLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBRSxLQUFLLElBQUksR0FBRyxJQUFJLE1BQU0sRUFBRTtBQUFFLFVBQUksTUFBTSxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsRUFBRTtBQUFFLGNBQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7T0FBRTtLQUFFO0dBQUcsT0FBTyxNQUFNLENBQUM7Q0FBRSxDQUFDOztBQUVqUSxNQUFNLENBQUMsY0FBYyxDQUFDLE9BQU8sRUFBRSxZQUFZLEVBQUU7QUFDM0MsT0FBSyxFQUFFLElBQUk7Q0FDWixDQUFDLENBQUM7O0FBRUgsSUFBSSxNQUFNLEdBQUcsbUJBQU8sQ0FBQyxJQUFPLENBQUMsQ0FBQzs7QUFFOUIsSUFBSSxPQUFPLEdBQUcsc0JBQXNCLENBQUMsTUFBTSxDQUFDLENBQUM7O0FBRTdDLElBQUksZUFBZSxHQUFHLG1CQUFPLENBQUMsR0FBd0IsQ0FBQyxDQUFDOztBQUV4RCxJQUFJLGdCQUFnQixHQUFHLHNCQUFzQixDQUFDLGVBQWUsQ0FBQyxDQUFDOztBQUUvRCxJQUFJLE1BQU0sR0FBRyxtQkFBTyxDQUFDLElBQU8sQ0FBQyxDQUFDOztBQUU5QixJQUFJLE9BQU8sR0FBRyxzQkFBc0IsQ0FBQyxNQUFNLENBQUMsQ0FBQzs7QUFFN0MsSUFBSSxTQUFTLEdB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UyxFQUFFLFVBQVUsQ0FBQyxDQUFDO0NBQzlFLENBQUM7O0FBRUYsT0FBTyxDQUFDLE9BQU8sR0FBRyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyIsImZpbGUiOiIzODA1LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfcmVhY3RVaWtpdEJhc2UgPSByZXF1aXJlKCcuLi8uLi9yZWFjdC11aWtpdC1iYXNlJyk7XG5cbnZhciBfcmVhY3RVaWtpdEJhc2UyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3RVaWtpdEJhc2UpO1xuXG52YXIgX3VmdW5jID0gcmVxdWlyZSgndWZ1bmMnKTtcblxudmFyIF91ZnVuYzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF91ZnVuYyk7XG5cbnZhciBfbGlzdEl0ZW0gPSByZXF1aXJlKCcuL2xpc3QtaXRlbScpO1xuXG52YXIgX2xpc3RJdGVtMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2xpc3RJdGVtKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIGhhbmRsZUNsaWNrID0gZnVuY3Rpb24gaGFuZGxlQ2xpY2soZSwgcHJvcHMpIHtcbiAgY29uc29sZS5sb2cocHJvcHMuT25TZWxlY3QpO1xuICBpZiAocHJvcHMuT25TZWxlY3QpIHtcbiAgICBwcm9wcy5PblNlbGVjdChlKTtcbiAgfVxufTtcblxudmFyIExpc3QgPSBmdW5jdGlvbiBMaXN0KHByb3BzKSB7XG4gIHZhciBpZ25vcmVQcm9wcyA9IFsndHlwZSddO1xuICB2YXIgY2xlYW5Qcm9wcyA9IF9yZWFjdFVpa2l0QmFzZTIuZGVmYXVsdC5oZWxwZXJzLmNsZWFuUHJvcHMoaWdub3JlUHJvcHMpKHByb3BzKTtcblxuICAvLyBDU1MgY2xhc3Nlc1xuICB2YXIgaXNMaW5lID0gX3VmdW5jMi5kZWZhdWx0LmVpdGhlcigndWstbGlzdC1saW5lJywgJ3VrLWRlc2NyaXB0aW9uLWxpc3QtbGluZScpO1xuICB2YXIgaXNIb3IgPSBfdWZ1bmMyLmRlZmF1bHQubWF5YmVJZigndWstZGVzY3JpcHRpb24tbGlzdC1ob3Jpem9udGFsJykocHJvcHMudHlwZSA9PT0gJ2Rlc2NyaXB0aW9uJyk7XG5cbiAgdmFyIGNzc0NsYXNzTmFtZXMgPSBfcmVhY3RVaWtpdEJhc2UyLmRlZmF1bHQuaGVscGVycy5jbGVhbkNsYXNzZXMoW3Byb3BzLnR5cGUgIT09ICdkZXNjcmlwdGlvbicgPyAndWstbGlzdCcgOiBudWxsLCBwcm9wcy5ob3Jpem9udGFsID8gaXNIb3IgOiBudWxsLCAhcHJvcHMubGluZSA/IG51bGwgOiBpc0xpbmUocHJvcHMudHlwZSAhPT0gJ2Rlc2NyaXB0aW9uJyksIHByb3BzLnN0cmlwZWQgPyAndWstbGlzdC1zdHJpcGVkJyA6IG51bGwsIHByb3BzLnNwYWNlID8gJ3VrLWxpc3Qtc3BhY2UnIDogbnVsbCwgcHJvcHMuY2xhc3NlcywgcHJvcHMuY2xhc3NOYW1lXSk7XG5cbiAgLy8gRWxlbWVudHNcbiAgdmFyIHNlbGVjdGFibGUgPSBmdW5jdGlvbiBzZWxlY3RhYmxlKGluZGV4KSB7XG4gICAgcmV0dXJuIF91ZnVuYzIuZGVmYXVsdC5tYXliZUlmKF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KCdpbnB1dCcsIHtcbiAgICAgICdkYXRhLWtpdGlkJzogJyRpdGVtLXtpbmRleH0tJyArIHByb3BzLmtpdGlkLFxuICAgICAgdHlwZTogJ2NoZWNrYm94JyxcbiAgICAgIGNsYXNzTmFtZTogJ2Nsb3NlJyxcbiAgICAgIGNoZWNrZWQ6IHByb3BzLmNoZWNrZWQsXG4gICAgICBvbkNsaWNrOiBwcm9wcy5vblNlbGVjdFxuICAgIH0pKShwcm9wcy5vblNlbGVjdCk7XG4gIH07XG5cbiAgdmFyIGxpbmsgPSBmdW5jdGlvbiBsaW5rKGl0ZW0sIGluZGV4KSB7XG4gICAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgX2xpc3RJdGVtMi5kZWZhdWx0LFxuICAgICAgX2V4dGVuZHMoe1xuICAgICAgICBrZXk6IGluZGV4XG4gICAgICB9LCBpdGVtLCB7XG4gICAgICAgIG9uQ2xpY2s6IGZ1bmN0aW9uIG9uQ2xpY2soZSwgcHJvcHMpIHtcbiAgICAgICAgICByZXR1cm4gaGFuZGxlQ2xpY2soZSwgcHJvcHMpO1xuICAgICAgICB9XG4gICAgICB9KSxcbiAgICAgIHNlbGVjdGFibGUoaW5kZXgpXG4gICAgKTtcbiAgfTtcblxuICB2YXIgdGV4dCA9IGZ1bmN0aW9uIHRleHQoaXRlbSwgaW5kZXgpIHtcbiAgICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICBfbGlzdEl0ZW0yLmRlZmF1bHQsXG4gICAgICB7XG4gICAgICAgIGtleTogaW5kZXgsXG4gICAgICAgIGJvZHk6IGl0ZW0sXG4gICAgICAgIG9uQ2xpY2s6IGZ1bmN0aW9uIG9uQ2xpY2soZSwgcHJvcHMpIHtcbiAgICAgICAgICByZXR1cm4gaGFuZGxlQ2xpY2soZSwgcHJvcHMpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgc2VsZWN0YWJsZShpbmRleClcbiAgICApO1xuICB9O1xuXG4gIHZhciBpdGVtcyA9IHVuZGVmaW5lZDtcbiAgaWYgKHByb3BzLml0ZW1zKSB7XG4gICAgaXRlbXMgPSBwcm9wcy5pdGVtcy5tYXAoZnVuY3Rpb24gKGl0ZW0sIGluZGV4KSB7XG4gICAgICByZXR1cm4gX3VmdW5jMi5kZWZhdWx0LmVpdGhlcihsaW5rKGl0ZW0sIGluZGV4KSwgdGV4dChpdGVtLCBpbmRleCkpKGl0ZW0uaHJlZik7XG4gICAgfSk7XG4gIH1cblxuICB2YXIgYXR0ciA9IF9leHRlbmRzKHt9LCBjbGVhblByb3BzLCBfcmVhY3RVaWtpdEJhc2UyLmRlZmF1bHQuZXZlbnRzKHByb3BzKSwge1xuICAgICdkYXRhLWtpdGlkJzogcHJvcHMua2l0aWQsXG4gICAgY2xhc3NOYW1lOiBjc3NDbGFzc05hbWVzXG4gIH0pO1xuXG4gIHZhciB0eXBlID0ge1xuICAgIHVub3JkZXJkOiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICd1bCcsXG4gICAgICBhdHRyLFxuICAgICAgaXRlbXMsXG4gICAgICBwcm9wcy5jaGlsZHJlblxuICAgICksXG5cbiAgICBvcmRlcmVkOiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICdvbCcsXG4gICAgICBhdHRyLFxuICAgICAgaXRlbXMsXG4gICAgICBwcm9wcy5jaGlsZHJlblxuICAgICksXG5cbiAgICBkZXNjcmlwdGlvbjogX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAnZGwnLFxuICAgICAgYXR0cixcbiAgICAgIHByb3BzLmNoaWxkcmVuXG4gICAgKVxuICB9O1xuXG4gIC8vIFJldHVybiBDb21wb25lbnRcbiAgcmV0dXJuIHR5cGVbcHJvcHMudHlwZV0gfHwgdHlwZVsndW5vcmRlcmQnXTtcbn07XG5cbkxpc3QucHJvcFR5cGVzID0ge1xuICBjaGlsZHJlbjogX3JlYWN0Mi5kZWZhdWx0LlByb3BUeXBlcy5hbnksXG4gIGNsYXNzTmFtZTogX3JlYWN0Mi5kZWZhdWx0LlByb3BUeXBlcy5zdHJpbmcsXG4gIGNsYXNzZXM6IF9yZWFjdDIuZGVmYXVsdC5Qcm9wVHlwZXMuYXJyYXksXG4gIGRlc2NyaXB0aW9uOiBfcmVhY3QyLmRlZmF1bHQuUHJvcFR5cGVzLnN0cmluZyxcbiAgaXRlbXM6IF9yZWFjdDIuZGVmYXVsdC5Qcm9wVHlwZXMuYXJyYXksXG4gIGhvcml6b250YWw6IF9yZWFjdDIuZGVmYXVsdC5Qcm9wVHlwZXMuYm9vbCxcbiAga2l0aWQ6IF9yZWFjdDIuZGVmYXVsdC5Qcm9wVHlwZXMuc3RyaW5nLFxuICBsaW5lOiBfcmVhY3QyLmRlZmF1bHQuUHJvcFR5cGVzLmJvb2wsXG4gIHN0cmlwZWQ6IF9yZWFjdDIuZGVmYXVsdC5Qcm9wVHlwZXMuYm9vbCxcbiAgb25TZWxlY3Q6IF9yZWFjdDIuZGVmYXVsdC5Qcm9wVHlwZXMuZnVuYyxcbiAgc3BhY2U6IF9yZWFjdDIuZGVmYXVsdC5Qcm9wVHlwZXMuYm9vbCxcbiAgdHlwZTogX3JlYWN0Mi5kZWZhdWx0LlByb3BUeXBlcy5vbmVPZihbJ2Rlc2NyaXB0aW9uJywgJ29yZGVyZWQnLCAndW5vcmRlcmQnXSlcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IF9yZWFjdFVpa2l0QmFzZTIuZGVmYXVsdC5iYXNlKExpc3QpO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4uL2NvbXBvbmVudHMvcmVhY3QtdWlraXQtbGlzdC9saWIvbGlzdC5qc1xuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=");

/***/ }

})