import { model } from './model'
import { Content } from './classes/content'
import './main.css'

const content = new Content('#content')

content.render(model)