import { useContext, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { searchCityContext } from "../context/searchCityContext";
import { cityNameContext } from "../context/cityNameContext";
import GoogleMapsComp from "./GoogleMapsComp";
import { celciusFahrenheitContext } from "../context/celciusFahrenheitContext";


export default function Search(){

    const {setCityName} = useContext(cityNameContext)
    const [name , setName] =useState("")
    const [control , setControl] = useState(false)
    const {celc,setCelc} = useContext(celciusFahrenheitContext)


    function onClick(){
        if(name.length !== 0){
            setCityName(name)
        }
    }

    return(<div className="flex gap-5 text-white justify-center items-center pt-16">
        <input type="text" value={name} onChange={(event) => setName(event.target.value)}  className="outline-none text-black rounded-2xl px-2 py-1" placeholder="Search" />
        <button onClick={onClick} className=" hover:text-gray-200"><FaSearch /></button>
        <button onClick={()=>setControl(!control)} className="hover:text-gray-200" ><FaLocationDot /></button>
        
        <div className="flex gap-1 justify-center items-center">
            <button onClick={() => setCelc(true)}  className="hover:text-gray-200">°C</button>
            <p> | </p>
            <button onClick={() => setCelc(false)}  className="hover:text-gray-200">°F</button>
        </div>
        
        <div>
        {control && <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                
                {/*body*/}
                
                     <GoogleMapsComp/>
                
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setControl(false)}
                  >
                    Close
                  </button>
                  
                </div>
              </div>
            </div>
          </div>
        </>}
        </div>
        
    </div>)
}