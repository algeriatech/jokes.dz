# Jokes.dz
> الجزايريين زهوانيين يحبو يضحكو

[![Slack Status](http://algeriatech.now.sh/badge.svg)](http://algeriatech.now.sh)
[![npm](https://img.shields.io/npm/v/jokes.dz.svg?style=flat-square)](https://www.npmjs.com/package/jokes.dz)
[![npm](https://img.shields.io/npm/dm/jokes.dz.svg?style=flat-square)](https://www.npmjs.com/package/jokes.dz)

## Getting started
Install:  
`yarn add jokes.dz` or `npm i --save jokes.dz`

Start using:  
```js
const nukat = require('jokes.dz')

console.log(`We have ${nukat.count} jokes available for you! ashba3 da7k ;P`)

// Get all jokes
console.log(nukat.all)

// or just a random one
console.log(nukat.random())

// Find all jokes using a regular expression
console.log(nukat.search('m.l\s5tah|s[3e]1IeL'))
console.log(nukat.search(/fakakir|ber(ou|w)ita/))

// Filter all jokes in french language. If not argument is specified it defaults to 'ar'
console.log(nukat.filterByLang('fr'))

// Filter by tags. Accepts an Array or comma separated string of tags
console.log(nukat.filterByTag('education,fakakir'))
console.log(nukat.filterByTag([ 'education', 'fakakir' ]))
```


## عندي نكتة!
ابعتلنا نضحكو معاك :joy:

Joke template:
```json
{
    "lang": "ar",
    "joke": "قالك واحد السيد.....",
    "img": "https://link.to/img.jpg",
    "tags": [ "قراية", "صوارد", "طراطق" ]
}
```

- - -
Made with 💕 by [these fun contributors](https://github.com/algeriatech/jokes.dz/graphs/contributors)
