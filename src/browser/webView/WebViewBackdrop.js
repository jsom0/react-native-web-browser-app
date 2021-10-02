"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
exports.__esModule = true;
exports.WebViewBackdrop = void 0;
var React = require("react");
var react_native_1 = require("react-native");
// https://github.com/cliqz/user-agent-ios/blob/develop/Client/Frontend/Browser/BrowserViewController.swift#L110
var WebViewBackdrop = /** @class */ (function (_super) {
    __extends(WebViewBackdrop, _super);
    function WebViewBackdrop() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WebViewBackdrop.prototype.render = function () {
        var _a = this.props, style = _a.style, children = _a.children, rest = __rest(_a, ["style", "children"]);
        return (
        // UIView()
        <react_native_1.View style={react_native_1.StyleSheet.compose({
                flexDirection: "column",
                width: "100%",
                height: "100%"
            }, style)} 
        // opacity={0.5}
        // backgroundColor={"purple"}
        {...rest}/>);
    };
    return WebViewBackdrop;
}(React.Component));
exports.WebViewBackdrop = WebViewBackdrop;
