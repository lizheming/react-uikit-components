webpackHotUpdate(0,{

/***/ 2706:
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(2);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactUikitCodeblock = __webpack_require__(134);\n\nvar _reactUikitCodeblock2 = _interopRequireDefault(_reactUikitCodeblock);\n\nvar _reactUikitImgGallery = __webpack_require__(2793);\n\nvar _reactUikitImgGallery2 = _interopRequireDefault(_reactUikitImgGallery);\n\nvar _reactUikitTable = __webpack_require__(117);\n\nvar _reactUikitTable2 = _interopRequireDefault(_reactUikitTable);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar ImgGalleryDoc = function ImgGalleryDoc(props) {\n  return _react2.default.createElement(\n    'div',\n    null,\n    _react2.default.createElement(\n      'section',\n      null,\n      _react2.default.createElement(\n        'h1',\n        null,\n        'Img Gallery'\n      ),\n      _react2.default.createElement(\n        'p',\n        { className: 'uk-article-lead' },\n        'Create galery of images.'\n      ),\n      _react2.default.createElement(\n        'p',\n        null,\n        _react2.default.createElement(\n          'a',\n          { href: 'https://github.com/otissv/react-uikit-img-gallery' },\n          'react-uikit-img-gallery'\n        ),\n        ' on github.'\n      )\n    ),\n    _react2.default.createElement(\n      'section',\n      null,\n      _react2.default.createElement(\n        'h2',\n        null,\n        'Usage'\n      ),\n      _react2.default.createElement(\n        _reactUikitCodeblock2.default,\n        null,\n        'npm install react-uikit-img-gallery --save;\\n\\n// ES6\\nimport ImgGallery from \\'react-uikit-img-gallery\\';\\n\\n// ES5\\nvar ImgGallery = require(\\'react-uikit-img-gallery\\');\\n'\n      ),\n      _react2.default.createElement(\n        'h3',\n        { className: 'example' },\n        'Example'\n      ),\n      _react2.default.createElement(_reactUikitImgGallery2.default, {\n        items: [{ src: 'docs/images/placeholder_200x150_2.svg' }, { src: 'docs/images/placeholder_200x150_2.svg' }, { src: 'docs/images/placeholder_200x150_2.svg' }, { src: 'docs/images/placeholder_200x150_2.svg' }, { src: 'docs/images/placeholder_200x150_2.svg' }, { src: 'docs/images/placeholder_200x150_2.svg' }]\n      }),\n      _react2.default.createElement(\n        'h4',\n        { className: 'code' },\n        'Code'\n      ),\n      _react2.default.createElement(\n        _reactUikitCodeblock2.default,\n        { syntax: 'xml' },\n        '<ImgGroup\\nitems={[\\n  {src: \\'docs/images/placeholder_200x150_2.svg\\'},\\n  {src: \\'docs/images/placeholder_200x150_2.svg\\'},\\n  {src: \\'docs/images/placeholder_200x150_2.svg\\'},\\n  {src: \\'docs/images/placeholder_200x150_2.svg\\'},\\n  {src: \\'docs/images/placeholder_200x150_2.svg\\'},\\n  {src: \\'docs/images/placeholder_200x150_2.svg\\'}\\n]}\\n/>\\n'\n      )\n    ),\n    _react2.default.createElement(\n      'section',\n      null,\n      _react2.default.createElement(\n        'h2',\n        null,\n        'Img props'\n      ),\n      _react2.default.createElement(\n        'p',\n        null,\n        'Props can be passed to the image by adding ',\n        _react2.default.createElement(\n          'code',\n          null,\n          'props'\n        ),\n        ' property to to an item.'\n      ),\n      _react2.default.createElement(\n        'h3',\n        { className: 'example' },\n        'Example'\n      ),\n      _react2.default.createElement(_reactUikitImgGallery2.default, {\n        items: [{ src: 'docs/images/placeholder_200x150_2.svg', props: { margin: 'bottom right' } }, { src: 'docs/images/placeholder_200x150_2.svg', props: { margin: 'bottom right' } }, { src: 'docs/images/placeholder_200x150_2.svg', props: { margin: 'bottom right' } }, { src: 'docs/images/placeholder_200x150_2.svg', props: { margin: 'bottom right' } }, { src: 'docs/images/placeholder_200x150_2.svg', props: { margin: 'bottom right' } }, { src: 'docs/images/placeholder_200x150_2.svg', props: { margin: 'bottom right' } }]\n      }),\n      _react2.default.createElement(\n        'h4',\n        { className: 'code' },\n        'Code'\n      ),\n      _react2.default.createElement(\n        _reactUikitCodeblock2.default,\n        { syntax: 'xml' },\n        '<ImgGroup\\nitems={[\\n  {src: \\'docs/images/placeholder_200x150_2.svg\\', props: {margin: \\'bottom right\\'}},\\n  {src: \\'docs/images/placeholder_200x150_2.svg\\', props: {margin: \\'bottom right\\'}},\\n  {src: \\'docs/images/placeholder_200x150_2.svg\\', props: {margin: \\'bottom right\\'}},\\n  {src: \\'docs/images/placeholder_200x150_2.svg\\', props: {margin: \\'bottom right\\'}},\\n  {src: \\'docs/images/placeholder_200x150_2.svg\\', props: {margin: \\'bottom right\\'}},\\n  {src: \\'docs/images/placeholder_200x150_2.svg\\', props: {margin: \\'bottom right\\'}}\\n]}\\n/>\\n'\n      )\n    ),\n    _react2.default.createElement(\n      'section',\n      null,\n      _react2.default.createElement(\n        'h2',\n        null,\n        'Img gallery props'\n      ),\n      _react2.default.createElement(\n        'p',\n        null,\n        'See base component for additional utility props.'\n      ),\n      _react2.default.createElement(\n        _reactUikitTable2.default,\n        null,\n        _react2.default.createElement(\n          'thead',\n          null,\n          _react2.default.createElement(\n            'tr',\n            null,\n            _react2.default.createElement(\n              'th',\n              { className: 'uk-text-left' },\n              'Prop'\n            ),\n            _react2.default.createElement(\n              'th',\n              { className: 'uk-text-left' },\n              'Type'\n            )\n          )\n        ),\n        _react2.default.createElement(\n          'tbody',\n          null,\n          _react2.default.createElement(\n            'tr',\n            null,\n            _react2.default.createElement(\n              'td',\n              { className: 'uk-text-left' },\n              _react2.default.createElement(\n                'code',\n                null,\n                'items'\n              )\n            ),\n            _react2.default.createElement(\n              'td',\n              { className: 'uk-text-left' },\n              'array of objects.',\n              _react2.default.createElement('br', null),\n              '{\\n                alt,\\n                src,\\n                height,\\n                large,\\n                medium,\\n                props,\\n                small,\\n                width,\\n                xlarge\\n              }'\n            )\n          )\n        )\n      )\n    )\n  );\n};\n\nexports.default = ImgGalleryDoc;\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9pbWctZ2FsbGVyeS1kb2MuanN4P2VjZDMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFTYixJQUFNLGFBQWEsR0FBRyxTQUFoQixhQUFhLENBQUksS0FBSztTQUMxQjs7O0lBQ0U7OztNQUNFOzs7O09BQW9CO01BQ3BCOztVQUFHLFNBQVMsRUFBQyxpQkFBaUI7O09BRTFCO01BRUo7OztRQUNFOztZQUFHLElBQUksRUFBQyxtREFBbUQ7O1NBQTRCOztPQUNyRjtLQUNJO0lBR1Y7OztNQUNBOzs7O09BQWM7TUFDbEI7Ozs7T0FTWTtNQUVSOztVQUFJLFNBQVMsRUFBQyxTQUFTOztPQUFhO01BQ3BDO0FBQ0UsYUFBSyxFQUFFLENBQ0wsRUFBQyxHQUFHLEVBQUUsdUNBQXVDLEVBQUMsRUFDOUMsRUFBQyxHQUFHLEVBQUUsdUNBQXVDLEVBQUMsRUFDOUMsRUFBQyxHQUFHLEVBQUUsdUNBQXVDLEVBQUMsRUFDOUMsRUFBQyxHQUFHLEVBQUUsdUNBQXVDLEVBQUMsRUFDOUMsRUFBQyxHQUFHLEVBQUUsdUNBQXVDLEVBQUMsRUFDOUMsRUFBQyxHQUFHLEVBQUUsdUNBQXVDLEVBQUMsQ0FDOUM7UUFDRjtNQUdGOztVQUFJLFNBQVMsRUFBQyxNQUFNOztPQUFVO01BQzlCOztVQUFXLE1BQU0sRUFBQyxLQUFLOztPQWFYO0tBQ0o7SUFHVjs7O01BQ0U7Ozs7T0FBa0I7TUFDbEI7Ozs7UUFDNkM7Ozs7U0FBa0I7O09BQzNEO01BQ0o7O1VBQUksU0FBUyxFQUFDLFNBQVM7O09BQWE7TUFDcEM7QUFDRSxhQUFLLEVBQUUsQ0FDTCxFQUFDLEdBQUcsRUFBRSx1Q0FBdUMsRUFBRSxLQUFLLEVBQUUsRUFBQyxNQUFNLEVBQUUsY0FBYyxFQUFDLEVBQUMsRUFDL0UsRUFBQyxHQUFHLEVBQUUsdUNBQXVDLEVBQUUsS0FBSyxFQUFFLEVBQUMsTUFBTSxFQUFFLGNBQWMsRUFBQyxFQUFDLEVBQy9FLEVBQUMsR0FBRyxFQUFFLHVDQUF1QyxFQUFFLEtBQUssRUFBRSxFQUFDLE1BQU0sRUFBRSxjQUFjLEVBQUMsRUFBQyxFQUMvRSxFQUFDLEdBQUcsRUFBRSx1Q0FBdUMsRUFBRSxLQUFLLEVBQUUsRUFBQyxNQUFNLEVBQUUsY0FBYyxFQUFDLEVBQUMsRUFDL0UsRUFBQyxHQUFHLEVBQUUsdUNBQXVDLEVBQUUsS0FBSyxFQUFFLEVBQUMsTUFBTSxFQUFFLGNBQWMsRUFBQyxFQUFDLEVBQy9FLEVBQUMsR0FBRyxFQUFFLHVDQUF1QyxFQUFFLEtBQUssRUFBRSxFQUFDLE1BQU0sRUFBRSxjQUFjLEVBQUMsRUFBQyxDQUMvRTtRQUNGO01BR0Y7O1VBQUksU0FBUyxFQUFDLE1BQU07O09BQVU7TUFDOUI7O1VBQVcsTUFBTSxFQUFDLEtBQUs7O09BYVg7S0FDSjtJQUdSOzs7TUFDRTs7OztPQUEwQjtNQUUxQjs7OztPQUVJO01BRUo7OztRQUNFOzs7VUFDRTs7O1lBQ0U7O2dCQUFJLFNBQVMsRUFBQyxjQUFjOzthQUFVO1lBQ3RDOztnQkFBSSxTQUFTLEVBQUMsY0FBYzs7YUFBVTtXQUNuQztTQUNDO1FBQ1I7OztVQUNFOzs7WUFDRTs7Z0JBQUksU0FBUyxFQUFDLGNBQWM7Y0FDMUI7Ozs7ZUFBa0I7YUFDZjtZQUNMOztnQkFBSSxTQUFTLEVBQUMsY0FBYzs7Y0FDVCx5Q0FBSzs7YUFZbkI7V0FDRjtTQUNDO09BQ0Y7S0FDQTtHQUVOO0NBQ1AsQ0FBQzs7a0JBRWEsYUFBYSIsImZpbGUiOiIyNzA2LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQ29kZWJsb2NrIGZyb20gJ3JlYWN0LXVpa2l0LWNvZGVibG9jayc7XG5pbXBvcnQgSW1nR3JvdXAgZnJvbSAncmVhY3QtdWlraXQtaW1nLWdhbGxlcnknO1xuaW1wb3J0IFRhYmxlIGZyb20gJ3JlYWN0LXVpa2l0LXRhYmxlJztcblxuXG5jb25zdCBJbWdHYWxsZXJ5RG9jID0gKHByb3BzKSA9PiAoXG4gIDxkaXY+XG4gICAgPHNlY3Rpb24+XG4gICAgICA8aDE+SW1nIEdhbGxlcnk8L2gxPlxuICAgICAgPHAgY2xhc3NOYW1lPSd1ay1hcnRpY2xlLWxlYWQnPlxuICAgICAgICBDcmVhdGUgZ2FsZXJ5IG9mIGltYWdlcy5cbiAgICAgIDwvcD5cblxuICAgICAgPHA+XG4gICAgICAgIDxhIGhyZWY9J2h0dHBzOi8vZ2l0aHViLmNvbS9vdGlzc3YvcmVhY3QtdWlraXQtaW1nLWdhbGxlcnknPnJlYWN0LXVpa2l0LWltZy1nYWxsZXJ5PC9hPiBvbiBnaXRodWIuXG4gICAgICA8L3A+XG4gICAgPC9zZWN0aW9uPlxuXG5cbiAgICA8c2VjdGlvbj5cbiAgICA8aDI+VXNhZ2U8L2gyPlxuPENvZGVibG9jaz5cbntgbnBtIGluc3RhbGwgcmVhY3QtdWlraXQtaW1nLWdhbGxlcnkgLS1zYXZlO1xuXG4vLyBFUzZcbmltcG9ydCBJbWdHYWxsZXJ5IGZyb20gJ3JlYWN0LXVpa2l0LWltZy1nYWxsZXJ5JztcblxuLy8gRVM1XG52YXIgSW1nR2FsbGVyeSA9IHJlcXVpcmUoJ3JlYWN0LXVpa2l0LWltZy1nYWxsZXJ5Jyk7XG5gfVxuPC9Db2RlYmxvY2s+XG5cbiAgICA8aDMgY2xhc3NOYW1lPSdleGFtcGxlJz5FeGFtcGxlPC9oMz5cbiAgICA8SW1nR3JvdXBcbiAgICAgIGl0ZW1zPXtbXG4gICAgICAgIHtzcmM6ICdkb2NzL2ltYWdlcy9wbGFjZWhvbGRlcl8yMDB4MTUwXzIuc3ZnJ30sXG4gICAgICAgIHtzcmM6ICdkb2NzL2ltYWdlcy9wbGFjZWhvbGRlcl8yMDB4MTUwXzIuc3ZnJ30sXG4gICAgICAgIHtzcmM6ICdkb2NzL2ltYWdlcy9wbGFjZWhvbGRlcl8yMDB4MTUwXzIuc3ZnJ30sXG4gICAgICAgIHtzcmM6ICdkb2NzL2ltYWdlcy9wbGFjZWhvbGRlcl8yMDB4MTUwXzIuc3ZnJ30sXG4gICAgICAgIHtzcmM6ICdkb2NzL2ltYWdlcy9wbGFjZWhvbGRlcl8yMDB4MTUwXzIuc3ZnJ30sXG4gICAgICAgIHtzcmM6ICdkb2NzL2ltYWdlcy9wbGFjZWhvbGRlcl8yMDB4MTUwXzIuc3ZnJ31cbiAgICAgIF19XG4gICAgLz5cblxuXG4gICAgPGg0IGNsYXNzTmFtZT0nY29kZSc+Q29kZTwvaDQ+XG4gICAgPENvZGVibG9jayBzeW50YXg9J3htbCc+XG57XG5gPEltZ0dyb3VwXG5pdGVtcz17W1xuICB7c3JjOiAnZG9jcy9pbWFnZXMvcGxhY2Vob2xkZXJfMjAweDE1MF8yLnN2Zyd9LFxuICB7c3JjOiAnZG9jcy9pbWFnZXMvcGxhY2Vob2xkZXJfMjAweDE1MF8yLnN2Zyd9LFxuICB7c3JjOiAnZG9jcy9pbWFnZXMvcGxhY2Vob2xkZXJfMjAweDE1MF8yLnN2Zyd9LFxuICB7c3JjOiAnZG9jcy9pbWFnZXMvcGxhY2Vob2xkZXJfMjAweDE1MF8yLnN2Zyd9LFxuICB7c3JjOiAnZG9jcy9pbWFnZXMvcGxhY2Vob2xkZXJfMjAweDE1MF8yLnN2Zyd9LFxuICB7c3JjOiAnZG9jcy9pbWFnZXMvcGxhY2Vob2xkZXJfMjAweDE1MF8yLnN2Zyd9XG5dfVxuLz5cbmB9XG4gICAgPC9Db2RlYmxvY2s+XG4gIDwvc2VjdGlvbj5cblxuXG4gIDxzZWN0aW9uPlxuICAgIDxoMj5JbWcgcHJvcHM8L2gyPlxuICAgIDxwPlxuICAgICAgUHJvcHMgY2FuIGJlIHBhc3NlZCB0byB0aGUgaW1hZ2UgYnkgYWRkaW5nIDxjb2RlPnByb3BzPC9jb2RlPiBwcm9wZXJ0eSB0byB0byBhbiBpdGVtLlxuICAgIDwvcD5cbiAgICA8aDMgY2xhc3NOYW1lPSdleGFtcGxlJz5FeGFtcGxlPC9oMz5cbiAgICA8SW1nR3JvdXBcbiAgICAgIGl0ZW1zPXtbXG4gICAgICAgIHtzcmM6ICdkb2NzL2ltYWdlcy9wbGFjZWhvbGRlcl8yMDB4MTUwXzIuc3ZnJywgcHJvcHM6IHttYXJnaW46ICdib3R0b20gcmlnaHQnfX0sXG4gICAgICAgIHtzcmM6ICdkb2NzL2ltYWdlcy9wbGFjZWhvbGRlcl8yMDB4MTUwXzIuc3ZnJywgcHJvcHM6IHttYXJnaW46ICdib3R0b20gcmlnaHQnfX0sXG4gICAgICAgIHtzcmM6ICdkb2NzL2ltYWdlcy9wbGFjZWhvbGRlcl8yMDB4MTUwXzIuc3ZnJywgcHJvcHM6IHttYXJnaW46ICdib3R0b20gcmlnaHQnfX0sXG4gICAgICAgIHtzcmM6ICdkb2NzL2ltYWdlcy9wbGFjZWhvbGRlcl8yMDB4MTUwXzIuc3ZnJywgcHJvcHM6IHttYXJnaW46ICdib3R0b20gcmlnaHQnfX0sXG4gICAgICAgIHtzcmM6ICdkb2NzL2ltYWdlcy9wbGFjZWhvbGRlcl8yMDB4MTUwXzIuc3ZnJywgcHJvcHM6IHttYXJnaW46ICdib3R0b20gcmlnaHQnfX0sXG4gICAgICAgIHtzcmM6ICdkb2NzL2ltYWdlcy9wbGFjZWhvbGRlcl8yMDB4MTUwXzIuc3ZnJywgcHJvcHM6IHttYXJnaW46ICdib3R0b20gcmlnaHQnfX1cbiAgICAgIF19XG4gICAgLz5cblxuXG4gICAgPGg0IGNsYXNzTmFtZT0nY29kZSc+Q29kZTwvaDQ+XG4gICAgPENvZGVibG9jayBzeW50YXg9J3htbCc+XG57XG5gPEltZ0dyb3VwXG5pdGVtcz17W1xuICB7c3JjOiAnZG9jcy9pbWFnZXMvcGxhY2Vob2xkZXJfMjAweDE1MF8yLnN2ZycsIHByb3BzOiB7bWFyZ2luOiAnYm90dG9tIHJpZ2h0J319LFxuICB7c3JjOiAnZG9jcy9pbWFnZXMvcGxhY2Vob2xkZXJfMjAweDE1MF8yLnN2ZycsIHByb3BzOiB7bWFyZ2luOiAnYm90dG9tIHJpZ2h0J319LFxuICB7c3JjOiAnZG9jcy9pbWFnZXMvcGxhY2Vob2xkZXJfMjAweDE1MF8yLnN2ZycsIHByb3BzOiB7bWFyZ2luOiAnYm90dG9tIHJpZ2h0J319LFxuICB7c3JjOiAnZG9jcy9pbWFnZXMvcGxhY2Vob2xkZXJfMjAweDE1MF8yLnN2ZycsIHByb3BzOiB7bWFyZ2luOiAnYm90dG9tIHJpZ2h0J319LFxuICB7c3JjOiAnZG9jcy9pbWFnZXMvcGxhY2Vob2xkZXJfMjAweDE1MF8yLnN2ZycsIHByb3BzOiB7bWFyZ2luOiAnYm90dG9tIHJpZ2h0J319LFxuICB7c3JjOiAnZG9jcy9pbWFnZXMvcGxhY2Vob2xkZXJfMjAweDE1MF8yLnN2ZycsIHByb3BzOiB7bWFyZ2luOiAnYm90dG9tIHJpZ2h0J319XG5dfVxuLz5cbmB9XG4gICAgPC9Db2RlYmxvY2s+XG4gIDwvc2VjdGlvbj5cblxuXG4gICAgPHNlY3Rpb24+XG4gICAgICA8aDI+SW1nIGdhbGxlcnkgcHJvcHM8L2gyPlxuXG4gICAgICA8cD5cbiAgICAgIFNlZSBiYXNlIGNvbXBvbmVudCBmb3IgYWRkaXRpb25hbCB1dGlsaXR5IHByb3BzLlxuICAgICAgPC9wPlxuXG4gICAgICA8VGFibGU+XG4gICAgICAgIDx0aGVhZD5cbiAgICAgICAgICA8dHI+XG4gICAgICAgICAgICA8dGggY2xhc3NOYW1lPSd1ay10ZXh0LWxlZnQnPlByb3A8L3RoPlxuICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT0ndWstdGV4dC1sZWZ0Jz5UeXBlPC90aD5cbiAgICAgICAgICA8L3RyPlxuICAgICAgICA8L3RoZWFkPlxuICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgPHRyPlxuICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT0ndWstdGV4dC1sZWZ0Jz5cbiAgICAgICAgICAgICAgPGNvZGU+aXRlbXM8L2NvZGU+XG4gICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT0ndWstdGV4dC1sZWZ0Jz5cbiAgICAgICAgICAgICAgYXJyYXkgb2Ygb2JqZWN0cy48YnIvPlxuICAgICAgICAgICAgICB7YHtcbiAgICAgICAgICAgICAgICBhbHQsXG4gICAgICAgICAgICAgICAgc3JjLFxuICAgICAgICAgICAgICAgIGhlaWdodCxcbiAgICAgICAgICAgICAgICBsYXJnZSxcbiAgICAgICAgICAgICAgICBtZWRpdW0sXG4gICAgICAgICAgICAgICAgcHJvcHMsXG4gICAgICAgICAgICAgICAgc21hbGwsXG4gICAgICAgICAgICAgICAgd2lkdGgsXG4gICAgICAgICAgICAgICAgeGxhcmdlXG4gICAgICAgICAgICAgIH1gfVxuICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICA8L3RyPlxuICAgICAgICA8L3Rib2R5PlxuICAgICAgPC9UYWJsZT5cbiAgICA8L3NlY3Rpb24+XG5cbiAgPC9kaXY+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBJbWdHYWxsZXJ5RG9jO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9pbWctZ2FsbGVyeS1kb2MuanN4XG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==");

/***/ }

})