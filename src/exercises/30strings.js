// Strings in JS can do more than just contain a string of characters. They have
// a length property that holds the string's length in characters:

function lengthOfHelloWorld(){
  return 'hello world'.length // 11
}

// This is the first time we've used a property of an object, so while we won't
// get into too much detail yet, keep in mind that the dot means you're
// accessing a property of that object. It can be used on "literals" like that
// "hello world" string up there, or on variables that are strings:

function lengthOfHelloWorldStill(){
  let myString = 'hello world'
  return myString.length
}

// There are lots of other properties on strings. For a full list see:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String#instance_methods
// One very common one is `includes` that tells us if a string includes another
// string:

function doesItIncludeHello(someString) {
  return someString.includes('Hello')
}

// Another common one is `substring`. That one lets you copy part of a string:

function copyFirstThreeChars(someString) {
  return someString.substring(0,3)
}

// You can also combine two strings using the + operator! So `'abc' + 'def' === 'abcdef'`.

// Make the tests pass!