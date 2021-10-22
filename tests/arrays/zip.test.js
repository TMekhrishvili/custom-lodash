const zip = require('../../src/arrays/zip');

test('test of "zip" function', () => {
    expect(zip(['a', 'b'], [1, 2], [true, false])).toStrictEqual([['a', 1, true], ['b', 2, false]]);
});

test('test of "zip" function', () => {
    expect(zip([5, 7], [9, 28])).toStrictEqual([[5, 9], [7, 28]]);
});