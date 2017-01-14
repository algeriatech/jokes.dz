# Nukta
> الجزايريين زهوانيين يحبو يضحكو

## Getting started
Install:  
`yarn add nukta.dz` or `npm i --save nukta.dz`

Start using:  
```js
const nukta = require('nukta.dz')

console.log(`We have ${nukta.count} jokes available for you! ashba3 da7k ;P`)

// Set all jokes
console.log(nukta.nukat)

// Find all jokes using a regular expression
console.log(nukta.search('sellal'))
console.log(nukta.search(/fakakir|ber(ou|w)ita/))

// Filter all jokes in french language. If not argument is specified it defaults to 'ar'
console.log(nukta.filterByLang('fr'))

// Filter by tags. Accepts an Array or comma separated string of tags
console.log(nukta.filterByTag('education,fakakir'))
console.log(nukta.filterByTag([ 'education', 'fakakir' ]))
```


## عندي نكتة!
ابعبتلنا نضحكو معاك :joy:

Joke template:
```json
{
    "lang": "ar",
    "joke": "قالك واحد السيد.....",
    "img": "https://link.to/img.jpg",
    "tags": "قراية،صوارد،طراطق"
}
```

- - -
Made with 💕 by [these fun contributors](https://github.com/algeriatech/nukta.dz/graphs/contributors)
