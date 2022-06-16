"use strict";
// naam = Su-zen Geurts
import Dobbelsteen from './Dobbelsteen';
import Selectie from './Selectie';
import {indexOf} from "core-js/internals/array-includes";

export default class Stapel {
    #_selecties;
    constructor() {
        this.#_selecties =  [];
    }

    voegSelectieToe(selectie) {
        if (!(selectie instanceof Selectie)) {
            throw new Error("Parameter is not a selectie");
        }

        for (let i = 0; i < this.#_selecties.length; i++) {
            if (this.#_selecties[i].getDobbelsteen().getZijde() == selectie.getDobbelsteen().getZijde()) {
                throw new Error("Selectie is already in Selecties");
            }
        }

        this.#_selecties.push(selectie);
    }

    getNumeriekeWaarde() {
        let r = false;
        let sum = 0;
        for (let i = 0; i < this.#_selecties.length; i++) {
            sum += this.#_selecties[i].getNumeriekeWaarde();
            if (this.#_selecties[i].getDobbelsteen().getZijde() == "R") {
                r = true;
            }
        }
        return r ? sum : 0;
    }
}



