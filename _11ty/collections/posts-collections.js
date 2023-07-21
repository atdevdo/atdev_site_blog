/** @format */

function posts(collection) {
	return [...collection.getFilteredByGlob('./posts/**/*.md')]
}

function decapPostsEn(collection) {
	return collection
		.getFilteredByGlob('./posts/**/*.md')
		.filter((item) => item.data.language === 'en')
		.sort((a, b) => b.data.publishDate - a.data.publishDate)
}
function decapPostsEs(collection) {
	return collection
		.getFilteredByGlob('./posts/**/*.md')
		.filter((item) => item.data.language === 'es')
		.sort((a, b) => b.data.publishDate - a.data.publishDate)
}

module.exports = {
	posts,
	decapPostsEn,
	decapPostsEs,
}
