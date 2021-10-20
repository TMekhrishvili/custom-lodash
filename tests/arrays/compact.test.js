const compact = require('../../src/arrays/compact');

test('compact array [1, false, "hello", undefined, null]', () => {
    expect(compact([1, false, 'hello', undefined, null])).toStrictEqual([1, 'hello']);
});

test('compact array ["some str", false, [], {}, null]', () => {
    expect(compact(["some str", false, [], {}, null])).toStrictEqual(["some str", [], {}]);
});