webpackHotUpdate("static/development/pages/play.js",{

/***/ "./src/pages/play.js":
/*!***************************!*\
  !*** ./src/pages/play.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var yaksok__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! yaksok */ "./node_modules/yaksok/dist/yaksok.min.js");
/* harmony import */ var yaksok__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(yaksok__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "/Users/disjukr/dev/yaksok.js/gh-pages/src/pages/play.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;



function Page() {
  var examplesSelectRef = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])();
  var srcEditorRef = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])();
  var dstEditorRef = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])();

  var loadExample = function loadExample(file) {
    var text;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function loadExample$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(fetch('/examples/' + file).then(function (res) {
              return res.text();
            }));

          case 2:
            text = _context.sent;

            if (srcEditorRef.current) {
              _context.next = 5;
              break;
            }

            return _context.abrupt("return");

          case 5:
            srcEditorRef.current.setValue(text);
            srcEditorRef.current.execCommand('gotoend');

          case 7:
          case "end":
            return _context.stop();
        }
      }
    });
  };

  var execute = function execute() {
    if (!dstEditor.current) return;
    eval(dstEditor.current.getValue());
  };

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    var srcEditor = ace.edit('src-editor');
    var dstEditor = ace.edit('dst-editor');
    srcEditorRef.current = srcEditor;
    dstEditorRef.current = dstEditor;
    var compiler = new yaksok__WEBPACK_IMPORTED_MODULE_3__["compiler"].JsTargetCompiler();
    compiler.plugins.add(new yaksok__WEBPACK_IMPORTED_MODULE_3__["plugin"].ConstantFolder({
      dce: true
    }));
    compiler.plugins.add(new yaksok__WEBPACK_IMPORTED_MODULE_3__["plugin"].UnusedDefRemover());
    var current = 0;
    var lastModified = 0;
    var compiling = false;

    function compile() {
      lastModified = +new Date();
    }

    function editorConfig(editor, option) {
      editor.setOptions({
        selectionStyle: 'text',
        useSoftTabs: true,
        highlightActiveLine: false,
        showPrintMargin: false,
        theme: 'ace/theme/monokai'
      });

      if (option) {
        editor.setOptions(option);
      }
    }

    {
      // src config
      editorConfig(srcEditor);

      var YaksokMode = ace.require('ace/mode/yaksok').Mode;

      srcEditor.getSession().setMode(new YaksokMode());
    }
    {
      // dst config
      editorConfig(dstEditor, {
        readOnly: true,
        mode: 'ace/mode/javascript'
      });
    }
    loadExample(examplesSelectRef.current.value);
    srcEditor.getSession().on('change', compile);
    setInterval(function _callee() {
      var js, msg;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              if (!(current > lastModified)) {
                _context2.next = 2;
                break;
              }

              return _context2.abrupt("return");

            case 2:
              if (!compiling) {
                _context2.next = 4;
                break;
              }

              return _context2.abrupt("return");

            case 4:
              compiling = true;
              _context2.prev = 5;
              _context2.next = 8;
              return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(compiler.compile(srcEditor.getValue() || ''));

            case 8:
              js = _context2.sent;
              dstEditor.setValue(js);
              dstEditor.execCommand('gotoend');
              current = +new Date();
              compiling = false;
              _context2.next = 22;
              break;

            case 15:
              _context2.prev = 15;
              _context2.t0 = _context2["catch"](5);
              msg = (_context2.t0 instanceof Error || _context2.t0.message ? _context2.t0.message : _context2.t0) + '';
              dstEditor.setValue(msg);
              dstEditor.execCommand('gotoend');
              current = +new Date();
              compiling = false;

            case 22:
            case "end":
              return _context2.stop();
          }
        }
      }, null, null, [[5, 15]]);
    }, 1);
  }, []);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx("div", {
    className: "jsx-2078024392" + " " + "wrap",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2078024392" + " " + "col left",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2078024392" + " " + "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2078024392" + " " + "title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }, "\uC57D\uC18D \uC18C\uC2A4\uCF54\uB4DC"), __jsx("select", {
    ref: examplesSelectRef,
    id: "examples",
    onChange: function onChange(e) {
      return loadExample(e.target.value);
    },
    className: "jsx-2078024392",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }, __jsx("option", {
    value: "fibonacci.yak",
    className: "jsx-2078024392",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }, "\uD53C\uBCF4\uB098\uCE58"), __jsx("option", {
    value: "bubble-sort.yak",
    className: "jsx-2078024392",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }, "\uBC84\uBE14\uC18C\uD2B8"))), __jsx("div", {
    id: "src-editor",
    className: "jsx-2078024392" + " " + "editor",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  })), __jsx("div", {
    className: "jsx-2078024392" + " " + "col right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2078024392" + " " + "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2078024392" + " " + "title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }, "\uC790\uBC14\uC2A4\uD06C\uB9BD\uD2B8 \uACB0\uACFC\uCF54\uB4DC"), __jsx("button", {
    id: "run",
    onClick: execute,
    className: "jsx-2078024392",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }, "\uC2E4\uD589\uD558\uAE30")), __jsx("div", {
    id: "dst-editor",
    className: "jsx-2078024392" + " " + "editor",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "2078024392",
    __self: this
  }, ".wrap{margin:0 auto;width:calc(100% - 40px);height:calc(100% - 20px);}.col{width:calc(50% - 5px);height:100%;}.col.left{float:left;}.col.right{float:right;}.row{margin:5px 0;width:100%;height:30px;}.row .title{display:inline-block;height:100%;padding:1px 5px;font-size:18px;font-weight:lighter;}.editor{width:100%;height:calc(100% - 40px);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kaXNqdWtyL2Rldi95YWtzb2suanMvZ2gtcGFnZXMvc3JjL3BhZ2VzL3BsYXkuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZ0cyQixBQUcrQixBQUtRLEFBR0osQUFDRSxBQUVQLEFBS1EsQUFPVixXQWZRLEFBZ0JNLENBZkosQ0FHVixDQVhhLE9BZ0JaLENBWEEsRUFPQSxTQUtJLENBWHBCLEVBT0EsQUFXQSxFQXZCNkIsV0FpQlYsY0FoQm5CLENBaUJ3QixvQkFDeEIiLCJmaWxlIjoiL1VzZXJzL2Rpc2p1a3IvZGV2L3lha3Nvay5qcy9naC1wYWdlcy9zcmMvcGFnZXMvcGxheS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0ICogYXMgeWFrc29rIGZyb20gJ3lha3Nvayc7XG5cbmZ1bmN0aW9uIFBhZ2UoKSB7XG4gICAgY29uc3QgZXhhbXBsZXNTZWxlY3RSZWYgPSB1c2VSZWYoKTtcbiAgICBjb25zdCBzcmNFZGl0b3JSZWYgPSB1c2VSZWYoKTtcbiAgICBjb25zdCBkc3RFZGl0b3JSZWYgPSB1c2VSZWYoKTtcbiAgICBjb25zdCBsb2FkRXhhbXBsZSA9IGFzeW5jIGZpbGUgPT4ge1xuICAgICAgICBjb25zdCB0ZXh0ID0gYXdhaXQgZmV0Y2goJy9leGFtcGxlcy8nICsgZmlsZSkudGhlbihyZXMgPT4gcmVzLnRleHQoKSk7XG4gICAgICAgIGlmICghc3JjRWRpdG9yUmVmLmN1cnJlbnQpIHJldHVybjtcbiAgICAgICAgc3JjRWRpdG9yUmVmLmN1cnJlbnQuc2V0VmFsdWUodGV4dCk7XG4gICAgICAgIHNyY0VkaXRvclJlZi5jdXJyZW50LmV4ZWNDb21tYW5kKCdnb3RvZW5kJyk7XG4gICAgfTtcbiAgICBjb25zdCBleGVjdXRlID0gKCkgPT4ge1xuICAgICAgICBpZiAoIWRzdEVkaXRvci5jdXJyZW50KSByZXR1cm47XG4gICAgICAgIGV2YWwoZHN0RWRpdG9yLmN1cnJlbnQuZ2V0VmFsdWUoKSk7XG4gICAgfTtcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBjb25zdCBzcmNFZGl0b3IgPSBhY2UuZWRpdCgnc3JjLWVkaXRvcicpO1xuICAgICAgICBjb25zdCBkc3RFZGl0b3IgPSBhY2UuZWRpdCgnZHN0LWVkaXRvcicpO1xuICAgICAgICBzcmNFZGl0b3JSZWYuY3VycmVudCA9IHNyY0VkaXRvcjtcbiAgICAgICAgZHN0RWRpdG9yUmVmLmN1cnJlbnQgPSBkc3RFZGl0b3I7XG4gICAgICAgIGNvbnN0IGNvbXBpbGVyID0gbmV3IHlha3Nvay5jb21waWxlci5Kc1RhcmdldENvbXBpbGVyKCk7XG4gICAgICAgIGNvbXBpbGVyLnBsdWdpbnMuYWRkKG5ldyB5YWtzb2sucGx1Z2luLkNvbnN0YW50Rm9sZGVyKHsgZGNlOiB0cnVlIH0pKTtcbiAgICAgICAgY29tcGlsZXIucGx1Z2lucy5hZGQobmV3IHlha3Nvay5wbHVnaW4uVW51c2VkRGVmUmVtb3ZlcigpKTtcbiAgICAgICAgbGV0IGN1cnJlbnQgPSAwO1xuICAgICAgICBsZXQgbGFzdE1vZGlmaWVkID0gMDtcbiAgICAgICAgbGV0IGNvbXBpbGluZyA9IGZhbHNlO1xuICAgICAgICBmdW5jdGlvbiBjb21waWxlKCkgeyBsYXN0TW9kaWZpZWQgPSArKG5ldyBEYXRlKCkpOyB9XG4gICAgICAgIGZ1bmN0aW9uIGVkaXRvckNvbmZpZyhlZGl0b3IsIG9wdGlvbikge1xuICAgICAgICAgICAgZWRpdG9yLnNldE9wdGlvbnMoe1xuICAgICAgICAgICAgICAgIHNlbGVjdGlvblN0eWxlOiAndGV4dCcsXG4gICAgICAgICAgICAgICAgdXNlU29mdFRhYnM6IHRydWUsXG4gICAgICAgICAgICAgICAgaGlnaGxpZ2h0QWN0aXZlTGluZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgc2hvd1ByaW50TWFyZ2luOiBmYWxzZSxcbiAgICAgICAgICAgICAgICB0aGVtZTogJ2FjZS90aGVtZS9tb25va2FpJ1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAob3B0aW9uKSB7XG4gICAgICAgICAgICAgICAgZWRpdG9yLnNldE9wdGlvbnMob3B0aW9uKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB7IC8vIHNyYyBjb25maWdcbiAgICAgICAgICAgIGVkaXRvckNvbmZpZyhzcmNFZGl0b3IpO1xuICAgICAgICAgICAgY29uc3QgWWFrc29rTW9kZSA9IGFjZS5yZXF1aXJlKCdhY2UvbW9kZS95YWtzb2snKS5Nb2RlO1xuICAgICAgICAgICAgc3JjRWRpdG9yLmdldFNlc3Npb24oKS5zZXRNb2RlKG5ldyBZYWtzb2tNb2RlKCkpO1xuICAgICAgICB9XG4gICAgICAgIHsgLy8gZHN0IGNvbmZpZ1xuICAgICAgICAgICAgZWRpdG9yQ29uZmlnKGRzdEVkaXRvciwge1xuICAgICAgICAgICAgICAgIHJlYWRPbmx5OiB0cnVlLFxuICAgICAgICAgICAgICAgIG1vZGU6ICdhY2UvbW9kZS9qYXZhc2NyaXB0J1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgbG9hZEV4YW1wbGUoZXhhbXBsZXNTZWxlY3RSZWYuY3VycmVudC52YWx1ZSk7XG4gICAgICAgIHNyY0VkaXRvci5nZXRTZXNzaW9uKCkub24oJ2NoYW5nZScsIGNvbXBpbGUpO1xuICAgICAgICBzZXRJbnRlcnZhbChhc3luYyBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudCA+IGxhc3RNb2RpZmllZCkgcmV0dXJuO1xuICAgICAgICAgICAgaWYgKGNvbXBpbGluZykgcmV0dXJuO1xuICAgICAgICAgICAgY29tcGlsaW5nID0gdHJ1ZTtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgY29uc3QganMgPSBhd2FpdCBjb21waWxlci5jb21waWxlKHNyY0VkaXRvci5nZXRWYWx1ZSgpIHx8ICcnKTtcbiAgICAgICAgICAgICAgICBkc3RFZGl0b3Iuc2V0VmFsdWUoanMpO1xuICAgICAgICAgICAgICAgIGRzdEVkaXRvci5leGVjQ29tbWFuZCgnZ290b2VuZCcpO1xuICAgICAgICAgICAgICAgIGN1cnJlbnQgPSArKG5ldyBEYXRlKCkpO1xuICAgICAgICAgICAgICAgIGNvbXBpbGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbXNnID0gKChlcnIgaW5zdGFuY2VvZiBFcnJvciB8fCBlcnIubWVzc2FnZSkgPyBlcnIubWVzc2FnZSA6IGVycikgKyAnJztcbiAgICAgICAgICAgICAgICBkc3RFZGl0b3Iuc2V0VmFsdWUobXNnKTtcbiAgICAgICAgICAgICAgICBkc3RFZGl0b3IuZXhlY0NvbW1hbmQoJ2dvdG9lbmQnKTtcbiAgICAgICAgICAgICAgICBjdXJyZW50ID0gKyhuZXcgRGF0ZSgpKTtcbiAgICAgICAgICAgICAgICBjb21waWxpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgMSk7XG4gICAgfSwgW10pO1xuICAgIHJldHVybiA8PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndyYXBcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sIGxlZnRcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlXCI+7JW97IaNIOyGjOyKpOy9lOuTnDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8c2VsZWN0XG4gICAgICAgICAgICAgICAgICAgICAgICByZWY9e2V4YW1wbGVzU2VsZWN0UmVmfVxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJleGFtcGxlc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiBsb2FkRXhhbXBsZShlLnRhcmdldC52YWx1ZSl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImZpYm9uYWNjaS55YWtcIj7tlLzrs7TrgpjsuZg8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJidWJibGUtc29ydC55YWtcIj7rsoTruJTshoztirg8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cInNyYy1lZGl0b3JcIiBjbGFzc05hbWU9XCJlZGl0b3JcIj48L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgcmlnaHRcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlXCI+7J6Q67CU7Iqk7YGs66a97Yq4IOqysOqzvOy9lOuTnDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGlkPVwicnVuXCIgb25DbGljaz17ZXhlY3V0ZX0+7Iuk7ZaJ7ZWY6riwPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cImRzdC1lZGl0b3JcIiBjbGFzc05hbWU9XCJlZGl0b3JcIj48L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHN0eWxlIGdsb2JhbCBqc3g+e2BcbiAgICAgICAgICAgIC53cmFwIHtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgICAgICAgICB3aWR0aDogY2FsYygxMDAlIC0gNDBweCk7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAyMHB4KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5jb2wge1xuICAgICAgICAgICAgICAgIHdpZHRoOiBjYWxjKDUwJSAtIDVweCk7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmNvbC5sZWZ0IHsgZmxvYXQ6IGxlZnQ7IH1cbiAgICAgICAgICAgIC5jb2wucmlnaHQgeyBmbG9hdDogcmlnaHQ7IH1cbiAgICAgICAgICAgIC5yb3cge1xuICAgICAgICAgICAgICAgIG1hcmdpbjogNXB4IDA7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnJvdyAudGl0bGUge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMXB4IDVweDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuZWRpdG9yIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDQwcHgpO1xuICAgICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgPC8+O1xufVxuXG5leHBvcnQgZGVmYXVsdCBQYWdlO1xuIl19 */\n/*@ sourceURL=/Users/disjukr/dev/yaksok.js/gh-pages/src/pages/play.js */"));
}

/* harmony default export */ __webpack_exports__["default"] = (Page);

/***/ })

})
//# sourceMappingURL=play.js.04192dca3906c6af3eda.hot-update.js.map