import * as React from "react";
import { View } from "react-native";
import { BackButtonConnected, ForwardButtonConnected, MenuButtonConnected, SearchButtonConnected, TabsButtonConnected, } from "../bothBars/BarButtons";
export const defaultTabToolbar = (props) => <TabToolbar {...props}/>;
// https://github.com/cliqz/user-agent-ios/blob/develop/Client/Frontend/Browser/TabToolbar.swift#L199
export class TabToolbar extends React.Component {
    render() {
        const { config, containerStyle, ...rest } = this.props;
        const { buttonEnabledColor, buttonDisabledColor } = config;
        return (<View style={[
                {
                    flexDirection: "row",
                    justifyContent: "space-around",
                    alignItems: "center",
                    width: "100%",
                    paddingTop: 16,
                },
                containerStyle
            ]} {...rest}>
                {/* actionButtons */}
                <BackButtonConnected enabledColor={buttonEnabledColor} disabledColor={buttonDisabledColor}/>
                <ForwardButtonConnected enabledColor={buttonEnabledColor} disabledColor={buttonDisabledColor}/>
                <MenuButtonConnected enabledColor={buttonEnabledColor} disabledColor={buttonDisabledColor}/>
                <SearchButtonConnected enabledColor={buttonEnabledColor} disabledColor={buttonDisabledColor}/>
                <TabsButtonConnected enabledColor={buttonEnabledColor} disabledColor={buttonDisabledColor}/>
            </View>);
    }
}
//# sourceMappingURL=TabToolbar.js.map