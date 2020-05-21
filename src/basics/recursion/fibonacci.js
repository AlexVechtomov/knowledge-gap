function fibonacci(n) {
    //return n <= 1 ? n : fibonacci(n - 1) + fibonacci(n - 2);  LOW PERFORMANCE 

    let a = 1;
    let b = 1;
    for (let i = 3; i <= n; i++) {
        let c = a + b;
        a = b;
        b = c;
    }

    return b;
}

module.exports = fibonacci;