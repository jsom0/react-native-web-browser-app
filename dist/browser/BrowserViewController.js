import * as React from "react";
import { Dimensions, View } from "react-native";
import Animated from "react-native-reanimated";
import { connect } from "react-redux";
import { defaultConfig } from "./browserConfig";
import { isPortrait, updateOrientation } from "../store/uiState";
import { DRAG_END_INITIAL } from "./bothBars/barSpring";
import { FooterConnected } from "./footer/Footer";
import { RetractibleHeaderConnected } from "./header/RetractibleHeader";
import { DEFAULT_HEADER_RETRACTED_HEIGHT, DEFAULT_HEADER_REVEALED_HEIGHT } from "./header/TabLocationView";
import { DefaultBarAwareWebView } from "./webView/BarAwareWebView";
import { WebViewBackdrop } from "./webView/WebViewBackdrop";
const BrowserViewControllerUX = {
    ShowHeaderTapAreaHeight: 0,
    BookmarkStarAnimationDuration: 0.5,
    BookmarkStarAnimationOffset: 80,
};
export class BrowserViewController extends React.Component {
    scrollY;
    scrollEndDragVelocity = new Animated.Value(DRAG_END_INITIAL);
    constructor(props) {
        super(props);
        const { config = defaultConfig, } = props;
        const { HEADER_RETRACTED_HEIGHT = DEFAULT_HEADER_RETRACTED_HEIGHT, HEADER_REVEALED_HEIGHT = DEFAULT_HEADER_REVEALED_HEIGHT, } = config.header;
        const HEADER_RETRACTION_DISTANCE = HEADER_REVEALED_HEIGHT - HEADER_RETRACTED_HEIGHT;
        this.scrollY = new Animated.Value(HEADER_RETRACTION_DISTANCE);
    }
    onOrientationChange = () => {
        this.props.updateOrientation(isPortrait() ? 'portrait' : 'landscape');
    };
    componentDidMount() {
        Dimensions.addEventListener('change', this.onOrientationChange);
    }
    componentWillUnmount() {
        Dimensions.removeEventListener('change', this.onOrientationChange);
    }
    render() {
        const { config = defaultConfig } = this.props;
        const { barAwareWebView = DefaultBarAwareWebView } = config;
        // Visibility of certain components changes when switching app (if in private browsing mode)
        // https://github.com/cliqz/user-agent-ios/blob/develop/Client/Frontend/Browser/BrowserViewController.swift#L343
        return (React.createElement(View
        // stretchLastChild={true}
        , { 
            // stretchLastChild={true}
            style: {
                flex: 1,
                flexDirection: "column",
                width: "100%",
                height: "100%",
            } },
            React.createElement(RetractibleHeaderConnected, { config: config.header, scrollY: this.scrollY }),
            React.createElement(View, { style: {
                    flex: 1,
                    width: "100%",
                    height: "100%",
                    flexGrow: 1,
                    alignItems: "center",
                    backgroundColor: "green",
                    flexDirection: "column",
                } },
                React.createElement(View, { style: {
                        flex: 1,
                        flexDirection: "column",
                        width: "100%",
                    } },
                    React.createElement(WebViewBackdrop, { style: {
                            backgroundColor: "gold",
                            position: "absolute",
                        } }),
                    barAwareWebView({
                        headerConfig: config.header,
                        scrollY: this.scrollY,
                        scrollEndDragVelocity: this.scrollEndDragVelocity,
                    })),
                React.createElement(FooterConnected, { config: config.footer, scrollY: this.scrollY, showToolbar: true }))));
    }
}
export const BrowserViewControllerConnected = connect((wholeStoreState) => {
    // console.log(`wholeStoreState`, wholeStoreState);
    return {};
}, {
    updateOrientation: updateOrientation
})(BrowserViewController);
//# sourceMappingURL=BrowserViewController.js.map