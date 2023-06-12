/** @format */

// * BEGIN COLLECTION SORTED BY TITLE
function sortedTechnologyByTitle(collection) {
  return collection
    .getFilteredByGlob('./posts/**/*.md')
    .filter((item) => item.data.category === 'technology')
    .sort(function (a, b) {
      if (a.data.title && b.data.title) {
        return a.data.title.localeCompare(b.data.title)
      }
      return 0
    })
}

function sortedGrowthByTitle(collection) {
  return collection
    .getFilteredByGlob('./posts/**/*.md')
    .filter((item) => item.data.category === 'growth')
    .sort(function (a, b) {
      if (a.data.title && b.data.title) {
        return a.data.title.localeCompare(b.data.title)
      }
      return 0
    })
}

function sortedCommunityByTitle(collection) {
  return collection
    .getFilteredByGlob('./posts/**/*.md')
    .filter((item) => item.data.category === 'community')
    .sort(function (a, b) {
      if (a.data.title && b.data.title) {
        return a.data.title.localeCompare(b.data.title)
      }
      return 0
    })
}

function sortedRemoteWorkByTitle(collection) {
  return collection
    .getFilteredByGlob('./posts/**/*.md')
    .filter((item) => item.data.category === 'remote-work')
    .sort(function (a, b) {
      if (a.data.title && b.data.title) {
        return a.data.title.localeCompare(b.data.title)
      }
      return 0
    })
}
// * END COLLECTION SORTED BY TITLE

// * BEGIN COLLECTION SORTED BY TIME
function sortedTechnologyByTime(collection) {
  return collection
    .getFilteredByGlob('./posts/**/*.md')
    .filter((item) => item.data.category === 'technology')
    .sort((a, b) => b.data.minRead - a.data.minRead)
}

function sortedGrowthByTime(collection) {
  return collection
    .getFilteredByGlob('./posts/**/*.md')
    .filter((item) => item.data.category === 'growth')
    .sort((a, b) => b.data.minRead - a.data.minRead)
}

function sortedCommunityByTime(collection) {
  return collection
    .getFilteredByGlob('./posts/**/*.md')
    .filter((item) => item.data.category === 'community')
    .sort((a, b) => b.data.minRead - a.data.minRead)
}

function sortedRemoteWorkByTime(collection) {
  return collection
    .getFilteredByGlob('./posts/**/*.md')
    .filter((item) => item.data.category === 'remote-work')
    .sort((a, b) => b.data.minRead - a.data.minRead)
}
// * END COLLECTION SORTED BY TIME

// * BEGIN COLLECTION SORTED BY DATE
function sortedTechnologyByDate(collection) {
  return collection
    .getFilteredByGlob('./posts/**/*.md')
    .filter((item) => item.data.category === 'technology')
    .sort((a, b) => b.data.publishDate - a.data.publishDate)
    .reverse()
}

function sortedGrowthByDate(collection) {
  return collection
    .getFilteredByGlob('./posts/**/*.md')
    .filter((item) => item.data.category === 'growth')
    .sort((a, b) => b.data.publishDate - a.data.publishDate)
    .reverse()
}

function sortedCommunityByDate(collection) {
  return collection
    .getFilteredByGlob('./posts/**/*.md')
    .filter((item) => item.data.category === 'community')
    .sort((a, b) => b.data.publishDate - a.data.publishDate)
    .reverse()
}

function sortedRemoteWorkByDate(collection) {
  return collection
    .getFilteredByGlob('./posts/**/*.md')
    .filter((item) => item.data.category === 'remote-work')
    .sort((a, b) => b.data.publishDate - a.data.publishDate)
    .reverse()
}
// * END COLLECTION SORTED BY DATE

module.exports = {
  sortedTechnologyByTitle,
  sortedTechnologyByTime,
  sortedTechnologyByDate,
  sortedGrowthByTitle,
  sortedGrowthByTime,
  sortedGrowthByDate,
  sortedCommunityByTitle,
  sortedCommunityByTime,
  sortedCommunityByDate,
  sortedRemoteWorkByTitle,
  sortedRemoteWorkByTime,
  sortedRemoteWorkByDate,
}
