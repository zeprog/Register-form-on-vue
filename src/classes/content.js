export class Content {
    constructor(selector) {
        this.elem = document.querySelector(selector)
    }

    render(model) {
        model.forEach(block => {
            this.elem.insertAdjacentHTML('beforeend', html(block))
        })
    }
}