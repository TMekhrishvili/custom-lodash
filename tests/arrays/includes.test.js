const includes = require('../../src/arrays/includes');

test('test of "includes" function', () => {
    expect(includes([1, 2, 3], 1)).toStrictEqual(true);
});

test('test of "includes" function', () => {
    expect(includes([1, 2, 3], 1, 2)).toStrictEqual(false);
});

test('test of "includes" function', () => {
    expect(includes(['a', 'b', 'c', 'd'], 'b')).toStrictEqual(true);
});