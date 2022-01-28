// It's time to make functions that return functions! Yeah, weird, I know. So
// far the only functions we've been making are functions that we export. Now
// we're going to make functions that we don't export!

export function makeBadAdder() {
  return function(a,b) {
    return a+b
  }
}

// The above function returns a new function that adds two numbers together. You
// can call this function like this:
//
// let newFn = makeBadAdder()
// newFn(2,2)
//
// That would return `4`! You can also write the above like this:
// makeBadAdder()(2,2)
//
// This might look confusing but think about how it works. `makeBadAdder()`
// returns the adder function. Instead of putting that function in a variable,
// we can just call it immediately. You can think of it like the
// `makeBadAdder()` is being "replaced" by the adder function.
// Also notice that on line 6, the adder function has no name. This is because
// it doesn't need one. It's never exported, and its name never matters. You can
// put it in a variable if you'd like to refer to it by a name, or you can just
// call it immediately using the previous example. This is all valid! Functions
// only need names if they're being exported, or if they'll be used directly (as
// opposed to returned from another function or passed as an argument to another
// function.)

// Now make the tests pass!
