const length = require('../shared/length');
const slice = require('../shared/slice');
/**
 * Returns the slice of array.
 * @param {Array} array The array to query.
 * @param {number} n The number of elements to take.
 * @returns {Array} Returns the slice of array.
 */
function take(array, n = 1) {
  let l = length(array);
  if (n > l) {
    return array;
  }
  return slice(array, 0, n);
}

module.exports = take;
