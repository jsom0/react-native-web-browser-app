export declare const rootReducer: import("redux").Reducer<import("redux").CombinedState<{
    ui: {
        orientation: string;
    };
    navigation: {
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
        searchProvider: import("../utils/urlBarTextHandling").SearchProvider;
    };
}>, import("redux").AnyAction>;
export declare type RootReducer = ReturnType<typeof rootReducer>;
