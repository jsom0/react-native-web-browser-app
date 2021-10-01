import * as React from "react";
import { Animated, ViewProps } from "react-native";
interface GradientProgressBarOwnProps {
    trackColor?: string;
}
interface GradientProgressBarConnectedProps {
    progress: number;
}
export declare type GradientProgressBarProps = GradientProgressBarOwnProps & GradientProgressBarConnectedProps & ViewProps;
export declare type GradientProgressBarType = (props: GradientProgressBarOwnProps) => React.ReactNode;
export declare const defaultGradientProgressBar: (props: GradientProgressBarOwnProps) => JSX.Element;
interface State {
    barOpacity: Animated.Value;
    barWidth: Animated.Value;
}
export declare const GRADIENT_PROGRESS_BAR_HEIGHT: number;
declare class GradientProgressBar extends React.Component<GradientProgressBarProps, State> {
    constructor(props: GradientProgressBarProps);
    shouldComponentUpdate(nextProps: Readonly<GradientProgressBarProps>, nextState: Readonly<State>, nextContext: any): boolean;
    render(): JSX.Element;
}
export declare const GradientProgressBarConnected: import("react-redux").ConnectedComponent<typeof GradientProgressBar, import("react-redux").Omit<React.ClassAttributes<GradientProgressBar> & GradientProgressBarOwnProps & GradientProgressBarConnectedProps & ViewProps, "progress">>;
export {};
