import { RootReducer } from "./rootReducer";
import { ThunkAction } from "redux-thunk";
import { Action } from 'redux';
export declare const store: import("@reduxjs/toolkit").EnhancedStore<import("redux").CombinedState<{
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
}>, import("redux").AnyAction, (import("redux-thunk").ThunkMiddleware<{}, import("redux").AnyAction, undefined> & {
    withExtraArgument<E>(extraArgument: E): import("redux-thunk").ThunkMiddleware<{}, import("redux").AnyAction, E>;
})[]>;
export declare type WholeStoreState = RootReducer;
export declare type AppThunk<ReturnType = void> = ThunkAction<ReturnType, WholeStoreState, null, Action<string>>;
