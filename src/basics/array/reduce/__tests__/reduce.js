const sum = require('../sum');
const groupBy = require('../groupBy');
const mergeToArray = require('../mergeToArray');
const mergeToArrayUsingMap = require('../mergeToArray');

describe('Reduce', () => {
    test('sum', () => {
        let numArr = [5, -5, 3];
    
        expect(sum(0, numArr)).toBe(3);
    });

    test('groupBy', () => {
        let words = ['one', 'plan', 'three', 'apple' ];

        let result = {
            3: ['one'],
            4: ['plan'],
            5: ['three', 'apple']
        };

        expect(groupBy(words, 'length')).toStrictEqual(result);
    });

    test('mergeToArray', () => {
        let obj = {
            'Liverpool': 82,
            'Manchester City': 57,
            'Leicester': 53
        };
        let arr = [
            'Liverpool',
            'Manchester City',
            'Leicester'
        ];

        let result = [
            {
                name: 'Liverpool',
                points: 82
            },
            {
                name: 'Manchester City',
                points: 57
            },
            {
                name: 'Leicester',
                points: 53
            },
        ];

        expect(mergeToArray(arr, obj)).toStrictEqual(result);
        expect(mergeToArrayUsingMap(arr, obj)).toStrictEqual(result);
    });
});