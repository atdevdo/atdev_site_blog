// * BEGIN COLLECTION SORTED BY TITLE
exports.sortedTechnologyByTitleEn = function (collection) {
	return collection
		.getFilteredByGlob('./posts/*.md')
		.filter(
			(item) =>
				item.data.category === 'technology' &&
				item.data.language === 'en'
		)
		.sort(function (a, b) {
			if (a.data.title && b.data.title) {
				return a.data.title.localeCompare(b.data.title)
			}
			return 0
		})
}
exports.sortedTechnologyByTitleEs = function (collection) {
	return collection
		.getFilteredByGlob('./posts/*.md')
		.filter(
			(item) =>
				item.data.category === 'technology' &&
				item.data.language === 'es'
		)
		.sort(function (a, b) {
			if (a.data.title && b.data.title) {
				return a.data.title.localeCompare(b.data.title)
			}
			return 0
		})
}

exports.sortedGrowthByTitleEn = function (collection) {
	return collection
		.getFilteredByGlob('./posts/*.md')
		.filter(
			(item) =>
				item.data.category === 'growth' && item.data.language === 'en'
		)
		.sort(function (a, b) {
			if (a.data.title && b.data.title) {
				return a.data.title.localeCompare(b.data.title)
			}
			return 0
		})
}
exports.sortedGrowthByTitleEs = function (collection) {
	return collection
		.getFilteredByGlob('./posts/*.md')
		.filter(
			(item) =>
				item.data.category === 'growth' && item.data.language === 'es'
		)
		.sort(function (a, b) {
			if (a.data.title && b.data.title) {
				return a.data.title.localeCompare(b.data.title)
			}
			return 0
		})
}

exports.sortedCommunityByTitleEn = function (collection) {
	return collection
		.getFilteredByGlob('./posts/*.md')
		.filter(
			(item) =>
				item.data.category === 'community' &&
				item.data.language === 'en'
		)
		.sort(function (a, b) {
			if (a.data.title && b.data.title) {
				return a.data.title.localeCompare(b.data.title)
			}
			return 0
		})
}
exports.sortedCommunityByTitleEs = function (collection) {
	return collection
		.getFilteredByGlob('./posts/*.md')
		.filter(
			(item) =>
				item.data.category === 'community' &&
				item.data.language === 'es'
		)
		.sort(function (a, b) {
			if (a.data.title && b.data.title) {
				return a.data.title.localeCompare(b.data.title)
			}
			return 0
		})
}

exports.sortedRemoteWorkByTitleEn = function (collection) {
	return collection
		.getFilteredByGlob('./posts/*.md')
		.filter(
			(item) =>
				item.data.category === 'remote-work' &&
				item.data.language === 'en'
		)
		.sort(function (a, b) {
			if (a.data.title && b.data.title) {
				return a.data.title.localeCompare(b.data.title)
			}
			return 0
		})
}
exports.sortedRemoteWorkByTitleEs = function (collection) {
	return collection
		.getFilteredByGlob('./posts/*.md')
		.filter(
			(item) =>
				item.data.category === 'remote-work' &&
				item.data.language === 'es'
		)
		.sort(function (a, b) {
			if (a.data.title && b.data.title) {
				return a.data.title.localeCompare(b.data.title)
			}
			return 0
		})
}
// * END COLLECTION SORTED BY TITLE

// * BEGIN COLLECTION SORTED BY TIME
exports.sortedTechnologyByTimeEn = function (collection) {
	return collection
		.getFilteredByGlob('./posts/*.md')
		.filter(
			(item) =>
				item.data.category === 'technology' &&
				item.data.language === 'en'
		)
		.sort((a, b) => b.data.minRead - a.data.minRead)
}
exports.sortedTechnologyByTimeEs = function (collection) {
	return collection
		.getFilteredByGlob('./posts/*.md')
		.filter(
			(item) =>
				item.data.category === 'technology' &&
				item.data.language === 'es'
		)
		.sort((a, b) => b.data.minRead - a.data.minRead)
}

exports.sortedGrowthByTimeEn = function (collection) {
	return collection
		.getFilteredByGlob('./posts/*.md')
		.filter(
			(item) =>
				item.data.category === 'growth' && item.data.language === 'en'
		)
		.sort((a, b) => b.data.minRead - a.data.minRead)
}
exports.sortedGrowthByTimeEs = function (collection) {
	return collection
		.getFilteredByGlob('./posts/*.md')
		.filter(
			(item) =>
				item.data.category === 'growth' && item.data.language === 'es'
		)
		.sort((a, b) => b.data.minRead - a.data.minRead)
}

