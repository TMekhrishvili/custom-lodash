/**
 * Returns the slice of array.
 * @param {Array} array The array to query.
 * @param {number} n The number of elements to take.
 * @returns {Array} Returns the slice of array.
 */
function take(array, n = 1) {
  if (n > array.length) {
    return array;
  } else {
    array.length = n;
    return array
  }
}

module.exports = take;
