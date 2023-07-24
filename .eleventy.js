/** @format */
// * BEGIN IMPORTING LIBRARIES
const { EleventyI18nPlugin } = require('@11ty/eleventy')
const pluginRss = require('@11ty/eleventy-plugin-rss')
const CleanCSS = require('clean-css')
const { minify } = require('terser')
const readerBar = require('eleventy-plugin-reader-bar')
// * END IMPORTING LIBRARIES

// * BEGIN IMPORTING COLLECTIONS
const posts_collections = require('./_11ty/collections/posts-collections')
const category_collections = require('./_11ty/collections/category-collections')
const sort_posts_collections = require('./_11ty/collections/sort-posts-collections')
const sort_posts_category = require('./_11ty/collections/sort-posts-category')
// * END IMPORTING COLLECTIONS

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

	// * BEGIN CUSTOM COLLECTIONS
	// ? BEGIN CATEGORY COLLECTIONS
	eleventyConfig.addCollection(
		'technologyCollectionEn',
		category_collections.technologyCollectionEn
	)
	eleventyConfig.addCollection(
		'technologyCollectionEs',
		category_collections.technologyCollectionEs
	)
	eleventyConfig.addCollection(
		'communityCollectionEn',
		category_collections.communityCollectionEn
	)
	eleventyConfig.addCollection(
		'communityCollectionEs',
		category_collections.communityCollectionEs
	)
	eleventyConfig.addCollection(
		'growthCollectionEn',
		category_collections.growthCollectionEn
	)
	eleventyConfig.addCollection(
		'growthCollectionEs',
		category_collections.growthCollectionEs
	)
	eleventyConfig.addCollection(
		'remoteWorkCollectionEn',
		category_collections.remoteWorkCollectionEn
	)
	eleventyConfig.addCollection(
		'remoteWorkCollectionEs',
		category_collections.remoteWorkCollectionEs
	)
	// ? END CATEGORY COLLECTIONS

	// ? BEGIN POSTS COLLECTIONS
	eleventyConfig.addCollection('posts', posts_collections.posts)
	eleventyConfig.addCollection('postsEn', posts_collections.postsEn)
	eleventyConfig.addCollection('postsEs', posts_collections.postsEs)
	eleventyConfig.addCollection('decapPostsEn', posts_collections.decapPostsEn)
	eleventyConfig.addCollection('decapPostsEs', posts_collections.decapPostsEs)
	// ? END POSTS COLLECTIONS

	// ? BEGIN SORTED POSTS COLLECTIONS
	eleventyConfig.addCollection(
		'sortedByTitleEn',
		sort_posts_collections.sortedByTitleEn
	)
	eleventyConfig.addCollection(
		'sortedByTitleEs',
		sort_posts_collections.sortedByTitleEs
	)
	eleventyConfig.addCollection(
		'sortedByTimeEn',
		sort_posts_collections.sortedByTimeEn
	)
	eleventyConfig.addCollection(
		'sortedByTimeEs',
		sort_posts_collections.sortedByTimeEs
	)
	eleventyConfig.addCollection(
		'sortedByCategoryEn',
		sort_posts_collections.sortedByCategoryEn
	)
	eleventyConfig.addCollection(
		'sortedByCategoryEs',
		sort_posts_collections.sortedByCategoryEs
	)
	eleventyConfig.addCollection(
		'sortedByDateEn',
		sort_posts_collections.sortedByDateEn
	)
	eleventyConfig.addCollection(
		'sortedByDateEs',
		sort_posts_collections.sortedByDateEs
	)
	// ? END SORTED POSTS COLLECTIONS

	// ? BEGIN SORTED CATEGORY COLLECTIONS
	eleventyConfig.addCollection(
		'sortedTechnologyByTitleEn',
		sort_posts_category.sortedTechnologyByTitleEn
	)
	eleventyConfig.addCollection(
		'sortedTechnologyByTitleEs',
		sort_posts_category.sortedTechnologyByTitleEs
	)
	eleventyConfig.addCollection(
		'sortedTechnologyByTimeEn',
		sort_posts_category.sortedTechnologyByTimeEn
	)
	eleventyConfig.addCollection(
		'sortedTechnologyByTimeEs',
		sort_posts_category.sortedTechnologyByTimeEs
	)
	eleventyConfig.addCollection(
		'sortedTechnologyByDateEn',
		sort_posts_category.sortedTechnologyByDateEn
	)
	eleventyConfig.addCollection(
		'sortedTechnologyByDateEs',
		sort_posts_category.sortedTechnologyByDateEs
	)
	eleventyConfig.addCollection(
		'sortedGrowthByTitleEn',
		sort_posts_category.sortedGrowthByTitleEn
	)
	eleventyConfig.addCollection(
		'sortedGrowthByTitleEs',
		sort_posts_category.sortedGrowthByTitleEs
	)
	eleventyConfig.addCollection(
		'sortedGrowthByTimeEn',
		sort_posts_category.sortedGrowthByTimeEn
	)
	eleventyConfig.addCollection(
		'sortedGrowthByTimeEs',
		sort_posts_category.sortedGrowthByTimeEs
	)
	eleventyConfig.addCollection(
		'sortedGrowthByDateEn',
		sort_posts_category.sortedGrowthByDateEn
	)
	eleventyConfig.addCollection(
		'sortedGrowthByDateEs',
		sort_posts_category.sortedGrowthByDateEs
	)
	eleventyConfig.addCollection(
		'sortedCommunityByTitleEn',
		sort_posts_category.sortedCommunityByTitleEn
	)
	eleventyConfig.addCollection(
		'sortedCommunityByTitleEs',
		sort_posts_category.sortedCommunityByTitleEs
	)
	eleventyConfig.addCollection(
		'sortedCommunityByTimeEn',
		sort_posts_category.sortedCommunityByTimeEn
	)
	eleventyConfig.addCollection(
		'sortedCommunityByTimeEs',
		sort_posts_category.sortedCommunityByTimeEs
	)
	eleventyConfig.addCollection(
		'sortedCommunityByDateEn',
		sort_posts_category.sortedCommunityByDateEn
	)
	eleventyConfig.addCollection(
		'sortedCommunityByDateEs',
		sort_posts_category.sortedCommunityByDateEs
	)
	eleventyConfig.addCollection(
		'sortedRemoteWorkByTitleEn',
		sort_posts_category.sortedRemoteWorkByTitleEn
	)
	eleventyConfig.addCollection(
		'sortedRemoteWorkByTitleEs',
		sort_posts_category.sortedRemoteWorkByTitleEs
	)
	eleventyConfig.addCollection(
		'sortedRemoteWorkByTimeEn',
		sort_posts_category.sortedRemoteWorkByTimeEn
	)
	eleventyConfig.addCollection(
		'sortedRemoteWorkByTimeEs',
		sort_posts_category.sortedRemoteWorkByTimeEs
	)
	eleventyConfig.addCollection(
		'sortedRemoteWorkByDateEn',
		sort_posts_category.sortedRemoteWorkByDateEn
	)
	eleventyConfig.addCollection(
		'sortedRemoteWorkByDateEs',
		sort_posts_category.sortedRemoteWorkByDateEs
	)
	// ? END SORTED CATEGORY COLLECTIONS
	// * END CUSTOM COLLECTIONS

	eleventyConfig.setBrowserSyncConfig({
		middleware: function (req, res, next) {
			res.setHeader('Access-Control-Allow-Origin', '*')
			next()
		},
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