import * as React from "react";
import { StyleSheet, View } from "react-native";
// https://github.com/cliqz/user-agent-ios/blob/develop/Client/Frontend/Browser/BrowserViewController.swift#L110
export class WebViewBackdrop extends React.Component {
    render() {
        const { style, children, ...rest } = this.props;
        return (
        // UIView()
        React.createElement(View, { style: StyleSheet.compose({
                flexDirection: "column",
                width: "100%",
                height: "100%",
            }, style), ...rest }));
    }
}
//# sourceMappingURL=WebViewBackdrop.js.map