/**
 * Creates a slice of array with n elements dropped from the beginning.
 * @param {Array} array The array to query.
 * @param {number} n The number of elements to drop.
 * @returns {Array} Returns the slice of array.
 */
function drop(array, n = 1) {

  const result = [];
  let index = 0;
  for (let i = n; i < array.length; i++) {
    result[index++] = array[i];
  }
  return result;
}

module.exports = drop;
