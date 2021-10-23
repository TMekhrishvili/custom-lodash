const length = require('../shared/length');
/**
 * creates an object composed of the own and inherited 
 * enumerable property paths of object that are not omitted.
 * @param {Object} obj The source object.
 * @param {Array} array The property paths to omit.
 * @returns {Object} Returns the new object.
 */
function omit(obj, array) {
    let l = length(array);
    let result = { ...obj };
    for (let i = 0; i < l; i++) {
        let tmp = array[i];
        delete result[tmp];
    }
    return result;
}

module.exports = omit