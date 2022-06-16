"use strict";

import Datum from '../../../src/js/accounting/Datum';

test('toString to return the correct value',
    () => {
    let datum = Datum.make(17,3,2000);
    expect(datum.toString()).toBe("17/3/2000");
    })

test('toStringMonth to return the correct value',
    () => {
        let datum = Datum.make(17,3,2000);
        expect(datum.toStringMonth()).toBe("17/mar/2000");
    })
