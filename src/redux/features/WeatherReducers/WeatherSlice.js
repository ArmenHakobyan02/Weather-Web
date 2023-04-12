import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const Api_Key = "a287a804e03a5879e9d4751ccc17179d"

export const getWeather = createAsyncThunk(
    "getWeather",
    async (location, {rejectWithValue}) => {
        try {
            if (location !== "") {
                const { data } = await axios.get( 
                   `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${Api_Key}`
            )
            return data  
            }   
        } catch (error) {
            rejectWithValue(error.message)
        }
    }
)

const WeatherSlice = createSlice({
    name: "Weather",
    initialState: {
        data: [],
        ladding: false,
        isSuccses: false,
        errorMassige: ""
    },
    reducers: {},
    extraReducers: (builde)=>{
        builde
        .addCase(getWeather.pending, (state)=>{
            state.ladding = true
        })
        .addCase(getWeather.fulfilled, (state, {payload})=>{
            state.ladding = false
            state.data = payload
            state.isSuccses = true
        })
        .addCase(getWeather.rejected, (state, {payload})=>{
            state.errorMassige = payload
            state.ladding = false
        })
    }
})

export default WeatherSlice.reducer

