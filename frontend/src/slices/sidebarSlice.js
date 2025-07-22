import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    open: false,
}

const sidebarReducer = createSlice({
    name: "sideBar",
    initialState,
    reducers: {
        setOpen:(state,value) => {
            state.open = value.payload;
        }
    }
})

export const {open, setOpen } = sidebarReducer.actions;
export default sidebarReducer.reducer;