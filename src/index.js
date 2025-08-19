module.exports = function check(str, bracketsConfig) {
  const arr = [];
  const pair = {};

  bracketsConfig.forEach(([start, finish]) => {
    pair[start] = finish;
  });

  for (let i = 0; i < str.length; i += 1) {
    const item = str[i];
    if (item in pair) {
      if (pair[item] === item && arr[arr.length - 1] === item) {
        arr.pop();
      } else {
        arr.push(item);
      }
    } else {
      const last = arr.pop();
      if (pair[last] !== item) return false;
    }
  }
  return arr.length === 0;
};
