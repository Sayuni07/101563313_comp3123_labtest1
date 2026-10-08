const lowerCaseWords = (arr) => {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(arr)) {
      reject(new Error('Input must be an array'));
      return;
    }
    const result = arr
      .filter((item) => typeof item === 'string')
      .map((word) => word.toLowerCase());
    resolve(result);
  });
};

const mixedArray = ['PIZZA', 10, true, 25, false, 'Wings'];

lowerCaseWords(mixedArray)
  .then((words) => console.log(words))
  .catch((err) => console.error(err.message));
  