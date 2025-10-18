import './css/rightcard.css'



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



const rightCard = () => {
    let container = document.createElement("div")

    //add classes
    container.classList.add("rightCard")


    //appends
    container.appendChild(header())

    return container
}



export { rightCard }