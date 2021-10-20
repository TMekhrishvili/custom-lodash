const push = require('../shared/push');

/**
 * Iterates over elements of collection,
 * returning an array of all elements predicate returns truthy for.
 * The predicate is invoked with three arguments: (value, index|key, collection).
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */
function filter(collection, predicate) {
  let result = [];
  for (let i = 0; i < collection.length; i++) {
    if (predicate(collection[i], i, collection)) {
      result = push(result, collection[i]);
    }
  }
  return result;
}

module.exports = filter;
