/**
 * Creates an array of elements split into groups the length of `size`.
 * If `array` can't be split evenly, the final chunk will be the remaining
 * elements.
 * @param {Array} array The array
 * @param {number} size The length of each chunk
 * @returns {Array} Returns the new array of chunks.
 */

function chunk(array, size) {
  if (array.length === 0 || size === 0) return [];
  if (size === 1) return array;
  let index = 0;
  const result = [];
  while (index < array.length) {
    result.push(array.slice(index, index + size));
    index += size;
  }
  return result;
}

module.exports = chunk;
