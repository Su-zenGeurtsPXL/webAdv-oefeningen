"use strict"

import Datum from "./accounting/Datum";

window.addEventListener('load', (event) => {
    let datum = Datum.make(17,3,2000);

    let result = "";
    result = result + `Geboortedatum: ${datum.toString()}` + '';
    result = result + ` of ${datum.toStringMonth()}`;

    let preElement=document.createElement('pre');
    let textNode=document.createTextNode( result );

    preElement.appendChild(textNode) ;
    document.getElementById('output').appendChild(preElement);
});