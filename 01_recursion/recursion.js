function factorial(n) {
    if (n === 1) return 1; // Base case
    return n * factorial(n - 1); // Recursive case
}
console.log(factorial(5));