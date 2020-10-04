import { model } from './model'
import './main.css'
import { template } from './template'


const content = document.querySelector('#content')

model.forEach(block => {
    const html = template[block.type]
    if (html) {
        content.insertAdjacentHTML('beforeend', html(block))
    }
})