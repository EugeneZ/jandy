import { getLastLetter, doesFirstIncludeSecond, withColon, replaceExcalamationWithQuestion } from './30strings'

describe('getLastLetter', ()=>{
  it('returns the last letter of the provided string', ()=>{
    expect(getLastLetter('hello')).toBe('o')
    expect(getLastLetter('z')).toBe('z')
    expect(getLastLetter('The quick brown fox jumps over the angry dog!')).toBe('!')
  })
})

describe('doesFirstIncludeSecond', ()=>{
  it('returns true if the first string contains the second string', ()=>{
    expect(doesFirstIncludeSecond('hello', 'hello')).toBe(true)
    expect(doesFirstIncludeSecond('goodbye', 'bye')).toBe(true)
    expect(doesFirstIncludeSecond('nothing', 'n')).toBe(true)
  })

  it('returns false if the first string does *not* contain the second string', ()=>{
    expect(doesFirstIncludeSecond('hello', 'hello!')).toBe(false)
    expect(doesFirstIncludeSecond('sdfdsklm', 'h')).toBe(false)
  })
})


describe('withColon', ()=>{
  it('returns the string provided with a ":" on the end', ()=>{
    expect(withColon('Eugene')).toBe('Eugene:')
    expect(withColon('Yuliya')).toBe('Yuliya:')
    expect(withColon('Jeremiah')).toBe('Jeremiah:')
  })
  it('returns the string provided without changing it if it already has a colon', ()=>{
    expect(withColon('Eugene:')).toBe('Eugene:')
    expect(withColon('Yuliya:')).toBe('Yuliya:')
    expect(withColon('Jeremiah:')).toBe('Jeremiah:')
    expect(withColon(':')).toBe(':')
  })
})

describe('replaceExcalamationWithQuestion', ()=>{
  it('replaces ! with ?', ()=>{
    expect(replaceExcalamationWithQuestion('hello!')).toBe('hello?')
    expect(replaceExcalamationWithQuestion('!!!')).toBe('???')
    expect(replaceExcalamationWithQuestion('! I ! LOVE ! EXCALAMATION ! MARKS !')).toBe('? I ? LOVE ? EXCALAMATION ? MARKS ?')
  })
})