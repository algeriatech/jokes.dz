const jokes = require('./jokes.json')

/** Number of total jokes available */
const count = jokes.length

/** Get a random joke */
const random = () => jokes[Math.floor(Math.random() * 10e3) % jokes.length]

/**
 * Search for jokes
 * @param {RegExp} pattern Regular expression to look for
 */
const search = (pattern) => jokes.filter(joke => new RegExp(pattern).test(joke.joke))

/**
 * Search for jokes in a specific language
 * @param {string} lang language
 */
const filterByLang = (lang = 'ar') => jokes.filter(joke => joke.lang === lang)

/**
 * Search for jokes with some specific tags
 * @param {string|Array} tag An Array or comma separated string of tags
 * @return {Array}
 */
const filterByTag = (tag) => {
  if (Array.isArray(tag))
    tag = tag.join('|')
  else if (typeof tag === 'string')
    tag = tag.replace(',', '|')
  else
    throw new TypeError('Expected string|Array<string>')

  return jokes.filter(joke => new RegExp(tag).test(joke.tags.join(' ')))
}


module.exports = {
  count,
  all: jokes,
  random,
  search,
  filterByLang,
  filterByTag,
}
