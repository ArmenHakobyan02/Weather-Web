import { useSelector } from "react-redux"
import "./fotecastHeader.css"

const WEEK_DAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

export const FotecastHeader = () => {

    const { fotecastdata, errorMassage } = useSelector(state => state.Fotecast)

    const dayInAWeek = new Date().getDay()
    const forecastDays = WEEK_DAYS.slice(dayInAWeek, WEEK_DAYS.length).concat(WEEK_DAYS.slice(0, dayInAWeek));

    const daysWeather = [];

    for (let i = 0; i < fotecastdata?.length; i += 8) {
        daysWeather.push(fotecastdata[i])
    }

    return (
        <div className="fotecast-app">
            {errorMassage === "" ? <h1 style={{ color: "red" }} >{errorMassage}</h1> :
                <>
                    {daysWeather?.map((e, ind) => {
                        return (
                            <div className="fotecast-app_item" key={e.dt}>
                                <div className="fotecast_img_div">
                                    <img src={`icons/${e.weather[0].icon}.png`} />
                                </div>
                                <h3>{Math.ceil(e.main.temp_min - 273)}°C / {Math.ceil(e.main.temp_max - 273)}°C</h3>
                                <h4>{forecastDays[ind]}</h4>
                                <div className="Fotecast_temp_Detalis_div">
                                    <div className="Fotecast_Detalis_Par">
                                        Detalis
                                    </div>
                                    <div className="Fotecast_Detalis_Par">
                                        <span>feels_like</span>
                                        <span>{Math.ceil(e.main?.feels_like) - 273} °C</span>
                                    </div>
                                    <div className="Fotecast_Detalis_Par">
                                        <span>Wind</span>
                                        <span>{Math.ceil(e.wind?.speed)} m/s</span>
                                    </div>
                                    <div className="Fotecast_Detalis_Par">
                                        <span>Humidity</span>
                                        <span>{Math.ceil(e.main?.humidity)}</span>
                                    </div>
                                    <div className="Fotecast_Detalis_Par">
                                        <span>Pressure</span>
                                        <span>{Math.ceil(e.main?.pressure)}</span>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </>
            }
        </div>
    )
}