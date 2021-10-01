import * as React from "react";
import { SearchProvider } from "../utils/urlBarTextHandling";
import { AppThunk } from "./store";
export declare const webViews: Map<string, React.RefObject<any>>;
export declare type TabStateRecord = Record<string, {
    url: string;
    loadProgress: number;
}>;
export declare const updateUrlBarText: import("@reduxjs/toolkit").ActionCreatorWithPayload<{
    text: string;
    fromNavigationEvent: boolean;
}, string>, setProgressOnWebView: import("@reduxjs/toolkit").ActionCreatorWithPayload<{
    progress: number;
    tab?: string | undefined;
}, string>, updateWebViewNavigationState: import("@reduxjs/toolkit").ActionCreatorWithPayload<{
    canGoBack: boolean;
    canGoForward: boolean;
    tab?: string | undefined;
}, string>;
export declare const navigationSliceReducer: import("redux").Reducer<{
    activeTab: string;
    tabs: {
        tab0: {
            url: string;
            isSecure: boolean;
            loadProgress: number;
            canGoBack: boolean;
            canGoForward: boolean;
        };
    };
    urlBarText: string;
    searchProvider: SearchProvider;
}, import("redux").AnyAction>;
export declare function getWebView(tab: string): any;
export declare function submitUrlBarTextToWebView(text: string, tab?: string): AppThunk;
export declare function goBackOnWebView(tab?: string): AppThunk;
export declare function goForwardOnWebView(tab?: string): AppThunk;
export declare function reloadWebView(tab?: string): AppThunk;
export declare function stopWebView(tab?: string): AppThunk;
