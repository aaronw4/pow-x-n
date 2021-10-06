function pow(x, n) {
    if (n === 0) {
        return 1
    } else if (n < 0) {
        return ( 1/x * pow(x, n + 1))
    } else {
        return (x * pow(x, n - 1))
    }
}

console.log(pow(2.1,-3))