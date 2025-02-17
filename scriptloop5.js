// Write a program which enter any integer than calculate and print its factorial.
let number = 5; 
let factorial = 1;

for (let i = number; i > 0; i--) {
    factorial =factorial* i;
}

console.log("Factorial:", factorial);
