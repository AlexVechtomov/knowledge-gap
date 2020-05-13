const factorial = require("../factorial");

describe("Recursion", () => {
    test("factorial", () => {
        expect(factorial(6)).toBe(720);
    });
});