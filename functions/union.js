
const { concat } = require('./concat');
const { unique } = require('./unique');

const mandatory = () => { throw new Error("less arguments are passed."); }

exports.union = (arr1 = mandatory(), arr2 = mandatory()) => {

    if(arr1 === null) return; 

    if (typeof arr1 !== typeof arr2)
        throw new Error('Type of both passed arguments must be same');


    if (Array.isArray(arr1)) {
        const mergedArray = concat(arr1, arr2);
        return unique(mergedArray);
    }

    if (arr1 && arr1.toString()) {
        const union = new Set();
        arr1.forEach(element => union.add(element));
        arr2.forEach(element => union.add(element));
        return union;
    }

    if (arr1 && arr1.set && arr1.has) {
        const union = new Map();
        arr2.forEach((value, key) => union.set(key, value));
        arr1.forEach((value, key) => union.set(key, value));
        return union;
    }

    if (typeof arr1 === typeof {}) {
        const arr1props = Object.getOwnPropertyNames(arr1);
        const arr2props = Object.getOwnPropertyNames(arr2);

        const mergedProps = concat(arr1props, arr2props);

        const union = {};


        mergedProps.forEach(prop => {
            if (arr1[prop] && arr2[prop])
                return union[prop] = arr1[prop];

            if (arr1[prop])
                return union[prop] = arr1[prop];

            return union[prop] = arr2[prop];
        });

        return union;
    }

    return "" + arr1 + arr2;

}