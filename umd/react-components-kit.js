(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else if(typeof exports === 'object')
		exports["ReactComponentsKit"] = factory(require("react"));
	else
		root["ReactComponentsKit"] = factory(root["React"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 37);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "css", function() { return css; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "keyframes", function() { return keyframes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "injectGlobal", function() { return injectGlobal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeProvider", function() { return ThemeProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withTheme", function() { return withTheme; });


//      
var chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

/* Some high number, usually 9-digit base-10. Map it to base-😎 */
var generateAlphabeticName = function generateAlphabeticName(code) {
  var lastDigit = chars[code % chars.length];
  return code > chars.length ? '' + generateAlphabeticName(Math.floor(code / chars.length)) + lastDigit : lastDigit;
};

//      


var interleave = (function (strings, interpolations) {
  return interpolations.reduce(function (array, interp, i) {
    return array.concat(interp, strings[i + 1]);
  }, [strings[0]]);
});

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @typechecks
 */

var _uppercasePattern = /([A-Z])/g;

/**
 * Hyphenates a camelcased string, for example:
 *
 *   > hyphenate('backgroundColor')
 *   < "background-color"
 *
 * For CSS style names, use `hyphenateStyleName` instead which works properly
 * with all vendor prefixes, including `ms`.
 *
 * @param {string} string
 * @return {string}
 */
function hyphenate$1(string) {
  return string.replace(_uppercasePattern, '-$1').toLowerCase();
}

var hyphenate_1 = hyphenate$1;

var hyphenate = hyphenate_1;

var msPattern = /^ms-/;

/**
 * Hyphenates a camelcased CSS property name, for example:
 *
 *   > hyphenateStyleName('backgroundColor')
 *   < "background-color"
 *   > hyphenateStyleName('MozTransition')
 *   < "-moz-transition"
 *   > hyphenateStyleName('msTransition')
 *   < "-ms-transition"
 *
 * As Modernizr suggests (http://modernizr.com/docs/#prefixed), an `ms` prefix
 * is converted to `-ms-`.
 *
 * @param {string} string
 * @return {string}
 */
function hyphenateStyleName(string) {
  return hyphenate(string).replace(msPattern, '-ms-');
}

var hyphenateStyleName_1 = hyphenateStyleName;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};











var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();





var defineProperty = function (obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var get$1 = function get$1(object, property, receiver) {
  if (object === null) object = Function.prototype;
  var desc = Object.getOwnPropertyDescriptor(object, property);

  if (desc === undefined) {
    var parent = Object.getPrototypeOf(object);

    if (parent === null) {
      return undefined;
    } else {
      return get$1(parent, property, receiver);
    }
  } else if ("value" in desc) {
    return desc.value;
  } else {
    var getter = desc.get;

    if (getter === undefined) {
      return undefined;
    }

    return getter.call(receiver);
  }
};

var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};











var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};



















var toConsumableArray = function (arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  } else {
    return Array.from(arr);
  }
};

/*!
 * isobject <https://github.com/jonschlinkert/isobject>
 *
 * Copyright (c) 2014-2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */

var index$2 = function isObject(val) {
  return val != null && (typeof val === 'undefined' ? 'undefined' : _typeof(val)) === 'object' && !Array.isArray(val);
};

var isObject$1 = index$2;

function isObjectObject(o) {
  return isObject$1(o) === true && Object.prototype.toString.call(o) === '[object Object]';
}

var index$1 = function isPlainObject(o) {
  var ctor, prot;

  if (isObjectObject(o) === false) return false;

  // If has modified constructor
  ctor = o.constructor;
  if (typeof ctor !== 'function') return false;

  // If has modified prototype
  prot = ctor.prototype;
  if (isObjectObject(prot) === false) return false;

  // If constructor does not have an Object-specific method
  if (prot.hasOwnProperty('isPrototypeOf') === false) {
    return false;
  }

  // Most likely a plain Object
  return true;
};

//      
var objToCss = function objToCss(obj, prevKey) {
  var css = Object.keys(obj).map(function (key) {
    if (index$1(obj[key])) return objToCss(obj[key], key);
    return hyphenateStyleName_1(key) + ': ' + obj[key] + ';';
  }).join(' ');
  return prevKey ? prevKey + ' {\n  ' + css + '\n}' : css;
};

var flatten = function flatten(chunks, executionContext) {
  return chunks.reduce(function (ruleSet, chunk) {
    /* Remove falsey values */
    if (chunk === undefined || chunk === null || chunk === false || chunk === '') return ruleSet;
    /* Flatten ruleSet */
    if (Array.isArray(chunk)) return [].concat(toConsumableArray(ruleSet), toConsumableArray(flatten(chunk, executionContext)));
    /* Either execute or defer the function */
    if (typeof chunk === 'function') {
      return executionContext ? ruleSet.concat.apply(ruleSet, toConsumableArray(flatten([chunk(executionContext)], executionContext))) : ruleSet.concat(chunk);
    }

    /* Handle objects */
    // $FlowFixMe have to add %checks somehow to isPlainObject
    return ruleSet.concat(index$1(chunk) ? objToCss(chunk) : chunk.toString());
  }, []);
};

//      
var css = (function (strings) {
  for (var _len = arguments.length, interpolations = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    interpolations[_key - 1] = arguments[_key];
  }

  return flatten(interleave(strings, interpolations));
});

var printed = {};

function warnOnce(message) {
    if (printed[message]) return;
    printed[message] = true;

    if (typeof console !== 'undefined' && console.warn) console.warn(message);
}

var process$1 = { argv: [], env: {} };

var index$5 = function index$5(flag, argv) {
	argv = argv || process$1.argv;

	var terminatorPos = argv.indexOf('--');
	var prefix = /^--/.test(flag) ? '' : '--';
	var pos = argv.indexOf(prefix + flag);

	return pos !== -1 && (terminatorPos !== -1 ? pos < terminatorPos : true);
};

var hasFlag = index$5;

var support = function support(level) {
	if (level === 0) {
		return false;
	}

	return {
		level: level,
		hasBasic: true,
		has256: level >= 2,
		has16m: level >= 3
	};
};

var supportLevel = function () {
	if (hasFlag('no-color') || hasFlag('no-colors') || hasFlag('color=false')) {
		return 0;
	}

	if (hasFlag('color=16m') || hasFlag('color=full') || hasFlag('color=truecolor')) {
		return 3;
	}

	if (hasFlag('color=256')) {
		return 2;
	}

	if (hasFlag('color') || hasFlag('colors') || hasFlag('color=true') || hasFlag('color=always')) {
		return 1;
	}

	if (process$1.stdout && !process$1.stdout.isTTY) {
		return 0;
	}

	if (process$1.platform === 'win32') {
		return 1;
	}

	if ('CI' in process$1.env) {
		if ('TRAVIS' in process$1.env || process$1.env.CI === 'Travis') {
			return 1;
		}

		return 0;
	}

	if ('TEAMCITY_VERSION' in process$1.env) {
		return process$1.env.TEAMCITY_VERSION.match(/^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/) === null ? 0 : 1;
	}

	if (/^(screen|xterm)-256(?:color)?/.test(process$1.env.TERM)) {
		return 2;
	}

	if (/^screen|^xterm|^vt100|color|ansi|cygwin|linux/i.test(process$1.env.TERM)) {
		return 1;
	}

	if ('COLORTERM' in process$1.env) {
		return 1;
	}

	if (process$1.env.TERM === 'dumb') {
		return 0;
	}

	return 0;
}();

if (supportLevel === 0 && 'FORCE_COLOR' in process$1.env) {
	supportLevel = 1;
}

var index$4 = process$1 && support(supportLevel);

var SINGLE_QUOTE = '\''.charCodeAt(0);
var DOUBLE_QUOTE = '"'.charCodeAt(0);
var BACKSLASH = '\\'.charCodeAt(0);
var SLASH = '/'.charCodeAt(0);
var NEWLINE = '\n'.charCodeAt(0);
var SPACE = ' '.charCodeAt(0);
var FEED = '\f'.charCodeAt(0);
var TAB = '\t'.charCodeAt(0);
var CR = '\r'.charCodeAt(0);
var OPEN_SQUARE = '['.charCodeAt(0);
var CLOSE_SQUARE = ']'.charCodeAt(0);
var OPEN_PARENTHESES = '('.charCodeAt(0);
var CLOSE_PARENTHESES = ')'.charCodeAt(0);
var OPEN_CURLY = '{'.charCodeAt(0);
var CLOSE_CURLY = '}'.charCodeAt(0);
var SEMICOLON = ';'.charCodeAt(0);
var ASTERISK = '*'.charCodeAt(0);
var COLON = ':'.charCodeAt(0);
var AT = '@'.charCodeAt(0);

var RE_AT_END = /[ \n\t\r\f\{\(\)'"\\;/\[\]#]/g;
var RE_WORD_END = /[ \n\t\r\f\(\)\{\}:;@!'"\\\]\[#]|\/(?=\*)/g;
var RE_BAD_BRACKET = /.[\\\/\("'\n]/;

function tokenize$1(input) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    var tokens = [];
    var css = input.css.valueOf();

    var ignore = options.ignoreErrors;

    var code = void 0,
        next = void 0,
        quote = void 0,
        lines = void 0,
        last = void 0,
        content = void 0,
        escape = void 0,
        nextLine = void 0,
        nextOffset = void 0,
        escaped = void 0,
        escapePos = void 0,
        prev = void 0,
        n = void 0;

    var length = css.length;
    var offset = -1;
    var line = 1;
    var pos = 0;

    function unclosed(what) {
        throw input.error('Unclosed ' + what, line, pos - offset);
    }

    while (pos < length) {
        code = css.charCodeAt(pos);

        if (code === NEWLINE || code === FEED || code === CR && css.charCodeAt(pos + 1) !== NEWLINE) {
            offset = pos;
            line += 1;
        }

        switch (code) {
            case NEWLINE:
            case SPACE:
            case TAB:
            case CR:
            case FEED:
                next = pos;
                do {
                    next += 1;
                    code = css.charCodeAt(next);
                    if (code === NEWLINE) {
                        offset = next;
                        line += 1;
                    }
                } while (code === SPACE || code === NEWLINE || code === TAB || code === CR || code === FEED);

                tokens.push(['space', css.slice(pos, next)]);
                pos = next - 1;
                break;

            case OPEN_SQUARE:
                tokens.push(['[', '[', line, pos - offset]);
                break;

            case CLOSE_SQUARE:
                tokens.push([']', ']', line, pos - offset]);
                break;

            case OPEN_CURLY:
                tokens.push(['{', '{', line, pos - offset]);
                break;

            case CLOSE_CURLY:
                tokens.push(['}', '}', line, pos - offset]);
                break;

            case COLON:
                tokens.push([':', ':', line, pos - offset]);
                break;

            case SEMICOLON:
                tokens.push([';', ';', line, pos - offset]);
                break;

            case OPEN_PARENTHESES:
                prev = tokens.length ? tokens[tokens.length - 1][1] : '';
                n = css.charCodeAt(pos + 1);
                if (prev === 'url' && n !== SINGLE_QUOTE && n !== DOUBLE_QUOTE && n !== SPACE && n !== NEWLINE && n !== TAB && n !== FEED && n !== CR) {
                    next = pos;
                    do {
                        escaped = false;
                        next = css.indexOf(')', next + 1);
                        if (next === -1) {
                            if (ignore) {
                                next = pos;
                                break;
                            } else {
                                unclosed('bracket');
                            }
                        }
                        escapePos = next;
                        while (css.charCodeAt(escapePos - 1) === BACKSLASH) {
                            escapePos -= 1;
                            escaped = !escaped;
                        }
                    } while (escaped);

                    tokens.push(['brackets', css.slice(pos, next + 1), line, pos - offset, line, next - offset]);
                    pos = next;
                } else {
                    next = css.indexOf(')', pos + 1);
                    content = css.slice(pos, next + 1);

                    if (next === -1 || RE_BAD_BRACKET.test(content)) {
                        tokens.push(['(', '(', line, pos - offset]);
                    } else {
                        tokens.push(['brackets', content, line, pos - offset, line, next - offset]);
                        pos = next;
                    }
                }

                break;

            case CLOSE_PARENTHESES:
                tokens.push([')', ')', line, pos - offset]);
                break;

            case SINGLE_QUOTE:
            case DOUBLE_QUOTE:
                quote = code === SINGLE_QUOTE ? '\'' : '"';
                next = pos;
                do {
                    escaped = false;
                    next = css.indexOf(quote, next + 1);
                    if (next === -1) {
                        if (ignore) {
                            next = pos + 1;
                            break;
                        } else {
                            unclosed('quote');
                        }
                    }
                    escapePos = next;
                    while (css.charCodeAt(escapePos - 1) === BACKSLASH) {
                        escapePos -= 1;
                        escaped = !escaped;
                    }
                } while (escaped);

                content = css.slice(pos, next + 1);
                lines = content.split('\n');
                last = lines.length - 1;

                if (last > 0) {
                    nextLine = line + last;
                    nextOffset = next - lines[last].length;
                } else {
                    nextLine = line;
                    nextOffset = offset;
                }

                tokens.push(['string', css.slice(pos, next + 1), line, pos - offset, nextLine, next - nextOffset]);

                offset = nextOffset;
                line = nextLine;
                pos = next;
                break;

            case AT:
                RE_AT_END.lastIndex = pos + 1;
                RE_AT_END.test(css);
                if (RE_AT_END.lastIndex === 0) {
                    next = css.length - 1;
                } else {
                    next = RE_AT_END.lastIndex - 2;
                }
                tokens.push(['at-word', css.slice(pos, next + 1), line, pos - offset, line, next - offset]);
                pos = next;
                break;

            case BACKSLASH:
                next = pos;
                escape = true;
                while (css.charCodeAt(next + 1) === BACKSLASH) {
                    next += 1;
                    escape = !escape;
                }
                code = css.charCodeAt(next + 1);
                if (escape && code !== SLASH && code !== SPACE && code !== NEWLINE && code !== TAB && code !== CR && code !== FEED) {
                    next += 1;
                }
                tokens.push(['word', css.slice(pos, next + 1), line, pos - offset, line, next - offset]);
                pos = next;
                break;

            default:
                if (code === SLASH && css.charCodeAt(pos + 1) === ASTERISK) {
                    next = css.indexOf('*/', pos + 2) + 1;
                    if (next === 0) {
                        if (ignore) {
                            next = css.length;
                        } else {
                            unclosed('comment');
                        }
                    }

                    content = css.slice(pos, next + 1);
                    lines = content.split('\n');
                    last = lines.length - 1;

                    if (last > 0) {
                        nextLine = line + last;
                        nextOffset = next - lines[last].length;
                    } else {
                        nextLine = line;
                        nextOffset = offset;
                    }

                    tokens.push(['comment', content, line, pos - offset, nextLine, next - nextOffset]);

                    offset = nextOffset;
                    line = nextLine;
                    pos = next;
                } else {
                    RE_WORD_END.lastIndex = pos + 1;
                    RE_WORD_END.test(css);
                    if (RE_WORD_END.lastIndex === 0) {
                        next = css.length - 1;
                    } else {
                        next = RE_WORD_END.lastIndex - 2;
                    }

                    tokens.push(['word', css.slice(pos, next + 1), line, pos - offset, line, next - offset]);
                    pos = next;
                }

                break;
        }

        pos++;
    }

    return tokens;
}

var HIGHLIGHT_THEME = {
    'brackets': [36, 39], // cyan
    'string': [31, 39], // red
    'at-word': [31, 39], // red
    'comment': [90, 39], // gray
    '{': [32, 39], // green
    '}': [32, 39], // green
    ':': [1, 22], // bold
    ';': [1, 22], // bold
    '(': [1, 22], // bold
    ')': [1, 22] // bold
};

function code(color) {
    return '\x1B[' + color + 'm';
}

function terminalHighlight(css) {
    var tokens = tokenize$1(new Input(css), { ignoreErrors: true });
    var result = [];
    tokens.forEach(function (token) {
        var color = HIGHLIGHT_THEME[token[0]];
        if (color) {
            result.push(token[1].split(/\r?\n/).map(function (i) {
                return code(color[0]) + i + code(color[1]);
            }).join('\n'));
        } else {
            result.push(token[1]);
        }
    });
    return result.join('');
}

/**
 * The CSS parser throws this error for broken CSS.
 *
 * Custom parsers can throw this error for broken custom syntax using
 * the {@link Node#error} method.
 *
 * PostCSS will use the input source map to detect the original error location.
 * If you wrote a Sass file, compiled it to CSS and then parsed it with PostCSS,
 * PostCSS will show the original position in the Sass file.
 *
 * If you need the position in the PostCSS input
 * (e.g., to debug the previous compiler), use `error.input.file`.
 *
 * @example
 * // Catching and checking syntax error
 * try {
 *   postcss.parse('a{')
 * } catch (error) {
 *   if ( error.name === 'CssSyntaxError' ) {
 *     error //=> CssSyntaxError
 *   }
 * }
 *
 * @example
 * // Raising error from plugin
 * throw node.error('Unknown variable', { plugin: 'postcss-vars' });
 */

var CssSyntaxError = function () {

    /**
     * @param {string} message  - error message
     * @param {number} [line]   - source line of the error
     * @param {number} [column] - source column of the error
     * @param {string} [source] - source code of the broken file
     * @param {string} [file]   - absolute path to the broken file
     * @param {string} [plugin] - PostCSS plugin name, if error came from plugin
     */
    function CssSyntaxError(message, line, column, source, file, plugin) {
        classCallCheck(this, CssSyntaxError);

        /**
         * @member {string} - Always equal to `'CssSyntaxError'`. You should
         *                    always check error type
         *                    by `error.name === 'CssSyntaxError'` instead of
         *                    `error instanceof CssSyntaxError`, because
         *                    npm could have several PostCSS versions.
         *
         * @example
         * if ( error.name === 'CssSyntaxError' ) {
         *   error //=> CssSyntaxError
         * }
         */
        this.name = 'CssSyntaxError';
        /**
         * @member {string} - Error message.
         *
         * @example
         * error.message //=> 'Unclosed block'
         */
        this.reason = message;

        if (file) {
            /**
             * @member {string} - Absolute path to the broken file.
             *
             * @example
             * error.file       //=> 'a.sass'
             * error.input.file //=> 'a.css'
             */
            this.file = file;
        }
        if (source) {
            /**
             * @member {string} - Source code of the broken file.
             *
             * @example
             * error.source       //=> 'a { b {} }'
             * error.input.column //=> 'a b { }'
             */
            this.source = source;
        }
        if (plugin) {
            /**
             * @member {string} - Plugin name, if error came from plugin.
             *
             * @example
             * error.plugin //=> 'postcss-vars'
             */
            this.plugin = plugin;
        }
        if (typeof line !== 'undefined' && typeof column !== 'undefined') {
            /**
             * @member {number} - Source line of the error.
             *
             * @example
             * error.line       //=> 2
             * error.input.line //=> 4
             */
            this.line = line;
            /**
             * @member {number} - Source column of the error.
             *
             * @example
             * error.column       //=> 1
             * error.input.column //=> 4
             */
            this.column = column;
        }

        this.setMessage();

        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, CssSyntaxError);
        }
    }

    createClass(CssSyntaxError, [{
        key: 'setMessage',
        value: function setMessage() {
            /**
             * @member {string} - Full error text in the GNU error format
             *                    with plugin, file, line and column.
             *
             * @example
             * error.message //=> 'a.css:1:1: Unclosed block'
             */
            this.message = this.plugin ? this.plugin + ': ' : '';
            this.message += this.file ? this.file : '<css input>';
            if (typeof this.line !== 'undefined') {
                this.message += ':' + this.line + ':' + this.column;
            }
            this.message += ': ' + this.reason;
        }

        /**
         * Returns a few lines of CSS source that caused the error.
         *
         * If the CSS has an input source map without `sourceContent`,
         * this method will return an empty string.
         *
         * @param {boolean} [color] whether arrow will be colored red by terminal
         *                          color codes. By default, PostCSS will detect
         *                          color support by `process.stdout.isTTY`
         *                          and `process.env.NODE_DISABLE_COLORS`.
         *
         * @example
         * error.showSourceCode() //=> "  4 | }
         *                        //      5 | a {
         *                        //    > 6 |   bad
         *                        //        |   ^
         *                        //      7 | }
         *                        //      8 | b {"
         *
         * @return {string} few lines of CSS source that caused the error
         */

    }, {
        key: 'showSourceCode',
        value: function showSourceCode(color) {
            var _this = this;

            if (!this.source) return '';

            var css = this.source;
            if (typeof color === 'undefined') color = index$4;
            if (color) css = terminalHighlight(css);

            var lines = css.split(/\r?\n/);
            var start = Math.max(this.line - 3, 0);
            var end = Math.min(this.line + 2, lines.length);

            var maxWidth = String(end).length;

            return lines.slice(start, end).map(function (line, index) {
                var number = start + 1 + index;
                var padded = (' ' + number).slice(-maxWidth);
                var gutter = ' ' + padded + ' | ';
                if (number === _this.line) {
                    var spacing = gutter.replace(/\d/g, ' ') + line.slice(0, _this.column - 1).replace(/[^\t]/g, ' ');
                    return '>' + gutter + line + '\n ' + spacing + '^';
                } else {
                    return ' ' + gutter + line;
                }
            }).join('\n');
        }

        /**
         * Returns error position, message and source code of the broken part.
         *
         * @example
         * error.toString() //=> "CssSyntaxError: app.css:1:1: Unclosed block
         *                  //    > 1 | a {
         *                  //        | ^"
         *
         * @return {string} error position, message and source code
         */

    }, {
        key: 'toString',
        value: function toString() {
            var code = this.showSourceCode();
            if (code) {
                code = '\n\n' + code + '\n';
            }
            return this.name + ': ' + this.message + code;
        }
    }, {
        key: 'generated',
        get: function get() {
            warnOnce('CssSyntaxError#generated is depreacted. Use input instead.');
            return this.input;
        }

        /**
         * @memberof CssSyntaxError#
         * @member {Input} input - Input object with PostCSS internal information
         *                         about input file. If input has source map
         *                         from previous tool, PostCSS will use origin
         *                         (for example, Sass) source. You can use this
         *                         object to get PostCSS input source.
         *
         * @example
         * error.input.file //=> 'a.css'
         * error.file       //=> 'a.sass'
         */

    }]);
    return CssSyntaxError;
}();

/* eslint-disable valid-jsdoc */

var defaultRaw = {
    colon: ': ',
    indent: '    ',
    beforeDecl: '\n',
    beforeRule: '\n',
    beforeOpen: ' ',
    beforeClose: '\n',
    beforeComment: '\n',
    after: '\n',
    emptyBody: '',
    commentLeft: ' ',
    commentRight: ' '
};

function capitalize(str) {
    return str[0].toUpperCase() + str.slice(1);
}

var Stringifier = function () {
    function Stringifier(builder) {
        classCallCheck(this, Stringifier);

        this.builder = builder;
    }

    createClass(Stringifier, [{
        key: 'stringify',
        value: function stringify(node, semicolon) {
            this[node.type](node, semicolon);
        }
    }, {
        key: 'root',
        value: function root(node) {
            this.body(node);
            if (node.raws.after) this.builder(node.raws.after);
        }
    }, {
        key: 'comment',
        value: function comment(node) {
            var left = this.raw(node, 'left', 'commentLeft');
            var right = this.raw(node, 'right', 'commentRight');
            this.builder('/*' + left + node.text + right + '*/', node);
        }
    }, {
        key: 'decl',
        value: function decl(node, semicolon) {
            var between = this.raw(node, 'between', 'colon');
            var string = node.prop + between + this.rawValue(node, 'value');

            if (node.important) {
                string += node.raws.important || ' !important';
            }

            if (semicolon) string += ';';
            this.builder(string, node);
        }
    }, {
        key: 'rule',
        value: function rule(node) {
            this.block(node, this.rawValue(node, 'selector'));
        }
    }, {
        key: 'atrule',
        value: function atrule(node, semicolon) {
            var name = '@' + node.name;
            var params = node.params ? this.rawValue(node, 'params') : '';

            if (typeof node.raws.afterName !== 'undefined') {
                name += node.raws.afterName;
            } else if (params) {
                name += ' ';
            }

            if (node.nodes) {
                this.block(node, name + params);
            } else {
                var end = (node.raws.between || '') + (semicolon ? ';' : '');
                this.builder(name + params + end, node);
            }
        }
    }, {
        key: 'body',
        value: function body(node) {
            var last = node.nodes.length - 1;
            while (last > 0) {
                if (node.nodes[last].type !== 'comment') break;
                last -= 1;
            }

            var semicolon = this.raw(node, 'semicolon');
            for (var i = 0; i < node.nodes.length; i++) {
                var child = node.nodes[i];
                var before = this.raw(child, 'before');
                if (before) this.builder(before);
                this.stringify(child, last !== i || semicolon);
            }
        }
    }, {
        key: 'block',
        value: function block(node, start) {
            var between = this.raw(node, 'between', 'beforeOpen');
            this.builder(start + between + '{', node, 'start');

            var after = void 0;
            if (node.nodes && node.nodes.length) {
                this.body(node);
                after = this.raw(node, 'after');
            } else {
                after = this.raw(node, 'after', 'emptyBody');
            }

            if (after) this.builder(after);
            this.builder('}', node, 'end');
        }
    }, {
        key: 'raw',
        value: function raw(node, own, detect) {
            var value = void 0;
            if (!detect) detect = own;

            // Already had
            if (own) {
                value = node.raws[own];
                if (typeof value !== 'undefined') return value;
            }

            var parent = node.parent;

            // Hack for first rule in CSS
            if (detect === 'before') {
                if (!parent || parent.type === 'root' && parent.first === node) {
                    return '';
                }
            }

            // Floating child without parent
            if (!parent) return defaultRaw[detect];

            // Detect style by other nodes
            var root = node.root();
            if (!root.rawCache) root.rawCache = {};
            if (typeof root.rawCache[detect] !== 'undefined') {
                return root.rawCache[detect];
            }

            if (detect === 'before' || detect === 'after') {
                return this.beforeAfter(node, detect);
            } else {
                var method = 'raw' + capitalize(detect);
                if (this[method]) {
                    value = this[method](root, node);
                } else {
                    root.walk(function (i) {
                        value = i.raws[own];
                        if (typeof value !== 'undefined') return false;
                    });
                }
            }

            if (typeof value === 'undefined') value = defaultRaw[detect];

            root.rawCache[detect] = value;
            return value;
        }
    }, {
        key: 'rawSemicolon',
        value: function rawSemicolon(root) {
            var value = void 0;
            root.walk(function (i) {
                if (i.nodes && i.nodes.length && i.last.type === 'decl') {
                    value = i.raws.semicolon;
                    if (typeof value !== 'undefined') return false;
                }
            });
            return value;
        }
    }, {
        key: 'rawEmptyBody',
        value: function rawEmptyBody(root) {
            var value = void 0;
            root.walk(function (i) {
                if (i.nodes && i.nodes.length === 0) {
                    value = i.raws.after;
                    if (typeof value !== 'undefined') return false;
                }
            });
            return value;
        }
    }, {
        key: 'rawIndent',
        value: function rawIndent(root) {
            if (root.raws.indent) return root.raws.indent;
            var value = void 0;
            root.walk(function (i) {
                var p = i.parent;
                if (p && p !== root && p.parent && p.parent === root) {
                    if (typeof i.raws.before !== 'undefined') {
                        var parts = i.raws.before.split('\n');
                        value = parts[parts.length - 1];
                        value = value.replace(/[^\s]/g, '');
                        return false;
                    }
                }
            });
            return value;
        }
    }, {
        key: 'rawBeforeComment',
        value: function rawBeforeComment(root, node) {
            var value = void 0;
            root.walkComments(function (i) {
                if (typeof i.raws.before !== 'undefined') {
                    value = i.raws.before;
                    if (value.indexOf('\n') !== -1) {
                        value = value.replace(/[^\n]+$/, '');
                    }
                    return false;
                }
            });
            if (typeof value === 'undefined') {
                value = this.raw(node, null, 'beforeDecl');
            }
            return value;
        }
    }, {
        key: 'rawBeforeDecl',
        value: function rawBeforeDecl(root, node) {
            var value = void 0;
            root.walkDecls(function (i) {
                if (typeof i.raws.before !== 'undefined') {
                    value = i.raws.before;
                    if (value.indexOf('\n') !== -1) {
                        value = value.replace(/[^\n]+$/, '');
                    }
                    return false;
                }
            });
            if (typeof value === 'undefined') {
                value = this.raw(node, null, 'beforeRule');
            }
            return value;
        }
    }, {
        key: 'rawBeforeRule',
        value: function rawBeforeRule(root) {
            var value = void 0;
            root.walk(function (i) {
                if (i.nodes && (i.parent !== root || root.first !== i)) {
                    if (typeof i.raws.before !== 'undefined') {
                        value = i.raws.before;
                        if (value.indexOf('\n') !== -1) {
                            value = value.replace(/[^\n]+$/, '');
                        }
                        return false;
                    }
                }
            });
            return value;
        }
    }, {
        key: 'rawBeforeClose',
        value: function rawBeforeClose(root) {
            var value = void 0;
            root.walk(function (i) {
                if (i.nodes && i.nodes.length > 0) {
                    if (typeof i.raws.after !== 'undefined') {
                        value = i.raws.after;
                        if (value.indexOf('\n') !== -1) {
                            value = value.replace(/[^\n]+$/, '');
                        }
                        return false;
                    }
                }
            });
            return value;
        }
    }, {
        key: 'rawBeforeOpen',
        value: function rawBeforeOpen(root) {
            var value = void 0;
            root.walk(function (i) {
                if (i.type !== 'decl') {
                    value = i.raws.between;
                    if (typeof value !== 'undefined') return false;
                }
            });
            return value;
        }
    }, {
        key: 'rawColon',
        value: function rawColon(root) {
            var value = void 0;
            root.walkDecls(function (i) {
                if (typeof i.raws.between !== 'undefined') {
                    value = i.raws.between.replace(/[^\s:]/g, '');
                    return false;
                }
            });
            return value;
        }
    }, {
        key: 'beforeAfter',
        value: function beforeAfter(node, detect) {
            var value = void 0;
            if (node.type === 'decl') {
                value = this.raw(node, null, 'beforeDecl');
            } else if (node.type === 'comment') {
                value = this.raw(node, null, 'beforeComment');
            } else if (detect === 'before') {
                value = this.raw(node, null, 'beforeRule');
            } else {
                value = this.raw(node, null, 'beforeClose');
            }

            var buf = node.parent;
            var depth = 0;
            while (buf && buf.type !== 'root') {
                depth += 1;
                buf = buf.parent;
            }

            if (value.indexOf('\n') !== -1) {
                var indent = this.raw(node, null, 'indent');
                if (indent.length) {
                    for (var step = 0; step < depth; step++) {
                        value += indent;
                    }
                }
            }

            return value;
        }
    }, {
        key: 'rawValue',
        value: function rawValue(node, prop) {
            var value = node[prop];
            var raw = node.raws[prop];
            if (raw && raw.value === value) {
                return raw.raw;
            } else {
                return value;
            }
        }
    }]);
    return Stringifier;
}();

function stringify$1(node, builder) {
    var str = new Stringifier(builder);
    str.stringify(node);
}

/**
 * @typedef {object} position
 * @property {number} line   - source line in file
 * @property {number} column - source column in file
 */

/**
 * @typedef {object} source
 * @property {Input} input    - {@link Input} with input file
 * @property {position} start - The starting position of the node’s source
 * @property {position} end   - The ending position of the node’s source
 */

var cloneNode = function cloneNode(obj, parent) {
    var cloned = new obj.constructor();

    for (var i in obj) {
        if (!obj.hasOwnProperty(i)) continue;
        var value = obj[i];
        var type = typeof value === 'undefined' ? 'undefined' : _typeof(value);

        if (i === 'parent' && type === 'object') {
            if (parent) cloned[i] = parent;
        } else if (i === 'source') {
            cloned[i] = value;
        } else if (value instanceof Array) {
            cloned[i] = value.map(function (j) {
                return cloneNode(j, cloned);
            });
        } else if (i !== 'before' && i !== 'after' && i !== 'between' && i !== 'semicolon') {
            if (type === 'object' && value !== null) value = cloneNode(value);
            cloned[i] = value;
        }
    }

    return cloned;
};

/**
 * All node classes inherit the following common methods.
 *
 * @abstract
 */

var Node = function () {

    /**
     * @param {object} [defaults] - value for node properties
     */
    function Node() {
        var defaults$$1 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        classCallCheck(this, Node);

        this.raws = {};
        for (var name in defaults$$1) {
            this[name] = defaults$$1[name];
        }
    }

    /**
     * Returns a CssSyntaxError instance containing the original position
     * of the node in the source, showing line and column numbers and also
     * a small excerpt to facilitate debugging.
     *
     * If present, an input source map will be used to get the original position
     * of the source, even from a previous compilation step
     * (e.g., from Sass compilation).
     *
     * This method produces very useful error messages.
     *
     * @param {string} message     - error description
     * @param {object} [opts]      - options
     * @param {string} opts.plugin - plugin name that created this error.
     *                               PostCSS will set it automatically.
     * @param {string} opts.word   - a word inside a node’s string that should
     *                               be highlighted as the source of the error
     * @param {number} opts.index  - an index inside a node’s string that should
     *                               be highlighted as the source of the error
     *
     * @return {CssSyntaxError} error object to throw it
     *
     * @example
     * if ( !variables[name] ) {
     *   throw decl.error('Unknown variable ' + name, { word: name });
     *   // CssSyntaxError: postcss-vars:a.sass:4:3: Unknown variable $black
     *   //   color: $black
     *   // a
     *   //          ^
     *   //   background: white
     * }
     */


    createClass(Node, [{
        key: 'error',
        value: function error(message) {
            var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

            if (this.source) {
                var pos = this.positionBy(opts);
                return this.source.input.error(message, pos.line, pos.column, opts);
            } else {
                return new CssSyntaxError(message);
            }
        }

        /**
         * This method is provided as a convenience wrapper for {@link Result#warn}.
         *
         * @param {Result} result      - the {@link Result} instance
         *                               that will receive the warning
         * @param {string} text        - warning message
         * @param {object} [opts]      - options
         * @param {string} opts.plugin - plugin name that created this warning.
         *                               PostCSS will set it automatically.
         * @param {string} opts.word   - a word inside a node’s string that should
         *                               be highlighted as the source of the warning
         * @param {number} opts.index  - an index inside a node’s string that should
         *                               be highlighted as the source of the warning
         *
         * @return {Warning} created warning object
         *
         * @example
         * const plugin = postcss.plugin('postcss-deprecated', () => {
         *   return (root, result) => {
         *     root.walkDecls('bad', decl => {
         *       decl.warn(result, 'Deprecated property bad');
         *     });
         *   };
         * });
         */

    }, {
        key: 'warn',
        value: function warn(result, text, opts) {
            var data = { node: this };
            for (var i in opts) {
                data[i] = opts[i];
            }return result.warn(text, data);
        }

        /**
         * Removes the node from its parent and cleans the parent properties
         * from the node and its children.
         *
         * @example
         * if ( decl.prop.match(/^-webkit-/) ) {
         *   decl.remove();
         * }
         *
         * @return {Node} node to make calls chain
         */

    }, {
        key: 'remove',
        value: function remove() {
            if (this.parent) {
                this.parent.removeChild(this);
            }
            this.parent = undefined;
            return this;
        }

        /**
         * Returns a CSS string representing the node.
         *
         * @param {stringifier|syntax} [stringifier] - a syntax to use
         *                                             in string generation
         *
         * @return {string} CSS string of this node
         *
         * @example
         * postcss.rule({ selector: 'a' }).toString() //=> "a {}"
         */

    }, {
        key: 'toString',
        value: function toString() {
            var stringifier = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : stringify$1;

            if (stringifier.stringify) stringifier = stringifier.stringify;
            var result = '';
            stringifier(this, function (i) {
                result += i;
            });
            return result;
        }

        /**
         * Returns a clone of the node.
         *
         * The resulting cloned node and its (cloned) children will have
         * a clean parent and code style properties.
         *
         * @param {object} [overrides] - new properties to override in the clone.
         *
         * @example
         * const cloned = decl.clone({ prop: '-moz-' + decl.prop });
         * cloned.raws.before  //=> undefined
         * cloned.parent       //=> undefined
         * cloned.toString()   //=> -moz-transform: scale(0)
         *
         * @return {Node} clone of the node
         */

    }, {
        key: 'clone',
        value: function clone() {
            var overrides = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

            var cloned = cloneNode(this);
            for (var name in overrides) {
                cloned[name] = overrides[name];
            }
            return cloned;
        }

        /**
         * Shortcut to clone the node and insert the resulting cloned node
         * before the current node.
         *
         * @param {object} [overrides] - new properties to override in the clone.
         *
         * @example
         * decl.cloneBefore({ prop: '-moz-' + decl.prop });
         *
         * @return {Node} - new node
         */

    }, {
        key: 'cloneBefore',
        value: function cloneBefore() {
            var overrides = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

            var cloned = this.clone(overrides);
            this.parent.insertBefore(this, cloned);
            return cloned;
        }

        /**
         * Shortcut to clone the node and insert the resulting cloned node
         * after the current node.
         *
         * @param {object} [overrides] - new properties to override in the clone.
         *
         * @return {Node} - new node
         */

    }, {
        key: 'cloneAfter',
        value: function cloneAfter() {
            var overrides = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

            var cloned = this.clone(overrides);
            this.parent.insertAfter(this, cloned);
            return cloned;
        }

        /**
         * Inserts node(s) before the current node and removes the current node.
         *
         * @param {...Node} nodes - node(s) to replace current one
         *
         * @example
         * if ( atrule.name == 'mixin' ) {
         *   atrule.replaceWith(mixinRules[atrule.params]);
         * }
         *
         * @return {Node} current node to methods chain
         */

    }, {
        key: 'replaceWith',
        value: function replaceWith() {
            var _this = this;

            if (this.parent) {
                for (var _len = arguments.length, nodes = Array(_len), _key = 0; _key < _len; _key++) {
                    nodes[_key] = arguments[_key];
                }

                nodes.forEach(function (node) {
                    _this.parent.insertBefore(_this, node);
                });

                this.remove();
            }

            return this;
        }

        /**
         * Removes the node from its current parent and inserts it
         * at the end of `newParent`.
         *
         * This will clean the `before` and `after` code {@link Node#raws} data
         * from the node and replace them with the indentation style of `newParent`.
         * It will also clean the `between` property
         * if `newParent` is in another {@link Root}.
         *
         * @param {Container} newParent - container node where the current node
         *                                will be moved
         *
         * @example
         * atrule.moveTo(atrule.root());
         *
         * @return {Node} current node to methods chain
         */

    }, {
        key: 'moveTo',
        value: function moveTo(newParent) {
            this.cleanRaws(this.root() === newParent.root());
            this.remove();
            newParent.append(this);
            return this;
        }

        /**
         * Removes the node from its current parent and inserts it into
         * a new parent before `otherNode`.
         *
         * This will also clean the node’s code style properties just as it would
         * in {@link Node#moveTo}.
         *
         * @param {Node} otherNode - node that will be before current node
         *
         * @return {Node} current node to methods chain
         */

    }, {
        key: 'moveBefore',
        value: function moveBefore(otherNode) {
            this.cleanRaws(this.root() === otherNode.root());
            this.remove();
            otherNode.parent.insertBefore(otherNode, this);
            return this;
        }

        /**
         * Removes the node from its current parent and inserts it into
         * a new parent after `otherNode`.
         *
         * This will also clean the node’s code style properties just as it would
         * in {@link Node#moveTo}.
         *
         * @param {Node} otherNode - node that will be after current node
         *
         * @return {Node} current node to methods chain
         */

    }, {
        key: 'moveAfter',
        value: function moveAfter(otherNode) {
            this.cleanRaws(this.root() === otherNode.root());
            this.remove();
            otherNode.parent.insertAfter(otherNode, this);
            return this;
        }

        /**
         * Returns the next child of the node’s parent.
         * Returns `undefined` if the current node is the last child.
         *
         * @return {Node|undefined} next node
         *
         * @example
         * if ( comment.text === 'delete next' ) {
         *   const next = comment.next();
         *   if ( next ) {
         *     next.remove();
         *   }
         * }
         */

    }, {
        key: 'next',
        value: function next() {
            var index = this.parent.index(this);
            return this.parent.nodes[index + 1];
        }

        /**
         * Returns the previous child of the node’s parent.
         * Returns `undefined` if the current node is the first child.
         *
         * @return {Node|undefined} previous node
         *
         * @example
         * const annotation = decl.prev();
         * if ( annotation.type == 'comment' ) {
         *  readAnnotation(annotation.text);
         * }
         */

    }, {
        key: 'prev',
        value: function prev() {
            var index = this.parent.index(this);
            return this.parent.nodes[index - 1];
        }
    }, {
        key: 'toJSON',
        value: function toJSON() {
            var fixed = {};

            for (var name in this) {
                if (!this.hasOwnProperty(name)) continue;
                if (name === 'parent') continue;
                var value = this[name];

                if (value instanceof Array) {
                    fixed[name] = value.map(function (i) {
                        if ((typeof i === 'undefined' ? 'undefined' : _typeof(i)) === 'object' && i.toJSON) {
                            return i.toJSON();
                        } else {
                            return i;
                        }
                    });
                } else if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object' && value.toJSON) {
                    fixed[name] = value.toJSON();
                } else {
                    fixed[name] = value;
                }
            }

            return fixed;
        }

        /**
         * Returns a {@link Node#raws} value. If the node is missing
         * the code style property (because the node was manually built or cloned),
         * PostCSS will try to autodetect the code style property by looking
         * at other nodes in the tree.
         *
         * @param {string} prop          - name of code style property
         * @param {string} [defaultType] - name of default value, it can be missed
         *                                 if the value is the same as prop
         *
         * @example
         * const root = postcss.parse('a { background: white }');
         * root.nodes[0].append({ prop: 'color', value: 'black' });
         * root.nodes[0].nodes[1].raws.before   //=> undefined
         * root.nodes[0].nodes[1].raw('before') //=> ' '
         *
         * @return {string} code style value
         */

    }, {
        key: 'raw',
        value: function raw(prop, defaultType) {
            var str = new Stringifier();
            return str.raw(this, prop, defaultType);
        }

        /**
         * Finds the Root instance of the node’s tree.
         *
         * @example
         * root.nodes[0].nodes[0].root() === root
         *
         * @return {Root} root parent
         */

    }, {
        key: 'root',
        value: function root() {
            var result = this;
            while (result.parent) {
                result = result.parent;
            }return result;
        }
    }, {
        key: 'cleanRaws',
        value: function cleanRaws(keepBetween) {
            delete this.raws.before;
            delete this.raws.after;
            if (!keepBetween) delete this.raws.between;
        }
    }, {
        key: 'positionInside',
        value: function positionInside(index) {
            var string = this.toString();
            var column = this.source.start.column;
            var line = this.source.start.line;

            for (var i = 0; i < index; i++) {
                if (string[i] === '\n') {
                    column = 1;
                    line += 1;
                } else {
                    column += 1;
                }
            }

            return { line: line, column: column };
        }
    }, {
        key: 'positionBy',
        value: function positionBy(opts) {
            var pos = this.source.start;
            if (opts.index) {
                pos = this.positionInside(opts.index);
            } else if (opts.word) {
                var index = this.toString().indexOf(opts.word);
                if (index !== -1) pos = this.positionInside(index);
            }
            return pos;
        }
    }, {
        key: 'removeSelf',
        value: function removeSelf() {
            warnOnce('Node#removeSelf is deprecated. Use Node#remove.');
            return this.remove();
        }
    }, {
        key: 'replace',
        value: function replace(nodes) {
            warnOnce('Node#replace is deprecated. Use Node#replaceWith');
            return this.replaceWith(nodes);
        }
    }, {
        key: 'style',
        value: function style(own, detect) {
            warnOnce('Node#style() is deprecated. Use Node#raw()');
            return this.raw(own, detect);
        }
    }, {
        key: 'cleanStyles',
        value: function cleanStyles(keepBetween) {
            warnOnce('Node#cleanStyles() is deprecated. Use Node#cleanRaws()');
            return this.cleanRaws(keepBetween);
        }
    }, {
        key: 'before',
        get: function get() {
            warnOnce('Node#before is deprecated. Use Node#raws.before');
            return this.raws.before;
        },
        set: function set(val) {
            warnOnce('Node#before is deprecated. Use Node#raws.before');
            this.raws.before = val;
        }
    }, {
        key: 'between',
        get: function get() {
            warnOnce('Node#between is deprecated. Use Node#raws.between');
            return this.raws.between;
        },
        set: function set(val) {
            warnOnce('Node#between is deprecated. Use Node#raws.between');
            this.raws.between = val;
        }

        /**
         * @memberof Node#
         * @member {string} type - String representing the node’s type.
         *                         Possible values are `root`, `atrule`, `rule`,
         *                         `decl`, or `comment`.
         *
         * @example
         * postcss.decl({ prop: 'color', value: 'black' }).type //=> 'decl'
         */

        /**
         * @memberof Node#
         * @member {Container} parent - the node’s parent node.
         *
         * @example
         * root.nodes[0].parent == root;
         */

        /**
         * @memberof Node#
         * @member {source} source - the input source of the node
         *
         * The property is used in source map generation.
         *
         * If you create a node manually (e.g., with `postcss.decl()`),
         * that node will not have a `source` property and will be absent
         * from the source map. For this reason, the plugin developer should
         * consider cloning nodes to create new ones (in which case the new node’s
         * source will reference the original, cloned node) or setting
         * the `source` property manually.
         *
         * ```js
         * // Bad
         * const prefixed = postcss.decl({
         *   prop: '-moz-' + decl.prop,
         *   value: decl.value
         * });
         *
         * // Good
         * const prefixed = decl.clone({ prop: '-moz-' + decl.prop });
         * ```
         *
         * ```js
         * if ( atrule.name == 'add-link' ) {
         *   const rule = postcss.rule({ selector: 'a', source: atrule.source });
         *   atrule.parent.insertBefore(atrule, rule);
         * }
         * ```
         *
         * @example
         * decl.source.input.from //=> '/home/ai/a.sass'
         * decl.source.start      //=> { line: 10, column: 2 }
         * decl.source.end        //=> { line: 10, column: 12 }
         */

        /**
         * @memberof Node#
         * @member {object} raws - Information to generate byte-to-byte equal
         *                         node string as it was in the origin input.
         *
         * Every parser saves its own properties,
         * but the default CSS parser uses:
         *
         * * `before`: the space symbols before the node. It also stores `*`
         *   and `_` symbols before the declaration (IE hack).
         * * `after`: the space symbols after the last child of the node
         *   to the end of the node.
         * * `between`: the symbols between the property and value
         *   for declarations, selector and `{` for rules, or last parameter
         *   and `{` for at-rules.
         * * `semicolon`: contains true if the last child has
         *   an (optional) semicolon.
         * * `afterName`: the space between the at-rule name and its parameters.
         * * `left`: the space symbols between `/*` and the comment’s text.
         * * `right`: the space symbols between the comment’s text
         *   and <code>*&#47;</code>.
         * * `important`: the content of the important statement,
         *   if it is not just `!important`.
         *
         * PostCSS cleans selectors, declaration values and at-rule parameters
         * from comments and extra spaces, but it stores origin content in raws
         * properties. As such, if you don’t change a declaration’s value,
         * PostCSS will use the raw value with comments.
         *
         * @example
         * const root = postcss.parse('a {\n  color:black\n}')
         * root.first.first.raws //=> { before: '\n  ', between: ':' }
         */

    }]);
    return Node;
}();

/**
 * Represents a CSS declaration.
 *
 * @extends Node
 *
 * @example
 * const root = postcss.parse('a { color: black }');
 * const decl = root.first.first;
 * decl.type       //=> 'decl'
 * decl.toString() //=> ' color: black'
 */

var Declaration = function (_Node) {
    inherits(Declaration, _Node);

    function Declaration(defaults$$1) {
        classCallCheck(this, Declaration);

        var _this = possibleConstructorReturn(this, (Declaration.__proto__ || Object.getPrototypeOf(Declaration)).call(this, defaults$$1));

        _this.type = 'decl';
        return _this;
    }

    createClass(Declaration, [{
        key: '_value',
        get: function get() {
            warnOnce('Node#_value was deprecated. Use Node#raws.value');
            return this.raws.value;
        },
        set: function set(val) {
            warnOnce('Node#_value was deprecated. Use Node#raws.value');
            this.raws.value = val;
        }
    }, {
        key: '_important',
        get: function get() {
            warnOnce('Node#_important was deprecated. Use Node#raws.important');
            return this.raws.important;
        },
        set: function set(val) {
            warnOnce('Node#_important was deprecated. Use Node#raws.important');
            this.raws.important = val;
        }

        /**
         * @memberof Declaration#
         * @member {string} prop - the declaration’s property name
         *
         * @example
         * const root = postcss.parse('a { color: black }');
         * const decl = root.first.first;
         * decl.prop //=> 'color'
         */

        /**
         * @memberof Declaration#
         * @member {string} value - the declaration’s value
         *
         * @example
         * const root = postcss.parse('a { color: black }');
         * const decl = root.first.first;
         * decl.value //=> 'black'
         */

        /**
         * @memberof Declaration#
         * @member {boolean} important - `true` if the declaration
         *                               has an !important annotation.
         *
         * @example
         * const root = postcss.parse('a { color: black !important; color: red }');
         * root.first.first.important //=> true
         * root.first.last.important  //=> undefined
         */

        /**
         * @memberof Declaration#
         * @member {object} raws - Information to generate byte-to-byte equal
         *                         node string as it was in the origin input.
         *
         * Every parser saves its own properties,
         * but the default CSS parser uses:
         *
         * * `before`: the space symbols before the node. It also stores `*`
         *   and `_` symbols before the declaration (IE hack).
         * * `between`: the symbols between the property and value
         *   for declarations, selector and `{` for rules, or last parameter
         *   and `{` for at-rules.
         * * `important`: the content of the important statement,
         *   if it is not just `!important`.
         *
         * PostCSS cleans declaration from comments and extra spaces,
         * but it stores origin content in raws properties.
         * As such, if you don’t change a declaration’s value,
         * PostCSS will use the raw value with comments.
         *
         * @example
         * const root = postcss.parse('a {\n  color:black\n}')
         * root.first.first.raws //=> { before: '\n  ', between: ':' }
         */

    }]);
    return Declaration;
}(Node);

/**
 * Represents a comment between declarations or statements (rule and at-rules).
 *
 * Comments inside selectors, at-rule parameters, or declaration values
 * will be stored in the `raws` properties explained above.
 *
 * @extends Node
 */

var Comment = function (_Node) {
    inherits(Comment, _Node);

    function Comment(defaults$$1) {
        classCallCheck(this, Comment);

        var _this = possibleConstructorReturn(this, (Comment.__proto__ || Object.getPrototypeOf(Comment)).call(this, defaults$$1));

        _this.type = 'comment';
        return _this;
    }

    createClass(Comment, [{
        key: 'left',
        get: function get() {
            warnOnce('Comment#left was deprecated. Use Comment#raws.left');
            return this.raws.left;
        },
        set: function set(val) {
            warnOnce('Comment#left was deprecated. Use Comment#raws.left');
            this.raws.left = val;
        }
    }, {
        key: 'right',
        get: function get() {
            warnOnce('Comment#right was deprecated. Use Comment#raws.right');
            return this.raws.right;
        },
        set: function set(val) {
            warnOnce('Comment#right was deprecated. Use Comment#raws.right');
            this.raws.right = val;
        }

        /**
         * @memberof Comment#
         * @member {string} text - the comment’s text
         */

        /**
         * @memberof Comment#
         * @member {object} raws - Information to generate byte-to-byte equal
         *                         node string as it was in the origin input.
         *
         * Every parser saves its own properties,
         * but the default CSS parser uses:
         *
         * * `before`: the space symbols before the node.
         * * `left`: the space symbols between `/*` and the comment’s text.
         * * `right`: the space symbols between the comment’s text.
         */

    }]);
    return Comment;
}(Node);

var Parser = function () {
    function Parser(input) {
        classCallCheck(this, Parser);

        this.input = input;

        this.pos = 0;
        this.root = new Root();
        this.current = this.root;
        this.spaces = '';
        this.semicolon = false;

        this.root.source = { input: input, start: { line: 1, column: 1 } };
    }

    createClass(Parser, [{
        key: 'tokenize',
        value: function tokenize() {
            this.tokens = tokenize$1(this.input);
        }
    }, {
        key: 'loop',
        value: function loop() {
            var token = void 0;
            while (this.pos < this.tokens.length) {
                token = this.tokens[this.pos];

                switch (token[0]) {

                    case 'space':
                    case ';':
                        this.spaces += token[1];
                        break;

                    case '}':
                        this.end(token);
                        break;

                    case 'comment':
                        this.comment(token);
                        break;

                    case 'at-word':
                        this.atrule(token);
                        break;

                    case '{':
                        this.emptyRule(token);
                        break;

                    default:
                        this.other();
                        break;
                }

                this.pos += 1;
            }
            this.endFile();
        }
    }, {
        key: 'comment',
        value: function comment(token) {
            var node = new Comment();
            this.init(node, token[2], token[3]);
            node.source.end = { line: token[4], column: token[5] };

            var text = token[1].slice(2, -2);
            if (/^\s*$/.test(text)) {
                node.text = '';
                node.raws.left = text;
                node.raws.right = '';
            } else {
                var match = text.match(/^(\s*)([^]*[^\s])(\s*)$/);
                node.text = match[2];
                node.raws.left = match[1];
                node.raws.right = match[3];
            }
        }
    }, {
        key: 'emptyRule',
        value: function emptyRule(token) {
            var node = new Rule();
            this.init(node, token[2], token[3]);
            node.selector = '';
            node.raws.between = '';
            this.current = node;
        }
    }, {
        key: 'other',
        value: function other() {
            var token = void 0;
            var end = false;
            var type = null;
            var colon = false;
            var bracket = null;
            var brackets = [];

            var start = this.pos;
            while (this.pos < this.tokens.length) {
                token = this.tokens[this.pos];
                type = token[0];

                if (type === '(' || type === '[') {
                    if (!bracket) bracket = token;
                    brackets.push(type === '(' ? ')' : ']');
                } else if (brackets.length === 0) {
                    if (type === ';') {
                        if (colon) {
                            this.decl(this.tokens.slice(start, this.pos + 1));
                            return;
                        } else {
                            break;
                        }
                    } else if (type === '{') {
                        this.rule(this.tokens.slice(start, this.pos + 1));
                        return;
                    } else if (type === '}') {
                        this.pos -= 1;
                        end = true;
                        break;
                    } else if (type === ':') {
                        colon = true;
                    }
                } else if (type === brackets[brackets.length - 1]) {
                    brackets.pop();
                    if (brackets.length === 0) bracket = null;
                }

                this.pos += 1;
            }
            if (this.pos === this.tokens.length) {
                this.pos -= 1;
                end = true;
            }

            if (brackets.length > 0) this.unclosedBracket(bracket);

            if (end && colon) {
                while (this.pos > start) {
                    token = this.tokens[this.pos][0];
                    if (token !== 'space' && token !== 'comment') break;
                    this.pos -= 1;
                }
                this.decl(this.tokens.slice(start, this.pos + 1));
                return;
            }

            this.unknownWord(start);
        }
    }, {
        key: 'rule',
        value: function rule(tokens) {
            tokens.pop();

            var node = new Rule();
            this.init(node, tokens[0][2], tokens[0][3]);

            node.raws.between = this.spacesFromEnd(tokens);
            this.raw(node, 'selector', tokens);
            this.current = node;
        }
    }, {
        key: 'decl',
        value: function decl(tokens) {
            var node = new Declaration();
            this.init(node);

            var last = tokens[tokens.length - 1];
            if (last[0] === ';') {
                this.semicolon = true;
                tokens.pop();
            }
            if (last[4]) {
                node.source.end = { line: last[4], column: last[5] };
            } else {
                node.source.end = { line: last[2], column: last[3] };
            }

            while (tokens[0][0] !== 'word') {
                node.raws.before += tokens.shift()[1];
            }
            node.source.start = { line: tokens[0][2], column: tokens[0][3] };

            node.prop = '';
            while (tokens.length) {
                var type = tokens[0][0];
                if (type === ':' || type === 'space' || type === 'comment') {
                    break;
                }
                node.prop += tokens.shift()[1];
            }

            node.raws.between = '';

            var token = void 0;
            while (tokens.length) {
                token = tokens.shift();

                if (token[0] === ':') {
                    node.raws.between += token[1];
                    break;
                } else {
                    node.raws.between += token[1];
                }
            }

            if (node.prop[0] === '_' || node.prop[0] === '*') {
                node.raws.before += node.prop[0];
                node.prop = node.prop.slice(1);
            }
            node.raws.between += this.spacesFromStart(tokens);
            this.precheckMissedSemicolon(tokens);

            for (var i = tokens.length - 1; i > 0; i--) {
                token = tokens[i];
                if (token[1] === '!important') {
                    node.important = true;
                    var string = this.stringFrom(tokens, i);
                    string = this.spacesFromEnd(tokens) + string;
                    if (string !== ' !important') node.raws.important = string;
                    break;
                } else if (token[1] === 'important') {
                    var cache = tokens.slice(0);
                    var str = '';
                    for (var j = i; j > 0; j--) {
                        var _type = cache[j][0];
                        if (str.trim().indexOf('!') === 0 && _type !== 'space') {
                            break;
                        }
                        str = cache.pop()[1] + str;
                    }
                    if (str.trim().indexOf('!') === 0) {
                        node.important = true;
                        node.raws.important = str;
                        tokens = cache;
                    }
                }

                if (token[0] !== 'space' && token[0] !== 'comment') {
                    break;
                }
            }

            this.raw(node, 'value', tokens);

            if (node.value.indexOf(':') !== -1) this.checkMissedSemicolon(tokens);
        }
    }, {
        key: 'atrule',
        value: function atrule(token) {
            var node = new AtRule();
            node.name = token[1].slice(1);
            if (node.name === '') {
                this.unnamedAtrule(node, token);
            }
            this.init(node, token[2], token[3]);

            var last = false;
            var open = false;
            var params = [];

            this.pos += 1;
            while (this.pos < this.tokens.length) {
                token = this.tokens[this.pos];

                if (token[0] === ';') {
                    node.source.end = { line: token[2], column: token[3] };
                    this.semicolon = true;
                    break;
                } else if (token[0] === '{') {
                    open = true;
                    break;
                } else if (token[0] === '}') {
                    this.end(token);
                    break;
                } else {
                    params.push(token);
                }

                this.pos += 1;
            }
            if (this.pos === this.tokens.length) {
                last = true;
            }

            node.raws.between = this.spacesFromEnd(params);
            if (params.length) {
                node.raws.afterName = this.spacesFromStart(params);
                this.raw(node, 'params', params);
                if (last) {
                    token = params[params.length - 1];
                    node.source.end = { line: token[4], column: token[5] };
                    this.spaces = node.raws.between;
                    node.raws.between = '';
                }
            } else {
                node.raws.afterName = '';
                node.params = '';
            }

            if (open) {
                node.nodes = [];
                this.current = node;
            }
        }
    }, {
        key: 'end',
        value: function end(token) {
            if (this.current.nodes && this.current.nodes.length) {
                this.current.raws.semicolon = this.semicolon;
            }
            this.semicolon = false;

            this.current.raws.after = (this.current.raws.after || '') + this.spaces;
            this.spaces = '';

            if (this.current.parent) {
                this.current.source.end = { line: token[2], column: token[3] };
                this.current = this.current.parent;
            } else {
                this.unexpectedClose(token);
            }
        }
    }, {
        key: 'endFile',
        value: function endFile() {
            if (this.current.parent) this.unclosedBlock();
            if (this.current.nodes && this.current.nodes.length) {
                this.current.raws.semicolon = this.semicolon;
            }
            this.current.raws.after = (this.current.raws.after || '') + this.spaces;
        }

        // Helpers

    }, {
        key: 'init',
        value: function init(node, line, column) {
            this.current.push(node);

            node.source = { start: { line: line, column: column }, input: this.input };
            node.raws.before = this.spaces;
            this.spaces = '';
            if (node.type !== 'comment') this.semicolon = false;
        }
    }, {
        key: 'raw',
        value: function raw(node, prop, tokens) {
            var token = void 0,
                type = void 0;
            var length = tokens.length;
            var value = '';
            var clean = true;
            for (var i = 0; i < length; i += 1) {
                token = tokens[i];
                type = token[0];
                if (type === 'comment' || type === 'space' && i === length - 1) {
                    clean = false;
                } else {
                    value += token[1];
                }
            }
            if (!clean) {
                var raw = tokens.reduce(function (all, i) {
                    return all + i[1];
                }, '');
                node.raws[prop] = { value: value, raw: raw };
            }
            node[prop] = value;
        }
    }, {
        key: 'spacesFromEnd',
        value: function spacesFromEnd(tokens) {
            var lastTokenType = void 0;
            var spaces = '';
            while (tokens.length) {
                lastTokenType = tokens[tokens.length - 1][0];
                if (lastTokenType !== 'space' && lastTokenType !== 'comment') break;
                spaces = tokens.pop()[1] + spaces;
            }
            return spaces;
        }
    }, {
        key: 'spacesFromStart',
        value: function spacesFromStart(tokens) {
            var next = void 0;
            var spaces = '';
            while (tokens.length) {
                next = tokens[0][0];
                if (next !== 'space' && next !== 'comment') break;
                spaces += tokens.shift()[1];
            }
            return spaces;
        }
    }, {
        key: 'stringFrom',
        value: function stringFrom(tokens, from) {
            var result = '';
            for (var i = from; i < tokens.length; i++) {
                result += tokens[i][1];
            }
            tokens.splice(from, tokens.length - from);
            return result;
        }
    }, {
        key: 'colon',
        value: function colon(tokens) {
            var brackets = 0;
            var token = void 0,
                type = void 0,
                prev = void 0;
            for (var i = 0; i < tokens.length; i++) {
                token = tokens[i];
                type = token[0];

                if (type === '(') {
                    brackets += 1;
                } else if (type === ')') {
                    brackets -= 1;
                } else if (brackets === 0 && type === ':') {
                    if (!prev) {
                        this.doubleColon(token);
                    } else if (prev[0] === 'word' && prev[1] === 'progid') {
                        continue;
                    } else {
                        return i;
                    }
                }

                prev = token;
            }
            return false;
        }

        // Errors

    }, {
        key: 'unclosedBracket',
        value: function unclosedBracket(bracket) {
            throw this.input.error('Unclosed bracket', bracket[2], bracket[3]);
        }
    }, {
        key: 'unknownWord',
        value: function unknownWord(start) {
            var token = this.tokens[start];
            throw this.input.error('Unknown word', token[2], token[3]);
        }
    }, {
        key: 'unexpectedClose',
        value: function unexpectedClose(token) {
            throw this.input.error('Unexpected }', token[2], token[3]);
        }
    }, {
        key: 'unclosedBlock',
        value: function unclosedBlock() {
            var pos = this.current.source.start;
            throw this.input.error('Unclosed block', pos.line, pos.column);
        }
    }, {
        key: 'doubleColon',
        value: function doubleColon(token) {
            throw this.input.error('Double colon', token[2], token[3]);
        }
    }, {
        key: 'unnamedAtrule',
        value: function unnamedAtrule(node, token) {
            throw this.input.error('At-rule without name', token[2], token[3]);
        }
    }, {
        key: 'precheckMissedSemicolon',
        value: function precheckMissedSemicolon(tokens) {
            // Hook for Safe Parser
            tokens;
        }
    }, {
        key: 'checkMissedSemicolon',
        value: function checkMissedSemicolon(tokens) {
            var colon = this.colon(tokens);
            if (colon === false) return;

            var founded = 0;
            var token = void 0;
            for (var j = colon - 1; j >= 0; j--) {
                token = tokens[j];
                if (token[0] !== 'space') {
                    founded += 1;
                    if (founded === 2) break;
                }
            }
            throw this.input.error('Missed semicolon', token[2], token[3]);
        }
    }]);
    return Parser;
}();

function parse(css, opts) {
    if (opts && opts.safe) {
        throw new Error('Option safe was removed. ' + 'Use parser: require("postcss-safe-parser")');
    }

    var input = new Input(css, opts);

    var parser = new Parser(input);
    try {
        parser.tokenize();
        parser.loop();
    } catch (e) {
        if (e.name === 'CssSyntaxError' && opts && opts.from) {
            if (/\.scss$/i.test(opts.from)) {
                e.message += '\nYou tried to parse SCSS with ' + 'the standard CSS parser; ' + 'try again with the postcss-scss parser';
            } else if (/\.less$/i.test(opts.from)) {
                e.message += '\nYou tried to parse Less with ' + 'the standard CSS parser; ' + 'try again with the postcss-less parser';
            }
        }
        throw e;
    }

    return parser.root;
}

function cleanSource(nodes) {
    return nodes.map(function (i) {
        if (i.nodes) i.nodes = cleanSource(i.nodes);
        delete i.source;
        return i;
    });
}

/**
 * @callback childCondition
 * @param {Node} node    - container child
 * @param {number} index - child index
 * @param {Node[]} nodes - all container children
 * @return {boolean}
 */

/**
 * @callback childIterator
 * @param {Node} node    - container child
 * @param {number} index - child index
 * @return {false|undefined} returning `false` will break iteration
 */

/**
 * The {@link Root}, {@link AtRule}, and {@link Rule} container nodes
 * inherit some common methods to help work with their children.
 *
 * Note that all containers can store any content. If you write a rule inside
 * a rule, PostCSS will parse it.
 *
 * @extends Node
 * @abstract
 */

var Container = function (_Node) {
    inherits(Container, _Node);

    function Container() {
        classCallCheck(this, Container);
        return possibleConstructorReturn(this, (Container.__proto__ || Object.getPrototypeOf(Container)).apply(this, arguments));
    }

    createClass(Container, [{
        key: 'push',
        value: function push(child) {
            child.parent = this;
            this.nodes.push(child);
            return this;
        }

        /**
         * Iterates through the container’s immediate children,
         * calling `callback` for each child.
         *
         * Returning `false` in the callback will break iteration.
         *
         * This method only iterates through the container’s immediate children.
         * If you need to recursively iterate through all the container’s descendant
         * nodes, use {@link Container#walk}.
         *
         * Unlike the for `{}`-cycle or `Array#forEach` this iterator is safe
         * if you are mutating the array of child nodes during iteration.
         * PostCSS will adjust the current index to match the mutations.
         *
         * @param {childIterator} callback - iterator receives each node and index
         *
         * @return {false|undefined} returns `false` if iteration was broke
         *
         * @example
         * const root = postcss.parse('a { color: black; z-index: 1 }');
         * const rule = root.first;
         *
         * for ( let decl of rule.nodes ) {
         *     decl.cloneBefore({ prop: '-webkit-' + decl.prop });
         *     // Cycle will be infinite, because cloneBefore moves the current node
         *     // to the next index
         * }
         *
         * rule.each(decl => {
         *     decl.cloneBefore({ prop: '-webkit-' + decl.prop });
         *     // Will be executed only for color and z-index
         * });
         */

    }, {
        key: 'each',
        value: function each(callback) {
            if (!this.lastEach) this.lastEach = 0;
            if (!this.indexes) this.indexes = {};

            this.lastEach += 1;
            var id = this.lastEach;
            this.indexes[id] = 0;

            if (!this.nodes) return undefined;

            var index = void 0,
                result = void 0;
            while (this.indexes[id] < this.nodes.length) {
                index = this.indexes[id];
                result = callback(this.nodes[index], index);
                if (result === false) break;

                this.indexes[id] += 1;
            }

            delete this.indexes[id];

            return result;
        }

        /**
         * Traverses the container’s descendant nodes, calling callback
         * for each node.
         *
         * Like container.each(), this method is safe to use
         * if you are mutating arrays during iteration.
         *
         * If you only need to iterate through the container’s immediate children,
         * use {@link Container#each}.
         *
         * @param {childIterator} callback - iterator receives each node and index
         *
         * @return {false|undefined} returns `false` if iteration was broke
         *
         * @example
         * root.walk(node => {
         *   // Traverses all descendant nodes.
         * });
         */

    }, {
        key: 'walk',
        value: function walk(callback) {
            return this.each(function (child, i) {
                var result = callback(child, i);
                if (result !== false && child.walk) {
                    result = child.walk(callback);
                }
                return result;
            });
        }

        /**
         * Traverses the container’s descendant nodes, calling callback
         * for each declaration node.
         *
         * If you pass a filter, iteration will only happen over declarations
         * with matching properties.
         *
         * Like {@link Container#each}, this method is safe
         * to use if you are mutating arrays during iteration.
         *
         * @param {string|RegExp} [prop]   - string or regular expression
         *                                   to filter declarations by property name
         * @param {childIterator} callback - iterator receives each node and index
         *
         * @return {false|undefined} returns `false` if iteration was broke
         *
         * @example
         * root.walkDecls(decl => {
         *   checkPropertySupport(decl.prop);
         * });
         *
         * root.walkDecls('border-radius', decl => {
         *   decl.remove();
         * });
         *
         * root.walkDecls(/^background/, decl => {
         *   decl.value = takeFirstColorFromGradient(decl.value);
         * });
         */

    }, {
        key: 'walkDecls',
        value: function walkDecls(prop, callback) {
            if (!callback) {
                callback = prop;
                return this.walk(function (child, i) {
                    if (child.type === 'decl') {
                        return callback(child, i);
                    }
                });
            } else if (prop instanceof RegExp) {
                return this.walk(function (child, i) {
                    if (child.type === 'decl' && prop.test(child.prop)) {
                        return callback(child, i);
                    }
                });
            } else {
                return this.walk(function (child, i) {
                    if (child.type === 'decl' && child.prop === prop) {
                        return callback(child, i);
                    }
                });
            }
        }

        /**
         * Traverses the container’s descendant nodes, calling callback
         * for each rule node.
         *
         * If you pass a filter, iteration will only happen over rules
         * with matching selectors.
         *
         * Like {@link Container#each}, this method is safe
         * to use if you are mutating arrays during iteration.
         *
         * @param {string|RegExp} [selector] - string or regular expression
         *                                     to filter rules by selector
         * @param {childIterator} callback   - iterator receives each node and index
         *
         * @return {false|undefined} returns `false` if iteration was broke
         *
         * @example
         * const selectors = [];
         * root.walkRules(rule => {
         *   selectors.push(rule.selector);
         * });
         * console.log(`Your CSS uses ${selectors.length} selectors`);
         */

    }, {
        key: 'walkRules',
        value: function walkRules(selector, callback) {
            if (!callback) {
                callback = selector;

                return this.walk(function (child, i) {
                    if (child.type === 'rule') {
                        return callback(child, i);
                    }
                });
            } else if (selector instanceof RegExp) {
                return this.walk(function (child, i) {
                    if (child.type === 'rule' && selector.test(child.selector)) {
                        return callback(child, i);
                    }
                });
            } else {
                return this.walk(function (child, i) {
                    if (child.type === 'rule' && child.selector === selector) {
                        return callback(child, i);
                    }
                });
            }
        }

        /**
         * Traverses the container’s descendant nodes, calling callback
         * for each at-rule node.
         *
         * If you pass a filter, iteration will only happen over at-rules
         * that have matching names.
         *
         * Like {@link Container#each}, this method is safe
         * to use if you are mutating arrays during iteration.
         *
         * @param {string|RegExp} [name]   - string or regular expression
         *                                   to filter at-rules by name
         * @param {childIterator} callback - iterator receives each node and index
         *
         * @return {false|undefined} returns `false` if iteration was broke
         *
         * @example
         * root.walkAtRules(rule => {
         *   if ( isOld(rule.name) ) rule.remove();
         * });
         *
         * let first = false;
         * root.walkAtRules('charset', rule => {
         *   if ( !first ) {
         *     first = true;
         *   } else {
         *     rule.remove();
         *   }
         * });
         */

    }, {
        key: 'walkAtRules',
        value: function walkAtRules(name, callback) {
            if (!callback) {
                callback = name;
                return this.walk(function (child, i) {
                    if (child.type === 'atrule') {
                        return callback(child, i);
                    }
                });
            } else if (name instanceof RegExp) {
                return this.walk(function (child, i) {
                    if (child.type === 'atrule' && name.test(child.name)) {
                        return callback(child, i);
                    }
                });
            } else {
                return this.walk(function (child, i) {
                    if (child.type === 'atrule' && child.name === name) {
                        return callback(child, i);
                    }
                });
            }
        }

        /**
         * Traverses the container’s descendant nodes, calling callback
         * for each comment node.
         *
         * Like {@link Container#each}, this method is safe
         * to use if you are mutating arrays during iteration.
         *
         * @param {childIterator} callback - iterator receives each node and index
         *
         * @return {false|undefined} returns `false` if iteration was broke
         *
         * @example
         * root.walkComments(comment => {
         *   comment.remove();
         * });
         */

    }, {
        key: 'walkComments',
        value: function walkComments(callback) {
            return this.walk(function (child, i) {
                if (child.type === 'comment') {
                    return callback(child, i);
                }
            });
        }

        /**
         * Inserts new nodes to the start of the container.
         *
         * @param {...(Node|object|string|Node[])} children - new nodes
         *
         * @return {Node} this node for methods chain
         *
         * @example
         * const decl1 = postcss.decl({ prop: 'color', value: 'black' });
         * const decl2 = postcss.decl({ prop: 'background-color', value: 'white' });
         * rule.append(decl1, decl2);
         *
         * root.append({ name: 'charset', params: '"UTF-8"' });  // at-rule
         * root.append({ selector: 'a' });                       // rule
         * rule.append({ prop: 'color', value: 'black' });       // declaration
         * rule.append({ text: 'Comment' })                      // comment
         *
         * root.append('a {}');
         * root.first.append('color: black; z-index: 1');
         */

    }, {
        key: 'append',
        value: function append() {
            var _this2 = this;

            for (var _len = arguments.length, children = Array(_len), _key = 0; _key < _len; _key++) {
                children[_key] = arguments[_key];
            }

            children.forEach(function (child) {
                var nodes = _this2.normalize(child, _this2.last);
                nodes.forEach(function (node) {
                    return _this2.nodes.push(node);
                });
            });
            return this;
        }

        /**
         * Inserts new nodes to the end of the container.
         *
         * @param {...(Node|object|string|Node[])} children - new nodes
         *
         * @return {Node} this node for methods chain
         *
         * @example
         * const decl1 = postcss.decl({ prop: 'color', value: 'black' });
         * const decl2 = postcss.decl({ prop: 'background-color', value: 'white' });
         * rule.prepend(decl1, decl2);
         *
         * root.append({ name: 'charset', params: '"UTF-8"' });  // at-rule
         * root.append({ selector: 'a' });                       // rule
         * rule.append({ prop: 'color', value: 'black' });       // declaration
         * rule.append({ text: 'Comment' })                      // comment
         *
         * root.append('a {}');
         * root.first.append('color: black; z-index: 1');
         */

    }, {
        key: 'prepend',
        value: function prepend() {
            var _this3 = this;

            for (var _len2 = arguments.length, children = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
                children[_key2] = arguments[_key2];
            }

            children = children.reverse();
            children.forEach(function (child) {
                var nodes = _this3.normalize(child, _this3.first, 'prepend').reverse();
                nodes.forEach(function (node) {
                    return _this3.nodes.unshift(node);
                });
                for (var id in _this3.indexes) {
                    _this3.indexes[id] = _this3.indexes[id] + nodes.length;
                }
            });
            return this;
        }
    }, {
        key: 'cleanRaws',
        value: function cleanRaws(keepBetween) {
            get$1(Container.prototype.__proto__ || Object.getPrototypeOf(Container.prototype), 'cleanRaws', this).call(this, keepBetween);
            if (this.nodes) {
                this.nodes.forEach(function (node) {
                    return node.cleanRaws(keepBetween);
                });
            }
        }

        /**
         * Insert new node before old node within the container.
         *
         * @param {Node|number} exist             - child or child’s index.
         * @param {Node|object|string|Node[]} add - new node
         *
         * @return {Node} this node for methods chain
         *
         * @example
         * rule.insertBefore(decl, decl.clone({ prop: '-webkit-' + decl.prop }));
         */

    }, {
        key: 'insertBefore',
        value: function insertBefore(exist, add) {
            var _this4 = this;

            exist = this.index(exist);

            var type = exist === 0 ? 'prepend' : false;
            var nodes = this.normalize(add, this.nodes[exist], type).reverse();
            nodes.forEach(function (node) {
                return _this4.nodes.splice(exist, 0, node);
            });

            var index = void 0;
            for (var id in this.indexes) {
                index = this.indexes[id];
                if (exist <= index) {
                    this.indexes[id] = index + nodes.length;
                }
            }

            return this;
        }

        /**
         * Insert new node after old node within the container.
         *
         * @param {Node|number} exist             - child or child’s index
         * @param {Node|object|string|Node[]} add - new node
         *
         * @return {Node} this node for methods chain
         */

    }, {
        key: 'insertAfter',
        value: function insertAfter(exist, add) {
            var _this5 = this;

            exist = this.index(exist);

            var nodes = this.normalize(add, this.nodes[exist]).reverse();
            nodes.forEach(function (node) {
                return _this5.nodes.splice(exist + 1, 0, node);
            });

            var index = void 0;
            for (var id in this.indexes) {
                index = this.indexes[id];
                if (exist < index) {
                    this.indexes[id] = index + nodes.length;
                }
            }

            return this;
        }
    }, {
        key: 'remove',
        value: function remove(child) {
            if (typeof child !== 'undefined') {
                warnOnce('Container#remove is deprecated. ' + 'Use Container#removeChild');
                this.removeChild(child);
            } else {
                get$1(Container.prototype.__proto__ || Object.getPrototypeOf(Container.prototype), 'remove', this).call(this);
            }
            return this;
        }

        /**
         * Removes node from the container and cleans the parent properties
         * from the node and its children.
         *
         * @param {Node|number} child - child or child’s index
         *
         * @return {Node} this node for methods chain
         *
         * @example
         * rule.nodes.length  //=> 5
         * rule.removeChild(decl);
         * rule.nodes.length  //=> 4
         * decl.parent        //=> undefined
         */

    }, {
        key: 'removeChild',
        value: function removeChild(child) {
            child = this.index(child);
            this.nodes[child].parent = undefined;
            this.nodes.splice(child, 1);

            var index = void 0;
            for (var id in this.indexes) {
                index = this.indexes[id];
                if (index >= child) {
                    this.indexes[id] = index - 1;
                }
            }

            return this;
        }

        /**
         * Removes all children from the container
         * and cleans their parent properties.
         *
         * @return {Node} this node for methods chain
         *
         * @example
         * rule.removeAll();
         * rule.nodes.length //=> 0
         */

    }, {
        key: 'removeAll',
        value: function removeAll() {
            this.nodes.forEach(function (node) {
                return node.parent = undefined;
            });
            this.nodes = [];
            return this;
        }

        /**
         * Passes all declaration values within the container that match pattern
         * through callback, replacing those values with the returned result
         * of callback.
         *
         * This method is useful if you are using a custom unit or function
         * and need to iterate through all values.
         *
         * @param {string|RegExp} pattern      - replace pattern
         * @param {object} opts                - options to speed up the search
         * @param {string|string[]} opts.props - an array of property names
         * @param {string} opts.fast           - string that’s used
         *                                       to narrow down values and speed up
                                                 the regexp search
         * @param {function|string} callback   - string to replace pattern
         *                                       or callback that returns a new
         *                                       value.
         *                                       The callback will receive
         *                                       the same arguments as those
         *                                       passed to a function parameter
         *                                       of `String#replace`.
         *
         * @return {Node} this node for methods chain
         *
         * @example
         * root.replaceValues(/\d+rem/, { fast: 'rem' }, string => {
         *   return 15 * parseInt(string) + 'px';
         * });
         */

    }, {
        key: 'replaceValues',
        value: function replaceValues(pattern, opts, callback) {
            if (!callback) {
                callback = opts;
                opts = {};
            }

            this.walkDecls(function (decl) {
                if (opts.props && opts.props.indexOf(decl.prop) === -1) return;
                if (opts.fast && decl.value.indexOf(opts.fast) === -1) return;

                decl.value = decl.value.replace(pattern, callback);
            });

            return this;
        }

        /**
         * Returns `true` if callback returns `true`
         * for all of the container’s children.
         *
         * @param {childCondition} condition - iterator returns true or false.
         *
         * @return {boolean} is every child pass condition
         *
         * @example
         * const noPrefixes = rule.every(i => i.prop[0] !== '-');
         */

    }, {
        key: 'every',
        value: function every(condition) {
            return this.nodes.every(condition);
        }

        /**
         * Returns `true` if callback returns `true` for (at least) one
         * of the container’s children.
         *
         * @param {childCondition} condition - iterator returns true or false.
         *
         * @return {boolean} is some child pass condition
         *
         * @example
         * const hasPrefix = rule.some(i => i.prop[0] === '-');
         */

    }, {
        key: 'some',
        value: function some(condition) {
            return this.nodes.some(condition);
        }

        /**
         * Returns a `child`’s index within the {@link Container#nodes} array.
         *
         * @param {Node} child - child of the current container.
         *
         * @return {number} child index
         *
         * @example
         * rule.index( rule.nodes[2] ) //=> 2
         */

    }, {
        key: 'index',
        value: function index(child) {
            if (typeof child === 'number') {
                return child;
            } else {
                return this.nodes.indexOf(child);
            }
        }

        /**
         * The container’s first child.
         *
         * @type {Node}
         *
         * @example
         * rule.first == rules.nodes[0];
         */

    }, {
        key: 'normalize',
        value: function normalize(nodes, sample) {
            var _this6 = this;

            if (typeof nodes === 'string') {
                nodes = cleanSource(parse(nodes).nodes);
            } else if (!Array.isArray(nodes)) {
                if (nodes.type === 'root') {
                    nodes = nodes.nodes;
                } else if (nodes.type) {
                    nodes = [nodes];
                } else if (nodes.prop) {
                    if (typeof nodes.value === 'undefined') {
                        throw new Error('Value field is missed in node creation');
                    } else if (typeof nodes.value !== 'string') {
                        nodes.value = String(nodes.value);
                    }
                    nodes = [new Declaration(nodes)];
                } else if (nodes.selector) {
                    nodes = [new Rule(nodes)];
                } else if (nodes.name) {
                    nodes = [new AtRule(nodes)];
                } else if (nodes.text) {
                    nodes = [new Comment(nodes)];
                } else {
                    throw new Error('Unknown node type in node creation');
                }
            }

            var processed = nodes.map(function (i) {
                if (typeof i.raws === 'undefined') i = _this6.rebuild(i);

                if (i.parent) i = i.clone();
                if (typeof i.raws.before === 'undefined') {
                    if (sample && typeof sample.raws.before !== 'undefined') {
                        i.raws.before = sample.raws.before.replace(/[^\s]/g, '');
                    }
                }
                i.parent = _this6;
                return i;
            });

            return processed;
        }
    }, {
        key: 'rebuild',
        value: function rebuild(node, parent) {
            var _this7 = this;

            var fix = void 0;
            if (node.type === 'root') {
                fix = new Root();
            } else if (node.type === 'atrule') {
                fix = new AtRule();
            } else if (node.type === 'rule') {
                fix = new Rule();
            } else if (node.type === 'decl') {
                fix = new Declaration();
            } else if (node.type === 'comment') {
                fix = new Comment();
            }

            for (var i in node) {
                if (i === 'nodes') {
                    fix.nodes = node.nodes.map(function (j) {
                        return _this7.rebuild(j, fix);
                    });
                } else if (i === 'parent' && parent) {
                    fix.parent = parent;
                } else if (node.hasOwnProperty(i)) {
                    fix[i] = node[i];
                }
            }

            return fix;
        }
    }, {
        key: 'eachInside',
        value: function eachInside(callback) {
            warnOnce('Container#eachInside is deprecated. ' + 'Use Container#walk instead.');
            return this.walk(callback);
        }
    }, {
        key: 'eachDecl',
        value: function eachDecl(prop, callback) {
            warnOnce('Container#eachDecl is deprecated. ' + 'Use Container#walkDecls instead.');
            return this.walkDecls(prop, callback);
        }
    }, {
        key: 'eachRule',
        value: function eachRule(selector, callback) {
            warnOnce('Container#eachRule is deprecated. ' + 'Use Container#walkRules instead.');
            return this.walkRules(selector, callback);
        }
    }, {
        key: 'eachAtRule',
        value: function eachAtRule(name, callback) {
            warnOnce('Container#eachAtRule is deprecated. ' + 'Use Container#walkAtRules instead.');
            return this.walkAtRules(name, callback);
        }
    }, {
        key: 'eachComment',
        value: function eachComment(callback) {
            warnOnce('Container#eachComment is deprecated. ' + 'Use Container#walkComments instead.');
            return this.walkComments(callback);
        }
    }, {
        key: 'first',
        get: function get() {
            if (!this.nodes) return undefined;
            return this.nodes[0];
        }

        /**
         * The container’s last child.
         *
         * @type {Node}
         *
         * @example
         * rule.last == rule.nodes[rule.nodes.length - 1];
         */

    }, {
        key: 'last',
        get: function get() {
            if (!this.nodes) return undefined;
            return this.nodes[this.nodes.length - 1];
        }
    }, {
        key: 'semicolon',
        get: function get() {
            warnOnce('Node#semicolon is deprecated. Use Node#raws.semicolon');
            return this.raws.semicolon;
        },
        set: function set(val) {
            warnOnce('Node#semicolon is deprecated. Use Node#raws.semicolon');
            this.raws.semicolon = val;
        }
    }, {
        key: 'after',
        get: function get() {
            warnOnce('Node#after is deprecated. Use Node#raws.after');
            return this.raws.after;
        },
        set: function set(val) {
            warnOnce('Node#after is deprecated. Use Node#raws.after');
            this.raws.after = val;
        }

        /**
         * @memberof Container#
         * @member {Node[]} nodes - an array containing the container’s children
         *
         * @example
         * const root = postcss.parse('a { color: black }');
         * root.nodes.length           //=> 1
         * root.nodes[0].selector      //=> 'a'
         * root.nodes[0].nodes[0].prop //=> 'color'
         */

    }]);
    return Container;
}(Node);

/**
 * Represents an at-rule.
 *
 * If it’s followed in the CSS by a {} block, this node will have
 * a nodes property representing its children.
 *
 * @extends Container
 *
 * @example
 * const root = postcss.parse('@charset "UTF-8"; @media print {}');
 *
 * const charset = root.first;
 * charset.type  //=> 'atrule'
 * charset.nodes //=> undefined
 *
 * const media = root.last;
 * media.nodes   //=> []
 */

var AtRule = function (_Container) {
    inherits(AtRule, _Container);

    function AtRule(defaults$$1) {
        classCallCheck(this, AtRule);

        var _this = possibleConstructorReturn(this, (AtRule.__proto__ || Object.getPrototypeOf(AtRule)).call(this, defaults$$1));

        _this.type = 'atrule';
        return _this;
    }

    createClass(AtRule, [{
        key: 'append',
        value: function append() {
            var _babelHelpers$get;

            if (!this.nodes) this.nodes = [];

            for (var _len = arguments.length, children = Array(_len), _key = 0; _key < _len; _key++) {
                children[_key] = arguments[_key];
            }

            return (_babelHelpers$get = get$1(AtRule.prototype.__proto__ || Object.getPrototypeOf(AtRule.prototype), 'append', this)).call.apply(_babelHelpers$get, [this].concat(children));
        }
    }, {
        key: 'prepend',
        value: function prepend() {
            var _babelHelpers$get2;

            if (!this.nodes) this.nodes = [];

            for (var _len2 = arguments.length, children = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
                children[_key2] = arguments[_key2];
            }

            return (_babelHelpers$get2 = get$1(AtRule.prototype.__proto__ || Object.getPrototypeOf(AtRule.prototype), 'prepend', this)).call.apply(_babelHelpers$get2, [this].concat(children));
        }
    }, {
        key: 'afterName',
        get: function get() {
            warnOnce('AtRule#afterName was deprecated. Use AtRule#raws.afterName');
            return this.raws.afterName;
        },
        set: function set(val) {
            warnOnce('AtRule#afterName was deprecated. Use AtRule#raws.afterName');
            this.raws.afterName = val;
        }
    }, {
        key: '_params',
        get: function get() {
            warnOnce('AtRule#_params was deprecated. Use AtRule#raws.params');
            return this.raws.params;
        },
        set: function set(val) {
            warnOnce('AtRule#_params was deprecated. Use AtRule#raws.params');
            this.raws.params = val;
        }

        /**
         * @memberof AtRule#
         * @member {string} name - the at-rule’s name immediately follows the `@`
         *
         * @example
         * const root  = postcss.parse('@media print {}');
         * media.name //=> 'media'
         * const media = root.first;
         */

        /**
         * @memberof AtRule#
         * @member {string} params - the at-rule’s parameters, the values
         *                           that follow the at-rule’s name but precede
         *                           any {} block
         *
         * @example
         * const root  = postcss.parse('@media print, screen {}');
         * const media = root.first;
         * media.params //=> 'print, screen'
         */

        /**
         * @memberof AtRule#
         * @member {object} raws - Information to generate byte-to-byte equal
         *                         node string as it was in the origin input.
         *
         * Every parser saves its own properties,
         * but the default CSS parser uses:
         *
         * * `before`: the space symbols before the node. It also stores `*`
         *   and `_` symbols before the declaration (IE hack).
         * * `after`: the space symbols after the last child of the node
         *   to the end of the node.
         * * `between`: the symbols between the property and value
         *   for declarations, selector and `{` for rules, or last parameter
         *   and `{` for at-rules.
         * * `semicolon`: contains true if the last child has
         *   an (optional) semicolon.
         * * `afterName`: the space between the at-rule name and its parameters.
         *
         * PostCSS cleans at-rule parameters from comments and extra spaces,
         * but it stores origin content in raws properties.
         * As such, if you don’t change a declaration’s value,
         * PostCSS will use the raw value with comments.
         *
         * @example
         * const root = postcss.parse('  @media\nprint {\n}')
         * root.first.first.raws //=> { before: '  ',
         *                       //     between: ' ',
         *                       //     afterName: '\n',
         *                       //     after: '\n' }
         */

    }]);
    return AtRule;
}(Container);

/**
 * Contains helpers for safely splitting lists of CSS values,
 * preserving parentheses and quotes.
 *
 * @example
 * const list = postcss.list;
 *
 * @namespace list
 */
var list = {
    split: function split(string, separators, last) {
        var array = [];
        var current = '';
        var split = false;

        var func = 0;
        var quote = false;
        var escape = false;

        for (var i = 0; i < string.length; i++) {
            var letter = string[i];

            if (quote) {
                if (escape) {
                    escape = false;
                } else if (letter === '\\') {
                    escape = true;
                } else if (letter === quote) {
                    quote = false;
                }
            } else if (letter === '"' || letter === '\'') {
                quote = letter;
            } else if (letter === '(') {
                func += 1;
            } else if (letter === ')') {
                if (func > 0) func -= 1;
            } else if (func === 0) {
                if (separators.indexOf(letter) !== -1) split = true;
            }

            if (split) {
                if (current !== '') array.push(current.trim());
                current = '';
                split = false;
            } else {
                current += letter;
            }
        }

        if (last || current !== '') array.push(current.trim());
        return array;
    },


    /**
     * Safely splits space-separated values (such as those for `background`,
     * `border-radius`, and other shorthand properties).
     *
     * @param {string} string - space-separated values
     *
     * @return {string[]} splitted values
     *
     * @example
     * postcss.list.space('1px calc(10% + 1px)') //=> ['1px', 'calc(10% + 1px)']
     */
    space: function space(string) {
        var spaces = [' ', '\n', '\t'];
        return list.split(string, spaces);
    },


    /**
     * Safely splits comma-separated values (such as those for `transition-*`
     * and `background` properties).
     *
     * @param {string} string - comma-separated values
     *
     * @return {string[]} splitted values
     *
     * @example
     * postcss.list.comma('black, linear-gradient(white, black)')
     * //=> ['black', 'linear-gradient(white, black)']
     */
    comma: function comma(string) {
        var comma = ',';
        return list.split(string, [comma], true);
    }
};

/**
 * Represents a CSS rule: a selector followed by a declaration block.
 *
 * @extends Container
 *
 * @example
 * const root = postcss.parse('a{}');
 * const rule = root.first;
 * rule.type       //=> 'rule'
 * rule.toString() //=> 'a{}'
 */

var Rule = function (_Container) {
    inherits(Rule, _Container);

    function Rule(defaults$$1) {
        classCallCheck(this, Rule);

        var _this = possibleConstructorReturn(this, (Rule.__proto__ || Object.getPrototypeOf(Rule)).call(this, defaults$$1));

        _this.type = 'rule';
        if (!_this.nodes) _this.nodes = [];
        return _this;
    }

    /**
     * An array containing the rule’s individual selectors.
     * Groups of selectors are split at commas.
     *
     * @type {string[]}
     *
     * @example
     * const root = postcss.parse('a, b { }');
     * const rule = root.first;
     *
     * rule.selector  //=> 'a, b'
     * rule.selectors //=> ['a', 'b']
     *
     * rule.selectors = ['a', 'strong'];
     * rule.selector //=> 'a, strong'
     */


    createClass(Rule, [{
        key: 'selectors',
        get: function get() {
            return list.comma(this.selector);
        },
        set: function set(values) {
            var match = this.selector ? this.selector.match(/,\s*/) : null;
            var sep = match ? match[0] : ',' + this.raw('between', 'beforeOpen');
            this.selector = values.join(sep);
        }
    }, {
        key: '_selector',
        get: function get() {
            warnOnce('Rule#_selector is deprecated. Use Rule#raws.selector');
            return this.raws.selector;
        },
        set: function set(val) {
            warnOnce('Rule#_selector is deprecated. Use Rule#raws.selector');
            this.raws.selector = val;
        }

        /**
         * @memberof Rule#
         * @member {string} selector - the rule’s full selector represented
         *                             as a string
         *
         * @example
         * const root = postcss.parse('a, b { }');
         * const rule = root.first;
         * rule.selector //=> 'a, b'
         */

        /**
         * @memberof Rule#
         * @member {object} raws - Information to generate byte-to-byte equal
         *                         node string as it was in the origin input.
         *
         * Every parser saves its own properties,
         * but the default CSS parser uses:
         *
         * * `before`: the space symbols before the node. It also stores `*`
         *   and `_` symbols before the declaration (IE hack).
         * * `after`: the space symbols after the last child of the node
         *   to the end of the node.
         * * `between`: the symbols between the property and value
         *   for declarations, selector and `{` for rules, or last parameter
         *   and `{` for at-rules.
         * * `semicolon`: contains true if the last child has
         *   an (optional) semicolon.
         *
         * PostCSS cleans selectors from comments and extra spaces,
         * but it stores origin content in raws properties.
         * As such, if you don’t change a declaration’s value,
         * PostCSS will use the raw value with comments.
         *
         * @example
         * const root = postcss.parse('a {\n  color:black\n}')
         * root.first.first.raws //=> { before: '', between: ' ', after: '\n' }
         */

    }]);
    return Rule;
}(Container);

/**
 * Represents a plugin’s warning. It can be created using {@link Node#warn}.
 *
 * @example
 * if ( decl.important ) {
 *     decl.warn(result, 'Avoid !important', { word: '!important' });
 * }
 */
var Warning = function () {

  /**
   * @param {string} text        - warning message
   * @param {Object} [opts]      - warning options
   * @param {Node}   opts.node   - CSS node that caused the warning
   * @param {string} opts.word   - word in CSS source that caused the warning
   * @param {number} opts.index  - index in CSS node string that caused
   *                               the warning
   * @param {string} opts.plugin - name of the plugin that created
   *                               this warning. {@link Result#warn} fills
   *                               this property automatically.
   */
  function Warning(text) {
    var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    classCallCheck(this, Warning);

    /**
     * @member {string} - Type to filter warnings from
     *                    {@link Result#messages}. Always equal
     *                    to `"warning"`.
     *
     * @example
     * const nonWarning = result.messages.filter(i => i.type !== 'warning')
     */
    this.type = 'warning';
    /**
     * @member {string} - The warning message.
     *
     * @example
     * warning.text //=> 'Try to avoid !important'
     */
    this.text = text;

    if (opts.node && opts.node.source) {
      var pos = opts.node.positionBy(opts);
      /**
       * @member {number} - Line in the input file
       *                    with this warning’s source
       *
       * @example
       * warning.line //=> 5
       */
      this.line = pos.line;
      /**
       * @member {number} - Column in the input file
       *                    with this warning’s source.
       *
       * @example
       * warning.column //=> 6
       */
      this.column = pos.column;
    }

    for (var opt in opts) {
      this[opt] = opts[opt];
    }
  }

  /**
   * Returns a warning position and message.
   *
   * @example
   * warning.toString() //=> 'postcss-lint:a.css:10:14: Avoid !important'
   *
   * @return {string} warning position and message
   */


  createClass(Warning, [{
    key: 'toString',
    value: function toString() {
      if (this.node) {
        return this.node.error(this.text, {
          plugin: this.plugin,
          index: this.index,
          word: this.word
        }).message;
      } else if (this.plugin) {
        return this.plugin + ': ' + this.text;
      } else {
        return this.text;
      }
    }

    /**
     * @memberof Warning#
     * @member {string} plugin - The name of the plugin that created
     *                           it will fill this property automatically.
     *                           this warning. When you call {@link Node#warn}
     *
     * @example
     * warning.plugin //=> 'postcss-important'
     */

    /**
     * @memberof Warning#
     * @member {Node} node - Contains the CSS node that caused the warning.
     *
     * @example
     * warning.node.toString() //=> 'color: white !important'
     */

  }]);
  return Warning;
}();

/**
 * @typedef  {object} Message
 * @property {string} type   - message type
 * @property {string} plugin - source PostCSS plugin name
 */

/**
 * Provides the result of the PostCSS transformations.
 *
 * A Result instance is returned by {@link LazyResult#then}
 * or {@link Root#toResult} methods.
 *
 * @example
 * postcss([cssnext]).process(css).then(function (result) {
 *    console.log(result.css);
 * });
 *
 * @example
 * var result2 = postcss.parse(css).toResult();
 */

var Result = function () {

  /**
   * @param {Processor} processor - processor used for this transformation.
   * @param {Root}      root      - Root node after all transformations.
   * @param {processOptions} opts - options from the {@link Processor#process}
   *                                or {@link Root#toResult}
   */
  function Result(processor, root, opts) {
    classCallCheck(this, Result);

    /**
     * @member {Processor} - The Processor instance used
     *                       for this transformation.
     *
     * @example
     * for ( let plugin of result.processor.plugins) {
     *   if ( plugin.postcssPlugin === 'postcss-bad' ) {
     *     throw 'postcss-good is incompatible with postcss-bad';
     *   }
     * });
     */
    this.processor = processor;
    /**
     * @member {Message[]} - Contains messages from plugins
     *                       (e.g., warnings or custom messages).
     *                       Each message should have type
     *                       and plugin properties.
     *
     * @example
     * postcss.plugin('postcss-min-browser', () => {
     *   return (root, result) => {
     *     var browsers = detectMinBrowsersByCanIUse(root);
     *     result.messages.push({
     *       type:    'min-browser',
     *       plugin:  'postcss-min-browser',
     *       browsers: browsers
     *     });
     *   };
     * });
     */
    this.messages = [];
    /**
     * @member {Root} - Root node after all transformations.
     *
     * @example
     * root.toResult().root == root;
     */
    this.root = root;
    /**
     * @member {processOptions} - Options from the {@link Processor#process}
     *                            or {@link Root#toResult} call
     *                            that produced this Result instance.
     *
     * @example
     * root.toResult(opts).opts == opts;
     */
    this.opts = opts;
    /**
     * @member {string} - A CSS string representing of {@link Result#root}.
     *
     * @example
     * postcss.parse('a{}').toResult().css //=> "a{}"
     */
    this.css = undefined;
    /**
     * @member {SourceMapGenerator} - An instance of `SourceMapGenerator`
     *                                class from the `source-map` library,
     *                                representing changes
     *                                to the {@link Result#root} instance.
     *
     * @example
     * result.map.toJSON() //=> { version: 3, file: 'a.css', … }
     *
     * @example
     * if ( result.map ) {
     *   fs.writeFileSync(result.opts.to + '.map', result.map.toString());
     * }
     */
    this.map = undefined;
  }

  /**
   * Returns for @{link Result#css} content.
   *
   * @example
   * result + '' === result.css
   *
   * @return {string} string representing of {@link Result#root}
   */


  createClass(Result, [{
    key: 'toString',
    value: function toString() {
      return this.css;
    }

    /**
     * Creates an instance of {@link Warning} and adds it
     * to {@link Result#messages}.
     *
     * @param {string} text        - warning message
     * @param {Object} [opts]      - warning options
     * @param {Node}   opts.node   - CSS node that caused the warning
     * @param {string} opts.word   - word in CSS source that caused the warning
     * @param {number} opts.index  - index in CSS node string that caused
     *                               the warning
     * @param {string} opts.plugin - name of the plugin that created
     *                               this warning. {@link Result#warn} fills
     *                               this property automatically.
     *
     * @return {Warning} created warning
     */

  }, {
    key: 'warn',
    value: function warn(text) {
      var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      if (!opts.plugin) {
        if (this.lastPlugin && this.lastPlugin.postcssPlugin) {
          opts.plugin = this.lastPlugin.postcssPlugin;
        }
      }

      var warning = new Warning(text, opts);
      this.messages.push(warning);

      return warning;
    }

    /**
     * Returns warnings from plugins. Filters {@link Warning} instances
     * from {@link Result#messages}.
     *
     * @example
     * result.warnings().forEach(warn => {
     *   console.warn(warn.toString());
     * });
     *
     * @return {Warning[]} warnings from plugins
     */

  }, {
    key: 'warnings',
    value: function warnings() {
      return this.messages.filter(function (i) {
        return i.type === 'warning';
      });
    }

    /**
     * An alias for the {@link Result#css} property.
     * Use it with syntaxes that generate non-CSS output.
     * @type {string}
     *
     * @example
     * result.css === result.content;
     */

  }, {
    key: 'content',
    get: function get() {
      return this.css;
    }
  }]);
  return Result;
}();

function isPromise(obj) {
    return (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object' && typeof obj.then === 'function';
}

/**
 * @callback onFulfilled
 * @param {Result} result
 */

/**
 * @callback onRejected
 * @param {Error} error
 */

/**
 * A Promise proxy for the result of PostCSS transformations.
 *
 * A `LazyResult` instance is returned by {@link Processor#process}.
 *
 * @example
 * const lazy = postcss([cssnext]).process(css);
 */

var LazyResult = function () {
    function LazyResult(processor, css, opts) {
        classCallCheck(this, LazyResult);

        this.stringified = false;
        this.processed = false;

        var root = void 0;
        if ((typeof css === 'undefined' ? 'undefined' : _typeof(css)) === 'object' && css.type === 'root') {
            root = css;
        } else if (css instanceof LazyResult || css instanceof Result) {
            root = css.root;
            if (css.map) {
                if (typeof opts.map === 'undefined') opts.map = {};
                if (!opts.map.inline) opts.map.inline = false;
                opts.map.prev = css.map;
            }
        } else {
            var parser = parse;
            if (opts.syntax) parser = opts.syntax.parse;
            if (opts.parser) parser = opts.parser;
            if (parser.parse) parser = parser.parse;

            try {
                root = parser(css, opts);
            } catch (error) {
                this.error = error;
            }
        }

        this.result = new Result(processor, root, opts);
    }

    /**
     * Returns a {@link Processor} instance, which will be used
     * for CSS transformations.
     * @type {Processor}
     */


    createClass(LazyResult, [{
        key: 'warnings',


        /**
         * Processes input CSS through synchronous plugins
         * and calls {@link Result#warnings()}.
         *
         * @return {Warning[]} warnings from plugins
         */
        value: function warnings() {
            return this.sync().warnings();
        }

        /**
         * Alias for the {@link LazyResult#css} property.
         *
         * @example
         * lazy + '' === lazy.css;
         *
         * @return {string} output CSS
         */

    }, {
        key: 'toString',
        value: function toString() {
            return this.css;
        }

        /**
         * Processes input CSS through synchronous and asynchronous plugins
         * and calls `onFulfilled` with a Result instance. If a plugin throws
         * an error, the `onRejected` callback will be executed.
         *
         * It implements standard Promise API.
         *
         * @param {onFulfilled} onFulfilled - callback will be executed
         *                                    when all plugins will finish work
         * @param {onRejected}  onRejected  - callback will be execited on any error
         *
         * @return {Promise} Promise API to make queue
         *
         * @example
         * postcss([cssnext]).process(css).then(result => {
         *   console.log(result.css);
         * });
         */

    }, {
        key: 'then',
        value: function then(onFulfilled, onRejected) {
            return this.async().then(onFulfilled, onRejected);
        }

        /**
         * Processes input CSS through synchronous and asynchronous plugins
         * and calls onRejected for each error thrown in any plugin.
         *
         * It implements standard Promise API.
         *
         * @param {onRejected} onRejected - callback will be execited on any error
         *
         * @return {Promise} Promise API to make queue
         *
         * @example
         * postcss([cssnext]).process(css).then(result => {
         *   console.log(result.css);
         * }).catch(error => {
         *   console.error(error);
         * });
         */

    }, {
        key: 'catch',
        value: function _catch(onRejected) {
            return this.async().catch(onRejected);
        }
    }, {
        key: 'handleError',
        value: function handleError(error, plugin) {
            try {
                this.error = error;
                if (error.name === 'CssSyntaxError' && !error.plugin) {
                    error.plugin = plugin.postcssPlugin;
                    error.setMessage();
                } else if (plugin.postcssVersion) {
                    var pluginName = plugin.postcssPlugin;
                    var pluginVer = plugin.postcssVersion;
                    var runtimeVer = this.result.processor.version;
                    var a = pluginVer.split('.');
                    var b = runtimeVer.split('.');

                    if (a[0] !== b[0] || parseInt(a[1]) > parseInt(b[1])) {
                        warnOnce('Your current PostCSS version ' + 'is ' + runtimeVer + ', but ' + pluginName + ' ' + 'uses ' + pluginVer + '. Perhaps this is ' + 'the source of the error below.');
                    }
                }
            } catch (err) {
                if (console && console.error) console.error(err);
            }
        }
    }, {
        key: 'asyncTick',
        value: function asyncTick(resolve, reject) {
            var _this = this;

            if (this.plugin >= this.processor.plugins.length) {
                this.processed = true;
                return resolve();
            }

            try {
                var plugin = this.processor.plugins[this.plugin];
                var promise = this.run(plugin);
                this.plugin += 1;

                if (isPromise(promise)) {
                    promise.then(function () {
                        _this.asyncTick(resolve, reject);
                    }).catch(function (error) {
                        _this.handleError(error, plugin);
                        _this.processed = true;
                        reject(error);
                    });
                } else {
                    this.asyncTick(resolve, reject);
                }
            } catch (error) {
                this.processed = true;
                reject(error);
            }
        }
    }, {
        key: 'async',
        value: function async() {
            var _this2 = this;

            if (this.processed) {
                return new Promise(function (resolve, reject) {
                    if (_this2.error) {
                        reject(_this2.error);
                    } else {
                        resolve(_this2.stringify());
                    }
                });
            }
            if (this.processing) {
                return this.processing;
            }

            this.processing = new Promise(function (resolve, reject) {
                if (_this2.error) return reject(_this2.error);
                _this2.plugin = 0;
                _this2.asyncTick(resolve, reject);
            }).then(function () {
                _this2.processed = true;
                return _this2.stringify();
            });

            return this.processing;
        }
    }, {
        key: 'sync',
        value: function sync() {
            var _this3 = this;

            if (this.processed) return this.result;
            this.processed = true;

            if (this.processing) {
                throw new Error('Use process(css).then(cb) to work with async plugins');
            }

            if (this.error) throw this.error;

            this.result.processor.plugins.forEach(function (plugin) {
                var promise = _this3.run(plugin);
                if (isPromise(promise)) {
                    throw new Error('Use process(css).then(cb) to work with async plugins');
                }
            });

            return this.result;
        }
    }, {
        key: 'run',
        value: function run(plugin) {
            this.result.lastPlugin = plugin;

            try {
                return plugin(this.result.root, this.result);
            } catch (error) {
                this.handleError(error, plugin);
                throw error;
            }
        }
    }, {
        key: 'stringify',
        value: function stringify() {
            if (this.stringified) return this.result;
            this.stringified = true;

            this.sync();

            var opts = this.result.opts;
            var str = stringify$1;
            if (opts.syntax) str = opts.syntax.stringify;
            if (opts.stringifier) str = opts.stringifier;
            if (str.stringify) str = str.stringify;

            var result = '';
            str(this.root, function (i) {
                result += i;
            });
            this.result.css = result;

            return this.result;
        }
    }, {
        key: 'processor',
        get: function get() {
            return this.result.processor;
        }

        /**
         * Options from the {@link Processor#process} call.
         * @type {processOptions}
         */

    }, {
        key: 'opts',
        get: function get() {
            return this.result.opts;
        }

        /**
         * Processes input CSS through synchronous plugins, converts `Root`
         * to a CSS string and returns {@link Result#css}.
         *
         * This property will only work with synchronous plugins.
         * If the processor contains any asynchronous plugins
         * it will throw an error. This is why this method is only
         * for debug purpose, you should always use {@link LazyResult#then}.
         *
         * @type {string}
         * @see Result#css
         */

    }, {
        key: 'css',
        get: function get() {
            return this.stringify().css;
        }

        /**
         * An alias for the `css` property. Use it with syntaxes
         * that generate non-CSS output.
         *
         * This property will only work with synchronous plugins.
         * If the processor contains any asynchronous plugins
         * it will throw an error. This is why this method is only
         * for debug purpose, you should always use {@link LazyResult#then}.
         *
         * @type {string}
         * @see Result#content
         */

    }, {
        key: 'content',
        get: function get() {
            return this.stringify().content;
        }

        /**
         * Processes input CSS through synchronous plugins
         * and returns {@link Result#map}.
         *
         * This property will only work with synchronous plugins.
         * If the processor contains any asynchronous plugins
         * it will throw an error. This is why this method is only
         * for debug purpose, you should always use {@link LazyResult#then}.
         *
         * @type {SourceMapGenerator}
         * @see Result#map
         */

    }, {
        key: 'map',
        get: function get() {
            return this.stringify().map;
        }

        /**
         * Processes input CSS through synchronous plugins
         * and returns {@link Result#root}.
         *
         * This property will only work with synchronous plugins. If the processor
         * contains any asynchronous plugins it will throw an error.
         *
         * This is why this method is only for debug purpose,
         * you should always use {@link LazyResult#then}.
         *
         * @type {Root}
         * @see Result#root
         */

    }, {
        key: 'root',
        get: function get() {
            return this.sync().root;
        }

        /**
         * Processes input CSS through synchronous plugins
         * and returns {@link Result#messages}.
         *
         * This property will only work with synchronous plugins. If the processor
         * contains any asynchronous plugins it will throw an error.
         *
         * This is why this method is only for debug purpose,
         * you should always use {@link LazyResult#then}.
         *
         * @type {Message[]}
         * @see Result#messages
         */

    }, {
        key: 'messages',
        get: function get() {
            return this.sync().messages;
        }
    }]);
    return LazyResult;
}();

/**
 * @callback builder
 * @param {string} part          - part of generated CSS connected to this node
 * @param {Node}   node          - AST node
 * @param {"start"|"end"} [type] - node’s part type
 */

/**
 * @callback parser
 *
 * @param {string|toString} css   - string with input CSS or any object
 *                                  with toString() method, like a Buffer
 * @param {processOptions} [opts] - options with only `from` and `map` keys
 *
 * @return {Root} PostCSS AST
 */

/**
 * @callback stringifier
 *
 * @param {Node} node       - start node for stringifing. Usually {@link Root}.
 * @param {builder} builder - function to concatenate CSS from node’s parts
 *                            or generate string and source map
 *
 * @return {void}
 */

/**
 * @typedef {object} syntax
 * @property {parser} parse          - function to generate AST by string
 * @property {stringifier} stringify - function to generate string by AST
 */

/**
 * @typedef {object} toString
 * @property {function} toString
 */

/**
 * @callback pluginFunction
 * @param {Root} root     - parsed input CSS
 * @param {Result} result - result to set warnings or check other plugins
 */

/**
 * @typedef {object} Plugin
 * @property {function} postcss - PostCSS plugin function
 */

/**
 * @typedef {object} processOptions
 * @property {string} from             - the path of the CSS source file.
 *                                       You should always set `from`,
 *                                       because it is used in source map
 *                                       generation and syntax error messages.
 * @property {string} to               - the path where you’ll put the output
 *                                       CSS file. You should always set `to`
 *                                       to generate correct source maps.
 * @property {parser} parser           - function to generate AST by string
 * @property {stringifier} stringifier - class to generate string by AST
 * @property {syntax} syntax           - object with `parse` and `stringify`
 * @property {object} map              - source map options
 * @property {boolean} map.inline                    - does source map should
 *                                                     be embedded in the output
 *                                                     CSS as a base64-encoded
 *                                                     comment
 * @property {string|object|false|function} map.prev - source map content
 *                                                     from a previous
 *                                                     processing step
 *                                                     (for example, Sass).
 *                                                     PostCSS will try to find
 *                                                     previous map
 *                                                     automatically, so you
 *                                                     could disable it by
 *                                                     `false` value.
 * @property {boolean} map.sourcesContent            - does PostCSS should set
 *                                                     the origin content to map
 * @property {string|false} map.annotation           - does PostCSS should set
 *                                                     annotation comment to map
 * @property {string} map.from                       - override `from` in map’s
 *                                                     `sources`
 */

/**
 * Contains plugins to process CSS. Create one `Processor` instance,
 * initialize its plugins, and then use that instance on numerous CSS files.
 *
 * @example
 * const processor = postcss([autoprefixer, precss]);
 * processor.process(css1).then(result => console.log(result.css));
 * processor.process(css2).then(result => console.log(result.css));
 */

var Processor = function () {

  /**
   * @param {Array.<Plugin|pluginFunction>|Processor} plugins - PostCSS
   *        plugins. See {@link Processor#use} for plugin format.
   */
  function Processor() {
    var plugins = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    classCallCheck(this, Processor);

    /**
     * @member {string} - Current PostCSS version.
     *
     * @example
     * if ( result.processor.version.split('.')[0] !== '5' ) {
     *   throw new Error('This plugin works only with PostCSS 5');
     * }
     */
    this.version = '5.2.0';
    /**
     * @member {pluginFunction[]} - Plugins added to this processor.
     *
     * @example
     * const processor = postcss([autoprefixer, precss]);
     * processor.plugins.length //=> 2
     */
    this.plugins = this.normalize(plugins);
  }

  /**
   * Adds a plugin to be used as a CSS processor.
   *
   * PostCSS plugin can be in 4 formats:
   * * A plugin created by {@link postcss.plugin} method.
   * * A function. PostCSS will pass the function a @{link Root}
   *   as the first argument and current {@link Result} instance
   *   as the second.
   * * An object with a `postcss` method. PostCSS will use that method
   *   as described in #2.
   * * Another {@link Processor} instance. PostCSS will copy plugins
   *   from that instance into this one.
   *
   * Plugins can also be added by passing them as arguments when creating
   * a `postcss` instance (see [`postcss(plugins)`]).
   *
   * Asynchronous plugins should return a `Promise` instance.
   *
   * @param {Plugin|pluginFunction|Processor} plugin - PostCSS plugin
   *                                                   or {@link Processor}
   *                                                   with plugins
   *
   * @example
   * const processor = postcss()
   *   .use(autoprefixer)
   *   .use(precss);
   *
   * @return {Processes} current processor to make methods chain
   */


  createClass(Processor, [{
    key: 'use',
    value: function use(plugin) {
      this.plugins = this.plugins.concat(this.normalize([plugin]));
      return this;
    }

    /**
     * Parses source CSS and returns a {@link LazyResult} Promise proxy.
     * Because some plugins can be asynchronous it doesn’t make
     * any transformations. Transformations will be applied
     * in the {@link LazyResult} methods.
     *
     * @param {string|toString|Result} css - String with input CSS or
     *                                       any object with a `toString()`
     *                                       method, like a Buffer.
     *                                       Optionally, send a {@link Result}
     *                                       instance and the processor will
     *                                       take the {@link Root} from it.
     * @param {processOptions} [opts]      - options
     *
     * @return {LazyResult} Promise proxy
     *
     * @example
     * processor.process(css, { from: 'a.css', to: 'a.out.css' })
     *   .then(result => {
     *      console.log(result.css);
     *   });
     */

  }, {
    key: 'process',
    value: function process(css) {
      var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      return new LazyResult(this, css, opts);
    }
  }, {
    key: 'normalize',
    value: function normalize(plugins) {
      var normalized = [];
      plugins.forEach(function (i) {
        if (i.postcss) i = i.postcss;

        if ((typeof i === 'undefined' ? 'undefined' : _typeof(i)) === 'object' && Array.isArray(i.plugins)) {
          normalized = normalized.concat(i.plugins);
        } else if (typeof i === 'function') {
          normalized.push(i);
        } else {
          throw new Error(i + ' is not a PostCSS plugin');
        }
      });
      return normalized;
    }
  }]);
  return Processor;
}();

/**
 * Represents a CSS file and contains all its parsed nodes.
 *
 * @extends Container
 *
 * @example
 * const root = postcss.parse('a{color:black} b{z-index:2}');
 * root.type         //=> 'root'
 * root.nodes.length //=> 2
 */

var Root = function (_Container) {
    inherits(Root, _Container);

    function Root(defaults$$1) {
        classCallCheck(this, Root);

        var _this = possibleConstructorReturn(this, (Root.__proto__ || Object.getPrototypeOf(Root)).call(this, defaults$$1));

        _this.type = 'root';
        if (!_this.nodes) _this.nodes = [];
        return _this;
    }

    createClass(Root, [{
        key: 'removeChild',
        value: function removeChild(child) {
            child = this.index(child);

            if (child === 0 && this.nodes.length > 1) {
                this.nodes[1].raws.before = this.nodes[child].raws.before;
            }

            return get$1(Root.prototype.__proto__ || Object.getPrototypeOf(Root.prototype), 'removeChild', this).call(this, child);
        }
    }, {
        key: 'normalize',
        value: function normalize(child, sample, type) {
            var nodes = get$1(Root.prototype.__proto__ || Object.getPrototypeOf(Root.prototype), 'normalize', this).call(this, child);

            if (sample) {
                if (type === 'prepend') {
                    if (this.nodes.length > 1) {
                        sample.raws.before = this.nodes[1].raws.before;
                    } else {
                        delete sample.raws.before;
                    }
                } else if (this.first !== sample) {
                    nodes.forEach(function (node) {
                        node.raws.before = sample.raws.before;
                    });
                }
            }

            return nodes;
        }

        /**
         * Returns a {@link Result} instance representing the root’s CSS.
         *
         * @param {processOptions} [opts] - options with only `to` and `map` keys
         *
         * @return {Result} result with current root’s CSS
         *
         * @example
         * const root1 = postcss.parse(css1, { from: 'a.css' });
         * const root2 = postcss.parse(css2, { from: 'b.css' });
         * root1.append(root2);
         * const result = root1.toResult({ to: 'all.css', map: true });
         */

    }, {
        key: 'toResult',
        value: function toResult() {
            var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

            var lazy = new LazyResult(new Processor(), this, opts);
            return lazy.stringify();
        }
    }, {
        key: 'remove',
        value: function remove(child) {
            warnOnce('Root#remove is deprecated. Use Root#removeChild');
            this.removeChild(child);
        }
    }, {
        key: 'prevMap',
        value: function prevMap() {
            warnOnce('Root#prevMap is deprecated. Use Root#source.input.map');
            return this.source.input.map;
        }

        /**
         * @memberof Root#
         * @member {object} raws - Information to generate byte-to-byte equal
         *                         node string as it was in the origin input.
         *
         * Every parser saves its own properties,
         * but the default CSS parser uses:
         *
         * * `after`: the space symbols after the last child to the end of file.
         * * `semicolon`: is the last child has an (optional) semicolon.
         *
         * @example
         * postcss.parse('a {}\n').raws //=> { after: '\n' }
         * postcss.parse('a {}').raws   //=> { after: '' }
         */

    }]);
    return Root;
}(Container);

// import PreviousMap    from './previous-map';

var sequence = 0;

/**
 * @typedef  {object} filePosition
 * @property {string} file   - path to file
 * @property {number} line   - source line in file
 * @property {number} column - source column in file
 */

/**
 * Represents the source CSS.
 *
 * @example
 * const root  = postcss.parse(css, { from: file });
 * const input = root.source.input;
 */

var Input = function () {

    /**
     * @param {string} css    - input CSS source
     * @param {object} [opts] - {@link Processor#process} options
     */
    function Input(css) {
        var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        classCallCheck(this, Input);

        /**
         * @member {string} - input CSS source
         *
         * @example
         * const input = postcss.parse('a{}', { from: file }).input;
         * input.css //=> "a{}";
         */
        this.css = css.toString();

        if (this.css[0] === '\uFEFF' || this.css[0] === '\uFFFE') {
            this.css = this.css.slice(1);
        }

        if (opts.from) {
            if (/^\w+:\/\//.test(opts.from)) {
                /**
                 * @member {string} - The absolute path to the CSS source file
                 *                    defined with the `from` option.
                 *
                 * @example
                 * const root = postcss.parse(css, { from: 'a.css' });
                 * root.source.input.file //=> '/home/ai/a.css'
                 */
                this.file = opts.from;
            } else {
                this.file = path.resolve(opts.from);
            }
        }

        /*
                let map = new PreviousMap(this.css, opts);
                if ( map.text ) {
                    /!**
                     * @member {PreviousMap} - The input source map passed from
                     *                         a compilation step before PostCSS
                     *                         (for example, from Sass compiler).
                     *
                     * @example
                     * root.source.input.map.consumer().sources //=> ['a.sass']
                     *!/
                    this.map = map;
                    let file = map.consumer().file;
                    if ( !this.file && file ) this.file = this.mapResolve(file);
                }
        */

        if (!this.file) {
            sequence += 1;
            /**
             * @member {string} - The unique ID of the CSS source. It will be
             *                    created if `from` option is not provided
             *                    (because PostCSS does not know the file path).
             *
             * @example
             * const root = postcss.parse(css);
             * root.source.input.file //=> undefined
             * root.source.input.id   //=> "<input css 1>"
             */
            this.id = '<input css ' + sequence + '>';
        }
        if (this.map) this.map.file = this.from;
    }

    createClass(Input, [{
        key: 'error',
        value: function error(message, line, column) {
            var opts = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

            var result = void 0;
            var origin = this.origin(line, column);
            if (origin) {
                result = new CssSyntaxError(message, origin.line, origin.column, origin.source, origin.file, opts.plugin);
            } else {
                result = new CssSyntaxError(message, line, column, this.css, this.file, opts.plugin);
            }

            result.input = { line: line, column: column, source: this.css };
            if (this.file) result.input.file = this.file;

            return result;
        }

        /**
         * Reads the input source map and returns a symbol position
         * in the input source (e.g., in a Sass file that was compiled
         * to CSS before being passed to PostCSS).
         *
         * @param {number} line   - line in input CSS
         * @param {number} column - column in input CSS
         *
         * @return {filePosition} position in input source
         *
         * @example
         * root.source.input.origin(1, 1) //=> { file: 'a.css', line: 3, column: 1 }
         */

    }, {
        key: 'origin',
        value: function origin(line, column) {
            if (!this.map) return false;
            var consumer = this.map.consumer();

            var from = consumer.originalPositionFor({ line: line, column: column });
            if (!from.source) return false;

            var result = {
                file: this.mapResolve(from.source),
                line: from.line,
                column: from.column
            };

            var source = consumer.sourceContentFor(from.source);
            if (source) result.source = source;

            return result;
        }
    }, {
        key: 'mapResolve',
        value: function mapResolve(file) {
            if (/^\w+:\/\//.test(file)) {
                return file;
            } else {
                return path.resolve(this.map.consumer().sourceRoot || '.', file);
            }
        }

        /**
         * The CSS source identifier. Contains {@link Input#file} if the user
         * set the `from` option, or {@link Input#id} if they did not.
         * @type {string}
         *
         * @example
         * const root = postcss.parse(css, { from: 'a.css' });
         * root.source.input.from //=> "/home/ai/a.css"
         *
         * const root = postcss.parse(css);
         * root.source.input.from //=> "<input css 1>"
         */

    }, {
        key: 'from',
        get: function get() {
            return this.file || this.id;
        }
    }]);
    return Input;
}();

var SafeParser = function (_Parser) {
    inherits(SafeParser, _Parser);

    function SafeParser() {
        classCallCheck(this, SafeParser);
        return possibleConstructorReturn(this, (SafeParser.__proto__ || Object.getPrototypeOf(SafeParser)).apply(this, arguments));
    }

    createClass(SafeParser, [{
        key: 'tokenize',
        value: function tokenize() {
            this.tokens = tokenize$1(this.input, { ignoreErrors: true });
        }
    }, {
        key: 'comment',
        value: function comment(token) {
            var node = new Comment();
            this.init(node, token[2], token[3]);
            node.source.end = { line: token[4], column: token[5] };

            var text = token[1].slice(2);
            if (text.slice(-2) === '*/') text = text.slice(0, -2);

            if (/^\s*$/.test(text)) {
                node.text = '';
                node.raws.left = text;
                node.raws.right = '';
            } else {
                var match = text.match(/^(\s*)([^]*[^\s])(\s*)$/);
                node.text = match[2];
                node.raws.left = match[1];
                node.raws.right = match[3];
            }
        }
    }, {
        key: 'unclosedBracket',
        value: function unclosedBracket() {}
    }, {
        key: 'unknownWord',
        value: function unknownWord(start) {
            var buffer = this.tokens.slice(start, this.pos + 1);
            this.spaces += buffer.map(function (i) {
                return i[1];
            }).join('');
        }
    }, {
        key: 'unexpectedClose',
        value: function unexpectedClose() {
            this.current.raws.after += '}';
        }
    }, {
        key: 'doubleColon',
        value: function doubleColon() {}
    }, {
        key: 'unnamedAtrule',
        value: function unnamedAtrule(node) {
            node.name = '';
        }
    }, {
        key: 'precheckMissedSemicolon',
        value: function precheckMissedSemicolon(tokens) {
            var colon = this.colon(tokens);
            if (colon === false) return;

            var split = void 0;
            for (split = colon - 1; split >= 0; split--) {
                if (tokens[split][0] === 'word') break;
            }
            for (split -= 1; split >= 0; split--) {
                if (tokens[split][0] !== 'space') {
                    split += 1;
                    break;
                }
            }
            var other = tokens.splice(split, tokens.length - split);
            this.decl(other);
        }
    }, {
        key: 'checkMissedSemicolon',
        value: function checkMissedSemicolon() {}
    }, {
        key: 'endFile',
        value: function endFile() {
            if (this.current.nodes && this.current.nodes.length) {
                this.current.raws.semicolon = this.semicolon;
            }
            this.current.raws.after = (this.current.raws.after || '') + this.spaces;

            while (this.current.parent) {
                this.current = this.current.parent;
                this.current.raws.after = '';
            }
        }
    }]);
    return SafeParser;
}(Parser);

function safeParse(css, opts) {
    var input = new Input(css, opts);

    var parser = new SafeParser(input);
    parser.tokenize();
    parser.loop();

    return parser.root;
}

function selectors(parent, node) {
  var result = [];
  parent.selectors.forEach(function (i) {
    node.selectors.forEach(function (j) {
      if (j.indexOf('&') === -1) {
        result.push(i + ' ' + j);
      } else {
        result.push(j.replace(/&/g, i));
      }
    });
  });
  return result;
}

function pickComment(comment, after) {
  if (comment && comment.type === 'comment') {
    return comment.moveAfter(after);
  } else {
    return after;
  }
}

function atruleChilds(rule, atrule) {
  var children = [];
  atrule.each(function (child) {
    if (child.type === 'comment') {
      children.push(child);
    }
    if (child.type === 'decl') {
      children.push(child);
    } else if (child.type === 'rule') {
      child.selectors = selectors(rule, child);
    } else if (child.type === 'atrule') {
      atruleChilds(rule, child);
    }
  });
  if (children.length) {
    var clone = rule.clone({ nodes: [] });
    for (var i = 0; i < children.length; i++) {
      children[i].moveTo(clone);
    }atrule.prepend(clone);
  }
}

function processRule(rule, bubble) {
  var unwrapped = false;
  var after = rule;
  rule.each(function (child) {
    if (child.type === 'rule') {
      unwrapped = true;
      child.selectors = selectors(rule, child);
      after = pickComment(child.prev(), after);
      after = child.moveAfter(after);
    } else if (child.type === 'atrule') {
      if (bubble.indexOf(child.name) !== -1) {
        unwrapped = true;
        atruleChilds(rule, child);
        after = pickComment(child.prev(), after);
        after = child.moveAfter(after);
      }
    }
  });
  if (unwrapped) {
    rule.raws.semicolon = true;
    if (rule.nodes.length === 0) rule.remove();
  }
}

var bubble = ['media', 'supports', 'document'];

var process$2 = function process$2(node) {
  node.each(function (child) {
    if (child.type === 'rule') {
      processRule(child, bubble);
    } else if (child.type === 'atrule') {
      process$2(child);
    }
  });
};

/*

high performance StyleSheet for css-in-js systems

- uses multiple style tags behind the scenes for millions of rules
- uses `insertRule` for appending in production for *much* faster performance
- 'polyfills' on server side


// usage

import StyleSheet from 'glamor/lib/sheet'
let styleSheet = new StyleSheet()

styleSheet.inject()
- 'injects' the stylesheet into the page (or into memory if on server)

styleSheet.insert('#box { border: 1px solid red; }')
- appends a css rule into the stylesheet

styleSheet.flush()
- empties the stylesheet of all its contents


*/

function last(arr) {
  return arr[arr.length - 1];
}

function sheetForTag(tag) {
  for (var i = 0; i < document.styleSheets.length; i++) {
    if (document.styleSheets[i].ownerNode === tag) {
      return document.styleSheets[i];
    }
  }
}

var isBrowser = typeof document !== 'undefined';
var isDev = function (x) {
  return x === 'development' || !x;
}("development");
var isTest = "development" === 'test';

var oldIE = function () {
  if (isBrowser) {
    var div = document.createElement('div');
    div.innerHTML = '<!--[if lt IE 10]><i></i><![endif]-->';
    return div.getElementsByTagName('i').length === 1;
  }
}();

function makeStyleTag() {
  var tag = document.createElement('style');
  tag.type = 'text/css';
  tag.appendChild(document.createTextNode(''));
  (document.head || document.getElementsByTagName('head')[0]).appendChild(tag);
  return tag;
}

var StyleSheet$1 = function () {
  function StyleSheet() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$speedy = _ref.speedy,
        speedy = _ref$speedy === undefined ? !isDev && !isTest : _ref$speedy,
        _ref$maxLength = _ref.maxLength,
        maxLength = _ref$maxLength === undefined ? isBrowser && oldIE ? 4000 : 65000 : _ref$maxLength;

    classCallCheck(this, StyleSheet);

    this.isSpeedy = speedy; // the big drawback here is that the css won't be editable in devtools
    this.sheet = undefined;
    this.tags = [];
    this.maxLength = maxLength;
    this.ctr = 0;
  }

  createClass(StyleSheet, [{
    key: 'inject',
    value: function inject() {
      var _this = this;

      if (this.injected) {
        throw new Error('already injected stylesheet!');
      }
      if (isBrowser) {
        // this section is just weird alchemy I found online off many sources
        this.tags[0] = makeStyleTag();
        // this weirdness brought to you by firefox
        this.sheet = sheetForTag(this.tags[0]);
      } else {
        // server side 'polyfill'. just enough behavior to be useful.
        this.sheet = {
          cssRules: [],
          insertRule: function insertRule(rule) {
            // enough 'spec compliance' to be able to extract the rules later
            // in other words, just the cssText field
            var serverRule = { cssText: rule };
            _this.sheet.cssRules.push(serverRule);
            return { serverRule: serverRule, appendRule: function appendRule(newCss) {
                return serverRule.cssText += newCss;
              } };
          }
        };
      }
      this.injected = true;
    }
  }, {
    key: 'speedy',
    value: function speedy(bool) {
      if (this.ctr !== 0) {
        throw new Error('cannot change speedy mode after inserting any rule to sheet. Either call speedy(' + bool + ') earlier in your app, or call flush() before speedy(' + bool + ')');
      }
      this.isSpeedy = !!bool;
    }
  }, {
    key: '_insert',
    value: function _insert(rule) {
      // this weirdness for perf, and chrome's weird bug
      // https://stackoverflow.com/questions/20007992/chrome-suddenly-stopped-accepting-insertrule
      try {
        this.sheet.insertRule(rule, this.sheet.cssRules.length); // todo - correct index here
      } catch (e) {
        if (isDev) {
          // might need beter dx for this
          console.warn('whoops, illegal rule inserted', rule); //eslint-disable-line no-console
        }
      }
    }
  }, {
    key: 'insert',
    value: function insert(rule) {
      var insertedRule = void 0;

      if (isBrowser) {
        // this is the ultrafast version, works across browsers
        if (this.isSpeedy && this.sheet.insertRule) {
          this._insert(rule);
        } else {
          var textNode = document.createTextNode(rule);
          last(this.tags).appendChild(textNode);
          insertedRule = { textNode: textNode, appendRule: function appendRule(newCss) {
              return textNode.appendData(newCss);
            } };

          if (!this.isSpeedy) {
            // sighhh
            this.sheet = sheetForTag(last(this.tags));
          }
        }
      } else {
        // server side is pretty simple
        insertedRule = this.sheet.insertRule(rule);
      }

      this.ctr++;
      if (isBrowser && this.ctr % this.maxLength === 0) {
        this.tags.push(makeStyleTag());
        this.sheet = sheetForTag(last(this.tags));
      }
      return insertedRule;
    }
  }, {
    key: 'flush',
    value: function flush() {
      if (isBrowser) {
        this.tags.forEach(function (tag) {
          return tag.parentNode.removeChild(tag);
        });
        this.tags = [];
        this.sheet = null;
        this.ctr = 0;
        // todo - look for remnants in document.styleSheets
      } else {
        // simpler on server
        this.sheet.cssRules = [];
      }
      this.injected = false;
    }
  }, {
    key: 'rules',
    value: function rules() {
      if (!isBrowser) {
        return this.sheet.cssRules;
      }
      var arr = [];
      this.tags.forEach(function (tag) {
        return arr.splice.apply(arr, [arr.length, 0].concat(toConsumableArray(Array.from(sheetForTag(tag).cssRules))));
      });
      return arr;
    }
  }]);
  return StyleSheet;
}();

//      

/* Wraps glamor's stylesheet and exports a singleton for styled components
to use. */
var StyleSheet$$1 = function () {
  function StyleSheet$$1() {
    classCallCheck(this, StyleSheet$$1);

    /* Don't specify a maxLength for the global sheet, since these rules
     * are defined at initialization and should remain static after that */
    this.globalStyleSheet = new StyleSheet$1({ speedy: false });
    this.componentStyleSheet = new StyleSheet$1({ speedy: false, maxLength: 40 });
  }

  createClass(StyleSheet$$1, [{
    key: 'inject',
    value: function inject() {
      this.globalStyleSheet.inject();
      this.componentStyleSheet.inject();
    }
  }, {
    key: 'flush',
    value: function flush() {
      if (this.globalStyleSheet.sheet) this.globalStyleSheet.flush();
      if (this.componentStyleSheet.sheet) this.componentStyleSheet.flush();
    }
  }, {
    key: 'insert',
    value: function insert(rule) {
      var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : { global: false };

      var sheet = opts.global ? this.globalStyleSheet : this.componentStyleSheet;
      return sheet.insert(rule);
    }
  }, {
    key: 'rules',
    value: function rules() {
      return this.globalStyleSheet.rules().concat(this.componentStyleSheet.rules());
    }
  }, {
    key: 'injected',
    get: function get() {
      return this.globalStyleSheet.injected && this.componentStyleSheet.injected;
    }
  }]);
  return StyleSheet$$1;
}();

/* Export stylesheet as a singleton class */


var styleSheet = new StyleSheet$$1();

//      
var ComponentStyle = function () {
  function ComponentStyle(rules, selector) {
    classCallCheck(this, ComponentStyle);

    this.rules = rules;
    this.selector = selector;
  }

  createClass(ComponentStyle, [{
    key: 'generateAndInject',
    value: function generateAndInject() {
      if (!styleSheet.injected) styleSheet.inject();
      var flatCSS = flatten(this.rules).join('');
      if (this.selector) {
        flatCSS = this.selector + ' {' + flatCSS + '\n}';
      }
      var root = safeParse(flatCSS);
      process$2(root);
      styleSheet.insert(root.toResult().css, { global: true });
    }
  }]);
  return ComponentStyle;
}();

//      
var injectGlobal = function injectGlobal(strings) {
  for (var _len = arguments.length, interpolations = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    interpolations[_key - 1] = arguments[_key];
  }

  var globalStyle = new ComponentStyle(css.apply(undefined, [strings].concat(interpolations)));
  globalStyle.generateAndInject();
};

//      
/* Trying to avoid the unknown-prop errors on styled components
 by filtering by React's attribute whitelist.
 */

/* Logic copied from ReactDOMUnknownPropertyHook */
var reactProps = {
  children: true,
  dangerouslySetInnerHTML: true,
  key: true,
  ref: true,
  autoFocus: true,
  defaultValue: true,
  valueLink: true,
  defaultChecked: true,
  checkedLink: true,
  innerHTML: true,
  suppressContentEditableWarning: true,
  onFocusIn: true,
  onFocusOut: true,
  className: true,

  /* List copied from https://facebook.github.io/react/docs/events.html */
  onCopy: true,
  onCut: true,
  onPaste: true,
  onCompositionEnd: true,
  onCompositionStart: true,
  onCompositionUpdate: true,
  onKeyDown: true,
  onKeyPress: true,
  onKeyUp: true,
  onFocus: true,
  onBlur: true,
  onChange: true,
  onInput: true,
  onSubmit: true,
  onClick: true,
  onContextMenu: true,
  onDoubleClick: true,
  onDrag: true,
  onDragEnd: true,
  onDragEnter: true,
  onDragExit: true,
  onDragLeave: true,
  onDragOver: true,
  onDragStart: true,
  onDrop: true,
  onMouseDown: true,
  onMouseEnter: true,
  onMouseLeave: true,
  onMouseMove: true,
  onMouseOut: true,
  onMouseOver: true,
  onMouseUp: true,
  onSelect: true,
  onTouchCancel: true,
  onTouchEnd: true,
  onTouchMove: true,
  onTouchStart: true,
  onScroll: true,
  onWheel: true,
  onAbort: true,
  onCanPlay: true,
  onCanPlayThrough: true,
  onDurationChange: true,
  onEmptied: true,
  onEncrypted: true,
  onEnded: true,
  onError: true,
  onLoadedData: true,
  onLoadedMetadata: true,
  onLoadStart: true,
  onPause: true,
  onPlay: true,
  onPlaying: true,
  onProgress: true,
  onRateChange: true,
  onSeeked: true,
  onSeeking: true,
  onStalled: true,
  onSuspend: true,
  onTimeUpdate: true,
  onVolumeChange: true,
  onWaiting: true,
  onLoad: true,
  onAnimationStart: true,
  onAnimationEnd: true,
  onAnimationIteration: true,
  onTransitionEnd: true,

  onCopyCapture: true,
  onCutCapture: true,
  onPasteCapture: true,
  onCompositionEndCapture: true,
  onCompositionStartCapture: true,
  onCompositionUpdateCapture: true,
  onKeyDownCapture: true,
  onKeyPressCapture: true,
  onKeyUpCapture: true,
  onFocusCapture: true,
  onBlurCapture: true,
  onChangeCapture: true,
  onInputCapture: true,
  onSubmitCapture: true,
  onClickCapture: true,
  onContextMenuCapture: true,
  onDoubleClickCapture: true,
  onDragCapture: true,
  onDragEndCapture: true,
  onDragEnterCapture: true,
  onDragExitCapture: true,
  onDragLeaveCapture: true,
  onDragOverCapture: true,
  onDragStartCapture: true,
  onDropCapture: true,
  onMouseDownCapture: true,
  onMouseEnterCapture: true,
  onMouseLeaveCapture: true,
  onMouseMoveCapture: true,
  onMouseOutCapture: true,
  onMouseOverCapture: true,
  onMouseUpCapture: true,
  onSelectCapture: true,
  onTouchCancelCapture: true,
  onTouchEndCapture: true,
  onTouchMoveCapture: true,
  onTouchStartCapture: true,
  onScrollCapture: true,
  onWheelCapture: true,
  onAbortCapture: true,
  onCanPlayCapture: true,
  onCanPlayThroughCapture: true,
  onDurationChangeCapture: true,
  onEmptiedCapture: true,
  onEncryptedCapture: true,
  onEndedCapture: true,
  onErrorCapture: true,
  onLoadedDataCapture: true,
  onLoadedMetadataCapture: true,
  onLoadStartCapture: true,
  onPauseCapture: true,
  onPlayCapture: true,
  onPlayingCapture: true,
  onProgressCapture: true,
  onRateChangeCapture: true,
  onSeekedCapture: true,
  onSeekingCapture: true,
  onStalledCapture: true,
  onSuspendCapture: true,
  onTimeUpdateCapture: true,
  onVolumeChangeCapture: true,
  onWaitingCapture: true,
  onLoadCapture: true,
  onAnimationStartCapture: true,
  onAnimationEndCapture: true,
  onAnimationIterationCapture: true,
  onTransitionEndCapture: true
};

/* From HTMLDOMPropertyConfig */
var htmlProps = {
  /**
   * Standard Properties
   */
  accept: true,
  acceptCharset: true,
  accessKey: true,
  action: true,
  allowFullScreen: true,
  allowTransparency: true,
  alt: true,
  // specifies target context for links with `preload` type
  as: true,
  async: true,
  autoComplete: true,
  // autoFocus is polyfilled/normalized by AutoFocusUtils
  // autoFocus: true,
  autoPlay: true,
  capture: true,
  cellPadding: true,
  cellSpacing: true,
  charSet: true,
  challenge: true,
  checked: true,
  cite: true,
  classID: true,
  className: true,
  cols: true,
  colSpan: true,
  content: true,
  contentEditable: true,
  contextMenu: true,
  controls: true,
  coords: true,
  crossOrigin: true,
  data: true, // For `<object />` acts as `src`.
  dateTime: true,
  default: true,
  defer: true,
  dir: true,
  disabled: true,
  download: true,
  draggable: true,
  encType: true,
  form: true,
  formAction: true,
  formEncType: true,
  formMethod: true,
  formNoValidate: true,
  formTarget: true,
  frameBorder: true,
  headers: true,
  height: true,
  hidden: true,
  high: true,
  href: true,
  hrefLang: true,
  htmlFor: true,
  httpEquiv: true,
  icon: true,
  id: true,
  inputMode: true,
  integrity: true,
  is: true,
  keyParams: true,
  keyType: true,
  kind: true,
  label: true,
  lang: true,
  list: true,
  loop: true,
  low: true,
  manifest: true,
  marginHeight: true,
  marginWidth: true,
  max: true,
  maxLength: true,
  media: true,
  mediaGroup: true,
  method: true,
  min: true,
  minLength: true,
  // Caution; `option.selected` is not updated if `select.multiple` is
  // disabled with `removeAttribute`.
  multiple: true,
  muted: true,
  name: true,
  nonce: true,
  noValidate: true,
  open: true,
  optimum: true,
  pattern: true,
  placeholder: true,
  playsInline: true,
  poster: true,
  preload: true,
  profile: true,
  radioGroup: true,
  readOnly: true,
  referrerPolicy: true,
  rel: true,
  required: true,
  reversed: true,
  role: true,
  rows: true,
  rowSpan: true,
  sandbox: true,
  scope: true,
  scoped: true,
  scrolling: true,
  seamless: true,
  selected: true,
  shape: true,
  size: true,
  sizes: true,
  span: true,
  spellCheck: true,
  src: true,
  srcDoc: true,
  srcLang: true,
  srcSet: true,
  start: true,
  step: true,
  style: true,
  summary: true,
  tabIndex: true,
  target: true,
  title: true,
  // Setting .type throws on non-<input> tags
  type: true,
  useMap: true,
  value: true,
  width: true,
  wmode: true,
  wrap: true,

  /**
   * RDFa Properties
   */
  about: true,
  datatype: true,
  inlist: true,
  prefix: true,
  // property is also supported for OpenGraph in meta tags.
  property: true,
  resource: true,
  typeof: true,
  vocab: true,

  /**
   * Non-standard Properties
   */
  // autoCapitalize and autoCorrect are supported in Mobile Safari for
  // keyboard hints.
  autoCapitalize: true,
  autoCorrect: true,
  // autoSave allows WebKit/Blink to persist values of input fields on page reloads
  autoSave: true,
  // color is for Safari mask-icon link
  color: true,
  // itemProp, itemScope, itemType are for
  // Microdata support. See http://schema.org/docs/gs.html
  itemProp: true,
  itemScope: true,
  itemType: true,
  // itemID and itemRef are for Microdata support as well but
  // only specified in the WHATWG spec document. See
  // https://html.spec.whatwg.org/multipage/microdata.html#microdata-dom-api
  itemID: true,
  itemRef: true,
  // results show looking glass icon and recent searches on input
  // search fields in WebKit/Blink
  results: true,
  // IE-only attribute that specifies security restrictions on an iframe
  // as an alternative to the sandbox attribute on IE<10
  security: true,
  // IE-only attribute that controls focus behavior
  unselectable: 0
};

var svgProps = {
  accentHeight: true,
  accumulate: true,
  additive: true,
  alignmentBaseline: true,
  allowReorder: true,
  alphabetic: true,
  amplitude: true,
  arabicForm: true,
  ascent: true,
  attributeName: true,
  attributeType: true,
  autoReverse: true,
  azimuth: true,
  baseFrequency: true,
  baseProfile: true,
  baselineShift: true,
  bbox: true,
  begin: true,
  bias: true,
  by: true,
  calcMode: true,
  capHeight: true,
  clip: true,
  clipPath: true,
  clipRule: true,
  clipPathUnits: true,
  colorInterpolation: true,
  colorInterpolationFilters: true,
  colorProfile: true,
  colorRendering: true,
  contentScriptType: true,
  contentStyleType: true,
  cursor: true,
  cx: true,
  cy: true,
  d: true,
  decelerate: true,
  descent: true,
  diffuseConstant: true,
  direction: true,
  display: true,
  divisor: true,
  dominantBaseline: true,
  dur: true,
  dx: true,
  dy: true,
  edgeMode: true,
  elevation: true,
  enableBackground: true,
  end: true,
  exponent: true,
  externalResourcesRequired: true,
  fill: true,
  fillOpacity: true,
  fillRule: true,
  filter: true,
  filterRes: true,
  filterUnits: true,
  floodColor: true,
  floodOpacity: true,
  focusable: true,
  fontFamily: true,
  fontSize: true,
  fontSizeAdjust: true,
  fontStretch: true,
  fontStyle: true,
  fontVariant: true,
  fontWeight: true,
  format: true,
  from: true,
  fx: true,
  fy: true,
  g1: true,
  g2: true,
  glyphName: true,
  glyphOrientationHorizontal: true,
  glyphOrientationVertical: true,
  glyphRef: true,
  gradientTransform: true,
  gradientUnits: true,
  hanging: true,
  horizAdvX: true,
  horizOriginX: true,
  ideographic: true,
  imageRendering: true,
  in: true,
  in2: true,
  intercept: true,
  k: true,
  k1: true,
  k2: true,
  k3: true,
  k4: true,
  kernelMatrix: true,
  kernelUnitLength: true,
  kerning: true,
  keyPoints: true,
  keySplines: true,
  keyTimes: true,
  lengthAdjust: true,
  letterSpacing: true,
  lightingColor: true,
  limitingConeAngle: true,
  local: true,
  markerEnd: true,
  markerMid: true,
  markerStart: true,
  markerHeight: true,
  markerUnits: true,
  markerWidth: true,
  mask: true,
  maskContentUnits: true,
  maskUnits: true,
  mathematical: true,
  mode: true,
  numOctaves: true,
  offset: true,
  opacity: true,
  operator: true,
  order: true,
  orient: true,
  orientation: true,
  origin: true,
  overflow: true,
  overlinePosition: true,
  overlineThickness: true,
  paintOrder: true,
  panose1: true,
  pathLength: true,
  patternContentUnits: true,
  patternTransform: true,
  patternUnits: true,
  pointerEvents: true,
  points: true,
  pointsAtX: true,
  pointsAtY: true,
  pointsAtZ: true,
  preserveAlpha: true,
  preserveAspectRatio: true,
  primitiveUnits: true,
  r: true,
  radius: true,
  refX: true,
  refY: true,
  renderingIntent: true,
  repeatCount: true,
  repeatDur: true,
  requiredExtensions: true,
  requiredFeatures: true,
  restart: true,
  result: true,
  rotate: true,
  rx: true,
  ry: true,
  scale: true,
  seed: true,
  shapeRendering: true,
  slope: true,
  spacing: true,
  specularConstant: true,
  specularExponent: true,
  speed: true,
  spreadMethod: true,
  startOffset: true,
  stdDeviation: true,
  stemh: true,
  stemv: true,
  stitchTiles: true,
  stopColor: true,
  stopOpacity: true,
  strikethroughPosition: true,
  strikethroughThickness: true,
  string: true,
  stroke: true,
  strokeDasharray: true,
  strokeDashoffset: true,
  strokeLinecap: true,
  strokeLinejoin: true,
  strokeMiterlimit: true,
  strokeOpacity: true,
  strokeWidth: true,
  surfaceScale: true,
  systemLanguage: true,
  tableValues: true,
  targetX: true,
  targetY: true,
  textAnchor: true,
  textDecoration: true,
  textRendering: true,
  textLength: true,
  to: true,
  transform: true,
  u1: true,
  u2: true,
  underlinePosition: true,
  underlineThickness: true,
  unicode: true,
  unicodeBidi: true,
  unicodeRange: true,
  unitsPerEm: true,
  vAlphabetic: true,
  vHanging: true,
  vIdeographic: true,
  vMathematical: true,
  values: true,
  vectorEffect: true,
  version: true,
  vertAdvY: true,
  vertOriginX: true,
  vertOriginY: true,
  viewBox: true,
  viewTarget: true,
  visibility: true,
  widths: true,
  wordSpacing: true,
  writingMode: true,
  x: true,
  xHeight: true,
  x1: true,
  x2: true,
  xChannelSelector: true,
  xlinkActuate: true,
  xlinkArcrole: true,
  xlinkHref: true,
  xlinkRole: true,
  xlinkShow: true,
  xlinkTitle: true,
  xlinkType: true,
  xmlBase: true,
  xmlns: true,
  xmlnsXlink: true,
  xmlLang: true,
  xmlSpace: true,
  y: true,
  y1: true,
  y2: true,
  yChannelSelector: true,
  z: true,
  zoomAndPan: true
};

/* From DOMProperty */
var ATTRIBUTE_NAME_START_CHAR = ':A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD';
var ATTRIBUTE_NAME_CHAR = ATTRIBUTE_NAME_START_CHAR + '\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040';
var isCustomAttribute = RegExp.prototype.test.bind(new RegExp('^(data|aria)-[' + ATTRIBUTE_NAME_CHAR + ']*$'));

var hasOwnProperty = {}.hasOwnProperty;
var validAttr = (function (name) {
  return hasOwnProperty.call(htmlProps, name) || hasOwnProperty.call(svgProps, name) || isCustomAttribute(name.toLowerCase()) || hasOwnProperty.call(reactProps, name);
});

//      


function isTag(target) /* : %checks */{
  return typeof target === 'string';
}

var index$7 = isFunction;

var toString$1 = Object.prototype.toString;

function isFunction(fn) {
  var string = toString$1.call(fn);
  return string === '[object Function]' || typeof fn === 'function' && string !== '[object RegExp]' || typeof window !== 'undefined' && (
  // IE8 and below
  fn === window.setTimeout || fn === window.alert || fn === window.confirm || fn === window.prompt);
}

//      
/**
 * Creates a broadcast that can be listened to, i.e. simple event emitter
 *
 * @see https://github.com/ReactTraining/react-broadcast
 */

var createBroadcast = function createBroadcast(initialValue) {
  var listeners = [];
  var currentValue = initialValue;

  return {
    publish: function publish(value) {
      currentValue = value;
      listeners.forEach(function (listener) {
        return listener(currentValue);
      });
    },
    subscribe: function subscribe(listener) {
      listeners.push(listener);

      // Publish to this subscriber once immediately.
      listener(currentValue);

      return function () {
        listeners = listeners.filter(function (item) {
          return item !== listener;
        });
      };
    }
  };
};

//      
/* globals React$Element */
// NOTE: DO NOT CHANGE, changing this is a semver major change!
var CHANNEL = '__styled-components__';

/**
 * Provide a theme to an entire react component tree via context and event listeners (have to do
 * both context and event emitter as pure components block context updates)
 */

var ThemeProvider = function (_Component) {
  inherits(ThemeProvider, _Component);

  function ThemeProvider() {
    classCallCheck(this, ThemeProvider);

    var _this = possibleConstructorReturn(this, (ThemeProvider.__proto__ || Object.getPrototypeOf(ThemeProvider)).call(this));

    _this.getTheme = _this.getTheme.bind(_this);
    return _this;
  }

  createClass(ThemeProvider, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var _this2 = this;

      // If there is a ThemeProvider wrapper anywhere around this theme provider, merge this theme
      // with the outer theme
      if (this.context[CHANNEL]) {
        var subscribe = this.context[CHANNEL];
        this.unsubscribeToOuter = subscribe(function (theme) {
          _this2.outerTheme = theme;
        });
      }
      this.broadcast = createBroadcast(this.getTheme());
    }
  }, {
    key: 'getChildContext',
    value: function getChildContext() {
      return _extends({}, this.context, defineProperty({}, CHANNEL, this.broadcast.subscribe));
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (this.props.theme !== nextProps.theme) this.broadcast.publish(this.getTheme(nextProps.theme));
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (this.context[CHANNEL]) {
        this.unsubscribeToOuter();
      }
    }

    // Get the theme from the props, supporting both (outerTheme) => {} as well as object notation

  }, {
    key: 'getTheme',
    value: function getTheme(passedTheme) {
      var theme = passedTheme || this.props.theme;
      if (index$7(theme)) {
        var mergedTheme = theme(this.outerTheme);
        if (!index$1(mergedTheme)) {
          throw new Error('[ThemeProvider] Please return an object from your theme function, i.e. theme={() => ({})}!');
        }
        return mergedTheme;
      }
      if (!index$1(theme)) {
        throw new Error('[ThemeProvider] Please make your theme prop a plain object');
      }
      return _extends({}, this.outerTheme, theme);
    }
  }, {
    key: 'render',
    value: function render() {
      if (!this.props.children) {
        return null;
      }
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.Children.only(this.props.children);
    }
  }]);
  return ThemeProvider;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

ThemeProvider.childContextTypes = defineProperty({}, CHANNEL, __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].func.isRequired);
ThemeProvider.contextTypes = defineProperty({}, CHANNEL, __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].func);

//      
var AbstractStyledComponent = function (_Component) {
  inherits(AbstractStyledComponent, _Component);

  function AbstractStyledComponent() {
    classCallCheck(this, AbstractStyledComponent);
    return possibleConstructorReturn(this, (AbstractStyledComponent.__proto__ || Object.getPrototypeOf(AbstractStyledComponent)).apply(this, arguments));
  }

  return AbstractStyledComponent;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

AbstractStyledComponent.contextTypes = defineProperty({}, CHANNEL, __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].func);

//      

var _styledComponent = (function (ComponentStyle) {
  // eslint-disable-next-line no-undef
  var createStyledComponent = function createStyledComponent(target, rules, parent) {
    /* Handle styled(OtherStyledComponent) differently */
    var isStyledComponent = AbstractStyledComponent.isPrototypeOf(target);
    if (!isTag(target) && isStyledComponent) {
      return createStyledComponent(target.target, target.rules.concat(rules), target);
    }

    var componentStyle = new ComponentStyle(rules);
    var ParentComponent = parent || AbstractStyledComponent;

    var StyledComponent = function (_ParentComponent) {
      inherits(StyledComponent, _ParentComponent);

      function StyledComponent() {
        classCallCheck(this, StyledComponent);

        var _this = possibleConstructorReturn(this, (StyledComponent.__proto__ || Object.getPrototypeOf(StyledComponent)).call(this));

        _this.state = {
          theme: null,
          generatedClassName: ''
        };
        return _this;
      }

      createClass(StyledComponent, [{
        key: 'generateAndInjectStyles',
        value: function generateAndInjectStyles(theme, props) {
          var executionContext = _extends({}, props, { theme: theme });
          return componentStyle.generateAndInjectStyles(executionContext);
        }
      }, {
        key: 'componentWillMount',
        value: function componentWillMount() {
          var _this2 = this;

          // If there is a theme in the context, subscribe to the event emitter. This
          // is necessary due to pure components blocking context updates, this circumvents
          // that by updating when an event is emitted
          if (this.context[CHANNEL]) {
            var subscribe = this.context[CHANNEL];
            this.unsubscribe = subscribe(function (nextTheme) {
              // This will be called once immediately

              // Props should take precedence over ThemeProvider, which should take precedence over
              // defaultProps, but React automatically puts defaultProps on props.
              var defaultProps = _this2.constructor.defaultProps;

              var isDefaultTheme = defaultProps && _this2.props.theme === defaultProps.theme;
              var theme = _this2.props.theme && !isDefaultTheme ? _this2.props.theme : nextTheme;
              var generatedClassName = _this2.generateAndInjectStyles(theme, _this2.props);
              _this2.setState({ theme: theme, generatedClassName: generatedClassName });
            });
          } else {
            var theme = this.props.theme || {};
            var generatedClassName = this.generateAndInjectStyles(theme, this.props);
            this.setState({ theme: theme, generatedClassName: generatedClassName });
          }
        }
      }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
          var _this3 = this;

          this.setState(function (oldState) {
            // Props should take precedence over ThemeProvider, which should take precedence over
            // defaultProps, but React automatically puts defaultProps on props.
            var defaultProps = _this3.constructor.defaultProps;

            var isDefaultTheme = defaultProps && nextProps.theme === defaultProps.theme;
            var theme = nextProps.theme && !isDefaultTheme ? nextProps.theme : oldState.theme;
            var generatedClassName = _this3.generateAndInjectStyles(theme, nextProps);

            return { theme: theme, generatedClassName: generatedClassName };
          });
        }
      }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
          if (this.unsubscribe) {
            this.unsubscribe();
          }
        }
      }, {
        key: 'render',
        value: function render() {
          var _this4 = this;

          var _props = this.props,
              className = _props.className,
              children = _props.children,
              innerRef = _props.innerRef;
          var generatedClassName = this.state.generatedClassName;


          var propsForElement = {};
          /* Don't pass through non HTML tags through to HTML elements */
          Object.keys(this.props).filter(function (propName) {
            return !isTag(target) || validAttr(propName);
          }).forEach(function (propName) {
            propsForElement[propName] = _this4.props[propName];
          });
          propsForElement.className = [className, generatedClassName].filter(function (x) {
            return x;
          }).join(' ');
          if (innerRef) {
            propsForElement.ref = innerRef;
            if (isTag(target)) delete propsForElement.innerRef;
          }

          return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(target, propsForElement, children);
        }
      }]);
      return StyledComponent;
    }(ParentComponent);

    StyledComponent.contextTypes = ParentComponent.contextTypes;


    StyledComponent.target = target;
    StyledComponent.rules = rules;

    StyledComponent.displayName = isTag(target) ? 'styled.' + target : 'Styled(' + (target.displayName || target.name || 'Component') + ')';

    return StyledComponent;
  };

  return createStyledComponent;
});

//      
// Thanks to ReactDOMFactories for this handy list!

var domElements = ['a', 'abbr', 'address', 'area', 'article', 'aside', 'audio', 'b', 'base', 'bdi', 'bdo', 'big', 'blockquote', 'body', 'br', 'button', 'canvas', 'caption', 'cite', 'code', 'col', 'colgroup', 'data', 'datalist', 'dd', 'del', 'details', 'dfn', 'dialog', 'div', 'dl', 'dt', 'em', 'embed', 'fieldset', 'figcaption', 'figure', 'footer', 'form', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'head', 'header', 'hgroup', 'hr', 'html', 'i', 'iframe', 'img', 'input', 'ins', 'kbd', 'keygen', 'label', 'legend', 'li', 'link', 'main', 'map', 'mark', 'menu', 'menuitem', 'meta', 'meter', 'nav', 'noscript', 'object', 'ol', 'optgroup', 'option', 'output', 'p', 'param', 'picture', 'pre', 'progress', 'q', 'rp', 'rt', 'ruby', 's', 'samp', 'script', 'section', 'select', 'small', 'source', 'span', 'strong', 'style', 'sub', 'summary', 'sup', 'table', 'tbody', 'td', 'textarea', 'tfoot', 'th', 'thead', 'time', 'title', 'tr', 'track', 'u', 'ul', 'var', 'video', 'wbr',

// SVG
'circle', 'clipPath', 'defs', 'ellipse', 'g', 'image', 'line', 'linearGradient', 'mask', 'path', 'pattern', 'polygon', 'polyline', 'radialGradient', 'rect', 'stop', 'svg', 'text', 'tspan'];

//      
var _styled = (function (styledComponent) {
  var styled = function styled(tag) {
    return function (strings) {
      for (var _len = arguments.length, interpolations = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        interpolations[_key - 1] = arguments[_key];
      }

      return styledComponent(tag, css.apply(undefined, [strings].concat(interpolations)));
    };
  };

  // Shorthands for all valid HTML Elements
  domElements.forEach(function (domElement) {
    styled[domElement] = styled(domElement);
  });

  return styled;
});

function unwrapExports (x) {
	return x && x.__esModule ? x['default'] : x;
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var hash = createCommonjsModule(function (module, exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = doHash;
  // murmurhash2 via https://gist.github.com/raycmorgan/588423

  function doHash(str, seed) {
    var m = 0x5bd1e995;
    var r = 24;
    var h = seed ^ str.length;
    var length = str.length;
    var currentIndex = 0;

    while (length >= 4) {
      var k = UInt32(str, currentIndex);

      k = Umul32(k, m);
      k ^= k >>> r;
      k = Umul32(k, m);

      h = Umul32(h, m);
      h ^= k;

      currentIndex += 4;
      length -= 4;
    }

    switch (length) {
      case 3:
        h ^= UInt16(str, currentIndex);
        h ^= str.charCodeAt(currentIndex + 2) << 16;
        h = Umul32(h, m);
        break;

      case 2:
        h ^= UInt16(str, currentIndex);
        h = Umul32(h, m);
        break;

      case 1:
        h ^= str.charCodeAt(currentIndex);
        h = Umul32(h, m);
        break;
    }

    h ^= h >>> 13;
    h = Umul32(h, m);
    h ^= h >>> 15;

    return h >>> 0;
  }

  function UInt32(str, pos) {
    return str.charCodeAt(pos++) + (str.charCodeAt(pos++) << 8) + (str.charCodeAt(pos++) << 16) + (str.charCodeAt(pos) << 24);
  }

  function UInt16(str, pos) {
    return str.charCodeAt(pos++) + (str.charCodeAt(pos++) << 8);
  }

  function Umul32(n, m) {
    n = n | 0;
    m = m | 0;
    var nlo = n & 0xffff;
    var nhi = n >>> 16;
    var res = nlo * m + ((nhi * m & 0xffff) << 16) | 0;
    return res;
  }
});

var hashStr = unwrapExports(hash);

//      
var replaceWhitespace = function replaceWhitespace(str) {
  return str.replace(/\s|\\n/g, '');
};

var _keyframes = (function (nameGenerator) {
  return function (strings) {
    for (var _len = arguments.length, interpolations = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      interpolations[_key - 1] = arguments[_key];
    }

    var rules = css.apply(undefined, [strings].concat(interpolations));
    var hash = hashStr(replaceWhitespace(JSON.stringify(rules)));
    var name = nameGenerator(hash);
    var keyframes = new ComponentStyle(rules, '@keyframes ' + name);
    keyframes.generateAndInject();
    return name;
  };
});

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @typechecks
 */

var _hyphenPattern = /-(.)/g;

/**
 * Camelcases a hyphenated string, for example:
 *
 *   > camelize('background-color')
 *   < "backgroundColor"
 *
 * @param {string} string
 * @return {string}
 */
function camelize$1(string) {
  return string.replace(_hyphenPattern, function (_, character) {
    return character.toUpperCase();
  });
}

var camelize_1 = camelize$1;

var camelize = camelize_1;

var msPattern$1 = /^-ms-/;

/**
 * Camelcases a hyphenated CSS property name, for example:
 *
 *   > camelizeStyleName('background-color')
 *   < "backgroundColor"
 *   > camelizeStyleName('-moz-transition')
 *   < "MozTransition"
 *   > camelizeStyleName('-ms-transition')
 *   < "msTransition"
 *
 * As Andi Smith suggests
 * (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
 * is converted to lowercase `ms`.
 *
 * @param {string} string
 * @return {string}
 */
function camelizeStyleName(string) {
  return camelize(string.replace(msPattern$1, 'ms-'));
}

var camelizeStyleName_1 = camelizeStyleName;

var prefixProps = createCommonjsModule(function (module, exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = { "Webkit": { "transform": true, "transformOrigin": true, "transformOriginX": true, "transformOriginY": true, "backfaceVisibility": true, "perspective": true, "perspectiveOrigin": true, "transformStyle": true, "transformOriginZ": true, "animation": true, "animationDelay": true, "animationDirection": true, "animationFillMode": true, "animationDuration": true, "animationIterationCount": true, "animationName": true, "animationPlayState": true, "animationTimingFunction": true, "appearance": true, "userSelect": true, "fontKerning": true, "textEmphasisPosition": true, "textEmphasis": true, "textEmphasisStyle": true, "textEmphasisColor": true, "boxDecorationBreak": true, "clipPath": true, "maskImage": true, "maskMode": true, "maskRepeat": true, "maskPosition": true, "maskClip": true, "maskOrigin": true, "maskSize": true, "maskComposite": true, "mask": true, "maskBorderSource": true, "maskBorderMode": true, "maskBorderSlice": true, "maskBorderWidth": true, "maskBorderOutset": true, "maskBorderRepeat": true, "maskBorder": true, "maskType": true, "textDecorationStyle": true, "textDecorationSkip": true, "textDecorationLine": true, "textDecorationColor": true, "filter": true, "fontFeatureSettings": true, "breakAfter": true, "breakBefore": true, "breakInside": true, "columnCount": true, "columnFill": true, "columnGap": true, "columnRule": true, "columnRuleColor": true, "columnRuleStyle": true, "columnRuleWidth": true, "columns": true, "columnSpan": true, "columnWidth": true, "flex": true, "flexBasis": true, "flexDirection": true, "flexGrow": true, "flexFlow": true, "flexShrink": true, "flexWrap": true, "alignContent": true, "alignItems": true, "alignSelf": true, "justifyContent": true, "order": true, "transition": true, "transitionDelay": true, "transitionDuration": true, "transitionProperty": true, "transitionTimingFunction": true, "backdropFilter": true, "scrollSnapType": true, "scrollSnapPointsX": true, "scrollSnapPointsY": true, "scrollSnapDestination": true, "scrollSnapCoordinate": true, "shapeImageThreshold": true, "shapeImageMargin": true, "shapeImageOutside": true, "hyphens": true, "flowInto": true, "flowFrom": true, "regionFragment": true, "textSizeAdjust": true }, "Moz": { "appearance": true, "userSelect": true, "boxSizing": true, "textAlignLast": true, "textDecorationStyle": true, "textDecorationSkip": true, "textDecorationLine": true, "textDecorationColor": true, "tabSize": true, "hyphens": true, "fontFeatureSettings": true, "breakAfter": true, "breakBefore": true, "breakInside": true, "columnCount": true, "columnFill": true, "columnGap": true, "columnRule": true, "columnRuleColor": true, "columnRuleStyle": true, "columnRuleWidth": true, "columns": true, "columnSpan": true, "columnWidth": true }, "ms": { "flex": true, "flexBasis": false, "flexDirection": true, "flexGrow": false, "flexFlow": true, "flexShrink": false, "flexWrap": true, "alignContent": false, "alignItems": false, "alignSelf": false, "justifyContent": false, "order": false, "transform": true, "transformOrigin": true, "transformOriginX": true, "transformOriginY": true, "userSelect": true, "wrapFlow": true, "wrapThrough": true, "wrapMargin": true, "scrollSnapType": true, "scrollSnapPointsX": true, "scrollSnapPointsY": true, "scrollSnapDestination": true, "scrollSnapCoordinate": true, "touchAction": true, "hyphens": true, "flowInto": true, "flowFrom": true, "breakBefore": true, "breakAfter": true, "breakInside": true, "regionFragment": true, "gridTemplateColumns": true, "gridTemplateRows": true, "gridTemplateAreas": true, "gridTemplate": true, "gridAutoColumns": true, "gridAutoRows": true, "gridAutoFlow": true, "grid": true, "gridRowStart": true, "gridColumnStart": true, "gridRowEnd": true, "gridRow": true, "gridColumn": true, "gridColumnEnd": true, "gridColumnGap": true, "gridRowGap": true, "gridArea": true, "gridGap": true, "textSizeAdjust": true } };
  module.exports = exports["default"];
});

var capitalizeString = createCommonjsModule(function (module, exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  // helper to capitalize strings

  exports.default = function (str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  module.exports = exports["default"];
});

var isPrefixedProperty = createCommonjsModule(function (module, exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  exports.default = function (property) {
    return property.match(/^(Webkit|Moz|O|ms)/) !== null;
  };

  module.exports = exports["default"];
});

var sortPrefixedStyle_1 = createCommonjsModule(function (module, exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = sortPrefixedStyle;

  var _isPrefixedProperty = isPrefixedProperty;

  var _isPrefixedProperty2 = _interopRequireDefault(_isPrefixedProperty);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }

  function sortPrefixedStyle(style) {
    return Object.keys(style).sort(function (left, right) {
      if ((0, _isPrefixedProperty2.default)(left) && !(0, _isPrefixedProperty2.default)(right)) {
        return -1;
      } else if (!(0, _isPrefixedProperty2.default)(left) && (0, _isPrefixedProperty2.default)(right)) {
        return 1;
      }
      return 0;
    }).reduce(function (sortedStyle, prop) {
      sortedStyle[prop] = style[prop];
      return sortedStyle;
    }, {});
  }
  module.exports = exports['default'];
});

var position_1 = createCommonjsModule(function (module, exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = position;
  function position(property, value) {
    if (property === 'position' && value === 'sticky') {
      return { position: ['-webkit-sticky', 'sticky'] };
    }
  }
  module.exports = exports['default'];
});

var joinPrefixedValue = createCommonjsModule(function (module, exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
    } else {
      obj[key] = value;
    }return obj;
  }

  // returns a style object with a single concated prefixed value string

  exports.default = function (property, value) {
    var replacer = arguments.length <= 2 || arguments[2] === undefined ? function (prefix, value) {
      return prefix + value;
    } : arguments[2];
    return _defineProperty({}, property, ['-webkit-', '-moz-', ''].map(function (prefix) {
      return replacer(prefix, value);
    }));
  };

  module.exports = exports['default'];
});

var isPrefixedValue = createCommonjsModule(function (module, exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  exports.default = function (value) {
    if (Array.isArray(value)) value = value.join(',');

    return value.match(/-webkit-|-moz-|-ms-/) !== null;
  };

  module.exports = exports['default'];
});

var calc_1 = createCommonjsModule(function (module, exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = calc;

  var _joinPrefixedValue = joinPrefixedValue;

  var _joinPrefixedValue2 = _interopRequireDefault(_joinPrefixedValue);

  var _isPrefixedValue = isPrefixedValue;

  var _isPrefixedValue2 = _interopRequireDefault(_isPrefixedValue);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }

  function calc(property, value) {
    if (typeof value === 'string' && !(0, _isPrefixedValue2.default)(value) && value.indexOf('calc(') > -1) {
      return (0, _joinPrefixedValue2.default)(property, value, function (prefix, value) {
        return value.replace(/calc\(/g, prefix + 'calc(');
      });
    }
  }
  module.exports = exports['default'];
});

var cursor_1 = createCommonjsModule(function (module, exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = cursor;

  var _joinPrefixedValue = joinPrefixedValue;

  var _joinPrefixedValue2 = _interopRequireDefault(_joinPrefixedValue);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }

  var values = {
    'zoom-in': true,
    'zoom-out': true,
    grab: true,
    grabbing: true
  };

  function cursor(property, value) {
    if (property === 'cursor' && values[value]) {
      return (0, _joinPrefixedValue2.default)(property, value);
    }
  }
  module.exports = exports['default'];
});

var flex_1 = createCommonjsModule(function (module, exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = flex;
  var values = { flex: true, 'inline-flex': true };

  function flex(property, value) {
    if (property === 'display' && values[value]) {
      return {
        display: ['-webkit-box', '-moz-box', '-ms-' + value + 'box', '-webkit-' + value, value]
      };
    }
  }
  module.exports = exports['default'];
});

var sizing_1 = createCommonjsModule(function (module, exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = sizing;

  var _joinPrefixedValue = joinPrefixedValue;

  var _joinPrefixedValue2 = _interopRequireDefault(_joinPrefixedValue);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }

  var properties = {
    maxHeight: true,
    maxWidth: true,
    width: true,
    height: true,
    columnWidth: true,
    minWidth: true,
    minHeight: true
  };
  var values = {
    'min-content': true,
    'max-content': true,
    'fill-available': true,
    'fit-content': true,
    'contain-floats': true
  };

  function sizing(property, value) {
    if (properties[property] && values[value]) {
      return (0, _joinPrefixedValue2.default)(property, value);
    }
  }
  module.exports = exports['default'];
});

var gradient_1 = createCommonjsModule(function (module, exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = gradient;

  var _joinPrefixedValue = joinPrefixedValue;

  var _joinPrefixedValue2 = _interopRequireDefault(_joinPrefixedValue);

  var _isPrefixedValue = isPrefixedValue;

  var _isPrefixedValue2 = _interopRequireDefault(_isPrefixedValue);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }

  var values = /linear-gradient|radial-gradient|repeating-linear-gradient|repeating-radial-gradient/;

  function gradient(property, value) {
    if (typeof value === 'string' && !(0, _isPrefixedValue2.default)(value) && value.match(values) !== null) {
      return (0, _joinPrefixedValue2.default)(property, value);
    }
  }
  module.exports = exports['default'];
});

var uppercasePattern = /[A-Z]/g;
var msPattern$2 = /^ms-/;
var cache = {};

function hyphenateStyleName$2(string) {
  return string in cache ? cache[string] : cache[string] = string.replace(uppercasePattern, '-$&').toLowerCase().replace(msPattern$2, '-ms-');
}

var index$8 = hyphenateStyleName$2;

var transition_1 = createCommonjsModule(function (module, exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = transition;

  var _hyphenateStyleName = index$8;

  var _hyphenateStyleName2 = _interopRequireDefault(_hyphenateStyleName);

  var _capitalizeString = capitalizeString;

  var _capitalizeString2 = _interopRequireDefault(_capitalizeString);

  var _isPrefixedValue = isPrefixedValue;

  var _isPrefixedValue2 = _interopRequireDefault(_isPrefixedValue);

  var _prefixProps = prefixProps;

  var _prefixProps2 = _interopRequireDefault(_prefixProps);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
    } else {
      obj[key] = value;
    }return obj;
  }

  var properties = {
    transition: true,
    transitionProperty: true,
    WebkitTransition: true,
    WebkitTransitionProperty: true
  };

  function transition(property, value) {
    // also check for already prefixed transitions
    if (typeof value === 'string' && properties[property]) {
      var _ref2;

      var outputValue = prefixValue(value);
      var webkitOutput = outputValue.split(/,(?![^()]*(?:\([^()]*\))?\))/g).filter(function (value) {
        return value.match(/-moz-|-ms-/) === null;
      }).join(',');

      // if the property is already prefixed
      if (property.indexOf('Webkit') > -1) {
        return _defineProperty({}, property, webkitOutput);
      }

      return _ref2 = {}, _defineProperty(_ref2, 'Webkit' + (0, _capitalizeString2.default)(property), webkitOutput), _defineProperty(_ref2, property, outputValue), _ref2;
    }
  }

  function prefixValue(value) {
    if ((0, _isPrefixedValue2.default)(value)) {
      return value;
    }

    // only split multi values, not cubic beziers
    var multipleValues = value.split(/,(?![^()]*(?:\([^()]*\))?\))/g);

    // iterate each single value and check for transitioned properties
    // that need to be prefixed as well
    multipleValues.forEach(function (val, index) {
      multipleValues[index] = Object.keys(_prefixProps2.default).reduce(function (out, prefix) {
        var dashCasePrefix = '-' + prefix.toLowerCase() + '-';

        Object.keys(_prefixProps2.default[prefix]).forEach(function (prop) {
          var dashCaseProperty = (0, _hyphenateStyleName2.default)(prop);

          if (val.indexOf(dashCaseProperty) > -1 && dashCaseProperty !== 'order') {
            // join all prefixes and create a new value
            out = val.replace(dashCaseProperty, dashCasePrefix + dashCaseProperty) + ',' + out;
          }
        });
        return out;
      }, val);
    });

    return multipleValues.join(',');
  }
  module.exports = exports['default'];
});

var flexboxIE_1 = createCommonjsModule(function (module, exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = flexboxIE;

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
    } else {
      obj[key] = value;
    }return obj;
  }

  var alternativeValues = {
    'space-around': 'distribute',
    'space-between': 'justify',
    'flex-start': 'start',
    'flex-end': 'end'
  };
  var alternativeProps = {
    alignContent: 'msFlexLinePack',
    alignSelf: 'msFlexItemAlign',
    alignItems: 'msFlexAlign',
    justifyContent: 'msFlexPack',
    order: 'msFlexOrder',
    flexGrow: 'msFlexPositive',
    flexShrink: 'msFlexNegative',
    flexBasis: 'msPreferredSize'
  };

  function flexboxIE(property, value) {
    if (alternativeProps[property]) {
      return _defineProperty({}, alternativeProps[property], alternativeValues[value] || value);
    }
  }
  module.exports = exports['default'];
});

var flexboxOld_1 = createCommonjsModule(function (module, exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = flexboxOld;

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
    } else {
      obj[key] = value;
    }return obj;
  }

  var alternativeValues = {
    'space-around': 'justify',
    'space-between': 'justify',
    'flex-start': 'start',
    'flex-end': 'end',
    'wrap-reverse': 'multiple',
    wrap: 'multiple'
  };

  var alternativeProps = {
    alignItems: 'WebkitBoxAlign',
    justifyContent: 'WebkitBoxPack',
    flexWrap: 'WebkitBoxLines'
  };

  function flexboxOld(property, value) {
    if (property === 'flexDirection' && typeof value === 'string') {
      return {
        WebkitBoxOrient: value.indexOf('column') > -1 ? 'vertical' : 'horizontal',
        WebkitBoxDirection: value.indexOf('reverse') > -1 ? 'reverse' : 'normal'
      };
    }
    if (alternativeProps[property]) {
      return _defineProperty({}, alternativeProps[property], alternativeValues[value] || value);
    }
  }
  module.exports = exports['default'];
});

var prefixAll_1 = createCommonjsModule(function (module, exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = prefixAll;

  var _prefixProps = prefixProps;

  var _prefixProps2 = _interopRequireDefault(_prefixProps);

  var _capitalizeString = capitalizeString;

  var _capitalizeString2 = _interopRequireDefault(_capitalizeString);

  var _sortPrefixedStyle = sortPrefixedStyle_1;

  var _sortPrefixedStyle2 = _interopRequireDefault(_sortPrefixedStyle);

  var _position = position_1;

  var _position2 = _interopRequireDefault(_position);

  var _calc = calc_1;

  var _calc2 = _interopRequireDefault(_calc);

  var _cursor = cursor_1;

  var _cursor2 = _interopRequireDefault(_cursor);

  var _flex = flex_1;

  var _flex2 = _interopRequireDefault(_flex);

  var _sizing = sizing_1;

  var _sizing2 = _interopRequireDefault(_sizing);

  var _gradient = gradient_1;

  var _gradient2 = _interopRequireDefault(_gradient);

  var _transition = transition_1;

  var _transition2 = _interopRequireDefault(_transition);

  var _flexboxIE = flexboxIE_1;

  var _flexboxIE2 = _interopRequireDefault(_flexboxIE);

  var _flexboxOld = flexboxOld_1;

  var _flexboxOld2 = _interopRequireDefault(_flexboxOld);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }

  // special flexbox specifications


  var plugins = [_position2.default, _calc2.default, _cursor2.default, _sizing2.default, _gradient2.default, _transition2.default, _flexboxIE2.default, _flexboxOld2.default, _flex2.default];

  /**
   * Returns a prefixed version of the style object using all vendor prefixes
   * @param {Object} styles - Style object that gets prefixed properties added
   * @returns {Object} - Style object with prefixed properties and values
   */
  function prefixAll(styles) {
    Object.keys(styles).forEach(function (property) {
      var value = styles[property];
      if (value instanceof Object && !Array.isArray(value)) {
        // recurse through nested style objects
        styles[property] = prefixAll(value);
      } else {
        Object.keys(_prefixProps2.default).forEach(function (prefix) {
          var properties = _prefixProps2.default[prefix];
          // add prefixes if needed
          if (properties[property]) {
            styles[prefix + (0, _capitalizeString2.default)(property)] = value;
          }
        });
      }
    });

    Object.keys(styles).forEach(function (property) {
      [].concat(styles[property]).forEach(function (value, index) {
        // resolve every special plugins
        plugins.forEach(function (plugin) {
          return assignStyles(styles, plugin(property, value));
        });
      });
    });

    return (0, _sortPrefixedStyle2.default)(styles);
  }

  function assignStyles(base) {
    var extend = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    Object.keys(extend).forEach(function (property) {
      var baseValue = base[property];
      if (Array.isArray(baseValue)) {
        [].concat(extend[property]).forEach(function (value) {
          var valueIndex = baseValue.indexOf(value);
          if (valueIndex > -1) {
            base[property].splice(valueIndex, 1);
          }
          base[property].push(value);
        });
      } else {
        base[property] = extend[property];
      }
    });
  }
  module.exports = exports['default'];
});

var _static = prefixAll_1;

//      
// eslint-disable-next-line
var autoprefix = (function (root) {
  root.walkDecls(function (decl) {
    /* No point even checking custom props */
    if (/^--/.test(decl.prop)) return;

    var objStyle = defineProperty({}, camelizeStyleName_1(decl.prop), decl.value);
    var prefixed = _static(objStyle);
    Object.keys(prefixed).reverse().forEach(function (newProp) {
      var newVals = prefixed[newProp];
      var newValArray = Array.isArray(newVals) ? newVals : [newVals];
      newValArray.forEach(function (newVal) {
        decl.cloneBefore({
          prop: hyphenateStyleName_1(newProp),
          value: newVal
        });
      });
    });
    decl.remove();
  });
});

//      
/*
 ComponentStyle is all the CSS-specific stuff, not
 the React-specific stuff.
 */
var _ComponentStyle = (function (nameGenerator) {
  var inserted = {};

  var ComponentStyle = function () {
    function ComponentStyle(rules) {
      classCallCheck(this, ComponentStyle);

      this.rules = rules;
      if (!styleSheet.injected) styleSheet.inject();
      this.insertedRule = styleSheet.insert('');
    }

    /*
     * Flattens a rule set into valid CSS
     * Hashes it, wraps the whole chunk in a ._hashName {}
     * Parses that with PostCSS then runs PostCSS-Nested on it
     * Returns the hash to be injected on render()
     * */


    createClass(ComponentStyle, [{
      key: 'generateAndInjectStyles',
      value: function generateAndInjectStyles(executionContext) {
        var flatCSS = flatten(this.rules, executionContext).join('').replace(/^\s*\/\/.*$/gm, ''); // replace JS comments
        var hash = hashStr(flatCSS);
        if (!inserted[hash]) {
          var selector = nameGenerator(hash);
          inserted[hash] = selector;
          var root = safeParse('.' + selector + ' { ' + flatCSS + ' }');
          process$2(root);
          autoprefix(root);
          this.insertedRule.appendRule(root.toResult().css);
        }
        return inserted[hash];
      }
    }]);
    return ComponentStyle;
  }();

  return ComponentStyle;
});

//      
/* globals ReactClass */

var withTheme = (function (Component$$1) {
  var _class, _temp2;

  return _temp2 = _class = function (_React$Component) {
    inherits(_class, _React$Component);

    function _class() {
      var _ref;

      var _temp, _this, _ret;

      classCallCheck(this, _class);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = _class.__proto__ || Object.getPrototypeOf(_class)).call.apply(_ref, [this].concat(args))), _this), _this.state = {}, _temp), possibleConstructorReturn(_this, _ret);
    }

    createClass(_class, [{
      key: 'componentWillMount',
      value: function componentWillMount() {
        var _this2 = this;

        if (!this.context[CHANNEL]) {
          throw new Error('[withTheme] Please use ThemeProvider to be able to use withTheme');
        }

        var subscribe = this.context[CHANNEL];
        this.unsubscribe = subscribe(function (theme) {
          _this2.setState({ theme: theme });
        });
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        if (typeof this.unsubscribe === 'function') this.unsubscribe();
      }
    }, {
      key: 'render',
      value: function render() {
        var theme = this.state.theme;


        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Component$$1, _extends({ theme: theme }, this.props));
      }
    }]);
    return _class;
  }(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component), _class.contextTypes = defineProperty({}, CHANNEL, __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.func), _temp2;
});

//      

/* Import singletons */
/* Import singleton constructors */
/* Import components */
/* Import Higher Order Components */
/* Instantiate singletons */
var keyframes = _keyframes(generateAlphabeticName);
var styled = _styled(_styledComponent(_ComponentStyle(generateAlphabeticName)));

/* harmony default export */ __webpack_exports__["default"] = styled;


/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.successColorDarkest = exports.successColorDarker = exports.successColorDark = exports.successColorLightest = exports.successColorLighter = exports.successColorLight = exports.successColor = exports.successBaseColor = exports.errorColorDarkest = exports.errorColorDarker = exports.errorColorDark = exports.errorColorLightest = exports.errorColorLighter = exports.errorColorLight = exports.errorColor = exports.errorBaseColor = exports.secondaryColorDarkest = exports.secondaryColorDarker = exports.secondaryColorDark = exports.secondaryColorLightest = exports.secondaryColorLighter = exports.secondaryColorLight = exports.secondaryColor = exports.secondaryBaseColor = exports.primaryColorDarkest = exports.primaryColorDarker = exports.primaryColorDark = exports.primaryColorLightest = exports.primaryColorLighter = exports.primaryColorLight = exports.primaryColor = exports.primaryBaseColor = exports.greyDarkest = exports.greyDarker = exports.greyDark = exports.greyLight = exports.greyLighter = exports.greyLightest = exports.textColorLight = exports.textColorDark = exports.infoColor = exports.warnColor = undefined;

var _color = __webpack_require__(32);

var _color2 = _interopRequireDefault(_color);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Theme variables
 */

var basePrimary = '#2490ec'; /* eslint-disable max-len */

var baseSecondary = '#b57bff';
var baseError = '#ea4444';
var baseSuccess = '#5bde4e';

var warnColor = exports.warnColor = '#ffb741';
var infoColor = exports.infoColor = '#99d5f5';
var textColorDark = exports.textColorDark = '#444';
var textColorLight = exports.textColorLight = '#fff';

var greyLightest = exports.greyLightest = '#f7f7f7';
var greyLighter = exports.greyLighter = '#f2f2f2';
var greyLight = exports.greyLight = '#eee';
var greyDark = exports.greyDark = '#ccc';
var greyDarker = exports.greyDarker = '#888';
var greyDarkest = exports.greyDarkest = '#666';

// Base `Color` can be used to create additional variations
var primaryBaseColor = exports.primaryBaseColor = (0, _color2.default)(basePrimary);
var primaryColor = exports.primaryColor = (0, _color2.default)(basePrimary).hsl().string();
var primaryColorLight = exports.primaryColorLight = (0, _color2.default)(basePrimary).lighten(0.3).hsl().string();
var primaryColorLighter = exports.primaryColorLighter = (0, _color2.default)(basePrimary).lighten(0.6).hsl().string();
var primaryColorLightest = exports.primaryColorLightest = (0, _color2.default)(basePrimary).lighten(0.8).hsl().string();
var primaryColorDark = exports.primaryColorDark = (0, _color2.default)(basePrimary).darken(0.2).hsl().string();
var primaryColorDarker = exports.primaryColorDarker = (0, _color2.default)(basePrimary).darken(0.4).hsl().string();
var primaryColorDarkest = exports.primaryColorDarkest = (0, _color2.default)(basePrimary).darken(0.6).hsl().string();

var secondaryBaseColor = exports.secondaryBaseColor = (0, _color2.default)(baseSecondary);
var secondaryColor = exports.secondaryColor = (0, _color2.default)(baseSecondary).hsl().string();
var secondaryColorLight = exports.secondaryColorLight = (0, _color2.default)(baseSecondary).lighten(0.1).hsl().string();
var secondaryColorLighter = exports.secondaryColorLighter = (0, _color2.default)(baseSecondary).lighten(0.2).hsl().string();
var secondaryColorLightest = exports.secondaryColorLightest = (0, _color2.default)(baseSecondary).lighten(0.3).hsl().string();
var secondaryColorDark = exports.secondaryColorDark = (0, _color2.default)(baseSecondary).darken(0.2).hsl().string();
var secondaryColorDarker = exports.secondaryColorDarker = (0, _color2.default)(baseSecondary).darken(0.4).hsl().string();
var secondaryColorDarkest = exports.secondaryColorDarkest = (0, _color2.default)(baseSecondary).darken(0.6).hsl().string();

var errorBaseColor = exports.errorBaseColor = (0, _color2.default)(baseError);
var errorColor = exports.errorColor = (0, _color2.default)(baseError).hsl().string();
var errorColorLight = exports.errorColorLight = (0, _color2.default)(baseError).lighten(0.2).hsl().string();
var errorColorLighter = exports.errorColorLighter = (0, _color2.default)(baseError).lighten(0.4).hsl().string();
var errorColorLightest = exports.errorColorLightest = (0, _color2.default)(baseError).lighten(0.6).hsl().string();
var errorColorDark = exports.errorColorDark = (0, _color2.default)(baseError).darken(0.2).hsl().string();
var errorColorDarker = exports.errorColorDarker = (0, _color2.default)(baseError).darken(0.4).hsl().string();
var errorColorDarkest = exports.errorColorDarkest = (0, _color2.default)(baseError).darken(0.6).hsl().string();

var successBaseColor = exports.successBaseColor = (0, _color2.default)(baseSuccess);
var successColor = exports.successColor = (0, _color2.default)(baseSuccess).hsl().string();
var successColorLight = exports.successColorLight = (0, _color2.default)(baseSuccess).lighten(0.2).hsl().string();
var successColorLighter = exports.successColorLighter = (0, _color2.default)(baseSuccess).lighten(0.4).hsl().string();
var successColorLightest = exports.successColorLightest = (0, _color2.default)(baseSuccess).lighten(0.6).hsl().string();
var successColorDark = exports.successColorDark = (0, _color2.default)(baseSuccess).darken(0.2).hsl().string();
var successColorDarker = exports.successColorDarker = (0, _color2.default)(baseSuccess).darken(0.4).hsl().string();
var successColorDarkest = exports.successColorDarkest = (0, _color2.default)(baseSuccess).darken(0.6).hsl().string();

/* eslint-enable max-len */

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Button = __webpack_require__(8);

Object.defineProperty(exports, 'Button', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Button).default;
  }
});

var _IconButton = __webpack_require__(14);

Object.defineProperty(exports, 'IconButton', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_IconButton).default;
  }
});

var _Padder = __webpack_require__(19);

Object.defineProperty(exports, 'Padder', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Padder).default;
  }
});

var _Input = __webpack_require__(15);

Object.defineProperty(exports, 'Input', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Input).default;
  }
});

var _Textarea = __webpack_require__(25);

Object.defineProperty(exports, 'Textarea', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Textarea).default;
  }
});

var _FormControl = __webpack_require__(12);

Object.defineProperty(exports, 'FormControl', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_FormControl).default;
  }
});

var _Select = __webpack_require__(21);

Object.defineProperty(exports, 'Select', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Select).default;
  }
});

var _Card = __webpack_require__(9);

Object.defineProperty(exports, 'Card', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Card).default;
  }
});
Object.defineProperty(exports, 'CardAnimated', {
  enumerable: true,
  get: function get() {
    return _Card.CardAnimated;
  }
});

var _LoadingOverlay = __webpack_require__(18);

Object.defineProperty(exports, 'LoadingOverlay', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_LoadingOverlay).default;
  }
});

var _Icon = __webpack_require__(5);

Object.defineProperty(exports, 'Icon', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Icon).default;
  }
});

var _LineSeparator = __webpack_require__(17);

Object.defineProperty(exports, 'LineSeparator', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_LineSeparator).default;
  }
});

var _Tooltip = __webpack_require__(26);

Object.defineProperty(exports, 'Tooltip', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Tooltip).default;
  }
});

var _Spinner = __webpack_require__(22);

Object.defineProperty(exports, 'Spinner', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Spinner).default;
  }
});

var _ContentEditable = __webpack_require__(11);

Object.defineProperty(exports, 'ContentEditable', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_ContentEditable).default;
  }
});

var _CircleProgress = __webpack_require__(10);

Object.defineProperty(exports, 'CircleProgress', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_CircleProgress).default;
  }
});

var _PlaceholderRows = __webpack_require__(20);

Object.defineProperty(exports, 'PlaceholderRows', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_PlaceholderRows).default;
  }
});

var _Text = __webpack_require__(24);

Object.defineProperty(exports, 'Text', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Text).default;
  }
});

var _Heading = __webpack_require__(13);

Object.defineProperty(exports, 'Heading', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Heading).default;
  }
});

var _media = __webpack_require__(4);

Object.defineProperty(exports, 'media', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_media).default;
  }
});

var _Layout = __webpack_require__(16);

Object.defineProperty(exports, 'Layout', {
  enumerable: true,
  get: function get() {
    return _Layout.Layout;
  }
});
Object.defineProperty(exports, 'Box', {
  enumerable: true,
  get: function get() {
    return _Layout.Box;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n    @media (max-width: ', 'em) {\n      ', '\n    }\n  '], ['\n    @media (max-width: ', 'em) {\n      ', '\n    }\n  ']);

var _styledComponents = __webpack_require__(0);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); } /* eslint-disable no-param-reassign */


var sizes = {
  giant: 1170,
  desktop: 992,
  tablet: 768,
  phone: 420
};

// iterate through the sizes and create a media template
var media = Object.keys(sizes).reduce(function (accumulator, label) {
  var emSize = sizes[label] / 16;
  accumulator[label] = function () {
    return (0, _styledComponents.css)(_templateObject, emSize, _styledComponents.css.apply(undefined, arguments));
  };
  return accumulator;
}, {});

exports.default = media;

/* eslint-enable no-param-reassign */

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  font-size: ', ';\n  ', ';\n  ', '\n  ', '\n'], ['\n  font-size: ', ';\n  ', ';\n  ', '\n  ', '\n']);

var _styledComponents = __webpack_require__(0);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var DEFAULT_GUTTER = 8;

var Icon = _styledComponents2.default.i(_templateObject, function (props) {
  return props.size || '1.2rem';
}, function (props) {
  return props.color && 'color: ' + props.color + ';';
}, function (props) {
  return props.mright && 'margin-right: ' + (props.gutter || DEFAULT_GUTTER) + 'px;';
}, function (props) {
  return props.mleft && 'margin-left: ' + (props.gutter || DEFAULT_GUTTER) + 'px;';
});

exports.default = Icon;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

/* MIT license */
var cssKeywords = __webpack_require__(7);

// NOTE: conversions should only return primitive values (i.e. arrays, or
//       values that give correct `typeof` results).
//       do not use box values types (i.e. Number(), String(), etc.)

var reverseKeywords = {};
for (var key in cssKeywords) {
	if (cssKeywords.hasOwnProperty(key)) {
		reverseKeywords[cssKeywords[key]] = key;
	}
}

var convert = module.exports = {
	rgb: {channels: 3, labels: 'rgb'},
	hsl: {channels: 3, labels: 'hsl'},
	hsv: {channels: 3, labels: 'hsv'},
	hwb: {channels: 3, labels: 'hwb'},
	cmyk: {channels: 4, labels: 'cmyk'},
	xyz: {channels: 3, labels: 'xyz'},
	lab: {channels: 3, labels: 'lab'},
	lch: {channels: 3, labels: 'lch'},
	hex: {channels: 1, labels: ['hex']},
	keyword: {channels: 1, labels: ['keyword']},
	ansi16: {channels: 1, labels: ['ansi16']},
	ansi256: {channels: 1, labels: ['ansi256']},
	hcg: {channels: 3, labels: ['h', 'c', 'g']},
	apple: {channels: 3, labels: ['r16', 'g16', 'b16']},
	gray: {channels: 1, labels: ['gray']}
};

// hide .channels and .labels properties
for (var model in convert) {
	if (convert.hasOwnProperty(model)) {
		if (!('channels' in convert[model])) {
			throw new Error('missing channels property: ' + model);
		}

		if (!('labels' in convert[model])) {
			throw new Error('missing channel labels property: ' + model);
		}

		if (convert[model].labels.length !== convert[model].channels) {
			throw new Error('channel and label counts mismatch: ' + model);
		}

		var channels = convert[model].channels;
		var labels = convert[model].labels;
		delete convert[model].channels;
		delete convert[model].labels;
		Object.defineProperty(convert[model], 'channels', {value: channels});
		Object.defineProperty(convert[model], 'labels', {value: labels});
	}
}

convert.rgb.hsl = function (rgb) {
	var r = rgb[0] / 255;
	var g = rgb[1] / 255;
	var b = rgb[2] / 255;
	var min = Math.min(r, g, b);
	var max = Math.max(r, g, b);
	var delta = max - min;
	var h;
	var s;
	var l;

	if (max === min) {
		h = 0;
	} else if (r === max) {
		h = (g - b) / delta;
	} else if (g === max) {
		h = 2 + (b - r) / delta;
	} else if (b === max) {
		h = 4 + (r - g) / delta;
	}

	h = Math.min(h * 60, 360);

	if (h < 0) {
		h += 360;
	}

	l = (min + max) / 2;

	if (max === min) {
		s = 0;
	} else if (l <= 0.5) {
		s = delta / (max + min);
	} else {
		s = delta / (2 - max - min);
	}

	return [h, s * 100, l * 100];
};

convert.rgb.hsv = function (rgb) {
	var r = rgb[0];
	var g = rgb[1];
	var b = rgb[2];
	var min = Math.min(r, g, b);
	var max = Math.max(r, g, b);
	var delta = max - min;
	var h;
	var s;
	var v;

	if (max === 0) {
		s = 0;
	} else {
		s = (delta / max * 1000) / 10;
	}

	if (max === min) {
		h = 0;
	} else if (r === max) {
		h = (g - b) / delta;
	} else if (g === max) {
		h = 2 + (b - r) / delta;
	} else if (b === max) {
		h = 4 + (r - g) / delta;
	}

	h = Math.min(h * 60, 360);

	if (h < 0) {
		h += 360;
	}

	v = ((max / 255) * 1000) / 10;

	return [h, s, v];
};

convert.rgb.hwb = function (rgb) {
	var r = rgb[0];
	var g = rgb[1];
	var b = rgb[2];
	var h = convert.rgb.hsl(rgb)[0];
	var w = 1 / 255 * Math.min(r, Math.min(g, b));

	b = 1 - 1 / 255 * Math.max(r, Math.max(g, b));

	return [h, w * 100, b * 100];
};

convert.rgb.cmyk = function (rgb) {
	var r = rgb[0] / 255;
	var g = rgb[1] / 255;
	var b = rgb[2] / 255;
	var c;
	var m;
	var y;
	var k;

	k = Math.min(1 - r, 1 - g, 1 - b);
	c = (1 - r - k) / (1 - k) || 0;
	m = (1 - g - k) / (1 - k) || 0;
	y = (1 - b - k) / (1 - k) || 0;

	return [c * 100, m * 100, y * 100, k * 100];
};

/**
 * See https://en.m.wikipedia.org/wiki/Euclidean_distance#Squared_Euclidean_distance
 * */
function comparativeDistance(x, y) {
	return (
		Math.pow(x[0] - y[0], 2) +
		Math.pow(x[1] - y[1], 2) +
		Math.pow(x[2] - y[2], 2)
	);
}

convert.rgb.keyword = function (rgb) {
	var reversed = reverseKeywords[rgb];
	if (reversed) {
		return reversed;
	}

	var currentClosestDistance = Infinity;
	var currentClosestKeyword;

	for (var keyword in cssKeywords) {
		if (cssKeywords.hasOwnProperty(keyword)) {
			var value = cssKeywords[keyword];

			// Compute comparative distance
			var distance = comparativeDistance(rgb, value);

			// Check if its less, if so set as closest
			if (distance < currentClosestDistance) {
				currentClosestDistance = distance;
				currentClosestKeyword = keyword;
			}
		}
	}

	return currentClosestKeyword;
};

convert.keyword.rgb = function (keyword) {
	return cssKeywords[keyword];
};

convert.rgb.xyz = function (rgb) {
	var r = rgb[0] / 255;
	var g = rgb[1] / 255;
	var b = rgb[2] / 255;

	// assume sRGB
	r = r > 0.04045 ? Math.pow(((r + 0.055) / 1.055), 2.4) : (r / 12.92);
	g = g > 0.04045 ? Math.pow(((g + 0.055) / 1.055), 2.4) : (g / 12.92);
	b = b > 0.04045 ? Math.pow(((b + 0.055) / 1.055), 2.4) : (b / 12.92);

	var x = (r * 0.4124) + (g * 0.3576) + (b * 0.1805);
	var y = (r * 0.2126) + (g * 0.7152) + (b * 0.0722);
	var z = (r * 0.0193) + (g * 0.1192) + (b * 0.9505);

	return [x * 100, y * 100, z * 100];
};

convert.rgb.lab = function (rgb) {
	var xyz = convert.rgb.xyz(rgb);
	var x = xyz[0];
	var y = xyz[1];
	var z = xyz[2];
	var l;
	var a;
	var b;

	x /= 95.047;
	y /= 100;
	z /= 108.883;

	x = x > 0.008856 ? Math.pow(x, 1 / 3) : (7.787 * x) + (16 / 116);
	y = y > 0.008856 ? Math.pow(y, 1 / 3) : (7.787 * y) + (16 / 116);
	z = z > 0.008856 ? Math.pow(z, 1 / 3) : (7.787 * z) + (16 / 116);

	l = (116 * y) - 16;
	a = 500 * (x - y);
	b = 200 * (y - z);

	return [l, a, b];
};

convert.hsl.rgb = function (hsl) {
	var h = hsl[0] / 360;
	var s = hsl[1] / 100;
	var l = hsl[2] / 100;
	var t1;
	var t2;
	var t3;
	var rgb;
	var val;

	if (s === 0) {
		val = l * 255;
		return [val, val, val];
	}

	if (l < 0.5) {
		t2 = l * (1 + s);
	} else {
		t2 = l + s - l * s;
	}

	t1 = 2 * l - t2;

	rgb = [0, 0, 0];
	for (var i = 0; i < 3; i++) {
		t3 = h + 1 / 3 * -(i - 1);
		if (t3 < 0) {
			t3++;
		}
		if (t3 > 1) {
			t3--;
		}

		if (6 * t3 < 1) {
			val = t1 + (t2 - t1) * 6 * t3;
		} else if (2 * t3 < 1) {
			val = t2;
		} else if (3 * t3 < 2) {
			val = t1 + (t2 - t1) * (2 / 3 - t3) * 6;
		} else {
			val = t1;
		}

		rgb[i] = val * 255;
	}

	return rgb;
};

convert.hsl.hsv = function (hsl) {
	var h = hsl[0];
	var s = hsl[1] / 100;
	var l = hsl[2] / 100;
	var smin = s;
	var lmin = Math.max(l, 0.01);
	var sv;
	var v;

	l *= 2;
	s *= (l <= 1) ? l : 2 - l;
	smin *= lmin <= 1 ? lmin : 2 - lmin;
	v = (l + s) / 2;
	sv = l === 0 ? (2 * smin) / (lmin + smin) : (2 * s) / (l + s);

	return [h, sv * 100, v * 100];
};

convert.hsv.rgb = function (hsv) {
	var h = hsv[0] / 60;
	var s = hsv[1] / 100;
	var v = hsv[2] / 100;
	var hi = Math.floor(h) % 6;

	var f = h - Math.floor(h);
	var p = 255 * v * (1 - s);
	var q = 255 * v * (1 - (s * f));
	var t = 255 * v * (1 - (s * (1 - f)));
	v *= 255;

	switch (hi) {
		case 0:
			return [v, t, p];
		case 1:
			return [q, v, p];
		case 2:
			return [p, v, t];
		case 3:
			return [p, q, v];
		case 4:
			return [t, p, v];
		case 5:
			return [v, p, q];
	}
};

convert.hsv.hsl = function (hsv) {
	var h = hsv[0];
	var s = hsv[1] / 100;
	var v = hsv[2] / 100;
	var vmin = Math.max(v, 0.01);
	var lmin;
	var sl;
	var l;

	l = (2 - s) * v;
	lmin = (2 - s) * vmin;
	sl = s * vmin;
	sl /= (lmin <= 1) ? lmin : 2 - lmin;
	sl = sl || 0;
	l /= 2;

	return [h, sl * 100, l * 100];
};

// http://dev.w3.org/csswg/css-color/#hwb-to-rgb
convert.hwb.rgb = function (hwb) {
	var h = hwb[0] / 360;
	var wh = hwb[1] / 100;
	var bl = hwb[2] / 100;
	var ratio = wh + bl;
	var i;
	var v;
	var f;
	var n;

	// wh + bl cant be > 1
	if (ratio > 1) {
		wh /= ratio;
		bl /= ratio;
	}

	i = Math.floor(6 * h);
	v = 1 - bl;
	f = 6 * h - i;

	if ((i & 0x01) !== 0) {
		f = 1 - f;
	}

	n = wh + f * (v - wh); // linear interpolation

	var r;
	var g;
	var b;
	switch (i) {
		default:
		case 6:
		case 0: r = v; g = n; b = wh; break;
		case 1: r = n; g = v; b = wh; break;
		case 2: r = wh; g = v; b = n; break;
		case 3: r = wh; g = n; b = v; break;
		case 4: r = n; g = wh; b = v; break;
		case 5: r = v; g = wh; b = n; break;
	}

	return [r * 255, g * 255, b * 255];
};

convert.cmyk.rgb = function (cmyk) {
	var c = cmyk[0] / 100;
	var m = cmyk[1] / 100;
	var y = cmyk[2] / 100;
	var k = cmyk[3] / 100;
	var r;
	var g;
	var b;

	r = 1 - Math.min(1, c * (1 - k) + k);
	g = 1 - Math.min(1, m * (1 - k) + k);
	b = 1 - Math.min(1, y * (1 - k) + k);

	return [r * 255, g * 255, b * 255];
};

convert.xyz.rgb = function (xyz) {
	var x = xyz[0] / 100;
	var y = xyz[1] / 100;
	var z = xyz[2] / 100;
	var r;
	var g;
	var b;

	r = (x * 3.2406) + (y * -1.5372) + (z * -0.4986);
	g = (x * -0.9689) + (y * 1.8758) + (z * 0.0415);
	b = (x * 0.0557) + (y * -0.2040) + (z * 1.0570);

	// assume sRGB
	r = r > 0.0031308
		? ((1.055 * Math.pow(r, 1.0 / 2.4)) - 0.055)
		: r * 12.92;

	g = g > 0.0031308
		? ((1.055 * Math.pow(g, 1.0 / 2.4)) - 0.055)
		: g * 12.92;

	b = b > 0.0031308
		? ((1.055 * Math.pow(b, 1.0 / 2.4)) - 0.055)
		: b * 12.92;

	r = Math.min(Math.max(0, r), 1);
	g = Math.min(Math.max(0, g), 1);
	b = Math.min(Math.max(0, b), 1);

	return [r * 255, g * 255, b * 255];
};

convert.xyz.lab = function (xyz) {
	var x = xyz[0];
	var y = xyz[1];
	var z = xyz[2];
	var l;
	var a;
	var b;

	x /= 95.047;
	y /= 100;
	z /= 108.883;

	x = x > 0.008856 ? Math.pow(x, 1 / 3) : (7.787 * x) + (16 / 116);
	y = y > 0.008856 ? Math.pow(y, 1 / 3) : (7.787 * y) + (16 / 116);
	z = z > 0.008856 ? Math.pow(z, 1 / 3) : (7.787 * z) + (16 / 116);

	l = (116 * y) - 16;
	a = 500 * (x - y);
	b = 200 * (y - z);

	return [l, a, b];
};

convert.lab.xyz = function (lab) {
	var l = lab[0];
	var a = lab[1];
	var b = lab[2];
	var x;
	var y;
	var z;

	y = (l + 16) / 116;
	x = a / 500 + y;
	z = y - b / 200;

	var y2 = Math.pow(y, 3);
	var x2 = Math.pow(x, 3);
	var z2 = Math.pow(z, 3);
	y = y2 > 0.008856 ? y2 : (y - 16 / 116) / 7.787;
	x = x2 > 0.008856 ? x2 : (x - 16 / 116) / 7.787;
	z = z2 > 0.008856 ? z2 : (z - 16 / 116) / 7.787;

	x *= 95.047;
	y *= 100;
	z *= 108.883;

	return [x, y, z];
};

convert.lab.lch = function (lab) {
	var l = lab[0];
	var a = lab[1];
	var b = lab[2];
	var hr;
	var h;
	var c;

	hr = Math.atan2(b, a);
	h = hr * 360 / 2 / Math.PI;

	if (h < 0) {
		h += 360;
	}

	c = Math.sqrt(a * a + b * b);

	return [l, c, h];
};

convert.lch.lab = function (lch) {
	var l = lch[0];
	var c = lch[1];
	var h = lch[2];
	var a;
	var b;
	var hr;

	hr = h / 360 * 2 * Math.PI;
	a = c * Math.cos(hr);
	b = c * Math.sin(hr);

	return [l, a, b];
};

convert.rgb.ansi16 = function (args) {
	var r = args[0];
	var g = args[1];
	var b = args[2];
	var value = 1 in arguments ? arguments[1] : convert.rgb.hsv(args)[2]; // hsv -> ansi16 optimization

	value = Math.round(value / 50);

	if (value === 0) {
		return 30;
	}

	var ansi = 30
		+ ((Math.round(b / 255) << 2)
		| (Math.round(g / 255) << 1)
		| Math.round(r / 255));

	if (value === 2) {
		ansi += 60;
	}

	return ansi;
};

convert.hsv.ansi16 = function (args) {
	// optimization here; we already know the value and don't need to get
	// it converted for us.
	return convert.rgb.ansi16(convert.hsv.rgb(args), args[2]);
};

convert.rgb.ansi256 = function (args) {
	var r = args[0];
	var g = args[1];
	var b = args[2];

	// we use the extended greyscale palette here, with the exception of
	// black and white. normal palette only has 4 greyscale shades.
	if (r === g && g === b) {
		if (r < 8) {
			return 16;
		}

		if (r > 248) {
			return 231;
		}

		return Math.round(((r - 8) / 247) * 24) + 232;
	}

	var ansi = 16
		+ (36 * Math.round(r / 255 * 5))
		+ (6 * Math.round(g / 255 * 5))
		+ Math.round(b / 255 * 5);

	return ansi;
};

convert.ansi16.rgb = function (args) {
	var color = args % 10;

	// handle greyscale
	if (color === 0 || color === 7) {
		if (args > 50) {
			color += 3.5;
		}

		color = color / 10.5 * 255;

		return [color, color, color];
	}

	var mult = (~~(args > 50) + 1) * 0.5;
	var r = ((color & 1) * mult) * 255;
	var g = (((color >> 1) & 1) * mult) * 255;
	var b = (((color >> 2) & 1) * mult) * 255;

	return [r, g, b];
};

convert.ansi256.rgb = function (args) {
	// handle greyscale
	if (args >= 232) {
		var c = (args - 232) * 10 + 8;
		return [c, c, c];
	}

	args -= 16;

	var rem;
	var r = Math.floor(args / 36) / 5 * 255;
	var g = Math.floor((rem = args % 36) / 6) / 5 * 255;
	var b = (rem % 6) / 5 * 255;

	return [r, g, b];
};

convert.rgb.hex = function (args) {
	var integer = ((Math.round(args[0]) & 0xFF) << 16)
		+ ((Math.round(args[1]) & 0xFF) << 8)
		+ (Math.round(args[2]) & 0xFF);

	var string = integer.toString(16).toUpperCase();
	return '000000'.substring(string.length) + string;
};

convert.hex.rgb = function (args) {
	var match = args.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);
	if (!match) {
		return [0, 0, 0];
	}

	var colorString = match[0];

	if (match[0].length === 3) {
		colorString = colorString.split('').map(function (char) {
			return char + char;
		}).join('');
	}

	var integer = parseInt(colorString, 16);
	var r = (integer >> 16) & 0xFF;
	var g = (integer >> 8) & 0xFF;
	var b = integer & 0xFF;

	return [r, g, b];
};

convert.rgb.hcg = function (rgb) {
	var r = rgb[0] / 255;
	var g = rgb[1] / 255;
	var b = rgb[2] / 255;
	var max = Math.max(Math.max(r, g), b);
	var min = Math.min(Math.min(r, g), b);
	var chroma = (max - min);
	var grayscale;
	var hue;

	if (chroma < 1) {
		grayscale = min / (1 - chroma);
	} else {
		grayscale = 0;
	}

	if (chroma <= 0) {
		hue = 0;
	} else
	if (max === r) {
		hue = ((g - b) / chroma) % 6;
	} else
	if (max === g) {
		hue = 2 + (b - r) / chroma;
	} else {
		hue = 4 + (r - g) / chroma + 4;
	}

	hue /= 6;
	hue %= 1;

	return [hue * 360, chroma * 100, grayscale * 100];
};

convert.hsl.hcg = function (hsl) {
	var s = hsl[1] / 100;
	var l = hsl[2] / 100;
	var c = 1;
	var f = 0;

	if (l < 0.5) {
		c = 2.0 * s * l;
	} else {
		c = 2.0 * s * (1.0 - l);
	}

	if (c < 1.0) {
		f = (l - 0.5 * c) / (1.0 - c);
	}

	return [hsl[0], c * 100, f * 100];
};

convert.hsv.hcg = function (hsv) {
	var s = hsv[1] / 100;
	var v = hsv[2] / 100;

	var c = s * v;
	var f = 0;

	if (c < 1.0) {
		f = (v - c) / (1 - c);
	}

	return [hsv[0], c * 100, f * 100];
};

convert.hcg.rgb = function (hcg) {
	var h = hcg[0] / 360;
	var c = hcg[1] / 100;
	var g = hcg[2] / 100;

	if (c === 0.0) {
		return [g * 255, g * 255, g * 255];
	}

	var pure = [0, 0, 0];
	var hi = (h % 1) * 6;
	var v = hi % 1;
	var w = 1 - v;
	var mg = 0;

	switch (Math.floor(hi)) {
		case 0:
			pure[0] = 1; pure[1] = v; pure[2] = 0; break;
		case 1:
			pure[0] = w; pure[1] = 1; pure[2] = 0; break;
		case 2:
			pure[0] = 0; pure[1] = 1; pure[2] = v; break;
		case 3:
			pure[0] = 0; pure[1] = w; pure[2] = 1; break;
		case 4:
			pure[0] = v; pure[1] = 0; pure[2] = 1; break;
		default:
			pure[0] = 1; pure[1] = 0; pure[2] = w;
	}

	mg = (1.0 - c) * g;

	return [
		(c * pure[0] + mg) * 255,
		(c * pure[1] + mg) * 255,
		(c * pure[2] + mg) * 255
	];
};

convert.hcg.hsv = function (hcg) {
	var c = hcg[1] / 100;
	var g = hcg[2] / 100;

	var v = c + g * (1.0 - c);
	var f = 0;

	if (v > 0.0) {
		f = c / v;
	}

	return [hcg[0], f * 100, v * 100];
};

convert.hcg.hsl = function (hcg) {
	var c = hcg[1] / 100;
	var g = hcg[2] / 100;

	var l = g * (1.0 - c) + 0.5 * c;
	var s = 0;

	if (l > 0.0 && l < 0.5) {
		s = c / (2 * l);
	} else
	if (l >= 0.5 && l < 1.0) {
		s = c / (2 * (1 - l));
	}

	return [hcg[0], s * 100, l * 100];
};

convert.hcg.hwb = function (hcg) {
	var c = hcg[1] / 100;
	var g = hcg[2] / 100;
	var v = c + g * (1.0 - c);
	return [hcg[0], (v - c) * 100, (1 - v) * 100];
};

convert.hwb.hcg = function (hwb) {
	var w = hwb[1] / 100;
	var b = hwb[2] / 100;
	var v = 1 - b;
	var c = v - w;
	var g = 0;

	if (c < 1) {
		g = (v - c) / (1 - c);
	}

	return [hwb[0], c * 100, g * 100];
};

convert.apple.rgb = function (apple) {
	return [(apple[0] / 65535) * 255, (apple[1] / 65535) * 255, (apple[2] / 65535) * 255];
};

convert.rgb.apple = function (rgb) {
	return [(rgb[0] / 255) * 65535, (rgb[1] / 255) * 65535, (rgb[2] / 255) * 65535];
};

convert.gray.rgb = function (args) {
	return [args[0] / 100 * 255, args[0] / 100 * 255, args[0] / 100 * 255];
};

convert.gray.hsl = convert.gray.hsv = function (args) {
	return [0, 0, args[0]];
};

convert.gray.hwb = function (gray) {
	return [0, 100, gray[0]];
};

convert.gray.cmyk = function (gray) {
	return [0, 0, 0, gray[0]];
};

convert.gray.lab = function (gray) {
	return [gray[0], 0, 0];
};

convert.gray.hex = function (gray) {
	var val = Math.round(gray[0] / 100 * 255) & 0xFF;
	var integer = (val << 16) + (val << 8) + val;

	var string = integer.toString(16).toUpperCase();
	return '000000'.substring(string.length) + string;
};

convert.rgb.gray = function (rgb) {
	var val = (rgb[0] + rgb[1] + rgb[2]) / 3;
	return [val / 255 * 100];
};


/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = {
	"aliceblue": [240, 248, 255],
	"antiquewhite": [250, 235, 215],
	"aqua": [0, 255, 255],
	"aquamarine": [127, 255, 212],
	"azure": [240, 255, 255],
	"beige": [245, 245, 220],
	"bisque": [255, 228, 196],
	"black": [0, 0, 0],
	"blanchedalmond": [255, 235, 205],
	"blue": [0, 0, 255],
	"blueviolet": [138, 43, 226],
	"brown": [165, 42, 42],
	"burlywood": [222, 184, 135],
	"cadetblue": [95, 158, 160],
	"chartreuse": [127, 255, 0],
	"chocolate": [210, 105, 30],
	"coral": [255, 127, 80],
	"cornflowerblue": [100, 149, 237],
	"cornsilk": [255, 248, 220],
	"crimson": [220, 20, 60],
	"cyan": [0, 255, 255],
	"darkblue": [0, 0, 139],
	"darkcyan": [0, 139, 139],
	"darkgoldenrod": [184, 134, 11],
	"darkgray": [169, 169, 169],
	"darkgreen": [0, 100, 0],
	"darkgrey": [169, 169, 169],
	"darkkhaki": [189, 183, 107],
	"darkmagenta": [139, 0, 139],
	"darkolivegreen": [85, 107, 47],
	"darkorange": [255, 140, 0],
	"darkorchid": [153, 50, 204],
	"darkred": [139, 0, 0],
	"darksalmon": [233, 150, 122],
	"darkseagreen": [143, 188, 143],
	"darkslateblue": [72, 61, 139],
	"darkslategray": [47, 79, 79],
	"darkslategrey": [47, 79, 79],
	"darkturquoise": [0, 206, 209],
	"darkviolet": [148, 0, 211],
	"deeppink": [255, 20, 147],
	"deepskyblue": [0, 191, 255],
	"dimgray": [105, 105, 105],
	"dimgrey": [105, 105, 105],
	"dodgerblue": [30, 144, 255],
	"firebrick": [178, 34, 34],
	"floralwhite": [255, 250, 240],
	"forestgreen": [34, 139, 34],
	"fuchsia": [255, 0, 255],
	"gainsboro": [220, 220, 220],
	"ghostwhite": [248, 248, 255],
	"gold": [255, 215, 0],
	"goldenrod": [218, 165, 32],
	"gray": [128, 128, 128],
	"green": [0, 128, 0],
	"greenyellow": [173, 255, 47],
	"grey": [128, 128, 128],
	"honeydew": [240, 255, 240],
	"hotpink": [255, 105, 180],
	"indianred": [205, 92, 92],
	"indigo": [75, 0, 130],
	"ivory": [255, 255, 240],
	"khaki": [240, 230, 140],
	"lavender": [230, 230, 250],
	"lavenderblush": [255, 240, 245],
	"lawngreen": [124, 252, 0],
	"lemonchiffon": [255, 250, 205],
	"lightblue": [173, 216, 230],
	"lightcoral": [240, 128, 128],
	"lightcyan": [224, 255, 255],
	"lightgoldenrodyellow": [250, 250, 210],
	"lightgray": [211, 211, 211],
	"lightgreen": [144, 238, 144],
	"lightgrey": [211, 211, 211],
	"lightpink": [255, 182, 193],
	"lightsalmon": [255, 160, 122],
	"lightseagreen": [32, 178, 170],
	"lightskyblue": [135, 206, 250],
	"lightslategray": [119, 136, 153],
	"lightslategrey": [119, 136, 153],
	"lightsteelblue": [176, 196, 222],
	"lightyellow": [255, 255, 224],
	"lime": [0, 255, 0],
	"limegreen": [50, 205, 50],
	"linen": [250, 240, 230],
	"magenta": [255, 0, 255],
	"maroon": [128, 0, 0],
	"mediumaquamarine": [102, 205, 170],
	"mediumblue": [0, 0, 205],
	"mediumorchid": [186, 85, 211],
	"mediumpurple": [147, 112, 219],
	"mediumseagreen": [60, 179, 113],
	"mediumslateblue": [123, 104, 238],
	"mediumspringgreen": [0, 250, 154],
	"mediumturquoise": [72, 209, 204],
	"mediumvioletred": [199, 21, 133],
	"midnightblue": [25, 25, 112],
	"mintcream": [245, 255, 250],
	"mistyrose": [255, 228, 225],
	"moccasin": [255, 228, 181],
	"navajowhite": [255, 222, 173],
	"navy": [0, 0, 128],
	"oldlace": [253, 245, 230],
	"olive": [128, 128, 0],
	"olivedrab": [107, 142, 35],
	"orange": [255, 165, 0],
	"orangered": [255, 69, 0],
	"orchid": [218, 112, 214],
	"palegoldenrod": [238, 232, 170],
	"palegreen": [152, 251, 152],
	"paleturquoise": [175, 238, 238],
	"palevioletred": [219, 112, 147],
	"papayawhip": [255, 239, 213],
	"peachpuff": [255, 218, 185],
	"peru": [205, 133, 63],
	"pink": [255, 192, 203],
	"plum": [221, 160, 221],
	"powderblue": [176, 224, 230],
	"purple": [128, 0, 128],
	"rebeccapurple": [102, 51, 153],
	"red": [255, 0, 0],
	"rosybrown": [188, 143, 143],
	"royalblue": [65, 105, 225],
	"saddlebrown": [139, 69, 19],
	"salmon": [250, 128, 114],
	"sandybrown": [244, 164, 96],
	"seagreen": [46, 139, 87],
	"seashell": [255, 245, 238],
	"sienna": [160, 82, 45],
	"silver": [192, 192, 192],
	"skyblue": [135, 206, 235],
	"slateblue": [106, 90, 205],
	"slategray": [112, 128, 144],
	"slategrey": [112, 128, 144],
	"snow": [255, 250, 250],
	"springgreen": [0, 255, 127],
	"steelblue": [70, 130, 180],
	"tan": [210, 180, 140],
	"teal": [0, 128, 128],
	"thistle": [216, 191, 216],
	"tomato": [255, 99, 71],
	"turquoise": [64, 224, 208],
	"violet": [238, 130, 238],
	"wheat": [245, 222, 179],
	"white": [255, 255, 255],
	"whitesmoke": [245, 245, 245],
	"yellow": [255, 255, 0],
	"yellowgreen": [154, 205, 50]
};

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  outline: none;\n  font-size: 1rem;\n  padding: 8px 16px;\n  font-weight: normal;\n  width: ', ';\n  margin: ', ';\n  text-shadow: 1px 1px 2px rgba(0,0,0,0.1);\n  border-style: solid;\n  border-width: ', ';\n  border-radius: 4px;\n  border-color: ', ';\n  color: ', ';\n  ', '\n  ', ';\n  ', ';\n  ', '\n  ', '\n  ', '\n  ', '\n\n  &:hover {\n    background: ', ';\n    ', '\n    cursor: pointer;\n  }\n  &:active {\n    background: ', ';\n    color: ', ';\n  }\n'], ['\n  outline: none;\n  font-size: 1rem;\n  padding: 8px 16px;\n  font-weight: normal;\n  width: ', ';\n  margin: ', ';\n  text-shadow: 1px 1px 2px rgba(0,0,0,0.1);\n  border-style: solid;\n  border-width: ', ';\n  border-radius: 4px;\n  border-color: ', ';\n  color: ', ';\n  ', '\n  ', ';\n  ', ';\n  ', '\n  ', '\n  ', '\n  ', '\n\n  &:hover {\n    background: ', ';\n    ', '\n    cursor: pointer;\n  }\n  &:active {\n    background: ', ';\n    color: ', ';\n  }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n'], ['\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n']);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(0);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _defaultTheme = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function getBgColor(props) {
  var color = _defaultTheme.primaryColor;
  var colorDark = _defaultTheme.primaryColorDark;

  // Determine color based on props
  if (props.secondary) {
    color = _defaultTheme.secondaryColor;
    colorDark = _defaultTheme.secondaryColorDark;
  }
  if (props.danger) {
    color = _defaultTheme.errorColor;
    colorDark = _defaultTheme.errorColorDark;
  }
  if (props.success) {
    color = _defaultTheme.successColor;
    colorDark = _defaultTheme.successColorDark;
  }
  if (props.outline || props.clear) {
    color = 'transparent';
    colorDark = 'transparent';
  }

  /* eslint-disable max-len */
  return 'background: ' + color + '; background: linear-gradient(to bottom, ' + color + ' 0%, ' + colorDark + ' 100%);';
  /* eslint-enable max-len */
}

function getHoverColor(props) {
  var color = _defaultTheme.primaryColorDark;
  if (props.secondary) color = _defaultTheme.secondaryColorDark;
  if (props.danger) color = _defaultTheme.errorColorDark;
  if (props.success) color = _defaultTheme.successColorDark;
  if (props.clear) color = 'transparent';

  return color;
}

function getActiveColor(props) {
  var color = _defaultTheme.primaryColorDarker;
  if (props.secondary) color = _defaultTheme.secondaryColorDarker;
  if (props.danger) color = _defaultTheme.errorColorDarker;
  if (props.success) color = _defaultTheme.successColorDarker;

  return color;
}

function getColor(props) {
  if (props.primary) return _defaultTheme.primaryColor;
  if (props.secondary) return _defaultTheme.secondaryColor;
  if (props.danger) return _defaultTheme.errorColor;
  if (props.success) return _defaultTheme.successColor;
  return _defaultTheme.primaryColor; // default
}

function getAlignement(props) {
  if (props.align === 'center') return '0px auto';
  if (props.align === 'right') return '0px 0px 0px auto';
  if (props.align === 'left') return '0px auto 0px 0px';
  return '0px';
}

var ButtonWrapper = _styledComponents2.default.button(_templateObject, function (props) {
  return props.w || 'auto';
}, function (props) {
  return getAlignement(props);
}, function (props) {
  return props.outline && !props.clear ? '1px' : '0px';
}, function (props) {
  return getColor(props);
}, function (props) {
  return props.outline || props.clear ? getColor(props) : '#fff';
}, function (props) {
  return !props.outline && !props.clear && 'box-shadow: 1px 3px 6px rgba(0,0,0,0.1);';
}, function (props) {
  return getBgColor(props);
}, function (props) {
  return props.disabled && 'opacity: 0.5; cursor: not-allowed;';
}, function (props) {
  return props.small && 'padding: 4px 8px;';
}, function (props) {
  return props.large && 'padding: 12px 20px;';
}, function (props) {
  return props.small && 'font-size: 0.8rem;';
}, function (props) {
  return props.large && 'font-size: 1.5rem;';
}, function (props) {
  return getHoverColor(props);
}, function (props) {
  return !props.clear && 'color: #fff;';
}, function (props) {
  return !props.clear && getActiveColor(props);
}, function (props) {
  return props.clear && getActiveColor(props);
});

var ButtonContent = _styledComponents2.default.div(_templateObject2);

var Button = function Button(_ref) {
  var children = _ref.children,
      rest = _objectWithoutProperties(_ref, ['children']);

  return _react2.default.createElement(
    ButtonWrapper,
    rest,
    _react2.default.createElement(
      ButtonContent,
      null,
      children
    )
  );
};

Button.propTypes = {
  children: _react.PropTypes.any
};

exports.default = Button;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CardAnimated = undefined;

var _templateObject = _taggedTemplateLiteral(['\n    from { opacity: 0; transform: ', '(', 'px); }\n    to { opacity: 1; transform: ', '(0px); }\n  '], ['\n    from { opacity: 0; transform: ', '(', 'px); }\n    to { opacity: 1; transform: ', '(0px); }\n  ']),
    _templateObject2 = _taggedTemplateLiteral(['\n  display: flex;\n  flex-direction: column;\n  padding: 32px;\n  background-color: #fff;\n  border-radius: 4px;\n  width: 100%;\n  box-shadow: ', ';\n\n  @media print {\n    box-shadow: none;\n    padding: 16px;\n  }\n'], ['\n  display: flex;\n  flex-direction: column;\n  padding: 32px;\n  background-color: #fff;\n  border-radius: 4px;\n  width: 100%;\n  box-shadow: ', ';\n\n  @media print {\n    box-shadow: none;\n    padding: 16px;\n  }\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  opacity: 0;\n  transition: opacity 0.2s ease, transform 0.4s ease-in;\n  animation: ', ' 1s forwards;\n  animation-delay: 0.2s;\n'], ['\n  opacity: 0;\n  transition: opacity 0.2s ease, transform 0.4s ease-in;\n  animation: ', ' 1s forwards;\n  animation-delay: 0.2s;\n']);

var _styledComponents = __webpack_require__(0);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function getDepth(props) {
  if (props.depth === 1) return '0px 2px 4px rgba(0,0,0,0.1)';
  if (props.depth === 2) return '0px 4px 16px rgba(0,0,0,0.2)';
  if (props.depth === 3) return '0px 6px 22px rgba(0,0,0,0.3)';
  return '0px 1px 4px rgba(0,0,0,0.3)';
}

function getCardAnimation(props) {
  var dir = 'translateY';
  var sign = -1;

  if (props.animDir === 'left' || props.animDir === 'right') dir = 'translateX';
  if (props.animDir === 'top' || props.animDir === 'bottom') dir = 'translateY';
  if (props.animDir === 'bottom' || props.animDir === 'right') sign = 1;

  return (0, _styledComponents.keyframes)(_templateObject, dir, sign * 22, dir);
}

var Card = _styledComponents2.default.div(_templateObject2, function (props) {
  return getDepth(props);
});

var CardAnimated = exports.CardAnimated = (0, _styledComponents2.default)(Card)(_templateObject3, function (props) {
  return getCardAnimation(props);
});

exports.default = Card;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  display: inline-block;\n  position: relative;\n'], ['\n  display: inline-block;\n  position: relative;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  width: ', ';\n  height: ', ';\n\n  &:nth-child(2) {\n    position: absolute;\n    left: 0;\n    top: 0;\n    transform: rotate(-90deg);\n  }\n  &:nth-child(2) path {\n    fill: none;\n    stroke-width: 25;\n    stroke-dasharray: ', ';\n    stroke: #fff;\n    opacity: 0.9;\n    transition: stroke-dashoffset 0.2s ease;\n    stroke-dashoffset: ', ';\n  }\n'], ['\n  width: ', ';\n  height: ', ';\n\n  &:nth-child(2) {\n    position: absolute;\n    left: 0;\n    top: 0;\n    transform: rotate(-90deg);\n  }\n  &:nth-child(2) path {\n    fill: none;\n    stroke-width: 25;\n    stroke-dasharray: ', ';\n    stroke: #fff;\n    opacity: 0.9;\n    transition: stroke-dashoffset 0.2s ease;\n    stroke-dashoffset: ', ';\n  }\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  position: absolute;\n  z-index: 2;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n'], ['\n  position: absolute;\n  z-index: 2;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n']);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(0);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _defaultTheme = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var CIRCLE_COMPLETE = 629;

var CircleWrapper = _styledComponents2.default.div(_templateObject);
var Circle = _styledComponents2.default.svg(_templateObject2, function (props) {
  return props.size || '300px';
}, function (props) {
  return props.size || '300px';
}, CIRCLE_COMPLETE, function (props) {
  return CIRCLE_COMPLETE / 100 * props.progress;
});
var InnerContent = _styledComponents2.default.div(_templateObject3);

var propTypes = {
  children: _react.PropTypes.any,
  progress: _react.PropTypes.number.isRequired,
  size: _react.PropTypes.string
};

/* eslint-disable max-len */
var CircleProgress = function CircleProgress(_ref) {
  var progress = _ref.progress,
      _ref$size = _ref.size,
      size = _ref$size === undefined ? 200 : _ref$size,
      children = _ref.children;

  return _react2.default.createElement(
    CircleWrapper,
    null,
    _react2.default.createElement(
      Circle,
      { viewBox: '-10 -10 220 220', progress: progress, size: size },
      _react2.default.createElement(
        'g',
        { fill: 'none', strokeWidth: '3', transform: 'translate(100,100)' },
        _react2.default.createElement('path', { d: 'M 0,-100 A 100,100 0 0,1 86.6,-50', stroke: 'url(#cl1)' }),
        _react2.default.createElement('path', { d: 'M 86.6,-50 A 100,100 0 0,1 86.6,50', stroke: 'url(#cl2)' }),
        _react2.default.createElement('path', { d: 'M 86.6,50 A 100,100 0 0,1 0,100', stroke: 'url(#cl3)' }),
        _react2.default.createElement('path', { d: 'M 0,100 A 100,100 0 0,1 -86.6,50', stroke: 'url(#cl4)' }),
        _react2.default.createElement('path', { d: 'M -86.6,50 A 100,100 0 0,1 -86.6,-50', stroke: 'url(#cl5)' }),
        _react2.default.createElement('path', { d: 'M -86.6,-50 A 100,100 0 0,1 0,-100', stroke: 'url(#cl6)' })
      )
    ),
    _react2.default.createElement(
      Circle,
      { viewBox: '-10 -10 220 220', progress: progress, size: size },
      _react2.default.createElement('path', { d: 'M200,100 C200,44.771525 155.228475,0 100,0 C44.771525,0 0,44.771525 0,100 C0,155.228475 44.771525,200 100,200 C155.228475,200 200,155.228475 200,100 Z', strokeDashoffset: '629' })
    ),
    _react2.default.createElement(
      'svg',
      { width: '0', height: '0' },
      _react2.default.createElement(
        'defs',
        null,
        _react2.default.createElement(
          'linearGradient',
          { id: 'cl1', gradientUnits: 'objectBoundingBox', x1: '0', y1: '0', x2: '1', y2: '1' },
          _react2.default.createElement('stop', { stopColor: _defaultTheme.secondaryColorLight }),
          _react2.default.createElement('stop', { offset: '100%', stopColor: _defaultTheme.secondaryColor })
        ),
        _react2.default.createElement(
          'linearGradient',
          { id: 'cl2', gradientUnits: 'objectBoundingBox', x1: '0', y1: '0', x2: '0', y2: '1' },
          _react2.default.createElement('stop', { stopColor: _defaultTheme.secondaryColor }),
          _react2.default.createElement('stop', { offset: '100%', stopColor: _defaultTheme.secondaryColorDark })
        ),
        _react2.default.createElement(
          'linearGradient',
          { id: 'cl3', gradientUnits: 'objectBoundingBox', x1: '1', y1: '0', x2: '0', y2: '1' },
          _react2.default.createElement('stop', { stopColor: _defaultTheme.secondaryColorDark }),
          _react2.default.createElement('stop', { offset: '100%', stopColor: _defaultTheme.secondaryColor })
        ),
        _react2.default.createElement(
          'linearGradient',
          { id: 'cl4', gradientUnits: 'objectBoundingBox', x1: '1', y1: '1', x2: '0', y2: '0' },
          _react2.default.createElement('stop', { stopColor: _defaultTheme.secondaryColor }),
          _react2.default.createElement('stop', { offset: '100%', stopColor: _defaultTheme.secondaryColorLight })
        ),
        _react2.default.createElement(
          'linearGradient',
          { id: 'cl5', gradientUnits: 'objectBoundingBox', x1: '0', y1: '1', x2: '0', y2: '0' },
          _react2.default.createElement('stop', { stopColor: _defaultTheme.secondaryColorLight }),
          _react2.default.createElement('stop', { offset: '100%', stopColor: _defaultTheme.secondaryColorDark })
        ),
        _react2.default.createElement(
          'linearGradient',
          { id: 'cl6', gradientUnits: 'objectBoundingBox', x1: '0', y1: '1', x2: '1', y2: '0' },
          _react2.default.createElement('stop', { stopColor: _defaultTheme.secondaryColorDark }),
          _react2.default.createElement('stop', { offset: '100%', stopColor: _defaultTheme.secondaryColorLight })
        )
      )
    ),
    _react2.default.createElement(
      InnerContent,
      null,
      children
    )
  );
};
/* eslint-enable max-len */

CircleProgress.propTypes = propTypes;

exports.default = CircleProgress;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* eslint-disable react/no-danger */

var ContentEditable = function (_Component) {
  _inherits(ContentEditable, _Component);

  function ContentEditable(props) {
    _classCallCheck(this, ContentEditable);

    var _this = _possibleConstructorReturn(this, (ContentEditable.__proto__ || Object.getPrototypeOf(ContentEditable)).call(this, props));

    _this.handleChange = _this.handleChange.bind(_this);
    return _this;
  }

  _createClass(ContentEditable, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps) {
      return nextProps.html !== this.ref.innerHTML;
    }
  }, {
    key: 'handleChange',
    value: function handleChange() {
      var html = this.ref.innerHTML;
      if (this.props.onChange && html !== this.lastHtml) {
        this.props.onChange({ target: { value: html } });
      }
      this.lastHtml = html;
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement('span', {
        ref: function ref(_ref) {
          _this2.ref = _ref;
        },
        onInput: this.handleChange,
        onBlur: this.handleChange,
        contentEditable: true,
        dangerouslySetInnerHTML: { __html: this.props.html }
      });
    }
  }]);

  return ContentEditable;
}(_react.Component);

/* eslint-enable react/no-danger */

ContentEditable.propTypes = {
  html: _react.PropTypes.string,
  onChange: _react.PropTypes.func
};

exports.default = ContentEditable;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteral(['\n  display: flex;\n  flex-direction: column;\n  color: ', ';\n  margin-bottom: ', ';\n  ', '\n  ', '\n'], ['\n  display: flex;\n  flex-direction: column;\n  color: ', ';\n  margin-bottom: ', ';\n  ', '\n  ', '\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  ', '\n  ', '\n'], ['\n  ', '\n  ', '\n']);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(0);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _defaultTheme = __webpack_require__(2);

var _Icon = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var FormControlWrapper = _styledComponents2.default.label(_templateObject, _defaultTheme.primaryColor, function (props) {
  return props.mb || '40px';
}, function (props) {
  return props.horizontal && 'flex-direction: row;';
}, function (props) {
  return props.horizontal && 'align-items: center;';
});
var Label = _styledComponents2.default.span(_templateObject2, function (props) {
  return props.horizontal && 'margin-right: 16px;';
}, function (props) {
  return props.horizontal && 'width: 200px;';
});

var FormControl = function FormControl(_ref) {
  var _ref$label = _ref.label,
      label = _ref$label === undefined ? '' : _ref$label,
      _ref$icon = _ref.icon,
      icon = _ref$icon === undefined ? '' : _ref$icon,
      children = _ref.children,
      horizontal = _ref.horizontal,
      rest = _objectWithoutProperties(_ref, ['label', 'icon', 'children', 'horizontal']);

  return _react2.default.createElement(
    FormControlWrapper,
    _extends({ horizontal: horizontal }, rest),
    _react2.default.createElement(
      Label,
      { horizontal: horizontal },
      icon && _react2.default.createElement(_Icon.Icon, { className: icon, mright: true }),
      label
    ),
    children
  );
};

FormControl.propTypes = {
  label: _react.PropTypes.string.isRequired,
  children: _react.PropTypes.any,
  icon: _react.PropTypes.string,
  horizontal: _react.PropTypes.bool
};

exports.default = FormControl;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  ', ';\n  ', '\n'], ['\n  ', ';\n  ', '\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  ', '\n'], ['\n  ', '\n']);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(0);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var textCss = (0, _styledComponents.css)(_templateObject, function (props) {
  return props.color && 'color: ' + props.color + ';';
}, function (props) {
  return props.nomargin && 'margin: 0;';
});
var HeadingLg = _styledComponents2.default.h1(_templateObject2, textCss);
var HeadingMd = _styledComponents2.default.h2(_templateObject2, textCss);
var HeadingSm = _styledComponents2.default.h3(_templateObject2, textCss);
var HeadingXs = _styledComponents2.default.h4(_templateObject2, textCss);
var HeadingTiny = _styledComponents2.default.h5(_templateObject2, textCss);

var Heading = function Heading(_ref) {
  var el = _ref.el,
      children = _ref.children,
      rest = _objectWithoutProperties(_ref, ['el', 'children']);

  if (el === 'h1') return _react2.default.createElement(
    HeadingLg,
    rest,
    children
  );
  if (el === 'h2') return _react2.default.createElement(
    HeadingMd,
    rest,
    children
  );
  if (el === 'h3') return _react2.default.createElement(
    HeadingSm,
    rest,
    children
  );
  if (el === 'h4') return _react2.default.createElement(
    HeadingXs,
    rest,
    children
  );
  if (el === 'h5') return _react2.default.createElement(
    HeadingTiny,
    rest,
    children
  );
  return _react2.default.createElement(
    HeadingLg,
    rest,
    children
  );
};

Heading.propTypes = {
  el: _react.PropTypes.string,
  color: _react.PropTypes.string,
  children: _react.PropTypes.any
};

exports.default = Heading;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  cursor: ', ';\n'], ['\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  cursor: ', ';\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  font-size: ', ';\n  color: ', ';\n  border-radius: 50%;\n  background-color: transparent;\n  width: ', ';\n  height: ', ';\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: background-color 0.2s ease;\n  ', ';\n\n  &:active {\n    background-color: ', ';\n  }\n'], ['\n  font-size: ', ';\n  color: ', ';\n  border-radius: 50%;\n  background-color: transparent;\n  width: ', ';\n  height: ', ';\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: background-color 0.2s ease;\n  ', ';\n\n  &:active {\n    background-color: ', ';\n  }\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  margin-top: 8px;\n  font-size: 10px;\n  color: ', ';\n'], ['\n  margin-top: 8px;\n  font-size: 10px;\n  color: ', ';\n']);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(0);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _defaultTheme = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function getCursorType(props) {
  if (props.disabled) return 'not-allowed';
  return 'pointer';
}

var IconButtonWrapper = _styledComponents2.default.div(_templateObject, function (props) {
  return getCursorType(props);
});

var Icon = _styledComponents2.default.i(_templateObject2, function (props) {
  return props.size || '1.2rem';
}, function (props) {
  return props.color || _defaultTheme.textColorDark;
}, function (props) {
  return props.w || '32px';
}, function (props) {
  return props.h || '32px';
}, function (props) {
  return props.hasBg && 'background-color: ' + _defaultTheme.secondaryColorLighter;
}, _defaultTheme.secondaryColorLight);

var SubTitle = _styledComponents2.default.span(_templateObject3, function (props) {
  return props.color || _defaultTheme.textColorDark;
});

var IconButton = function IconButton(_ref) {
  var subtitle = _ref.subtitle,
      color = _ref.color,
      size = _ref.size,
      bg = _ref.bg,
      className = _ref.className,
      rest = _objectWithoutProperties(_ref, ['subtitle', 'color', 'size', 'bg', 'className']);

  return _react2.default.createElement(
    IconButtonWrapper,
    rest,
    _react2.default.createElement(Icon, { className: className, color: color, size: size, hasBg: bg }),
    subtitle && _react2.default.createElement(
      SubTitle,
      { color: color },
      subtitle
    )
  );
};

IconButton.propTypes = {
  subtitle: _react.PropTypes.string,
  color: _react.PropTypes.string,
  size: _react.PropTypes.string,
  className: _react.PropTypes.string,
  bg: _react.PropTypes.bool
};

exports.default = IconButton;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  from { opacity: 0; }\n  to { opacity: 1; }\n'], ['\n  from { opacity: 0; }\n  to { opacity: 1; }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  display: flex;\n  flex-direction: column;\n  margin-top: 8px;\n  position: relative;\n  width: ', ';\n  ', '\n  ', '\n  ', '\n'], ['\n  display: flex;\n  flex-direction: column;\n  margin-top: 8px;\n  position: relative;\n  width: ', ';\n  ', '\n  ', '\n  ', '\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  padding: 8px;\n  font-size: 1rem;\n  flex-direction: row;\n  background-color: ', ';\n  border-radius: 4px;\n  border: 1px solid ', ';\n  color: ', ';\n\n  &:focus {\n    outline: none;\n    box-shadow: 0px 0px 2px ', ';\n  }\n'], ['\n  padding: 8px;\n  font-size: 1rem;\n  flex-direction: row;\n  background-color: ', ';\n  border-radius: 4px;\n  border: 1px solid ', ';\n  color: ', ';\n\n  &:focus {\n    outline: none;\n    box-shadow: 0px 0px 2px ', ';\n  }\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n  font-size: 0.7rem;\n  color: ', ';\n  margin-top: 8px;\n  position: absolute;\n  bottom: -16px;\n  left: 0px;\n  animation: ', ' 0.4s;\n'], ['\n  font-size: 0.7rem;\n  color: ', ';\n  margin-top: 8px;\n  position: absolute;\n  bottom: -16px;\n  left: 0px;\n  animation: ', ' 0.4s;\n']);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(0);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _defaultTheme = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var fadeIn = (0, _styledComponents.keyframes)(_templateObject);

var InputWrapper = _styledComponents2.default.div(_templateObject2, function (props) {
  return props.width || 'auto';
}, function (props) {
  return props.validator && 'margin-bottom: 16px;';
}, function (props) {
  return props.maxW && 'max-width: ' + props.maxW + ';';
}, function (props) {
  return props.noMargin && 'margin: 0;';
});
var InputEl = _styledComponents2.default.input(_templateObject3, function (props) {
  return props.bg || '' + _defaultTheme.greyLighter;
}, function (props) {
  return props.error ? _defaultTheme.errorColor : _defaultTheme.greyLight;
}, _defaultTheme.textColorDark, _defaultTheme.primaryColorLightest);
var ValidationMessage = _styledComponents2.default.div(_templateObject4, _defaultTheme.errorColor, fadeIn);

var CHAR_WIDTH = 16;

var propTypes = {
  autoResize: _react.PropTypes.bool,
  onChange: _react.PropTypes.func.isRequired,
  validator: _react.PropTypes.func,
  validationMessage: _react.PropTypes.string,
  value: _react.PropTypes.any,
  error: _react.PropTypes.bool,
  cacheValue: _react.PropTypes.bool
};

var getValidValue = function getValidValue(value) {
  return value !== null ? value : '';
};

var Input = function (_Component) {
  _inherits(Input, _Component);

  function Input(props) {
    _classCallCheck(this, Input);

    var _this = _possibleConstructorReturn(this, (Input.__proto__ || Object.getPrototypeOf(Input)).call(this, props));

    _this.resize = _this.resize.bind(_this);
    _this.handleChange = _this.handleChange.bind(_this);
    _this.validate = _this.validate.bind(_this);

    _this.state = {
      width: null,
      isValid: true,
      value: _this.getValidValue(props.value)
    };
    return _this;
  }

  /* eslint-disable react/no-did-mount-set-state */


  _createClass(Input, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      // NOTE: in order to get auto rezise working
      // we need to set the state in componentDidMount.
      if (this.props.autoResize) {
        var value = this.props.value;

        var w = typeof value === 'number' ? value.toString().length : value.length;

        this.setState({ width: w * CHAR_WIDTH + 'px' });
      }
    }
    /* eslint-enable react/no-did-mount-set-state */

  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (this.props.value !== nextProps.value) {
        var value = nextProps.value;


        if (this.props.autoResize) {
          var w = typeof value === 'number' ? value.toString().length : value.length;

          this.setState({ width: w * CHAR_WIDTH + 'px' });
        }

        if (this.props.cacheValue) this.setState({ value: value });
        // if (this.props.validator) this.validate(value);
      }
    }
  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps, nextState) {
      // If input has to auto-resize we need to re-render
      if (this.props.autoResize) return true;

      // If the input value has not changed do not re-render
      return this.props.cacheValue ? nextState.value !== this.state.value : nextProps.value !== this.props.value;
    }
  }, {
    key: 'resize',
    value: function resize() {
      if (this.props.autoResize) {
        var value = this.props.value;

        var w = typeof value === 'number' ? value.toString().length : value.length;

        this.setState({ width: w * CHAR_WIDTH + 'px' });
      }
    }
  }, {
    key: 'validate',
    value: function validate(value) {
      if (!this.props.validator(value)) {
        this.setState({ isValid: false });
      } else {
        this.setState({ isValid: true });
      }
    }
  }, {
    key: 'handleChange',
    value: function handleChange(evnt) {
      var isValid = true;

      if (this.props.validator) {
        isValid = this.props.validator(evnt.target.value);
        this.setState({ isValid: isValid });
      }

      if (this.props.autoResize) this.resize();

      if (this.props.cacheValue) {
        this.setState({ value: evnt.target.value });
        // Don't call onChange if value is invalid
        if (isValid) this.props.onChange(evnt);
      } else {
        // TODO Should we not call onChange here if value is invalid?
        this.props.onChange(evnt);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      // NOTE: `null` values are not valid input values.
      // Also remove onChange so that it is not given to subcomponents.
      var _props = this.props,
          onChange = _props.onChange,
          rest = _objectWithoutProperties(_props, ['onChange']); // eslint-disable-line

      return _react2.default.createElement(
        InputWrapper,
        _extends({}, rest, { width: this.state.width }),
        _react2.default.createElement(InputEl, _extends({}, rest, {
          onChange: this.handleChange,
          value: this.props.cacheValue ? getValidValue(this.state.value) : getValidValue(this.props.value)
        })),
        !this.state.isValid && _react2.default.createElement(
          ValidationMessage,
          null,
          this.props.validationMessage || 'Tarkista syötteesi!'
        )
      );
    }
  }]);

  return Input;
}(_react.Component);

Input.propTypes = propTypes;
Input.defaultProps = {
  autoResize: false,
  cacheValue: false
};

exports.default = Input;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Box = exports.Layout = undefined;

var _templateObject = _taggedTemplateLiteral(['\n  display: flex;\n  flex-wrap: ', ';\n  width: 100%;\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  @media print {\n    ', '\n  }\n  ', '\n  ', '\n  ', '\n  ', '\n'], ['\n  display: flex;\n  flex-wrap: ', ';\n  width: 100%;\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  @media print {\n    ', '\n  }\n  ', '\n  ', '\n  ', '\n  ', '\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n    flex-direction: ', ';\n  '], ['\n    flex-direction: ', ';\n  ']),
    _templateObject3 = _taggedTemplateLiteral(['\n  flex: ', ';\n  @media print {\n    ', '\n  }\n'], ['\n  flex: ', ';\n  @media print {\n    ', '\n  }\n']);

var _styledComponents = __webpack_require__(0);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _media = __webpack_require__(4);

var _media2 = _interopRequireDefault(_media);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); } // import React from 'react';


var Layout = exports.Layout = _styledComponents2.default.div(_templateObject, function (props) {
  return props.column ? 'nowrap' : 'wrap';
}, function (props) {
  return props.w && 'width: ' + props.w + ';';
}, function (props) {
  return props.center && 'margin: 0 auto;';
}, function (props) {
  return props.maxW && 'max-width: ' + props.maxW + ';';
}, function (props) {
  return props.column && 'flex-direction: column;';
}, function (props) {
  return !props.column && 'flex-direction: row;';
}, function (props) {
  return props.align && 'align-items: ' + props.align + ';';
}, function (props) {
  return props.justify && 'justify-content: ' + props.justify + ';';
}, function (props) {
  return props.noprint && 'display: none;';
}, function (props) {
  return props.xs && _media2.default.phone(_templateObject2, props.xs);
}, function (props) {
  return props.sm && _media2.default.tablet(_templateObject2, props.sm);
}, function (props) {
  return props.md && _media2.default.desktop(_templateObject2, props.md);
}, function (props) {
  return props.lg && _media2.default.giant(_templateObject2, props.lg);
});

var Box = exports.Box = _styledComponents2.default.div(_templateObject3, function (props) {
  return props.flex || 'none';
}, function (props) {
  return props.noprint && 'display: none;';
});

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  height: ', ';\n  width: 1px;\n  margin: 0px ', ';\n  background-color: ', ';\n'], ['\n  height: ', ';\n  width: 1px;\n  margin: 0px ', ';\n  background-color: ', ';\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  width: ', ';\n  height: 1px;\n  background-color: ', ';\n  margin: ', ' 0px;\n'], ['\n  width: ', ';\n  height: 1px;\n  background-color: ', ';\n  margin: ', ' 0px;\n']);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(0);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _defaultTheme = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var VerticalLineSeparator = _styledComponents2.default.div(_templateObject, function (props) {
  return props.len || '40px';
}, function (props) {
  return props.separation || '16px';
}, _defaultTheme.greyLight);
var HorizontalLineSeparator = _styledComponents2.default.div(_templateObject2, function (props) {
  return props.len || '100%';
}, _defaultTheme.greyLight, function (props) {
  return props.separation || '32px';
});

var LineSeparator = function LineSeparator(_ref) {
  var vertical = _ref.vertical,
      horizontal = _ref.horizontal,
      rest = _objectWithoutProperties(_ref, ['vertical', 'horizontal']);

  if (vertical) {
    return _react2.default.createElement(VerticalLineSeparator, rest);
  }
  if (horizontal) {
    return _react2.default.createElement(HorizontalLineSeparator, rest);
  }
  return _react2.default.createElement('hr', null);
};

LineSeparator.propTypes = {
  vertical: _react.PropTypes.bool,
  horizontal: _react.PropTypes.bool,
  separation: _react.PropTypes.string,
  len: _react.PropTypes.string
};

exports.default = LineSeparator;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: #fff;\n  position: fixed;\n  z-index: 99999;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n'], ['\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: #fff;\n  position: fixed;\n  z-index: 99999;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n']);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(0);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _SquareLoader = __webpack_require__(23);

var _SquareLoader2 = _interopRequireDefault(_SquareLoader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var LoadingOverlayWrapper = _styledComponents2.default.div(_templateObject);

var LoadingOverlay = function LoadingOverlay() {
  return _react2.default.createElement(
    LoadingOverlayWrapper,
    null,
    _react2.default.createElement(_SquareLoader2.default, { lg: true, dark: true })
  );
};

exports.default = LoadingOverlay;

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  height: 0px;\n  ', '\n\n  @media print {\n    ', '\n  }\n\n  ', '\n\n  ', '\n\n  ', '\n\n  ', '\n'], ['\n  height: 0px;\n  ', '\n\n  @media print {\n    ', '\n  }\n\n  ', '\n\n  ', '\n\n  ', '\n\n  ', '\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n    ', '\n  '], ['\n    ', '\n  ']);

var _styledComponents = __webpack_require__(0);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _media = __webpack_require__(4);

var _media2 = _interopRequireDefault(_media);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var getPadding = function getPadding(direction, amount) {
  return 'padding-' + direction + ': ' + amount + ';';
};

var getMediaPaddingDirection = function getMediaPaddingDirection(dir) {
  return dir === 'vert' ? 'top' : 'right';
};

var Padder = _styledComponents2.default.div(_templateObject, function (props) {
  return getPadding(props.vert ? 'top' : 'right', props.vert || props.horiz || '16px');
}, function (props) {
  return props.noprint && 'display: none;';
}, function (props) {
  return props.xs && _media2.default.phone(_templateObject2, getPadding(getMediaPaddingDirection(props.xs), props.vert || props.horiz || '16px'));
}, function (props) {
  return props.sm && _media2.default.tablet(_templateObject2, getPadding(getMediaPaddingDirection(props.sm), props.vert || props.horiz || '16px'));
}, function (props) {
  return props.md && _media2.default.desktop(_templateObject2, getPadding(getMediaPaddingDirection(props.md), props.vert || props.horiz || '16px'));
}, function (props) {
  return props.lg && _media2.default.giant(_templateObject2, getPadding(getMediaPaddingDirection(props.lg), props.vert || props.horiz || '16px'));
});

exports.default = Padder;

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  0% { background-color: #f5f5f5; }\n  50% { background-color: #eee }\n  100% { background-color: #f5f5f5; }\n'], ['\n  0% { background-color: #f5f5f5; }\n  50% { background-color: #eee }\n  100% { background-color: #f5f5f5; }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  height: 20px;\n  width: ', '%;\n  border-radius: 3px;\n  animation: ', ' 3s linear infinite;\n'], ['\n  height: 20px;\n  width: ', '%;\n  border-radius: 3px;\n  animation: ', ' 3s linear infinite;\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  padding: 0px 8px;\n  flex: 1;\n'], ['\n  padding: 0px 8px;\n  flex: 1;\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n  font-size: 0.9rem;\n  height: 50px;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  width: 100%;\n'], ['\n  font-size: 0.9rem;\n  height: 50px;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  width: 100%;\n']);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(0);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

// Styled components
var bgAnim = (0, _styledComponents.keyframes)(_templateObject);
var LoadingPlaceholder = _styledComponents2.default.div(_templateObject2, function (props) {
  return props.w * 10;
}, bgAnim);
var Cell = _styledComponents2.default.div(_templateObject3);
var Row = _styledComponents2.default.div(_templateObject4);

var propTypes = {
  rows: _react.PropTypes.number
};

var getRandomInt = function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - (min + 1))) + min;
};

var PlaceholderRows = function PlaceholderRows(_ref) {
  var _ref$rows = _ref.rows,
      rows = _ref$rows === undefined ? 6 : _ref$rows;
  return _react2.default.createElement(
    'div',
    null,
    Array.from(Array(rows).keys())(rows).map(function (idx) {
      return _react2.default.createElement(
        Row,
        { key: 'dummy_' + idx },
        _react2.default.createElement(
          Cell,
          null,
          _react2.default.createElement(LoadingPlaceholder, { w: getRandomInt(2, 8) })
        )
      );
    })
  );
};

PlaceholderRows.propTypes = propTypes;
exports.default = PlaceholderRows;

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  flex: none;\n  display: flex;\n  align-items: center;\n  font-weight: normal;\n  font-size: 1rem;\n  background: transparent;\n  position: relative;\n'], ['\n  flex: none;\n  display: flex;\n  align-items: center;\n  font-weight: normal;\n  font-size: 1rem;\n  background: transparent;\n  position: relative;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  border: none;\n  box-shadow: none;\n  background: transparent;\n  background-image: none;\n  appearance: none;\n  padding: 8px 24px 8px 8px;\n  border-radius: 4px;\n  border: 2px solid ', ';\n  z-index: 2;\n  &:focus {\n    outline: none;\n    box-shadow: 0px 0px 2px ', ';\n  }\n'], ['\n  border: none;\n  box-shadow: none;\n  background: transparent;\n  background-image: none;\n  appearance: none;\n  padding: 8px 24px 8px 8px;\n  border-radius: 4px;\n  border: 2px solid ', ';\n  z-index: 2;\n  &:focus {\n    outline: none;\n    box-shadow: 0px 0px 2px ', ';\n  }\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  display: flex;\n  flex-direction: row;\n  height: 100%;\n  align-items: center;\n  position: absolute;\n  right: 8px;\n  top: 0px;\n  z-index: 1;\n'], ['\n  display: flex;\n  flex-direction: row;\n  height: 100%;\n  align-items: center;\n  position: absolute;\n  right: 8px;\n  top: 0px;\n  z-index: 1;\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n  font-size: 1rem;\n  color: ', ';\n'], ['\n  font-size: 1rem;\n  color: ', ';\n']);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(0);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _defaultTheme = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var SelectWrapper = _styledComponents2.default.div(_templateObject);
var SelectEl = _styledComponents2.default.select(_templateObject2, _defaultTheme.greyDark, _defaultTheme.primaryColorLightest);
var ArrowWrapper = _styledComponents2.default.div(_templateObject3);
var ArrowDown = _styledComponents2.default.i(_templateObject4, _defaultTheme.greyDarker);

var Select = function Select(_ref) {
  var children = _ref.children,
      onSelect = _ref.onSelect,
      value = _ref.value;
  return _react2.default.createElement(
    SelectWrapper,
    null,
    _react2.default.createElement(
      SelectEl,
      {
        onChange: function onChange(_ref2) {
          var target = _ref2.target;
          return onSelect(target.value);
        },
        value: value
      },
      children
    ),
    _react2.default.createElement(
      ArrowWrapper,
      null,
      _react2.default.createElement(ArrowDown, { className: 'ion-ios-arrow-down' })
    )
  );
};

Select.propTypes = {
  children: _react.PropTypes.any.isRequired,
  onSelect: _react.PropTypes.func.isRequired,
  value: _react.PropTypes.any.isRequired
};

exports.default = Select;

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  0% { transform: rotate(0deg); }\n  50% { transform: rotate(180deg); }\n  100% { transform: rotate(360deg); }\n'], ['\n  0% { transform: rotate(0deg); }\n  50% { transform: rotate(180deg); }\n  100% { transform: rotate(360deg); }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  width: ', ';\n  height: ', ';\n  position: relative;\n  display: inline-block;\n  box-sizing: border-box;\n  font-size: 0px;\n  color: ', ';\n'], ['\n  width: ', ';\n  height: ', ';\n  position: relative;\n  display: inline-block;\n  box-sizing: border-box;\n  font-size: 0px;\n  color: ', ';\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  position: relative;\n  box-sizing: border-box;\n  display: inline-block;\n  float: none;\n  width: ', ';\n  height: ', ';\n  background: transparent;\n  border: ', ' solid currentColor;\n  border-bottom-color: transparent;\n  border-Radius: 100%;\n  animation: ', ' 0.75s linear infinite;\n'], ['\n  position: relative;\n  box-sizing: border-box;\n  display: inline-block;\n  float: none;\n  width: ', ';\n  height: ', ';\n  background: transparent;\n  border: ', ' solid currentColor;\n  border-bottom-color: transparent;\n  border-Radius: 100%;\n  animation: ', ' 0.75s linear infinite;\n']);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(0);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var circleAnim = (0, _styledComponents.keyframes)(_templateObject);

var getIconSize = function getIconSize(_ref) {
  var small = _ref.small,
      medium = _ref.medium,
      large = _ref.large;

  if (small) return '16px';
  if (medium) return '64px';
  if (large) return '96px';
  return '32px';
};

var getBorderWidth = function getBorderWidth(_ref2) {
  var small = _ref2.small,
      medium = _ref2.medium,
      large = _ref2.large;

  if (small) return '1px';
  if (medium) return '4px';
  if (large) return '6px';
  return '2px';
};

var Circle = _styledComponents2.default.div(_templateObject2, function (props) {
  return getIconSize(props);
}, function (props) {
  return getIconSize(props);
}, function (props) {
  return props.color || '#333';
});

var CircleInner = _styledComponents2.default.div(_templateObject3, function (props) {
  return getIconSize(props);
}, function (props) {
  return getIconSize(props);
}, function (props) {
  return getBorderWidth(props);
}, circleAnim);

var Spinner = function Spinner(_ref3) {
  var sm = _ref3.sm,
      md = _ref3.md,
      lg = _ref3.lg,
      color = _ref3.color;
  return _react2.default.createElement(
    Circle,
    {
      small: sm,
      medium: md,
      large: lg,
      color: color
    },
    _react2.default.createElement(CircleInner, {
      small: sm,
      medium: md,
      large: lg
    })
  );
};

Spinner.propTypes = {
  sm: _react.PropTypes.bool,
  md: _react.PropTypes.bool,
  lg: _react.PropTypes.bool,
  color: _react.PropTypes.string
};

exports.default = Spinner;

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  0% { transform: rotate(0deg); }\n  25% { transform: rotate(180deg); }\n  50% { transform: rotate(180deg); }\n  75% { transform: rotate(360deg); }\n  100% { transform: rotate(360deg); }\n'], ['\n  0% { transform: rotate(0deg); }\n  25% { transform: rotate(180deg); }\n  50% { transform: rotate(180deg); }\n  75% { transform: rotate(360deg); }\n  100% { transform: rotate(360deg); }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  0% { height: 0; }\n  25% { height: 0; }\n  50% { height: 100%; }\n  75% { height: 100%; }\n  100% { height: 0; }\n'], ['\n  0% { height: 0; }\n  25% { height: 0; }\n  50% { height: 100%; }\n  75% { height: 100%; }\n  100% { height: 0; }\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  position: relative;\n  box-sizing: border-box;\n  display: block;\n  font-size: 0;\n  color: #fff;\n  width: 32px;\n  height: 32px;\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n'], ['\n  position: relative;\n  box-sizing: border-box;\n  display: block;\n  font-size: 0;\n  color: #fff;\n  width: 32px;\n  height: 32px;\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n  position: relative;\n  box-sizing: border-box;\n  display: inline-block;\n  float: none;\n  background-color: currentColor;\n  border: 0 solid currentColor;\n  width: 100%;\n  height: 100%;\n  background: transparent;\n  border-width: 2px;\n  border-radius: 0;\n  animation: ', ' 2s infinite ease;\n  ', '\n  ', '\n  ', '\n\n  &:after {\n    display: inline-block;\n    width: 100%;\n    vertical-align: top;\n    content: "";\n    background-color: currentColor;\n    animation: ', ' 2s infinite ease-in;\n  }\n'], ['\n  position: relative;\n  box-sizing: border-box;\n  display: inline-block;\n  float: none;\n  background-color: currentColor;\n  border: 0 solid currentColor;\n  width: 100%;\n  height: 100%;\n  background: transparent;\n  border-width: 2px;\n  border-radius: 0;\n  animation: ', ' 2s infinite ease;\n  ', '\n  ', '\n  ', '\n\n  &:after {\n    display: inline-block;\n    width: 100%;\n    vertical-align: top;\n    content: "";\n    background-color: currentColor;\n    animation: ', ' 2s infinite ease-in;\n  }\n']);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(0);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var squareLoaderAnim = (0, _styledComponents.keyframes)(_templateObject);

var squareLoaderInnerAnim = (0, _styledComponents.keyframes)(_templateObject2);

var SquareLoaderWrapper = _styledComponents2.default.div(_templateObject3, function (props) {
  return props.dark && 'color: #333;';
}, function (props) {
  return props.sm && 'width: 16px;';
}, function (props) {
  return props.sm && 'height: 16px;';
}, function (props) {
  return props.md && 'width: 64px;';
}, function (props) {
  return props.md && 'height: 64px;';
}, function (props) {
  return props.lg && 'width: 96px;';
}, function (props) {
  return props.lg && 'height: 96px;';
});

var Block = _styledComponents2.default.div(_templateObject4, squareLoaderAnim, function (props) {
  return props.sm && 'border-width: 1px;';
}, function (props) {
  return props.md && 'border-width: 4px;';
}, function (props) {
  return props.lg && 'border-width: 6px;';
}, squareLoaderInnerAnim);

var SquareLoader = function SquareLoader(props) {
  return _react2.default.createElement(
    SquareLoaderWrapper,
    props,
    _react2.default.createElement(Block, props)
  );
};

SquareLoader.propTypes = {
  sm: _react.PropTypes.bool,
  md: _react.PropTypes.bool,
  lg: _react.PropTypes.bool,
  dark: _react.PropTypes.bool
};

exports.default = SquareLoader;

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  font-size: ', ';\n  ', ';\n  ', ';\n'], ['\n  font-size: ', ';\n  ', ';\n  ', ';\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  ', '\n'], ['\n  ', '\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  ', '\n  line-height: 1.6;\n  margin: 0;\n'], ['\n  ', '\n  line-height: 1.6;\n  margin: 0;\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n  font-weight: lighter;\n'], ['\n  font-weight: lighter;\n']);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(0);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var textCss = (0, _styledComponents.css)(_templateObject, function (props) {
  return props.size || '1rem';
}, function (props) {
  return props.lineh && 'line-height: ' + props.lineh + ';';
}, function (props) {
  return props.color && 'color: ' + props.color + ';';
});
var Span = _styledComponents2.default.span(_templateObject2, textCss);
var Paragraph = _styledComponents2.default.p(_templateObject3, textCss);
var Italic = _styledComponents2.default.i(_templateObject2, textCss);
var Bold = _styledComponents2.default.strong(_templateObject2, textCss);
var Thin = (0, _styledComponents2.default)(Span)(_templateObject4);

var Text = function Text(_ref) {
  var el = _ref.el,
      children = _ref.children,
      rest = _objectWithoutProperties(_ref, ['el', 'children']);

  if (el === 'p') return _react2.default.createElement(
    Paragraph,
    rest,
    children
  );
  if (el === 'i') return _react2.default.createElement(
    Italic,
    rest,
    children
  );
  if (el === 'strong') return _react2.default.createElement(
    Bold,
    rest,
    children
  );
  if (el === 'thin') return _react2.default.createElement(
    Thin,
    rest,
    children
  );
  return _react2.default.createElement(
    Span,
    rest,
    children
  );
};

Text.propTypes = {
  el: _react.PropTypes.string,
  color: _react.PropTypes.string,
  size: _react.PropTypes.string,
  children: _react.PropTypes.any
};

exports.default = Text;

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  from { opacity: 0; }\n  to { opacity: 1; }\n'], ['\n  from { opacity: 0; }\n  to { opacity: 1; }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  display: flex;\n  flex-direction: column;\n  ', '\n'], ['\n  display: flex;\n  flex-direction: column;\n  ', '\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  padding: 8px;\n  font-size: 1rem;\n  flex-direction: row;\n  margin-bottom: 16px;\n  background-color: ', ';\n  border-radius: 4px;\n  margin-top: 8px;\n  border: 1px solid ', ';\n  color: ', ';\n  max-width: 100%;\n  height: ', ';\n  overflow: hidden;\n\n  &:focus {\n    outline: none;\n    box-shadow: 0px 0px 2px ', ';\n  }\n  @media print {\n    height: ', ';\n    margin-bottom: 4px;\n  }\n'], ['\n  padding: 8px;\n  font-size: 1rem;\n  flex-direction: row;\n  margin-bottom: 16px;\n  background-color: ', ';\n  border-radius: 4px;\n  margin-top: 8px;\n  border: 1px solid ', ';\n  color: ', ';\n  max-width: 100%;\n  height: ', ';\n  overflow: hidden;\n\n  &:focus {\n    outline: none;\n    box-shadow: 0px 0px 2px ', ';\n  }\n  @media print {\n    height: ', ';\n    margin-bottom: 4px;\n  }\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n  font-size: 0.7rem;\n  color: ', ';\n  margin-top: 8px;\n  position: absolute;\n  bottom: -16px;\n  left: 0px;\n  animation: ', ' 0.4s;\n'], ['\n  font-size: 0.7rem;\n  color: ', ';\n  margin-top: 8px;\n  position: absolute;\n  bottom: -16px;\n  left: 0px;\n  animation: ', ' 0.4s;\n']);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(0);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _defaultTheme = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var fadeIn = (0, _styledComponents.keyframes)(_templateObject);

var TextareaWrapper = _styledComponents2.default.div(_templateObject2, function (props) {
  return props.maxW && 'max-width: ' + props.maxW + ';';
});

var TextareaEl = _styledComponents2.default.textarea(_templateObject3, _defaultTheme.greyLighter, _defaultTheme.greyLight, _defaultTheme.textColorDark, function (props) {
  return props.height || '30px';
}, _defaultTheme.primaryColorLightest, function (props) {
  return props.height ? 'auto' : '24px';
});

var ValidationMessage = _styledComponents2.default.div(_templateObject4, _defaultTheme.errorColor, fadeIn);

var propTypes = {
  autoResize: _react.PropTypes.bool,
  onChange: _react.PropTypes.func.isRequired,
  value: _react.PropTypes.any,
  validator: _react.PropTypes.func,
  validationMessage: _react.PropTypes.string,
  cacheValue: _react.PropTypes.bool
};

var getValidValue = function getValidValue(value) {
  return value !== null ? value : '';
};

var Textarea = function (_Component) {
  _inherits(Textarea, _Component);

  function Textarea(props) {
    _classCallCheck(this, Textarea);

    var _this = _possibleConstructorReturn(this, (Textarea.__proto__ || Object.getPrototypeOf(Textarea)).call(this, props));

    _this.resize = _this.resize.bind(_this);
    _this.handleChange = _this.handleChange.bind(_this);

    _this.state = {
      height: null,
      isValid: true,
      value: _this.getValidValue(props.value)
    };
    return _this;
  }

  /* eslint-disable react/no-did-mount-set-state */


  _createClass(Textarea, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (this.props.autoResize && this.node) {
        this.setState({ height: this.node.scrollHeight + 'px' });
      }
    }
    /* eslint-enable react/no-did-mount-set-state */

  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (this.props.value !== nextProps.value) {
        var value = nextProps.value;

        this.resize(500);
        if (this.props.cacheValue) this.setState({ value: value });
      }
    }
  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps, nextState) {
      if (this.props.autoResize) return true;
      // If the input value has not changed do not re-render
      return this.props.cacheValue ? nextState.value !== this.state.value : nextProps.value !== this.props.value;
    }
  }, {
    key: 'resize',
    value: function resize() {
      var _this2 = this;

      var timeout = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

      if (this.props.autoResize && this.node) {
        if (!timeout) {
          this.setState({ height: this.node.scrollHeight + 'px' });
        } else {
          setTimeout(function () {
            return _this2.setState({ height: _this2.node.scrollHeight + 'px' });
          }, 500);
        }
      }
    }
  }, {
    key: 'handleChange',
    value: function handleChange(evnt) {
      var isValid = true;

      if (this.props.validator) {
        isValid = this.props.validator(evnt.target.value);
        this.setState({ isValid: isValid });
      }

      if (this.props.autoResize && this.node) this.resize();

      if (this.props.cacheValue) {
        this.setState({ value: evnt.target.value });
        // Don't call onChange if value is invalid
        if (isValid) this.props.onChange(evnt);
      } else {
        // TODO Should we not call onChange here if value is invalid?
        this.props.onChange(evnt);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var _props = this.props,
          onChange = _props.onChange,
          rest = _objectWithoutProperties(_props, ['onChange']); // eslint-disable-line

      return _react2.default.createElement(
        TextareaWrapper,
        rest,
        _react2.default.createElement(TextareaEl, _extends({}, rest, {
          innerRef: function innerRef(node) {
            _this3.node = node;
          },
          onChange: this.handleChange,
          height: this.state.height,
          value: this.props.cacheValue ? getValidValue(this.state.value) : getValidValue(this.props.value)
        })),
        !this.state.isValid && _react2.default.createElement(
          ValidationMessage,
          null,
          this.props.validationMessage || 'Tarkista syötteesi!'
        )
      );
    }
  }]);

  return Textarea;
}(_react.Component);

Textarea.propTypes = propTypes;
Textarea.defaultProps = {
  autoResize: true,
  cacheValue: false
};

exports.default = Textarea;

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  display: inline-block;\n  outline: none;\n  border: none;\n  background: none;\n  padding: 0;\n'], ['\n  display: inline-block;\n  outline: none;\n  border: none;\n  background: none;\n  padding: 0;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  display: block;\n  position: relative;\n'], ['\n  display: block;\n  position: relative;\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  position: absolute;\n  text-align: center;\n  left: ', ';\n  ', ';\n  ', ';\n  ', ';\n  display: inline-block;\n  border-radius: 3px;\n  min-height: 30px;\n  min-width: 100px;\n  padding: 8px;\n  z-index: 999;\n  line-height: 1.5;\n  font-size: 0.8rem;\n  box-sizing: border-box;\n  box-shadow: 0px 2px 10px rgba(0,0,0,0.2);\n  color: ', ';\n  background-color: ', ';\n  border-color: ', ';\n  visibility: ', ';\n  ', '\n  transition: transform 0.2s ease, opacity 0.3s ease;\n  transform: ', ';\n  opacity: ', ';\n'], ['\n  position: absolute;\n  text-align: center;\n  left: ', ';\n  ', ';\n  ', ';\n  ', ';\n  display: inline-block;\n  border-radius: 3px;\n  min-height: 30px;\n  min-width: 100px;\n  padding: 8px;\n  z-index: 999;\n  line-height: 1.5;\n  font-size: 0.8rem;\n  box-sizing: border-box;\n  box-shadow: 0px 2px 10px rgba(0,0,0,0.2);\n  color: ', ';\n  background-color: ', ';\n  border-color: ', ';\n  visibility: ', ';\n  ', '\n  transition: transform 0.2s ease, opacity 0.3s ease;\n  transform: ', ';\n  opacity: ', ';\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n  width: 0px;\n  height: 0px;\n  border-left: ', ';\n  border-right: ', ';\n  border-top: ', ';\n  border-top-color: inherit;\n  position: absolute;\n  ', '\n  ', '\n  ', '\n  ', '\n  left: ', ';\n'], ['\n  width: 0px;\n  height: 0px;\n  border-left: ', ';\n  border-right: ', ';\n  border-top: ', ';\n  border-top-color: inherit;\n  position: absolute;\n  ', '\n  ', '\n  ', '\n  ', '\n  left: ', ';\n']);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(0);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

// ============================

var tooltipArrowHeight = 6;

// const TooltipWrapperButton = styled.button`
//   display: inline-block;
//   outline: none;
//   border: none;
//   background: none;
//   padding: 0;
// `;
var TooltipWrapperDiv = _styledComponents2.default.div(_templateObject);
var TooltipContainer = _styledComponents2.default.div(_templateObject2);
var TooltipBubble = _styledComponents2.default.div(_templateObject3, function (props) {
  return props.leftPosition + 'px';
}, function (props) {
  return props.top && 'bottom: calc(100% + ' + tooltipArrowHeight + 'px);';
}, function (props) {
  return props.bottom && 'top: calc(100% + ' + tooltipArrowHeight + 'px);';
}, function (props) {
  return !props.top && !props.bottom && 'bottom: calc(100% + ' + tooltipArrowHeight + 'px);';
}, function (props) {
  return props.textColor || '#fff';
}, function (props) {
  return props.bgColor || 'rgba(0,0,0,0.8)';
}, function (props) {
  return props.bgColor || 'rgba(0,0,0,0.8)';
}, function (props) {
  return props.show ? 'visible' : 'hidden';
}, function (props) {
  return !props.show && 'pointer-events: none;';
}, function (props) {
  return props.show ? 'translateY(0px)' : 'translateY(' + (props.bottom ? -10 : 10) + 'px)';
}, function (props) {
  return props.show ? 1 : 0;
});

var TooltipArrow = _styledComponents2.default.span(_templateObject4, tooltipArrowHeight + 'px solid transparent', tooltipArrowHeight + 'px solid transparent', tooltipArrowHeight + 'px solid', function (props) {
  return props.top && 'bottom: -' + tooltipArrowHeight + 'px;';
}, function (props) {
  return props.bottom && 'top: -' + tooltipArrowHeight + 'px;';
}, function (props) {
  return !props.top && !props.bottom && 'bottom: -' + tooltipArrowHeight + 'px;';
}, function (props) {
  return props.bottom && 'transform: rotate(180deg);';
}, 'calc(50% - ' + tooltipArrowHeight + 'px)');

var Tooltip = function (_Component) {
  _inherits(Tooltip, _Component);

  function Tooltip(props) {
    _classCallCheck(this, Tooltip);

    var _this = _possibleConstructorReturn(this, (Tooltip.__proto__ || Object.getPrototypeOf(Tooltip)).call(this, props));

    _this.showTooltip = _this.showTooltip.bind(_this);
    _this.hideTooltip = _this.hideTooltip.bind(_this);
    _this.handleMouseEnter = _this.handleMouseEnter.bind(_this);
    _this.handleMouseLeave = _this.handleMouseLeave.bind(_this);

    var disableHoverChanges = props.show != null;

    _this.state = {
      showTooltip: false,
      lPos: null,
      disableHoverChanges: disableHoverChanges
    };
    return _this;
  }

  _createClass(Tooltip, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      // if (nextProps.show !== this.props.show) {
      if (nextProps.show) this.showTooltip();else this.hideTooltip();
      // }
    }
  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps, nextState) {
      var showTooltip = this.state.showTooltip;

      return nextState.showTooltip !== showTooltip;
    }
  }, {
    key: 'handleMouseEnter',
    value: function handleMouseEnter() {
      if (!this.state.disableHoverChanges) this.showTooltip();
    }
  }, {
    key: 'handleMouseLeave',
    value: function handleMouseLeave() {
      if (!this.state.disableHoverChanges) this.hideTooltip();
    }
  }, {
    key: 'showTooltip',
    value: function showTooltip() {
      var tipNode = this.tooltipRef;
      var tipWrapNode = this.tooltipWrapRef;
      var lPos = -(tipNode.offsetWidth / 2) + tipWrapNode.offsetWidth / 2;

      this.setState({ showTooltip: true, lPos: lPos });
    }
  }, {
    key: 'hideTooltip',
    value: function hideTooltip() {
      this.setState({ showTooltip: false });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          content = _props.content,
          children = _props.children,
          bg = _props.bg,
          color = _props.color,
          rest = _objectWithoutProperties(_props, ['content', 'children', 'bg', 'color']);

      var _state = this.state,
          showTooltip = _state.showTooltip,
          lPos = _state.lPos;

      // NOTE: Use `button` wrapper when we need to control tooltip visibility
      // with focus / blur.
      // const Wrapper = disableHoverChanges ?
      //   TooltipWrapperButton :
      //   TooltipWrapperDiv;

      return _react2.default.createElement(
        TooltipWrapperDiv,
        _extends({}, rest, { tabIndex: '0' }),
        _react2.default.createElement(
          TooltipContainer,
          {
            innerRef: function innerRef(ref) {
              _this2.tooltipWrapRef = ref;
            },
            onMouseEnter: this.handleMouseEnter,
            onMouseLeave: this.handleMouseLeave
          },
          _react2.default.createElement(
            TooltipBubble,
            _extends({}, rest, {
              innerRef: function innerRef(ref) {
                _this2.tooltipRef = ref;
              },
              leftPosition: lPos || 0,
              show: showTooltip,
              bgColor: bg,
              textColor: color
            }),
            _react2.default.createElement(TooltipArrow, rest),
            content
          ),
          children
        )
      );
    }
  }]);

  return Tooltip;
}(_react.Component);

Tooltip.propTypes = {
  children: _react.PropTypes.any.isRequired,
  content: _react.PropTypes.any,
  color: _react.PropTypes.string,
  bg: _react.PropTypes.string,
  show: _react.PropTypes.bool
};
Tooltip.defaultProps = {
  content: 'tooltip content',
  show: null
};
exports.default = Tooltip;

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.byteLength = byteLength
exports.toByteArray = toByteArray
exports.fromByteArray = fromByteArray

var lookup = []
var revLookup = []
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array

var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
for (var i = 0, len = code.length; i < len; ++i) {
  lookup[i] = code[i]
  revLookup[code.charCodeAt(i)] = i
}

revLookup['-'.charCodeAt(0)] = 62
revLookup['_'.charCodeAt(0)] = 63

function placeHoldersCount (b64) {
  var len = b64.length
  if (len % 4 > 0) {
    throw new Error('Invalid string. Length must be a multiple of 4')
  }

  // the number of equal signs (place holders)
  // if there are two placeholders, than the two characters before it
  // represent one byte
  // if there is only one, then the three characters before it represent 2 bytes
  // this is just a cheap hack to not do indexOf twice
  return b64[len - 2] === '=' ? 2 : b64[len - 1] === '=' ? 1 : 0
}

function byteLength (b64) {
  // base64 is 4/3 + up to two characters of the original data
  return b64.length * 3 / 4 - placeHoldersCount(b64)
}

function toByteArray (b64) {
  var i, j, l, tmp, placeHolders, arr
  var len = b64.length
  placeHolders = placeHoldersCount(b64)

  arr = new Arr(len * 3 / 4 - placeHolders)

  // if there are placeholders, only get up to the last complete 4 chars
  l = placeHolders > 0 ? len - 4 : len

  var L = 0

  for (i = 0, j = 0; i < l; i += 4, j += 3) {
    tmp = (revLookup[b64.charCodeAt(i)] << 18) | (revLookup[b64.charCodeAt(i + 1)] << 12) | (revLookup[b64.charCodeAt(i + 2)] << 6) | revLookup[b64.charCodeAt(i + 3)]
    arr[L++] = (tmp >> 16) & 0xFF
    arr[L++] = (tmp >> 8) & 0xFF
    arr[L++] = tmp & 0xFF
  }

  if (placeHolders === 2) {
    tmp = (revLookup[b64.charCodeAt(i)] << 2) | (revLookup[b64.charCodeAt(i + 1)] >> 4)
    arr[L++] = tmp & 0xFF
  } else if (placeHolders === 1) {
    tmp = (revLookup[b64.charCodeAt(i)] << 10) | (revLookup[b64.charCodeAt(i + 1)] << 4) | (revLookup[b64.charCodeAt(i + 2)] >> 2)
    arr[L++] = (tmp >> 8) & 0xFF
    arr[L++] = tmp & 0xFF
  }

  return arr
}

function tripletToBase64 (num) {
  return lookup[num >> 18 & 0x3F] + lookup[num >> 12 & 0x3F] + lookup[num >> 6 & 0x3F] + lookup[num & 0x3F]
}

function encodeChunk (uint8, start, end) {
  var tmp
  var output = []
  for (var i = start; i < end; i += 3) {
    tmp = (uint8[i] << 16) + (uint8[i + 1] << 8) + (uint8[i + 2])
    output.push(tripletToBase64(tmp))
  }
  return output.join('')
}

function fromByteArray (uint8) {
  var tmp
  var len = uint8.length
  var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
  var output = ''
  var parts = []
  var maxChunkLength = 16383 // must be multiple of 3

  // go through the array every three bytes, we'll deal with trailing stuff later
  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
    parts.push(encodeChunk(uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)))
  }

  // pad the end with zeros, but make sure to not forget the extra bytes
  if (extraBytes === 1) {
    tmp = uint8[len - 1]
    output += lookup[tmp >> 2]
    output += lookup[(tmp << 4) & 0x3F]
    output += '=='
  } else if (extraBytes === 2) {
    tmp = (uint8[len - 2] << 8) + (uint8[len - 1])
    output += lookup[tmp >> 10]
    output += lookup[(tmp >> 4) & 0x3F]
    output += lookup[(tmp << 2) & 0x3F]
    output += '='
  }

  parts.push(output)

  return parts.join('')
}


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(Buffer) {var clone = (function() {
'use strict';

/**
 * Clones (copies) an Object using deep copying.
 *
 * This function supports circular references by default, but if you are certain
 * there are no circular references in your object, you can save some CPU time
 * by calling clone(obj, false).
 *
 * Caution: if `circular` is false and `parent` contains circular references,
 * your program may enter an infinite loop and crash.
 *
 * @param `parent` - the object to be cloned
 * @param `circular` - set to true if the object to be cloned may contain
 *    circular references. (optional - true by default)
 * @param `depth` - set to a number if the object is only to be cloned to
 *    a particular depth. (optional - defaults to Infinity)
 * @param `prototype` - sets the prototype to be used when cloning an object.
 *    (optional - defaults to parent prototype).
*/
function clone(parent, circular, depth, prototype) {
  var filter;
  if (typeof circular === 'object') {
    depth = circular.depth;
    prototype = circular.prototype;
    filter = circular.filter;
    circular = circular.circular
  }
  // maintain two arrays for circular references, where corresponding parents
  // and children have the same index
  var allParents = [];
  var allChildren = [];

  var useBuffer = typeof Buffer != 'undefined';

  if (typeof circular == 'undefined')
    circular = true;

  if (typeof depth == 'undefined')
    depth = Infinity;

  // recurse this function so we don't reset allParents and allChildren
  function _clone(parent, depth) {
    // cloning null always returns null
    if (parent === null)
      return null;

    if (depth == 0)
      return parent;

    var child;
    var proto;
    if (typeof parent != 'object') {
      return parent;
    }

    if (clone.__isArray(parent)) {
      child = [];
    } else if (clone.__isRegExp(parent)) {
      child = new RegExp(parent.source, __getRegExpFlags(parent));
      if (parent.lastIndex) child.lastIndex = parent.lastIndex;
    } else if (clone.__isDate(parent)) {
      child = new Date(parent.getTime());
    } else if (useBuffer && Buffer.isBuffer(parent)) {
      child = new Buffer(parent.length);
      parent.copy(child);
      return child;
    } else {
      if (typeof prototype == 'undefined') {
        proto = Object.getPrototypeOf(parent);
        child = Object.create(proto);
      }
      else {
        child = Object.create(prototype);
        proto = prototype;
      }
    }

    if (circular) {
      var index = allParents.indexOf(parent);

      if (index != -1) {
        return allChildren[index];
      }
      allParents.push(parent);
      allChildren.push(child);
    }

    for (var i in parent) {
      var attrs;
      if (proto) {
        attrs = Object.getOwnPropertyDescriptor(proto, i);
      }

      if (attrs && attrs.set == null) {
        continue;
      }
      child[i] = _clone(parent[i], depth - 1);
    }

    return child;
  }

  return _clone(parent, depth);
}

/**
 * Simple flat clone using prototype, accepts only objects, usefull for property
 * override on FLAT configuration object (no nested props).
 *
 * USE WITH CAUTION! This may not behave as you wish if you do not know how this
 * works.
 */
clone.clonePrototype = function clonePrototype(parent) {
  if (parent === null)
    return null;

  var c = function () {};
  c.prototype = parent;
  return new c();
};

// private utility functions

function __objToStr(o) {
  return Object.prototype.toString.call(o);
};
clone.__objToStr = __objToStr;

function __isDate(o) {
  return typeof o === 'object' && __objToStr(o) === '[object Date]';
};
clone.__isDate = __isDate;

function __isArray(o) {
  return typeof o === 'object' && __objToStr(o) === '[object Array]';
};
clone.__isArray = __isArray;

function __isRegExp(o) {
  return typeof o === 'object' && __objToStr(o) === '[object RegExp]';
};
clone.__isRegExp = __isRegExp;

function __getRegExpFlags(re) {
  var flags = '';
  if (re.global) flags += 'g';
  if (re.ignoreCase) flags += 'i';
  if (re.multiline) flags += 'm';
  return flags;
};
clone.__getRegExpFlags = __getRegExpFlags;

return clone;
})();

if (typeof module === 'object' && module.exports) {
  module.exports = clone;
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(35).Buffer))

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

var conversions = __webpack_require__(6);
var route = __webpack_require__(30);

var convert = {};

var models = Object.keys(conversions);

function wrapRaw(fn) {
	var wrappedFn = function (args) {
		if (args === undefined || args === null) {
			return args;
		}

		if (arguments.length > 1) {
			args = Array.prototype.slice.call(arguments);
		}

		return fn(args);
	};

	// preserve .conversion property if there is one
	if ('conversion' in fn) {
		wrappedFn.conversion = fn.conversion;
	}

	return wrappedFn;
}

function wrapRounded(fn) {
	var wrappedFn = function (args) {
		if (args === undefined || args === null) {
			return args;
		}

		if (arguments.length > 1) {
			args = Array.prototype.slice.call(arguments);
		}

		var result = fn(args);

		// we're assuming the result is an array here.
		// see notice in conversions.js; don't use box types
		// in conversion functions.
		if (typeof result === 'object') {
			for (var len = result.length, i = 0; i < len; i++) {
				result[i] = Math.round(result[i]);
			}
		}

		return result;
	};

	// preserve .conversion property if there is one
	if ('conversion' in fn) {
		wrappedFn.conversion = fn.conversion;
	}

	return wrappedFn;
}

models.forEach(function (fromModel) {
	convert[fromModel] = {};

	Object.defineProperty(convert[fromModel], 'channels', {value: conversions[fromModel].channels});
	Object.defineProperty(convert[fromModel], 'labels', {value: conversions[fromModel].labels});

	var routes = route(fromModel);
	var routeModels = Object.keys(routes);

	routeModels.forEach(function (toModel) {
		var fn = routes[toModel];

		convert[fromModel][toModel] = wrapRounded(fn);
		convert[fromModel][toModel].raw = wrapRaw(fn);
	});
});

module.exports = convert;


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

var conversions = __webpack_require__(6);

/*
	this function routes a model to all other models.

	all functions that are routed have a property `.conversion` attached
	to the returned synthetic function. This property is an array
	of strings, each with the steps in between the 'from' and 'to'
	color models (inclusive).

	conversions that are not possible simply are not included.
*/

// https://jsperf.com/object-keys-vs-for-in-with-closure/3
var models = Object.keys(conversions);

function buildGraph() {
	var graph = {};

	for (var len = models.length, i = 0; i < len; i++) {
		graph[models[i]] = {
			// http://jsperf.com/1-vs-infinity
			// micro-opt, but this is simple.
			distance: -1,
			parent: null
		};
	}

	return graph;
}

// https://en.wikipedia.org/wiki/Breadth-first_search
function deriveBFS(fromModel) {
	var graph = buildGraph();
	var queue = [fromModel]; // unshift -> queue -> pop

	graph[fromModel].distance = 0;

	while (queue.length) {
		var current = queue.pop();
		var adjacents = Object.keys(conversions[current]);

		for (var len = adjacents.length, i = 0; i < len; i++) {
			var adjacent = adjacents[i];
			var node = graph[adjacent];

			if (node.distance === -1) {
				node.distance = graph[current].distance + 1;
				node.parent = current;
				queue.unshift(adjacent);
			}
		}
	}

	return graph;
}

function link(from, to) {
	return function (args) {
		return to(from(args));
	};
}

function wrapConversion(toModel, graph) {
	var path = [graph[toModel].parent, toModel];
	var fn = conversions[graph[toModel].parent][toModel];

	var cur = graph[toModel].parent;
	while (graph[cur].parent) {
		path.unshift(graph[cur].parent);
		fn = link(conversions[graph[cur].parent][cur], fn);
		cur = graph[cur].parent;
	}

	fn.conversion = path;
	return fn;
}

module.exports = function (fromModel) {
	var graph = deriveBFS(fromModel);
	var conversion = {};

	var models = Object.keys(graph);
	for (var len = models.length, i = 0; i < len; i++) {
		var toModel = models[i];
		var node = graph[toModel];

		if (node.parent === null) {
			// no possible conversion, or this node is the source model.
			continue;
		}

		conversion[toModel] = wrapConversion(toModel, graph);
	}

	return conversion;
};



/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

/* MIT license */
var colorNames = __webpack_require__(7);

module.exports = {
   getRgba: getRgba,
   getHsla: getHsla,
   getRgb: getRgb,
   getHsl: getHsl,
   getHwb: getHwb,
   getAlpha: getAlpha,

   hexString: hexString,
   rgbString: rgbString,
   rgbaString: rgbaString,
   percentString: percentString,
   percentaString: percentaString,
   hslString: hslString,
   hslaString: hslaString,
   hwbString: hwbString,
   keyword: keyword
}

function getRgba(string) {
   if (!string) {
      return;
   }
   var abbr =  /^#([a-fA-F0-9]{3})$/,
       hex =  /^#([a-fA-F0-9]{6})$/,
       rgba = /^rgba?\(\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/,
       per = /^rgba?\(\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/,
       keyword = /(\D+)/;

   var rgb = [0, 0, 0],
       a = 1,
       match = string.match(abbr);
   if (match) {
      match = match[1];
      for (var i = 0; i < rgb.length; i++) {
         rgb[i] = parseInt(match[i] + match[i], 16);
      }
   }
   else if (match = string.match(hex)) {
      match = match[1];
      for (var i = 0; i < rgb.length; i++) {
         rgb[i] = parseInt(match.slice(i * 2, i * 2 + 2), 16);
      }
   }
   else if (match = string.match(rgba)) {
      for (var i = 0; i < rgb.length; i++) {
         rgb[i] = parseInt(match[i + 1]);
      }
      a = parseFloat(match[4]);
   }
   else if (match = string.match(per)) {
      for (var i = 0; i < rgb.length; i++) {
         rgb[i] = Math.round(parseFloat(match[i + 1]) * 2.55);
      }
      a = parseFloat(match[4]);
   }
   else if (match = string.match(keyword)) {
      if (match[1] == "transparent") {
         return [0, 0, 0, 0];
      }
      rgb = colorNames[match[1]];
      if (!rgb) {
         return;
      }
   }

   for (var i = 0; i < rgb.length; i++) {
      rgb[i] = scale(rgb[i], 0, 255);
   }
   if (!a && a != 0) {
      a = 1;
   }
   else {
      a = scale(a, 0, 1);
   }
   rgb[3] = a;
   return rgb;
}

function getHsla(string) {
   if (!string) {
      return;
   }
   var hsl = /^hsla?\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/;
   var match = string.match(hsl);
   if (match) {
      var alpha = parseFloat(match[4]);
      var h = scale(parseInt(match[1]), 0, 360),
          s = scale(parseFloat(match[2]), 0, 100),
          l = scale(parseFloat(match[3]), 0, 100),
          a = scale(isNaN(alpha) ? 1 : alpha, 0, 1);
      return [h, s, l, a];
   }
}

function getHwb(string) {
   if (!string) {
      return;
   }
   var hwb = /^hwb\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/;
   var match = string.match(hwb);
   if (match) {
    var alpha = parseFloat(match[4]);
      var h = scale(parseInt(match[1]), 0, 360),
          w = scale(parseFloat(match[2]), 0, 100),
          b = scale(parseFloat(match[3]), 0, 100),
          a = scale(isNaN(alpha) ? 1 : alpha, 0, 1);
      return [h, w, b, a];
   }
}

function getRgb(string) {
   var rgba = getRgba(string);
   return rgba && rgba.slice(0, 3);
}

function getHsl(string) {
  var hsla = getHsla(string);
  return hsla && hsla.slice(0, 3);
}

function getAlpha(string) {
   var vals = getRgba(string);
   if (vals) {
      return vals[3];
   }
   else if (vals = getHsla(string)) {
      return vals[3];
   }
   else if (vals = getHwb(string)) {
      return vals[3];
   }
}

// generators
function hexString(rgb) {
   return "#" + hexDouble(rgb[0]) + hexDouble(rgb[1])
              + hexDouble(rgb[2]);
}

function rgbString(rgba, alpha) {
   if (alpha < 1 || (rgba[3] && rgba[3] < 1)) {
      return rgbaString(rgba, alpha);
   }
   return "rgb(" + rgba[0] + ", " + rgba[1] + ", " + rgba[2] + ")";
}

function rgbaString(rgba, alpha) {
   if (alpha === undefined) {
      alpha = (rgba[3] !== undefined ? rgba[3] : 1);
   }
   return "rgba(" + rgba[0] + ", " + rgba[1] + ", " + rgba[2]
           + ", " + alpha + ")";
}

function percentString(rgba, alpha) {
   if (alpha < 1 || (rgba[3] && rgba[3] < 1)) {
      return percentaString(rgba, alpha);
   }
   var r = Math.round(rgba[0]/255 * 100),
       g = Math.round(rgba[1]/255 * 100),
       b = Math.round(rgba[2]/255 * 100);

   return "rgb(" + r + "%, " + g + "%, " + b + "%)";
}

function percentaString(rgba, alpha) {
   var r = Math.round(rgba[0]/255 * 100),
       g = Math.round(rgba[1]/255 * 100),
       b = Math.round(rgba[2]/255 * 100);
   return "rgba(" + r + "%, " + g + "%, " + b + "%, " + (alpha || rgba[3] || 1) + ")";
}

function hslString(hsla, alpha) {
   if (alpha < 1 || (hsla[3] && hsla[3] < 1)) {
      return hslaString(hsla, alpha);
   }
   return "hsl(" + hsla[0] + ", " + hsla[1] + "%, " + hsla[2] + "%)";
}

function hslaString(hsla, alpha) {
   if (alpha === undefined) {
      alpha = (hsla[3] !== undefined ? hsla[3] : 1);
   }
   return "hsla(" + hsla[0] + ", " + hsla[1] + "%, " + hsla[2] + "%, "
           + alpha + ")";
}

// hwb is a bit different than rgb(a) & hsl(a) since there is no alpha specific syntax
// (hwb have alpha optional & 1 is default value)
function hwbString(hwb, alpha) {
   if (alpha === undefined) {
      alpha = (hwb[3] !== undefined ? hwb[3] : 1);
   }
   return "hwb(" + hwb[0] + ", " + hwb[1] + "%, " + hwb[2] + "%"
           + (alpha !== undefined && alpha !== 1 ? ", " + alpha : "") + ")";
}

function keyword(rgb) {
  return reverseNames[rgb.slice(0, 3)];
}

// helpers
function scale(num, min, max) {
   return Math.min(Math.max(min, num), max);
}

function hexDouble(num) {
  var str = num.toString(16).toUpperCase();
  return (str.length < 2) ? "0" + str : str;
}


//create a list of reverse color names
var reverseNames = {};
for (var name in colorNames) {
   reverseNames[colorNames[name]] = name;
}


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

/* MIT license */
var clone = __webpack_require__(28);
var convert = __webpack_require__(29);
var string = __webpack_require__(31);

var Color = function (obj) {
	if (obj instanceof Color) {
		return obj;
	}
	if (!(this instanceof Color)) {
		return new Color(obj);
	}

	this.values = {
		rgb: [0, 0, 0],
		hsl: [0, 0, 0],
		hsv: [0, 0, 0],
		hwb: [0, 0, 0],
		cmyk: [0, 0, 0, 0],
		alpha: 1
	};

	// parse Color() argument
	var vals;
	if (typeof obj === 'string') {
		vals = string.getRgba(obj);
		if (vals) {
			this.setValues('rgb', vals);
		} else if (vals = string.getHsla(obj)) {
			this.setValues('hsl', vals);
		} else if (vals = string.getHwb(obj)) {
			this.setValues('hwb', vals);
		} else {
			throw new Error('Unable to parse color from string "' + obj + '"');
		}
	} else if (typeof obj === 'object') {
		vals = obj;
		if (vals.r !== undefined || vals.red !== undefined) {
			this.setValues('rgb', vals);
		} else if (vals.l !== undefined || vals.lightness !== undefined) {
			this.setValues('hsl', vals);
		} else if (vals.v !== undefined || vals.value !== undefined) {
			this.setValues('hsv', vals);
		} else if (vals.w !== undefined || vals.whiteness !== undefined) {
			this.setValues('hwb', vals);
		} else if (vals.c !== undefined || vals.cyan !== undefined) {
			this.setValues('cmyk', vals);
		} else {
			throw new Error('Unable to parse color from object ' + JSON.stringify(obj));
		}
	}
};

Color.prototype = {
	rgb: function () {
		return this.setSpace('rgb', arguments);
	},
	hsl: function () {
		return this.setSpace('hsl', arguments);
	},
	hsv: function () {
		return this.setSpace('hsv', arguments);
	},
	hwb: function () {
		return this.setSpace('hwb', arguments);
	},
	cmyk: function () {
		return this.setSpace('cmyk', arguments);
	},

	rgbArray: function () {
		return this.values.rgb;
	},
	hslArray: function () {
		return this.values.hsl;
	},
	hsvArray: function () {
		return this.values.hsv;
	},
	hwbArray: function () {
		if (this.values.alpha !== 1) {
			return this.values.hwb.concat([this.values.alpha]);
		}
		return this.values.hwb;
	},
	cmykArray: function () {
		return this.values.cmyk;
	},
	rgbaArray: function () {
		var rgb = this.values.rgb;
		return rgb.concat([this.values.alpha]);
	},
	rgbaArrayNormalized: function () {
		var rgb = this.values.rgb;
		var glRgba = [];
		for (var i = 0; i < 3; i++) {
			glRgba[i] = rgb[i] / 255;
		}
		glRgba.push(this.values.alpha);
		return glRgba;
	},
	hslaArray: function () {
		var hsl = this.values.hsl;
		return hsl.concat([this.values.alpha]);
	},
	alpha: function (val) {
		if (val === undefined) {
			return this.values.alpha;
		}
		this.setValues('alpha', val);
		return this;
	},

	red: function (val) {
		return this.setChannel('rgb', 0, val);
	},
	green: function (val) {
		return this.setChannel('rgb', 1, val);
	},
	blue: function (val) {
		return this.setChannel('rgb', 2, val);
	},
	hue: function (val) {
		if (val) {
			val %= 360;
			val = val < 0 ? 360 + val : val;
		}
		return this.setChannel('hsl', 0, val);
	},
	saturation: function (val) {
		return this.setChannel('hsl', 1, val);
	},
	lightness: function (val) {
		return this.setChannel('hsl', 2, val);
	},
	saturationv: function (val) {
		return this.setChannel('hsv', 1, val);
	},
	whiteness: function (val) {
		return this.setChannel('hwb', 1, val);
	},
	blackness: function (val) {
		return this.setChannel('hwb', 2, val);
	},
	value: function (val) {
		return this.setChannel('hsv', 2, val);
	},
	cyan: function (val) {
		return this.setChannel('cmyk', 0, val);
	},
	magenta: function (val) {
		return this.setChannel('cmyk', 1, val);
	},
	yellow: function (val) {
		return this.setChannel('cmyk', 2, val);
	},
	black: function (val) {
		return this.setChannel('cmyk', 3, val);
	},

	hexString: function () {
		return string.hexString(this.values.rgb);
	},
	rgbString: function () {
		return string.rgbString(this.values.rgb, this.values.alpha);
	},
	rgbaString: function () {
		return string.rgbaString(this.values.rgb, this.values.alpha);
	},
	percentString: function () {
		return string.percentString(this.values.rgb, this.values.alpha);
	},
	hslString: function () {
		return string.hslString(this.values.hsl, this.values.alpha);
	},
	hslaString: function () {
		return string.hslaString(this.values.hsl, this.values.alpha);
	},
	hwbString: function () {
		return string.hwbString(this.values.hwb, this.values.alpha);
	},
	keyword: function () {
		return string.keyword(this.values.rgb, this.values.alpha);
	},

	rgbNumber: function () {
		return (this.values.rgb[0] << 16) | (this.values.rgb[1] << 8) | this.values.rgb[2];
	},

	luminosity: function () {
		// http://www.w3.org/TR/WCAG20/#relativeluminancedef
		var rgb = this.values.rgb;
		var lum = [];
		for (var i = 0; i < rgb.length; i++) {
			var chan = rgb[i] / 255;
			lum[i] = (chan <= 0.03928) ? chan / 12.92 : Math.pow(((chan + 0.055) / 1.055), 2.4);
		}
		return 0.2126 * lum[0] + 0.7152 * lum[1] + 0.0722 * lum[2];
	},

	contrast: function (color2) {
		// http://www.w3.org/TR/WCAG20/#contrast-ratiodef
		var lum1 = this.luminosity();
		var lum2 = color2.luminosity();
		if (lum1 > lum2) {
			return (lum1 + 0.05) / (lum2 + 0.05);
		}
		return (lum2 + 0.05) / (lum1 + 0.05);
	},

	level: function (color2) {
		var contrastRatio = this.contrast(color2);
		if (contrastRatio >= 7.1) {
			return 'AAA';
		}

		return (contrastRatio >= 4.5) ? 'AA' : '';
	},

	dark: function () {
		// YIQ equation from http://24ways.org/2010/calculating-color-contrast
		var rgb = this.values.rgb;
		var yiq = (rgb[0] * 299 + rgb[1] * 587 + rgb[2] * 114) / 1000;
		return yiq < 128;
	},

	light: function () {
		return !this.dark();
	},

	negate: function () {
		var rgb = [];
		for (var i = 0; i < 3; i++) {
			rgb[i] = 255 - this.values.rgb[i];
		}
		this.setValues('rgb', rgb);
		return this;
	},

	lighten: function (ratio) {
		this.values.hsl[2] += this.values.hsl[2] * ratio;
		this.setValues('hsl', this.values.hsl);
		return this;
	},

	darken: function (ratio) {
		this.values.hsl[2] -= this.values.hsl[2] * ratio;
		this.setValues('hsl', this.values.hsl);
		return this;
	},

	saturate: function (ratio) {
		this.values.hsl[1] += this.values.hsl[1] * ratio;
		this.setValues('hsl', this.values.hsl);
		return this;
	},

	desaturate: function (ratio) {
		this.values.hsl[1] -= this.values.hsl[1] * ratio;
		this.setValues('hsl', this.values.hsl);
		return this;
	},

	whiten: function (ratio) {
		this.values.hwb[1] += this.values.hwb[1] * ratio;
		this.setValues('hwb', this.values.hwb);
		return this;
	},

	blacken: function (ratio) {
		this.values.hwb[2] += this.values.hwb[2] * ratio;
		this.setValues('hwb', this.values.hwb);
		return this;
	},

	greyscale: function () {
		var rgb = this.values.rgb;
		// http://en.wikipedia.org/wiki/Grayscale#Converting_color_to_grayscale
		var val = rgb[0] * 0.3 + rgb[1] * 0.59 + rgb[2] * 0.11;
		this.setValues('rgb', [val, val, val]);
		return this;
	},

	clearer: function (ratio) {
		this.setValues('alpha', this.values.alpha - (this.values.alpha * ratio));
		return this;
	},

	opaquer: function (ratio) {
		this.setValues('alpha', this.values.alpha + (this.values.alpha * ratio));
		return this;
	},

	rotate: function (degrees) {
		var hue = this.values.hsl[0];
		hue = (hue + degrees) % 360;
		hue = hue < 0 ? 360 + hue : hue;
		this.values.hsl[0] = hue;
		this.setValues('hsl', this.values.hsl);
		return this;
	},

	/**
	 * Ported from sass implementation in C
	 * https://github.com/sass/libsass/blob/0e6b4a2850092356aa3ece07c6b249f0221caced/functions.cpp#L209
	 */
	mix: function (mixinColor, weight) {
		var color1 = this;
		var color2 = mixinColor;
		var p = weight === undefined ? 0.5 : weight;

		var w = 2 * p - 1;
		var a = color1.alpha() - color2.alpha();

		var w1 = (((w * a === -1) ? w : (w + a) / (1 + w * a)) + 1) / 2.0;
		var w2 = 1 - w1;

		return this
			.rgb(
				w1 * color1.red() + w2 * color2.red(),
				w1 * color1.green() + w2 * color2.green(),
				w1 * color1.blue() + w2 * color2.blue()
			)
			.alpha(color1.alpha() * p + color2.alpha() * (1 - p));
	},

	toJSON: function () {
		return this.rgb();
	},

	clone: function () {
		var col = new Color();
		col.values = clone(this.values);
		return col;
	}
};

Color.prototype.getValues = function (space) {
	var vals = {};

	for (var i = 0; i < space.length; i++) {
		vals[space.charAt(i)] = this.values[space][i];
	}

	if (this.values.alpha !== 1) {
		vals.a = this.values.alpha;
	}

	// {r: 255, g: 255, b: 255, a: 0.4}
	return vals;
};

Color.prototype.setValues = function (space, vals) {
	var spaces = {
		rgb: ['red', 'green', 'blue'],
		hsl: ['hue', 'saturation', 'lightness'],
		hsv: ['hue', 'saturation', 'value'],
		hwb: ['hue', 'whiteness', 'blackness'],
		cmyk: ['cyan', 'magenta', 'yellow', 'black']
	};

	var maxes = {
		rgb: [255, 255, 255],
		hsl: [360, 100, 100],
		hsv: [360, 100, 100],
		hwb: [360, 100, 100],
		cmyk: [100, 100, 100, 100]
	};

	var i;
	var alpha = 1;
	if (space === 'alpha') {
		alpha = vals;
	} else if (vals.length) {
		// [10, 10, 10]
		this.values[space] = vals.slice(0, space.length);
		alpha = vals[space.length];
	} else if (vals[space.charAt(0)] !== undefined) {
		// {r: 10, g: 10, b: 10}
		for (i = 0; i < space.length; i++) {
			this.values[space][i] = vals[space.charAt(i)];
		}

		alpha = vals.a;
	} else if (vals[spaces[space][0]] !== undefined) {
		// {red: 10, green: 10, blue: 10}
		var chans = spaces[space];

		for (i = 0; i < space.length; i++) {
			this.values[space][i] = vals[chans[i]];
		}

		alpha = vals.alpha;
	}

	this.values.alpha = Math.max(0, Math.min(1, (alpha === undefined ? this.values.alpha : alpha)));

	if (space === 'alpha') {
		return false;
	}

	var capped;

	// cap values of the space prior converting all values
	for (i = 0; i < space.length; i++) {
		capped = Math.max(0, Math.min(maxes[space][i], this.values[space][i]));
		this.values[space][i] = Math.round(capped);
	}

	// convert to all the other color spaces
	for (var sname in spaces) {
		if (sname !== space) {
			this.values[sname] = convert[space][sname](this.values[space]);
		}

		// cap values
		for (i = 0; i < sname.length; i++) {
			capped = Math.max(0, Math.min(maxes[sname][i], this.values[sname][i]));
			this.values[sname][i] = Math.round(capped);
		}
	}

	return true;
};

Color.prototype.setSpace = function (space, args) {
	var vals = args[0];

	if (vals === undefined) {
		// color.rgb()
		return this.getValues(space);
	}

	// color.rgb(10, 10, 10)
	if (typeof vals === 'number') {
		vals = Array.prototype.slice.call(args);
	}

	this.setValues(space, vals);
	return this;
};

Color.prototype.setChannel = function (space, index, val) {
	if (val === undefined) {
		// color.red()
		return this.values[space][index];
	} else if (val === this.values[space][index]) {
		// color.red(color.red())
		return this;
	}

	// color.red(100)
	this.values[space][index] = val;
	this.setValues(space, this.values[space]);

	return this;
};

module.exports = Color;


/***/ }),
/* 33 */
/***/ (function(module, exports) {

exports.read = function (buffer, offset, isLE, mLen, nBytes) {
  var e, m
  var eLen = nBytes * 8 - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var nBits = -7
  var i = isLE ? (nBytes - 1) : 0
  var d = isLE ? -1 : 1
  var s = buffer[offset + i]

  i += d

  e = s & ((1 << (-nBits)) - 1)
  s >>= (-nBits)
  nBits += eLen
  for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & ((1 << (-nBits)) - 1)
  e >>= (-nBits)
  nBits += mLen
  for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias
  } else if (e === eMax) {
    return m ? NaN : ((s ? -1 : 1) * Infinity)
  } else {
    m = m + Math.pow(2, mLen)
    e = e - eBias
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
}

exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c
  var eLen = nBytes * 8 - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
  var i = isLE ? 0 : (nBytes - 1)
  var d = isLE ? 1 : -1
  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0

  value = Math.abs(value)

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0
    e = eMax
  } else {
    e = Math.floor(Math.log(value) / Math.LN2)
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--
      c *= 2
    }
    if (e + eBias >= 1) {
      value += rt / c
    } else {
      value += rt * Math.pow(2, 1 - eBias)
    }
    if (value * c >= 2) {
      e++
      c /= 2
    }

    if (e + eBias >= eMax) {
      m = 0
      e = eMax
    } else if (e + eBias >= 1) {
      m = (value * c - 1) * Math.pow(2, mLen)
      e = e + eBias
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
      e = 0
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = (e << mLen) | m
  eLen += mLen
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128
}


/***/ }),
/* 34 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */
/* eslint-disable no-proto */



var base64 = __webpack_require__(27)
var ieee754 = __webpack_require__(33)
var isArray = __webpack_require__(34)

exports.Buffer = Buffer
exports.SlowBuffer = SlowBuffer
exports.INSPECT_MAX_BYTES = 50

/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Use Object implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * Due to various browser bugs, sometimes the Object implementation will be used even
 * when the browser supports typed arrays.
 *
 * Note:
 *
 *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
 *
 *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
 *
 *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
 *     incorrect length in some situations.

 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
 * get the Object implementation, which is slower but behaves correctly.
 */
Buffer.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== undefined
  ? global.TYPED_ARRAY_SUPPORT
  : typedArraySupport()

/*
 * Export kMaxLength after typed array support is determined.
 */
exports.kMaxLength = kMaxLength()

function typedArraySupport () {
  try {
    var arr = new Uint8Array(1)
    arr.__proto__ = {__proto__: Uint8Array.prototype, foo: function () { return 42 }}
    return arr.foo() === 42 && // typed array instances can be augmented
        typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
        arr.subarray(1, 1).byteLength === 0 // ie10 has broken `subarray`
  } catch (e) {
    return false
  }
}

function kMaxLength () {
  return Buffer.TYPED_ARRAY_SUPPORT
    ? 0x7fffffff
    : 0x3fffffff
}

function createBuffer (that, length) {
  if (kMaxLength() < length) {
    throw new RangeError('Invalid typed array length')
  }
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = new Uint8Array(length)
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    if (that === null) {
      that = new Buffer(length)
    }
    that.length = length
  }

  return that
}

/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */

function Buffer (arg, encodingOrOffset, length) {
  if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
    return new Buffer(arg, encodingOrOffset, length)
  }

  // Common case.
  if (typeof arg === 'number') {
    if (typeof encodingOrOffset === 'string') {
      throw new Error(
        'If encoding is specified then the first argument must be a string'
      )
    }
    return allocUnsafe(this, arg)
  }
  return from(this, arg, encodingOrOffset, length)
}

Buffer.poolSize = 8192 // not used by this implementation

// TODO: Legacy, not needed anymore. Remove in next major version.
Buffer._augment = function (arr) {
  arr.__proto__ = Buffer.prototype
  return arr
}

function from (that, value, encodingOrOffset, length) {
  if (typeof value === 'number') {
    throw new TypeError('"value" argument must not be a number')
  }

  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
    return fromArrayBuffer(that, value, encodingOrOffset, length)
  }

  if (typeof value === 'string') {
    return fromString(that, value, encodingOrOffset)
  }

  return fromObject(that, value)
}

/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/
Buffer.from = function (value, encodingOrOffset, length) {
  return from(null, value, encodingOrOffset, length)
}

if (Buffer.TYPED_ARRAY_SUPPORT) {
  Buffer.prototype.__proto__ = Uint8Array.prototype
  Buffer.__proto__ = Uint8Array
  if (typeof Symbol !== 'undefined' && Symbol.species &&
      Buffer[Symbol.species] === Buffer) {
    // Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
    Object.defineProperty(Buffer, Symbol.species, {
      value: null,
      configurable: true
    })
  }
}

function assertSize (size) {
  if (typeof size !== 'number') {
    throw new TypeError('"size" argument must be a number')
  } else if (size < 0) {
    throw new RangeError('"size" argument must not be negative')
  }
}

function alloc (that, size, fill, encoding) {
  assertSize(size)
  if (size <= 0) {
    return createBuffer(that, size)
  }
  if (fill !== undefined) {
    // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpretted as a start offset.
    return typeof encoding === 'string'
      ? createBuffer(that, size).fill(fill, encoding)
      : createBuffer(that, size).fill(fill)
  }
  return createBuffer(that, size)
}

/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/
Buffer.alloc = function (size, fill, encoding) {
  return alloc(null, size, fill, encoding)
}

function allocUnsafe (that, size) {
  assertSize(size)
  that = createBuffer(that, size < 0 ? 0 : checked(size) | 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) {
    for (var i = 0; i < size; ++i) {
      that[i] = 0
    }
  }
  return that
}

/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */
Buffer.allocUnsafe = function (size) {
  return allocUnsafe(null, size)
}
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */
Buffer.allocUnsafeSlow = function (size) {
  return allocUnsafe(null, size)
}

function fromString (that, string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') {
    encoding = 'utf8'
  }

  if (!Buffer.isEncoding(encoding)) {
    throw new TypeError('"encoding" must be a valid string encoding')
  }

  var length = byteLength(string, encoding) | 0
  that = createBuffer(that, length)

  var actual = that.write(string, encoding)

  if (actual !== length) {
    // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    that = that.slice(0, actual)
  }

  return that
}

function fromArrayLike (that, array) {
  var length = array.length < 0 ? 0 : checked(array.length) | 0
  that = createBuffer(that, length)
  for (var i = 0; i < length; i += 1) {
    that[i] = array[i] & 255
  }
  return that
}

function fromArrayBuffer (that, array, byteOffset, length) {
  array.byteLength // this throws if `array` is not a valid ArrayBuffer

  if (byteOffset < 0 || array.byteLength < byteOffset) {
    throw new RangeError('\'offset\' is out of bounds')
  }

  if (array.byteLength < byteOffset + (length || 0)) {
    throw new RangeError('\'length\' is out of bounds')
  }

  if (byteOffset === undefined && length === undefined) {
    array = new Uint8Array(array)
  } else if (length === undefined) {
    array = new Uint8Array(array, byteOffset)
  } else {
    array = new Uint8Array(array, byteOffset, length)
  }

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = array
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    that = fromArrayLike(that, array)
  }
  return that
}

function fromObject (that, obj) {
  if (Buffer.isBuffer(obj)) {
    var len = checked(obj.length) | 0
    that = createBuffer(that, len)

    if (that.length === 0) {
      return that
    }

    obj.copy(that, 0, 0, len)
    return that
  }

  if (obj) {
    if ((typeof ArrayBuffer !== 'undefined' &&
        obj.buffer instanceof ArrayBuffer) || 'length' in obj) {
      if (typeof obj.length !== 'number' || isnan(obj.length)) {
        return createBuffer(that, 0)
      }
      return fromArrayLike(that, obj)
    }

    if (obj.type === 'Buffer' && isArray(obj.data)) {
      return fromArrayLike(that, obj.data)
    }
  }

  throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.')
}

function checked (length) {
  // Note: cannot use `length < kMaxLength()` here because that fails when
  // length is NaN (which is otherwise coerced to zero.)
  if (length >= kMaxLength()) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
                         'size: 0x' + kMaxLength().toString(16) + ' bytes')
  }
  return length | 0
}

function SlowBuffer (length) {
  if (+length != length) { // eslint-disable-line eqeqeq
    length = 0
  }
  return Buffer.alloc(+length)
}

Buffer.isBuffer = function isBuffer (b) {
  return !!(b != null && b._isBuffer)
}

Buffer.compare = function compare (a, b) {
  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
    throw new TypeError('Arguments must be Buffers')
  }

  if (a === b) return 0

  var x = a.length
  var y = b.length

  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i]
      y = b[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

Buffer.isEncoding = function isEncoding (encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'latin1':
    case 'binary':
    case 'base64':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true
    default:
      return false
  }
}

Buffer.concat = function concat (list, length) {
  if (!isArray(list)) {
    throw new TypeError('"list" argument must be an Array of Buffers')
  }

  if (list.length === 0) {
    return Buffer.alloc(0)
  }

  var i
  if (length === undefined) {
    length = 0
    for (i = 0; i < list.length; ++i) {
      length += list[i].length
    }
  }

  var buffer = Buffer.allocUnsafe(length)
  var pos = 0
  for (i = 0; i < list.length; ++i) {
    var buf = list[i]
    if (!Buffer.isBuffer(buf)) {
      throw new TypeError('"list" argument must be an Array of Buffers')
    }
    buf.copy(buffer, pos)
    pos += buf.length
  }
  return buffer
}

function byteLength (string, encoding) {
  if (Buffer.isBuffer(string)) {
    return string.length
  }
  if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' &&
      (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
    return string.byteLength
  }
  if (typeof string !== 'string') {
    string = '' + string
  }

  var len = string.length
  if (len === 0) return 0

  // Use a for loop to avoid recursion
  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'ascii':
      case 'latin1':
      case 'binary':
        return len
      case 'utf8':
      case 'utf-8':
      case undefined:
        return utf8ToBytes(string).length
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return len * 2
      case 'hex':
        return len >>> 1
      case 'base64':
        return base64ToBytes(string).length
      default:
        if (loweredCase) return utf8ToBytes(string).length // assume utf8
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}
Buffer.byteLength = byteLength

function slowToString (encoding, start, end) {
  var loweredCase = false

  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
  // property of a typed array.

  // This behaves neither like String nor Uint8Array in that we set start/end
  // to their upper/lower bounds if the value passed is out of range.
  // undefined is handled specially as per ECMA-262 6th Edition,
  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
  if (start === undefined || start < 0) {
    start = 0
  }
  // Return early if start > this.length. Done here to prevent potential uint32
  // coercion fail below.
  if (start > this.length) {
    return ''
  }

  if (end === undefined || end > this.length) {
    end = this.length
  }

  if (end <= 0) {
    return ''
  }

  // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
  end >>>= 0
  start >>>= 0

  if (end <= start) {
    return ''
  }

  if (!encoding) encoding = 'utf8'

  while (true) {
    switch (encoding) {
      case 'hex':
        return hexSlice(this, start, end)

      case 'utf8':
      case 'utf-8':
        return utf8Slice(this, start, end)

      case 'ascii':
        return asciiSlice(this, start, end)

      case 'latin1':
      case 'binary':
        return latin1Slice(this, start, end)

      case 'base64':
        return base64Slice(this, start, end)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return utf16leSlice(this, start, end)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = (encoding + '').toLowerCase()
        loweredCase = true
    }
  }
}

// The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
// Buffer instances.
Buffer.prototype._isBuffer = true

function swap (b, n, m) {
  var i = b[n]
  b[n] = b[m]
  b[m] = i
}

Buffer.prototype.swap16 = function swap16 () {
  var len = this.length
  if (len % 2 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 16-bits')
  }
  for (var i = 0; i < len; i += 2) {
    swap(this, i, i + 1)
  }
  return this
}

Buffer.prototype.swap32 = function swap32 () {
  var len = this.length
  if (len % 4 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 32-bits')
  }
  for (var i = 0; i < len; i += 4) {
    swap(this, i, i + 3)
    swap(this, i + 1, i + 2)
  }
  return this
}

Buffer.prototype.swap64 = function swap64 () {
  var len = this.length
  if (len % 8 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 64-bits')
  }
  for (var i = 0; i < len; i += 8) {
    swap(this, i, i + 7)
    swap(this, i + 1, i + 6)
    swap(this, i + 2, i + 5)
    swap(this, i + 3, i + 4)
  }
  return this
}

Buffer.prototype.toString = function toString () {
  var length = this.length | 0
  if (length === 0) return ''
  if (arguments.length === 0) return utf8Slice(this, 0, length)
  return slowToString.apply(this, arguments)
}

Buffer.prototype.equals = function equals (b) {
  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
  if (this === b) return true
  return Buffer.compare(this, b) === 0
}

Buffer.prototype.inspect = function inspect () {
  var str = ''
  var max = exports.INSPECT_MAX_BYTES
  if (this.length > 0) {
    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ')
    if (this.length > max) str += ' ... '
  }
  return '<Buffer ' + str + '>'
}

Buffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
  if (!Buffer.isBuffer(target)) {
    throw new TypeError('Argument must be a Buffer')
  }

  if (start === undefined) {
    start = 0
  }
  if (end === undefined) {
    end = target ? target.length : 0
  }
  if (thisStart === undefined) {
    thisStart = 0
  }
  if (thisEnd === undefined) {
    thisEnd = this.length
  }

  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
    throw new RangeError('out of range index')
  }

  if (thisStart >= thisEnd && start >= end) {
    return 0
  }
  if (thisStart >= thisEnd) {
    return -1
  }
  if (start >= end) {
    return 1
  }

  start >>>= 0
  end >>>= 0
  thisStart >>>= 0
  thisEnd >>>= 0

  if (this === target) return 0

  var x = thisEnd - thisStart
  var y = end - start
  var len = Math.min(x, y)

  var thisCopy = this.slice(thisStart, thisEnd)
  var targetCopy = target.slice(start, end)

  for (var i = 0; i < len; ++i) {
    if (thisCopy[i] !== targetCopy[i]) {
      x = thisCopy[i]
      y = targetCopy[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
  // Empty buffer means no match
  if (buffer.length === 0) return -1

  // Normalize byteOffset
  if (typeof byteOffset === 'string') {
    encoding = byteOffset
    byteOffset = 0
  } else if (byteOffset > 0x7fffffff) {
    byteOffset = 0x7fffffff
  } else if (byteOffset < -0x80000000) {
    byteOffset = -0x80000000
  }
  byteOffset = +byteOffset  // Coerce to Number.
  if (isNaN(byteOffset)) {
    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : (buffer.length - 1)
  }

  // Normalize byteOffset: negative offsets start from the end of the buffer
  if (byteOffset < 0) byteOffset = buffer.length + byteOffset
  if (byteOffset >= buffer.length) {
    if (dir) return -1
    else byteOffset = buffer.length - 1
  } else if (byteOffset < 0) {
    if (dir) byteOffset = 0
    else return -1
  }

  // Normalize val
  if (typeof val === 'string') {
    val = Buffer.from(val, encoding)
  }

  // Finally, search either indexOf (if dir is true) or lastIndexOf
  if (Buffer.isBuffer(val)) {
    // Special case: looking for empty string/buffer always fails
    if (val.length === 0) {
      return -1
    }
    return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
  } else if (typeof val === 'number') {
    val = val & 0xFF // Search for a byte value [0-255]
    if (Buffer.TYPED_ARRAY_SUPPORT &&
        typeof Uint8Array.prototype.indexOf === 'function') {
      if (dir) {
        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
      } else {
        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
      }
    }
    return arrayIndexOf(buffer, [ val ], byteOffset, encoding, dir)
  }

  throw new TypeError('val must be string, number or Buffer')
}

function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
  var indexSize = 1
  var arrLength = arr.length
  var valLength = val.length

  if (encoding !== undefined) {
    encoding = String(encoding).toLowerCase()
    if (encoding === 'ucs2' || encoding === 'ucs-2' ||
        encoding === 'utf16le' || encoding === 'utf-16le') {
      if (arr.length < 2 || val.length < 2) {
        return -1
      }
      indexSize = 2
      arrLength /= 2
      valLength /= 2
      byteOffset /= 2
    }
  }

  function read (buf, i) {
    if (indexSize === 1) {
      return buf[i]
    } else {
      return buf.readUInt16BE(i * indexSize)
    }
  }

  var i
  if (dir) {
    var foundIndex = -1
    for (i = byteOffset; i < arrLength; i++) {
      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
        if (foundIndex === -1) foundIndex = i
        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
      } else {
        if (foundIndex !== -1) i -= i - foundIndex
        foundIndex = -1
      }
    }
  } else {
    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength
    for (i = byteOffset; i >= 0; i--) {
      var found = true
      for (var j = 0; j < valLength; j++) {
        if (read(arr, i + j) !== read(val, j)) {
          found = false
          break
        }
      }
      if (found) return i
    }
  }

  return -1
}

Buffer.prototype.includes = function includes (val, byteOffset, encoding) {
  return this.indexOf(val, byteOffset, encoding) !== -1
}

Buffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
}

Buffer.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
}

function hexWrite (buf, string, offset, length) {
  offset = Number(offset) || 0
  var remaining = buf.length - offset
  if (!length) {
    length = remaining
  } else {
    length = Number(length)
    if (length > remaining) {
      length = remaining
    }
  }

  // must be an even number of digits
  var strLen = string.length
  if (strLen % 2 !== 0) throw new TypeError('Invalid hex string')

  if (length > strLen / 2) {
    length = strLen / 2
  }
  for (var i = 0; i < length; ++i) {
    var parsed = parseInt(string.substr(i * 2, 2), 16)
    if (isNaN(parsed)) return i
    buf[offset + i] = parsed
  }
  return i
}

function utf8Write (buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
}

function asciiWrite (buf, string, offset, length) {
  return blitBuffer(asciiToBytes(string), buf, offset, length)
}

function latin1Write (buf, string, offset, length) {
  return asciiWrite(buf, string, offset, length)
}

function base64Write (buf, string, offset, length) {
  return blitBuffer(base64ToBytes(string), buf, offset, length)
}

function ucs2Write (buf, string, offset, length) {
  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
}

Buffer.prototype.write = function write (string, offset, length, encoding) {
  // Buffer#write(string)
  if (offset === undefined) {
    encoding = 'utf8'
    length = this.length
    offset = 0
  // Buffer#write(string, encoding)
  } else if (length === undefined && typeof offset === 'string') {
    encoding = offset
    length = this.length
    offset = 0
  // Buffer#write(string, offset[, length][, encoding])
  } else if (isFinite(offset)) {
    offset = offset | 0
    if (isFinite(length)) {
      length = length | 0
      if (encoding === undefined) encoding = 'utf8'
    } else {
      encoding = length
      length = undefined
    }
  // legacy write(string, encoding, offset, length) - remove in v0.13
  } else {
    throw new Error(
      'Buffer.write(string, encoding, offset[, length]) is no longer supported'
    )
  }

  var remaining = this.length - offset
  if (length === undefined || length > remaining) length = remaining

  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
    throw new RangeError('Attempt to write outside buffer bounds')
  }

  if (!encoding) encoding = 'utf8'

  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'hex':
        return hexWrite(this, string, offset, length)

      case 'utf8':
      case 'utf-8':
        return utf8Write(this, string, offset, length)

      case 'ascii':
        return asciiWrite(this, string, offset, length)

      case 'latin1':
      case 'binary':
        return latin1Write(this, string, offset, length)

      case 'base64':
        // Warning: maxLength not taken into account in base64Write
        return base64Write(this, string, offset, length)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return ucs2Write(this, string, offset, length)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}

Buffer.prototype.toJSON = function toJSON () {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  }
}

function base64Slice (buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf)
  } else {
    return base64.fromByteArray(buf.slice(start, end))
  }
}

function utf8Slice (buf, start, end) {
  end = Math.min(buf.length, end)
  var res = []

  var i = start
  while (i < end) {
    var firstByte = buf[i]
    var codePoint = null
    var bytesPerSequence = (firstByte > 0xEF) ? 4
      : (firstByte > 0xDF) ? 3
      : (firstByte > 0xBF) ? 2
      : 1

    if (i + bytesPerSequence <= end) {
      var secondByte, thirdByte, fourthByte, tempCodePoint

      switch (bytesPerSequence) {
        case 1:
          if (firstByte < 0x80) {
            codePoint = firstByte
          }
          break
        case 2:
          secondByte = buf[i + 1]
          if ((secondByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)
            if (tempCodePoint > 0x7F) {
              codePoint = tempCodePoint
            }
          }
          break
        case 3:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)
            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
              codePoint = tempCodePoint
            }
          }
          break
        case 4:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          fourthByte = buf[i + 3]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)
            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
              codePoint = tempCodePoint
            }
          }
      }
    }

    if (codePoint === null) {
      // we did not generate a valid codePoint so insert a
      // replacement char (U+FFFD) and advance only 1 byte
      codePoint = 0xFFFD
      bytesPerSequence = 1
    } else if (codePoint > 0xFFFF) {
      // encode to utf16 (surrogate pair dance)
      codePoint -= 0x10000
      res.push(codePoint >>> 10 & 0x3FF | 0xD800)
      codePoint = 0xDC00 | codePoint & 0x3FF
    }

    res.push(codePoint)
    i += bytesPerSequence
  }

  return decodeCodePointsArray(res)
}

// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
var MAX_ARGUMENTS_LENGTH = 0x1000

function decodeCodePointsArray (codePoints) {
  var len = codePoints.length
  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
  }

  // Decode in chunks to avoid "call stack size exceeded".
  var res = ''
  var i = 0
  while (i < len) {
    res += String.fromCharCode.apply(
      String,
      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
    )
  }
  return res
}

function asciiSlice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i] & 0x7F)
  }
  return ret
}

function latin1Slice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i])
  }
  return ret
}

function hexSlice (buf, start, end) {
  var len = buf.length

  if (!start || start < 0) start = 0
  if (!end || end < 0 || end > len) end = len

  var out = ''
  for (var i = start; i < end; ++i) {
    out += toHex(buf[i])
  }
  return out
}

function utf16leSlice (buf, start, end) {
  var bytes = buf.slice(start, end)
  var res = ''
  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256)
  }
  return res
}

Buffer.prototype.slice = function slice (start, end) {
  var len = this.length
  start = ~~start
  end = end === undefined ? len : ~~end

  if (start < 0) {
    start += len
    if (start < 0) start = 0
  } else if (start > len) {
    start = len
  }

  if (end < 0) {
    end += len
    if (end < 0) end = 0
  } else if (end > len) {
    end = len
  }

  if (end < start) end = start

  var newBuf
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    newBuf = this.subarray(start, end)
    newBuf.__proto__ = Buffer.prototype
  } else {
    var sliceLen = end - start
    newBuf = new Buffer(sliceLen, undefined)
    for (var i = 0; i < sliceLen; ++i) {
      newBuf[i] = this[i + start]
    }
  }

  return newBuf
}

/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */
function checkOffset (offset, ext, length) {
  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
}

Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }

  return val
}

Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    checkOffset(offset, byteLength, this.length)
  }

  var val = this[offset + --byteLength]
  var mul = 1
  while (byteLength > 0 && (mul *= 0x100)) {
    val += this[offset + --byteLength] * mul
  }

  return val
}

Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  return this[offset]
}

Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return this[offset] | (this[offset + 1] << 8)
}

Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return (this[offset] << 8) | this[offset + 1]
}

Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return ((this[offset]) |
      (this[offset + 1] << 8) |
      (this[offset + 2] << 16)) +
      (this[offset + 3] * 0x1000000)
}

Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] * 0x1000000) +
    ((this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    this[offset + 3])
}

Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var i = byteLength
  var mul = 1
  var val = this[offset + --i]
  while (i > 0 && (mul *= 0x100)) {
    val += this[offset + --i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  if (!(this[offset] & 0x80)) return (this[offset])
  return ((0xff - this[offset] + 1) * -1)
}

Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset] | (this[offset + 1] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset + 1] | (this[offset] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset]) |
    (this[offset + 1] << 8) |
    (this[offset + 2] << 16) |
    (this[offset + 3] << 24)
}

Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] << 24) |
    (this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    (this[offset + 3])
}

Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, true, 23, 4)
}

Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, false, 23, 4)
}

Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, true, 52, 8)
}

Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, false, 52, 8)
}

function checkInt (buf, value, offset, ext, max, min) {
  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
}

Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var mul = 1
  var i = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var i = byteLength - 1
  var mul = 1
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  this[offset] = (value & 0xff)
  return offset + 1
}

function objectWriteUInt16 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
    buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
      (littleEndian ? i : 1 - i) * 8
  }
}

Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

function objectWriteUInt32 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffffffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
    buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff
  }
}

Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset + 3] = (value >>> 24)
    this[offset + 2] = (value >>> 16)
    this[offset + 1] = (value >>> 8)
    this[offset] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = 0
  var mul = 1
  var sub = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = byteLength - 1
  var mul = 1
  var sub = 0
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  if (value < 0) value = 0xff + value + 1
  this[offset] = (value & 0xff)
  return offset + 1
}

Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
    this[offset + 2] = (value >>> 16)
    this[offset + 3] = (value >>> 24)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (value < 0) value = 0xffffffff + value + 1
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

function checkIEEE754 (buf, value, offset, ext, max, min) {
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
  if (offset < 0) throw new RangeError('Index out of range')
}

function writeFloat (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
  }
  ieee754.write(buf, value, offset, littleEndian, 23, 4)
  return offset + 4
}

Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert)
}

Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert)
}

function writeDouble (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
  }
  ieee754.write(buf, value, offset, littleEndian, 52, 8)
  return offset + 8
}

Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert)
}

Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert)
}

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy (target, targetStart, start, end) {
  if (!start) start = 0
  if (!end && end !== 0) end = this.length
  if (targetStart >= target.length) targetStart = target.length
  if (!targetStart) targetStart = 0
  if (end > 0 && end < start) end = start

  // Copy 0 bytes; we're done
  if (end === start) return 0
  if (target.length === 0 || this.length === 0) return 0

  // Fatal error conditions
  if (targetStart < 0) {
    throw new RangeError('targetStart out of bounds')
  }
  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')
  if (end < 0) throw new RangeError('sourceEnd out of bounds')

  // Are we oob?
  if (end > this.length) end = this.length
  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start
  }

  var len = end - start
  var i

  if (this === target && start < targetStart && targetStart < end) {
    // descending copy from end
    for (i = len - 1; i >= 0; --i) {
      target[i + targetStart] = this[i + start]
    }
  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
    // ascending copy from start
    for (i = 0; i < len; ++i) {
      target[i + targetStart] = this[i + start]
    }
  } else {
    Uint8Array.prototype.set.call(
      target,
      this.subarray(start, start + len),
      targetStart
    )
  }

  return len
}

// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill (val, start, end, encoding) {
  // Handle string cases:
  if (typeof val === 'string') {
    if (typeof start === 'string') {
      encoding = start
      start = 0
      end = this.length
    } else if (typeof end === 'string') {
      encoding = end
      end = this.length
    }
    if (val.length === 1) {
      var code = val.charCodeAt(0)
      if (code < 256) {
        val = code
      }
    }
    if (encoding !== undefined && typeof encoding !== 'string') {
      throw new TypeError('encoding must be a string')
    }
    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
      throw new TypeError('Unknown encoding: ' + encoding)
    }
  } else if (typeof val === 'number') {
    val = val & 255
  }

  // Invalid ranges are not set to a default, so can range check early.
  if (start < 0 || this.length < start || this.length < end) {
    throw new RangeError('Out of range index')
  }

  if (end <= start) {
    return this
  }

  start = start >>> 0
  end = end === undefined ? this.length : end >>> 0

  if (!val) val = 0

  var i
  if (typeof val === 'number') {
    for (i = start; i < end; ++i) {
      this[i] = val
    }
  } else {
    var bytes = Buffer.isBuffer(val)
      ? val
      : utf8ToBytes(new Buffer(val, encoding).toString())
    var len = bytes.length
    for (i = 0; i < end - start; ++i) {
      this[i + start] = bytes[i % len]
    }
  }

  return this
}

// HELPER FUNCTIONS
// ================

var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g

function base64clean (str) {
  // Node strips out invalid characters like \n and \t from the string, base64-js does not
  str = stringtrim(str).replace(INVALID_BASE64_RE, '')
  // Node converts strings with length < 2 to ''
  if (str.length < 2) return ''
  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
  while (str.length % 4 !== 0) {
    str = str + '='
  }
  return str
}

function stringtrim (str) {
  if (str.trim) return str.trim()
  return str.replace(/^\s+|\s+$/g, '')
}

function toHex (n) {
  if (n < 16) return '0' + n.toString(16)
  return n.toString(16)
}

function utf8ToBytes (string, units) {
  units = units || Infinity
  var codePoint
  var length = string.length
  var leadSurrogate = null
  var bytes = []

  for (var i = 0; i < length; ++i) {
    codePoint = string.charCodeAt(i)

    // is surrogate component
    if (codePoint > 0xD7FF && codePoint < 0xE000) {
      // last char was a lead
      if (!leadSurrogate) {
        // no lead yet
        if (codePoint > 0xDBFF) {
          // unexpected trail
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        } else if (i + 1 === length) {
          // unpaired lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        }

        // valid lead
        leadSurrogate = codePoint

        continue
      }

      // 2 leads in a row
      if (codePoint < 0xDC00) {
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
        leadSurrogate = codePoint
        continue
      }

      // valid surrogate pair
      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
    } else if (leadSurrogate) {
      // valid bmp char, but last char was a lead
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
    }

    leadSurrogate = null

    // encode utf8
    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break
      bytes.push(codePoint)
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break
      bytes.push(
        codePoint >> 0x6 | 0xC0,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break
      bytes.push(
        codePoint >> 0xC | 0xE0,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x110000) {
      if ((units -= 4) < 0) break
      bytes.push(
        codePoint >> 0x12 | 0xF0,
        codePoint >> 0xC & 0x3F | 0x80,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else {
      throw new Error('Invalid code point')
    }
  }

  return bytes
}

function asciiToBytes (str) {
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF)
  }
  return byteArray
}

function utf16leToBytes (str, units) {
  var c, hi, lo
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    if ((units -= 2) < 0) break

    c = str.charCodeAt(i)
    hi = c >> 8
    lo = c % 256
    byteArray.push(lo)
    byteArray.push(hi)
  }

  return byteArray
}

function base64ToBytes (str) {
  return base64.toByteArray(base64clean(str))
}

function blitBuffer (src, dst, offset, length) {
  for (var i = 0; i < length; ++i) {
    if ((i + offset >= dst.length) || (i >= src.length)) break
    dst[i + offset] = src[i]
  }
  return i
}

function isnan (val) {
  return val !== val // eslint-disable-line no-self-compare
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(36)))

/***/ }),
/* 36 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(3);
module.exports = __webpack_require__(3);


/***/ })
/******/ ]);
});
//# sourceMappingURL=react-components-kit.js.map