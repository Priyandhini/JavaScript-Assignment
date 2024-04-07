// Variables 
let length = 5;
let width = 3;
let area = length * width;
console.log("Area of the rectangle:", area);

// Arithmetic Operators 
function calculator(num1, num2, operator) {
    switch (operator) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            return num1 / num2;
        default:
            return "Invalid operator";
    }
}
console.log("Arithmetic Operation Result:", calculator(10, 5, '+'));

// Accept User Input 
let userName = prompt("What is your name?");
console.log(`Hello, ${userName}!`);

// Type Conversion 
let numInput = Number(prompt("Enter a number:"));
let numToString = String(numInput);
let stringToNum = Number(numToString);
console.log("Original Number:", numInput);
console.log("Converted to String:", numToString);
console.log("Converted back to Number:", stringToNum);

// Constants 
const PI = Math.PI;
function calculateCircumference(radius) {
    return 2 * PI * radius;
}
console.log("Circumference of the circle:", calculateCircumference(5));

// Counter Program 
let counter = 0;
function increment() {
    counter++;
}
function decrement() {
    counter--;
}
function reset() {
    counter = 0;
}
console.log("Counter:", counter);
increment();
console.log("After Increment:", counter);
decrement();
console.log("After Decrement:", counter);
reset();
console.log("After Reset:", counter);

// Math Object 
function generateRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
console.log("Random Number:", generateRandom(1, 10));

// Random Number Generator 
let randomNumber = Math.floor(Math.random() * 100) + 1;
let guess;
do {
    guess = parseInt(prompt("Guess the number (1-100):"));
    if (guess < randomNumber) {
        console.log("Too low!");
    } else if (guess > randomNumber) {
        console.log("Too high!");
    } else {
        console.log("Congratulations! You guessed the number.");
    }
} while (guess !== randomNumber);

// If Statements 
function checkEvenOrOdd(number) {
    if (number % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
}
console.log("Check Even or Odd:", checkEvenOrOdd(5));

// Checked Property 
let checkbox = document.getElementById("myCheckbox");
if (checkbox.checked) {
    console.log("Checkbox is checked");
} else {
    console.log("Checkbox is unchecked");
}

// Ternary Operator 
let x = 10;
let result = x > 5 ? "Greater than 5" : "Less than or equal to 5";
console.log("Ternary Operator Result:", result);

// Switches 
function getDayOfWeek(dayNumber) {
    switch (dayNumber) {
        case 1:
            return "Monday";
        case 2:
            return "Tuesday";
        case 3:
            return "Wednesday";
        case 4:
            return "Thursday";
        case 5:
            return "Friday";
        case 6:
            return "Saturday";
        case 7:
            return "Sunday";
        default:
            return "Invalid day number";
    }
}
console.log("Day of the Week:", getDayOfWeek(3));

// String Methods 
function countVowels(sentence) {
    let vowels = 'aeiouAEIOU';
    let count = 0;
    for (let char of sentence) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    return count;
}
console.log("Number of Vowels:", countVowels("Hello World"));

// String Slicing 
function extractDomain(url) {
    return url.split('/')[2];
}
console.log("Domain Name:", extractDomain("https://www.example.com"));

// Method Chaining 
let text = "hello world";
let modifiedText = text.toUpperCase().split('').reverse().join('').replace('W', '!');
console.log("Modified Text:", modifiedText);

// Logical Operators 
function checkVotingEligibility(age, nationality) {
    return age >= 18 && nationality === "citizen";
}
console.log("Voting Eligibility:", checkVotingEligibility(20, "citizen"));

// Strict Equality 
function checkEquality(value1, value2) {
    if (value1 === value2) {
        return "Values are equal";
    } else {
        return "Values are not equal";
    }
}
console.log("Strict Equality Check:", checkEquality(5, "5"));

// While Loops 
let countdown = 10;
while (countdown >= 0) {
    console.log(countdown);
    countdown--;
}

// For Loops 
for (let i = 2; i <= 50; i += 2) {
    console.log(i);
}

// Number Guessing Game 
let minRange = parseInt(prompt("Enter the minimum range:"));
let maxRange = parseInt(prompt("Enter the maximum range:"));
let secretNumber = Math.floor(Math.random() * (maxRange - minRange + 1)) + minRange;
let userGuess;
do {
    userGuess = parseInt(prompt(`Guess the number (${minRange}-${maxRange}):`));
    if (userGuess < secretNumber) {
        console.log("Too low!");
    } else if (userGuess > secretNumber) {
        console.log("Too high!");
    } else {
        console.log("Congratulations! You guessed the number.");
    }
} while (userGuess !== secretNumber);

// Functions 
function addNumbers(num1, num2) {
    return num1 + num2;
}
console.log("Sum of Two Numbers:", addNumbers(5, 3));

// Variable Scope 
let globalVariable = "I am a global variable";

function scopeDemo() {
    let localVariable = "I am a local variable";
    console.log("Inside function:", globalVariable); 
    console.log("Inside function:", localVariable); 
}

scopeDemo();
console.log("Outside function:", globalVariable); 

// Temperature Conversion Program 
function celsiusToFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}

console.log("Celsius to Fahrenheit:", celsiusToFahrenheit(30));
console.log("Fahrenheit to Celsius:", fahrenheitToCelsius(86));

// Arrays 
let numbersArray = [1, 2, 3, 4, 5];
let sum = numbersArray.reduce((acc, curr) => acc + curr, 0);
console.log("Sum of Array Elements:", sum);

// Spread Operator 
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let concatenatedArray = [...arr1, ...arr2];
console.log("Concatenated Array:", concatenatedArray);

// Rest Parameters 
function sumAll(...numbers) {
    return numbers.reduce((acc, curr) => acc + curr, 0);
}
console.log("Sum of Numbers:", sumAll(1, 2, 3, 4, 5));

// Dice Roller Program 
function rollDice(sides) {
    return Math.floor(Math.random() * sides) + 1;
}
console.log("Rolled Dice:", rollDice(6));

// Random Password Generator 
function generatePassword(length) {
    let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let password = "";
    for (let i = 0; i < length; i++) {
        password += charset.charAt(Math.floor(Math.random() * charset.length));
    }
    return password;
}
console.log("Random Password:", generatePassword(8));

// Callbacks 
function delayedExecution(callback, delay) {
    setTimeout(callback, delay);
}

function callbackFunction() {
    console.log("Executing callback function after a delay");
}

delayedExecution(callbackFunction, 2000);

// forEach() 
let array = [1, 2, 3, 4, 5];
array.forEach(element => console.log(element));

// map() 
let doubledArray = array.map(element => element * 2);
console.log("Doubled Array:", doubledArray);

// filter() 
let evenNumbers = array.filter(element => element % 2 === 0);
console.log("Even Numbers:", evenNumbers);

// reduce() 
let sumOfArray = array.reduce((acc, curr) => acc + curr, 0);
console.log("Sum of Array:", sumOfArray);

// Function Expressions 
let greet = function() {
    console.log("Hello from function expression");
};
greet();

// Arrow Functions 
let multiply = (a, b) => a * b;
console.log("Multiplication Result:", multiply(5, 3));
