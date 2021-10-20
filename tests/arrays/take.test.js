const take = require('../../src/arrays/take');

test('with default value of n', () => {
    expect(take(['a', 'b', 'c'])).toStrictEqual(['a']);
});

test('value of n is more than array length', () => {
    expect(take(['a', 'b', 'c'], 5)).toStrictEqual(['a', 'b', 'c']);
});

test('value of n is less than array length', () => {
    expect(take(['a', 'b', 'c', 'd'], 2)).toStrictEqual(['a', 'b']);
});

test('value of n is 0', () => {
    expect(take(['a', 'b'], 0)).toStrictEqual([]);
});