const dropWhile = require('../../src/arrays/dropWhile');

var users = [
    { 'user': 'barney', 'active': false },
    { 'user': 'fred', 'active': false },
    { 'user': 'pebbles', 'active': true }
];

test('test of "dropWhile" function', () => {
    expect(dropWhile(users, function (o) { return !o.active; })).toStrictEqual([{ 'user': 'barney', 'active': false },
    { 'user': 'fred', 'active': false }]);
});

var users1 = [
    { 'user': 'barney', 'active': true },
    { 'user': 'fred', 'active': false },
    { 'user': 'pebbles', 'active': true }
];

test('test of "dropWhile" function', () => {
    expect(dropWhile(users1, function (o) { return !o.active; })).toStrictEqual([]);
});