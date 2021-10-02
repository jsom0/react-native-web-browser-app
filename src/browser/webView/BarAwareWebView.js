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
exports.BarAwareWebViewConnected = exports.BarAwareWebView = exports.DefaultBarAwareWebView = void 0;
var React = require("react");
var react_redux_1 = require("react-redux");
var navigationState_1 = require("../../store/navigationState");
var react_native_1 = require("react-native");
var react_native_webview_1 = require("react-native-webview");
var react_native_reanimated_1 = require("react-native-reanimated");
var TabLocationView_1 = require("../header/TabLocationView");
var IosWebView = react_native_webview_1.WebView;
var AnimatedIosWebView = react_native_reanimated_1["default"].createAnimatedComponent(IosWebView);
var DefaultBarAwareWebView = function (props) { return <exports.BarAwareWebViewConnected {...props}/>; };
exports.DefaultBarAwareWebView = DefaultBarAwareWebView;
var BarAwareWebView = /** @class */ (function (_super) {
    __extends(BarAwareWebView, _super);
    function BarAwareWebView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.onLoadStarted = function (event) {
            var _a = event.nativeEvent, url = _a.url, navigationType = _a.navigationType, canGoBack = _a.canGoBack, canGoForward = _a.canGoForward;
            console.log("[WebView onLoadStarted] url " + url + " navigationType " + navigationType);
            // TODO: handle errors
            _this.props.updateWebViewNavigationState({ canGoBack: canGoBack, canGoForward: canGoForward, tab: _this.props.activeTab });
        };
        _this.onLoadCommitted = function (event) {
            var _a = event.nativeEvent, url = _a.url, navigationType = _a.navigationType, canGoBack = _a.canGoBack, canGoForward = _a.canGoForward;
            console.log("[WebView onLoadCommitted] url " + url + " navigationType " + navigationType);
            if (react_native_1.Platform.OS === "ios" || react_native_1.Platform.OS === "macos") {
                /* iOS seems to fire loading events on the non-main frame, so onLoadCommitted event is the best one on which to update the main-frame URL.
                 * This event doesn't exist on Android to my knowledge, so I haven't hooked it up in BetterWebView. */
                _this.props.updateUrlBarText({ text: url, fromNavigationEvent: true });
            }
            _this.props.updateWebViewNavigationState({ canGoBack: canGoBack, canGoForward: canGoForward, tab: _this.props.activeTab });
        };
        _this.onLoadFinished = function (event) {
            var _a = event.nativeEvent, url = _a.url, navigationType = _a.navigationType, canGoBack = _a.canGoBack, canGoForward = _a.canGoForward;
            console.log("[WebView onLoadFinished] url " + url + " navigationType " + navigationType);
            // TODO: handle errors
            if (react_native_1.Platform.OS === "android") {
                /* TODO: check whether Android fires onLoadFinished at sensible moments for updating the URL bar text. */
                _this.props.updateUrlBarText({ text: url, fromNavigationEvent: true });
            }
            _this.props.updateWebViewNavigationState({ canGoBack: canGoBack, canGoForward: canGoForward, tab: _this.props.activeTab });
        };
        _this.onProgress = function (event) {
            var _a = event.nativeEvent, url = _a.url, progress = _a.progress, canGoBack = _a.canGoBack, canGoForward = _a.canGoForward;
            console.log("[WebView onLoadProgress] progress " + progress);
            _this.props.setProgressOnWebView({ progress: progress, tab: _this.props.activeTab });
            _this.props.updateWebViewNavigationState({ canGoBack: canGoBack, canGoForward: canGoForward, tab: _this.props.activeTab });
        };
        return _this;
    }
    // const MyWebView = ({ children, ...rest }) => React.createElement(WebView, props, children);
    BarAwareWebView.prototype.render = function () {
        var _this = this;
        var _a = this.props, headerConfig = _a.headerConfig, activeTab = _a.activeTab, tabs = _a.tabs, style = _a.style, children = _a.children, rest = __rest(_a, ["headerConfig", "activeTab", "tabs", "style", "children"]);
        var _b = headerConfig.HEADER_RETRACTED_HEIGHT, HEADER_RETRACTED_HEIGHT = _b === void 0 ? TabLocationView_1.DEFAULT_HEADER_RETRACTED_HEIGHT : _b, _c = headerConfig.HEADER_REVEALED_HEIGHT, HEADER_REVEALED_HEIGHT = _c === void 0 ? TabLocationView_1.DEFAULT_HEADER_REVEALED_HEIGHT : _c;
        var HEADER_RETRACTION_DISTANCE = HEADER_REVEALED_HEIGHT - HEADER_RETRACTED_HEIGHT;
        return (<AnimatedIosWebView source={{
                uri: tabs[activeTab].url
            }} 
        // TODO: will have to solve how best to build one webView for each tab, give it a unique ref, and allow animation between tabs.
        ref={navigationState_1.webViews.get(activeTab)} onScroll={react_native_reanimated_1["default"].event([
                {
                    nativeEvent: {
                        panGestureTranslationInWebView: {
                            // y: this.props.scrollY,
                            y: function (y) {
                                return react_native_reanimated_1["default"].block([
                                    react_native_reanimated_1["default"].cond(
                                    /* We won't update scrollY if there was no panGesture movement.
                                        * This is necessary because onScroll is called without gestures
                                        * sometimes, e.g. due to autolayout when first initialising. */
                                    react_native_reanimated_1["default"].neq(y, 0), 
                                    /* We always receive a gesture relative to 0.
                                    * e.g. when panning down (scrolling up): +3, 9, 12, 20.
                                    * It needs to be added to the current this.props.scrollY to make sense. */
                                    react_native_reanimated_1["default"].set(_this.props.scrollY, react_native_reanimated_1["default"].max(-HEADER_RETRACTION_DISTANCE, react_native_reanimated_1["default"].min(HEADER_RETRACTION_DISTANCE, react_native_reanimated_1["default"].add(_this.props.scrollY, y))))),
                                    react_native_reanimated_1["default"].call([y], function (r) {
                                        // console.log(`Reanimated got arg`, r[0]);
                                    })
                                ]);
                            }
                        }
                    }
                }
            ], {
                useNativeDriver: true
            })} onScrollEndDrag={react_native_reanimated_1["default"].event([
                {
                    nativeEvent: {
                        velocity: {
                            y: this.props.scrollEndDragVelocity
                        }
                    }
                }
            ], {
                useNativeDriver: true
            })} onLoadStart={this.onLoadStarted} onLoadCommit={this.onLoadCommitted} onLoadEnd={this.onLoadFinished} onLoadProgress={this.onProgress}/>);
    };
    return BarAwareWebView;
}(React.Component));
exports.BarAwareWebView = BarAwareWebView;
exports.BarAwareWebViewConnected = (0, react_redux_1.connect)(function (wholeStoreState) {
    // console.log(`wholeStoreState`, wholeStoreState);
    return {
        activeTab: wholeStoreState.navigation.activeTab,
        tabs: wholeStoreState.navigation.tabs
    };
}, {
    updateUrlBarText: navigationState_1.updateUrlBarText,
    setProgressOnWebView: navigationState_1.setProgressOnWebView,
    updateWebViewNavigationState: navigationState_1.updateWebViewNavigationState
})(BarAwareWebView);
