import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { SearchCityContextProvider } from './context/searchCityContext'
import { MapsLatLngContextProvider } from './context/mapsLatLngContext'
import { CityNameContextProvider } from './context/cityNameContext.jsx'
import { CelciusFahrenheitContextProvider } from './context/celciusFahrenheitContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SearchCityContextProvider>
      <MapsLatLngContextProvider>
          <CityNameContextProvider>
            <CelciusFahrenheitContextProvider>
              <App />
            </CelciusFahrenheitContextProvider>
          </CityNameContextProvider>
      </MapsLatLngContextProvider>
    </SearchCityContextProvider>
  </React.StrictMode>,
)
