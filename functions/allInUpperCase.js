

exports.allInUpperCase = (data) => {

    if (typeof data === typeof "")
        return data.toUpperCase();

    if (Array.isArray(data))
        return data.map(element => this.allInUpperCase(element));

    if (typeof data === typeof {}) {

        const uppperCasedObject = {};

        const props = Object.getOwnPropertyNames(data);

        props.forEach(prop => uppperCasedObject[prop] = this.allInUpperCase(data[prop]));

        return uppperCasedObject;
    }

    return data;

}