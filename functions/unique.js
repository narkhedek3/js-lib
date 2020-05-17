

exports.unique = ([...array]) => {
    if (!Array.isArray(array))
        throw new Error('provided argument is not array');

    const uniqueArray = [];

    array.forEach((element) => {
        if (uniqueArray.indexOf(element) === -1)
            uniqueArray.push(element);
    });

    return uniqueArray;

}