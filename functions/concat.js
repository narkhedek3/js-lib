
exports.concat = (...values) => {
    if(values === null) return;
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