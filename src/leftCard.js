import './css/leftcard.css'
import rainSrc from './images/rain.png'
import windSrc from './images/wind.png'


const header = () => {
    //create elements
    let container = document.createElement('div')
    let city = document.createElement("h1")
    let date = document.createElement("h1")


    //add classes
    container.classList.add("header")


    //text content
    city.textContent = 'City'
    date.textContent = '21.04.2025'

    //appends
    container.appendChild(city)
    container.appendChild(date)



    return container
}

const currentForecast = () => {
    //create elements
    let container = document.createElement('div')
    let left = document.createElement('div')
    let right = document.createElement('div')
    let curTemp = document.createElement('h1')
    let windSpeedContainer =  document.createElement('div')
    let windSpeed =  document.createElement('div')
    let precipitationContainer =  document.createElement('div')
    let precipitation =  document.createElement('p')
    let curCondition = document.createElement('p')
    let windImg = document.createElement('img')
    let rainImg = document.createElement('img')

    //add classes
    container.classList.add("currentForecast")
    windSpeedContainer.classList.add('windSpeedContainer')
    precipitationContainer.classList.add('precipitationContainer')


    //add src's
    windImg.src = windSrc
    rainImg.src = rainSrc

    ///add id's
    windSpeedContainer.id = 'windspeed'
    precipitationContainer.id = 'precip'
    curTemp.id = 'curTemp'
    curCondition.id = 'curCondition'

    //add text content
    curTemp.textContent ="20\u{00B0}"
    windSpeed.textContent = '6.1 mph'
    precipitation.textContent= '90 %'
    curCondition.textContent = 'Cloudy'

    //appends
    windSpeedContainer.appendChild(windImg)
    windSpeedContainer.appendChild(windSpeed)

    precipitationContainer.appendChild(rainImg)
    precipitationContainer.appendChild(precipitation)

    container.appendChild(curTemp)
    container.appendChild(windSpeedContainer)
    container.appendChild(curCondition)
    container.appendChild(precipitationContainer)

    return container
}   

const weeklyForecast = () => {
    //create elements
    let container = document.createElement('div')
    let forecast = [
        {
            day: 'Today',
            temp: '23\u{00B0}',
            condition: 'Mist'
        },
        {
            day: 'Tue',
            temp: '26\u{00B0}',
            condition: 'Sunny'
        },
        {
            day: 'Wed',
            temp: '21\u{00B0}',
            condition: 'Rainy'
        },
         {
            day: 'Thu',
            temp: '32\u{00B0}',
            condition: 'Rainy'
        },
         {
            day: 'Fri',
            temp: '31\u{00B0}',
            condition: 'Mist'
        },
         {
            day: 'Sat',
            temp: '15\u{00B0}',
            condition: 'Mist'
        }
    ]


    //add classes
    container.classList.add("weeklyForecast")
    
    //loop throught forecast array
    forecast.forEach((data) => {
        //create elements 
        let card = document.createElement('div')
        let day = document.createElement('h3')
        let temp = document.createElement('p')
        let condition = document.createElement('p')

        //add text content
        day.textContent = data.day
        temp.textContent = data.temp
        condition.textContent = data.condition

        //add ids's 
        temp.id = 'temp'
        condition.id = 'condition'
        
        //add class
        card.classList.add("weeklyCard")


        //appends
        card.appendChild(day)
        card.appendChild(temp)
        card.appendChild(condition)

        container.appendChild(card)

    })





    return container
}



const leftCard = () => {
    //create elements
    let container = document.createElement("div")

    //add classes   
    container.classList.add("leftCard")
    

    
    //appends
    container.appendChild(header())
    container.appendChild(currentForecast())
    container.appendChild(weeklyForecast())
    
    
    
    return container
}



export { leftCard }