import * as React from "react";
import { ViewProps } from "react-native";
import Animated from "react-native-reanimated";
import { HeaderConfig } from "../browserConfig";
interface HeaderOwnProps {
    config: HeaderConfig;
    animatedNavBarTranslateYPortrait: Animated.Node<number>;
    animatedNavBarTranslateYLandscape: Animated.Node<number>;
    animatedTitleOpacity: Animated.Node<number>;
    scrollY: Animated.Value<number>;
    inOverlayMode: boolean;
    toolbarIsShowing: boolean;
}
export declare type HeaderProps = HeaderOwnProps & ViewProps;
export declare type HeaderType = (props: HeaderProps) => React.ReactNode;
export declare const defaultHeader: (props: HeaderProps) => JSX.Element;
interface State {
}
export declare class Header extends React.Component<HeaderProps, State> {
    render(): JSX.Element;
}
export {};
