function encoder(string) {
  let count = 1;
  let encodedString = [];
  const encoded = string
    .split("")
    .reduce((accumulator, currentValue, index, arr) => {
      if (accumulator === currentValue && index !== arr.length - 1) {
        count += 1;
      } else {
        encodedString.push(accumulator, count);
        count = 1;
      }
      return currentValue;
    });
  console.log(encodedString.join(""));
}
encoder("XXXYYYYZZQQXX");
// X3Y4Z2Q2X2
