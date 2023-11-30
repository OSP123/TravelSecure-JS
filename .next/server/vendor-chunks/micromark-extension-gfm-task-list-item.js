"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/micromark-extension-gfm-task-list-item";
exports.ids = ["vendor-chunks/micromark-extension-gfm-task-list-item"];
exports.modules = {

/***/ "(rsc)/./node_modules/micromark-extension-gfm-task-list-item/dev/lib/html.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/micromark-extension-gfm-task-list-item/dev/lib/html.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   gfmTaskListItemHtml: () => (/* binding */ gfmTaskListItemHtml)\n/* harmony export */ });\n/**\n * @typedef {import('micromark-util-types').HtmlExtension} HtmlExtension\n */ // To do: next major: expose function to make extension.\n/**\n * Extension for `micromark` that can be passed in `htmlExtensions` to\n * support GFM task list items when serializing to HTML.\n *\n * @type {HtmlExtension}\n */ const gfmTaskListItemHtml = {\n    enter: {\n        taskListCheck () {\n            this.tag('<input type=\"checkbox\" disabled=\"\" ');\n        }\n    },\n    exit: {\n        taskListCheck () {\n            this.tag(\"/>\");\n        },\n        taskListCheckValueChecked () {\n            this.tag('checked=\"\" ');\n        }\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbWljcm9tYXJrLWV4dGVuc2lvbi1nZm0tdGFzay1saXN0LWl0ZW0vZGV2L2xpYi9odG1sLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQTs7Q0FFQyxHQUVELHdEQUF3RDtBQUV4RDs7Ozs7Q0FLQyxHQUNNLE1BQU1BLHNCQUFzQjtJQUNqQ0MsT0FBTztRQUNMQztZQUNFLElBQUksQ0FBQ0MsR0FBRyxDQUFDO1FBQ1g7SUFDRjtJQUNBQyxNQUFNO1FBQ0pGO1lBQ0UsSUFBSSxDQUFDQyxHQUFHLENBQUM7UUFDWDtRQUNBRTtZQUNFLElBQUksQ0FBQ0YsR0FBRyxDQUFDO1FBQ1g7SUFDRjtBQUNGLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0cGxhdGUvLi9ub2RlX21vZHVsZXMvbWljcm9tYXJrLWV4dGVuc2lvbi1nZm0tdGFzay1saXN0LWl0ZW0vZGV2L2xpYi9odG1sLmpzPzdlNjUiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCdtaWNyb21hcmstdXRpbC10eXBlcycpLkh0bWxFeHRlbnNpb259IEh0bWxFeHRlbnNpb25cbiAqL1xuXG4vLyBUbyBkbzogbmV4dCBtYWpvcjogZXhwb3NlIGZ1bmN0aW9uIHRvIG1ha2UgZXh0ZW5zaW9uLlxuXG4vKipcbiAqIEV4dGVuc2lvbiBmb3IgYG1pY3JvbWFya2AgdGhhdCBjYW4gYmUgcGFzc2VkIGluIGBodG1sRXh0ZW5zaW9uc2AgdG9cbiAqIHN1cHBvcnQgR0ZNIHRhc2sgbGlzdCBpdGVtcyB3aGVuIHNlcmlhbGl6aW5nIHRvIEhUTUwuXG4gKlxuICogQHR5cGUge0h0bWxFeHRlbnNpb259XG4gKi9cbmV4cG9ydCBjb25zdCBnZm1UYXNrTGlzdEl0ZW1IdG1sID0ge1xuICBlbnRlcjoge1xuICAgIHRhc2tMaXN0Q2hlY2soKSB7XG4gICAgICB0aGlzLnRhZygnPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGRpc2FibGVkPVwiXCIgJylcbiAgICB9XG4gIH0sXG4gIGV4aXQ6IHtcbiAgICB0YXNrTGlzdENoZWNrKCkge1xuICAgICAgdGhpcy50YWcoJy8+JylcbiAgICB9LFxuICAgIHRhc2tMaXN0Q2hlY2tWYWx1ZUNoZWNrZWQoKSB7XG4gICAgICB0aGlzLnRhZygnY2hlY2tlZD1cIlwiICcpXG4gICAgfVxuICB9XG59XG4iXSwibmFtZXMiOlsiZ2ZtVGFza0xpc3RJdGVtSHRtbCIsImVudGVyIiwidGFza0xpc3RDaGVjayIsInRhZyIsImV4aXQiLCJ0YXNrTGlzdENoZWNrVmFsdWVDaGVja2VkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/micromark-extension-gfm-task-list-item/dev/lib/html.js\n");

