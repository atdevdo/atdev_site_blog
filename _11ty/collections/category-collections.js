// ? BEGIN TECHNOLOGY COLLECTION
exports.technologyCollectionEn = function (collection) {
	return collection
		.getFilteredByGlob('./posts/en/*.md')
		.filter((item) => item.data.category === 'technology')
		.sort((a, b) => b.data.publishDate - a.data.publishDate)
}
exports.technologyCollectionEs = function (collection) {
	return collection
		.getFilteredByGlob('./posts/es/*.md')
		.filter((item) => item.data.category === 'technology')
		.sort((a, b) => b.data.publishDate - a.data.publishDate)
}
// ? END TECHNOLOGY COLLECTION

// ? BEGIN COMMUNITY COLLECTION
exports.communityCollectionEn = function (collection) {
	return collection
		.getFilteredByGlob('./posts/en/*.md')
		.filter((item) => item.data.category === 'community')
		.sort((a, b) => b.data.publishDate - a.data.publishDate)
}
exports.communityCollectionEs = function (collection) {
	return collection
		.getFilteredByGlob('./posts/es/*.md')
		.filter((item) => item.data.category === 'community')
		.sort((a, b) => b.data.publishDate - a.data.publishDate)
}
// ? END COMMUNITY COLLECTION

// ? BEGIN GROWTH COLLECTION
exports.growthCollectionEn = function (collection) {
	return collection
		.getFilteredByGlob('./posts/en/*.md')
		.filter((item) => item.data.category === 'growth')
		.sort((a, b) => b.data.publishDate - a.data.publishDate)
}
exports.growthCollectionEs = function (collection) {
	return collection
		.getFilteredByGlob('./posts/es/*.md')
		.filter((item) => item.data.category === 'growth')
		.sort((a, b) => b.data.publishDate - a.data.publishDate)
}
// ? END GROWTH COLLECTION

// ? BEGIN REMOTE WORK COLLECTION
exports.remoteWorkCollectionEn = function (collection) {
	return collection
		.getFilteredByGlob('./posts/en/*.md')
		.filter((item) => item.data.category === 'remote-work')
		.sort((a, b) => b.data.publishDate - a.data.publishDate)
}
exports.remoteWorkCollectionEs = function (collection) {
	return collection
		.getFilteredByGlob('./posts/es/*.md')
		.filter((item) => item.data.category === 'remote-work')
		.sort((a, b) => b.data.publishDate - a.data.publishDate)
}
// ? END REMOTE WORK COLLECTION
