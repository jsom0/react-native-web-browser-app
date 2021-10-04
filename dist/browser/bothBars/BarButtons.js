import * as React from "react";
import { Text, TouchableOpacity } from "react-native";
import { ToolbarButton } from "./ToolbarButton";
import { goBackOnWebView, goForwardOnWebView, reloadWebView, stopWebView } from "../../store/navigationState";
import { connect } from "react-redux";
class BackButton extends React.Component {
    onTap = () => {
        this.props.goBackOnWebView();
    };
    render() {
        const { canGoBack, ...rest } = this.props;
        return (React.createElement(ToolbarButton, { ...rest, enabled: canGoBack, onTap: this.onTap, name: "chevron-left" }));
    }
}
export const BackButtonConnected = connect((wholeStoreState) => {
    // May support pop-out history in future.
    return {
        canGoBack: wholeStoreState.navigation.tabs[wholeStoreState.navigation.activeTab].canGoBack,
    };
}, {
    goBackOnWebView,
})(BackButton);
class ForwardButton extends React.Component {
    onTap = () => {
        this.props.goForwardOnWebView();
    };
    render() {
        const { canGoForward, ...rest } = this.props;
        return (React.createElement(ToolbarButton, { ...rest, enabled: canGoForward, onTap: this.onTap, name: "chevron-right" }));
    }
}
export const ForwardButtonConnected = connect((wholeStoreState) => {
    // May support pop-out history in future.
    return {
        canGoForward: wholeStoreState.navigation.tabs[wholeStoreState.navigation.activeTab].canGoForward,
    };
}, {
    goForwardOnWebView,
})(ForwardButton);
class StopReloadButton extends React.Component {
    onTap = () => {
        if (this.props.loading) {
            this.props.stopWebView();
        }
        else {
            this.props.reloadWebView();
        }
    };
    render() {
        const { loading, ...rest } = this.props;
        return (React.createElement(ToolbarButton, { ...rest, onTap: this.onTap, name: loading ?
                // Stop (cross symbol)
                "times" :
                // Reload (redo symbol)
                "redo" }));
    }
}
export const StopReloadButtonConnected = connect((wholeStoreState) => {
    const { activeTab, tabs } = wholeStoreState.navigation;
    // console.log(`[StopReloadButtonConnected] wholeStoreState.navigation`, wholeStoreState.navigation);
    return {
        loading: tabs[activeTab].loadProgress !== 1,
    };
}, {
    reloadWebView,
    stopWebView,
})(StopReloadButton);
// From TabToolbar
/**
 * Menu refers to the app menu, not a page-specific menu.
 */
class MenuButton extends React.Component {
    render() {
        const { ...rest } = this.props;
        return (React.createElement(ToolbarButton, { ...rest, name: "ellipsis-v" }));
    }
}
export const MenuButtonConnected = connect((wholeStoreState) => {
    return {};
}, {
// TODO
})(MenuButton);
class SearchButton extends React.Component {
    render() {
        const { ...rest } = this.props;
        return (React.createElement(ToolbarButton, { ...rest, name: "search" }));
    }
}
export const SearchButtonConnected = connect((wholeStoreState) => {
    return {};
}, {
// TODO
})(SearchButton);
// https://github.com/cliqz/user-agent-ios/blob/7a91b5ea3e2fbb8b95dadd4f0cfd71b334e73449/Client/Frontend/Browser/TabToolbar.swift#L146
class TabsButton extends React.Component {
    render() {
        const { ...rest } = this.props;
        return (React.createElement(ToolbarButton, { ...rest, name: "th-large" }));
    }
}
export const TabsButtonConnected = connect((wholeStoreState) => {
    return {};
}, {
// TODO
})(TabsButton);
// https://github.com/cliqz/user-agent-ios/blob/develop/Client/Frontend/Browser/URLBarView.swift#L136
class CancelButton extends React.Component {
    render() {
        const { ...rest } = this.props;
        return (React.createElement(TouchableOpacity, { ...rest },
            React.createElement(Text, null, "Cancel")));
    }
}
export const CancelButtonConnected = connect((wholeStoreState) => {
    return {};
}, {
// TODO
})(CancelButton);
//# sourceMappingURL=BarButtons.js.map