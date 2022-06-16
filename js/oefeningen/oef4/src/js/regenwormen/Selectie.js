"use strict";
// naam = Su-zen Geurts
import Dobbelsteen from './Dobbelsteen';

export default class Selectie{
    #_aantal;
    #_dobbelsteen;
    constructor(aantal, dobbelsteen) {
        if (!(dobbelsteen instanceof Dobbelsteen)){
            throw new Error("Second parameter is not a dobbelsteen");
        }
        this.#_aantal = aantal;
        this.#_dobbelsteen = dobbelsteen;
    }

    getAantal() {
        return this.#_aantal;
    }

    getDobbelsteen() {
        return this.#_dobbelsteen;
    }

    getNumeriekeWaarde() {
        return this.getAantal() * this.getDobbelsteen().getNumeriekeWaarde();
    }
}
