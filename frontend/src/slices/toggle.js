import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    isDarkMode: false,
}

const darkModeSlice = createSlice({
    name: "toggle",
    initialState,
    reducers: {
        setisDarkMode:(state,value) => {
            state.isDarkMode = value.payload;
        }
    }
})

export const {isDarkMode, setisDarkMode } = darkModeSlice.actions;
export default darkModeSlice.reducer;