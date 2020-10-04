import { model } from './model'
import './main.css'


const content = document.querySelector('#content')

model.forEach(block => {
    content.insertAdjacentHTML('beforeend', html(block))
})