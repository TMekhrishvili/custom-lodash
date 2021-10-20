const find = require('../../src/arrays/find');

var users = [
    { 'user': 'barney', 'age': 36, 'active': true },
    { 'user': 'fred', 'age': 40, 'active': false },
    { 'user': 'pebbles', 'age': 1, 'active': true }
];


test('test of "find" function', () => {
    expect(find(users, function (o) { return o.age < 40; })).toStrictEqual([{ 'user': 'barney', 'age': 36, 'active': true }]);
});
test('test of "find" function', () => {
    expect(find(users, { 'age': 1, 'active': true })).toStrictEqual([{ 'user': 'pebbles', 'age': 1, 'active': true }]);
});
test('test of "find" function', () => {
    expect(find(users, ['active', false])).toStrictEqual([{ 'user': 'fred', 'age': 40, 'active': false }]);
});
test('test of "find" function', () => {
    expect(find(users, 'active')).toStrictEqual([{ 'user': 'barney', 'age': 36, 'active': true }]);
});