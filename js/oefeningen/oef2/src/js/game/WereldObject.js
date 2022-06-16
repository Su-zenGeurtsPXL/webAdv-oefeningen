"use strict";

import Point from "./Point";

export default class WereldObject {
    #location;
    constructor(location) {
        if (!(location instanceof Point)) {
            throw new Error("Parameter is not a point");
        }
        this.#location = new Point(location.x, location.y);
    }

    getX() {
        return this.#location.x;
    }

    getY() {
        return this.#location.y;
    }

    setX(x) {
        this.#location = new Point(x, this.getY());
    }

    setY(y) {
        this.#location = new Point(this.getX(), y);
    }
}