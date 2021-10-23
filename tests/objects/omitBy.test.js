const omitBy = require('../../src/objects/omitBy');

var object = { 'a': 1, 'b': '2', 'c': 3 };

function predicate(value) {
    if (Number.isFinite(value)) return true;
    return false;
}

test('test for omitBy function', () => {
    expect(omitBy(object, predicate)).toStrictEqual({ 'b': '2' });
});