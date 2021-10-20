const drop = require('../../src/arrays/drop');

test('with default value of n', () => {
    expect(drop([1, 2, 3])).toStrictEqual([2, 3]);
});

test('value of n is more than array length', () => {
    expect(drop(['a', 'b', 'c', 'd'], 5)).toStrictEqual([]);
});

test('value of n is less than array length', () => {
    expect(drop([1, 2, 3], 2)).toStrictEqual([3]);
});

test('value of n is 0', () => {
    expect(drop([1, 2, 3], 0)).toStrictEqual([1, 2, 3]);
});