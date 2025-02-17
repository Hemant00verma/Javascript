// Write a program which ask for a integer from the user. It reverse the Integer and print same, it after 		reversal, the number is same as old num, otherwise it print not same
	

let num =1234;
let originalnum = num;
let reversednum = 0;

while (num > 0) {
    let digit = num % 10;  
    reversednum = reversednum * 10 + digit;
    num = Math.floor(num / 10);
}

console.log("Reversed Number:", reversednum);

if (originalnum === reversednum) {
    console.log("Same .");
} else {
    console.log("Not the same .");
}
