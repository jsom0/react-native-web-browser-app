import * as React from "react";
import { AppThunk } from "./store";
export declare const webViews: Map<string, React.RefObject<any>>;
export declare type TabStateRecord = Record<string, {
    url: string;
    loadProgress: number;
}>;
export declare const updateUrlBarText: any, setProgressOnWebView: any, updateWebViewNavigationState: any;
export declare const navigationSliceReducer: any;
export declare function getWebView(tab: string): any;
export declare function submitUrlBarTextToWebView(text: string, tab?: string): AppThunk;
export declare function goBackOnWebView(tab?: string): AppThunk;
export declare function goForwardOnWebView(tab?: string): AppThunk;
export declare function reloadWebView(tab?: string): AppThunk;
export declare function stopWebView(tab?: string): AppThunk;
