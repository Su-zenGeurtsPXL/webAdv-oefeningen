"use strict";

import Point from './Point';

export default class Line {
    constructor(point1, point2) {
        if (!(point1 instanceof Point)) {
            throw new Error("First parameter is not a point");
        }
        if (!(point2 instanceof Point)) {
            throw new Error("Second parameter is not a point");
        }
        this._point1 = point1;
        this._point2 = point2;
    }

    get point1() {
        return this._point1;
    }

    get point2() {
        return this._point2;
    }

    toString() {
        return `Line between ${this._point1.toString()} and ${this._point2.toString()}`;
    }
}
