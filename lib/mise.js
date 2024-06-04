"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.root = exports.device = exports.userAgent = void 0;
var mobile_detect_1 = __importDefault(require("mobile-detect"));
var userAgent = function () {
    var ua = navigator.userAgent || navigator.vendor || window.opera;
    return ua.indexOf('FBAN') > -1 || ua.indexOf('FBAV') > -1;
};
exports.userAgent = userAgent;
var device = function () {
    var m = new mobile_detect_1.default(window.navigator.userAgent);
    if (m.tablet())
        return 'mobile';
    else if (m.mobile())
        return 'mobile';
    else
        return 'desktop';
};
exports.device = device;
var root = function () {
    var u = window.location.origin + window.location.pathname;
    if (u.indexOf('.') > 0) {
        var p = u.split('/');
        p.pop();
        var f = p.splice(0, 2)[0];
        return "".concat(f, "//").concat(p.join('/'), "/");
    }
    return u;
};
exports.root = root;
