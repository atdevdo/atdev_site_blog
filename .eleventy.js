/** @format */
const { EleventyI18nPlugin } = require('@11ty/eleventy')
const { DateTime } = require('luxon')
const pluginRss = require('@11ty/eleventy-plugin-rss')
const searchFilter = require('./filters/searchFilter')

module.exports = function (eleventyConfig) {
  // BEGIN PLUGINS
  eleventyConfig.addPlugin(EleventyI18nPlugin, {
    defaultLanguage: 'en', // Required
  })

  eleventyConfig.addPlugin(pluginRss)
  // END PLUGINS

  // * BEGIN CUSTOM COLLECTIONS
  eleventyConfig.addCollection('posts', (collection) => {
    return [...collection.getFilteredByGlob('./posts/**/*.md')]
  })

  eleventyConfig.addCollection('decapPosts', function (collection) {
    return collection
      .getFilteredByGlob('./posts/**/*.md')
      .sort((a, b) => b.data.publishDate - a.data.publishDate)
  })

  // ? BEGIN CODE COLLECTION
  eleventyConfig.addCollection('codeCollection', function (collection) {
    return collection
      .getFilteredByGlob('./posts/**/*.md')
      .filter((item) => item.data.category === 'code')
  })

  // ? END CODE COLLECTION

  // ? BEGIN COLLECTION SORTED BY TITLE
  eleventyConfig.addCollection('sortedByTitle', function (collection) {
    return collection
      .getFilteredByGlob('./posts/**/*.md')
      .sort(function (a, b) {
        if (a.data.title && b.data.title) {
          return a.data.title.localeCompare(b.data.title)
        }
        return 0
      })
  })
  // ? END COLLECTION SORTED BY TITLE

  // ? BEGIN COLLECTION SORTED BY TIME
  eleventyConfig.addCollection('sortedByTime', function (collection) {
    return collection
      .getFilteredByGlob('./posts/**/*.md')
      .sort((a, b) => b.data.minRead - a.data.minRead)
  })
  // ? END COLLECTION SORTED BY TIME

  // ? BEGIN COLLECTION SORTED BY CATEGORY
  eleventyConfig.addCollection('sortedByCategory', function (collection) {
    return collection
      .getFilteredByGlob('./posts/**/*.md')
      .sort(function (a, b) {
        if (a.data.category && b.data.category) {
          return a.data.category.localeCompare(b.data.category)
        }
        return 0
      })
  })
  // ? END COLLECTION SORTED BY CATEGORY

  // ? BEGIN COLLECTION SORTED BY DATE
  eleventyConfig.addCollection('sortedByDate', function (collection) {
    return collection
      .getFilteredByGlob('./posts/**/*.md')
      .reverse()
      .sort((a, b) => b.data.publishDate - a.data.publishDate)
  })
  // ? END COLLECTION SORTED BY DATE

  // * END CUSTOM COLLECTIONS

  // BEGIN CUSTOM FILTERS
  eleventyConfig.addFilter('search', searchFilter)

  eleventyConfig.addFilter('postDate', (dateObj) => {
    return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED)
  })

  eleventyConfig.addNunjucksFilter('dateNow', function () {
    return new Date().toLocaleDateString('en-us', {
      weekday: 'long',
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    })
  })
  // END CUSTOM FILTERS

  // BEGIN COPY
  eleventyConfig.addPassthroughCopy('uploads')
  eleventyConfig.addPassthroughCopy('admin')
  eleventyConfig.addPassthroughCopy('filters')
  eleventyConfig.addPassthroughCopy('assets')
  // END COPY

  return {
    passthroughFileCopy: true,
    templateFormats: ['md', 'njk', 'html'],
    markdownTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    dataTemplateEngine: 'njk',
  }
}
