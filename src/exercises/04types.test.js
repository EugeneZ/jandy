import {
  getBooleanTrue,
getBooleanFalse,
getNull,
getUndefined,
getNumber,
getDecimalNumber,
getWeirdString,
getEmptyString,
getNothing,
} from './04types'

describe('getBooleanTrue', ()=>{
  it('returns true', ()=>{
    expect(getBooleanTrue()).toBe(true)
  })
})
describe('getBooleanFalse', ()=>{
  it('returns false', ()=>{
    expect(getBooleanFalse()).toBe(false)
  })
})

describe('getNull', ()=>{
  it('returns null', ()=>{
    expect(getNull()).toBeNull()
  })
})

describe('getUndefined', ()=>{
  it('returns undefined', ()=>{
    expect(getUndefined()).toBeUndefined()
  })
})

describe('getNumber', ()=>{
  it('returns any number', ()=>{
    expect(typeof getNumber()).toBe('number')
  })
})

describe('getDecimalNumber', ()=>{
  it("returns any number that's a decimal", ()=>{
    const decimal = getDecimalNumber()
    expect(typeof decimal).toBe('number')
    expect(Math.floor(decimal)).not.toBe(decimal)
  })
})


describe('getWeirdString', ()=>{
  it('returns a weird string', ()=>{
    expect(getWeirdString()).toBe("this is a weird string, trust me")
  })
})

describe('getEmptyString', ()=>{
  it('returns an empty string', ()=>{
    expect(getEmptyString()).toBe('')
  })
})

describe('getNothing', ()=>{
  it('does not return anything', ()=>{
    expect(getNothing()).toBeUndefined()
  })
})