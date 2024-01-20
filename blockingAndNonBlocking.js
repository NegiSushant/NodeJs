const fs = require("fs");
const os = require("os");

console.log(os.cpus().length);
//Blocking --->> Synchronous
console.log("1");
const res = fs.readFileSync("./test.txt", "utf-8");
console.log(res);
console.log("2");
console.log("3");

//output

// hey their
// hey their
// 1705760867573hey their
// hey their
// 1705760962967hey their
// hey their
// 1705761054390hey their
// hey their
// 1705761140987hey their

// 2
// 3

/*-------Non blocking ------- */

console.log("1");
fs.readFile("./contect.txt", "utf-8", (err, res) => {
  console.log(res);
});

console.log("2");
console.log("3");

// //output
// 1
// 2
// 3
// sushant: +912222222

//default threadpool size = 4;
//Max size=  depends on the size of the cpus of machine
