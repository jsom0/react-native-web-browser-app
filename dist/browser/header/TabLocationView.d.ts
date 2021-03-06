import * as React from "react";
import { ViewProps } from "react-native";
import { updateUrlBarText } from "../../store/navigationState";
import Animated from "react-native-reanimated";
import { HeaderConfig } from "../browserConfig";
export declare const DEFAULT_HEADER_RETRACTED_HEIGHT: number;
export declare const DEFAULT_HEADER_REVEALED_HEIGHT: number;
interface Props {
    activeTabIsSecure: boolean | null;
    urlBarText: string;
    updateUrlBarText: typeof updateUrlBarText;
    config: HeaderConfig;
    orientation: "portrait" | "landscape";
    scrollY: Animated.Value<number>;
    animatedTitleOpacity: Animated.Node<number>;
    animatedNavBarTranslateYPortrait: Animated.Node<number>;
    animatedNavBarTranslateYLandscape: Animated.Node<number>;
}
interface State {
}
export declare class TabLocationView extends React.Component<Props & Omit<ViewProps, "style">, State> {
    render(): JSX.Element;
}
export declare const TabLocationViewConnected: import("react-redux").ConnectedComponent<typeof TabLocationView, import("react-redux").Omit<React.ClassAttributes<TabLocationView> & Props & Omit<ViewProps, "style">, "orientation" | "updateUrlBarText" | "urlBarText" | "activeTabIsSecure">>;
export {};
