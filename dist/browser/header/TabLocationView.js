import * as React from "react";
import { TextInput, View, StyleSheet } from "react-native";
import { ToolbarButton } from "../bothBars/ToolbarButton";
import { PrivacyIndicatorView } from "../../browser/header/PrivacyIndicatorView";
import { connect } from 'react-redux';
import { updateUrlBarText, submitUrlBarTextToWebView } from "../../store/navigationState";
import Animated from "react-native-reanimated";
import { RetractionStyle } from "../bothBars/BarConfig";
const TabLocationViewUX = {
    Spacing: 8,
    PlaceholderLefPadding: 12,
    StatusIconSize: 18,
    TPIconSize: 24,
    ButtonSize: 44,
    URLBarPadding: 4,
};
// https://github.com/cliqz/user-agent-ios/blob/develop/Client/Frontend/Browser/TabLocationView.swift#L83
class LockImageView extends React.Component {
    render() {
        const { locked, ...rest } = this.props;
        return (
        // <$Image/>
        React.createElement(ToolbarButton, { name: locked ? "lock" : "lock-open", ...rest }));
    }
}
class ClearUrlBarTextButton extends React.Component {
    onClearButtonPress = () => {
        this.props.updateUrlBarText({ text: "", fromNavigationEvent: false });
    };
    render() {
        const { urlBarText, light, brand, ...rest } = this.props;
        return (React.createElement(ToolbarButton, { onPress: this.onClearButtonPress, name: "times-circle", solid: true, ...rest }));
    }
}
const ClearUrlBarTextButtonConnected = connect((wholeStoreState) => {
    // console.log(`wholeStoreState`, wholeStoreState);
    const { urlBarText } = wholeStoreState.navigation;
    return {
        urlBarText,
    };
}, {
    updateUrlBarText,
})(ClearUrlBarTextButton);
// https://github.com/cliqz/user-agent-ios/blob/develop/Client/Frontend/Browser/TabLocationView.swift#L319
class DisplayTextField extends React.Component {
    onChangeText = (text) => {
        this.props.updateUrlBarText({ text, fromNavigationEvent: false });
    };
    onSubmitEditing = (e) => {
        this.props.submitUrlBarTextToWebView(e.nativeEvent.text, this.props.activeTab);
    };
    render() {
        const { urlBarText, style, ...rest } = this.props;
        return (React.createElement(TextInput, { style: StyleSheet.compose({
                /* Note: I suspect that Safari may use fontSize 16. */
                fontSize: 18,
                flex: 1,
            }, style), ...rest, value: urlBarText, autoCorrect: false, autoCapitalize: "none", keyboardType: "url", returnKeyType: "go", onChangeText: this.onChangeText, placeholder: "Search or enter address", onSubmitEditing: this.onSubmitEditing }));
    }
}
const DisplayTextFieldConnected = connect((wholeStoreState) => {
    // console.log(`wholeStoreState`, wholeStoreState);
    const { activeTab, urlBarText } = wholeStoreState.navigation;
    return {
        activeTab,
        urlBarText,
    };
}, {
    updateUrlBarText,
    submitUrlBarTextToWebView,
})(DisplayTextField);
// https://github.com/cliqz/user-agent-ios/blob/develop/Client/Frontend/Browser/TabLocationView.swift#L62
class UrlTextField extends React.Component {
    render() {
        const { ...rest } = this.props;
        return (React.createElement(DisplayTextFieldConnected, { ...rest })
        // <DisplayTextField urlBarText={"whatever"} {...rest}/>
        );
    }
}
// https://github.com/cliqz/user-agent-ios/blob/develop/Client/Frontend/Browser/TabLocationView.swift#L111
class PageOptionsButton extends React.Component {
    render() {
        const { ...rest } = this.props;
        return (React.createElement(ToolbarButton, { ...rest, name: "ellipsis-h" }));
    }
}
// https://github.com/cliqz/user-agent-ios/blob/develop/Client/Frontend/Browser/TabLocationView.swift#L105
class PrivacyIndicator extends React.Component {
    render() {
        const { ...rest } = this.props;
        return (React.createElement(PrivacyIndicatorView, { ...rest }));
    }
}
export const DEFAULT_HEADER_RETRACTED_HEIGHT = 22;
export const DEFAULT_HEADER_REVEALED_HEIGHT = 44;
// https://github.com/cliqz/user-agent-ios/blob/develop/Client/Frontend/Browser/TabLocationView.swift
export class TabLocationView extends React.Component {
    render() {
        const { activeTabIsSecure, urlBarText, config, orientation, ...rest } = this.props;
        const { slotBackgroundColor = "darkgray", textFieldTextColor = "black", textFieldBackgroundColor = "transparent", landscapeRetraction, portraitRetraction, HEADER_RETRACTED_HEIGHT = DEFAULT_HEADER_RETRACTED_HEIGHT, HEADER_REVEALED_HEIGHT = DEFAULT_HEADER_REVEALED_HEIGHT, buttonEnabledColor, buttonDisabledColor } = config;
        const retractionStyle = orientation === "portrait" ? portraitRetraction : landscapeRetraction;
        const HEADER_HIDDEN_HEIGHT = 0;
        const HEADER_RETRACTION_DISTANCE = HEADER_REVEALED_HEIGHT - HEADER_RETRACTED_HEIGHT;
        let heightStyle;
        switch (retractionStyle) {
            case RetractionStyle.alwaysRevealed:
                heightStyle = {
                    // height: "auto",
                    height: HEADER_REVEALED_HEIGHT,
                };
                break;
            case RetractionStyle.alwaysCompact:
                heightStyle = {
                    height: HEADER_RETRACTED_HEIGHT,
                };
                break;
            case RetractionStyle.retractToCompact:
            case RetractionStyle.retractToHidden:
                heightStyle = {
                    height: this.props.animatedNavBarTranslateYPortrait,
                };
                break;
            case RetractionStyle.alwaysHidden:
                heightStyle = {
                    height: HEADER_HIDDEN_HEIGHT
                };
        }
        // Where 1 is not compact and 0 is fully compact.
        let scaleFactor;
        switch (retractionStyle) {
            case RetractionStyle.alwaysRevealed:
                scaleFactor = 1;
                break;
            case RetractionStyle.alwaysHidden:
            case RetractionStyle.alwaysCompact:
                scaleFactor = 0;
                break;
            case RetractionStyle.retractToCompact:
            case RetractionStyle.retractToHidden:
                scaleFactor = this.props.animatedTitleOpacity;
                break;
        }
        return (
        /* self.view now flattened down to simplify UI. */
        /* self.contentView */
        /* https://github.com/cliqz/user-agent-ios/blob/develop/Client/Frontend/Browser/TabLocationView.swift#L149 */
        /* https://developer.apple.com/documentation/uikit/uistackview */
        React.createElement(Animated.View, { style: [
                {
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-around",
                    // margin: 8,
                    flexGrow: 1,
                    /* Mirrors that of the round-cornered backdrop view. */
                    borderRadius: 10,
                    marginHorizontal: 8,
                    /* paddingVertical actually causes the text overflow to get clipped, so we'll instead get our padding
                    * by reserving more height than the content needs. */
                    // paddingVertical: 4,
                    // backgroundColor: "indigo",
                },
                heightStyle
            ] },
            React.createElement(Animated.View, { style: {
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    borderRadius: 10,
                    backgroundColor: slotBackgroundColor,
                    opacity: scaleFactor,
                } }),
            React.createElement(View, { style: { width: TabLocationViewUX.Spacing } }),
            React.createElement(PrivacyIndicator, { enabledColor: buttonEnabledColor, disabledColor: buttonDisabledColor, containerStyle: {
                    transform: [
                        { scaleX: scaleFactor },
                        { scaleY: scaleFactor },
                    ],
                } }),
            React.createElement(View, { style: { width: 3 } }),
            React.createElement(LockImageView, { enabledColor: buttonEnabledColor, disabledColor: buttonDisabledColor, locked: !!activeTabIsSecure, containerStyle: {
                    /* I'm not sure how ftp:// and sftp:// links are usually represented, so we'll hide the lock altogether. */
                    display: activeTabIsSecure === null ? "none" : "flex",
                    /* Nothing to do with animation; just my lazy way of making it more compact. */
                    transform: [
                        { scaleX: 0.66 },
                        { scaleY: 0.66 },
                    ]
                } }),
            React.createElement(UrlTextField, { style: {
                    color: textFieldTextColor,
                    backgroundColor: textFieldBackgroundColor,
                    flexGrow: 1,
                } }),
            React.createElement(ClearUrlBarTextButtonConnected, { containerStyle: {
                    /* TODO: hide this button altogether in compact mode. */
                    display: urlBarText.length > 0 ? "flex" : "none",
                    /* Nothing to do with animation; just my lazy way of making it more compact. */
                    transform: [
                        { scaleX: 0.80 },
                        { scaleY: 0.80 },
                    ]
                } }),
            React.createElement(PageOptionsButton, { enabledColor: buttonEnabledColor, disabledColor: buttonDisabledColor, containerStyle: {
                    transform: [
                        { scaleX: scaleFactor },
                        { scaleY: scaleFactor },
                    ],
                } }),
            React.createElement(View, { style: { width: TabLocationViewUX.Spacing } })));
    }
}
export const TabLocationViewConnected = connect((wholeStoreState) => {
    // console.log(`wholeStoreState.navigation.urlBarText`, wholeStoreState.navigation.urlBarText);
    return {
        orientation: wholeStoreState.ui.orientation,
        urlBarText: wholeStoreState.navigation.urlBarText,
        activeTabIsSecure: wholeStoreState.navigation.tabs[wholeStoreState.navigation.activeTab].isSecure,
    };
}, {
    updateUrlBarText,
})(TabLocationView);
//# sourceMappingURL=TabLocationView.js.map