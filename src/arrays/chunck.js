const length = require("../shared/length");
const push = require("../shared/push");

/**
 * Creates an array of elements split into groups the length of `size`.
 * If `array` can't be split evenly, the final chunk will be the remaining
 * elements.
 * @param {Array} array The array
 * @param {number} size The length of each chunk
 * @returns {Array} Returns the new array of chunks.
 */
function chunk(array, size) {
  let l = length(array);
  if (l === 0 || size === 0) return [];
  let result = [], outerIndex = 0, innerArr = [];
  for (let i = 0; i < l; i++) {
    let index = i % size;
    innerArr[index] = array[i];
    if (index === size - 1 || i === l - 1) {
      result = push(result, innerArr);
      innerArr = [];
      outerIndex++;
    }
  }
  return result;
}

module.exports = chunk;
