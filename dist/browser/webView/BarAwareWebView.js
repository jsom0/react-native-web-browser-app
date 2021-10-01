import * as React from "react";
import { connect } from "react-redux";
import { webViews, updateUrlBarText, setProgressOnWebView, updateWebViewNavigationState } from "../../store/navigationState";
import { Platform } from "react-native";
import { WebView } from 'react-native-webview';
import Animated from "react-native-reanimated";
import { DEFAULT_HEADER_RETRACTED_HEIGHT, DEFAULT_HEADER_REVEALED_HEIGHT } from "../header/TabLocationView";
const IosWebView = WebView;
const AnimatedIosWebView = Animated.createAnimatedComponent(IosWebView);
export const DefaultBarAwareWebView = (props) => React.createElement(BarAwareWebViewConnected, { ...props });
export class BarAwareWebView extends React.Component {
    onLoadStarted = (event) => {
        const { url, navigationType, canGoBack, canGoForward } = event.nativeEvent;
        console.log(`[WebView onLoadStarted] url ${url} navigationType ${navigationType}`);
        // TODO: handle errors
        this.props.updateWebViewNavigationState({ canGoBack, canGoForward, tab: this.props.activeTab });
    };
    onLoadCommitted = (event) => {
        const { url, navigationType, canGoBack, canGoForward } = event.nativeEvent;
        console.log(`[WebView onLoadCommitted] url ${url} navigationType ${navigationType}`);
        if (Platform.OS === "ios" || Platform.OS === "macos") {
            /* iOS seems to fire loading events on the non-main frame, so onLoadCommitted event is the best one on which to update the main-frame URL.
             * This event doesn't exist on Android to my knowledge, so I haven't hooked it up in BetterWebView. */
            this.props.updateUrlBarText({ text: url, fromNavigationEvent: true });
        }
        this.props.updateWebViewNavigationState({ canGoBack, canGoForward, tab: this.props.activeTab });
    };
    onLoadFinished = (event) => {
        const { url, navigationType, canGoBack, canGoForward } = event.nativeEvent;
        console.log(`[WebView onLoadFinished] url ${url} navigationType ${navigationType}`);
        // TODO: handle errors
        if (Platform.OS === "android") {
            /* TODO: check whether Android fires onLoadFinished at sensible moments for updating the URL bar text. */
            this.props.updateUrlBarText({ text: url, fromNavigationEvent: true });
        }
        this.props.updateWebViewNavigationState({ canGoBack, canGoForward, tab: this.props.activeTab });
    };
    onProgress = (event) => {
        const { url, progress, canGoBack, canGoForward } = event.nativeEvent;
        console.log(`[WebView onLoadProgress] progress ${progress}`);
        this.props.setProgressOnWebView({ progress, tab: this.props.activeTab });
        this.props.updateWebViewNavigationState({ canGoBack, canGoForward, tab: this.props.activeTab });
    };
    // const MyWebView = ({ children, ...rest }) => React.createElement(WebView, props, children);
    render() {
        const { headerConfig, activeTab, tabs, style, children, ...rest } = this.props;
        const { HEADER_RETRACTED_HEIGHT = DEFAULT_HEADER_RETRACTED_HEIGHT, HEADER_REVEALED_HEIGHT = DEFAULT_HEADER_REVEALED_HEIGHT, } = headerConfig;
        const HEADER_RETRACTION_DISTANCE = HEADER_REVEALED_HEIGHT - HEADER_RETRACTED_HEIGHT;
        return (React.createElement(AnimatedIosWebView, { source: {
                uri: tabs[activeTab].url,
            }, 
            // TODO: will have to solve how best to build one webView for each tab, give it a unique ref, and allow animation between tabs.
            ref: webViews.get(activeTab), onScroll: Animated.event([
                {
                    nativeEvent: {
                        panGestureTranslationInWebView: {
                            // y: this.props.scrollY,
                            y: (y) => {
                                return Animated.block([
                                    Animated.cond(
                                    /* We won't update scrollY if there was no panGesture movement.
                                        * This is necessary because onScroll is called without gestures
                                        * sometimes, e.g. due to autolayout when first initialising. */
                                    Animated.neq(y, 0), 
                                    /* We always receive a gesture relative to 0.
                                    * e.g. when panning down (scrolling up): +3, 9, 12, 20.
                                    * It needs to be added to the current this.props.scrollY to make sense. */
                                    Animated.set(this.props.scrollY, Animated.max(-HEADER_RETRACTION_DISTANCE, Animated.min(HEADER_RETRACTION_DISTANCE, Animated.add(this.props.scrollY, y))))),
                                    Animated.call([y], (r) => {
                                        // console.log(`Reanimated got arg`, r[0]);
                                    })
                                ]);
                            }
                        }
                    }
                }
            ], {
                useNativeDriver: true
            }), onScrollEndDrag: Animated.event([
                {
                    nativeEvent: {
                        velocity: {
                            y: this.props.scrollEndDragVelocity
                        }
                    }
                }
            ], {
                useNativeDriver: true
            }), onLoadStart: this.onLoadStarted, onLoadCommit: this.onLoadCommitted, onLoadEnd: this.onLoadFinished, onLoadProgress: this.onProgress }));
    }
}
export const BarAwareWebViewConnected = connect((wholeStoreState) => {
    // console.log(`wholeStoreState`, wholeStoreState);
    return {
        activeTab: wholeStoreState.navigation.activeTab,
        tabs: wholeStoreState.navigation.tabs,
    };
}, {
    updateUrlBarText,
    setProgressOnWebView,
    updateWebViewNavigationState,
})(BarAwareWebView);
//# sourceMappingURL=BarAwareWebView.js.map