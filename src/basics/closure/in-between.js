function inBetween(a, b) {
    return function(x) {
        return x >= a && x <= b;
    };
}

module.exports = inBetween;