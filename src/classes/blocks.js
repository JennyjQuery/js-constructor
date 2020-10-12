import {col, css, row} from "../utils";

class Block {
    constructor(value, options) {
        this.value = value;
        this.options = options;
    }

    toHTML() {
        throw new Error('Метод toHTML должен быть реализован')
    }
}

export class TitleBlock extends Block {
    constructor(value, options) {
        super(value, options)
    }

    toHTML() {
        const {tag = 'h1', styles} = this.options;
        return row(col(`<${tag}>${this.value}</${tag}}>`), css(styles))
    }
}

/*export class TextBlock extends Block {
    constructor(value, options) {
        super(value, options)
    }

    toHTML() {
        const {tag = 'span', styles} = this.options;
        return row(col(`<${tag}>${this.value}</${tag}>`), css(styles))
    }
}*/
export class TextBlock extends Block {
    constructor(value, options) {
        super(value, options)
    }

    toHTML() {
        const test = css(this.options.styles);
        return row(col(`<p>${this.value}</p>`), css(this.options.styles))
    }
}

export class ImageBlock extends Block {
    constructor(value, options) {
        super(value, options)
    }

    toHTML() {
        const {styles, alt = 'Картинка', imageStyle: is} = this.options;
        return row(`<img alt="${alt}" src="${this.value}" style="${css(is)}"/>`, css(styles))
    }
}

export class ColumnsBlock extends Block {
    constructor(value, options) {
        super(value, options)
    }

    toHTML() {
        const html = this.value.map(col).join('');
        return row(html, css(this.options.styles))
    }
}