const chunck = require('../src/chunck');

test('array [1, 2, 3, 4, 5] is chunked into [[1, 2], [3, 4], [5]]', () => {
    expect(chunck([1, 2, 3, 4, 5], 2)).toStrictEqual([[1, 2], [3, 4], [5]]);
});

test('chunk empty array', () => {
    expect(chunck([], 5)).toStrictEqual([]);
});

test('chunk with size=0', () => {
    expect(chunck([1, 2, 3, 4, 5], 0)).toStrictEqual([]);
});