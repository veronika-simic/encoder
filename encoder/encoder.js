function encoder(string) {
  let count = 1;
  const myArrayWithNoDuplicates = string
    .split("")
    .reduce((accumulator, currentValue) => {
      if (!accumulator.includes(currentValue)) {
        count = 1;
        return [...accumulator, currentValue];
      } else {
        count += 1;
      }
      return [...accumulator,count];
    }, []);
  console.log(myArrayWithNoDuplicates);
}
encoder("XXXYYYYZZQXX");
// X3Y4Z2Q1X2
