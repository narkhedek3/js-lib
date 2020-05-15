
exports.concat = (...values) => {
    return add(values, []);
}

const add = (values, resultant) => {
    values.forEach((value) => {

        if (!Array.isArray(value))
            resultant.push(value);
        else {
            add(value, resultant);
        }

    });

    return resultant;
}