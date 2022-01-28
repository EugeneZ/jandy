import { loopBackwards, loopEvens, loopString } from './20while'

describe('loopBackwards', ()=>{
  it('counts backwards from 10 to 1 by calling the function in the first argument', ()=>{
    let i = 10
    
    loopBackwards((j)=>{
      expect(j).toBe(i)
      i--
    })

    expect.assertions(10)
  })
})

describe('loopEvens', ()=>{
  it('counts forwards by calling the function in the first argument but only with even numbers, 2-12', ()=>{
    let i = 2
    
    loopEvens((j)=>{
      expect(j).toBe(i)
      i += 2
    })

    expect.assertions(6)
  })
})

describe('loopString', ()=>{
  it('pass a string to the first argument that describes which iteration this is, three times. So "one" the first time, "two" the second time, "three" the third time. And then you are done.', ()=>{
    let i = 0
    let words = ["one", "two", "three"]
    
    loopString((j)=>{
      expect(j).toBe(words[i])
      i++
    })

    expect.assertions(3)
  })
})
