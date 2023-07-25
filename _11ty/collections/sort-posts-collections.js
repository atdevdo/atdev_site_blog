// ? BEGIN COLLECTION SORTED BY TITLE
exports.sortedByTitleEn = function (collection) {
	return collection.getFilteredByGlob('./posts/*.md').sort(function (a, b) {
		if (a.data.title && b.data.title) {
			return a.data.title.localeCompare(b.data.title)
		}
		return 0
	})
}
exports.sortedByTitleEs = function (collection) {
	return collection.getFilteredByGlob('./posts/*.md').sort(function (a, b) {
		if (a.data.title && b.data.title) {
			return a.data.title.localeCompare(b.data.title)
		}
		return 0
	})
}
// ? END COLLECTION SORTED BY TITLE

// ? BEGIN COLLECTION SORTED BY TIME
exports.sortedByTimeEn = function (collection) {
	return collection
		.getFilteredByGlob('./posts/*.md')
		.sort((a, b) => b.data.minRead - a.data.minRead)
}
exports.sortedByTimeEs = function (collection) {
	return collection
		.getFilteredByGlob('./posts/*.md')
		.sort((a, b) => b.data.minRead - a.data.minRead)
}
// ? END COLLECTION SORTED BY TIME

// ? BEGIN COLLECTION SORTED BY CATEGORY
exports.sortedByCategoryEn = function (collection) {
	return collection.getFilteredByGlob('./posts/*.md').sort(function (a, b) {
		if (a.data.category && b.data.category) {
			return a.data.category.localeCompare(b.data.category)
		}
		return 0
	})
}
exports.sortedByCategoryEs = function (collection) {
	return collection.getFilteredByGlob('./posts/*.md').sort(function (a, b) {
		if (a.data.category && b.data.category) {
			return a.data.category.localeCompare(b.data.category)
		}
		return 0
	})
}
// ? END COLLECTION SORTED BY CATEGORY

// ? BEGIN COLLECTION SORTED BY DATE
exports.sortedByDateEn = function (collection) {
	return collection
		.getFilteredByGlob('./posts/*.md')
		.sort((a, b) => b.data.publishDate - a.data.publishDate)
		.reverse()
}
exports.sortedByDateEs = function (collection) {
	return collection
		.getFilteredByGlob('./posts/*.md')
		.sort((a, b) => b.data.publishDate - a.data.publishDate)
		.reverse()
}
// ? END COLLECTION SORTED BY DATE
