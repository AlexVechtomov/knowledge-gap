function sortBy(field) {
    return (a, b) => a[field] > b[field] ? 1 : -1;
}

module.exports = sortBy;