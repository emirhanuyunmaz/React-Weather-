import { createContext, useState } from "react";


export const cityNameContext = createContext()


export function CityNameContextProvider ({children}){
    
    const [cityName , setCityName] = useState("")
    
    

    return(<cityNameContext.Provider value={{cityName,setCityName}} >
        {children}
    </cityNameContext.Provider>)
}