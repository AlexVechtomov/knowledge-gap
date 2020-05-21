const factorial = require("../factorial");
const sumTo = require("../sum-to");
const fibonacci = require("../fibonacci");
const singleList = require("../single-list")

describe("Recursion", () => {
    test("factorial", () => {
        expect(factorial(6)).toBe(720);
    });

    test("sumTo", () => {
        expect(sumTo(100)).toBe(5050);
    });

    test("fibonacci", () => {
        expect(fibonacci(7)).toBe(13);
        expect(fibonacci(77)).toBe(5527939700884757);
    });

    test("single-linked list", () => {
        let data = {
            value: 1,
            next: {
                value: 2,
                next: {
                    value: 3,
                    next: {
                        value: 4,
                        next: null
                    }
                }
            }
        };

        let result = [1, 2, 3, 4];

        expect(singleList(data)).toStrictEqual(result);
    })
});