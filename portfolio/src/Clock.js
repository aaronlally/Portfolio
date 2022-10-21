import React, { useState, useEffect } from 'react';

function Clock() {

    const [clockState, setClockState] = useState();
    const [latitude, setLatitude] = useState();
    const [longitude, setLongitude] = useState("");
    const [userCity, setUserCity] = useState("");
    const [userState, setUserState] = useState("");
    
    // openweathermapAPI 
    const apiKey = `74ccd2f7d3e5670c5ca13a315714913b`

  

    useEffect(() => {
        navigator.geolocation.getCurrentPosition((position) => {
            setLatitude(position.coords.latitude)
            setLongitude(position.coords.longitude)
        })
    }, [])

    // reverse geocoding -- sending latitude longitude, limit and api key it responds with data about the location
    useEffect(() => {
        fetch(`http://api.openweathermap.org/geo/1.0/reverse?lat=${latitude}&lon=${longitude}&limit=1&appid=${apiKey}`)
        .then(res => res.json())
        .then(data => handleData(data))
    }, [latitude])

    function handleData(data) {
        setUserCity(data[0].name)
        setUserState(data[0].state)
        console.log(data)
    }

    useEffect(() => {
        setInterval(() => {
            const date = new Date();
            setClockState(date.toLocaleTimeString())
        }, 500);
    }, []);

  return (
    <div>
        <div id="locationContainer">
            <div id="userCity">{userCity}</div>
            <div id="userState">{userState}</div>
        </div>
        
        <div id="currentTime">{clockState}</div>
    </div>
  )
}

export default Clock