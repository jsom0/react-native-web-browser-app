import { RootReducer } from "./rootReducer";
import { ThunkAction } from "redux-thunk";
import { Action } from 'redux';
export declare const store: any;
export declare type WholeStoreState = RootReducer;
export declare type AppThunk<ReturnType = void> = ThunkAction<ReturnType, WholeStoreState, null, Action<string>>;
