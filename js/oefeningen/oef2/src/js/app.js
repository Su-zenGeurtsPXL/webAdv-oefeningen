"use strict";

import Point from "./game/Point";
import Hero from "./game/Hero";

window.addEventListener('load', (event) => {
    let point = new Point(1,2);
    let hero = new Hero(point);
    let result = "";

    result = result + `Hero is at (${hero.getX()}, ${hero.getY()})` + '\n';

    hero.moveLeft();
    result = result + `Hero moved left` + '\n';
    result = result + `Hero is at (${hero.getX()}, ${hero.getY()})` + '\n';

    hero.moveRight();
    result = result + `Hero moved right` + '\n';
    result = result + `Hero is at (${hero.getX()}, ${hero.getY()})` + '\n';

    hero.moveUp();
    result = result + `Hero moved up` + '\n';
    result = result + `Hero is at (${hero.getX()}, ${hero.getY()})` + '\n';

    hero.moveDown();
    result = result + `Hero moved down` + '\n';
    result = result + `Hero is at (${hero.getX()}, ${hero.getY()})` + '\n';

    let preElement=document.createElement('pre');
    let textNode=document.createTextNode( result );

    preElement.appendChild(textNode) ;
    document.getElementById('output').appendChild(preElement);
});





