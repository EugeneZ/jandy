import { greaterThan, isHello, isNotZero,isTheSame } from './12if'

describe('greaterThan', ()=>{
  it('should return the larger of the two arguments', ()=>{
    expect(greaterThan(1,2)).toBe(2)
    expect(greaterThan(4,-4)).toBe(4)
  })
})

describe('isHello', ()=>{
  it('return true if any of the arguments is the string "hello"', ()=>{
    expect(isHello('hello')).toBe(true)
    expect(isHello(0,"hello")).toBe(true)
    expect(isHello('goodbye')).toBe(false)
    expect(isHello(1,2,3,4)).toBe(false)
  })
})

describe('isNotZero', ()=>{
  it('returns false if the argument is exactly 0', ()=>{
    expect(isNotZero(0)).toBe(false)
    for (let i = 1; i <= 10; i++) {
      expect(isNotZero(i)).toBe(true)
    }
  })
})

describe('isTheSame', ()=>{
  it('returns true if both arguments the same', ()=>{
    expect(isTheSame(0,0)).toBe(true)
    expect(isTheSame('0',0)).toBe(false)
    expect(isTheSame('','')).toBe(true)
  })
})