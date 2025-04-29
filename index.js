// ESModules import
import getPosts, { getPostsLength } from "./postController.js";

console.log(getPosts());
console.log(`Posts Length: ${getPostsLength()}`);

// CommonJS import
// const { generateRandomNumber, celciusToFahrenheit } = require("./utils");

// console.log(`Random Number: ${generateRandomNumber()}`);
// console.log(`Celcius to Fahrenheit: ${celciusToFahrenheit(0)}`);
