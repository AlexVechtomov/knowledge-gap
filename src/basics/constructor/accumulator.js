function Accumulator(startingValue, numArr) {
    this.value = startingValue;

    numArr.forEach(n => {
        this.value = this.value + n;
    });
}

module.exports = Accumulator;