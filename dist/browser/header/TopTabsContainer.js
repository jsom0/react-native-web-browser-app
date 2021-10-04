import * as React from "react";
import { View } from "react-native";
// https://github.com/cliqz/user-agent-ios/blob/develop/Client/Frontend/Browser/TopTabsViewController.swift
// Just a stub for now.
export class TopTabsViewController extends React.Component {
    render() {
        return (
        // UIViewController().view
        React.createElement(View, null));
    }
}
// https://github.com/cliqz/user-agent-ios/blob/develop/Client/Frontend/Browser/BrowserViewController.swift#L128
export class TopTabsContainer extends React.Component {
    render() {
        return (
        // UIView()
        React.createElement(View, { style: { flexDirection: "column" } },
            React.createElement(TopTabsViewController, null)));
    }
}
//# sourceMappingURL=TopTabsContainer.js.map