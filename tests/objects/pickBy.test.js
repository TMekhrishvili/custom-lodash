const pickBy = require('../../src/objects/pickBy');

var object = { 'a': 1, 'b': '2', 'c': 3 };

function predicate(value) {
    if (Number.isFinite(value)) return true;
    return false;
}

test('test for pickBy function', () => {
    expect(pickBy(object, predicate)).toStrictEqual({ 'a': 1, 'c': 3 });
});