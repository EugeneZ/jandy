import { greaterThan, isHello, isNotZero,isTheSame, areBothZero, areAnyTen, itsNotHello, meetsTheseExactRequirements } from './12if'

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
    expect(isTheSame('','')).toBe(true)
  })
  it('returns false if both arguments are not the same', ()=>{
    expect(isTheSame('0',0)).toBe(false)
  })
})

describe('areBothZero', ()=>{
  it('returns true if both arguments are zero', ()=>{
    expect(areBothZero(0,0)).toBe(true)
  })
  it('returns false if either argument is not zero', ()=>{
    expect(areBothZero(1,0)).toBe(false)
    expect(areBothZero(0,1)).toBe(false)
    expect(areBothZero(100,1000)).toBe(false)
  })
})

describe('areAnyTen', ()=>{
  it('returns true if any of the three arguments are 10', ()=>{
    expect(areAnyTen(10)).toBe(true)
    expect(areAnyTen(10,10)).toBe(true)
    expect(areAnyTen(10,10,10)).toBe(true)
    expect(areAnyTen(0,10,10)).toBe(true)
    expect(areAnyTen(0,0,10)).toBe(true)
    expect(areAnyTen(0,10,0)).toBe(true)
    expect(areAnyTen('',5550,10)).toBe(true)
  })
  it('returns false if none of the three arguments are 10', ()=>{
    expect(areAnyTen()).toBe(false)
    expect(areAnyTen(0,0,0)).toBe(false)
    expect(areAnyTen('',false, NaN)).toBe(false)
  })
})

describe('itsNotHello', ()=>{
  it('returns true if the argument is NOT "hello"', ()=>{
    expect(itsNotHello()).toBe(true)
    expect(itsNotHello("goodbye")).toBe(true)
    expect(itsNotHello(0)).toBe(true)
    expect(itsNotHello(false)).toBe(true)
  })
  it('return false if the argument is "hello"', ()=>{
    expect(itsNotHello("hello")).toBe(false)
  })
})

describe('meetsTheseExactRequirements', ()=>{
  it('returns true if all three arguments are zeroes', ()=>{
    expect(meetsTheseExactRequirements(0,0,0)).toBe(true)
  })
  it('returns true if all three arguments are ones', ()=>{
    expect(meetsTheseExactRequirements(1,1,1)).toBe(true)
  })
  it('returns the number 0 if only one of the arguments is a 0', ()=>{
    expect(meetsTheseExactRequirements(0)).toBe(0)
    expect(meetsTheseExactRequirements(1,0)).toBe(0)
    expect(meetsTheseExactRequirements(1,1,0)).toBe(0)
    expect(meetsTheseExactRequirements(0,1,1)).toBe(0)
    expect(meetsTheseExactRequirements(1,0,1)).toBe(0)
    expect(meetsTheseExactRequirements(100, 50, 0)).toBe(0)
  })
  it('returns null in all other cases', ()=>{
    expect(meetsTheseExactRequirements(100, 50, 50)).toBe(null)
    expect(meetsTheseExactRequirements(2, 2, 2)).toBe(null)
    expect(meetsTheseExactRequirements()).toBe(null)
    expect(meetsTheseExactRequirements(' ', false, null)).toBe(null)
  })
})