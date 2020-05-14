const Accumulator = require("../accumulator");

describe("Constructor", () => {
    test("accumulator", () => {
        let numArr = [5, 4, 3, 2, 1, 0]
        let accumulator = new Accumulator(3, numArr);

        expect(accumulator.value).toBe(18);
    });
});