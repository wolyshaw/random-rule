const randomRule = require('../lib/index.cjs')

describe('未输入参数时', () => {
  it('返回10位随机字符串', done => {
    const string = randomRule()
    done(string.length === 10 ? null : Error(`验证未通过，输出:${string}`))
  })
})

describe('输入字符串时', () => {
  it(`检查是否符合字符串规则`, done => {
    const string = randomRule('123qweQWE!@#'),
      rule = /\d{3}[a-z]{3}[A-Z]{3}[~!@#$%^&*()_+]{3}/g.test(string)
    done(rule ? null : Error(`验证未通过，输出:${string}`))
  })
})

describe('输入对象时', () => {
  it(`randomRule({length: 8})`, done => {
    const string = randomRule({length: 8}),
      rule = /\d+?/g.test(string) && /[a-z]+?/g.test(string) && /[A-Z]+?/g.test(string) && /[~!@#$%^&*()_+]+?/g.test(string) && string.length === 8
    done(rule ? null : Error(`验证未通过，输出:${string}`))
  })

  it(`randomRule({length: 8, capitalLetters: false})`, done => {
    const string = randomRule({length: 8, capitalLetters: false}),
      rule = /\d+?/g.test(string) && /[a-z]+?/g.test(string) && /[~!@#$%^&*()_+]+?/g.test(string) && !/[A-Z]+?/g.test(string) && string.length === 8
    done(rule ? null : Error(`验证未通过，输出:${string}`))
  })

  it(`randomRule({length: 8, lowercaseLetters: false})`, done => {
    const string = randomRule({length: 8, lowercaseLetters: false}),
      rule = /\d+?/g.test(string) && !/[a-z]+?/g.test(string) && /[A-Z]+?/g.test(string) && /[~!@#$%^&*()_+]+?/g.test(string) && string.length === 8
    done(rule ? null : Error(`验证未通过，输出:${string}`))
  })

  it(`randomRule({length: 8, lowercaseLetters: false, capitalLetters: false})`, done => {
    const string = randomRule({length: 8, lowercaseLetters: false, capitalLetters: false}),
      rule = /\d+?/g.test(string) && !/[a-z]+?/g.test(string) && !/[A-Z]+?/g.test(string) && /[~!@#$%^&*()_+]+?/g.test(string) && string.length === 8
    done(rule ? null : Error(`验证未通过，输出:${string}`))
  })

  it(`randomRule({length: 8, lowercaseLetters: false, capitalLetters: false, symbols: false})`, done => {
    const string = randomRule({length: 8, lowercaseLetters: false, capitalLetters: false, symbols: false}),
      rule = /\d+?/g.test(string) && !/[a-z]+?/g.test(string) && !/[A-Z]+?/g.test(string) && !/[~!@#$%^&*()_+]+?/g.test(string) && string.length === 8
    done(rule ? null : Error(`验证未通过，输出:${string}`))
  })

  it(`randomRule({length: 8, lowercaseLetters: false, capitalLetters: false, number: false})`, done => {
    const string = randomRule({length: 8, lowercaseLetters: false, capitalLetters: false, number: false}),
      rule = !/\d+?/g.test(string) && !/[a-z]+?/g.test(string) && !/[A-Z]+?/g.test(string) && /[~!@#$%^&*()_+]+?/g.test(string) && string.length === 8
    done(rule ? null : Error(`验证未通过，输出:${string}`))
  })
})
