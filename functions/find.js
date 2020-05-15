const required = () => {
    throw new Error('zero arguments passed');
}

exports.find = (obj = required(),valueToSearch) => {
    for(let i in obj) {
        if(obj[i] === valueToSearch)
                return i;
    }

    return -1;
}