



const prompt = require("prompt-sync")(); 

console.log("1. Area of Square");
console.log("2. Area of Circle");

let choice = parseInt(prompt("Enter your choice (1 or 2): "));

if (choice === 1) {
    let side = parseFloat(prompt("Enter the side of the square: "));
    let area = side * side;
    console.log(`Area of Square whose side is ${side} is ${area}`);
} else if (choice === 2) {
    let radius = parseFloat(prompt("Enter the radius of the circle: "));
    let area = Math.PI * radius * radius;
    console.log(`Area of Circle whose radius is ${radius} is ${area.toFixed(2)}`);
} else {
    console.log("Invalid choice! Please enter 1 or 2.");
}
