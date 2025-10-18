import './css/styles.css'
import { leftCard } from './leftCard.js'
import { rightCard } from './rightCard.js'

let app = document.querySelector('.app')
console.log(app)
app.appendChild(leftCard())
app.appendChild(rightCard())




