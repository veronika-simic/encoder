module.exports = function encoder(req, res) {
  const { userInput } = req.body;
  let count = 1;
  const encodedString = userInput
    .split("")
    .reduce((acc, curr, index, array) => {
      if (curr === array[index + 1]) {
        count++;
        return acc;
      } else {
        acc.push(curr, count);
        count = 1;
        return acc;
      }
    }, []);

  return res.send(encodedString.join(""));
};
