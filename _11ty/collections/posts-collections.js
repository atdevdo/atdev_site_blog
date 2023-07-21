exports.posts = function (collection) {
	return [...collection.getFilteredByGlob('./posts/**/*.md')]
}

exports.postsEn = function (collection) {
	return [...collection.getFilteredByGlob('./posts/en/*.md')]
}

exports.postsEs = function (collection) {
	return [...collection.getFilteredByGlob('./posts/es/*.md')]
}

exports.decapPostsEn = function (collection) {
	return collection
		.getFilteredByGlob('./posts/en/*.md')
		.sort((a, b) => b.data.publishDate - a.data.publishDate)
}
exports.decapPostsEs = function (collection) {
	return collection
		.getFilteredByGlob('./posts/es/*.md')
		.sort((a, b) => b.data.publishDate - a.data.publishDate)
}
