function Calculator() {
  let calc = 0;

  return {
    getResult() {
      return calc;
    },
    add(num = 0) {
      calc += num;
      function addMore(numNext = 0) {
        calc += numNext;

        return addMore;
      }
      addMore.toString = () => calc;

      return addMore;
    },
    subtract(num = 0) {
      calc -= num;
      function subtractMore(numNext = 0) {
        calc -= numNext;

        return subtractMore;
      }
      subtractMore.toString = () => calc;

      return subtractMore;
    },
    divide(num = 1) {
      calc /= num;
      function divideMore(numNext = 1) {
        calc /= numNext;

        return divideMore;
      }
      divideMore.toString = () => calc;

      return divideMore;
    },
    multiply(num = 1) {
      calc *= num;
      function multiplyMore(numNext = 1) {
        calc *= numNext;

        return multiplyMore;
      }
      multiplyMore.toString = () => calc;

      return multiplyMore;
    },
    reset() {
      calc = 0;

      return calc;
    },
  };
}

const calculator = Calculator();

module.exports = calculator;
