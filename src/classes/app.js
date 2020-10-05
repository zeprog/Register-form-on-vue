import { Sidebar } from './sidebar'
import { Content } from './content'

export class App {
    constructor(model) {
        this.model = model
    }

    init() {
        const content = new Content('#content')
        const siteCallBack = newBlock => {
            this.model.push(newBlock)
            content.render(this.model)
        }
        const sidebar = new Sidebar('#sidebar', siteCallBack)

        content.render(this.model)
    }
}