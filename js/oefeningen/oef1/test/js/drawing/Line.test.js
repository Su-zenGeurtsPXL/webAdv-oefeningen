import Point from '../../../src/js/drawing/Point';
import Line from "../../../src/js/drawing/Line";

describe('constructor',
    () => {
        let point1 = new Point(1, 2);
        let point2 = new Point(3, 4);
        it('should generate a Line-object for valid args',
            () => {
                let line = new Line(point1, point2);
                expect(line).toBeInstanceOf(Line);
            }
        )
        it('should throw error when 1st parameter is not a point',
            () => {
                expect(() => {
                    new Point("a", point2);
                }).toThrow(Error);
            })
        it('should throw error when 2nd parameter is not a number',
            () => {
                expect(() => {
                    new Point(point1, "a");
                }).toThrow(Error);
            })
    })

test('getPoint1 to return the correct value',
    () => {
        let point1 = new Point(1, 2);
        let point2 = new Point(3, 4);
        let line = new Line(point1, point2);
        let point = line.point1;
        expect(point).toBe(point1);
    });

test('toString to return the correct value', () => {
    let point1 = new Point(1, 2);
    let point2 = new Point(3, 4);
    let line = new Line(point1, point2);
    let returnedString = line.toString();
    expect(returnedString).toBe("Line between (1,2) and (3,4)");
});
