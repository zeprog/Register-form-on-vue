import { block } from '../utils'
import { TextBlock, TitleBlock } from './blocks'

export class Sidebar {
    constructor(selector, siteCallBack) {
        this.elem = document.querySelector(selector)
        this.update = siteCallBack

        this.init()
    }

    init() {
        this.elem.insertAdjacentHTML('afterbegin', this.template)
        let func = this.add
        this.elem.addEventListener('submit', func.bind(this))
    }

    get template() {
        return [
            block('text'),
            block('title')
        ].join('')
    }

    add(event) {
        event.preventDefault()

        const type = event.target.name
        const value = event.target.value.value
        const styles = event.target.styles.value

        const newBlock = type === 'text'
            ? new TextBlock(value, { styles })
            : new TitleBlock(value, { styles })

        event.target.value.value = ''
        event.target.styles.value = ''

        //debugger
        this.update(newBlock)


    }
}