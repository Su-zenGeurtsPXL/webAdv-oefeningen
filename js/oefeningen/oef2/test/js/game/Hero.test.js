import Point from "../../../src/js/game/Point";
import Hero from "../../../src/js/game/Hero";

test('moveLeft to subtract one from X value',
    () => {
        let point = new Point(1,2);
        let hero = new Hero(point);
        hero.moveLeft();
        expect(hero.getX()).toBe(0);
    })

test('moveRight to add one to X value',
    () => {
        let point = new Point(1,2);
        let hero = new Hero(point);
        hero.moveRight();
        expect(hero.getX()).toBe(2);
    })
