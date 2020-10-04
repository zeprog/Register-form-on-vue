import img from './assets/img/city.jpg'
import {TitleBlock, ImageBlock, ColumnsBlock, TextBlock} from './classes/blocks'

export const model = [
    new TitleBlock('Конструктор сайтов', {
        styles: {
            background: '#aedff3',
            padding: '1rem',
            'text-align': 'center'
        }
    }),
    new ImageBlock(img, {
        styles: {
            display: 'flex',
            'justify-content': 'center',
            margin: '10px'
        }
    }),
    new ColumnsBlock([
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit veniam perspiciatis excepturi dignissimos incidunt necessitatibus?',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit veniam perspiciatis excepturi dignissimos incidunt necessitatibus?',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit veniam perspiciatis excepturi dignissimos incidunt necessitatibus?'
    ], {
        styles: {
            background: '#27a9e6',
            padding: '1rem'
        }
    }),
    new TextBlock('Как им пользоваться? Просто введите в поле слева нужную информацию.', {
        styles: {
            'text-align': 'center',
            padding: '1rem',
            'font-weight': 'bold',
            'font-size': '1rem'
        }
    })
]