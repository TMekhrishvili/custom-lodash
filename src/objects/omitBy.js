/**
 * this method creates an object composed of the own and inherited 
 * enumerable string keyed properties of object that predicate doesn't return truthy for. 
 * The predicate is invoked with two arguments: (value, key).
 * @param {Object} obj The source object.
 * @param {Function} predicate The function invoked per property.
 * @returns {Object} Returns the new object.
 */
function omitBy(obj, predicate) {
    let result = {};
    for (const [key, value] of Object.entries(obj))
        if (!predicate(value)) result = { ...result, [key]: value }
    return result;
}

module.exports = omitBy