import { row, col, css } from './utils'

function title(block) {
    const styles = block.options.styles
    return row(col(`<h1>${block.value}</h1>`), css(styles))
}

function image(block) {
    return row(`<img src='${block.value}'>`, css(block.options.styles))
}

function columns(block) {
    const html = block.value.map(item => col(item))
    return row(html.join(''), css(block.options.styles))
}

function text(block) {
    return row(col(`<p>${block.value}</p>`), css(block.options.styles))
}

export const template = {
    title,
    text,
    columns,
    image
}