exports.sortedCommunityByTimeEn = function (collection) {
	return collection
		.getFilteredByGlob('./posts/*.md')
		.filter(
			(item) =>
				item.data.category === 'community' &&
				item.data.language === 'en'
		)
		.sort((a, b) => b.data.minRead - a.data.minRead)
}
exports.sortedCommunityByTimeEs = function (collection) {
	return collection
		.getFilteredByGlob('./posts/*.md')
		.filter(
			(item) =>
				item.data.category === 'community' &&
				item.data.language === 'es'
		)
		.sort((a, b) => b.data.minRead - a.data.minRead)
}

exports.sortedRemoteWorkByTimeEn = function (collection) {
	return collection
		.getFilteredByGlob('./posts/*.md')
		.filter(
			(item) =>
				item.data.category === 'remote-work' &&
				item.data.language === 'en'
		)
		.sort((a, b) => b.data.minRead - a.data.minRead)
}
exports.sortedRemoteWorkByTimeEs = function (collection) {
	return collection
		.getFilteredByGlob('./posts/*.md')
		.filter(
			(item) =>
				item.data.category === 'remote-work' &&
				item.data.language === 'es'
		)
		.sort((a, b) => b.data.minRead - a.data.minRead)
}
// * END COLLECTION SORTED BY TIME

// * BEGIN COLLECTION SORTED BY DATE
exports.sortedTechnologyByDateEn = function (collection) {
	return collection
		.getFilteredByGlob('./posts/*.md')
		.filter(
			(item) =>
				item.data.category === 'technology' &&
				item.data.language === 'en'
		)
		.sort((a, b) => b.data.publishDate - a.data.publishDate)
		.reverse()
}
exports.sortedTechnologyByDateEs = function (collection) {
	return collection
		.getFilteredByGlob('./posts/*.md')
		.filter(
			(item) =>
				item.data.category === 'technology' &&
				item.data.language === 'es'
		)
		.sort((a, b) => b.data.publishDate - a.data.publishDate)
		.reverse()
}

exports.sortedGrowthByDateEn = function (collection) {
	return collection
		.getFilteredByGlob('./posts/*.md')
		.filter(
			(item) =>
				item.data.category === 'growth' && item.data.language === 'en'
		)
		.sort((a, b) => b.data.publishDate - a.data.publishDate)
		.reverse()
}
exports.sortedGrowthByDateEs = function (collection) {
	return collection
		.getFilteredByGlob('./posts/*.md')
		.filter(
			(item) =>
				item.data.category === 'growth' && item.data.language === 'es'
		)
		.sort((a, b) => b.data.publishDate - a.data.publishDate)
		.reverse()
}

exports.sortedCommunityByDateEn = function (collection) {
	return collection
		.getFilteredByGlob('./posts/*.md')
		.filter(
			(item) =>
				item.data.category === 'community' &&
				item.data.language === 'en'
		)
		.sort((a, b) => b.data.publishDate - a.data.publishDate)
		.reverse()
}
exports.sortedCommunityByDateEs = function (collection) {
	return collection
		.getFilteredByGlob('./posts/*.md')
		.filter(
			(item) =>
				item.data.category === 'community' &&
				item.data.language === 'es'
		)
		.sort((a, b) => b.data.publishDate - a.data.publishDate)
		.reverse()
}

exports.sortedRemoteWorkByDateEn = function (collection) {
	return collection
		.getFilteredByGlob('./posts/*.md')
		.filter(
			(item) =>
				item.data.category === 'remote-work' &&
				item.data.language === 'en'
		)
		.sort((a, b) => b.data.publishDate - a.data.publishDate)
		.reverse()
}
exports.sortedRemoteWorkByDateEs = function (collection) {
	return collection
		.getFilteredByGlob('./posts/*.md')
		.filter(
			(item) =>
				item.data.category === 'remote-work' &&
				item.data.language === 'es'
		)
		.sort((a, b) => b.data.publishDate - a.data.publishDate)
		.reverse()
}
// * END COLLECTION SORTED BY DATE
