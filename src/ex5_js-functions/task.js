function Calculator() {
  let calc = 0;

  return {
    getResult() {
      return calc;
    },
    add(num) {
      calc += num;
      function addMore(numNext) {
        calc += numNext;

        return addMore;
      }
      addMore.toString = () => calc;

      return addMore;
    },
    subtract(num) {
      calc -= num;
      function subtractMore(numNext) {
        calc -= numNext;

        return subtractMore;
      }
      subtractMore.toString = () => calc;

      return subtractMore;
    },
    divide(num) {
      calc /= num;
      function divideMore(numNext) {
        calc /= numNext;

        return divideMore;
      }
      divideMore.toString = () => calc;

      return divideMore;
    },
    multiply(num) {
      calc *= num;
      function multiplyMore(numNext) {
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
