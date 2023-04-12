import { useState } from "react"

import "./Weather.css"

import { useDispatch, useSelector } from "react-redux"

import { getfotecast } from "../../redux/features/FotecastReducers/fotecastSlice"

import { getWeather } from "../../redux/features/WeatherReducers/WeatherSlice"

import { WeatherError } from "../WeatherError/WatherError"
import { WeatherTemp } from "../WeatherTemp/WeatherTemp"
import { Weather_Loading } from "../Weather_Loading/Weather_Loding"

import { LoadingOff, LoadingOn } from "../../redux/features/LoadingReducers/LoadingWeaterSlice"



export const Weather = () => {

    const dispatch = useDispatch()

    const state = useSelector(state => state)

    const [location, setlocation] = useState("")

    const handleClick = () => {

        if (location) {
            dispatch(getWeather(location))
            
            dispatch(getfotecast(location))
        }

        dispatch(LoadingOn())

        setTimeout(() => {
            dispatch(LoadingOff())
        }, 1000);
    }
    return (
        <div className="Weather_App">
            <div className="Weather_App_Item">

                <form onSubmit={(e) => e.preventDefault()}>
                    <div className="InuputParDiv">
                        <input type="search"
                            placeholder="Enter Yout City"
                            className="InputParItem"
                            onChange={(e) => setlocation(e.target.value)}
                            value={location}
                            name={location}
                        />
                        <button onClick={handleClick} >Click Me</button>
                    </div>
                </form>
                {state.LoadingWeaterSlice.Loading ? <Weather_Loading /> :
                    <>
                        {state.Weather.errorMassige === "" ?
                            <WeatherTemp Weather={state.Weather} location={location}  />
                            : <WeatherError />}
                    </>}
            </div>
        </div>
    )
}