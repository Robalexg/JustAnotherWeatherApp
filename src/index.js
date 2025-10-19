
import './css/styles.css'
import { leftCard } from './leftCard.js'
import { rightCard } from './rightCard.js'

let app = document.querySelector('.app')

const index = async (city) => {
    const data = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=us&key=SB7J7GK4AZVGV5NLL6E4ZZ37A&contentType=json`)
    const weatherData = await data.json()
    const appData = {
        temp:weatherData.currentConditions.temp.toString().slice(0,2) ,
        windspeed:weatherData.currentConditions.windspeed,
        precip: weatherData.currentConditions.precipprob,
        condition: weatherData.currentConditions.conditions,
        feelslike: weatherData.currentConditions.feelslike.toString().slice(0,2),
        city: weatherData.resolvedAddress

    }
    console.log(weatherData) 
    console.log(appData)

    app.appendChild(leftCard(appData))
    app.appendChild(rightCard(appData))
}


index('San Antonio')

export {index}


// app.appendChild(leftCard())
// app.appendChild(rightCard())




