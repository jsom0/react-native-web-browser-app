import * as React from "react";
import Animated from "react-native-reanimated";
import { HeaderConfig } from "../browserConfig";
interface State {
}
interface Props {
    config: HeaderConfig;
    scrollY: Animated.Value<number>;
    animatedTitleOpacity: Animated.Node<number>;
    animatedNavBarTranslateYPortait: Animated.Node<number>;
    animatedNavBarTranslateYLandscape: Animated.Node<number>;
    inOverlayMode: boolean;
    toolbarIsShowing: boolean;
}
export declare const URL_BAR_VIEW_PADDING_VERTICAL: number;
export declare class URLBarView extends React.Component<Props, State> {
    constructor(props: Props);
    render(): JSX.Element;
}
export {};
