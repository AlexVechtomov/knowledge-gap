function sum(startingValue, numArr) {
    return numArr.reduce((sum, current) => {
        return sum + current;
    }, startingValue)
}

module.exports = sum;