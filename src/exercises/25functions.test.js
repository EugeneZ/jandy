import { makeBadAdder, makeAdder, makeBetterAdder } from './25functions'

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

describe('makeBetterAdder', ()=>{
  it('should make a function that adds the argument given to the adder to the argument given to the maker! So in other words `makeBetterAdder(1)(2) === 3`', ()=>{
    const fn = makeBetterAdder(0)
    expect(fn(0)).toBe(0)
    expect(fn(1)).toBe(1)
    expect(fn(30)).toBe(30)

    const fn10 = makeBetterAdder(10)
    expect(fn10(0)).toBe(10)
    expect(fn10(1)).toBe(11)
    expect(fn10(30)).toBe(40)
  })
})
