const topSalary = require("../salary");

describe("Destructuring", () => {
    test("salary", () => {
        let data = {
            "John": 100,
            "Pete": 300,
            "Mary": 250
        };
        let result = 'Pete';

        expect(topSalary(data)).toStrictEqual(result);
    });
});