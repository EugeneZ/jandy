//import * as readline from "readline";
//import { stdin as input, stdout as output } from "process";

//const rl = readline.createInterface({ input, output });

// const inbox = () =>
//   new Promise((resolve) => {
//     rl.question("Next value: ", (answer)=>{ resolve(answer)});
//   });

let __ = 2;
let inbox = () => {
  let retval = process.argv[__++];
  if (!retval) {
    return null
  } else {
    return retval
  }
};
let outbox = (val) => console.log(val);

//
// PROGRAM
//

// for (let c = 0; c < 2;  ) {
//   let item = inbox()
//   let secondItem = inbox()
//   outbox(secondItem)
//   outbox(item)
// }

while(hasInbox()) {
  nextInbox = inbox()
  if (nextInbox !== 'Eugene') {
    outbox('Hello ' + nextInbox + '!')
  } else {
    outbox('Grrrrr...')
  }
}

let nextInbox
while(nextInbox !== null) do {
  nextInbox = inbox()
  if (nextInbox !== 'Eugene') {
    outbox('Hello ' + nextInbox + '!')
  } else {
    outbox('Grrrrr...')
  }
}