import * as React from 'react';
import { ViewProps } from 'react-native';
import { FooterConfig } from '../../browser/browserConfig';
interface FooterOwnProps {
    config: FooterConfig;
    scrollY: number;
    orientation: 'portrait' | 'landscape';
    showToolbar: boolean;
}
declare type FooterProps = FooterOwnProps & Omit<ViewProps, 'orientation' | 'style'>;
export declare const DEFAULT_FOOTER_REVEALED_HEIGHT: number;
export declare class Footer extends React.Component<FooterProps, {}> {
    render(): JSX.Element;
}
export declare const FooterConnected: import("react-redux").ConnectedComponent<typeof Footer, import("react-redux").Omit<React.ClassAttributes<Footer> & FooterOwnProps & Omit<ViewProps, "style" | "orientation">, "orientation">>;
export {};
