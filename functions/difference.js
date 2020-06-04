import { equals } from './equals';
import { unique } from './unique';
import { union } from './union';

exports.difference = (arr1, arr2) => {

    if(equals(arr1,arr2)) return [];

    const unionOfArrays = union(arr1,arr2);

    const uniqueValues = unique(unionOfArrays);

    return uniqueValues;

}