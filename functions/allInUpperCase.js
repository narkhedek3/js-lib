

exports.allInUpperCase = (data) => {

    if (typeof data === typeof "")
        return data.toUpperCase();

    if (Array.isArray(data))
        return data.map(element => this.allInUpperCase(element));

    if (typeof data === typeof {}) {

        const upperCasedObject = {};

        const props = Object.getOwnPropertyNames(data);

        props.forEach(prop => upperCasedObject[prop] = this.allInUpperCase(data[prop]));

        return upperCasedObject;
    }

    return data;

}