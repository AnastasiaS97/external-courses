function primeNumber(value) {
  let divisor;
  let prime = true;
  if (value > 1000) {
    return 'Данные неверны';
  }
  switch (value) {
    case 0:
    case 1:
      return 'Не причисляется ни к простым, ни к составным числам';
    default:
      for (divisor = 2; divisor < value; divisor += 1) {
        if (value % divisor === 0) {
          prime = false;
          break;
        }
      }
      if (prime) {
        return `Число ${value} - простое число`;
      }

      return `Число ${value} - составное число`;
  }
}

module.exports = primeNumber;
