import * as React from "react";
import { View } from "react-native";
import { AutocompleteTextField } from "../../browser/header/AutocompleteTextField";
import { BackButtonConnected, CancelButtonConnected, ForwardButtonConnected, MenuButtonConnected, StopReloadButtonConnected, TabsButtonConnected } from "../bothBars/BarButtons";
import { TabLocationViewConnected } from "./TabLocationView";
// https://github.com/cliqz/user-agent-ios/blob/develop/Client/Frontend/Browser/URLBarView.swift#L786
class ToolbarTextField extends React.Component {
    // Just a themeable AutocompleteTextField
    render() {
        return (React.createElement(AutocompleteTextField, null));
    }
}
// We need a subclass so we can setup the shadows correctly
// This subclass creates a strong shadow on the URLBar
class TabLocationContainerView extends React.Component {
    render() {
        return (React.createElement(View, null));
    }
}
// https://github.com/cliqz/user-agent-ios/blob/develop/Client/Frontend/Browser/URLBarView.swift#L108
class LocationContainer extends React.Component {
    render() {
        return (React.createElement(TabLocationContainerView, null));
    }
}
export const URL_BAR_VIEW_PADDING_VERTICAL = 8;
export class URLBarView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            location: "https://www.birchlabs.co.uk",
        };
    }
    render() {
        const { config, toolbarIsShowing, inOverlayMode } = this.props;
        const { buttonEnabledColor, buttonDisabledColor } = config;
        const {} = this.state;
        let stackContents;
        if (inOverlayMode) {
            // i.e. URL bar's text field has been focused and the browser displays an overlay over the webpage.
            stackContents = (React.createElement(React.Fragment, null,
                React.createElement(ToolbarTextField, null),
                React.createElement(CancelButtonConnected, null)));
        }
        else if (toolbarIsShowing) {
            // i.e. landscape (so show all the items that the footer would normally handle)
            stackContents = (React.createElement(React.Fragment, null,
                React.createElement(BackButtonConnected, { enabledColor: buttonEnabledColor, disabledColor: buttonDisabledColor }),
                React.createElement(ForwardButtonConnected, { enabledColor: buttonEnabledColor, disabledColor: buttonDisabledColor }),
                React.createElement(StopReloadButtonConnected, { enabledColor: buttonEnabledColor, disabledColor: buttonDisabledColor }),
                React.createElement(TabLocationViewConnected, { config: config, scrollY: this.props.scrollY, animatedTitleOpacity: this.props.animatedTitleOpacity, animatedNavBarTranslateYLandscape: this.props.animatedNavBarTranslateYLandscape, animatedNavBarTranslateYPortrait: this.props.animatedNavBarTranslateYPortait }),
                React.createElement(TabsButtonConnected, { enabledColor: buttonEnabledColor, disabledColor: buttonDisabledColor }),
                React.createElement(MenuButtonConnected, { enabledColor: buttonEnabledColor, disabledColor: buttonDisabledColor })));
        }
        else {
            // i.e. portrait (so hide all the items that the footer will be handling)
            stackContents = (React.createElement(React.Fragment, null,
                React.createElement(TabLocationViewConnected, { config: config, scrollY: this.props.scrollY, animatedTitleOpacity: this.props.animatedTitleOpacity, animatedNavBarTranslateYLandscape: this.props.animatedNavBarTranslateYLandscape, animatedNavBarTranslateYPortrait: this.props.animatedNavBarTranslateYPortait })));
        }
        return (React.createElement(View, { style: {
                flexDirection: "row",
                justifyContent: "space-around",
                alignItems: "center",
                height: "auto",
                width: "100%",
                paddingVertical: URL_BAR_VIEW_PADDING_VERTICAL,
                // backgroundColor: "green",
            } }, stackContents));
    }
}
//# sourceMappingURL=URLBarView.js.map