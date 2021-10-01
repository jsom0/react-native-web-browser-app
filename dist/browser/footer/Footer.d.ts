import * as React from "react";
import { ViewProps } from "react-native";
import Animated from "react-native-reanimated";
import { FooterConfig } from "../../browser/browserConfig";
interface FooterOwnProps {
    config: FooterConfig;
    scrollY: Animated.Value<number>;
    orientation: "portrait" | "landscape";
    showToolbar: boolean;
}
declare type FooterProps = FooterOwnProps & Omit<ViewProps, "orientation" | "style">;
export declare const DEFAULT_FOOTER_REVEALED_HEIGHT: number;
export declare class Footer extends React.Component<FooterProps, {}> {
    render(): JSX.Element;
}
export declare const FooterConnected: import("react-redux").ConnectedComponent<React.ComponentType<import("react-redux").Matching<{
    orientation: string;
} & {}, React.ClassAttributes<Footer> & FooterOwnProps & Omit<ViewProps, "style" | "orientation">>>, import("react-redux").Omit<import("react-redux").Matching<{
    orientation: string;
} & {}, React.ClassAttributes<Footer> & FooterOwnProps & Omit<ViewProps, "style" | "orientation">>, "orientation"> | import("react-redux").Omit<React.ClassAttributes<React.Component<import("react-redux").Matching<{
    orientation: string;
} & {}, React.ClassAttributes<Footer> & FooterOwnProps & Omit<ViewProps, "style" | "orientation">>, any, any>> & import("react-redux").Matching<{
    orientation: string;
} & {}, React.ClassAttributes<Footer> & FooterOwnProps & Omit<ViewProps, "style" | "orientation">>, "orientation">>;
export {};
