function topSalary(data) {
    let max = 0;
    let maxName = null;

    for (let [name, salary] of Object.entries(data)) {
        if (max < salary) {
            max = salary;
            maxName = name;
        }
    }  
    return maxName;
}


module.exports = topSalary;