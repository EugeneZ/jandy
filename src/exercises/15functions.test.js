import { makeBadAdder } from './15functions'

describe('makeBadAdder', ()=>{
  it('should make a function that adds two numbers together', ()=>{
    let fn = makeBadAdder()
    expect(fn(2,4)).toBe(6)
  })
})

describe('makeAdder', ()=>{
  it('should make a function that adds 5 to whatever its argument', ()=>{
    let fn = makeAdder()
    expect(fn(10)).toBe(15)
    expect(fn(25)).toBe(30)
  })
})