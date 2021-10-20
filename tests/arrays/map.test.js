const map = require('../../src/arrays/map');

var users = [
    { 'user': 'barney' },
    { 'user': 'fred' }
];

function square(n) {
    return n * n;
}


test('test of "map" function', () => {
    expect(map([4, 8], square)).toStrictEqual([16, 64]);
});

test('test of "map" function', () => {
    expect(map({ 'a': 4, 'b': 8 }, square)).toStrictEqual([16, 64]);
});

test('test of "map" function', () => {
    expect(map(users, 'user')).toStrictEqual(['barney', 'fred']);
});