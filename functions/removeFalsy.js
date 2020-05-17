
exports.removeFalsy = ([...array]) => {
    if(!Array.isArray(array)) 
        throw new Error('provided argument is not array');

    return array.filter((element) => element);
}
