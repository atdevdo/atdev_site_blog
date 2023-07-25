const collections = require('./_11ty/collections/collections')

// * BEGIN IMPORTING LIBRARIES
const { EleventyI18nPlugin } = require('@11ty/eleventy')
const pluginRss = require('@11ty/eleventy-plugin-rss')
const CleanCSS = require('clean-css')
const { minify } = require('terser')
const readerBar = require('eleventy-plugin-reader-bar')
// * END IMPORTING LIBRARIES

// * BEGIN IMPORTING FILTERS
const searchFilter = require('./_11ty/filters/searchFilter')
const { postDate } = require('./_11ty/filters/filters')
const { fixCategory, dateNow } = require('./_11ty/filters/nunjucks-filters')
// * END IMPORTING FILTER

/** @param {import("@11ty/eleventy").UserConfig} eleventyConfig */
module.exports = function (eleventyConfig) {
	// ? BEGIN PLUGINS
	eleventyConfig.addPlugin(pluginRss)
	eleventyConfig.addPlugin(EleventyI18nPlugin, {
		defaultLanguage: 'en', // Required
	})
	eleventyConfig.addPlugin(readerBar)
	// ? END PLUGINS

	// * BEGIN CUSTOM FILTERS
	eleventyConfig.addFilter('search', searchFilter)
	eleventyConfig.addNunjucksFilter('fixCategory', fixCategory)
	eleventyConfig.addFilter('postDate', postDate)
	eleventyConfig.addNunjucksFilter('dateNow', dateNow)
	eleventyConfig.addFilter('cssmin', function (code) {
		return new CleanCSS({}).minify(code).styles
	})
	// * END CUSTOM FILTERS

	// * BEGIN COPY
	eleventyConfig.addPassthroughCopy('uploads')
	eleventyConfig.addPassthroughCopy('admin')
	eleventyConfig.addPassthroughCopy('filters')
	eleventyConfig.addPassthroughCopy('assets')
	eleventyConfig.addPassthroughCopy('_data')
	eleventyConfig.addPassthroughCopy('./assets/fonts/Cerebri-Sans-Bold-1.woff')
	// * END COPY

	// * BEGIN WATCHERS
	eleventyConfig.addWatchTarget('./**/*.css')
	eleventyConfig.addWatchTarget('assets/js')
	eleventyConfig.addWatchTarget('assets/icons')
	eleventyConfig.addWatchTarget('assets/images')
	// * END WATCHERS

	Object.keys(collections).forEach((collectionName) => {
		eleventyConfig.addCollection(
			collectionName,
			collections[collectionName]
		)
	})

	eleventyConfig.addNunjucksAsyncFilter(
		'jsmin',
		async function (code, callback) {
			try {
				const minified = await minify(code)
				callback(null, minified.code)
			} catch (err) {
				console.error('Terser error: ', err)
				// Fail gracefully.
				callback(null, code)
			}
		}
	)

	return {
		passthroughFileCopy: true,
		templateFormats: ['md', 'njk', 'html'],
		markdownTemplateEngine: 'njk',
		htmlTemplateEngine: 'njk',
		dataTemplateEngine: 'njk',
	}
}
