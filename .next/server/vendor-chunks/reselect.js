"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/reselect";
exports.ids = ["vendor-chunks/reselect"];
exports.modules = {

/***/ "(ssr)/./node_modules/reselect/lib/defaultMemoize.js":
/*!*****************************************************!*\
  !*** ./node_modules/reselect/lib/defaultMemoize.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports.createCacheKeyComparator = createCacheKeyComparator;\nexports.defaultEqualityCheck = void 0;\nexports.defaultMemoize = defaultMemoize;\n// Cache implementation based on Erik Rasmussen's `lru-memoize`:\n// https://github.com/erikras/lru-memoize\nvar NOT_FOUND = 'NOT_FOUND';\n\nfunction createSingletonCache(equals) {\n  var entry;\n  return {\n    get: function get(key) {\n      if (entry && equals(entry.key, key)) {\n        return entry.value;\n      }\n\n      return NOT_FOUND;\n    },\n    put: function put(key, value) {\n      entry = {\n        key: key,\n        value: value\n      };\n    },\n    getEntries: function getEntries() {\n      return entry ? [entry] : [];\n    },\n    clear: function clear() {\n      entry = undefined;\n    }\n  };\n}\n\nfunction createLruCache(maxSize, equals) {\n  var entries = [];\n\n  function get(key) {\n    var cacheIndex = entries.findIndex(function (entry) {\n      return equals(key, entry.key);\n    }); // We found a cached entry\n\n    if (cacheIndex > -1) {\n      var entry = entries[cacheIndex]; // Cached entry not at top of cache, move it to the top\n\n      if (cacheIndex > 0) {\n        entries.splice(cacheIndex, 1);\n        entries.unshift(entry);\n      }\n\n      return entry.value;\n    } // No entry found in cache, return sentinel\n\n\n    return NOT_FOUND;\n  }\n\n  function put(key, value) {\n    if (get(key) === NOT_FOUND) {\n      // TODO Is unshift slow?\n      entries.unshift({\n        key: key,\n        value: value\n      });\n\n      if (entries.length > maxSize) {\n        entries.pop();\n      }\n    }\n  }\n\n  function getEntries() {\n    return entries;\n  }\n\n  function clear() {\n    entries = [];\n  }\n\n  return {\n    get: get,\n    put: put,\n    getEntries: getEntries,\n    clear: clear\n  };\n}\n\nvar defaultEqualityCheck = function defaultEqualityCheck(a, b) {\n  return a === b;\n};\n\nexports.defaultEqualityCheck = defaultEqualityCheck;\n\nfunction createCacheKeyComparator(equalityCheck) {\n  return function areArgumentsShallowlyEqual(prev, next) {\n    if (prev === null || next === null || prev.length !== next.length) {\n      return false;\n    } // Do this in a for loop (and not a `forEach` or an `every`) so we can determine equality as fast as possible.\n\n\n    var length = prev.length;\n\n    for (var i = 0; i < length; i++) {\n      if (!equalityCheck(prev[i], next[i])) {\n        return false;\n      }\n    }\n\n    return true;\n  };\n}\n\n// defaultMemoize now supports a configurable cache size with LRU behavior,\n// and optional comparison of the result value with existing values\nfunction defaultMemoize(func, equalityCheckOrOptions) {\n  var providedOptions = typeof equalityCheckOrOptions === 'object' ? equalityCheckOrOptions : {\n    equalityCheck: equalityCheckOrOptions\n  };\n  var _providedOptions$equa = providedOptions.equalityCheck,\n      equalityCheck = _providedOptions$equa === void 0 ? defaultEqualityCheck : _providedOptions$equa,\n      _providedOptions$maxS = providedOptions.maxSize,\n      maxSize = _providedOptions$maxS === void 0 ? 1 : _providedOptions$maxS,\n      resultEqualityCheck = providedOptions.resultEqualityCheck;\n  var comparator = createCacheKeyComparator(equalityCheck);\n  var cache = maxSize === 1 ? createSingletonCache(comparator) : createLruCache(maxSize, comparator); // we reference arguments instead of spreading them for performance reasons\n\n  function memoized() {\n    var value = cache.get(arguments);\n\n    if (value === NOT_FOUND) {\n      // @ts-ignore\n      value = func.apply(null, arguments);\n\n      if (resultEqualityCheck) {\n        var entries = cache.getEntries();\n        var matchingEntry = entries.find(function (entry) {\n          return resultEqualityCheck(entry.value, value);\n        });\n\n        if (matchingEntry) {\n          value = matchingEntry.value;\n        }\n      }\n\n      cache.put(arguments, value);\n    }\n\n    return value;\n  }\n\n  memoized.clearCache = function () {\n    return cache.clear();\n  };\n\n  return memoized;\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvcmVzZWxlY3QvbGliL2RlZmF1bHRNZW1vaXplLmpzIiwibWFwcGluZ3MiOiJBQUFhOztBQUViLDhDQUE2QztBQUM3QztBQUNBLENBQUMsRUFBQztBQUNGLGdDQUFnQztBQUNoQyw0QkFBNEI7QUFDNUIsc0JBQXNCO0FBQ3RCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUssR0FBRzs7QUFFUjtBQUNBLHVDQUF1Qzs7QUFFdkM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxNQUFNOzs7QUFHTjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSw0QkFBNEI7O0FBRTVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTs7O0FBR047O0FBRUEsb0JBQW9CLFlBQVk7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNHQUFzRzs7QUFFdEc7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2RpZ2lrYWxhLy4vbm9kZV9tb2R1bGVzL3Jlc2VsZWN0L2xpYi9kZWZhdWx0TWVtb2l6ZS5qcz83OTkwIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5jcmVhdGVDYWNoZUtleUNvbXBhcmF0b3IgPSBjcmVhdGVDYWNoZUtleUNvbXBhcmF0b3I7XG5leHBvcnRzLmRlZmF1bHRFcXVhbGl0eUNoZWNrID0gdm9pZCAwO1xuZXhwb3J0cy5kZWZhdWx0TWVtb2l6ZSA9IGRlZmF1bHRNZW1vaXplO1xuLy8gQ2FjaGUgaW1wbGVtZW50YXRpb24gYmFzZWQgb24gRXJpayBSYXNtdXNzZW4ncyBgbHJ1LW1lbW9pemVgOlxuLy8gaHR0cHM6Ly9naXRodWIuY29tL2VyaWtyYXMvbHJ1LW1lbW9pemVcbnZhciBOT1RfRk9VTkQgPSAnTk9UX0ZPVU5EJztcblxuZnVuY3Rpb24gY3JlYXRlU2luZ2xldG9uQ2FjaGUoZXF1YWxzKSB7XG4gIHZhciBlbnRyeTtcbiAgcmV0dXJuIHtcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldChrZXkpIHtcbiAgICAgIGlmIChlbnRyeSAmJiBlcXVhbHMoZW50cnkua2V5LCBrZXkpKSB7XG4gICAgICAgIHJldHVybiBlbnRyeS52YWx1ZTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIE5PVF9GT1VORDtcbiAgICB9LFxuICAgIHB1dDogZnVuY3Rpb24gcHV0KGtleSwgdmFsdWUpIHtcbiAgICAgIGVudHJ5ID0ge1xuICAgICAgICBrZXk6IGtleSxcbiAgICAgICAgdmFsdWU6IHZhbHVlXG4gICAgICB9O1xuICAgIH0sXG4gICAgZ2V0RW50cmllczogZnVuY3Rpb24gZ2V0RW50cmllcygpIHtcbiAgICAgIHJldHVybiBlbnRyeSA/IFtlbnRyeV0gOiBbXTtcbiAgICB9LFxuICAgIGNsZWFyOiBmdW5jdGlvbiBjbGVhcigpIHtcbiAgICAgIGVudHJ5ID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgfTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTHJ1Q2FjaGUobWF4U2l6ZSwgZXF1YWxzKSB7XG4gIHZhciBlbnRyaWVzID0gW107XG5cbiAgZnVuY3Rpb24gZ2V0KGtleSkge1xuICAgIHZhciBjYWNoZUluZGV4ID0gZW50cmllcy5maW5kSW5kZXgoZnVuY3Rpb24gKGVudHJ5KSB7XG4gICAgICByZXR1cm4gZXF1YWxzKGtleSwgZW50cnkua2V5KTtcbiAgICB9KTsgLy8gV2UgZm91bmQgYSBjYWNoZWQgZW50cnlcblxuICAgIGlmIChjYWNoZUluZGV4ID4gLTEpIHtcbiAgICAgIHZhciBlbnRyeSA9IGVudHJpZXNbY2FjaGVJbmRleF07IC8vIENhY2hlZCBlbnRyeSBub3QgYXQgdG9wIG9mIGNhY2hlLCBtb3ZlIGl0IHRvIHRoZSB0b3BcblxuICAgICAgaWYgKGNhY2hlSW5kZXggPiAwKSB7XG4gICAgICAgIGVudHJpZXMuc3BsaWNlKGNhY2hlSW5kZXgsIDEpO1xuICAgICAgICBlbnRyaWVzLnVuc2hpZnQoZW50cnkpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZW50cnkudmFsdWU7XG4gICAgfSAvLyBObyBlbnRyeSBmb3VuZCBpbiBjYWNoZSwgcmV0dXJuIHNlbnRpbmVsXG5cblxuICAgIHJldHVybiBOT1RfRk9VTkQ7XG4gIH1cblxuICBmdW5jdGlvbiBwdXQoa2V5LCB2YWx1ZSkge1xuICAgIGlmIChnZXQoa2V5KSA9PT0gTk9UX0ZPVU5EKSB7XG4gICAgICAvLyBUT0RPIElzIHVuc2hpZnQgc2xvdz9cbiAgICAgIGVudHJpZXMudW5zaGlmdCh7XG4gICAgICAgIGtleToga2V5LFxuICAgICAgICB2YWx1ZTogdmFsdWVcbiAgICAgIH0pO1xuXG4gICAgICBpZiAoZW50cmllcy5sZW5ndGggPiBtYXhTaXplKSB7XG4gICAgICAgIGVudHJpZXMucG9wKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZ2V0RW50cmllcygpIHtcbiAgICByZXR1cm4gZW50cmllcztcbiAgfVxuXG4gIGZ1bmN0aW9uIGNsZWFyKCkge1xuICAgIGVudHJpZXMgPSBbXTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgZ2V0OiBnZXQsXG4gICAgcHV0OiBwdXQsXG4gICAgZ2V0RW50cmllczogZ2V0RW50cmllcyxcbiAgICBjbGVhcjogY2xlYXJcbiAgfTtcbn1cblxudmFyIGRlZmF1bHRFcXVhbGl0eUNoZWNrID0gZnVuY3Rpb24gZGVmYXVsdEVxdWFsaXR5Q2hlY2soYSwgYikge1xuICByZXR1cm4gYSA9PT0gYjtcbn07XG5cbmV4cG9ydHMuZGVmYXVsdEVxdWFsaXR5Q2hlY2sgPSBkZWZhdWx0RXF1YWxpdHlDaGVjaztcblxuZnVuY3Rpb24gY3JlYXRlQ2FjaGVLZXlDb21wYXJhdG9yKGVxdWFsaXR5Q2hlY2spIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIGFyZUFyZ3VtZW50c1NoYWxsb3dseUVxdWFsKHByZXYsIG5leHQpIHtcbiAgICBpZiAocHJldiA9PT0gbnVsbCB8fCBuZXh0ID09PSBudWxsIHx8IHByZXYubGVuZ3RoICE9PSBuZXh0Lmxlbmd0aCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0gLy8gRG8gdGhpcyBpbiBhIGZvciBsb29wIChhbmQgbm90IGEgYGZvckVhY2hgIG9yIGFuIGBldmVyeWApIHNvIHdlIGNhbiBkZXRlcm1pbmUgZXF1YWxpdHkgYXMgZmFzdCBhcyBwb3NzaWJsZS5cblxuXG4gICAgdmFyIGxlbmd0aCA9IHByZXYubGVuZ3RoO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgaWYgKCFlcXVhbGl0eUNoZWNrKHByZXZbaV0sIG5leHRbaV0pKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfTtcbn1cblxuLy8gZGVmYXVsdE1lbW9pemUgbm93IHN1cHBvcnRzIGEgY29uZmlndXJhYmxlIGNhY2hlIHNpemUgd2l0aCBMUlUgYmVoYXZpb3IsXG4vLyBhbmQgb3B0aW9uYWwgY29tcGFyaXNvbiBvZiB0aGUgcmVzdWx0IHZhbHVlIHdpdGggZXhpc3RpbmcgdmFsdWVzXG5mdW5jdGlvbiBkZWZhdWx0TWVtb2l6ZShmdW5jLCBlcXVhbGl0eUNoZWNrT3JPcHRpb25zKSB7XG4gIHZhciBwcm92aWRlZE9wdGlvbnMgPSB0eXBlb2YgZXF1YWxpdHlDaGVja09yT3B0aW9ucyA9PT0gJ29iamVjdCcgPyBlcXVhbGl0eUNoZWNrT3JPcHRpb25zIDoge1xuICAgIGVxdWFsaXR5Q2hlY2s6IGVxdWFsaXR5Q2hlY2tPck9wdGlvbnNcbiAgfTtcbiAgdmFyIF9wcm92aWRlZE9wdGlvbnMkZXF1YSA9IHByb3ZpZGVkT3B0aW9ucy5lcXVhbGl0eUNoZWNrLFxuICAgICAgZXF1YWxpdHlDaGVjayA9IF9wcm92aWRlZE9wdGlvbnMkZXF1YSA9PT0gdm9pZCAwID8gZGVmYXVsdEVxdWFsaXR5Q2hlY2sgOiBfcHJvdmlkZWRPcHRpb25zJGVxdWEsXG4gICAgICBfcHJvdmlkZWRPcHRpb25zJG1heFMgPSBwcm92aWRlZE9wdGlvbnMubWF4U2l6ZSxcbiAgICAgIG1heFNpemUgPSBfcHJvdmlkZWRPcHRpb25zJG1heFMgPT09IHZvaWQgMCA/IDEgOiBfcHJvdmlkZWRPcHRpb25zJG1heFMsXG4gICAgICByZXN1bHRFcXVhbGl0eUNoZWNrID0gcHJvdmlkZWRPcHRpb25zLnJlc3VsdEVxdWFsaXR5Q2hlY2s7XG4gIHZhciBjb21wYXJhdG9yID0gY3JlYXRlQ2FjaGVLZXlDb21wYXJhdG9yKGVxdWFsaXR5Q2hlY2spO1xuICB2YXIgY2FjaGUgPSBtYXhTaXplID09PSAxID8gY3JlYXRlU2luZ2xldG9uQ2FjaGUoY29tcGFyYXRvcikgOiBjcmVhdGVMcnVDYWNoZShtYXhTaXplLCBjb21wYXJhdG9yKTsgLy8gd2UgcmVmZXJlbmNlIGFyZ3VtZW50cyBpbnN0ZWFkIG9mIHNwcmVhZGluZyB0aGVtIGZvciBwZXJmb3JtYW5jZSByZWFzb25zXG5cbiAgZnVuY3Rpb24gbWVtb2l6ZWQoKSB7XG4gICAgdmFyIHZhbHVlID0gY2FjaGUuZ2V0KGFyZ3VtZW50cyk7XG5cbiAgICBpZiAodmFsdWUgPT09IE5PVF9GT1VORCkge1xuICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgdmFsdWUgPSBmdW5jLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7XG5cbiAgICAgIGlmIChyZXN1bHRFcXVhbGl0eUNoZWNrKSB7XG4gICAgICAgIHZhciBlbnRyaWVzID0gY2FjaGUuZ2V0RW50cmllcygpO1xuICAgICAgICB2YXIgbWF0Y2hpbmdFbnRyeSA9IGVudHJpZXMuZmluZChmdW5jdGlvbiAoZW50cnkpIHtcbiAgICAgICAgICByZXR1cm4gcmVzdWx0RXF1YWxpdHlDaGVjayhlbnRyeS52YWx1ZSwgdmFsdWUpO1xuICAgICAgICB9KTtcblxuICAgICAgICBpZiAobWF0Y2hpbmdFbnRyeSkge1xuICAgICAgICAgIHZhbHVlID0gbWF0Y2hpbmdFbnRyeS52YWx1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBjYWNoZS5wdXQoYXJndW1lbnRzLCB2YWx1ZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG5cbiAgbWVtb2l6ZWQuY2xlYXJDYWNoZSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gY2FjaGUuY2xlYXIoKTtcbiAgfTtcblxuICByZXR1cm4gbWVtb2l6ZWQ7XG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/reselect/lib/defaultMemoize.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/reselect/lib/index.js":
/*!********************************************!*\
  !*** ./node_modules/reselect/lib/index.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports.createSelector = void 0;\nexports.createSelectorCreator = createSelectorCreator;\nexports.createStructuredSelector = void 0;\nObject.defineProperty(exports, \"defaultEqualityCheck\", ({\n  enumerable: true,\n  get: function get() {\n    return _defaultMemoize.defaultEqualityCheck;\n  }\n}));\nObject.defineProperty(exports, \"defaultMemoize\", ({\n  enumerable: true,\n  get: function get() {\n    return _defaultMemoize.defaultMemoize;\n  }\n}));\n\nvar _defaultMemoize = __webpack_require__(/*! ./defaultMemoize */ \"(ssr)/./node_modules/reselect/lib/defaultMemoize.js\");\n\nfunction getDependencies(funcs) {\n  var dependencies = Array.isArray(funcs[0]) ? funcs[0] : funcs;\n\n  if (!dependencies.every(function (dep) {\n    return typeof dep === 'function';\n  })) {\n    var dependencyTypes = dependencies.map(function (dep) {\n      return typeof dep === 'function' ? \"function \" + (dep.name || 'unnamed') + \"()\" : typeof dep;\n    }).join(', ');\n    throw new Error(\"createSelector expects all input-selectors to be functions, but received the following types: [\" + dependencyTypes + \"]\");\n  }\n\n  return dependencies;\n}\n\nfunction createSelectorCreator(memoize) {\n  for (var _len = arguments.length, memoizeOptionsFromArgs = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {\n    memoizeOptionsFromArgs[_key - 1] = arguments[_key];\n  }\n\n  var createSelector = function createSelector() {\n    for (var _len2 = arguments.length, funcs = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {\n      funcs[_key2] = arguments[_key2];\n    }\n\n    var _recomputations = 0;\n\n    var _lastResult; // Due to the intricacies of rest params, we can't do an optional arg after `...funcs`.\n    // So, start by declaring the default value here.\n    // (And yes, the words 'memoize' and 'options' appear too many times in this next sequence.)\n\n\n    var directlyPassedOptions = {\n      memoizeOptions: undefined\n    }; // Normally, the result func or \"output selector\" is the last arg\n\n    var resultFunc = funcs.pop(); // If the result func is actually an _object_, assume it's our options object\n\n    if (typeof resultFunc === 'object') {\n      directlyPassedOptions = resultFunc; // and pop the real result func off\n\n      resultFunc = funcs.pop();\n    }\n\n    if (typeof resultFunc !== 'function') {\n      throw new Error(\"createSelector expects an output function after the inputs, but received: [\" + typeof resultFunc + \"]\");\n    } // Determine which set of options we're using. Prefer options passed directly,\n    // but fall back to options given to createSelectorCreator.\n\n\n    var _directlyPassedOption = directlyPassedOptions,\n        _directlyPassedOption2 = _directlyPassedOption.memoizeOptions,\n        memoizeOptions = _directlyPassedOption2 === void 0 ? memoizeOptionsFromArgs : _directlyPassedOption2; // Simplifying assumption: it's unlikely that the first options arg of the provided memoizer\n    // is an array. In most libs I've looked at, it's an equality function or options object.\n    // Based on that, if `memoizeOptions` _is_ an array, we assume it's a full\n    // user-provided array of options. Otherwise, it must be just the _first_ arg, and so\n    // we wrap it in an array so we can apply it.\n\n    var finalMemoizeOptions = Array.isArray(memoizeOptions) ? memoizeOptions : [memoizeOptions];\n    var dependencies = getDependencies(funcs);\n    var memoizedResultFunc = memoize.apply(void 0, [function recomputationWrapper() {\n      _recomputations++; // apply arguments instead of spreading for performance.\n\n      return resultFunc.apply(null, arguments);\n    }].concat(finalMemoizeOptions)); // If a selector is called with the exact same arguments we don't need to traverse our dependencies again.\n\n    var selector = memoize(function dependenciesChecker() {\n      var params = [];\n      var length = dependencies.length;\n\n      for (var i = 0; i < length; i++) {\n        // apply arguments instead of spreading and mutate a local list of params for performance.\n        // @ts-ignore\n        params.push(dependencies[i].apply(null, arguments));\n      } // apply arguments instead of spreading for performance.\n\n\n      _lastResult = memoizedResultFunc.apply(null, params);\n      return _lastResult;\n    });\n    Object.assign(selector, {\n      resultFunc: resultFunc,\n      memoizedResultFunc: memoizedResultFunc,\n      dependencies: dependencies,\n      lastResult: function lastResult() {\n        return _lastResult;\n      },\n      recomputations: function recomputations() {\n        return _recomputations;\n      },\n      resetRecomputations: function resetRecomputations() {\n        return _recomputations = 0;\n      }\n    });\n    return selector;\n  }; // @ts-ignore\n\n\n  return createSelector;\n}\n\nvar createSelector = /* #__PURE__ */createSelectorCreator(_defaultMemoize.defaultMemoize);\nexports.createSelector = createSelector;\n\n// Manual definition of state and output arguments\nvar createStructuredSelector = function createStructuredSelector(selectors, selectorCreator) {\n  if (selectorCreator === void 0) {\n    selectorCreator = createSelector;\n  }\n\n  if (typeof selectors !== 'object') {\n    throw new Error('createStructuredSelector expects first argument to be an object ' + (\"where each property is a selector, instead received a \" + typeof selectors));\n  }\n\n  var objectKeys = Object.keys(selectors);\n  var resultSelector = selectorCreator( // @ts-ignore\n  objectKeys.map(function (key) {\n    return selectors[key];\n  }), function () {\n    for (var _len3 = arguments.length, values = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {\n      values[_key3] = arguments[_key3];\n    }\n\n    return values.reduce(function (composition, value, index) {\n      composition[objectKeys[index]] = value;\n      return composition;\n    }, {});\n  });\n  return resultSelector;\n};\n\nexports.createStructuredSelector = createStructuredSelector;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvcmVzZWxlY3QvbGliL2luZGV4LmpzIiwibWFwcGluZ3MiOiJBQUFhOztBQUViLDhDQUE2QztBQUM3QztBQUNBLENBQUMsRUFBQztBQUNGLHNCQUFzQjtBQUN0Qiw2QkFBNkI7QUFDN0IsZ0NBQWdDO0FBQ2hDLHdEQUF1RDtBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsRUFBQztBQUNGLGtEQUFpRDtBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsRUFBQzs7QUFFRixzQkFBc0IsbUJBQU8sQ0FBQyw2RUFBa0I7O0FBRWhEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLDJHQUEyRyxhQUFhO0FBQ3hIO0FBQ0E7O0FBRUE7QUFDQSw0RUFBNEUsZUFBZTtBQUMzRjtBQUNBOztBQUVBOztBQUVBLHFCQUFxQjtBQUNyQjtBQUNBOzs7QUFHQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUCxrQ0FBa0M7O0FBRWxDO0FBQ0EsMENBQTBDOztBQUUxQztBQUNBOztBQUVBO0FBQ0E7QUFDQSxNQUFNO0FBQ047OztBQUdBO0FBQ0E7QUFDQSw4R0FBOEc7QUFDOUc7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EseUJBQXlCOztBQUV6QjtBQUNBLEtBQUssZ0NBQWdDOztBQUVyQztBQUNBO0FBQ0E7O0FBRUEsc0JBQXNCLFlBQVk7QUFDbEM7QUFDQTtBQUNBO0FBQ0EsUUFBUTs7O0FBR1I7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLOzs7QUFHTDtBQUNBOztBQUVBO0FBQ0Esc0JBQXNCOztBQUV0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCw2RUFBNkUsZUFBZTtBQUM1RjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUssSUFBSTtBQUNULEdBQUc7QUFDSDtBQUNBOztBQUVBLGdDQUFnQyIsInNvdXJjZXMiOlsid2VicGFjazovL2RpZ2lrYWxhLy4vbm9kZV9tb2R1bGVzL3Jlc2VsZWN0L2xpYi9pbmRleC5qcz83YmIwIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5jcmVhdGVTZWxlY3RvciA9IHZvaWQgMDtcbmV4cG9ydHMuY3JlYXRlU2VsZWN0b3JDcmVhdG9yID0gY3JlYXRlU2VsZWN0b3JDcmVhdG9yO1xuZXhwb3J0cy5jcmVhdGVTdHJ1Y3R1cmVkU2VsZWN0b3IgPSB2b2lkIDA7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJkZWZhdWx0RXF1YWxpdHlDaGVja1wiLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfZGVmYXVsdE1lbW9pemUuZGVmYXVsdEVxdWFsaXR5Q2hlY2s7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiZGVmYXVsdE1lbW9pemVcIiwge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX2RlZmF1bHRNZW1vaXplLmRlZmF1bHRNZW1vaXplO1xuICB9XG59KTtcblxudmFyIF9kZWZhdWx0TWVtb2l6ZSA9IHJlcXVpcmUoXCIuL2RlZmF1bHRNZW1vaXplXCIpO1xuXG5mdW5jdGlvbiBnZXREZXBlbmRlbmNpZXMoZnVuY3MpIHtcbiAgdmFyIGRlcGVuZGVuY2llcyA9IEFycmF5LmlzQXJyYXkoZnVuY3NbMF0pID8gZnVuY3NbMF0gOiBmdW5jcztcblxuICBpZiAoIWRlcGVuZGVuY2llcy5ldmVyeShmdW5jdGlvbiAoZGVwKSB7XG4gICAgcmV0dXJuIHR5cGVvZiBkZXAgPT09ICdmdW5jdGlvbic7XG4gIH0pKSB7XG4gICAgdmFyIGRlcGVuZGVuY3lUeXBlcyA9IGRlcGVuZGVuY2llcy5tYXAoZnVuY3Rpb24gKGRlcCkge1xuICAgICAgcmV0dXJuIHR5cGVvZiBkZXAgPT09ICdmdW5jdGlvbicgPyBcImZ1bmN0aW9uIFwiICsgKGRlcC5uYW1lIHx8ICd1bm5hbWVkJykgKyBcIigpXCIgOiB0eXBlb2YgZGVwO1xuICAgIH0pLmpvaW4oJywgJyk7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiY3JlYXRlU2VsZWN0b3IgZXhwZWN0cyBhbGwgaW5wdXQtc2VsZWN0b3JzIHRvIGJlIGZ1bmN0aW9ucywgYnV0IHJlY2VpdmVkIHRoZSBmb2xsb3dpbmcgdHlwZXM6IFtcIiArIGRlcGVuZGVuY3lUeXBlcyArIFwiXVwiKTtcbiAgfVxuXG4gIHJldHVybiBkZXBlbmRlbmNpZXM7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVNlbGVjdG9yQ3JlYXRvcihtZW1vaXplKSB7XG4gIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBtZW1vaXplT3B0aW9uc0Zyb21BcmdzID0gbmV3IEFycmF5KF9sZW4gPiAxID8gX2xlbiAtIDEgOiAwKSwgX2tleSA9IDE7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICBtZW1vaXplT3B0aW9uc0Zyb21BcmdzW19rZXkgLSAxXSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgfVxuXG4gIHZhciBjcmVhdGVTZWxlY3RvciA9IGZ1bmN0aW9uIGNyZWF0ZVNlbGVjdG9yKCkge1xuICAgIGZvciAodmFyIF9sZW4yID0gYXJndW1lbnRzLmxlbmd0aCwgZnVuY3MgPSBuZXcgQXJyYXkoX2xlbjIpLCBfa2V5MiA9IDA7IF9rZXkyIDwgX2xlbjI7IF9rZXkyKyspIHtcbiAgICAgIGZ1bmNzW19rZXkyXSA9IGFyZ3VtZW50c1tfa2V5Ml07XG4gICAgfVxuXG4gICAgdmFyIF9yZWNvbXB1dGF0aW9ucyA9IDA7XG5cbiAgICB2YXIgX2xhc3RSZXN1bHQ7IC8vIER1ZSB0byB0aGUgaW50cmljYWNpZXMgb2YgcmVzdCBwYXJhbXMsIHdlIGNhbid0IGRvIGFuIG9wdGlvbmFsIGFyZyBhZnRlciBgLi4uZnVuY3NgLlxuICAgIC8vIFNvLCBzdGFydCBieSBkZWNsYXJpbmcgdGhlIGRlZmF1bHQgdmFsdWUgaGVyZS5cbiAgICAvLyAoQW5kIHllcywgdGhlIHdvcmRzICdtZW1vaXplJyBhbmQgJ29wdGlvbnMnIGFwcGVhciB0b28gbWFueSB0aW1lcyBpbiB0aGlzIG5leHQgc2VxdWVuY2UuKVxuXG5cbiAgICB2YXIgZGlyZWN0bHlQYXNzZWRPcHRpb25zID0ge1xuICAgICAgbWVtb2l6ZU9wdGlvbnM6IHVuZGVmaW5lZFxuICAgIH07IC8vIE5vcm1hbGx5LCB0aGUgcmVzdWx0IGZ1bmMgb3IgXCJvdXRwdXQgc2VsZWN0b3JcIiBpcyB0aGUgbGFzdCBhcmdcblxuICAgIHZhciByZXN1bHRGdW5jID0gZnVuY3MucG9wKCk7IC8vIElmIHRoZSByZXN1bHQgZnVuYyBpcyBhY3R1YWxseSBhbiBfb2JqZWN0XywgYXNzdW1lIGl0J3Mgb3VyIG9wdGlvbnMgb2JqZWN0XG5cbiAgICBpZiAodHlwZW9mIHJlc3VsdEZ1bmMgPT09ICdvYmplY3QnKSB7XG4gICAgICBkaXJlY3RseVBhc3NlZE9wdGlvbnMgPSByZXN1bHRGdW5jOyAvLyBhbmQgcG9wIHRoZSByZWFsIHJlc3VsdCBmdW5jIG9mZlxuXG4gICAgICByZXN1bHRGdW5jID0gZnVuY3MucG9wKCk7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiByZXN1bHRGdW5jICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJjcmVhdGVTZWxlY3RvciBleHBlY3RzIGFuIG91dHB1dCBmdW5jdGlvbiBhZnRlciB0aGUgaW5wdXRzLCBidXQgcmVjZWl2ZWQ6IFtcIiArIHR5cGVvZiByZXN1bHRGdW5jICsgXCJdXCIpO1xuICAgIH0gLy8gRGV0ZXJtaW5lIHdoaWNoIHNldCBvZiBvcHRpb25zIHdlJ3JlIHVzaW5nLiBQcmVmZXIgb3B0aW9ucyBwYXNzZWQgZGlyZWN0bHksXG4gICAgLy8gYnV0IGZhbGwgYmFjayB0byBvcHRpb25zIGdpdmVuIHRvIGNyZWF0ZVNlbGVjdG9yQ3JlYXRvci5cblxuXG4gICAgdmFyIF9kaXJlY3RseVBhc3NlZE9wdGlvbiA9IGRpcmVjdGx5UGFzc2VkT3B0aW9ucyxcbiAgICAgICAgX2RpcmVjdGx5UGFzc2VkT3B0aW9uMiA9IF9kaXJlY3RseVBhc3NlZE9wdGlvbi5tZW1vaXplT3B0aW9ucyxcbiAgICAgICAgbWVtb2l6ZU9wdGlvbnMgPSBfZGlyZWN0bHlQYXNzZWRPcHRpb24yID09PSB2b2lkIDAgPyBtZW1vaXplT3B0aW9uc0Zyb21BcmdzIDogX2RpcmVjdGx5UGFzc2VkT3B0aW9uMjsgLy8gU2ltcGxpZnlpbmcgYXNzdW1wdGlvbjogaXQncyB1bmxpa2VseSB0aGF0IHRoZSBmaXJzdCBvcHRpb25zIGFyZyBvZiB0aGUgcHJvdmlkZWQgbWVtb2l6ZXJcbiAgICAvLyBpcyBhbiBhcnJheS4gSW4gbW9zdCBsaWJzIEkndmUgbG9va2VkIGF0LCBpdCdzIGFuIGVxdWFsaXR5IGZ1bmN0aW9uIG9yIG9wdGlvbnMgb2JqZWN0LlxuICAgIC8vIEJhc2VkIG9uIHRoYXQsIGlmIGBtZW1vaXplT3B0aW9uc2AgX2lzXyBhbiBhcnJheSwgd2UgYXNzdW1lIGl0J3MgYSBmdWxsXG4gICAgLy8gdXNlci1wcm92aWRlZCBhcnJheSBvZiBvcHRpb25zLiBPdGhlcndpc2UsIGl0IG11c3QgYmUganVzdCB0aGUgX2ZpcnN0XyBhcmcsIGFuZCBzb1xuICAgIC8vIHdlIHdyYXAgaXQgaW4gYW4gYXJyYXkgc28gd2UgY2FuIGFwcGx5IGl0LlxuXG4gICAgdmFyIGZpbmFsTWVtb2l6ZU9wdGlvbnMgPSBBcnJheS5pc0FycmF5KG1lbW9pemVPcHRpb25zKSA/IG1lbW9pemVPcHRpb25zIDogW21lbW9pemVPcHRpb25zXTtcbiAgICB2YXIgZGVwZW5kZW5jaWVzID0gZ2V0RGVwZW5kZW5jaWVzKGZ1bmNzKTtcbiAgICB2YXIgbWVtb2l6ZWRSZXN1bHRGdW5jID0gbWVtb2l6ZS5hcHBseSh2b2lkIDAsIFtmdW5jdGlvbiByZWNvbXB1dGF0aW9uV3JhcHBlcigpIHtcbiAgICAgIF9yZWNvbXB1dGF0aW9ucysrOyAvLyBhcHBseSBhcmd1bWVudHMgaW5zdGVhZCBvZiBzcHJlYWRpbmcgZm9yIHBlcmZvcm1hbmNlLlxuXG4gICAgICByZXR1cm4gcmVzdWx0RnVuYy5hcHBseShudWxsLCBhcmd1bWVudHMpO1xuICAgIH1dLmNvbmNhdChmaW5hbE1lbW9pemVPcHRpb25zKSk7IC8vIElmIGEgc2VsZWN0b3IgaXMgY2FsbGVkIHdpdGggdGhlIGV4YWN0IHNhbWUgYXJndW1lbnRzIHdlIGRvbid0IG5lZWQgdG8gdHJhdmVyc2Ugb3VyIGRlcGVuZGVuY2llcyBhZ2Fpbi5cblxuICAgIHZhciBzZWxlY3RvciA9IG1lbW9pemUoZnVuY3Rpb24gZGVwZW5kZW5jaWVzQ2hlY2tlcigpIHtcbiAgICAgIHZhciBwYXJhbXMgPSBbXTtcbiAgICAgIHZhciBsZW5ndGggPSBkZXBlbmRlbmNpZXMubGVuZ3RoO1xuXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGFwcGx5IGFyZ3VtZW50cyBpbnN0ZWFkIG9mIHNwcmVhZGluZyBhbmQgbXV0YXRlIGEgbG9jYWwgbGlzdCBvZiBwYXJhbXMgZm9yIHBlcmZvcm1hbmNlLlxuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIHBhcmFtcy5wdXNoKGRlcGVuZGVuY2llc1tpXS5hcHBseShudWxsLCBhcmd1bWVudHMpKTtcbiAgICAgIH0gLy8gYXBwbHkgYXJndW1lbnRzIGluc3RlYWQgb2Ygc3ByZWFkaW5nIGZvciBwZXJmb3JtYW5jZS5cblxuXG4gICAgICBfbGFzdFJlc3VsdCA9IG1lbW9pemVkUmVzdWx0RnVuYy5hcHBseShudWxsLCBwYXJhbXMpO1xuICAgICAgcmV0dXJuIF9sYXN0UmVzdWx0O1xuICAgIH0pO1xuICAgIE9iamVjdC5hc3NpZ24oc2VsZWN0b3IsIHtcbiAgICAgIHJlc3VsdEZ1bmM6IHJlc3VsdEZ1bmMsXG4gICAgICBtZW1vaXplZFJlc3VsdEZ1bmM6IG1lbW9pemVkUmVzdWx0RnVuYyxcbiAgICAgIGRlcGVuZGVuY2llczogZGVwZW5kZW5jaWVzLFxuICAgICAgbGFzdFJlc3VsdDogZnVuY3Rpb24gbGFzdFJlc3VsdCgpIHtcbiAgICAgICAgcmV0dXJuIF9sYXN0UmVzdWx0O1xuICAgICAgfSxcbiAgICAgIHJlY29tcHV0YXRpb25zOiBmdW5jdGlvbiByZWNvbXB1dGF0aW9ucygpIHtcbiAgICAgICAgcmV0dXJuIF9yZWNvbXB1dGF0aW9ucztcbiAgICAgIH0sXG4gICAgICByZXNldFJlY29tcHV0YXRpb25zOiBmdW5jdGlvbiByZXNldFJlY29tcHV0YXRpb25zKCkge1xuICAgICAgICByZXR1cm4gX3JlY29tcHV0YXRpb25zID0gMDtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gc2VsZWN0b3I7XG4gIH07IC8vIEB0cy1pZ25vcmVcblxuXG4gIHJldHVybiBjcmVhdGVTZWxlY3Rvcjtcbn1cblxudmFyIGNyZWF0ZVNlbGVjdG9yID0gLyogI19fUFVSRV9fICovY3JlYXRlU2VsZWN0b3JDcmVhdG9yKF9kZWZhdWx0TWVtb2l6ZS5kZWZhdWx0TWVtb2l6ZSk7XG5leHBvcnRzLmNyZWF0ZVNlbGVjdG9yID0gY3JlYXRlU2VsZWN0b3I7XG5cbi8vIE1hbnVhbCBkZWZpbml0aW9uIG9mIHN0YXRlIGFuZCBvdXRwdXQgYXJndW1lbnRzXG52YXIgY3JlYXRlU3RydWN0dXJlZFNlbGVjdG9yID0gZnVuY3Rpb24gY3JlYXRlU3RydWN0dXJlZFNlbGVjdG9yKHNlbGVjdG9ycywgc2VsZWN0b3JDcmVhdG9yKSB7XG4gIGlmIChzZWxlY3RvckNyZWF0b3IgPT09IHZvaWQgMCkge1xuICAgIHNlbGVjdG9yQ3JlYXRvciA9IGNyZWF0ZVNlbGVjdG9yO1xuICB9XG5cbiAgaWYgKHR5cGVvZiBzZWxlY3RvcnMgIT09ICdvYmplY3QnKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdjcmVhdGVTdHJ1Y3R1cmVkU2VsZWN0b3IgZXhwZWN0cyBmaXJzdCBhcmd1bWVudCB0byBiZSBhbiBvYmplY3QgJyArIChcIndoZXJlIGVhY2ggcHJvcGVydHkgaXMgYSBzZWxlY3RvciwgaW5zdGVhZCByZWNlaXZlZCBhIFwiICsgdHlwZW9mIHNlbGVjdG9ycykpO1xuICB9XG5cbiAgdmFyIG9iamVjdEtleXMgPSBPYmplY3Qua2V5cyhzZWxlY3RvcnMpO1xuICB2YXIgcmVzdWx0U2VsZWN0b3IgPSBzZWxlY3RvckNyZWF0b3IoIC8vIEB0cy1pZ25vcmVcbiAgb2JqZWN0S2V5cy5tYXAoZnVuY3Rpb24gKGtleSkge1xuICAgIHJldHVybiBzZWxlY3RvcnNba2V5XTtcbiAgfSksIGZ1bmN0aW9uICgpIHtcbiAgICBmb3IgKHZhciBfbGVuMyA9IGFyZ3VtZW50cy5sZW5ndGgsIHZhbHVlcyA9IG5ldyBBcnJheShfbGVuMyksIF9rZXkzID0gMDsgX2tleTMgPCBfbGVuMzsgX2tleTMrKykge1xuICAgICAgdmFsdWVzW19rZXkzXSA9IGFyZ3VtZW50c1tfa2V5M107XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbHVlcy5yZWR1Y2UoZnVuY3Rpb24gKGNvbXBvc2l0aW9uLCB2YWx1ZSwgaW5kZXgpIHtcbiAgICAgIGNvbXBvc2l0aW9uW29iamVjdEtleXNbaW5kZXhdXSA9IHZhbHVlO1xuICAgICAgcmV0dXJuIGNvbXBvc2l0aW9uO1xuICAgIH0sIHt9KTtcbiAgfSk7XG4gIHJldHVybiByZXN1bHRTZWxlY3Rvcjtcbn07XG5cbmV4cG9ydHMuY3JlYXRlU3RydWN0dXJlZFNlbGVjdG9yID0gY3JlYXRlU3RydWN0dXJlZFNlbGVjdG9yOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/reselect/lib/index.js\n");

/***/ })

};
;