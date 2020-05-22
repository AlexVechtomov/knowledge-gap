const inBetween = require("../in-between");
const sortBy = require("../sort");

describe("Closure", () => {
    test("inBetween", () => {
        let data = [1,2,3,4,5,6,7,8,9];
        let result = [3,4,5,6];

        expect(data.filter(inBetween(3,6))).toStrictEqual(result);
    });

    test("sortBy", () => {
        let data = [
            { name: "John", age: 20 },
            { name: "Pete", age: 18 },
            { name: "Ann", age: 19 }
        ];
        let result = [
            { name: "Pete", age: 18 },
            { name: "Ann", age: 19 },
            { name: "John", age: 20 }
        ];

        expect(data.sort(sortBy('age'))).toStrictEqual(result);
    });
});