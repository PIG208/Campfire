"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.request = void 0;
var ApiError_1 = require("./ApiError");
var OpenAPI_1 = require("./OpenAPI");
function isDefined(value) {
    return value !== undefined && value !== null;
}
function isString(value) {
    return typeof value === 'string';
}
function isStringWithValue(value) {
    return isString(value) && value !== '';
}
function isBlob(value) {
    return value instanceof Blob;
}
function getQueryString(params) {
    var qs = [];
    Object.keys(params).forEach(function (key) {
        var value = params[key];
        if (isDefined(value)) {
            if (Array.isArray(value)) {
                value.forEach(function (value) {
                    qs.push(encodeURIComponent(key) + "=" + encodeURIComponent(String(value)));
                });
            }
            else {
                qs.push(encodeURIComponent(key) + "=" + encodeURIComponent(String(value)));
            }
        }
    });
    if (qs.length > 0) {
        return "?" + qs.join('&');
    }
    return '';
}
function getUrl(options) {
    var path = options.path.replace(/[:]/g, '_');
    var url = "" + OpenAPI_1.OpenAPI.BASE + path;
    if (options.query) {
        return "" + url + getQueryString(options.query);
    }
    return url;
}
function getFormData(params) {
    var formData = new FormData();
    Object.keys(params).forEach(function (key) {
        var value = params[key];
        if (isDefined(value)) {
            formData.append(key, value);
        }
    });
    return formData;
}
function resolve(options, resolver) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            if (typeof resolver === 'function') {
                return [2, resolver(options)];
            }
            return [2, resolver];
        });
    });
}
function getHeaders(options) {
    return __awaiter(this, void 0, void 0, function () {
        var token, username, password, defaultHeaders, headers, credentials;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, resolve(options, OpenAPI_1.OpenAPI.TOKEN)];
                case 1:
                    token = _a.sent();
                    return [4, resolve(options, OpenAPI_1.OpenAPI.USERNAME)];
                case 2:
                    username = _a.sent();
                    return [4, resolve(options, OpenAPI_1.OpenAPI.PASSWORD)];
                case 3:
                    password = _a.sent();
                    return [4, resolve(options, OpenAPI_1.OpenAPI.HEADERS)];
                case 4:
                    defaultHeaders = _a.sent();
                    headers = new Headers(__assign(__assign({ Accept: 'application/json' }, defaultHeaders), options.headers));
                    if (isStringWithValue(token)) {
                        headers.append('Authorization', "Bearer " + token);
                    }
                    if (isStringWithValue(username) && isStringWithValue(password)) {
                        credentials = btoa(username + ":" + password);
                        headers.append('Authorization', "Basic " + credentials);
                    }
                    if (options.body) {
                        if (isBlob(options.body)) {
                            headers.append('Content-Type', options.body.type || 'application/octet-stream');
                        }
                        else if (isString(options.body)) {
                            headers.append('Content-Type', 'text/plain');
                        }
                        else {
                            headers.append('Content-Type', 'application/json');
                        }
                    }
                    return [2, headers];
            }
        });
    });
}
function getRequestBody(options) {
    if (options.formData) {
        return getFormData(options.formData);
    }
    if (options.body) {
        if (isString(options.body) || isBlob(options.body)) {
            return options.body;
        }
        else {
            return JSON.stringify(options.body);
        }
    }
    return undefined;
}
function sendRequest(options, url) {
    return __awaiter(this, void 0, void 0, function () {
        var request;
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _a = {
                        method: options.method
                    };
                    return [4, getHeaders(options)];
                case 1:
                    request = (_a.headers = _b.sent(),
                        _a.body = getRequestBody(options),
                        _a);
                    if (OpenAPI_1.OpenAPI.WITH_CREDENTIALS) {
                        request.credentials = 'include';
                    }
                    return [4, fetch(url, request)];
                case 2: return [2, _b.sent()];
            }
        });
    });
}
function getResponseHeader(response, responseHeader) {
    if (responseHeader) {
        var content = response.headers.get(responseHeader);
        if (isString(content)) {
            return content;
        }
    }
    return null;
}
function getResponseBody(response) {
    return __awaiter(this, void 0, void 0, function () {
        var contentType, isJSON, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 5, , 6]);
                    contentType = response.headers.get('Content-Type');
                    if (!contentType) return [3, 4];
                    isJSON = contentType.toLowerCase().startsWith('application/json');
                    if (!isJSON) return [3, 2];
                    return [4, response.json()];
                case 1: return [2, _a.sent()];
                case 2: return [4, response.text()];
                case 3: return [2, _a.sent()];
                case 4: return [3, 6];
                case 5:
                    error_1 = _a.sent();
                    console.error(error_1);
                    return [3, 6];
                case 6: return [2, null];
            }
        });
    });
}
function catchErrors(options, result) {
    var errors = __assign({ 400: 'Bad Request', 401: 'Unauthorized', 403: 'Forbidden', 404: 'Not Found', 500: 'Internal Server Error', 502: 'Bad Gateway', 503: 'Service Unavailable' }, options.errors);
    var error = errors[result.status];
    if (error) {
        throw new ApiError_1.ApiError(result, error);
    }
    if (!result.ok) {
        throw new ApiError_1.ApiError(result, 'Generic Error');
    }
}
function request(options) {
    return __awaiter(this, void 0, void 0, function () {
        var url, response, responseBody, responseHeader, result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    url = getUrl(options);
                    return [4, sendRequest(options, url)];
                case 1:
                    response = _a.sent();
                    return [4, getResponseBody(response)];
                case 2:
                    responseBody = _a.sent();
                    responseHeader = getResponseHeader(response, options.responseHeader);
                    result = {
                        url: url,
                        ok: response.ok,
                        status: response.status,
                        statusText: response.statusText,
                        body: responseHeader || responseBody,
                    };
                    catchErrors(options, result);
                    return [2, result];
            }
        });
    });
}
exports.request = request;
//# sourceMappingURL=request.js.map