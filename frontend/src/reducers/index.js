import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "../slices/auth"
import sidebarReducer from "../slices/sidebarSlice"
const rootReducer = combineReducers({
    auth: authReducer,
    sidebar: sidebarReducer
})

export default rootReducer;