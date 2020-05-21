function singleList(data, res = []) {
    res.push(data.value)
    return data.next ? singleList(data.next, res) : res;
}

module.exports = singleList;