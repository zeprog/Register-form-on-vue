import img from './assets/img/city.jpg'

export const model = [
    {
        type: 'title', value: 'Конструктор сайтов', options: {
            styles: {
                background: '#aedff3',
                padding: '1rem',
                'text-align': 'center'
            }
        }
    },
    {
        type: 'image', value: img, options: {
            styles: {
                display: 'flex',
                'justify-content': 'center',
                margin: '10px'
            }
        }
    },
    {
        type: 'columns', value: [
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit veniam perspiciatis excepturi dignissimos incidunt necessitatibus?',
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit veniam perspiciatis excepturi dignissimos incidunt necessitatibus?',
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit veniam perspiciatis excepturi dignissimos incidunt necessitatibus?'
        ], options: {
            styles: {
                background: '#27a9e6',
                padding: '1rem'
            }
        }
    },
    {
        type: 'text', value: 'Как им пользоваться? Просто введите в поле слева нужную информацию.', options: {
            styles: {
                'text-align': 'center',
                padding: '1rem',
                'font-weight': 'bold',
                'font-size': '1rem'
            }
        }
    }
]