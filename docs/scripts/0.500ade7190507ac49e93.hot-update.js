webpackHotUpdate(0,{

/***/ 2705:
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(2);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactUikitCodeblock = __webpack_require__(134);\n\nvar _reactUikitCodeblock2 = _interopRequireDefault(_reactUikitCodeblock);\n\nvar _reactUikitImg = __webpack_require__(526);\n\nvar _reactUikitImg2 = _interopRequireDefault(_reactUikitImg);\n\nvar _reactUikitTable = __webpack_require__(117);\n\nvar _reactUikitTable2 = _interopRequireDefault(_reactUikitTable);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar ImgDoc = function ImgDoc(props) {\n  return _react2.default.createElement(\n    'div',\n    null,\n    _react2.default.createElement(\n      'section',\n      null,\n      _react2.default.createElement(\n        'h1',\n        null,\n        'Img'\n      ),\n      _react2.default.createElement(\n        'p',\n        { className: 'uk-article-lead' },\n        'Easily create responsive images.'\n      ),\n      _react2.default.createElement(\n        'p',\n        null,\n        _react2.default.createElement(\n          'a',\n          { href: 'https://github.com/otissv/react-uikit-ing' },\n          'react-uikit-ing'\n        ),\n        ' on github.'\n      )\n    ),\n    _react2.default.createElement(\n      'section',\n      null,\n      _react2.default.createElement(\n        'h2',\n        null,\n        'Usage'\n      ),\n      _react2.default.createElement(\n        _reactUikitCodeblock2.default,\n        null,\n        'npm install react-uikit-img --save;\\n\\n// ES6\\nimport Img from \\'react-uikit-img\\';\\n\\n// ES5\\nvar Img = require(\\'react-uikit-img\\');\\n'\n      ),\n      _react2.default.createElement(\n        'h3',\n        { className: 'example' },\n        'Example'\n      ),\n      _react2.default.createElement(_reactUikitImg2.default, { width: '300px', height: '200px', src: 'docs/images/placeholder_200x150_2.svg' }),\n      _react2.default.createElement(\n        'h4',\n        { className: 'code' },\n        'Code'\n      ),\n      _react2.default.createElement(\n        _reactUikitCodeblock2.default,\n        { syntax: 'xml' },\n        '<Img width=\\'300px\\' height=\\'200px\\' src=\\'docs/images/placeholder_200x150_2.svg\\' />\\n'\n      )\n    ),\n    _react2.default.createElement(\n      'section',\n      null,\n      _react2.default.createElement(\n        'h2',\n        null,\n        'Responsive image'\n      ),\n      _react2.default.createElement(\n        'p',\n        null,\n        'The Image component provides different images for various viewport widths. To enable responsive behavior by adding one or all of the responsive props ',\n        _react2.default.createElement(\n          'code',\n          null,\n          'small'\n        ),\n        ', ',\n        _react2.default.createElement(\n          'code',\n          null,\n          'medium'\n        ),\n        ' ',\n        _react2.default.createElement(\n          'code',\n          null,\n          'large'\n        ),\n        ' ',\n        _react2.default.createElement(\n          'code',\n          null,\n          'xlarge'\n        ),\n        '.'\n      ),\n      _react2.default.createElement(\n        'p',\n        null,\n        'Each responsive size takes a JSON object.'\n      ),\n      _react2.default.createElement(\n        _reactUikitTable2.default,\n        null,\n        _react2.default.createElement(\n          'thead',\n          null,\n          _react2.default.createElement(\n            'tr',\n            null,\n            _react2.default.createElement(\n              'th',\n              { className: 'uk-text-left' },\n              'JSON key'\n            ),\n            _react2.default.createElement(\n              'th',\n              { className: 'uk-text-left' },\n              'Description'\n            )\n          )\n        ),\n        _react2.default.createElement(\n          'tbody',\n          null,\n          _react2.default.createElement(\n            'tr',\n            null,\n            _react2.default.createElement(\n              'td',\n              { className: 'uk-text-left' },\n              'width'\n            ),\n            _react2.default.createElement(\n              'td',\n              { className: 'uk-text-left' },\n              'The width of the image. The defualt width is 100% if no width is specified'\n            )\n          ),\n          _react2.default.createElement(\n            'tr',\n            null,\n            _react2.default.createElement(\n              'td',\n              { className: 'uk-text-left' },\n              'height'\n            ),\n            _react2.default.createElement(\n              'td',\n              { className: 'uk-text-left' },\n              'The height of the image. The defualt height is auto if no height is specified'\n            )\n          ),\n          _react2.default.createElement(\n            'tr',\n            null,\n            _react2.default.createElement(\n              'td',\n              { className: 'uk-text-left' },\n              'src'\n            ),\n            _react2.default.createElement(\n              'td',\n              { className: 'uk-text-left' },\n              'The src url for the image'\n            )\n          )\n        )\n      ),\n      _react2.default.createElement(\n        'p',\n        null,\n        'For non-responsive images use the html ',\n        _react2.default.createElement(\n          'code',\n          null,\n          'img'\n        ),\n        ' tag.'\n      ),\n      _react2.default.createElement(\n        'h4',\n        { className: 'example' },\n        'Example'\n      ),\n      _react2.default.createElement(_reactUikitImg2.default, {\n        small: { height: '150px', src: 'docs/images/placeholder_200x150_1.svg' },\n        medium: { height: '250px', src: 'docs/images/placeholder_200x150_2.svg' },\n        large: { height: '350px', src: 'docs/images/placeholder_200x150_3.svg' },\n        xlarge: { height: '450px', src: 'docs/images/placeholder_200x150_4.svg' }\n      }),\n      _react2.default.createElement(\n        _reactUikitCodeblock2.default,\n        { syntax: 'xml' },\n        '<Img\\n  small={{height: \\'150px\\', src: \\'docs/images/placeholder_200x150_1.svg\\'} }\\n  medium={{height: \\'250px\\', src: \\'docs/images/placeholder_200x150_2.svg\\'} }\\n  large={{height: \\'350px\\', src: \\'docs/images/placeholder_200x150_3.svg\\'} }\\n  xlarge={{height: \\'450px\\', src: \\'docs/images/placeholder_200x150_4.svg\\'} }\\n/>\\n'\n      )\n    ),\n    _react2.default.createElement(\n      'section',\n      null,\n      _react2.default.createElement(\n        'h1',\n        null,\n        'Cover images'\n      ),\n      _react2.default.createElement(\n        'p',\n        null,\n        'The ',\n        _react2.default.createElement(\n          'code',\n          null,\n          'cover'\n        ),\n        ' component allows you to create fullscreen teasers using images. It will always be centered vertically and horizontally and cover its container without losing its proportions. You can also place additional content, like text or images on top of the image by placing it inside of the ',\n        _react2.default.createElement(\n          'code',\n          null,\n          '<Image>'\n        ),\n        ' component.'\n      ),\n      _react2.default.createElement(\n        'h4',\n        { className: 'example' },\n        'Example'\n      ),\n      _react2.default.createElement(\n        _reactUikitImg2.default,\n        { cover: true,\n          small: { height: '150px', src: 'docs/images/placeholder_200x150_1.svg' },\n          medium: { height: '250px', src: 'docs/images/placeholder_200x150_2.svg' },\n          large: { height: '350px', src: 'docs/images/placeholder_200x150_3.svg' },\n          xlarge: { height: '450px', src: 'docs/images/placeholder_200x150_4.svg' }\n        },\n        _react2.default.createElement(\n          'h1',\n          null,\n          'Cover image'\n        )\n      ),\n      _react2.default.createElement(\n        'h4',\n        { className: 'code' },\n        'Code'\n      ),\n      _react2.default.createElement(\n        _reactUikitCodeblock2.default,\n        { syntax: 'xml' },\n        '<Img cover\\n  small={{height: \\'150px\\', src: \\'docs/images/placeholder_200x150_1.svg\\'} }\\n  medium={{height: \\'250px\\', src: \\'docs/images/placeholder_200x150_2.svg\\'} }\\n  large={{height: \\'350px\\', src: \\'docs/images/placeholder_200x150_3.svg\\'} }\\n  xlarge={{height: \\'450px\\', src: \\'docs/images/placeholder_200x150_4.svg\\'} }\\n>\\n\\n  <h1>Cover image</h1>\\n</Img>\\n'\n      )\n    ),\n    _react2.default.createElement(\n      'section',\n      null,\n      _react2.default.createElement(\n        'h2',\n        null,\n        'Img Props'\n      ),\n      _react2.default.createElement(\n        'p',\n        null,\n        'See base component for additional utility props.'\n      ),\n      _react2.default.createElement(\n        _reactUikitTable2.default,\n        null,\n        _react2.default.createElement(\n          'thead',\n          null,\n          _react2.default.createElement(\n            'tr',\n            null,\n            _react2.default.createElement(\n              'th',\n              { className: 'uk-text-left' },\n              'Prop'\n            ),\n            _react2.default.createElement(\n              'th',\n              { className: 'uk-text-left' },\n              'Type'\n            )\n          )\n        ),\n        _react2.default.createElement(\n          'tbody',\n          null,\n          _react2.default.createElement(\n            'tr',\n            null,\n            _react2.default.createElement(\n              'td',\n              { className: 'uk-text-left' },\n              _react2.default.createElement(\n                'code',\n                null,\n                'alt'\n              )\n            ),\n            _react2.default.createElement(\n              'td',\n              { className: 'uk-text-left' },\n              'string'\n            )\n          ),\n          _react2.default.createElement(\n            'tr',\n            null,\n            _react2.default.createElement(\n              'td',\n              { className: 'uk-text-left' },\n              _react2.default.createElement(\n                'code',\n                null,\n                'cover'\n              )\n            ),\n            _react2.default.createElement(\n              'td',\n              { colSpan: '2' },\n              'Bool'\n            )\n          ),\n          _react2.default.createElement(\n            'tr',\n            null,\n            _react2.default.createElement(\n              'td',\n              { className: 'uk-text-left' },\n              _react2.default.createElement(\n                'code',\n                null,\n                'height'\n              )\n            ),\n            _react2.default.createElement(\n              'td',\n              { className: 'uk-text-left' },\n              'string'\n            )\n          ),\n          _react2.default.createElement(\n            'tr',\n            null,\n            _react2.default.createElement(\n              'td',\n              { className: 'uk-text-left' },\n              _react2.default.createElement(\n                'code',\n                null,\n                'large'\n              )\n            ),\n            _react2.default.createElement(\n              'td',\n              { className: 'uk-text-left' },\n              'object',\n              _react2.default.createElement('br', null),\n              '{width, height, src}'\n            ),\n            _react2.default.createElement('td', { className: 'uk-text-left' })\n          ),\n          _react2.default.createElement(\n            'tr',\n            null,\n            _react2.default.createElement(\n              'td',\n              { className: 'uk-text-left' },\n              _react2.default.createElement(\n                'code',\n                null,\n                'medium'\n              )\n            ),\n            _react2.default.createElement(\n              'td',\n              { className: 'uk-text-left' },\n              'object',\n              _react2.default.createElement('br', null),\n              '{width, height, src}'\n            )\n          ),\n          _react2.default.createElement(\n            'tr',\n            null,\n            _react2.default.createElement(\n              'td',\n              { className: 'uk-text-left' },\n              _react2.default.createElement(\n                'code',\n                null,\n                'small'\n              )\n            ),\n            _react2.default.createElement(\n              'td',\n              { className: 'uk-text-left' },\n              'object',\n              _react2.default.createElement('br', null),\n              '{width, height, src}'\n            )\n          ),\n          _react2.default.createElement(\n            'tr',\n            null,\n            _react2.default.createElement(\n              'td',\n              { className: 'uk-text-left' },\n              _react2.default.createElement(\n                'code',\n                null,\n                'src'\n              )\n            ),\n            _react2.default.createElement(\n              'td',\n              { className: 'uk-text-left' },\n              'string'\n            )\n          ),\n          _react2.default.createElement(\n            'tr',\n            null,\n            _react2.default.createElement(\n              'td',\n              { className: 'uk-text-left' },\n              _react2.default.createElement(\n                'code',\n                null,\n                'width'\n              )\n            ),\n            _react2.default.createElement(\n              'td',\n              { className: 'uk-text-left' },\n              'string'\n            )\n          ),\n          _react2.default.createElement(\n            'tr',\n            null,\n            _react2.default.createElement(\n              'td',\n              { className: 'uk-text-left' },\n              _react2.default.createElement(\n                'code',\n                null,\n                'xlarge'\n              )\n            ),\n            _react2.default.createElement(\n              'td',\n              { className: 'uk-text-left' },\n              'object',\n              _react2.default.createElement('br', null),\n              '{width, height, src}'\n            )\n          )\n        )\n      )\n    )\n  );\n};\n\nexports.default = ImgDoc;\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9pbWctZG9jLmpzeD83NDhiIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBVWIsSUFBTSxNQUFNLEdBQUcsU0FBVCxNQUFNLENBQUksS0FBSztTQUNuQjs7O0lBQ0U7OztNQUNFOzs7O09BQVk7TUFDWjs7VUFBRyxTQUFTLEVBQUMsaUJBQWlCOztPQUUxQjtNQUVKOzs7UUFDRTs7WUFBRyxJQUFJLEVBQUMsMkNBQTJDOztTQUFvQjs7T0FDckU7S0FDSTtJQUdWOzs7TUFDRTs7OztPQUFjO01BQ2Q7Ozs7T0FTWTtNQUdaOztVQUFJLFNBQVMsRUFBQyxTQUFTOztPQUFhO01BQ3BDLHlEQUFLLEtBQUssRUFBQyxPQUFPLEVBQUMsTUFBTSxFQUFDLE9BQU8sRUFBQyxHQUFHLEVBQUMsdUNBQXVDLEdBQUc7TUFFaEY7O1VBQUksU0FBUyxFQUFDLE1BQU07O09BQVU7TUFDOUI7O1VBQVcsTUFBTSxFQUFDLEtBQUs7O09BSVg7S0FDSjtJQUVWOzs7TUFFQTs7OztPQUF5QjtNQUN6Qjs7OztRQUcrQjs7OztTQUFrQjs7UUFBRTs7OztTQUFtQjs7UUFBQzs7OztTQUFrQjs7UUFBQzs7OztTQUFtQjs7T0FDekc7TUFFSjs7OztPQUVJO01BRUo7OztRQUNFOzs7VUFDRTs7O1lBQ0U7O2dCQUFJLFNBQVMsRUFBQyxjQUFjOzthQUFjO1lBQzFDOztnQkFBSSxTQUFTLEVBQUMsY0FBYzs7YUFBaUI7V0FDMUM7U0FDQztRQUNSOzs7VUFDRTs7O1lBQ0U7O2dCQUFJLFNBQVMsRUFBQyxjQUFjOzthQUFXO1lBQ3ZDOztnQkFBSSxTQUFTLEVBQUMsY0FBYzs7YUFBZ0Y7V0FDekc7VUFDTDs7O1lBQ0U7O2dCQUFJLFNBQVMsRUFBQyxjQUFjOzthQUFZO1lBQ3hDOztnQkFBSSxTQUFTLEVBQUMsY0FBYzs7YUFBbUY7V0FDNUc7VUFDTDs7O1lBQ0U7O2dCQUFJLFNBQVMsRUFBQyxjQUFjOzth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TDs7Z0JBQUksU0FBUyxFQUFDLGNBQWM7O2FBQVk7V0FDckM7VUFDTDs7O1lBQ0U7O2dCQUFJLFNBQVMsRUFBQyxjQUFjO2NBQzFCOzs7O2VBQW1CO2FBQ2hCO1lBQ0w7O2dCQUFJLFNBQVMsRUFBQyxjQUFjOztjQUFPLHlDQUFNOzthQUE2QjtXQUNuRTtTQUNDO09BQ0Y7S0FDQTtHQUVOO0NBQ1AsQ0FBQzs7a0JBRWEsTUFBTSIsImZpbGUiOiIyNzA1LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQ29kZWJsb2NrIGZyb20gJ3JlYWN0LXVpa2l0LWNvZGVibG9jayc7XG5pbXBvcnQgSW1nIGZyb20gJ3JlYWN0LXVpa2l0LWltZyc7XG5pbXBvcnQgVGFibGUgZnJvbSAncmVhY3QtdWlraXQtdGFibGUnO1xuXG5cblxuY29uc3QgSW1nRG9jID0gKHByb3BzKSA9PiAoXG4gIDxkaXY+XG4gICAgPHNlY3Rpb24+XG4gICAgICA8aDE+SW1nPC9oMT5cbiAgICAgIDxwIGNsYXNzTmFtZT0ndWstYXJ0aWNsZS1sZWFkJz5cbiAgICAgICAgRWFzaWx5IGNyZWF0ZSByZXNwb25zaXZlIGltYWdlcy5cbiAgICAgIDwvcD5cblxuICAgICAgPHA+XG4gICAgICAgIDxhIGhyZWY9J2h0dHBzOi8vZ2l0aHViLmNvbS9vdGlzc3YvcmVhY3QtdWlraXQtaW5nJz5yZWFjdC11aWtpdC1pbmc8L2E+IG9uIGdpdGh1Yi5cbiAgICAgIDwvcD5cbiAgICA8L3NlY3Rpb24+XG5cblxuICAgIDxzZWN0aW9uPlxuICAgICAgPGgyPlVzYWdlPC9oMj5cbiAgICAgIDxDb2RlYmxvY2s+XG57YG5wbSBpbnN0YWxsIHJlYWN0LXVpa2l0LWltZyAtLXNhdmU7XG5cbi8vIEVTNlxuaW1wb3J0IEltZyBmcm9tICdyZWFjdC11aWtpdC1pbWcnO1xuXG4vLyBFUzVcbnZhciBJbWcgPSByZXF1aXJlKCdyZWFjdC11aWtpdC1pbWcnKTtcbmB9XG4gICAgICA8L0NvZGVibG9jaz5cblxuXG4gICAgICA8aDMgY2xhc3NOYW1lPSdleGFtcGxlJz5FeGFtcGxlPC9oMz5cbiAgICAgIDxJbWcgd2lkdGg9JzMwMHB4JyBoZWlnaHQ9JzIwMHB4JyBzcmM9J2RvY3MvaW1hZ2VzL3BsYWNlaG9sZGVyXzIwMHgxNTBfMi5zdmcnIC8+XG5cbiAgICAgIDxoNCBjbGFzc05hbWU9J2NvZGUnPkNvZGU8L2g0PlxuICAgICAgPENvZGVibG9jayBzeW50YXg9J3htbCc+XG57XG5gPEltZyB3aWR0aD0nMzAwcHgnIGhlaWdodD0nMjAwcHgnIHNyYz0nZG9jcy9pbWFnZXMvcGxhY2Vob2xkZXJfMjAweDE1MF8yLnN2ZycgLz5cbmB9XG4gICAgICA8L0NvZGVibG9jaz5cbiAgICA8L3NlY3Rpb24+XG5cbiAgICA8c2VjdGlvbj5cblxuICAgIDxoMj5SZXNwb25zaXZlIGltYWdlPC9oMj5cbiAgICA8cD5cbiAgICAgIFRoZSBJbWFnZSBjb21wb25lbnQgcHJvdmlkZXMgZGlmZmVyZW50IGltYWdlcyBmb3IgdmFyaW91c1xuICAgICAgdmlld3BvcnQgd2lkdGhzLiBUbyBlbmFibGUgcmVzcG9uc2l2ZSBiZWhhdmlvciBieSBhZGRpbmcgb25lIG9yXG4gICAgICAgYWxsIG9mIHRoZSByZXNwb25zaXZlIHByb3BzIDxjb2RlPnNtYWxsPC9jb2RlPiwgPGNvZGU+bWVkaXVtPC9jb2RlPiA8Y29kZT5sYXJnZTwvY29kZT4gPGNvZGU+eGxhcmdlPC9jb2RlPi5cbiAgICA8L3A+XG5cbiAgICA8cD5cbiAgICAgIEVhY2ggcmVzcG9uc2l2ZSBzaXplIHRha2VzIGEgSlNPTiBvYmplY3QuXG4gICAgPC9wPlxuXG4gICAgPFRhYmxlPlxuICAgICAgPHRoZWFkPlxuICAgICAgICA8dHI+XG4gICAgICAgICAgPHRoIGNsYXNzTmFtZT0ndWstdGV4dC1sZWZ0Jz5KU09OIGtleTwvdGg+XG4gICAgICAgICAgPHRoIGNsYXNzTmFtZT0ndWstdGV4dC1sZWZ0Jz5EZXNjcmlwdGlvbjwvdGg+XG4gICAgICAgIDwvdHI+XG4gICAgICA8L3RoZWFkPlxuICAgICAgPHRib2R5PlxuICAgICAgICA8dHI+XG4gICAgICAgICAgPHRkIGNsYXNzTmFtZT0ndWstdGV4dC1sZWZ0Jz53aWR0aDwvdGQ+XG4gICAgICAgICAgPHRkIGNsYXNzTmFtZT0ndWstdGV4dC1sZWZ0Jz5UaGUgd2lkdGggb2YgdGhlIGltYWdlLiBUaGUgZGVmdWFsdCB3aWR0aCBpcyAxMDAlIGlmIG5vIHdpZHRoIGlzIHNwZWNpZmllZDwvdGQ+XG4gICAgICAgIDwvdHI+XG4gICAgICAgIDx0cj5cbiAgICAgICAgICA8dGQgY2xhc3NOYW1lPSd1ay10ZXh0LWxlZnQnPmhlaWdodDwvdGQ+XG4gICAgICAgICAgPHRkIGNsYXNzTmFtZT0ndWstdGV4dC1sZWZ0Jz5UaGUgaGVpZ2h0IG9mIHRoZSBpbWFnZS4gVGhlIGRlZnVhbHQgaGVpZ2h0IGlzIGF1dG8gaWYgbm8gaGVpZ2h0IGlzIHNwZWNpZmllZDwvdGQ+XG4gICAgICAgIDwvdHI+XG4gICAgICAgIDx0cj5cbiAgICAgICAgICA8dGQgY2xhc3NOYW1lPSd1ay10ZXh0LWxlZnQnPnNyYzwvdGQ+XG4gICAgICAgICAgPHRkIGNsYXNzTmFtZT0ndWstdGV4dC1sZWZ0Jz5UaGUgc3JjIHVybCBmb3IgdGhlIGltYWdlPC90ZD5cbiAgICAgICAgPC90cj5cbiAgICAgIDwvdGJvZHk+XG4gICAgPC9UYWJsZT5cblxuICAgIDxwPlxuICAgICAgRm9yIG5vbi1yZXNwb25zaXZlIGltYWdlcyB1c2UgdGhlIGh0bWwgPGNvZGU+aW1nPC9jb2RlPiB0YWcuXG4gICAgPC9wPlxuXG4gICAgPGg0IGNsYXNzTmFtZT0nZXhhbXBsZSc+RXhhbXBsZTwvaDQ+XG5cbiAgICA8SW1nXG4gICAgICBzbWFsbD17e2hlaWdodDogJzE1MHB4Jywgc3JjOiAnZG9jcy9pbWFnZXMvcGxhY2Vob2xkZXJfMjAweDE1MF8xLnN2Zyd9IH1cbiAgICAgIG1lZGl1bT17e2hlaWdodDogJzI1MHB4Jywgc3JjOiAnZG9jcy9pbWFnZXMvcGxhY2Vob2xkZXJfMjAweDE1MF8yLnN2Zyd9IH1cbiAgICAgIGxhcmdlPXt7aGVpZ2h0OiAnMzUwcHgnLCBzcmM6ICdkb2NzL2ltYWdlcy9wbGFjZWhvbGRlcl8yMDB4MTUwXzMuc3ZnJ30gfVxuICAgICAgeGxhcmdlPXt7aGVpZ2h0OiAnNDUwcHgnLCBzcmM6ICdkb2NzL2ltYWdlcy9wbGFjZWhvbGRlcl8yMDB4MTUwXzQuc3ZnJ30gfVxuICAgIC8+XG5cblxuICAgIDxDb2RlYmxvY2sgc3ludGF4PSd4bWwnPlxue1xuYDxJbWdcbiAgc21hbGw9e3toZWlnaHQ6ICcxNTBweCcsIHNyYzogJ2RvY3MvaW1hZ2VzL3BsYWNlaG9sZGVyXzIwMHgxNTBfMS5zdmcnfSB9XG4gIG1lZGl1bT17e2hlaWdodDogJzI1MHB4Jywgc3JjOiAnZG9jcy9pbWFnZXMvcGxhY2Vob2xkZXJfMjAweDE1MF8yLnN2Zyd9IH1cbiAgbGFyZ2U9e3toZWlnaHQ6ICczNTBweCcsIHNyYzogJ2RvY3MvaW1hZ2VzL3BsYWNlaG9sZGVyXzIwMHgxNTBfMy5zdmcnfSB9XG4gIHhsYXJnZT17e2hlaWdodDogJzQ1MHB4Jywgc3JjOiAnZG9jcy9pbWFnZXMvcGxhY2Vob2xkZXJfMjAweDE1MF80LnN2Zyd9IH1cbi8+XG5gfVxuICAgIDwvQ29kZWJsb2NrPlxuICA8L3NlY3Rpb24+XG5cblxuICA8c2VjdGlvbj5cbiAgICA8aDE+Q292ZXIgaW1hZ2VzPC9oMT5cbiAgICA8cD5cbiAgICAgIFRoZSA8Y29kZT5jb3ZlcjwvY29kZT4gY29tcG9uZW50IGFsbG93cyB5b3UgdG8gY3JlYXRlIGZ1bGxzY3JlZW4gdGVhc2VycyB1c2luZyBpbWFnZXMuIEl0IHdpbGwgYWx3YXlzXG4gICAgICBiZSBjZW50ZXJlZCB2ZXJ0aWNhbGx5IGFuZCBob3Jpem9udGFsbHkgYW5kIGNvdmVyIGl0cyBjb250YWluZXIgd2l0aG91dFxuICAgICAgbG9zaW5nIGl0cyBwcm9wb3J0aW9ucy4gWW91IGNhbiBhbHNvIHBsYWNlIGFkZGl0aW9uYWwgY29udGVudCwgbGlrZSB0ZXh0XG4gICAgICBvciBpbWFnZXMgb24gdG9wIG9mIHRoZSBpbWFnZSBieSBwbGFjaW5nIGl0IGluc2lkZSBvZiB0aGUgPGNvZGU+Jmx0O0ltYWdlJmd0OzwvY29kZT4gY29tcG9uZW50LlxuICAgIDwvcD5cblxuXG4gICAgPGg0IGNsYXNzTmFtZT0nZXhhbXBsZSc+RXhhbXBsZTwvaDQ+XG5cbiAgICA8SW1nIGNvdmVyXG4gICAgICBzbWFsbD17e2hlaWdodDogJzE1MHB4Jywgc3JjOiAnZG9jcy9pbWFnZXMvcGxhY2Vob2xkZXJfMjAweDE1MF8xLnN2Zyd9IH1cbiAgICAgIG1lZGl1bT17e2hlaWdodDogJzI1MHB4Jywgc3JjOiAnZG9jcy9pbWFnZXMvcGxhY2Vob2xkZXJfMjAweDE1MF8yLnN2Zyd9IH1cbiAgICAgIGxhcmdlPXt7aGVpZ2h0OiAnMzUwcHgnLCBzcmM6ICdkb2NzL2ltYWdlcy9wbGFjZWhvbGRlcl8yMDB4MTUwXzMuc3ZnJ30gfVxuICAgICAgeGxhcmdlPXt7aGVpZ2h0OiAnNDUwcHgnLCBzcmM6ICdkb2NzL2ltYWdlcy9wbGFjZWhvbGRlcl8yMDB4MTUwXzQuc3ZnJ30gfVxuICAgID5cblxuICAgICAgPGgxPkNvdmVyIGltYWdlPC9oMT5cbiAgICA8L0ltZz5cblxuXG4gICAgPGg0IGNsYXNzTmFtZT0nY29kZSc+Q29kZTwvaDQ+XG4gICAgPENvZGVibG9jayBzeW50YXg9J3htbCc+XG57XG5gPEltZyBjb3ZlclxuICBzbWFsbD17e2hlaWdodDogJzE1MHB4Jywgc3JjOiAnZG9jcy9pbWFnZXMvcGxhY2Vob2xkZXJfMjAweDE1MF8xLnN2Zyd9IH1cbiAgbWVkaXVtPXt7aGVpZ2h0OiAnMjUwcHgnLCBzcmM6ICdkb2NzL2ltYWdlcy9wbGFjZWhvbGRlcl8yMDB4MTUwXzIuc3ZnJ30gfVxuICBsYXJnZT17e2hlaWdodDogJzM1MHB4Jywgc3JjOiAnZG9jcy9pbWFnZXMvcGxhY2Vob2xkZXJfMjAweDE1MF8zLnN2Zyd9IH1cbiAgeGxhcmdlPXt7aGVpZ2h0OiAnNDUwcHgnLCBzcmM6ICdkb2NzL2ltYWdlcy9wbGFjZWhvbGRlcl8yMDB4MTUwXzQuc3ZnJ30gfVxuPlxuXG4gIDxoMT5Db3ZlciBpbWFnZTwvaDE+XG48L0ltZz5cbmB9XG4gICAgPC9Db2RlYmxvY2s+XG4gIDwvc2VjdGlvbj5cblxuXG4gICAgPHNlY3Rpb24+XG4gICAgICA8aDI+SW1nIFByb3BzPC9oMj5cblxuICAgICAgICA8cD5cbiAgICAgICAgU2VlIGJhc2UgY29tcG9uZW50IGZvciBhZGRpdGlvbmFsIHV0aWxpdHkgcHJvcHMuXG4gICAgICAgIDwvcD5cblxuICAgICAgPFRhYmxlPlxuICAgICAgICA8dGhlYWQ+XG4gICAgICAgICAgPHRyPlxuICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT0ndWstdGV4dC1sZWZ0Jz5Qcm9wPC90aD5cbiAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9J3VrLXRleHQtbGVmdCc+VHlwZTwvdGg+XG5cbiAgICAgICAgICA8L3RyPlxuICAgICAgICA8L3RoZWFkPlxuICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgPHRyPlxuICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT0ndWstdGV4dC1sZWZ0Jz5cbiAgICAgICAgICAgICAgPGNvZGU+YWx0PC9jb2RlPlxuICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9J3VrLXRleHQtbGVmdCc+c3RyaW5nPC90ZD5cbiAgICAgICAgICA8L3RyPlxuICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9J3VrLXRleHQtbGVmdCc+XG4gICAgICAgICAgICAgIDxjb2RlPmNvdmVyPC9jb2RlPlxuICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgIDx0ZCBjb2xTcGFuPScyJz5Cb29sPC90ZD5cbiAgICAgICAgICA8L3RyPlxuICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9J3VrLXRleHQtbGVmdCc+XG4gICAgICAgICAgICAgIDxjb2RlPmhlaWdodDwvY29kZT5cbiAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICA8dGQgY2xhc3NOYW1lPSd1ay10ZXh0LWxlZnQnPnN0cmluZzwvdGQ+XG4gICAgICAgICAgPC90cj5cbiAgICAgICAgICA8dHI+XG4gICAgICAgICAgICA8dGQgY2xhc3NOYW1lPSd1ay10ZXh0LWxlZnQnPlxuICAgICAgICAgICAgICA8Y29kZT5sYXJnZTwvY29kZT5cbiAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICA8dGQgY2xhc3NOYW1lPSd1ay10ZXh0LWxlZnQnPm9iamVjdDxiciAvPntge3dpZHRoLCBoZWlnaHQsIHNyY31gfTwvdGQ+XG4gICAgICAgICAgICA8dGQgY2xhc3NOYW1lPSd1ay10ZXh0LWxlZnQnPjwvdGQ+XG4gICAgICAgICAgPC90cj5cbiAgICAgICAgICA8dHI+XG4gICAgICAgICAgICA8dGQgY2xhc3NOYW1lPSd1ay10ZXh0LWxlZnQnPlxuICAgICAgICAgICAgICA8Y29kZT5tZWRpdW08L2NvZGU+XG4gICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT0ndWstdGV4dC1sZWZ0Jz5vYmplY3Q8YnIgLz57YHt3aWR0aCwgaGVpZ2h0LCBzcmN9YH08L3RkPlxuICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgPHRyPlxuICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT0ndWstdGV4dC1sZWZ0Jz5cbiAgICAgICAgICAgICAgPGNvZGU+c21hbGw8L2NvZGU+XG4gICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT0ndWstdGV4dC1sZWZ0Jz5vYmplY3Q8YnIgLz57YHt3aWR0aCwgaGVpZ2h0LCBzcmN9YH08L3RkPlxuICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgPHRyPlxuICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT0ndWstdGV4dC1sZWZ0Jz5cbiAgICAgICAgICAgICAgPGNvZGU+c3JjPC9jb2RlPlxuICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9J3VrLXRleHQtbGVmdCc+c3RyaW5nPC90ZD5cbiAgICAgICAgICA8L3RyPlxuICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9J3VrLXRleHQtbGVmdCc+XG4gICAgICAgICAgICAgIDxjb2RlPndpZHRoPC9jb2RlPlxuICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9J3VrLXRleHQtbGVmdCc+c3RyaW5nPC90ZD5cbiAgICAgICAgICA8L3RyPlxuICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9J3VrLXRleHQtbGVmdCc+XG4gICAgICAgICAgICAgIDxjb2RlPnhsYXJnZTwvY29kZT5cbiAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICA8dGQgY2xhc3NOYW1lPSd1ay10ZXh0LWxlZnQnPm9iamVjdDxiciAvPntge3dpZHRoLCBoZWlnaHQsIHNyY31gfTwvdGQ+XG4gICAgICAgICAgPC90cj5cbiAgICAgICAgPC90Ym9keT5cbiAgICAgIDwvVGFibGU+XG4gICAgPC9zZWN0aW9uPlxuXG4gIDwvZGl2PlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgSW1nRG9jO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9pbWctZG9jLmpzeFxuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=");

/***/ }

})