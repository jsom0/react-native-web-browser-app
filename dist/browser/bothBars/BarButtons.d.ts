import * as React from "react";
import { TouchableOpacityProps } from "react-native";
import { ToolbarButtonProps } from "./ToolbarButton";
import { goBackOnWebView, goForwardOnWebView, reloadWebView, stopWebView } from "../../store/navigationState";
interface BackButtonProps {
    canGoBack: boolean;
    goBackOnWebView: typeof goBackOnWebView;
}
declare class BackButton extends React.Component<BackButtonProps & ToolbarButtonProps, {}> {
    private readonly onTap;
    render(): JSX.Element;
}
export declare const BackButtonConnected: import("react-redux").ConnectedComponent<typeof BackButton, import("react-redux").Omit<any, "canGoBack" | "goBackOnWebView">>;
interface ForwardButtonProps {
    canGoForward: boolean;
    goForwardOnWebView: typeof goForwardOnWebView;
}
declare class ForwardButton extends React.Component<ForwardButtonProps & ToolbarButtonProps, {}> {
    private readonly onTap;
    render(): JSX.Element;
}
export declare const ForwardButtonConnected: import("react-redux").ConnectedComponent<typeof ForwardButton, import("react-redux").Omit<any, "canGoForward" | "goForwardOnWebView">>;
interface StopReloadButtonProps {
    loading: boolean;
    stopWebView: typeof stopWebView;
    reloadWebView: typeof reloadWebView;
}
declare class StopReloadButton extends React.Component<StopReloadButtonProps & ToolbarButtonProps, {}> {
    private readonly onTap;
    render(): JSX.Element;
}
export declare const StopReloadButtonConnected: import("react-redux").ConnectedComponent<typeof StopReloadButton, import("react-redux").Omit<any, "loading" | "reloadWebView" | "stopWebView">>;
/**
 * Menu refers to the app menu, not a page-specific menu.
 */
declare class MenuButton extends React.Component<{} & ToolbarButtonProps, {}> {
    render(): JSX.Element;
}
export declare const MenuButtonConnected: import("react-redux").ConnectedComponent<typeof MenuButton, import("react-redux").Omit<any, never>>;
declare class SearchButton extends React.Component<{} & ToolbarButtonProps, {}> {
    render(): JSX.Element;
}
export declare const SearchButtonConnected: import("react-redux").ConnectedComponent<typeof SearchButton, import("react-redux").Omit<any, never>>;
declare class TabsButton extends React.Component<{} & ToolbarButtonProps, {}> {
    render(): JSX.Element;
}
export declare const TabsButtonConnected: import("react-redux").ConnectedComponent<typeof TabsButton, import("react-redux").Omit<any, never>>;
declare class CancelButton extends React.Component<{} & TouchableOpacityProps, {}> {
    render(): JSX.Element;
}
export declare const CancelButtonConnected: import("react-redux").ConnectedComponent<typeof CancelButton, import("react-redux").Omit<React.ClassAttributes<CancelButton> & TouchableOpacityProps, never>>;
export {};
