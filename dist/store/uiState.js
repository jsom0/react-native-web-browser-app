import { createSlice } from "@reduxjs/toolkit";
import { Dimensions } from "react-native";
export function isPortrait() {
    const { width, height } = Dimensions.get('screen');
    return height >= width;
}
;
const uiSlice = createSlice({
    name: 'ui',
    initialState: {
        orientation: isPortrait() ? 'portrait' : 'landscape',
    },
    reducers: {
        updateOrientation(state, action) {
            state.orientation = action.payload;
        },
    }
});
export const { updateOrientation } = uiSlice.actions;
export const uiSliceReducer = uiSlice.reducer;
//# sourceMappingURL=uiState.js.map