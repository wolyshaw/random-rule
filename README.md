# random-rule

### 简介

random-rule 是一个使用十分简单按照固定规则生成随机字符串的库

### 在线demo

[![Edit magical-wu-115ih](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/magical-wu-115ih?fontsize=14&hidenavigation=1&theme=dark)

### 安装

`npm install random-rule --save`

### 使用


``` javascript

/**
 *
 * @param {!Object}
 *
 * @param {Boolean} Object.capitalLetters 是否包含大写字母
 * @param {Boolean} Object.lowercaseLetters 是否包含小写字母
 * @param {Boolean} Object.number 是否包含数字
 * @param {Boolean} Object.symbols 是否包含符号
 * @param {Number} Object.length 生成字符串长度
 *
 * @return string
 */

randomRule({
  capitalLetters: true,
  lowercaseLetters: true,
  number: true,
  symbols: true,
  length: 10
})

// => 'KGRuf^381K'

```

``` javascript

/**
 *
 * @param {String} 字符串模板，根据该字符串生成长度与数字大小写符号位置商都相对应的随机字符串
 *
 * @return string
 *
 */

randomRule('123qweQWE!@#')

// => '085pnwPNF)^#'

```


