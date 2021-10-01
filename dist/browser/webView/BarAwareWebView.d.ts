import * as React from "react";
import { updateUrlBarText, TabStateRecord, setProgressOnWebView, updateWebViewNavigationState } from "../../store/navigationState";
import { ViewProps } from "react-native";
import Animated from "react-native-reanimated";
import { HeaderConfig } from "../browserConfig";
export declare type BarAwareWebViewType = (props: BarAwareWebViewOwnProps) => React.ReactNode;
export interface BarAwareWebViewOwnProps {
    headerConfig: HeaderConfig;
    scrollY: Animated.Value<number>;
    scrollEndDragVelocity: Animated.Value<number>;
}
export interface BarAwareWebViewConnectedProps {
    updateUrlBarText: typeof updateUrlBarText;
    setProgressOnWebView: typeof setProgressOnWebView;
    updateWebViewNavigationState: typeof updateWebViewNavigationState;
    activeTab: string;
    tabs: TabStateRecord;
}
export declare type BarAwareWebViewProps = BarAwareWebViewOwnProps & BarAwareWebViewConnectedProps;
export declare const DefaultBarAwareWebView: BarAwareWebViewType;
export declare class BarAwareWebView extends React.Component<BarAwareWebViewProps & ViewProps, {}> {
    private readonly onLoadStarted;
    private readonly onLoadCommitted;
    private readonly onLoadFinished;
    private readonly onProgress;
    render(): JSX.Element;
}
export declare const BarAwareWebViewConnected: import("react-redux").ConnectedComponent<typeof BarAwareWebView, import("react-redux").Omit<React.ClassAttributes<BarAwareWebView> & BarAwareWebViewOwnProps & BarAwareWebViewConnectedProps & ViewProps, "updateUrlBarText" | "updateWebViewNavigationState" | "setProgressOnWebView" | "activeTab" | "tabs">>;
