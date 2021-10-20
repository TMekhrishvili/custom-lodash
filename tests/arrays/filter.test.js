const filter = require('../../src/arrays/filter');

var users = [
    { 'user': 'barney', 'age': 36, 'active': true },
    { 'user': 'fred', 'age': 40, 'active': false }
];


test('test of "filter" function', () => {
    expect(filter(users, function (o) { return !o.active; })).toStrictEqual([{ 'user': 'fred', 'age': 40, 'active': false }]);
});

test('test of "filter" function', () => {
    expect(filter(users, { 'age': 36, 'active': true })).toStrictEqual([{ 'user': 'barney', 'age': 36, 'active': true }]);
});

test('test of "filter" function', () => {
    expect(filter(users, ['active', false])).toStrictEqual([{ 'user': 'fred', 'age': 40, 'active': false }]);
});

test('test of "filter" function', () => {
    expect(filter(users, 'active')).toStrictEqual([{ 'user': 'barney', 'age': 36, 'active': true }]);
});