module.exports = {
	posts: function (collection) {
		return [...collection.getFilteredByGlob('./posts/**/*.md')]
	},
	decapPostsEn: function (collection) {
		return collection
			.getFilteredByGlob('./posts/*.md')
			.filter((item) => item.data.language === 'en')
			.sort((a, b) => b.data.publishDate - a.data.publishDate)
	},
	decapPostsEs: function (collection) {
		return collection
			.getFilteredByGlob('./posts/*.md')
			.filter((item) => item.data.language === 'es')
			.sort((a, b) => b.data.publishDate - a.data.publishDate)
	},
	// ? BEGIN TECHNOLOGY COLLECTION
	technologyCollectionEn: function (collection) {
		return collection
			.getFilteredByGlob('./posts/*.md')
			.filter(
				(item) =>
					item.data.category === 'technology' &&
					item.data.language === 'en'
			)
			.sort((a, b) => b.data.publishDate - a.data.publishDate)
	},
	technologyCollectionEs: function (collection) {
		return collection
			.getFilteredByGlob('./posts/*.md')
			.filter(
				(item) =>
					item.data.category === 'technology' &&
					item.data.language === 'es'
			)
			.sort((a, b) => b.data.publishDate - a.data.publishDate)
	},
	// ? END TECHNOLOGY COLLECTION

	// ? BEGIN COMMUNITY COLLECTION
	communityCollectionEn: function (collection) {
		return collection
			.getFilteredByGlob('./posts/*.md')
			.filter(
				(item) =>
					item.data.category === 'community' &&
					item.data.language === 'en'
			)
			.sort((a, b) => b.data.publishDate - a.data.publishDate)
	},
	communityCollectionEs: function (collection) {
		return collection
			.getFilteredByGlob('./posts/*.md')
			.filter(
				(item) =>
					item.data.category === 'community' &&
					item.data.language === 'es'
			)
			.sort((a, b) => b.data.publishDate - a.data.publishDate)
	},
	// ? END COMMUNITY COLLECTION

	// ? BEGIN GROWTH COLLECTION
	growthCollectionEn: function (collection) {
		return collection
			.getFilteredByGlob('./posts/*.md')
			.filter(
				(item) =>
					item.data.category === 'growth' &&
					item.data.language === 'en'
			)
			.sort((a, b) => b.data.publishDate - a.data.publishDate)
	},
	growthCollectionEs: function (collection) {
		return collection
			.getFilteredByGlob('./posts/*.md')
			.filter(
				(item) =>
					item.data.category === 'growth' &&
					item.data.language === 'es'
			)
			.sort((a, b) => b.data.publishDate - a.data.publishDate)
	},
	// ? END GROWTH COLLECTION

	// ? BEGIN REMOTE WORK COLLECTION
	remoteWorkCollectionEn: function (collection) {
		return collection
			.getFilteredByGlob('./posts/*.md')
			.filter(
				(item) =>
					item.data.category === 'remote-work' &&
					item.data.language === 'en'
			)
			.sort((a, b) => b.data.publishDate - a.data.publishDate)
	},
	remoteWorkCollectionEs: function (collection) {
		return collection
			.getFilteredByGlob('./posts/*.md')
			.filter(
				(item) =>
					item.data.category === 'remote-work' &&
					item.data.language === 'es'
			)
			.sort((a, b) => b.data.publishDate - a.data.publishDate)
	},
	// ? END REMOTE WORK COLLECTION

	// * BEGIN COLLECTION SORTED BY TITLE
	sortedTechnologyByTitleEn: function (collection) {
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
	},
	sortedTechnologyByTitleEs: function (collection) {
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
	},

	sortedGrowthByTitleEn: function (collection) {
		return collection
			.getFilteredByGlob('./posts/*.md')
			.filter(
				(item) =>
					item.data.category === 'growth' &&
					item.data.language === 'en'
			)
			.sort(function (a, b) {
				if (a.data.title && b.data.title) {
					return a.data.title.localeCompare(b.data.title)
				}
				return 0
			})
	},
	sortedGrowthByTitleEs: function (collection) {
		return collection
			.getFilteredByGlob('./posts/*.md')
			.filter(
				(item) =>
					item.data.category === 'growth' &&
					item.data.language === 'es'
			)
			.sort(function (a, b) {
				if (a.data.title && b.data.title) {
					return a.data.title.localeCompare(b.data.title)
				}
				return 0
			})
	},

	sortedCommunityByTitleEn: function (collection) {
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
	},
	sortedCommunityByTitleEs: function (collection) {
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
	},

	sortedRemoteWorkByTitleEn: function (collection) {
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
	},
	sortedRemoteWorkByTitleEs: function (collection) {
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
	},
	// * END COLLECTION SORTED BY TITLE

	// * BEGIN COLLECTION SORTED BY TIME
	sortedTechnologyByTimeEn: function (collection) {
		return collection
			.getFilteredByGlob('./posts/*.md')
			.filter(
				(item) =>
					item.data.category === 'technology' &&
					item.data.language === 'en'
			)
			.sort((a, b) => b.data.minRead - a.data.minRead)
	},
	sortedTechnologyByTimeEs: function (collection) {
		return collection
			.getFilteredByGlob('./posts/*.md')
			.filter(
				(item) =>
					item.data.category === 'technology' &&
					item.data.language === 'es'
			)
			.sort((a, b) => b.data.minRead - a.data.minRead)
	},

	sortedGrowthByTimeEn: function (collection) {
		return collection
			.getFilteredByGlob('./posts/*.md')
			.filter(
				(item) =>
					item.data.category === 'growth' &&
					item.data.language === 'en'
			)
			.sort((a, b) => b.data.minRead - a.data.minRead)
	},
	sortedGrowthByTimeEs: function (collection) {
		return collection
			.getFilteredByGlob('./posts/*.md')
			.filter(
				(item) =>
					item.data.category === 'growth' &&
					item.data.language === 'es'
			)
			.sort((a, b) => b.data.minRead - a.data.minRead)
	},

	sortedCommunityByTimeEn: function (collection) {
		return collection
			.getFilteredByGlob('./posts/*.md')
			.filter(
				(item) =>
					item.data.category === 'community' &&
					item.data.language === 'en'
			)
			.sort((a, b) => b.data.minRead - a.data.minRead)
	},
	sortedCommunityByTimeEs: function (collection) {
		return collection
			.getFilteredByGlob('./posts/*.md')
			.filter(
				(item) =>
					item.data.category === 'community' &&
					item.data.language === 'es'
			)
			.sort((a, b) => b.data.minRead - a.data.minRead)
	},

	sortedRemoteWorkByTimeEn: function (collection) {
		return collection
			.getFilteredByGlob('./posts/*.md')
			.filter(
				(item) =>
					item.data.category === 'remote-work' &&
					item.data.language === 'en'
			)
			.sort((a, b) => b.data.minRead - a.data.minRead)
	},
	sortedRemoteWorkByTimeEs: function (collection) {
		return collection
			.getFilteredByGlob('./posts/*.md')
			.filter(
				(item) =>
					item.data.category === 'remote-work' &&
					item.data.language === 'es'
			)
			.sort((a, b) => b.data.minRead - a.data.minRead)
	},
	// * END COLLECTION SORTED BY TIME

	// * BEGIN COLLECTION SORTED BY DATE
	sortedTechnologyByDateEn: function (collection) {
		return collection
			.getFilteredByGlob('./posts/*.md')
			.filter(
				(item) =>
					item.data.category === 'technology' &&
					item.data.language === 'en'
			)
			.sort((a, b) => b.data.publishDate - a.data.publishDate)
			.reverse()
	},
	sortedTechnologyByDateEs: function (collection) {
		return collection
			.getFilteredByGlob('./posts/*.md')
			.filter(
				(item) =>
					item.data.category === 'technology' &&
					item.data.language === 'es'
			)
			.sort((a, b) => b.data.publishDate - a.data.publishDate)
			.reverse()
	},

	sortedGrowthByDateEn: function (collection) {
		return collection
			.getFilteredByGlob('./posts/*.md')
			.filter(
				(item) =>
					item.data.category === 'growth' &&
					item.data.language === 'en'
			)
			.sort((a, b) => b.data.publishDate - a.data.publishDate)
			.reverse()
	},
	sortedGrowthByDateEs: function (collection) {
		return collection
			.getFilteredByGlob('./posts/*.md')
			.filter(
				(item) =>
					item.data.category === 'growth' &&
					item.data.language === 'es'
			)
			.sort((a, b) => b.data.publishDate - a.data.publishDate)
			.reverse()
	},

	sortedCommunityByDateEn: function (collection) {
		return collection
			.getFilteredByGlob('./posts/*.md')
			.filter(
				(item) =>
					item.data.category === 'community' &&
					item.data.language === 'en'
			)
			.sort((a, b) => b.data.publishDate - a.data.publishDate)
			.reverse()
	},
	sortedCommunityByDateEs: function (collection) {
		return collection
			.getFilteredByGlob('./posts/*.md')
			.filter(
				(item) =>
					item.data.category === 'community' &&
					item.data.language === 'es'
			)
			.sort((a, b) => b.data.publishDate - a.data.publishDate)
			.reverse()
	},

	sortedRemoteWorkByDateEn: function (collection) {
		return collection
			.getFilteredByGlob('./posts/*.md')
			.filter(
				(item) =>
					item.data.category === 'remote-work' &&
					item.data.language === 'en'
			)
			.sort((a, b) => b.data.publishDate - a.data.publishDate)
			.reverse()
	},
	sortedRemoteWorkByDateEs: function (collection) {
		return collection
			.getFilteredByGlob('./posts/*.md')
			.filter(
				(item) =>
					item.data.category === 'remote-work' &&
					item.data.language === 'es'
			)
			.sort((a, b) => b.data.publishDate - a.data.publishDate)
			.reverse()
	},
	// * END COLLECTION SORTED BY DATE
}
