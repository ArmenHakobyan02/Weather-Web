import { FotecastHeader } from "../fotecast/FotecastHeader"
import "./WeatherTemp.css"

export const WeatherTemp = ({ Weather, location }) => {

    return (
        <div className="WeatherTemp_App">
            {Weather.isSuccses ? 
                <div className="Weather_Temp_App_item">
                    <div className="Weather_temp_App_child">
                        <section className="Weather_name">
                            <p>{Weather.data.name}</p>
                            <p>{Weather.data.sys.country}</p>
                            <span>{Weather.data.weather[0].description}</span>
                        </section>
                        <div className="Weather_clouds">
                            <img
                                alt="img icons"
                                src={`icons/${Weather.data.weather[0].icon}.png`}
                            />
                        </div>
                        <div className="Weather_temp_body_div">
                            <div className="Weather_temp_celsus_div">
                                <h1>{Math.ceil(Weather.data.main.temp) - 273}°C</h1>
                            </div>
                            <div className="Weather_temp_Detalis_div">
                                <div className="Detalis_Par">
                                    Detalis
                                </div>
                                <div className="Detalis_Par">
                                    <span>feels_like</span>
                                    <span>{Math.ceil(Weather.data.main?.feels_like) - 273} °C</span>
                                </div>
                                <div className="Detalis_Par">
                                    <span>Wind</span>
                                    <span>{Math.ceil(Weather.data.wind?.speed)} m/s</span>
                                </div>
                                <div className="Detalis_Par">
                                    <span>Humidity</span>
                                    <span>{Math.ceil(Weather.data.main?.humidity)}</span>
                                </div>
                                <div className="Detalis_Par">
                                    <span>Pressure</span>
                                    <span>{Math.ceil(Weather.data.main?.pressure)}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <FotecastHeader location={location} />
                </div>
            : null }
        </div>
    )
}