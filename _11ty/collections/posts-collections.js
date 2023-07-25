exports.posts = function (collection) {
	return [...collection.getFilteredByGlob('./posts/**/*.md')]
}

exports.postsEn = function (collection) {
	return [...collection.getFilteredByGlob('./posts/*.md')]
}

exports.postsEs = function (collection) {
	return [...collection.getFilteredByGlob('./posts/*.md')]
}

exports.decapPostsEn = function (collection) {
	return collection
		.getFilteredByGlob('./posts/*.md')
		.filter((item) => item.data.language === 'en')
		.sort((a, b) => b.data.publishDate - a.data.publishDate)
}
exports.decapPostsEs = function (collection) {
	return collection
		.getFilteredByGlob('./posts/*.md')
		.filter((item) => item.data.language === 'es')
		.sort((a, b) => b.data.publishDate - a.data.publishDate)
}
