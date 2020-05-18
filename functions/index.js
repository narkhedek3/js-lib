const { chunk } = require('./chunk');
const { removeFalsy } = require('./removeFalsy');
const { find } = require('./find');
const { findLast } = require('./findLast');
const { unique } = require('./unique');
const { remove } = require('./remove');
const { concat } = require('./concat');
const { reverse } = require('./reverse');
const { equals } = require('./equals');
const { isArray } = require('./isArray');
const { contains } = require('./contains');

module.exports = (function () {
    return {
        chunk,
        removeFalsy,
        find,
        findLast,
        unique,
        remove,
        concat,
        reverse,
        equals,
        isArray,
        contains
    }
})();