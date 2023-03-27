module.exports = function encoder(str) {
  let count = 1;
  const encodedString = str.split("").reduce((acc, curr, index, array) => {
    if (curr === array[index + 1]) {
      count++;
      return acc;
    } else {
      acc.push(curr, count);
      count = 1;
      return acc;
    }
  }, []);

  return encodedString.join("");
}
