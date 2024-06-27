for (let i = 1; i <= 10; i++) {
    console.log(i);
}
let i = 1;
while (i <= 10) {
    console.log(i);
    i++;
}
for (let i = 0; i <= 10; i += 2) {
    console.log(i);
}
let sum = 0;
for (let i = 1; i <= 10; i++) {
    sum += i;
}
console.log(sum);
for (let i = 1; i <= 10; i += 2) {
    console.log(i);
}
let age = 27;
if (age > 16) {
    console.log("You are an adult");
}
let score = 45;
if (score <= 50) {
    console.log("You failed the test");
}
let Name = "John";
if (Name === "John") {
    console.log("Hello, John");
}
let day = "Munday";
if (day !== "Saturday" && day !== "Friday") {
    console.log("It's a weekday");
}
let num = 4;
if (num % 2 === 0) {
    console.log("The number is even");
}
let x = 5;
if (x > 0) {
    console.log("x is a positive number");
}
let y = -5;
if (y < 0) {
    console.log("y is a negative number");
}
let gpa = 3.0;
if (gpa >= 3.0) {
    console.log("Congratulations, you have a good GPA!");
}
function isPrime(n) {
    if (n < 1) {
        return false
    }
    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            return false
        }
    }
    return true;
}
console.log(isPrime(10));
console.log(isPrime(7));
