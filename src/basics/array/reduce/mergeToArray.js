function mergeToArray(arr, obj) {
    return arr.reduce((resArr, item) => {

        resArr.push({
            name: item,
            points: obj[item] || 0
        });

        return resArr; 
    }, []);
}

module.exports = mergeToArray;


function mergeToArrayUsingMap(arr, obj) {
    return arr.map(i => ({
        name: i,
        points: obj[i] || 0
    }))
}

module.exports = mergeToArrayUsingMap;