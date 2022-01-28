// Loops are another very important feature of programming languages. They allow
// you to run the same set of code over and over again until a condition is met.
// They look like this:
function infiniteLoop(){
  let counter = 0
  while (true) {
    counter = counter + 1
  }
  return counter
}

// IMPORTANT: The loop above is infinite! It will crash your program because it
// will go on forever. The condition is always true. Don't use it. Instead, inside the while condition,
// instead of `true` you should put a condition like inside an `if`. It follows
// the same rules. The only difference is that when an `if` body (the stuff
// inside `{}`) is done running, the program continues to the next line. In this
// case, with `while`, after the body runs, the condition is checked again, and
// if it's still true, the body runs again, then the condition is checked again,
// etc.
// So you can see that to prevent an infinite loop, something needs to happen
// inside your loop that eventually makes the condition false. Often this is
// just changing a variable. For example, here's an example of the above loop
// that's no longer going to run forever:

function loop(){
  let counter = 0
  while (counter < 10) {
    counter = counter + 1
  }
  return counter
}

// In these tests, for the test file to be able to check your work, you need to
// call a function that the test will pass to your function. If that sounds
// confusing, don't worry about it for now, we will cover it later. Here is an
// example:

function exampleLoop(fn){
  let counter = 0
  while (counter < 10) {
    fn(counter)
    counter = counter + 1
  }
  return counter
}

// Make the tests pass!
