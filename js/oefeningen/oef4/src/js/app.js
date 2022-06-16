"use strict";
// naam = 
import Dobbelsteen from './regenwormen/Dobbelsteen';
import Selectie from './regenwormen/Selectie';
import Stapel from './regenwormen/Stapel';

window.addEventListener('load', (event) => {
    let dobbelsteen1 = new Dobbelsteen('1');
    document.write(`Zijde: ${dobbelsteen1.getZijde()}<br>`);                          //'1'
    document.write(`Numerieke waarde: ${dobbelsteen1.getNumeriekeWaarde()}<br><br>`);   //1
    try{
        let dobbelsteen2 = new Dobbelsteen('S');
    } catch (error){
        document.write("Dobbelsteen met zijde S geeft een error\<br>\<br>");              //error1
    }
    let selectie1=new Selectie(3, dobbelsteen1);
    document.write(`3 maal zijde 1: ${selectie1.getNumeriekeWaarde()}<br>`);          //3
    try{
        let selectie2 = new Selectie(3,'mis');
    } catch (error){
        document.write("Selectie met een niet-dobbelsteen geeft een error<br><br>");    //error2
    }
    let stapel = new Stapel();
    stapel.voegSelectieToe(selectie1);
    document.write(`De numerieke waarde: ${stapel.getNumeriekeWaarde()} (omdat de zijde R nog niet in de stapel zit)<br>`);       //0
    let dobbelsteen2 = new Dobbelsteen('R');
    let selectie2=new Selectie(2, dobbelsteen2);
    stapel.voegSelectieToe(selectie2);
    document.write(`De numerieke waarde: ${stapel.getNumeriekeWaarde()} (som van alle numerieke waardes van de selecties)<br>`);       //13
    let selectie3=new Selectie(1, new Dobbelsteen('R'));
    try{
        stapel.voegSelectieToe(selectie3);
    } catch (error){
        document.write("Stapel met een dubbele waarde geeft een error"); //error3
    }
});





