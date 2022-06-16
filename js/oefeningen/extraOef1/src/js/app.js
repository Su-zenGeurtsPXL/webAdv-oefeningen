"use strict";

import PersonService from './services/PersonService';
import PersonRepository from './repositories/PersonRepository';

window.addEventListener('load', async (event) => {
    let personRepository  = new PersonRepository();
    let personService= new PersonService(personRepository);
    let name = await personService.retrieveNameById(1);
    let names = await personService.findNames();
    let preElement=document.createElement('pre');
    let textNode=document.createTextNode( name );
    let textNode2=document.createTextNode( names );
    preElement.appendChild(textNode) ;
    preElement.appendChild(textNode2) ;
    document.getElementById('output').appendChild(preElement);
});





