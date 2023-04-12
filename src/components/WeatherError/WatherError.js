import { useSelector } from "react-redux"
import "./WeatherError.css"

export const WeatherError = () => {

    const ErrorMessige = useSelector(state => state.Weather.errorMassige)

    return (
        <div className="WeatherError_App">
            <p>Error</p>
            <h1> {ErrorMessige}</h1> 
        </div>
    )
}