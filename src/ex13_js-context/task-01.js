function Calculator() {
  this.result = 0;

  this.getResult = () => this.result;

  this.setState = (num = 0) => {
    this.result = num;

    return this;
  };

  this.fetchData = (callback) => {
    const promise = new Promise((resolve) => {
      callback(500);
      resolve(500);
    });
    promise.then((res) => { this.result = res; });
  };

  this.add = (num = 0) => {
    this.result += num;

    return this;
  };

  this.subtract = (num = 0) => {
    this.result -= num;

    return this;
  };

  this.multiply = (num = 0) => {
    this.result *= num;

    return this;
  };

  this.divide = (num = 1) => {
    if (num !== 0) {
      this.result /= num;
    } else return ("Can't divide by 0");

    return this;
  };

  this.reset = () => {
    this.result = 0;

    return this;
  };
}

const calculator = new Calculator();

module.exports = calculator;
