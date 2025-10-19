import './css/rightcard.css'
import rainSrc from './images/rain.png'
import windSrc from './images/wind.png'



const header = () => {
    const currentDate = new Date();
    const hour = currentDate.getHours()
    const min = currentDate.getMinutes()
    //create elemnts
    let container = document.createElement('div')
    let greeting = document.createElement('h1')
    let time = document.createElement('h1')


    //add classes
    container.classList.add("header")

    //add text content
    greeting.textContent = (hour < 12) ? 'Good Morning': 'Good Evening'
    time.textContent = `${hour}:${min} PM`


    container.appendChild(greeting)
    container.appendChild(time)

    return container
}

const currentWeather = (data) => {
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
    curTemp.textContent =`${data.temp}\u{00B0}`
    windSpeed.textContent = `${data.windspeed} mph`
    precipitation.textContent= `${data.precip} %`
    curCondition.textContent = data.condition
    feelsLike.textContent = `Feels like ${data.feelslike}\u{00B0}`


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

    //add id's 
    title.id = 'title'

    //appends
    container.appendChild(title)

    //loop through data, create and append 
     forecast.forEach((hour) => {
        //create elements
        let card = document.createElement('div')
        let time = document.createElement('h1')
        let temp = document.createElement('p')
        let condition = document.createElement('p')

        //add classes  
        card.classList.add("hourCard")

        //add id
        temp.id = 'temp'
        condition.id = 'condition'
        
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

const rightCard = (data) => {
    let container = document.createElement("div")

    //add classes
    container.classList.add("rightCard")


    //appends
    container.appendChild(header())
    container.appendChild(currentWeather(data))
    container.appendChild(hourly(data))

    return container
}



export { rightCard }