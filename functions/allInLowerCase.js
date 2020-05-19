

exports.allInLowerCase = (data) => {

    if (typeof data === typeof "")
        return data.toLowerCase();

    if (Array.isArray(data))
        return data.map(element => this.allInLowerCase(element));

    if (typeof data === typeof {}) {

        const LowerCasedObject = {};

        const props = Object.getOwnPropertyNames(data);

        props.forEach(prop => LowerCasedObject[prop] = this.allInLowerCase(data[prop]));

        return LowerCasedObject;
    }

    return data;

}