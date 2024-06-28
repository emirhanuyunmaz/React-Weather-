import { createContext, useState } from "react";



export const celciusFahrenheitContext = createContext()


export function CelciusFahrenheitContextProvider ({children}){

    const [celc,setCelc] = useState(true)

    return(<celciusFahrenheitContext.Provider value={{celc,setCelc}} >
        {children}
    </celciusFahrenheitContext.Provider>)
}