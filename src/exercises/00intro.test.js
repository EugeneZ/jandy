import { helloWorld, hi, goodbye } from './00intro'

describe('helloWorld', ()=>{
  it('has been exported', ()=>{
    helloWorld()
    expect(true).toBe(true)
  })
})

describe('hi', ()=>{
  it('has been exported', ()=>{
    hi()
    expect(true).toBe(true)
  })
})


describe('goodbye', ()=>{
  it('has been exported', ()=>{
    goodbye()
    expect(true).toBe(true)
  })
})