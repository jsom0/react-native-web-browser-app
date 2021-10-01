import * as React from "react";
import { ViewProps, ViewStyle } from "react-native";
import { HeaderConfig } from "../browserConfig";
export interface TabToolbarOwnProps {
    config: HeaderConfig;
    containerStyle?: ViewStyle;
}
export declare type TabToolbarProps = TabToolbarOwnProps & ViewProps;
export declare type TabToolbarType = (props: TabToolbarProps) => React.ReactNode;
export declare const defaultTabToolbar: (props: TabToolbarProps) => JSX.Element;
interface State {
}
export declare class TabToolbar extends React.Component<TabToolbarProps, State> {
    render(): JSX.Element;
}
export {};
