// example.js
import sum from './sum';

export default {
    square(a, b) {
        return a * b;
    },
    async asyncSquare(a, b) {
        return await a * b; 
    },
    sum(a, b) {
        return sum(a, b);
    },
    class: new (class Bar {
        constructor() {
            this.array = [1, 2, 3];
        }

        foo() { }
    })(),
    object: {
        baz: 'test',
        bar: {
            fiz: 1,
            buzz: [1, 2, 3],
        },
    },
    array: [1, 2, 3],
    number: 1234,
    string: 'baz',
    boolean: true,
    symbol: Symbol.for('a.b.c'),
};
