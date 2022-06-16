import Dobbelsteen from '../../../src/js/regenwormen/Dobbelsteen';
import Selectie from '../../../src/js/regenwormen/Selectie';
import Stapel from '../../../src/js/regenwormen/Stapel';
// naam = Su-zen Geurts

test('voegSelectieToe to throw an error when the parameter is already in Selecties',
    () => {
        let stapel = new Stapel();
        let dobbelsteen = new Dobbelsteen(3);
        let selectie1 = new Selectie(3, dobbelsteen);
        stapel.voegSelectieToe(selectie1);
        let selectie2 = new Selectie(2, dobbelsteen);
        expect(() => {
            stapel.voegSelectieToe(selectie2);
        }).toThrow(Error);
    })

test('getNumeriekeWaarde to return the correct value',
    () => {
        let stapel = new Stapel();
        let dobbelsteen1 = new Dobbelsteen(1);
        let dobbelsteen2 = new Dobbelsteen(2);
        let selectie1 = new Selectie(3, dobbelsteen1);
        let selectie2 = new Selectie(2, dobbelsteen2);
        stapel.voegSelectieToe(selectie1);
        stapel.voegSelectieToe(selectie2);
        expect(stapel.getNumeriekeWaarde()).toBe(0);
    })




