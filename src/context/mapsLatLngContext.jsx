import { createContext, useState } from "react";


export const mapsLatLngContext = createContext({})


export function MapsLatLngContextProvider({children}){

    const [lat , setLat ] =useState(37.5554915)
    const [lng , setLng ] =useState(36.8291908)

    const location = {
        lat ,
        setLat,
        lng ,
        setLng
    }
    const d=321

    return(<mapsLatLngContext.Provider value={{location}} >
        {children}
    </mapsLatLngContext.Provider>)
}