/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/block.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/block.js":
/*!*************************!*\
  !*** ./src/js/block.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }\nfunction _iterableToArrayLimit(r, l) { var t = null == r ? null : \"undefined\" != typeof Symbol && r[Symbol.iterator] || r[\"@@iterator\"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t[\"return\"] && (u = t[\"return\"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n(function (wp) {\n  /**\n   * Registers a new block provided a unique name and an object defining its behavior.\n   * @see https://github.com/WordPress/gutenberg/tree/master/blocks#api\n   */\n  var registerBlockType = wp.blocks.registerBlockType;\n\n  /**\n   * Returns a new element of given type. Element is an abstraction layer atop React.\n   * @see https://github.com/WordPress/gutenberg/tree/master/element#element\n   */\n  var _wp$element = wp.element,\n    el = _wp$element.createElement,\n    useState = _wp$element.useState;\n\n  /**\n   * WordPress dependencies\n   */\n  var __ = wp.i18n.__;\n  var _ref = wp.blockEditor || wp.editor,\n    RichText = _ref.RichText,\n    useBlockProps = _ref.useBlockProps,\n    InspectorControls = _ref.InspectorControls,\n    ColorPalette = _ref.ColorPalette,\n    BlockControls = _ref.BlockControls,\n    AlignmentToolbar = _ref.AlignmentToolbar;\n\n  /**\n    * PanelBody\n    */\n  var PanelBody = wp.components.PanelBody;\n\n  /**\n   * Every block starts by registering a new block type definition.\n   * @see https://wordpress.org/gutenberg/handbook/block-api/\n   */\n  // Register guternber block.\n  registerBlockType('faq-block-for-gutenberg/faq', {\n    title: __('FAQ', 'faq-block-for-gutenberg'),\n    icon: 'index-card',\n    category: 'layout',\n    attributes: {\n      question: {\n        type: 'string',\n        source: 'html',\n        selector: 'h4'\n      },\n      answer: {\n        type: 'string',\n        source: 'html',\n        selector: '.answer'\n      },\n      backgroundColor: {\n        type: 'string'\n      },\n      questionText: {\n        type: 'string'\n      },\n      questionBg: {\n        type: 'string'\n      },\n      answerText: {\n        type: 'string'\n      },\n      answerBg: {\n        type: 'string'\n      },\n      alignment: {\n        type: 'string'\n      }\n    },\n    edit: function edit(props) {\n      var _useState = useState(false),\n        _useState2 = _slicedToArray(_useState, 2),\n        focusedEditable = _useState2[0],\n        setfocusedEditable = _useState2[1];\n      var isSelected = useState(true);\n      var blockProps = useBlockProps();\n      var attributes = props.attributes;\n      var alignment = props.attributes.alignment;\n\n      // Block alignment control.\n      var onChangeAlignment = function onChangeAlignment(newAlignment) {\n        props.setAttributes({\n          alignment: newAlignment\n        });\n      };\n\n      // Question onchange. \n      var onChangeQuestion = function onChangeQuestion(value) {\n        props.setAttributes({\n          question: value\n        });\n      };\n\n      // the function which handles what happens when focus is on the question\n      var onFocusQuestion = function onFocusQuestion(focus) {\n        setfocusedEditable('question');\n      };\n\n      // the function which handles what happens when the answer is changed\n      var onChangeAnswer = function onChangeAnswer(value) {\n        props.setAttributes({\n          answer: value\n        });\n      };\n\n      // the function which handles what happens when focus is on the answer\n      var onFocusAnswer = function onFocusAnswer(focus) {\n        setfocusedEditable('answer');\n      };\n      var ShowAnswer = function ShowAnswer(event) {\n        var FaqBlockElement = event.target.closest('.question');\n        if (null === FaqBlockElement) {\n          return;\n        }\n        var FaqAnswer = FaqBlockElement.parentNode.querySelector('.answer');\n        if (FaqAnswer) {\n          var ClassList = FaqAnswer.classList || [];\n          if (ClassList.length > 0 && (ClassList.contains('editor-rich-text') || ClassList.contains('block-editor-rich-text__editable'))) {\n            if (ClassList.contains('edit-answer')) {\n              ClassList.remove('edit-answer');\n              event.target.closest('.question').classList.remove('active');\n            } else {\n              ClassList.add('edit-answer');\n              event.target.closest('.question').classList.add('active');\n            }\n          }\n        }\n      };\n      return wp.element.createElement(\"div\", blockProps, isSelected && wp.element.createElement(React.Fragment, null, wp.element.createElement(BlockControls, {\n        key: \"controls\"\n      }, wp.element.createElement(AlignmentToolbar, {\n        value: alignment,\n        onChange: onChangeAlignment\n      })), wp.element.createElement(InspectorControls, {\n        key: \"inspector\"\n      }, wp.element.createElement(PanelBody, {\n        title: __('Background color', 'faq-block-for-gutenberg'),\n        initialOpen: true\n      }, wp.element.createElement(ColorPalette, {\n        value: props.attributes.backgroundColor,\n        onChange: function onChange(value) {\n          return props.setAttributes({\n            backgroundColor: value\n          });\n        }\n      })), wp.element.createElement(PanelBody, {\n        title: __('Question Font Color', 'faq-block-for-gutenberg'),\n        initialOpen: false\n      }, wp.element.createElement(ColorPalette, {\n        colors: ['#F00'],\n        value: props.attributes.questionText,\n        onChange: function onChange(value) {\n          return props.setAttributes({\n            questionText: value\n          });\n        }\n      })), wp.element.createElement(PanelBody, {\n        title: __('Question Background', 'faq-block-for-gutenberg'),\n        initialOpen: false\n      }, wp.element.createElement(ColorPalette, {\n        colors: ['#000'],\n        value: props.attributes.questionBg,\n        onChange: function onChange(value) {\n          return props.setAttributes({\n            questionBg: value\n          });\n        }\n      })), wp.element.createElement(PanelBody, {\n        title: __('Answer Font Color', 'faq-block-for-gutenberg'),\n        initialOpen: false\n      }, wp.element.createElement(ColorPalette, {\n        colors: ['#F00'],\n        value: props.attributes.answerText,\n        onChange: function onChange(value) {\n          return props.setAttributes({\n            answerText: value\n          });\n        }\n      })), wp.element.createElement(PanelBody, {\n        title: __('Answer Background', 'faq-block-for-gutenberg'),\n        initialOpen: false\n      }, wp.element.createElement(ColorPalette, {\n        colors: ['#000'],\n        value: props.attributes.answerBg,\n        onChange: function onChange(value) {\n          return props.setAttributes({\n            answerBg: value\n          });\n        }\n      }))), wp.element.createElement(\"div\", {\n        className: props.className,\n        key: \"editor\",\n        style: {\n          background: attributes.backgroundColor\n        },\n        onClick: ShowAnswer\n      }, wp.element.createElement(RichText, _extends({}, blockProps, {\n        key: \"question\",\n        tagName: \"div\",\n        className: \"question\",\n        placeholder: __('Question:', 'faq-block-for-gutenberg'),\n        value: attributes.question,\n        onChange: onChangeQuestion,\n        focus: focusedEditable === 'question',\n        onFocus: onFocusQuestion,\n        style: {\n          background: attributes.questionBg,\n          color: attributes.questionText,\n          textAlign: alignment\n        }\n      })), wp.element.createElement(RichText, _extends({}, blockProps, {\n        key: \"answer\",\n        tagName: \"div\",\n        className: \"answer\",\n        placeholder: __('Answer:', 'faq-block-for-gutenberg'),\n        value: attributes.answer,\n        onChange: onChangeAnswer,\n        focus: focusedEditable === 'answer',\n        onFocus: onFocusAnswer,\n        style: {\n          background: attributes.answerBg,\n          color: attributes.answerText,\n          textAlign: alignment\n        }\n      })))));\n    },\n    save: function save(props) {\n      var className = props;\n      var _props$attributes = props.attributes,\n        id = _props$attributes.id,\n        question = _props$attributes.question,\n        answer = _props$attributes.answer,\n        backgroundColor = _props$attributes.backgroundColor,\n        questionText = _props$attributes.questionText,\n        questionBg = _props$attributes.questionBg,\n        answerText = _props$attributes.answerText,\n        alignment = _props$attributes.alignment,\n        answerBg = _props$attributes.answerBg;\n      return wp.element.createElement(\"div\", {\n        className: className,\n        \"data-id\": id,\n        style: {\n          background: backgroundColor\n        }\n      }, wp.element.createElement(\"div\", {\n        className: \"question\",\n        style: {\n          background: questionBg,\n          textAlign: alignment,\n          color: questionText\n        }\n      }, wp.element.createElement(\"h4\", {\n        style: {\n          color: questionText\n        },\n        dangerouslySetInnerHTML: {\n          __html: question\n        }\n      })), wp.element.createElement(\"div\", {\n        className: \"answer\",\n        style: {\n          background: answerBg,\n          color: answerText,\n          textAlign: alignment\n        },\n        dangerouslySetInnerHTML: {\n          __html: answer\n        }\n      }));\n    }\n  });\n})(window.wp);\n\n//# sourceURL=webpack:///./src/js/block.js?");

/***/ })

/******/ });