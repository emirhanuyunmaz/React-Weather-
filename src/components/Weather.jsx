import { useContext, useEffect, useState } from "react"
import { searchCityContext } from "../context/searchCityContext";
import Loading from "./Loading";
import { FaThermometerFull } from "react-icons/fa";
import { BsMoisture } from "react-icons/bs";
import { WiCloudyWindy } from "react-icons/wi";
import { mapsLatLngContext } from "../context/mapsLatLngContext";
import { cityNameContext } from "../context/cityNameContext";
import { celciusFahrenheitContext } from "../context/celciusFahrenheitContext";


export default function Weather(){
    // console.log(import.meta.env.WEATHER_API_KEY);
    //°F = K * 1.8 - 459.67


    const {getCityWeather,cityWeather,isLoading ,isError , getCityNameWeather} = useContext(searchCityContext)
    const {location} = useContext(mapsLatLngContext)
    const {cityName} = useContext(cityNameContext)
    const {celc,setCelc} = useContext(celciusFahrenheitContext)

    useEffect(()=> {
      getCityWeather(location.lat,location.lng)
    },[location])

    useEffect(()=> {
        getCityNameWeather(cityName)
    },[cityName])

    // console.log(cityWeather.cod)

    return (<div className="text-white mt-5">

       {
        cityWeather.cod === "404" || isError ?<div className="text-red-600 text-5xl text-center">Error</div>:<>
        {
        isLoading ?<Loading/>:
       <>
        <h1 className="text-3xl text-center">{cityWeather.name} , {cityWeather.sys.country}</h1>
        <h3 className="text-center text-xl mt-4 text-gray-300">{cityWeather.weather[0].main}</h3>
        <div>
            
            <div className="flex items-center justify-between gap-20 mx-52">
                <img src={`https://openweathermap.org/img/wn/${cityWeather.weather[0].icon}@2x.png`} alt="" />
                { celc ? <h2 className="text-4xl"> {(cityWeather.main.temp - 273.15).toFixed(2)} °C </h2>
                    :<h2 className="text-4xl"> {(cityWeather.main.temp * 1.8 - 459.67).toFixed(2)} °F </h2>
                }
            
                <div className="flex flex-col justify-center items-center">

                <div className="flex text-xl justify-center items-center gap-2 flex-nowrap ">
                <FaThermometerFull  className="text-2xl"/>
                <p>Real fell : </p>
                { celc ? <p> {(cityWeather.main.feels_like - 273.15 ).toFixed(2) } </p>
                    : <p> {(cityWeather.main.feels_like * 1.8 - 459.67 ).toFixed(2) } </p>
                }
                </div>

                <div className="flex text-xl items-center gap-2" >
                    <BsMoisture className="text-2xl" />
                    <p>Humidty :</p>
                    <p> {cityWeather.main.humidity}</p>
                </div>

                <div className="flex text-xl items-center gap-2">
                    <WiCloudyWindy className="text-2xl" />
                    <p>Wind : </p>
                    <p>{cityWeather.wind.speed} km/h</p>
                </div>
            </div>
            </div>
        </div>
       </>
       }
        </>
       }

    </div>)
}