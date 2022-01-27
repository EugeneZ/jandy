// It's time to make functions that return functions! Yeah, weird, I know. So
// far the only functions we've been making are functions that we export. Now
// we're going to make functions that we don't export!

function makeBadAdder() {
  return function(a,b) {
    return a+b
  }
}

// Now make the tests pass!