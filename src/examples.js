import narr from "./index.js"

// [min, max)
const randomInt = (min, max) => Math.floor(Math.random() * (max - min)) + min
const characters = "abcdefghijklmonpqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"

console.log("Create an array of random integers:")
console.log(narr(10).map(() => randomInt(1, 100)))

console.log("")

console.log("Create a string of random characters:")
console.log(narr(20).reduce((carry) => carry + characters.substr(randomInt(0,characters.length),1), ""))
