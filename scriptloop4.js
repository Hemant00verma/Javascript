// Write a program which enter any integer than calculate and print the sum of its digit.
let num = 1234; 
let sum = 0;

while (num > 0) {
    sum = sum+ num % 10; 
    num = Math.floor(number / 10); 
}

console.log("Sum of digits:", sum);
