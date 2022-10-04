import React, {useState, useEffect } from 'react'
import axios from 'axios'

function Weather() {

    const [data, setData] = useState({})

    const url = `https://api.openweathermap.org/data/2.5/weather?lat=66.1714&lon=29.1238&units=metric&appid=65651fad908043d4b5c7e243c82713dc`

    useEffect(() => {
    axios.get(url).then((response) => {
        setData(response.data)
        console.log(response)
    })
    .catch(err => {
        console.log(err)
    })
    }, []) //<-- muista laittaa empty array tai get on ikuuinen looppi

  return (
    <div>
        {data.main ? <h3>{data.main.temp.toFixed}</h3> : null}
        {data.main ? <h3>{data.main.feels_like.toFixed}</h3> : null}
        {data.wind ? <h3>{data.wind.speed.toFixed}</h3> : null}
        {data.weather ? <p>{data.weather[0].main}</p> : null}
    </div>
  )
}

export default Weather