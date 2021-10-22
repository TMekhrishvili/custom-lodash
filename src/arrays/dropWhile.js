const length = require('../shared/length');
const slice = require('../shared/slice');

/**
 * Creates a slice of array excluding elements dropped from the beginning.
 * Elements are dropped until predicate returns falsey.
 * The predicate is invoked with three arguments: (value, index, array).
 * @param {Array} array The array to query.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the slice of array.
 */
function dropWhile(array, predicate) {
  let l = length(array), index = 0;
  for (let i = 0; i < l; i++) {
    if (!predicate(array[i], i, array)) {
      index = i;
      break;
    }
  }
  if (index === 0) return [];
  else return slice(array, 0, index);
}

module.exports = dropWhile;
