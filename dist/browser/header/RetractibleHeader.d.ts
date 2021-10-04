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
export declare const RetractibleHeaderConnected: import("react-redux").ConnectedComponent<typeof RetractibleHeader, import("react-redux").Omit<React.ClassAttributes<RetractibleHeader> & RetractibleHeaderProps & Omit<ViewProps, "orientation">, "orientation" | "urlBarText">>;
export {};
