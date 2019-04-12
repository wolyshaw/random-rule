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
  },
  defaultOption = {
    capitalLetters: true,
    lowercaseLetters: true,
    number: true,
    symbols: true,
    length: 10
  }

const getRandom = (max = 10, min = 0) => min + Math.round(Math.random() * (max - min))

export default (option = {}) => {
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
    const indexs = [], rules = []
    for (const k in defaultOption) {
      if(typeof option[k] === 'undefined') {
        option[k] = defaultOption[k]
      }
      if (defaultOption.hasOwnProperty(k) && option[k] === true) {
        rules.push(keys[k])
      }
    }
    if(!rules.length) {
      rules.push(lowercaseLetters)
    }
    for (let i = 0; i < option.length; i++) {
      indexs.push(i)
    }
    for (let i = 0; i < option.length; i++) {
      const tmp = getRandom(indexs.length - 1),
        rule = rules[indexs[tmp] % rules.length],
        index = getRandom(rule.length - 1)
      indexs.splice(tmp, 1)
      string += rule[index]
    }
  }
  return string
}

