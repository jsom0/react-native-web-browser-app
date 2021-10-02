import * as React from 'react';
import { BrowserConfig } from './browserConfig';
import { updateOrientation } from '../store/uiState';
interface Props {
    config?: BrowserConfig;
    updateOrientation: typeof updateOrientation;
}
interface State {
}
export declare class BrowserViewController extends React.Component<Props, State> {
    private readonly scrollY;
    private readonly scrollEndDragVelocity;
    constructor(props: Props);
    private readonly onOrientationChange;
    componentDidMount(): void;
    componentWillUnmount(): void;
    render(): JSX.Element;
}
export declare const BrowserViewControllerConnected: import("react-redux").ConnectedComponent<typeof BrowserViewController, import("react-redux").Omit<React.ClassAttributes<BrowserViewController> & Props, "updateOrientation">>;
export {};
