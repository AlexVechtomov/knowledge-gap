const sum = require("../sum");

describe("Reduce", () => {
    test("sum", () => {
        let numArr = [5, -5, 3]
        expect(sum(0, numArr)).toBe(3);
    });
});