import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const Api_Key = "a287a804e03a5879e9d4751ccc17179d"  

export const getfotecast = createAsyncThunk(
    "getfotecast/fotecase",
    async (location, { rejectWithValue }) => {
        try {
            if (location) {
                const { fotecastdata } = await axios.get(
                    `https://pro.openweathermap.org/data/2.5/forecast/hourly?q=${location}&appid=${Api_Key}`
                )
                return fotecastdata
            }

        } catch (error) {
            rejectWithValue(error.message)
        }
    }
)

const fotecastSlice = createSlice({
    name: "fotecastSlice",
    initialState: {
        fotecastdata: [],
        isSuccses: false,
        loading: false,
        errorMassige: ""
    },
    reducers: {},
    extraReducers: (builde) => {
        builde
            .addCase(getfotecast.pending, (state) => {
                state.loading = true
            })
            .addCase(getfotecast.fulfilled, (state, { payload }) => {
                state.loading = false
                state.isSuccses = true
                state.fotecastdata = payload
            })
            .addCase(getfotecast.rejected, (state, { payload }) => {
                state.errorMassige = payload
            })
    }
})

export default fotecastSlice.reducer
