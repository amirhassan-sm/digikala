"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("middleware",{

/***/ "(middleware)/./middleware.js":
/*!***********************!*\
  !*** ./middleware.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/web/exports/next-response */ \"(middleware)/./node_modules/next/dist/esm/server/web/exports/next-response.js\");\n/* harmony import */ var jose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jose */ \"(middleware)/./node_modules/jose/dist/browser/index.js\");\n\n // export const config = {\n //     matcher: [\"/checkout/:path*\", \"/dashbord\"]\n // }\n // export default function middleware(request) {\n //     if (request.cookies.get(\"token\") !== undefined) {\n //         const token = request.cookies.get(\"token\")\n //         const user = jose.decodeJwt(token.value) //jwt to object\n //         if (user.exp !==  null)// checking if token in valid\n //         {\n //             return NextResponse.rewrite(request.nextUrl.href)\n //         }\n //         else {//token is invalid and it will be deleted and redirecting in loggin page\n //             return request.cookies.delete(\"token\")\n //         }\n //     }\n //     else {\n //         return NextResponse.rewrite(`${request.nextUrl.origin}/Auth/signup`)\n //     }\n // }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKG1pZGRsZXdhcmUpLy4vbWlkZGxld2FyZS5qcyIsIm1hcHBpbmdzIjoiOzs7QUFBMEM7QUFDZCxDQUU1QiwwQkFBMEI7Q0FDMUIsaURBQWlEO0NBQ2pELElBQUk7Q0FFSixnREFBZ0Q7Q0FFaEQsd0RBQXdEO0NBQ3hELHFEQUFxRDtDQUNyRCxtRUFBbUU7Q0FFbkUsK0RBQStEO0NBQy9ELFlBQVk7Q0FDWixnRUFBZ0U7Q0FHaEUsWUFBWTtDQUNaLHlGQUF5RjtDQUV6RixxREFBcUQ7Q0FFckQsWUFBWTtDQUNaLFFBQVE7Q0FHUixhQUFhO0NBQ2IsK0VBQStFO0NBQy9FLFFBQVE7Q0FJUixJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL21pZGRsZXdhcmUuanM/M2JjYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0UmVzcG9uc2UgfSBmcm9tIFwibmV4dC9zZXJ2ZXJcIlxyXG5pbXBvcnQgKiBhcyBqb3NlIGZyb20gJ2pvc2UnXHJcblxyXG4vLyBleHBvcnQgY29uc3QgY29uZmlnID0ge1xyXG4vLyAgICAgbWF0Y2hlcjogW1wiL2NoZWNrb3V0LzpwYXRoKlwiLCBcIi9kYXNoYm9yZFwiXVxyXG4vLyB9XHJcblxyXG4vLyBleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtaWRkbGV3YXJlKHJlcXVlc3QpIHtcclxuXHJcbi8vICAgICBpZiAocmVxdWVzdC5jb29raWVzLmdldChcInRva2VuXCIpICE9PSB1bmRlZmluZWQpIHtcclxuLy8gICAgICAgICBjb25zdCB0b2tlbiA9IHJlcXVlc3QuY29va2llcy5nZXQoXCJ0b2tlblwiKVxyXG4vLyAgICAgICAgIGNvbnN0IHVzZXIgPSBqb3NlLmRlY29kZUp3dCh0b2tlbi52YWx1ZSkgLy9qd3QgdG8gb2JqZWN0XHJcblxyXG4vLyAgICAgICAgIGlmICh1c2VyLmV4cCAhPT0gIG51bGwpLy8gY2hlY2tpbmcgaWYgdG9rZW4gaW4gdmFsaWRcclxuLy8gICAgICAgICB7XHJcbi8vICAgICAgICAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UucmV3cml0ZShyZXF1ZXN0Lm5leHRVcmwuaHJlZilcclxuXHJcblxyXG4vLyAgICAgICAgIH1cclxuLy8gICAgICAgICBlbHNlIHsvL3Rva2VuIGlzIGludmFsaWQgYW5kIGl0IHdpbGwgYmUgZGVsZXRlZCBhbmQgcmVkaXJlY3RpbmcgaW4gbG9nZ2luIHBhZ2VcclxuXHJcbi8vICAgICAgICAgICAgIHJldHVybiByZXF1ZXN0LmNvb2tpZXMuZGVsZXRlKFwidG9rZW5cIilcclxuXHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgfVxyXG5cclxuXHJcbi8vICAgICBlbHNlIHtcclxuLy8gICAgICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLnJld3JpdGUoYCR7cmVxdWVzdC5uZXh0VXJsLm9yaWdpbn0vQXV0aC9zaWdudXBgKVxyXG4vLyAgICAgfVxyXG5cclxuXHJcblxyXG4vLyB9XHJcbiJdLCJuYW1lcyI6WyJOZXh0UmVzcG9uc2UiLCJqb3NlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(middleware)/./middleware.js\n");

/***/ })

});