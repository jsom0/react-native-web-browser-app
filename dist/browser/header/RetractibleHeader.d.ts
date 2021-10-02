import * as React from 'react';
import { ViewProps } from 'react-native';
import { HeaderConfig } from '../browserConfig';
interface RetractibleHeaderProps {
    config: HeaderConfig;
    scrollY: number;
    urlBarText: string;
    orientation: 'portrait' | 'landscape';
}
export declare class RetractibleHeader extends React.Component<RetractibleHeaderProps & Omit<ViewProps, 'orientation'>, {}> {
    private readonly animatedNavBarTranslateYPortrait;
    private readonly animatedNavBarTranslateYLandscape;
    private readonly animatedTitleOpacity;
    constructor(props: RetractibleHeaderProps & Omit<ViewProps, 'orientation'>);
    render(): JSX.Element;
}
export declare const RetractibleHeaderConnected: import("react-redux").ConnectedComponent<React.ComponentType<import("react-redux").Matching<{
    urlBarText: string;
    orientation: string;
} & {}, React.ClassAttributes<RetractibleHeader> & RetractibleHeaderProps & Omit<ViewProps, "orientation">>>, import("react-redux").Omit<import("react-redux").Matching<{
    urlBarText: string;
    orientation: string;
} & {}, React.ClassAttributes<RetractibleHeader> & RetractibleHeaderProps & Omit<ViewProps, "orientation">>, "orientation" | "urlBarText"> | import("react-redux").Omit<React.ClassAttributes<React.Component<import("react-redux").Matching<{
    urlBarText: string;
    orientation: string;
} & {}, React.ClassAttributes<RetractibleHeader> & RetractibleHeaderProps & Omit<ViewProps, "orientation">>, any, any>> & import("react-redux").Matching<{
    urlBarText: string;
    orientation: string;
} & {}, React.ClassAttributes<RetractibleHeader> & RetractibleHeaderProps & Omit<ViewProps, "orientation">>, "orientation" | "urlBarText">>;
export {};
