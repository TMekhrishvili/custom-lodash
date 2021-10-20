/**
 * Creates an array of elements split into groups the length of `size`.
 * If `array` can't be split evenly, the final chunk will be the remaining
 * elements.
 * @param {Array} array The array
 * @param {number} size The length of each chunk
 * @returns {Array} Returns the new array of chunks.
 */

function chunk(array, size = 1) {
  if (array.length === 0 || size === 0) return [];
  if (size === 1) return array;
  let result = [], outerIndex = 0, innerArr = [];
  for (let i = 0; i < array.length; i++) {
    let index = i % size;
    innerArr[index] = array[i];
    if (index === size - 1 || i === array.length - 1) {
      result[outerIndex] = [...innerArr];
      innerArr.length = 0; // clearing array
      outerIndex++;
    }
  }
  return result;
}

module.exports = chunk;
