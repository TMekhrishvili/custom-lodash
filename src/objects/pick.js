const length = require('../shared/length');
/**
 * Creates an object composed of the picked object properties.
 * @param {Object} obj The source object.
 * @param {Array} array The property paths to pick.
 * @returns {Object} Returns the new object.
 */
function pick(obj, array) {
    let l = length(array);
    let result = {};
    for (let i = 0; i < l; i++) {
        let tmp = array[i];
        result = { ...result, [tmp]: obj[tmp] }
    }
    return result;
}

module.exports = pick