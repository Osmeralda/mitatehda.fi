import React, {useState, useEffect } from 'react'
import axios from 'axios'
import * as styles from "../styles/keskukset.module.css"
import Collapse from './Collapse'

function Weather() {

    const [data, setData] = useState([])

    const url = `https://api.openweathermap.org/data/2.5/weather?lat=66.1714&lon=29.1238&units=metric&appid=65651fad908043d4b5c7e243c82713dc&lang=fi`

    useEffect(() => {
    axios.get(url)
    .then(response => {
        console.log(response.data)
        setData(response.data)
    })
    .catch(err => {
      console.log(err)
    })
  },[])

  return (
<div className={styles.weatherMain}>
  <Collapse label="Sää Rukalla">
  <div className={styles.weatherSecondary}>
    <div>
        {data.main ? <h3>Asteet {Math.round(data.main.temp)}°C</h3> : null}
        {data.main ? <h3>Tuntuu Kuin {Math.round(data.main.feels_like)}°C</h3> : null}
        {data.wind ? <h3>Tuulen nopeus {Math.round(data.wind.speed)} m/s</h3> : null}
        </div>
        <div className={styles.weatherIcon}>
        {data.weather ? <img src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} /> : null}
      </div>
    </div>
    </Collapse>
    </div>
  )
}

export default Weather