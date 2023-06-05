/** @format */

const { DateTime } = require('luxon')
const pluginRss = require('@11ty/eleventy-plugin-rss')
const searchFilter = require('./filters/searchFilter')

module.exports = function (eleventyConfig) {
  eleventyConfig.addCollection('decapPosts', function (collection) {
    return collection
      .getFilteredByGlob('./posts/**/*.md')
      .sort((a, b) => b.data.publishDate - a.data.publishDate)
  })

  eleventyConfig.addPassthroughCopy('images')
  eleventyConfig.addPassthroughCopy('admin')
  eleventyConfig.addPassthroughCopy('filters')
  eleventyConfig.addPassthroughCopy('js')

  eleventyConfig.addPlugin(pluginRss)

  eleventyConfig.addFilter('search', searchFilter)

  eleventyConfig.addCollection('posts', (collection) => {
    return [...collection.getFilteredByGlob('./posts/**/*.md')]
  })

  // CUSTOM FILTERS
  eleventyConfig.addNunjucksFilter('dateNow', function () {
    return new Date().toLocaleDateString('en-us', {
      weekday: 'long',
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    })
  })

  eleventyConfig.addFilter('postDate', (dateObj) => {
    return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED)
  })

  return {
    passthroughFileCopy: true,
    templateFormats: ['md', 'njk', 'html'],
    markdownTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    dataTemplateEngine: 'njk',
  }
}
