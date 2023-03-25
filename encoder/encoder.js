function encoder(string) {
  let count = 1;
  let encodedString = [];
  string.split("").reduce((accumulator, currentValue, index, arr) => {
    if (accumulator === currentValue) {
      count += 1;
      if (index === arr.length - 1) {
        encodedString.push(accumulator, count);
      }
    } else {
      encodedString.push(accumulator, count);
      count = 1;
      if (index === arr.length - 1) {
        encodedString.push(currentValue, count);
      }
    }
    return currentValue;
  });
  console.log(encodedString.join(""));
}

encoder("XXXYYYYZZQQX");
console.log("-----------------------------------");
encoder("XYYYYZZQQ");
console.log("-----------------------------------");
encoder("XXXYYYYZZQQXX");
