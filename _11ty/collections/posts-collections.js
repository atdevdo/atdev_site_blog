/** @format */

function posts(collection) {
	return [...collection.getFilteredByGlob('./posts/**/*.md')]
}

function decapPosts(collection) {
	return collection
		.getFilteredByGlob('./posts/**/*.md')
		.sort((a, b) => b.data.publishDate - a.data.publishDate)
}

module.exports = {
	posts,
	decapPosts,
}
