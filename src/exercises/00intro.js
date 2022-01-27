// In every exercise file that does not have .test.js in the name we must export
// functions to be tested. To figure out what they are called, look at the
// corresponding *.test.js file (in this case, 00intro.test.js) and note the
// names of the functions that are imported from this file at the top. You must
// define those in this file and export them.
//
// The first has been done for you.
export function helloWorld(){

}

// When you run `npm test` from the terminal, all the *.test.js files will run
// to see if you passed. Since all of them will be broken since we haven't done
// anything, you can just run the tests for a single file by typing `npm test
// 00`. Instead of '00' you can put the number of the exercise you are working
// on.

// If you run `npm test 00` now you will see a failed test because the "hi"
// function has not been exported like the helloWorld function. Fix that!
function hi() {}

// However, the test will still fail because it is expecting a third function
// called 'goodbye'. Make the test pass by adding that function!

// Once that's done, you can move on to the next numbered exercise.