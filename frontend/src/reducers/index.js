import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "../slices/auth"
import sidebarReducer from "../slices/sidebarSlice"
import darkModeReducer from "../slices/toggle"
const rootReducer = combineReducers({
    auth: authReducer,
    sidebar: sidebarReducer,
    toggle:darkModeReducer
})

export default rootReducer;