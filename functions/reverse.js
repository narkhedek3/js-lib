

exports.reverse = (array) => {

  const reversedArray = [...array];
  let end = reversedArray.length - 1, start = 0;
  while (end > start) {
    [reversedArray[end], reversedArray[start]] = [reversedArray[start], reversedArray[end]];
    end--;
    start++;
  }

  return reversedArray;

}