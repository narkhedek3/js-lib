const { concat }  = require('./concat');

exports.remove = function (array, ...values) {

    const patchedArray = [];

    if (arguments.length === 1)
        return array;

    values = concat(values);

    array.forEach(element => {

        const remove = values.some(value => value === element);

        if (!remove)
            patchedArray.push(element);

    });

    return patchedArray;
}