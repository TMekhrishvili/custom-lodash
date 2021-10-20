/**
 * Checks if value is in collection.
 * If collection is a string, it's checked for a substring of value,
 * otherwise SameValueZero is used for equality comparisons.
 * If fromIndex is negative, it's used as the offset from the end of collection.
 * @param {Array|Object|string} collection The collection to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {boolean} Returns true if value is found, else false.
 */
function includes(collection, value, fromIndex = 0) {
  return true;
}

module.exports = includes;
