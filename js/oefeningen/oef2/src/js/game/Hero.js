"use strict"

import WereldObject from "./WereldObject";

export default class Hero extends WereldObject {
    constructor(location) {
        super(location);
    }

    moveUp() {
        this.setY(this.getY() + 1);
    }

    moveDown() {
        this.setY(this.getY() - 1);
    }

    moveRight() {
        this.setX(this.getX() + 1);
    }

    moveLeft() {
        this.setX(this.getX() - 1);
    }
}