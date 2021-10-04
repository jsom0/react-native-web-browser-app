import * as React from "react";
import { View } from "react-native";
import { BackButtonConnected, ForwardButtonConnected, MenuButtonConnected, SearchButtonConnected, TabsButtonConnected, } from "../bothBars/BarButtons";
export const defaultTabToolbar = (props) => React.createElement(TabToolbar, { ...props });
// https://github.com/cliqz/user-agent-ios/blob/develop/Client/Frontend/Browser/TabToolbar.swift#L199
export class TabToolbar extends React.Component {
    render() {
        const { config, containerStyle, ...rest } = this.props;
        const { buttonEnabledColor, buttonDisabledColor } = config;
        return (React.createElement(View, { style: [
                {
                    flexDirection: "row",
                    justifyContent: "space-around",
                    alignItems: "center",
                    width: "100%",
                    paddingTop: 16,
                },
                containerStyle
            ], ...rest },
            React.createElement(BackButtonConnected, { enabledColor: buttonEnabledColor, disabledColor: buttonDisabledColor }),
            React.createElement(ForwardButtonConnected, { enabledColor: buttonEnabledColor, disabledColor: buttonDisabledColor }),
            React.createElement(MenuButtonConnected, { enabledColor: buttonEnabledColor, disabledColor: buttonDisabledColor }),
            React.createElement(SearchButtonConnected, { enabledColor: buttonEnabledColor, disabledColor: buttonDisabledColor }),
            React.createElement(TabsButtonConnected, { enabledColor: buttonEnabledColor, disabledColor: buttonDisabledColor })));
    }
}
//# sourceMappingURL=TabToolbar.js.map