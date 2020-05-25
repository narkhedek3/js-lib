
exports.contains = (data, key) => {

    if (Array.isArray(data) || typeof data === typeof "") {
        return data.indexOf(key) >= 0 ? true : false;
    }

    if (data && data.has) {
        return data.has(key);
    }

    if(typeof data === typeof {}) {
        const dataProps = Object.getOwnPropertyNames(data);
        return dataProps.some(props => data[props] === key);
    }

    return false;

}