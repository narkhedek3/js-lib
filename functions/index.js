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
const { allInUpperCase } = require('./allInUpperCase');
const { allInLowerCase } = require('./allInLowerCase');
const { union } = require('./union');
const { difference } = require('./difference');

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
        contains,
        allInUpperCase,
        allInLowerCase,
        union,
        difference
    }
})();