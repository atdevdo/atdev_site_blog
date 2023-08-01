const minifiers = require('./configuration/minifiers/minifiers.cjs')
const collections = require('./configuration/collections/collections.cjs')

//#region IMPORTING LIBRARIES
const { EleventyI18nPlugin } = require('@11ty/eleventy')
const pluginRss = require('@11ty/eleventy-plugin-rss')
const readerBar = require('eleventy-plugin-reader-bar')
//#endregion IMPORTING LIBRARIES

//#region IMPORTING FILTERS
const searchFilter = require('./configuration/filters/searchFilter.cjs')
const { postDate } = require('./configuration/filters/filters.cjs')
const {
	fixCategory,
	dateNow,
} = require('./configuration/filters/nunjucks-filters.cjs')
//#endregion IMPORTING FILTER

/** @param {import("@11ty/eleventy").UserConfig} eleventyConfig */
module.exports = function (eleventyConfig) {
	Object.keys(collections).forEach((collectionName) => {
		eleventyConfig.addCollection(
			collectionName,
			collections[collectionName]
		)
	})

	//#region PLUGINS
	eleventyConfig.addPlugin(pluginRss)
	eleventyConfig.addPlugin(EleventyI18nPlugin, {
		defaultLanguage: 'en', // Required
	})
	eleventyConfig.addPlugin(readerBar)
	//#endregion PLUGINS

	//#region COPY
	eleventyConfig.addPassthroughCopy('uploads')
	eleventyConfig.addPassthroughCopy('admin')
	eleventyConfig.addPassthroughCopy('filters')
	eleventyConfig.addPassthroughCopy('assets')
	eleventyConfig.addPassthroughCopy('_data')
	eleventyConfig.addPassthroughCopy('./assets/fonts/Cerebri-Sans-Bold-1.woff')
	//#endregion COPY

	//#region WATCHERS
	eleventyConfig.addWatchTarget('./**/*.css')
	eleventyConfig.addWatchTarget('assets/js')
	eleventyConfig.addWatchTarget('assets/icons')
	eleventyConfig.addWatchTarget('assets/images')
	//#endregion WATCHERS

	//#region FILTERS
	eleventyConfig.addFilter('search', searchFilter)
	eleventyConfig.addNunjucksFilter('fixCategory', fixCategory)
	eleventyConfig.addFilter('postDate', postDate)
	eleventyConfig.addNunjucksFilter(
		'filteredPosts',
		function (collection, lang, word) {
			return collection
				.filter(
					(item) =>
						item.data.language === lang &&
						item.data.title[0].toLowerCase() === word
				)
				.sort((a, b) => a.data.publishDate - b.data.publishDate)
		}
	)
	eleventyConfig.addNunjucksFilter('dateNow', dateNow)
	eleventyConfig.addFilter('cssmin', minifiers.cssMinifier)
	eleventyConfig.addNunjucksAsyncFilter('jsmin', minifiers.jsMinifier)
	//#endregion FILTERS

	return {
		passthroughFileCopy: true,
		templateFormats: ['md', 'njk', 'html'],
		markdownTemplateEngine: 'njk',
		htmlTemplateEngine: 'njk',
		dataTemplateEngine: 'njk',
	}
}
