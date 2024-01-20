const fs = require("fs");

/*-----------write in file --------------- */
//Syncronous
// fs.writeFileSync("./test.txt", "hey there");

// //this overide the above in text file
// fs.writeFileSync("./test.txt", "hello world");

//Asynchronous
// fs.writeFile("./test.txt", "hello world Async", (error) => {
//   "hy";
// });

/*---------------- Reading File --------------- */
//read file synchronously, this give result with store in one variable
// const res = fs.readFileSync("./contect.txt", "utf-8");

// console.log(res);

//read file Asynchronously , this does not give result with store in one variable

// fs.readFile("./contect.txt", "utf-8", (err, result) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(result);
//   }
// });

//Asynchronous function always take a callback function

/*------------------append in file------------- */

// fs.appendFileSync("./test.txt", `hey their\n`);

// fs.appendFileSync("./test.txt", `${Date.now()}hey their\n`);

/*-------------copy one file into another--------- */
//fs.cpSync("./test.txt", "./copy.txt");

/*----------deleting the file---------- */
// fs.unlinkSync("./copy.txt");

/*----------------status of file--------- */
console.log(fs.statSync("./test.txt"));

/*-----------making directory/folder----------- */
fs.mkdirSync("my-docs");
