import { add, subtract, reverseSubtract, multiply, divide,  } from './10math'

describe('add', ()=>{
  it('should add two numbers', ()=>{
    let sum = add(1,2)
    expect(sum).toBe(3)

    sum = add(-1,0)
    expect(sum).toBe(-1)

    sum = add(0,0)
    expect(sum).toBe(0)

    sum = add(0,401)
    expect(sum).toBe(401)
  })
})

describe('subtract', ()=>{
  it('should subtract the second number from the first number', ()=>{
    let sum = subtract(2,1)
    expect(sum).toBe(1)

    sum = subtract(10,3)
    expect(sum).toBe(7)

    sum = subtract(-4,2)
    expect(sum).toBe(-6)

    sum = subtract(0,-10)
    expect(sum).toBe(10)
  })
})

describe('reverseSubtract', ()=>{
  it('should subtract the *first* number *from* the second', ()=>{
    let sum = reverseSubtract(2,1)
    expect(sum).toBe(-1)

    sum = reverseSubtract(10,3)
    expect(sum).toBe(-7)

    sum = reverseSubtract(-4,2)
    expect(sum).toBe(6)

    sum = reverseSubtract(0,-10)
    expect(sum).toBe(-10)
  })
})

describe('multiply', ()=>{
  it('should multiply two numbers', ()=>{
    let sum = multiply(1,1)
    expect(sum).toBe(1)

    sum = multiply(10,3)
    expect(sum).toBe(30)

    sum = multiply(-4,2)
    expect(sum).toBe(-8)

    sum = multiply(0,-10)
    expect(sum).toBe(0)
  })
})

describe('divide', ()=>{
  it('should divide the first number by the second', ()=>{
    let sum = divide(1,1)
    expect(sum).toBe(1)

    sum = divide(10,2)
    expect(sum).toBe(5)

    sum = divide(100,20)
    expect(sum).toBe(5)

    sum = divide(99, 3)
    expect(sum).toBe(33)
  })
})