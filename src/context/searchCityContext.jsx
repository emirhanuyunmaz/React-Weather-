import { createContext, useState } from "react";


export const searchCityContext = createContext({})


export function SearchCityContextProvider({children}){

    const [cityWeather , setCityWeather] = useState({})
    const [isLoading , setIsLoading] = useState(true)
    const [isError , setIsError] = useState(false)


    async function getCityWeather(lat,lng){
        setIsError(false)
        setIsLoading(true)
        const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${import.meta.env.VITE_WEATHER_API_KEY}`).then((res) => res.json()).catch((err) => {
            isError(true)
        })
        setCityWeather(data)
        setIsLoading(false)
    }

    async function getCityNameWeather(name){
        if(name.length !==0 ){
            setIsLoading(true)
            setIsError(false)
            const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${import.meta.env.VITE_WEATHER_API_KEY}`).then((res) => res.json()).catch((err) => {
                setIsError(true)
            })
            setCityWeather(data)
            setIsLoading(false)
        }
    }


    

    return(<searchCityContext.Provider value={{getCityWeather,cityWeather,isLoading ,isError , getCityNameWeather}} >
        {children}
    </searchCityContext.Provider>)
}