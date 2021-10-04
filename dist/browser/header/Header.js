import * as React from "react";
import { StyleSheet, View } from "react-native";
import { TopTabsViewController } from "./TopTabsContainer";
import { URLBarView } from "./URLBarView";
class TopTabsContainer extends React.Component {
    render() {
        return (<View style={{ flexDirection: 'column' }}>
                <TopTabsViewController />
            </View>);
    }
}
export const defaultHeader = (props) => <Header {...props}/>;
// https://github.com/cliqz/user-agent-ios/blob/develop/Client/Frontend/Browser/BrowserViewController.swift#L105
// Header used to have a subchild, "UrlBarTopTabsContainer", but that has now been flattened.
export class Header extends React.Component {
    render() {
        const { config, toolbarIsShowing, inOverlayMode, style, children, ...rest } = this.props;
        return (<View style={StyleSheet.compose({
                flexDirection: 'column',
                justifyContent: "flex-start",
                marginHorizontal: 4,
                // flex: 1,
                // backgroundColor: "orange",
            }, style)} {...rest}>
                {/* urlBar */}
                <URLBarView config={config} scrollY={this.props.scrollY} animatedTitleOpacity={this.props.animatedTitleOpacity} animatedNavBarTranslateYLandscape={this.props.animatedNavBarTranslateYLandscape} animatedNavBarTranslateYPortait={this.props.animatedNavBarTranslateYPortrait} inOverlayMode={inOverlayMode} toolbarIsShowing={toolbarIsShowing}/>
                {/* topTabsContainer */}
                <TopTabsContainer />
            </View>);
    }
}
//# sourceMappingURL=Header.js.map