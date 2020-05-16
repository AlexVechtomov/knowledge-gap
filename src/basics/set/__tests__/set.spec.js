const unique = require("../unique");

describe("Set", () => {
    test("unique", () => {
        let arr = ['a','a','a','b'];
        let result = ['a', 'b'];

        expect(unique(arr)).toStrictEqual(result);
    });

    test("unique array of objects", () => {
        let arr = [
            { a: 10, b: 10 },
            { a: 10, b: 10 },
            { a: 10, c: 10 },
            { a: 11, b: 10 }
        ];
        let result = [
            { a: 10, b: 10 },
            { a: 10, c: 10 },
            { a: 11, b: 10 }
        ];

        expect(unique(arr)).toStrictEqual(result);
    });
});