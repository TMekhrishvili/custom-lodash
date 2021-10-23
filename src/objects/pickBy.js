/**
 * Creates an object composed of the object properties predicate returns truthy for. 
 * The predicate is invoked with two arguments: (value, key).
 * @param {Object} obj The source object.
 * @param {Function} predicate The function invoked per property.
 * @returns {Object} Returns the new object.
 */
function pickBy(obj, predicate) {
    let result = {};
    for (const [key, value] of Object.entries(obj))
        if (predicate(value)) result = { ...result, [key]: value }
    return result;
}

module.exports = pickBy