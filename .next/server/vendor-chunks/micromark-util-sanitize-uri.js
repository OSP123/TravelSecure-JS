"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/micromark-util-sanitize-uri";
exports.ids = ["vendor-chunks/micromark-util-sanitize-uri"];
exports.modules = {

/***/ "(rsc)/./node_modules/micromark-util-sanitize-uri/dev/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/micromark-util-sanitize-uri/dev/index.js ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   normalizeUri: () => (/* binding */ normalizeUri),\n/* harmony export */   sanitizeUri: () => (/* binding */ sanitizeUri)\n/* harmony export */ });\n/* harmony import */ var micromark_util_character__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! micromark-util-character */ \"(rsc)/./node_modules/micromark-util-character/dev/index.js\");\n/* harmony import */ var micromark_util_encode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! micromark-util-encode */ \"(rsc)/./node_modules/micromark-util-encode/index.js\");\n/* harmony import */ var micromark_util_symbol_codes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! micromark-util-symbol/codes.js */ \"(rsc)/./node_modules/micromark-util-symbol/codes.js\");\n/* harmony import */ var micromark_util_symbol_values_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! micromark-util-symbol/values.js */ \"(rsc)/./node_modules/micromark-util-symbol/values.js\");\n\n\n\n\n/**\n * Make a value safe for injection as a URL.\n *\n * This encodes unsafe characters with percent-encoding and skips already\n * encoded sequences (see `normalizeUri`).\n * Further unsafe characters are encoded as character references (see\n * `micromark-util-encode`).\n *\n * A regex of allowed protocols can be given, in which case the URL is\n * sanitized.\n * For example, `/^(https?|ircs?|mailto|xmpp)$/i` can be used for `a[href]`, or\n * `/^https?$/i` for `img[src]` (this is what `github.com` allows).\n * If the URL includes an unknown protocol (one not matched by `protocol`, such\n * as a dangerous example, `javascript:`), the value is ignored.\n *\n * @param {string | undefined} url\n *   URI to sanitize.\n * @param {RegExp | null | undefined} [protocol]\n *   Allowed protocols.\n * @returns {string}\n *   Sanitized URI.\n */ function sanitizeUri(url, protocol) {\n    const value = (0,micromark_util_encode__WEBPACK_IMPORTED_MODULE_0__.encode)(normalizeUri(url || \"\"));\n    if (!protocol) {\n        return value;\n    }\n    const colon = value.indexOf(\":\");\n    const questionMark = value.indexOf(\"?\");\n    const numberSign = value.indexOf(\"#\");\n    const slash = value.indexOf(\"/\");\n    if (// If there is no protocol, it’s relative.\n    colon < 0 || // If the first colon is after a `?`, `#`, or `/`, it’s not a protocol.\n    slash > -1 && colon > slash || questionMark > -1 && colon > questionMark || numberSign > -1 && colon > numberSign || // It is a protocol, it should be allowed.\n    protocol.test(value.slice(0, colon))) {\n        return value;\n    }\n    return \"\";\n}\n/**\n * Normalize a URL.\n *\n * Encode unsafe characters with percent-encoding, skipping already encoded\n * sequences.\n *\n * @param {string} value\n *   URI to normalize.\n * @returns {string}\n *   Normalized URI.\n */ function normalizeUri(value) {\n    /** @type {Array<string>} */ const result = [];\n    let index = -1;\n    let start = 0;\n    let skip = 0;\n    while(++index < value.length){\n        const code = value.charCodeAt(index);\n        /** @type {string} */ let replace = \"\";\n        // A correct percent encoded value.\n        if (code === micromark_util_symbol_codes_js__WEBPACK_IMPORTED_MODULE_1__.codes.percentSign && (0,micromark_util_character__WEBPACK_IMPORTED_MODULE_2__.asciiAlphanumeric)(value.charCodeAt(index + 1)) && (0,micromark_util_character__WEBPACK_IMPORTED_MODULE_2__.asciiAlphanumeric)(value.charCodeAt(index + 2))) {\n            skip = 2;\n        } else if (code < 128) {\n            if (!/[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(code))) {\n                replace = String.fromCharCode(code);\n            }\n        } else if (code > 55295 && code < 57344) {\n            const next = value.charCodeAt(index + 1);\n            // A correct surrogate pair.\n            if (code < 56320 && next > 56319 && next < 57344) {\n                replace = String.fromCharCode(code, next);\n                skip = 1;\n            } else {\n                replace = micromark_util_symbol_values_js__WEBPACK_IMPORTED_MODULE_3__.values.replacementCharacter;\n            }\n        } else {\n            replace = String.fromCharCode(code);\n        }\n        if (replace) {\n            result.push(value.slice(start, index), encodeURIComponent(replace));\n            start = index + skip + 1;\n            replace = \"\";\n        }\n        if (skip) {\n            index += skip;\n            skip = 0;\n        }\n    }\n    return result.join(\"\") + value.slice(start);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbWljcm9tYXJrLXV0aWwtc2FuaXRpemUtdXJpL2Rldi9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBMEQ7QUFDZDtBQUNRO0FBQ0U7QUFFdEQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQXFCQyxHQUNNLFNBQVNJLFlBQVlDLEdBQUcsRUFBRUMsUUFBUTtJQUN2QyxNQUFNQyxRQUFRTiw2REFBTUEsQ0FBQ08sYUFBYUgsT0FBTztJQUV6QyxJQUFJLENBQUNDLFVBQVU7UUFDYixPQUFPQztJQUNUO0lBRUEsTUFBTUUsUUFBUUYsTUFBTUcsT0FBTyxDQUFDO0lBQzVCLE1BQU1DLGVBQWVKLE1BQU1HLE9BQU8sQ0FBQztJQUNuQyxNQUFNRSxhQUFhTCxNQUFNRyxPQUFPLENBQUM7SUFDakMsTUFBTUcsUUFBUU4sTUFBTUcsT0FBTyxDQUFDO0lBRTVCLElBQ0UsMENBQTBDO0lBQzFDRCxRQUFRLEtBQ1IsdUVBQXVFO0lBQ3RFSSxRQUFRLENBQUMsS0FBS0osUUFBUUksU0FDdEJGLGVBQWUsQ0FBQyxLQUFLRixRQUFRRSxnQkFDN0JDLGFBQWEsQ0FBQyxLQUFLSCxRQUFRRyxjQUM1QiwwQ0FBMEM7SUFDMUNOLFNBQVNRLElBQUksQ0FBQ1AsTUFBTVEsS0FBSyxDQUFDLEdBQUdOLFNBQzdCO1FBQ0EsT0FBT0Y7SUFDVDtJQUVBLE9BQU87QUFDVDtBQUVBOzs7Ozs7Ozs7O0NBVUMsR0FDTSxTQUFTQyxhQUFhRCxLQUFLO0lBQ2hDLDBCQUEwQixHQUMxQixNQUFNUyxTQUFTLEVBQUU7SUFDakIsSUFBSUMsUUFBUSxDQUFDO0lBQ2IsSUFBSUMsUUFBUTtJQUNaLElBQUlDLE9BQU87SUFFWCxNQUFPLEVBQUVGLFFBQVFWLE1BQU1hLE1BQU0sQ0FBRTtRQUM3QixNQUFNQyxPQUFPZCxNQUFNZSxVQUFVLENBQUNMO1FBQzlCLG1CQUFtQixHQUNuQixJQUFJTSxVQUFVO1FBRWQsbUNBQW1DO1FBQ25DLElBQ0VGLFNBQVNuQixpRUFBS0EsQ0FBQ3NCLFdBQVcsSUFDMUJ4QiwyRUFBaUJBLENBQUNPLE1BQU1lLFVBQVUsQ0FBQ0wsUUFBUSxPQUMzQ2pCLDJFQUFpQkEsQ0FBQ08sTUFBTWUsVUFBVSxDQUFDTCxRQUFRLEtBQzNDO1lBQ0FFLE9BQU87UUFDVCxPQUVLLElBQUlFLE9BQU8sS0FBSztZQUNuQixJQUFJLENBQUMsb0JBQW9CUCxJQUFJLENBQUNXLE9BQU9DLFlBQVksQ0FBQ0wsUUFBUTtnQkFDeERFLFVBQVVFLE9BQU9DLFlBQVksQ0FBQ0w7WUFDaEM7UUFDRixPQUVLLElBQUlBLE9BQU8sU0FBU0EsT0FBTyxPQUFPO1lBQ3JDLE1BQU1NLE9BQU9wQixNQUFNZSxVQUFVLENBQUNMLFFBQVE7WUFFdEMsNEJBQTRCO1lBQzVCLElBQUlJLE9BQU8sU0FBU00sT0FBTyxTQUFTQSxPQUFPLE9BQU87Z0JBQ2hESixVQUFVRSxPQUFPQyxZQUFZLENBQUNMLE1BQU1NO2dCQUNwQ1IsT0FBTztZQUNULE9BRUs7Z0JBQ0hJLFVBQVVwQixtRUFBTUEsQ0FBQ3lCLG9CQUFvQjtZQUN2QztRQUNGLE9BRUs7WUFDSEwsVUFBVUUsT0FBT0MsWUFBWSxDQUFDTDtRQUNoQztRQUVBLElBQUlFLFNBQVM7WUFDWFAsT0FBT2EsSUFBSSxDQUFDdEIsTUFBTVEsS0FBSyxDQUFDRyxPQUFPRCxRQUFRYSxtQkFBbUJQO1lBQzFETCxRQUFRRCxRQUFRRSxPQUFPO1lBQ3ZCSSxVQUFVO1FBQ1o7UUFFQSxJQUFJSixNQUFNO1lBQ1JGLFNBQVNFO1lBQ1RBLE9BQU87UUFDVDtJQUNGO0lBRUEsT0FBT0gsT0FBT2UsSUFBSSxDQUFDLE1BQU14QixNQUFNUSxLQUFLLENBQUNHO0FBQ3ZDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dHBsYXRlLy4vbm9kZV9tb2R1bGVzL21pY3JvbWFyay11dGlsLXNhbml0aXplLXVyaS9kZXYvaW5kZXguanM/ZmYwNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2FzY2lpQWxwaGFudW1lcmljfSBmcm9tICdtaWNyb21hcmstdXRpbC1jaGFyYWN0ZXInXG5pbXBvcnQge2VuY29kZX0gZnJvbSAnbWljcm9tYXJrLXV0aWwtZW5jb2RlJ1xuaW1wb3J0IHtjb2Rlc30gZnJvbSAnbWljcm9tYXJrLXV0aWwtc3ltYm9sL2NvZGVzLmpzJ1xuaW1wb3J0IHt2YWx1ZXN9IGZyb20gJ21pY3JvbWFyay11dGlsLXN5bWJvbC92YWx1ZXMuanMnXG5cbi8qKlxuICogTWFrZSBhIHZhbHVlIHNhZmUgZm9yIGluamVjdGlvbiBhcyBhIFVSTC5cbiAqXG4gKiBUaGlzIGVuY29kZXMgdW5zYWZlIGNoYXJhY3RlcnMgd2l0aCBwZXJjZW50LWVuY29kaW5nIGFuZCBza2lwcyBhbHJlYWR5XG4gKiBlbmNvZGVkIHNlcXVlbmNlcyAoc2VlIGBub3JtYWxpemVVcmlgKS5cbiAqIEZ1cnRoZXIgdW5zYWZlIGNoYXJhY3RlcnMgYXJlIGVuY29kZWQgYXMgY2hhcmFjdGVyIHJlZmVyZW5jZXMgKHNlZVxuICogYG1pY3JvbWFyay11dGlsLWVuY29kZWApLlxuICpcbiAqIEEgcmVnZXggb2YgYWxsb3dlZCBwcm90b2NvbHMgY2FuIGJlIGdpdmVuLCBpbiB3aGljaCBjYXNlIHRoZSBVUkwgaXNcbiAqIHNhbml0aXplZC5cbiAqIEZvciBleGFtcGxlLCBgL14oaHR0cHM/fGlyY3M/fG1haWx0b3x4bXBwKSQvaWAgY2FuIGJlIHVzZWQgZm9yIGBhW2hyZWZdYCwgb3JcbiAqIGAvXmh0dHBzPyQvaWAgZm9yIGBpbWdbc3JjXWAgKHRoaXMgaXMgd2hhdCBgZ2l0aHViLmNvbWAgYWxsb3dzKS5cbiAqIElmIHRoZSBVUkwgaW5jbHVkZXMgYW4gdW5rbm93biBwcm90b2NvbCAob25lIG5vdCBtYXRjaGVkIGJ5IGBwcm90b2NvbGAsIHN1Y2hcbiAqIGFzIGEgZGFuZ2Vyb3VzIGV4YW1wbGUsIGBqYXZhc2NyaXB0OmApLCB0aGUgdmFsdWUgaXMgaWdub3JlZC5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZyB8IHVuZGVmaW5lZH0gdXJsXG4gKiAgIFVSSSB0byBzYW5pdGl6ZS5cbiAqIEBwYXJhbSB7UmVnRXhwIHwgbnVsbCB8IHVuZGVmaW5lZH0gW3Byb3RvY29sXVxuICogICBBbGxvd2VkIHByb3RvY29scy5cbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKiAgIFNhbml0aXplZCBVUkkuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzYW5pdGl6ZVVyaSh1cmwsIHByb3RvY29sKSB7XG4gIGNvbnN0IHZhbHVlID0gZW5jb2RlKG5vcm1hbGl6ZVVyaSh1cmwgfHwgJycpKVxuXG4gIGlmICghcHJvdG9jb2wpIHtcbiAgICByZXR1cm4gdmFsdWVcbiAgfVxuXG4gIGNvbnN0IGNvbG9uID0gdmFsdWUuaW5kZXhPZignOicpXG4gIGNvbnN0IHF1ZXN0aW9uTWFyayA9IHZhbHVlLmluZGV4T2YoJz8nKVxuICBjb25zdCBudW1iZXJTaWduID0gdmFsdWUuaW5kZXhPZignIycpXG4gIGNvbnN0IHNsYXNoID0gdmFsdWUuaW5kZXhPZignLycpXG5cbiAgaWYgKFxuICAgIC8vIElmIHRoZXJlIGlzIG5vIHByb3RvY29sLCBpdOKAmXMgcmVsYXRpdmUuXG4gICAgY29sb24gPCAwIHx8XG4gICAgLy8gSWYgdGhlIGZpcnN0IGNvbG9uIGlzIGFmdGVyIGEgYD9gLCBgI2AsIG9yIGAvYCwgaXTigJlzIG5vdCBhIHByb3RvY29sLlxuICAgIChzbGFzaCA+IC0xICYmIGNvbG9uID4gc2xhc2gpIHx8XG4gICAgKHF1ZXN0aW9uTWFyayA+IC0xICYmIGNvbG9uID4gcXVlc3Rpb25NYXJrKSB8fFxuICAgIChudW1iZXJTaWduID4gLTEgJiYgY29sb24gPiBudW1iZXJTaWduKSB8fFxuICAgIC8vIEl0IGlzIGEgcHJvdG9jb2wsIGl0IHNob3VsZCBiZSBhbGxvd2VkLlxuICAgIHByb3RvY29sLnRlc3QodmFsdWUuc2xpY2UoMCwgY29sb24pKVxuICApIHtcbiAgICByZXR1cm4gdmFsdWVcbiAgfVxuXG4gIHJldHVybiAnJ1xufVxuXG4vKipcbiAqIE5vcm1hbGl6ZSBhIFVSTC5cbiAqXG4gKiBFbmNvZGUgdW5zYWZlIGNoYXJhY3RlcnMgd2l0aCBwZXJjZW50LWVuY29kaW5nLCBza2lwcGluZyBhbHJlYWR5IGVuY29kZWRcbiAqIHNlcXVlbmNlcy5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gdmFsdWVcbiAqICAgVVJJIHRvIG5vcm1hbGl6ZS5cbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKiAgIE5vcm1hbGl6ZWQgVVJJLlxuICovXG5leHBvcnQgZnVuY3Rpb24gbm9ybWFsaXplVXJpKHZhbHVlKSB7XG4gIC8qKiBAdHlwZSB7QXJyYXk8c3RyaW5nPn0gKi9cbiAgY29uc3QgcmVzdWx0ID0gW11cbiAgbGV0IGluZGV4ID0gLTFcbiAgbGV0IHN0YXJ0ID0gMFxuICBsZXQgc2tpcCA9IDBcblxuICB3aGlsZSAoKytpbmRleCA8IHZhbHVlLmxlbmd0aCkge1xuICAgIGNvbnN0IGNvZGUgPSB2YWx1ZS5jaGFyQ29kZUF0KGluZGV4KVxuICAgIC8qKiBAdHlwZSB7c3RyaW5nfSAqL1xuICAgIGxldCByZXBsYWNlID0gJydcblxuICAgIC8vIEEgY29ycmVjdCBwZXJjZW50IGVuY29kZWQgdmFsdWUuXG4gICAgaWYgKFxuICAgICAgY29kZSA9PT0gY29kZXMucGVyY2VudFNpZ24gJiZcbiAgICAgIGFzY2lpQWxwaGFudW1lcmljKHZhbHVlLmNoYXJDb2RlQXQoaW5kZXggKyAxKSkgJiZcbiAgICAgIGFzY2lpQWxwaGFudW1lcmljKHZhbHVlLmNoYXJDb2RlQXQoaW5kZXggKyAyKSlcbiAgICApIHtcbiAgICAgIHNraXAgPSAyXG4gICAgfVxuICAgIC8vIEFTQ0lJLlxuICAgIGVsc2UgaWYgKGNvZGUgPCAxMjgpIHtcbiAgICAgIGlmICghL1shIyQmLTs9Py1aX2Eten5dLy50ZXN0KFN0cmluZy5mcm9tQ2hhckNvZGUoY29kZSkpKSB7XG4gICAgICAgIHJlcGxhY2UgPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGNvZGUpXG4gICAgICB9XG4gICAgfVxuICAgIC8vIEFzdHJhbC5cbiAgICBlbHNlIGlmIChjb2RlID4gNTUyOTUgJiYgY29kZSA8IDU3MzQ0KSB7XG4gICAgICBjb25zdCBuZXh0ID0gdmFsdWUuY2hhckNvZGVBdChpbmRleCArIDEpXG5cbiAgICAgIC8vIEEgY29ycmVjdCBzdXJyb2dhdGUgcGFpci5cbiAgICAgIGlmIChjb2RlIDwgNTYzMjAgJiYgbmV4dCA+IDU2MzE5ICYmIG5leHQgPCA1NzM0NCkge1xuICAgICAgICByZXBsYWNlID0gU3RyaW5nLmZyb21DaGFyQ29kZShjb2RlLCBuZXh0KVxuICAgICAgICBza2lwID0gMVxuICAgICAgfVxuICAgICAgLy8gTG9uZSBzdXJyb2dhdGUuXG4gICAgICBlbHNlIHtcbiAgICAgICAgcmVwbGFjZSA9IHZhbHVlcy5yZXBsYWNlbWVudENoYXJhY3RlclxuICAgICAgfVxuICAgIH1cbiAgICAvLyBVbmljb2RlLlxuICAgIGVsc2Uge1xuICAgICAgcmVwbGFjZSA9IFN0cmluZy5mcm9tQ2hhckNvZGUoY29kZSlcbiAgICB9XG5cbiAgICBpZiAocmVwbGFjZSkge1xuICAgICAgcmVzdWx0LnB1c2godmFsdWUuc2xpY2Uoc3RhcnQsIGluZGV4KSwgZW5jb2RlVVJJQ29tcG9uZW50KHJlcGxhY2UpKVxuICAgICAgc3RhcnQgPSBpbmRleCArIHNraXAgKyAxXG4gICAgICByZXBsYWNlID0gJydcbiAgICB9XG5cbiAgICBpZiAoc2tpcCkge1xuICAgICAgaW5kZXggKz0gc2tpcFxuICAgICAgc2tpcCA9IDBcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0LmpvaW4oJycpICsgdmFsdWUuc2xpY2Uoc3RhcnQpXG59XG4iXSwibmFtZXMiOlsiYXNjaWlBbHBoYW51bWVyaWMiLCJlbmNvZGUiLCJjb2RlcyIsInZhbHVlcyIsInNhbml0aXplVXJpIiwidXJsIiwicHJvdG9jb2wiLCJ2YWx1ZSIsIm5vcm1hbGl6ZVVyaSIsImNvbG9uIiwiaW5kZXhPZiIsInF1ZXN0aW9uTWFyayIsIm51bWJlclNpZ24iLCJzbGFzaCIsInRlc3QiLCJzbGljZSIsInJlc3VsdCIsImluZGV4Iiwic3RhcnQiLCJza2lwIiwibGVuZ3RoIiwiY29kZSIsImNoYXJDb2RlQXQiLCJyZXBsYWNlIiwicGVyY2VudFNpZ24iLCJTdHJpbmciLCJmcm9tQ2hhckNvZGUiLCJuZXh0IiwicmVwbGFjZW1lbnRDaGFyYWN0ZXIiLCJwdXNoIiwiZW5jb2RlVVJJQ29tcG9uZW50Iiwiam9pbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/micromark-util-sanitize-uri/dev/index.js\n");

/***/ })

};
;