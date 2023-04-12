import { configureStore } from "@reduxjs/toolkit";
import LoadingWeaterSlice from "./features/LoadingReducers/LoadingWeaterSlice";
import WeatherSlice from "./features/WeatherReducers/WeatherSlice";
import FotecastSlice from "./features/FotecastReducers/fotecastSlice";


const store = configureStore({
    reducer : {
        Weather : WeatherSlice,
        LoadingWeaterSlice,
        Fotecast : FotecastSlice
    }
})

export default store
