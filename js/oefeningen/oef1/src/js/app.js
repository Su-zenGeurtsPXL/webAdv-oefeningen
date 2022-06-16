"use strict";

import Point from './drawing/Point';
import ColorPoint from './drawing/ColorPoint';
import Line from "./drawing/Line";

window.addEventListener('load', (event) => {
    let point = new Point(1, 2);
    let preElement = document.createElement('pre');
    let textNode = document.createTextNode(point + '\n');

    let point2 = new Point(4, 5);
    let textNode2 = document.createTextNode(point2 + '\n');

    let colorPoint = new ColorPoint(1, 2, 'red');
    let textNode3 = document.createTextNode(colorPoint + '\n');

    let line = new Line(point, point2);
    let textNode4 = document.createTextNode(line + '\n');

    preElement.appendChild(textNode);
    preElement.appendChild(textNode2);
    preElement.appendChild(textNode3);
    preElement.appendChild(textNode4);
    document.getElementById('output').appendChild(preElement);
});





