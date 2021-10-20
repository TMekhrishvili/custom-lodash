const length = require('./length');
const push = require('./push');

function slice(array, start, end) {
    let result = [];
    for (let i = start; i < end; i++) result = push(result, array[i]);
    return result
}

module.exports = slice