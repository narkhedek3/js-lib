

exports.findLast = (obj, valueToSFind) => {
    let index = -1;
    for(let i in obj) {
        if(obj[i] === valueToSFind)
            index = i;
    }

    return index;
}