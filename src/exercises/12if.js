// In order to make programs that act differently depending on the input, we
// must use branches. The main way to branch is the if statement:

function simpleIf(x) {
  if (x) {
    return 'good'
  }

  return 'bad'
}

function simpleIf2(x) {
  if (x) {
    return 'good'
  } else {
    return 'bad'
  }
}

// There is also another way to branch if you want to save space. It's called a conditional:

function simpleConditional(x) {
  return x ? 'good' : 'bad'
}

// As you may have figured out, if the expression between the parentheses is
// true, then the code between the {} is run. If it's not, the code is skipped.
// If there's an else statement, then that code is run instead. You can even
// have multiple expressions:

function complexIf(x) {
  if (x === 1) {
    return 'one'
  } else if (x === 2) {
    return 'two'
  } else {
    return 'not one or two'
  }
}

// What's the === mean? Branches are mostly used with more complex expressions
// than just seeing if a variable is true or false. In order to do that, we use
// operators. One of the most common is the identity operator, `===`. This
// operator returns true if both the left and the right side are the same.
// There's also a `==` operator that does almost the same thing, but you
// shouldn't use it in Javascript (though it's usually the only one available in
// other programming languages.)
// Other common operators:
// `>` Is the left side bigger than the right? (Use only on numbers)
// `<` Is the left side smaller than the right? (Use only on numbers)
// `<=` and `>=` are just like the two above except they also return true if the
// two sides are equal.
// `!` This is the binary NOT operator. It doesn't have two sides like the
// ones we looked at so far. It just applies to whatever is to the right of it.
// It takes that thing and inverts it -- if it was true, it becomes false, and
// if it was false it becomes true. Sometimes you may want to put the thing to
// the right in parentheses to make sure the whole thing is negated. For
// example:

function negation(x) {
  if (!(x > 0)) {
    return 'its NOT greater than 0'
  }
}

// If we didn't have the parentheses, the NOT operator would only apply to the
// `x`, not to `x > 0` which is probably usually not what we want. If you're not
// sure whether to use parentheses or not, always better safe than sorry! Don't
// assume the compiler knows what you mean.

// There's also the !== operator, which is just a shortcut for `if (!(x ===
// y))`. So it's just `===` reversed.

// Finally, there are the logical operators:
// `&&` returns true if both sides are true
// `||` return true if either side is true

// Parentheses can also be very helpful with these!

// There are actually more operators but you don't need to know them for now!

// Make the tests pass