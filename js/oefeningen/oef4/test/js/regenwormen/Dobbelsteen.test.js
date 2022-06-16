import Dobbelsteen from '../../../src/js/regenwormen/Dobbelsteen';
// naam = Su-zen Geurts

describe('constructor',
    () => {
        it('should generate a Point-object for valid args',
            () => {
                let dobbelsteen = new Dobbelsteen("1");
                expect(dobbelsteen.getZijde()).toBe("1");
                expect(dobbelsteen.getNumeriekeWaarde()).toBe(1);
            })
        it('should throw error when parameter is "S"',
            () => {
                expect(() => {
                    new Dobbelsteen("S");
                }).toThrow(Error);
            })
    })
