function totalRemainder(numbers) {
  let total = 0;
  for (let i = 0; i < numbers.length; i++) {
    total += numbers[i] % 3;
  }
  return total;
}
