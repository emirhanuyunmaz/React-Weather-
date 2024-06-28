import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api"
import React, { useContext, useState } from "react";
import { mapsLatLngContext } from "../context/mapsLatLngContext";

//Genişlik ve yükseklik miktarı
const containerStyle = {
    width: '400px',
    height: '400px'
  };
  
  //Başlangıç pozisyonu
  const center = {
    lat: 37.5554915,
    lng: 36.8291908
  };
  

export default function GoogleMapsComp(){
    //Yüklenip yüklenmediği durum
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: import.meta.env.VITE_MAPS_API_KEY
      })
    
      const {location} = useContext(mapsLatLngContext)
      console.log(location);
      //Haritaya ait değişken
      const [map, setMap] = useState(null)
    
      const onLoad = React.useCallback(function callback(map) {
        // This is just an example of getting and using the map instance!!! don't just blindly copy!
        const bounds = new window.google.maps.LatLngBounds(center);
        map.fitBounds(bounds);
        
        setMap(map)
      }, [])
    
      const onUnmount = React.useCallback(function callback(map) {
        setMap(null)
      }, [])


      function rightClicked(props){
        // console.log(props.latLng.lat());
        // console.log(props.latLng.lng());
        location.setLat(props.latLng.lat())
        location.setLng(props.latLng.lng())
      }

    return(<div>
        {isLoaded && <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={5}
        onLoad={onLoad}
        onUnmount={onUnmount}
        onRightClick={(props) => rightClicked(props)}
      >
        <Marker position={{lat: location.lat ,lng : location.lng }} />
        <></>
      </GoogleMap>}
    </div>)
}