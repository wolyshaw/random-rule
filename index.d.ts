declare namespace randomRule {
  interface option {
    capitalLetters?: boolean
    lowercaseLetters?: boolean
    number?: boolean
    symbols?: boolean
    length?: number
  }
}

declare function randomRule(option?: randomRule.option|string?): string

export = randomRule
