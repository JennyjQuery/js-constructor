import {col, row, css} from './utils'

const title = (block) => {
    const {tag = 'h1', styles} = block.options;
    return row(col(`<${tag}>${block.value}</${tag}}>`), css(styles))
};
const text = (block) => {
    const {tag = 'span', styles} = block.options;
    return row(col(`<${tag}>${block.value}</${tag}>`), css(styles))
};
const columns = (block) => {
    /*  обе эти записи равносильны
        const html = block.value.map(item => col);
        const html = block.value.map(item => col(item));*/
    const html = block.value.map(col).join('');
    return row(html, css(block.options.styles))
};
const image = (block) => {
    const { styles, alt = 'Картинка', imageStyle: is} = block.options;
    return row(`<img alt="${alt}" src="${block.value}" style="${css(is)}"/>`, css(styles))
};

export const _templates = {
    title,
    text,
    image,
    columns
};
