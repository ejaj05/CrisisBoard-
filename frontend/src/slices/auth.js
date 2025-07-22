import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    signupData: JSON.parse(localStorage.getItem("signUpData")) || null,
    loading:false,
}

const authReducer = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setSignupData:(state,value) => {
            state.signupData = value.payload;
            localStorage.setItem("signUpData",JSON.stringify(value.payload))
        },
        setLoading:(state,value) => {
            state.loading = value.payload
        }
    }
})

export const {setSignupData,setLoading } = authReducer.actions;
export default authReducer.reducer;