import './css/rightcard.css'
import rainSrc from './images/rain.png'
import windSrc from './images/wind.png'



const header = () => {
    let container = document.createElement('div')
    let greeting = document.createElement('h1')
    let time = document.createElement('h1')


    //add classes
    container.classList.add("header")

    //add text content
    greeting.textContent = 'Good Morning'
    time.textContent = '12:20 PM'


    container.appendChild(greeting)
    container.appendChild(time)

    return container
}

const currentWeather = () => {
    //create elements
    let container = document.createElement('div')
    let windSpeedContainer =  document.createElement('div')
    let windSpeed =  document.createElement('p')
    let precipitationContainer =  document.createElement('div')
    let precipitation =  document.createElement('p')
    let windImg = document.createElement('img')
    let rainImg = document.createElement('img')
    let curTemp = document.createElement('h1')
    let curCondition = document.createElement('p')
    let feelsLike = document.createElement('p')



    //add classes 
    windSpeedContainer.classList.add('windSpeedContainer')
    precipitationContainer.classList.add('precipitationContainer')
    container.classList.add("currentWeather")


    //add text content
    curTemp.textContent ="20\u{00B0}"
    windSpeed.textContent = '6.1 mph'
    precipitation.textContent= '90 %'
    curCondition.textContent = 'Cloudy'
    curTemp.textContent ="20\u{00B0}"
    feelsLike.textContent = 'Feels like 19\u{00B0}'


    //add id's
    windSpeedContainer.id = 'windspeed'
    precipitationContainer.id = 'precip'
    curTemp.id = 'curTemp'
    curCondition.id = 'curCondition'
    feelsLike.id = 'feelsLike'


     //add src's
    windImg.src = windSrc
    rainImg.src = rainSrc

    //appends
    windSpeedContainer.appendChild(windImg)
    windSpeedContainer.appendChild(windSpeed)

    precipitationContainer.appendChild(rainImg)
    precipitationContainer.appendChild(precipitation)

    
    container.appendChild(curTemp)
    container.appendChild(windSpeedContainer)
    container.appendChild(precipitationContainer)
    container.appendChild(feelsLike)
    container.appendChild(curCondition)

    return container
}

const hourly = () => {

    //data 
    let forecast = [
        {
            time: '1 PM',
            temp : '20\u{00B0}',
            condition: 'Cloudy'
        },
        {
            time: '2 PM',
            temp : '21\u{00B0}',
            condition: 'Rainy'
        },
        {
            time: '3 PM',
            temp : '21\u{00B0}',
            condition: 'Rainy'
        },
        {
            time: '4 PM',
            temp : '20\u{00B0}',
            condition: 'Cloudy'
        },
        {
            time: '5 PM',
            temp : '21\u{00B0}',
            condition: 'Rainy'
        },
        {
            time: '6 PM',
            temp : '21\u{00B0}',
            condition: 'Rainy'
        },
    ]

    //create elements
    let container = document.createElement('div')
    let title = document.createElement('h1')


    //add classes 
    container.classList.add("hourlyForecast")

    //add text content 
    title.textContent = 'Hourly Forecast'


    //appends
    container.appendChild(title)

       //loop through data, create and append 
     forecast.forEach((hour) => {
        //create elements
        let card = document.createElement('div')
        let time = document.createElement('h1')
        let temp = document.createElement('p')
        let condition = document.createElement('p')

        //add text content
        time.textContent = hour.time
        temp.textContent = hour.temp
        condition.textContent = hour.condition

        //appends   
        card.appendChild(time)
        card.appendChild(temp)
        card.appendChild(condition)

        container.appendChild(card)
    })

    return container
}

const rightCard = () => {
    let container = document.createElement("div")

    //add classes
    container.classList.add("rightCard")


    //appends
    container.appendChild(header())
    container.appendChild(currentWeather())
    container.appendChild(hourly())

    return container
}



export { rightCard }