"use strict";
// naam = Su-zen Geurts

export default class Dobbelsteen{
    #_zijde;
    constructor(zijde) {
        if (!(zijde == "1" || zijde == "2" || zijde == "3" || zijde == "4" || zijde == "5" || zijde == "R")) {
            throw new Error("Parameter is not a valid argument");
        }
        this.#_zijde = zijde;
    }

    getZijde() {
        return this.#_zijde;
    }

    getNumeriekeWaarde() {
        if (this.#_zijde == "R") {
            return 5;
        } else {
            return parseInt(this.#_zijde);
        }
    }
}
