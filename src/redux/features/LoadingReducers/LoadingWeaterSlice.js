import { createSlice } from "@reduxjs/toolkit";



const LoadingWeaterSlice = createSlice({
    name : "LoadingWeaterSlice",
    initialState : {
        Loading : false
    },
    reducers : {
        LoadingOn : (state)=>{
            state.Loading = true
        },
        LoadingOff : (state)=>{
            state.Loading = false
        }
    }
})

export default LoadingWeaterSlice.reducer
export const {LoadingOff, LoadingOn} = LoadingWeaterSlice.actions