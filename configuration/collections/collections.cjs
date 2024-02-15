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
	generalCollectionEn: function (collection) {
		return collection
			.getFilteredByGlob('./posts/*.md')
			.filter(
				(item) =>
					item.data.category === 'general' &&
					item.data.language === 'en'
			)
			.sort((a, b) => b.data.publishDate - a.data.publishDate)
	},
	generalCollectionEs: function (collection) {
		return collection
			.getFilteredByGlob('./posts/*.md')
			.filter(
				(item) =>
					item.data.category === 'general' &&
					item.data.language === 'es'
			)
			.sort((a, b) => b.data.publishDate - a.data.publishDate)
	},
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
	sortedGeneralByTitleEn: function (collection) {
		return collection
			.getFilteredByGlob('./posts/*.md')
			.filter(
				(item) =>
					item.data.category === 'general' &&
					item.data.language === 'en'
			)
			.sort(function (a, b) {
				if (a.data.title && b.data.title) {
					return a.data.title.localeCompare(b.data.title)
				}
				return 0
			})
	},
	sortedGeneralByTitleEs: function (collection) {
		return collection
			.getFilteredByGlob('./posts/*.md')
			.filter(
				(item) =>
					item.data.category === 'general' &&
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
	sortedGeneralByTimeEn: function (collection) {
		return collection
			.getFilteredByGlob('./posts/*.md')
			.filter(
				(item) =>
					item.data.category === 'general' &&
					item.data.language === 'en'
			)
			.sort((a, b) => b.data.minRead - a.data.minRead)
	},
	sortedGeneralByTimeEs: function (collection) {
		return collection
			.getFilteredByGlob('./posts/*.md')
			.filter(
				(item) =>
					item.data.category === 'general' &&
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
	sortedGeneralByDateEn: function (collection) {
		return collection
			.getFilteredByGlob('./posts/*.md')
			.filter(
				(item) =>
					item.data.category === 'general' &&
					item.data.language === 'en'
			)
			.sort((a, b) => b.data.publishDate - a.data.publishDate)
			.reverse()
	},
	sortedGeneralByDateEs: function (collection) {
		return collection
			.getFilteredByGlob('./posts/*.md')
			.filter(
				(item) =>
					item.data.category === 'general' &&
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
	sortedByTitleEn: function (collection) {
		return collection
			.getFilteredByGlob('./posts/*.md')
			.filter((item) => item.data.language === 'en')
			.sort(function (a, b) {
				if (a.data.title && b.data.title) {
					return a.data.title.localeCompare(b.data.title)
				}
				return 0
			})
	},
	sortedByTitleEs: function (collection) {
		return collection
			.getFilteredByGlob('./posts/*.md')
			.filter((item) => item.data.language === 'es')
			.sort(function (a, b) {
				if (a.data.title && b.data.title) {
					return a.data.title.localeCompare(b.data.title)
				}
				return 0
			})
	},
	sortedByTimeEn: function (collection) {
		return collection
			.getFilteredByGlob('./posts/*.md')
			.filter((item) => item.data.language === 'en')
			.sort((a, b) => b.data.minRead - a.data.minRead)
	},
	sortedByTimeEs: function (collection) {
		return collection
			.getFilteredByGlob('./posts/*.md')
			.filter((item) => item.data.language === 'es')
			.sort((a, b) => b.data.minRead - a.data.minRead)
	},
	sortedByCategoryEn: function (collection) {
		return collection
			.getFilteredByGlob('./posts/*.md')
			.filter((item) => item.data.language === 'en')
			.sort(function (a, b) {
				if (a.data.category && b.data.category) {
					return a.data.category.localeCompare(b.data.category)
				}
				return 0
			})
	},
	sortedByCategoryEs: function (collection) {
		return collection
			.getFilteredByGlob('./posts/*.md')
			.filter((item) => item.data.language === 'es')
			.sort(function (a, b) {
				if (a.data.category && b.data.category) {
					return a.data.category.localeCompare(b.data.category)
				}
				return 0
			})
	},
	sortedByDateEn: function (collection) {
		return collection
			.getFilteredByGlob('./posts/*.md')
			.filter((item) => item.data.language === 'en')
			.sort((a, b) => b.data.publishDate - a.data.publishDate)
			.reverse()
	},
	sortedByDateEs: function (collection) {
		return collection
			.getFilteredByGlob('./posts/*.md')
			.filter((item) => item.data.language === 'es')
			.sort((a, b) => b.data.publishDate - a.data.publishDate)
			.reverse()
	},
}
