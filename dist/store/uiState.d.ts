export declare function isPortrait(): boolean;
export declare const updateOrientation: import("@reduxjs/toolkit").ActionCreatorWithPayload<"landscape" | "portrait", string>;
export declare const uiSliceReducer: import("redux").Reducer<{
    orientation: string;
}, import("redux").AnyAction>;
