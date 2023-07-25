// ? BEGIN TECHNOLOGY COLLECTION
exports.technologyCollectionEn = function (collection) {
	return collection
		.getFilteredByGlob('./posts/*.md')
		.filter(
			(item) =>
				item.data.category === 'technology' &&
				item.data.language === 'en'
		)
		.sort((a, b) => b.data.publishDate - a.data.publishDate)
}
exports.technologyCollectionEs = function (collection) {
	return collection
		.getFilteredByGlob('./posts/*.md')
		.filter(
			(item) =>
				item.data.category === 'technology' &&
				item.data.language === 'es'
		)
		.sort((a, b) => b.data.publishDate - a.data.publishDate)
}
// ? END TECHNOLOGY COLLECTION

// ? BEGIN COMMUNITY COLLECTION
exports.communityCollectionEn = function (collection) {
	return collection
		.getFilteredByGlob('./posts/*.md')
		.filter(
			(item) =>
				item.data.category === 'community' &&
				item.data.language === 'en'
		)
		.sort((a, b) => b.data.publishDate - a.data.publishDate)
}
exports.communityCollectionEs = function (collection) {
	return collection
		.getFilteredByGlob('./posts/*.md')
		.filter(
			(item) =>
				item.data.category === 'community' &&
				item.data.language === 'es'
		)
		.sort((a, b) => b.data.publishDate - a.data.publishDate)
}
// ? END COMMUNITY COLLECTION

// ? BEGIN GROWTH COLLECTION
exports.growthCollectionEn = function (collection) {
	return collection
		.getFilteredByGlob('./posts/*.md')
		.filter(
			(item) =>
				item.data.category === 'growth' && item.data.language === 'en'
		)
		.sort((a, b) => b.data.publishDate - a.data.publishDate)
}
exports.growthCollectionEs = function (collection) {
	return collection
		.getFilteredByGlob('./posts/*.md')
		.filter(
			(item) =>
				item.data.category === 'growth' && item.data.language === 'es'
		)
		.sort((a, b) => b.data.publishDate - a.data.publishDate)
}
// ? END GROWTH COLLECTION

// ? BEGIN REMOTE WORK COLLECTION
exports.remoteWorkCollectionEn = function (collection) {
	return collection
		.getFilteredByGlob('./posts/*.md')
		.filter(
			(item) =>
				item.data.category === 'remote-work' &&
				item.data.language === 'en'
		)
		.sort((a, b) => b.data.publishDate - a.data.publishDate)
}
exports.remoteWorkCollectionEs = function (collection) {
	return collection
		.getFilteredByGlob('./posts/*.md')
		.filter(
			(item) =>
				item.data.category === 'remote-work' &&
				item.data.language === 'es'
		)
		.sort((a, b) => b.data.publishDate - a.data.publishDate)
}
// ? END REMOTE WORK COLLECTION
