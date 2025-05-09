// Sum of numbers
function sumOfNumber(n) {
    // Base case
    if (n === 1) {
        return 1;
    }
    // Recursive case
    return n + sumOfNumber (n - 1);
}
console.log(sumOfNumber(5));
console.log('---------------')

// Count down
function countDown(n) {
    if (n === 0) return;

    console.log(n);
    countDown(n - 1);
}
countDown(4);
console.log('---------------')

// Count up
function countUp(n) {
    if (n === 0) return;

    countUp(n - 1);
    console.log(n);
}
countUp(4);
console.log('---------------')

// Sum of digits
function sumDigits(n) {
    if (n < 10) return n;
    return n % 10 + sumDigits(Math.floor(n / 10));
}
console.log(sumDigits(1234));
console.log('---------------')

// Recursive digit counter
function countDigit(n) {
    if (n < 10) return 1;
    return 1 + countDigit(Math.floor(n / 10));
}
console.log(countDigit(1234));
console.log('---------------')

// Product of an array (recursively)
function productOfArray(arr) {
    if (arr.length === 0) return 1;
    return arr[0] * productOfArray(arr.slice(1));
}
console.log(productOfArray([5, 2, 1, 4]));