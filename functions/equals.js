

exports.equals = (obj1,obj2) => {

  const obj1props = Object.getOwnPropertyNames(obj1);
  const obj2props = Object.getOwnPropertyNames(obj2);

  if(obj1props.length !== obj2props.length) {
    return false;
  }

  return obj1props.every(prop => obj1[prop] === obj2[prop]);

}