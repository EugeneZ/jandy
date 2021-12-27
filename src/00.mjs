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
    return null;
  } else {
    return retval;
  }
};
let outbox = (val) => console.log(val);

//
// PROGRAM
//

let a = 1         // number
let b = 'banana'  // string
let c = true      // boolean
let d = false     // boolean
let e = null      // null
let f = undefined // undefined
let g = []        // array
let h = {}        // object
let i = function() {} // function

let obj1 = {
  name: 'Eugene',
  age: 35,
  isAProgrammer: true,
  bestSellingRecord: null,
  siblings: ['Yuliya', 'Ben'],
  friends: ['Jeremiah', 'Others'],
}


console.log(obj1.name) 
console.log(obj1.friends[0])

let obj2 = [
  {
    name: 'Eugene',
    age: 35,
    isAProgrammer: true,
    bestSellingRecord: null,
    siblings: ['Yuliya', 'Ben'],
    friends: ['Jeremiah', 'Others'],
  },
  {
    name: 'Eugene Clone',
    age: 3,
    isAProgrammer: false,
    bestSellingRecord: null,
    siblings: ['Yuliya Clone', 'Ben Clone'],
    friends: ['Jeremiah Clone', 'Others Clone'],
  }
]

console.log(obj2[1].friends[0])
console.log(obj2[0].siblings[1])

let arr1 = []

console.log(arr1.length)

console.log(obj1['name'])
console.log(obj1.name)

let input = process.argv[2] // Let's say I typed: 'name'

console.log(obj1.name)

let getExchangeRate = function(countryInput) {
  const response = fetch('kdsfldsjnflsdn')
  const data = response.json()

  for(let i = 0; i < data.data.length; i++) {
    if (data.data[i].country == countryInput) {
      return data.data[i].exchange_rate
    }
  }
}

if (getExchangeRate('Canada') > getExchangeRate('Zimbabwe')) {
  tradeSomeBitcoin()
}

const boardgames = [
  {
    
  },
  {}
]

const game = boardgames[Math.floor((Math.random() * boardgames.length))]