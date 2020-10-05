export function row(content, styles = '') {
    return `<div class="row" style=${styles}>${content}</div>`
}

export function col(content) {
    return `<div class="col-sm">${content}</div>`
}

export function css(styles = {}) {
    if (typeof styles === 'string') return styles
    const keys = Object.keys(styles)
    const array = keys.map(key => {
        return `${key}:${styles[key]}`
    })
    return array.join(';')
}

export function block(type) {
    return `
        <form name=${type}>
            <h5>${type}</h5>
            <div class="form-group">
                <input name="value" class="form-control form-control-sm" placeholder="value">
            </div>
            <div class="form-group">
                <input name="styles" class="form-control form-control-sm" placeholder="styles">
            </div>
            <button type="submit" class="btn btn-primary btn-sm">Добавить</button>
        </form>    
    `
}