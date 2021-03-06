import * as React from "react";
import { ToolbarButton } from "../../browser/bothBars/ToolbarButton";
// https://github.com/cliqz/user-agent-ios/blob/7a91b5ea3e2fbb8b95dadd4f0cfd71b334e73449/UserAgent/Views/Privacy%20Indicator/PrivacyIndicatorView.swift
export class PrivacyIndicatorView extends React.Component {
    render() {
        const { ...rest } = this.props;
        return (React.createElement(ToolbarButton, { name: "circle-notch", ...rest })
        // <$StackLayout>
        //     {/* stub for canvasView, which is that donut graph. */}
        //     <$ContentView/>
        //     <$Button/>
        // </$StackLayout>
        );
    }
}
//# sourceMappingURL=PrivacyIndicatorView.js.map