/***/ }),

/***/ "(rsc)/./node_modules/micromark-extension-gfm-task-list-item/dev/lib/syntax.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/micromark-extension-gfm-task-list-item/dev/lib/syntax.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   gfmTaskListItem: () => (/* binding */ gfmTaskListItem)\n/* harmony export */ });\n/* harmony import */ var uvu_assert__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uvu/assert */ \"(rsc)/./node_modules/uvu/assert/index.mjs\");\n/* harmony import */ var micromark_factory_space__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! micromark-factory-space */ \"(rsc)/./node_modules/micromark-factory-space/dev/index.js\");\n/* harmony import */ var micromark_util_character__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! micromark-util-character */ \"(rsc)/./node_modules/micromark-util-character/dev/index.js\");\n/* harmony import */ var micromark_util_symbol_codes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! micromark-util-symbol/codes.js */ \"(rsc)/./node_modules/micromark-util-symbol/codes.js\");\n/* harmony import */ var micromark_util_symbol_types_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! micromark-util-symbol/types.js */ \"(rsc)/./node_modules/micromark-util-symbol/types.js\");\n/**\n * @typedef {import('micromark-util-types').Extension} Extension\n * @typedef {import('micromark-util-types').State} State\n * @typedef {import('micromark-util-types').TokenizeContext} TokenizeContext\n * @typedef {import('micromark-util-types').Tokenizer} Tokenizer\n */ \n\n\n\n\nconst tasklistCheck = {\n    tokenize: tokenizeTasklistCheck\n};\n// To do: next major: expose function to make extension.\n/**\n * Extension for `micromark` that can be passed in `extensions`, to\n * enable GFM task list items syntax.\n *\n * @type {Extension}\n */ const gfmTaskListItem = {\n    text: {\n        [micromark_util_symbol_codes_js__WEBPACK_IMPORTED_MODULE_1__.codes.leftSquareBracket]: tasklistCheck\n    }\n};\n/**\n * @this {TokenizeContext}\n * @type {Tokenizer}\n */ function tokenizeTasklistCheck(effects, ok, nok) {\n    const self = this;\n    return open;\n    /**\n   * At start of task list item check.\n   *\n   * ```markdown\n   * > | * [x] y.\n   *       ^\n   * ```\n   *\n   * @type {State}\n   */ function open(code) {\n        (0,uvu_assert__WEBPACK_IMPORTED_MODULE_0__.ok)(code === micromark_util_symbol_codes_js__WEBPACK_IMPORTED_MODULE_1__.codes.leftSquareBracket, \"expected `[`\");\n        if (// Exit if there’s stuff before.\n        self.previous !== micromark_util_symbol_codes_js__WEBPACK_IMPORTED_MODULE_1__.codes.eof || // Exit if not in the first content that is the first child of a list\n        // item.\n        !self._gfmTasklistFirstContentOfListItem) {\n            return nok(code);\n        }\n        effects.enter(\"taskListCheck\");\n        effects.enter(\"taskListCheckMarker\");\n        effects.consume(code);\n        effects.exit(\"taskListCheckMarker\");\n        return inside;\n    }\n    /**\n   * In task list item check.\n   *\n   * ```markdown\n   * > | * [x] y.\n   *        ^\n   * ```\n   *\n   * @type {State}\n   */ function inside(code) {\n        // Currently we match how GH works in files.\n        // To match how GH works in comments, use `markdownSpace` (`[\\t ]`) instead\n        // of `markdownLineEndingOrSpace` (`[\\t\\n\\r ]`).\n        if ((0,micromark_util_character__WEBPACK_IMPORTED_MODULE_2__.markdownLineEndingOrSpace)(code)) {\n            effects.enter(\"taskListCheckValueUnchecked\");\n            effects.consume(code);\n            effects.exit(\"taskListCheckValueUnchecked\");\n            return close;\n        }\n        if (code === micromark_util_symbol_codes_js__WEBPACK_IMPORTED_MODULE_1__.codes.uppercaseX || code === micromark_util_symbol_codes_js__WEBPACK_IMPORTED_MODULE_1__.codes.lowercaseX) {\n            effects.enter(\"taskListCheckValueChecked\");\n            effects.consume(code);\n            effects.exit(\"taskListCheckValueChecked\");\n            return close;\n        }\n        return nok(code);\n    }\n    /**\n   * At close of task list item check.\n   *\n   * ```markdown\n   * > | * [x] y.\n   *         ^\n   * ```\n   *\n   * @type {State}\n   */ function close(code) {\n        if (code === micromark_util_symbol_codes_js__WEBPACK_IMPORTED_MODULE_1__.codes.rightSquareBracket) {\n            effects.enter(\"taskListCheckMarker\");\n            effects.consume(code);\n            effects.exit(\"taskListCheckMarker\");\n            effects.exit(\"taskListCheck\");\n            return after;\n        }\n        return nok(code);\n    }\n    /**\n   * @type {State}\n   */ function after(code) {\n        // EOL in paragraph means there must be something else after it.\n        if ((0,micromark_util_character__WEBPACK_IMPORTED_MODULE_2__.markdownLineEnding)(code)) {\n            return ok(code);\n        }\n        // Space or tab?\n        // Check what comes after.\n        if ((0,micromark_util_character__WEBPACK_IMPORTED_MODULE_2__.markdownSpace)(code)) {\n            return effects.check({\n                tokenize: spaceThenNonSpace\n            }, ok, nok)(code);\n        }\n        // EOF, or non-whitespace, both wrong.\n        return nok(code);\n    }\n}\n/**\n * @this {TokenizeContext}\n * @type {Tokenizer}\n */ function spaceThenNonSpace(effects, ok, nok) {\n    return (0,micromark_factory_space__WEBPACK_IMPORTED_MODULE_3__.factorySpace)(effects, after, micromark_util_symbol_types_js__WEBPACK_IMPORTED_MODULE_4__.types.whitespace);\n    /**\n   * After whitespace, after task list item check.\n   *\n   * ```markdown\n   * > | * [x] y.\n   *           ^\n   * ```\n   *\n   * @type {State}\n   */ function after(code) {\n        // EOF means there was nothing, so bad.\n        // EOL means there’s content after it, so good.\n        // Impossible to have more spaces.\n        // Anything else is good.\n        return code === micromark_util_symbol_codes_js__WEBPACK_IMPORTED_MODULE_1__.codes.eof ? nok(code) : ok(code);\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbWljcm9tYXJrLWV4dGVuc2lvbi1nZm0tdGFzay1saXN0LWl0ZW0vZGV2L2xpYi9zeW50YXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7Ozs7O0NBS0MsR0FFc0M7QUFDYTtBQUtuQjtBQUNtQjtBQUNBO0FBRXBELE1BQU1RLGdCQUFnQjtJQUFDQyxVQUFVQztBQUFxQjtBQUV0RCx3REFBd0Q7QUFFeEQ7Ozs7O0NBS0MsR0FDTSxNQUFNQyxrQkFBa0I7SUFDN0JDLE1BQU07UUFBQyxDQUFDTixpRUFBS0EsQ0FBQ08saUJBQWlCLENBQUMsRUFBRUw7SUFBYTtBQUNqRCxFQUFDO0FBRUQ7OztDQUdDLEdBQ0QsU0FBU0Usc0JBQXNCSSxPQUFPLEVBQUVkLEVBQUUsRUFBRWUsR0FBRztJQUM3QyxNQUFNQyxPQUFPLElBQUk7SUFFakIsT0FBT0M7SUFFUDs7Ozs7Ozs7O0dBU0MsR0FDRCxTQUFTQSxLQUFLQyxJQUFJO1FBQ2hCakIsOENBQU1BLENBQUNpQixTQUFTWixpRUFBS0EsQ0FBQ08saUJBQWlCLEVBQUU7UUFFekMsSUFDRSxnQ0FBZ0M7UUFDaENHLEtBQUtHLFFBQVEsS0FBS2IsaUVBQUtBLENBQUNjLEdBQUcsSUFDM0IscUVBQXFFO1FBQ3JFLFFBQVE7UUFDUixDQUFDSixLQUFLSyxrQ0FBa0MsRUFDeEM7WUFDQSxPQUFPTixJQUFJRztRQUNiO1FBRUFKLFFBQVFRLEtBQUssQ0FBQztRQUNkUixRQUFRUSxLQUFLLENBQUM7UUFDZFIsUUFBUVMsT0FBTyxDQUFDTDtRQUNoQkosUUFBUVUsSUFBSSxDQUFDO1FBQ2IsT0FBT0M7SUFDVDtJQUVBOzs7Ozs7Ozs7R0FTQyxHQUNELFNBQVNBLE9BQU9QLElBQUk7UUFDbEIsNENBQTRDO1FBQzVDLDJFQUEyRTtRQUMzRSxnREFBZ0Q7UUFDaEQsSUFBSWYsbUZBQXlCQSxDQUFDZSxPQUFPO1lBQ25DSixRQUFRUSxLQUFLLENBQUM7WUFDZFIsUUFBUVMsT0FBTyxDQUFDTDtZQUNoQkosUUFBUVUsSUFBSSxDQUFDO1lBQ2IsT0FBT0U7UUFDVDtRQUVBLElBQUlSLFNBQVNaLGlFQUFLQSxDQUFDcUIsVUFBVSxJQUFJVCxTQUFTWixpRUFBS0EsQ0FBQ3NCLFVBQVUsRUFBRTtZQUMxRGQsUUFBUVEsS0FBSyxDQUFDO1lBQ2RSLFFBQVFTLE9BQU8sQ0FBQ0w7WUFDaEJKLFFBQVFVLElBQUksQ0FBQztZQUNiLE9BQU9FO1FBQ1Q7UUFFQSxPQUFPWCxJQUFJRztJQUNiO0lBRUE7Ozs7Ozs7OztHQVNDLEdBQ0QsU0FBU1EsTUFBTVIsSUFBSTtRQUNqQixJQUFJQSxTQUFTWixpRUFBS0EsQ0FBQ3VCLGtCQUFrQixFQUFFO1lBQ3JDZixRQUFRUSxLQUFLLENBQUM7WUFDZFIsUUFBUVMsT0FBTyxDQUFDTDtZQUNoQkosUUFBUVUsSUFBSSxDQUFDO1lBQ2JWLFFBQVFVLElBQUksQ0FBQztZQUNiLE9BQU9NO1FBQ1Q7UUFFQSxPQUFPZixJQUFJRztJQUNiO0lBRUE7O0dBRUMsR0FDRCxTQUFTWSxNQUFNWixJQUFJO1FBQ2pCLGdFQUFnRTtRQUNoRSxJQUFJZCw0RUFBa0JBLENBQUNjLE9BQU87WUFDNUIsT0FBT2xCLEdBQUdrQjtRQUNaO1FBRUEsZ0JBQWdCO1FBQ2hCLDBCQUEwQjtRQUMxQixJQUFJYix1RUFBYUEsQ0FBQ2EsT0FBTztZQUN2QixPQUFPSixRQUFRaUIsS0FBSyxDQUFDO2dCQUFDdEIsVUFBVXVCO1lBQWlCLEdBQUdoQyxJQUFJZSxLQUFLRztRQUMvRDtRQUVBLHNDQUFzQztRQUN0QyxPQUFPSCxJQUFJRztJQUNiO0FBQ0Y7QUFFQTs7O0NBR0MsR0FDRCxTQUFTYyxrQkFBa0JsQixPQUFPLEVBQUVkLEVBQUUsRUFBRWUsR0FBRztJQUN6QyxPQUFPYixxRUFBWUEsQ0FBQ1ksU0FBU2dCLE9BQU92QixpRUFBS0EsQ0FBQzBCLFVBQVU7SUFFcEQ7Ozs7Ozs7OztHQVNDLEdBQ0QsU0FBU0gsTUFBTVosSUFBSTtRQUNqQix1Q0FBdUM7UUFDdkMsK0NBQStDO1FBQy9DLGtDQUFrQztRQUNsQyx5QkFBeUI7UUFDekIsT0FBT0EsU0FBU1osaUVBQUtBLENBQUNjLEdBQUcsR0FBR0wsSUFBSUcsUUFBUWxCLEdBQUdrQjtJQUM3QztBQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dHBsYXRlLy4vbm9kZV9tb2R1bGVzL21pY3JvbWFyay1leHRlbnNpb24tZ2ZtLXRhc2stbGlzdC1pdGVtL2Rldi9saWIvc3ludGF4LmpzPzk0MDYiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCdtaWNyb21hcmstdXRpbC10eXBlcycpLkV4dGVuc2lvbn0gRXh0ZW5zaW9uXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCdtaWNyb21hcmstdXRpbC10eXBlcycpLlN0YXRlfSBTdGF0ZVxuICogQHR5cGVkZWYge2ltcG9ydCgnbWljcm9tYXJrLXV0aWwtdHlwZXMnKS5Ub2tlbml6ZUNvbnRleHR9IFRva2VuaXplQ29udGV4dFxuICogQHR5cGVkZWYge2ltcG9ydCgnbWljcm9tYXJrLXV0aWwtdHlwZXMnKS5Ub2tlbml6ZXJ9IFRva2VuaXplclxuICovXG5cbmltcG9ydCB7b2sgYXMgYXNzZXJ0fSBmcm9tICd1dnUvYXNzZXJ0J1xuaW1wb3J0IHtmYWN0b3J5U3BhY2V9IGZyb20gJ21pY3JvbWFyay1mYWN0b3J5LXNwYWNlJ1xuaW1wb3J0IHtcbiAgbWFya2Rvd25MaW5lRW5kaW5nT3JTcGFjZSxcbiAgbWFya2Rvd25MaW5lRW5kaW5nLFxuICBtYXJrZG93blNwYWNlXG59IGZyb20gJ21pY3JvbWFyay11dGlsLWNoYXJhY3RlcidcbmltcG9ydCB7Y29kZXN9IGZyb20gJ21pY3JvbWFyay11dGlsLXN5bWJvbC9jb2Rlcy5qcydcbmltcG9ydCB7dHlwZXN9IGZyb20gJ21pY3JvbWFyay11dGlsLXN5bWJvbC90eXBlcy5qcydcblxuY29uc3QgdGFza2xpc3RDaGVjayA9IHt0b2tlbml6ZTogdG9rZW5pemVUYXNrbGlzdENoZWNrfVxuXG4vLyBUbyBkbzogbmV4dCBtYWpvcjogZXhwb3NlIGZ1bmN0aW9uIHRvIG1ha2UgZXh0ZW5zaW9uLlxuXG4vKipcbiAqIEV4dGVuc2lvbiBmb3IgYG1pY3JvbWFya2AgdGhhdCBjYW4gYmUgcGFzc2VkIGluIGBleHRlbnNpb25zYCwgdG9cbiAqIGVuYWJsZSBHRk0gdGFzayBsaXN0IGl0ZW1zIHN5bnRheC5cbiAqXG4gKiBAdHlwZSB7RXh0ZW5zaW9ufVxuICovXG5leHBvcnQgY29uc3QgZ2ZtVGFza0xpc3RJdGVtID0ge1xuICB0ZXh0OiB7W2NvZGVzLmxlZnRTcXVhcmVCcmFja2V0XTogdGFza2xpc3RDaGVja31cbn1cblxuLyoqXG4gKiBAdGhpcyB7VG9rZW5pemVDb250ZXh0fVxuICogQHR5cGUge1Rva2VuaXplcn1cbiAqL1xuZnVuY3Rpb24gdG9rZW5pemVUYXNrbGlzdENoZWNrKGVmZmVjdHMsIG9rLCBub2spIHtcbiAgY29uc3Qgc2VsZiA9IHRoaXNcblxuICByZXR1cm4gb3BlblxuXG4gIC8qKlxuICAgKiBBdCBzdGFydCBvZiB0YXNrIGxpc3QgaXRlbSBjaGVjay5cbiAgICpcbiAgICogYGBgbWFya2Rvd25cbiAgICogPiB8ICogW3hdIHkuXG4gICAqICAgICAgIF5cbiAgICogYGBgXG4gICAqXG4gICAqIEB0eXBlIHtTdGF0ZX1cbiAgICovXG4gIGZ1bmN0aW9uIG9wZW4oY29kZSkge1xuICAgIGFzc2VydChjb2RlID09PSBjb2Rlcy5sZWZ0U3F1YXJlQnJhY2tldCwgJ2V4cGVjdGVkIGBbYCcpXG5cbiAgICBpZiAoXG4gICAgICAvLyBFeGl0IGlmIHRoZXJl4oCZcyBzdHVmZiBiZWZvcmUuXG4gICAgICBzZWxmLnByZXZpb3VzICE9PSBjb2Rlcy5lb2YgfHxcbiAgICAgIC8vIEV4aXQgaWYgbm90IGluIHRoZSBmaXJzdCBjb250ZW50IHRoYXQgaXMgdGhlIGZpcnN0IGNoaWxkIG9mIGEgbGlzdFxuICAgICAgLy8gaXRlbS5cbiAgICAgICFzZWxmLl9nZm1UYXNrbGlzdEZpcnN0Q29udGVudE9mTGlzdEl0ZW1cbiAgICApIHtcbiAgICAgIHJldHVybiBub2soY29kZSlcbiAgICB9XG5cbiAgICBlZmZlY3RzLmVudGVyKCd0YXNrTGlzdENoZWNrJylcbiAgICBlZmZlY3RzLmVudGVyKCd0YXNrTGlzdENoZWNrTWFya2VyJylcbiAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICBlZmZlY3RzLmV4aXQoJ3Rhc2tMaXN0Q2hlY2tNYXJrZXInKVxuICAgIHJldHVybiBpbnNpZGVcbiAgfVxuXG4gIC8qKlxuICAgKiBJbiB0YXNrIGxpc3QgaXRlbSBjaGVjay5cbiAgICpcbiAgICogYGBgbWFya2Rvd25cbiAgICogPiB8ICogW3hdIHkuXG4gICAqICAgICAgICBeXG4gICAqIGBgYFxuICAgKlxuICAgKiBAdHlwZSB7U3RhdGV9XG4gICAqL1xuICBmdW5jdGlvbiBpbnNpZGUoY29kZSkge1xuICAgIC8vIEN1cnJlbnRseSB3ZSBtYXRjaCBob3cgR0ggd29ya3MgaW4gZmlsZXMuXG4gICAgLy8gVG8gbWF0Y2ggaG93IEdIIHdvcmtzIGluIGNvbW1lbnRzLCB1c2UgYG1hcmtkb3duU3BhY2VgIChgW1xcdCBdYCkgaW5zdGVhZFxuICAgIC8vIG9mIGBtYXJrZG93bkxpbmVFbmRpbmdPclNwYWNlYCAoYFtcXHRcXG5cXHIgXWApLlxuICAgIGlmIChtYXJrZG93bkxpbmVFbmRpbmdPclNwYWNlKGNvZGUpKSB7XG4gICAgICBlZmZlY3RzLmVudGVyKCd0YXNrTGlzdENoZWNrVmFsdWVVbmNoZWNrZWQnKVxuICAgICAgZWZmZWN0cy5jb25zdW1lKGNvZGUpXG4gICAgICBlZmZlY3RzLmV4aXQoJ3Rhc2tMaXN0Q2hlY2tWYWx1ZVVuY2hlY2tlZCcpXG4gICAgICByZXR1cm4gY2xvc2VcbiAgICB9XG5cbiAgICBpZiAoY29kZSA9PT0gY29kZXMudXBwZXJjYXNlWCB8fCBjb2RlID09PSBjb2Rlcy5sb3dlcmNhc2VYKSB7XG4gICAgICBlZmZlY3RzLmVudGVyKCd0YXNrTGlzdENoZWNrVmFsdWVDaGVja2VkJylcbiAgICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgICAgZWZmZWN0cy5leGl0KCd0YXNrTGlzdENoZWNrVmFsdWVDaGVja2VkJylcbiAgICAgIHJldHVybiBjbG9zZVxuICAgIH1cblxuICAgIHJldHVybiBub2soY29kZSlcbiAgfVxuXG4gIC8qKlxuICAgKiBBdCBjbG9zZSBvZiB0YXNrIGxpc3QgaXRlbSBjaGVjay5cbiAgICpcbiAgICogYGBgbWFya2Rvd25cbiAgICogPiB8ICogW3hdIHkuXG4gICAqICAgICAgICAgXlxuICAgKiBgYGBcbiAgICpcbiAgICogQHR5cGUge1N0YXRlfVxuICAgKi9cbiAgZnVuY3Rpb24gY2xvc2UoY29kZSkge1xuICAgIGlmIChjb2RlID09PSBjb2Rlcy5yaWdodFNxdWFyZUJyYWNrZXQpIHtcbiAgICAgIGVmZmVjdHMuZW50ZXIoJ3Rhc2tMaXN0Q2hlY2tNYXJrZXInKVxuICAgICAgZWZmZWN0cy5jb25zdW1lKGNvZGUpXG4gICAgICBlZmZlY3RzLmV4aXQoJ3Rhc2tMaXN0Q2hlY2tNYXJrZXInKVxuICAgICAgZWZmZWN0cy5leGl0KCd0YXNrTGlzdENoZWNrJylcbiAgICAgIHJldHVybiBhZnRlclxuICAgIH1cblxuICAgIHJldHVybiBub2soY29kZSlcbiAgfVxuXG4gIC8qKlxuICAgKiBAdHlwZSB7U3RhdGV9XG4gICAqL1xuICBmdW5jdGlvbiBhZnRlcihjb2RlKSB7XG4gICAgLy8gRU9MIGluIHBhcmFncmFwaCBtZWFucyB0aGVyZSBtdXN0IGJlIHNvbWV0aGluZyBlbHNlIGFmdGVyIGl0LlxuICAgIGlmIChtYXJrZG93bkxpbmVFbmRpbmcoY29kZSkpIHtcbiAgICAgIHJldHVybiBvayhjb2RlKVxuICAgIH1cblxuICAgIC8vIFNwYWNlIG9yIHRhYj9cbiAgICAvLyBDaGVjayB3aGF0IGNvbWVzIGFmdGVyLlxuICAgIGlmIChtYXJrZG93blNwYWNlKGNvZGUpKSB7XG4gICAgICByZXR1cm4gZWZmZWN0cy5jaGVjayh7dG9rZW5pemU6IHNwYWNlVGhlbk5vblNwYWNlfSwgb2ssIG5vaykoY29kZSlcbiAgICB9XG5cbiAgICAvLyBFT0YsIG9yIG5vbi13aGl0ZXNwYWNlLCBib3RoIHdyb25nLlxuICAgIHJldHVybiBub2soY29kZSlcbiAgfVxufVxuXG4vKipcbiAqIEB0aGlzIHtUb2tlbml6ZUNvbnRleHR9XG4gKiBAdHlwZSB7VG9rZW5pemVyfVxuICovXG5mdW5jdGlvbiBzcGFjZVRoZW5Ob25TcGFjZShlZmZlY3RzLCBvaywgbm9rKSB7XG4gIHJldHVybiBmYWN0b3J5U3BhY2UoZWZmZWN0cywgYWZ0ZXIsIHR5cGVzLndoaXRlc3BhY2UpXG5cbiAgLyoqXG4gICAqIEFmdGVyIHdoaXRlc3BhY2UsIGFmdGVyIHRhc2sgbGlzdCBpdGVtIGNoZWNrLlxuICAgKlxuICAgKiBgYGBtYXJrZG93blxuICAgKiA+IHwgKiBbeF0geS5cbiAgICogICAgICAgICAgIF5cbiAgICogYGBgXG4gICAqXG4gICAqIEB0eXBlIHtTdGF0ZX1cbiAgICovXG4gIGZ1bmN0aW9uIGFmdGVyKGNvZGUpIHtcbiAgICAvLyBFT0YgbWVhbnMgdGhlcmUgd2FzIG5vdGhpbmcsIHNvIGJhZC5cbiAgICAvLyBFT0wgbWVhbnMgdGhlcmXigJlzIGNvbnRlbnQgYWZ0ZXIgaXQsIHNvIGdvb2QuXG4gICAgLy8gSW1wb3NzaWJsZSB0byBoYXZlIG1vcmUgc3BhY2VzLlxuICAgIC8vIEFueXRoaW5nIGVsc2UgaXMgZ29vZC5cbiAgICByZXR1cm4gY29kZSA9PT0gY29kZXMuZW9mID8gbm9rKGNvZGUpIDogb2soY29kZSlcbiAgfVxufVxuIl0sIm5hbWVzIjpbIm9rIiwiYXNzZXJ0IiwiZmFjdG9yeVNwYWNlIiwibWFya2Rvd25MaW5lRW5kaW5nT3JTcGFjZSIsIm1hcmtkb3duTGluZUVuZGluZyIsIm1hcmtkb3duU3BhY2UiLCJjb2RlcyIsInR5cGVzIiwidGFza2xpc3RDaGVjayIsInRva2VuaXplIiwidG9rZW5pemVUYXNrbGlzdENoZWNrIiwiZ2ZtVGFza0xpc3RJdGVtIiwidGV4dCIsImxlZnRTcXVhcmVCcmFja2V0IiwiZWZmZWN0cyIsIm5vayIsInNlbGYiLCJvcGVuIiwiY29kZSIsInByZXZpb3VzIiwiZW9mIiwiX2dmbVRhc2tsaXN0Rmlyc3RDb250ZW50T2ZMaXN0SXRlbSIsImVudGVyIiwiY29uc3VtZSIsImV4aXQiLCJpbnNpZGUiLCJjbG9zZSIsInVwcGVyY2FzZVgiLCJsb3dlcmNhc2VYIiwicmlnaHRTcXVhcmVCcmFja2V0IiwiYWZ0ZXIiLCJjaGVjayIsInNwYWNlVGhlbk5vblNwYWNlIiwid2hpdGVzcGFjZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/micromark-extension-gfm-task-list-item/dev/lib/syntax.js\n");

/***/ })

};
;