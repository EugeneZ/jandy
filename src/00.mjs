//import * as readline from "readline";
//import { stdin as input, stdout as output } from "process";

//const rl = readline.createInterface({ input, output });

// const inbox = () =>
//   new Promise((resolve) => {
//     rl.question("Next value: ", (answer)=>{ resolve(answer)});
//   });

let __ = 2
const inbox = ()=>{ return process.argv[__++] }
const outbox = (val) => console.log(val);

//
// PROGRAM
//
