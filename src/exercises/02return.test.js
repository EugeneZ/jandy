import { getZero, getOne, getAnyNumber } from './02return'

describe('getZero', ()=>{
  it('returns 0', ()=>{
    expect(getZero()).toBe(0)
  })
})

describe('getOne', ()=>{
  it('returns 1', ()=>{
    expect(getOne()).toBe(1)
  })
})

describe('getAnyNumber', ()=>{
  it('returns any number', ()=>{
    expect(typeof getAnyNumber()).toBe('number')
  })
})