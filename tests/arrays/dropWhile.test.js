const dropWhile = require('../../src/arrays/dropWhile');

var users = [
    { 'user': 'barney', 'active': false },
    { 'user': 'fred', 'active': false },
    { 'user': 'pebbles', 'active': true }
];

test('test of "dropWhile" function', () => {
    expect(dropWhile(users, function (o) { return !o.active; })).toStrictEqual([{ 'user': 'pebbles', 'active': true }]);
});

test('test of "dropWhile" function', () => {
    expect(dropWhile(users, { 'user': 'barney', 'active': false })).toStrictEqual([{ 'user': 'fred', 'active': false }, { 'user': 'pebbles', 'active': true }]);
});


test('test of "dropWhile" function', () => {
    expect(dropWhile(users, ['active', false])).toStrictEqual([{ 'user': 'pebbles', 'active': true }]);
});

test('test of "dropWhile" function', () => {
    expect(dropWhile(users, 'active')).toStrictEqual([
        { 'user': 'barney', 'active': false },
        { 'user': 'fred', 'active': false },
        { 'user': 'pebbles', 'active': true }
    ]);
});