"use strict"

export default class Datum{
    static #MONTHS=['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep','oct', 'nov', 'dec'];
    #day;
    #month;
    #year
    constructor(day, month, year){
        this.#day=day;
        this.#month=month;
        this.#year=year;
    }

    get day() {
        return this.#day;
    }

    set day (day) {
        this.#day = day;
    }

    get month() {
        return this.#month;
    }

    set month (month) {
        this.#month = month;
    }

    get year() {
        return this.#year;
    }

    set year (year) {
        this.#year = year;
    }

    toString() {
        return `${this.#day}/${this.#month}/${this.#year}`;
    }

    toStringMonth() {
        return `${this.#day}/${this.getLongMonth()}/${this.#year}`;
    }

    getLongMonth(){
        return Datum.#MONTHS[this.#month-1];
    }

    static make(day, month, year) {
        return new Datum(day, month, year);
    }
}