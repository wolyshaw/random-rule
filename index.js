const capitalLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz',
  number = '0123456789',
  symbols = '~!@#$%^&*()_+',
  types = [capitalLetters, lowercaseLetters, number, symbols],
  keys = {
    capitalLetters: capitalLetters,
    lowercaseLetters: lowercaseLetters,
    number: number,
    symbols: symbols
  }

const getRandom = (max = 10, min = 0) => {
  const range = max - min
  return min + Math.round(Math.random() * range)
}

const getSinge = (option = {}) => {
  let rule
  const rules = []
  for (const k in option) {
    if (option.hasOwnProperty(k)) {
      if(option[k] === true) {
        rules.push(keys[k])
      }
    }
  }
  if(!rules.length) {
    rules.push(lowercaseLetters)
  }
  rule = rules[getRandom(rules.length - 1)]
  return rule[getRandom(rule.length - 1)]
}

const randomRule = (option = {}) => {
  let string = ''
  if(typeof option === 'string') {
    for (let i = 0; i < option.length; i++) {
      for (let j = 0; j < types.length; j++) {
        if(types[j].indexOf(option[i]) > -1) {
          string += types[j][getRandom(types[j].length - 1)]
          break
        }
      }
    }
  } else {
    option = option || {}
    option.capitalLetters = typeof option.capitalLetters === 'boolean' ? option.capitalLetters : true
    option.lowercaseLetters = typeof option.lowercaseLetters === 'boolean' ? option.lowercaseLetters : true
    option.number = typeof option.number === 'boolean' ? option.number : true
    option.symbols = typeof option.symbols === 'boolean' ? option.symbols : true
    option.length = typeof option.length === 'number' ? option.length : 10
    for (let i = 0; i < option.length; i++) {
      string += getSinge(option)
    }
  }
  return string
}

export default randomRule
