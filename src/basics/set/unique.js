function unique(arr) {
    return typeof arr[0] !== "object"
        ? Array.from(new Set(arr))
        : Array.from(
            new Set(arr.map(o => JSON.stringify(o))),
            s => JSON.parse(s)
        );
}

module.exports = unique;