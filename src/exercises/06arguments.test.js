import { one, two, three } from './06arguments'

describe('one', ()=>{
  it('returns the argument passed, plus one', ()=>{
    expect(one(1)).toBe(2)
  })
})

describe('two', ()=>{
  it('adds both arguments together', ()=>{
    expect(two(1,2)).toBe(3)
    expect(two(100,100)).toBe(200)
    expect(two(-6,-1000)).toBe(-1006)
  })
})


describe('three', ()=>{
  it('adds the first argument to the second, then multiplies the result of that by the third argument', ()=>{
    expect(three(1,2,3)).toBe(9)
    expect(three(10,10,10)).toBe(200)
  })
})