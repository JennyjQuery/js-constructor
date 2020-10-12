import {Site} from "./site";
import {model} from "../model";
import {Sidebar} from "./sidebar";

export class App {
    constructor(model) {
        this.model = model
    }

    init() {
        const site = new Site('#site');//создаем сайт
        site.render(this.model);//дабавляем рендер
        const updateCallback = (newBlock) => {//определяем функ-ю, которая следит за обновлением
            this.model.push(newBlock);
            site.render(this.model);
        };

        new Sidebar('#panel', updateCallback);
    }
}