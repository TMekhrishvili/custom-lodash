/**
 * Creates an array with all falsey values removed.
 * The values false, null, 0, "", undefined, and NaN are falsey.
 * @param {Array} array The array to compact.
 * @returns {Array} Returns the new array of filtered values.
 */
function compact(array) {
    let index = 0, result = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i]) {
            result[index] = array[i];
            index++;
        }
    }
    return result;
}

module.exports = compact;
