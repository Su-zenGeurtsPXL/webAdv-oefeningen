"use strict";

import PersonRepository from '../repositories/PersonRepository';
import {forEach} from "core-js/stable/dom-collections";
export default class PersonService{

    #personRepository;

    constructor( personRepository ){
        if (! (personRepository instanceof PersonRepository)){
            throw new Error('Not a PersonRepository');
        }
        this.#personRepository = personRepository;
    }

    async retrieveNameById(id){
        let person = await this.#personRepository.findById(id);
        return person.name.toUpperCase();
    }

    async findNames(){
        let persons = await this.#personRepository.find();
        let personNames = [];
        let name = "";
        for (let i = 0; i < persons.length; i++) {
            name = persons[i].name.toUpperCase();
            personNames.push(name);
        }
        return personNames.sort();
    }

}
