/** @format */

// ? BEGIN CODE COLLECTION
function codeCollection(collection) {
  return collection
    .getFilteredByGlob('./posts/**/*.md')
    .filter((item) => item.data.category === 'code')
    .sort((a, b) => b.data.publishDate - a.data.publishDate)
}
// ? END CODE COLLECTION

// ? BEGIN COMMUNITY COLLECTION
function communityCollection(collection) {
  return collection
    .getFilteredByGlob('./posts/**/*.md')
    .filter((item) => item.data.category === 'community')
    .sort((a, b) => b.data.publishDate - a.data.publishDate)
}
// ? END COMMUNITY COLLECTION

// ? BEGIN GROWTH COLLECTION
function growthCollection(collection) {
  return collection
    .getFilteredByGlob('./posts/**/*.md')
    .filter((item) => item.data.category === 'growth')
    .sort((a, b) => b.data.publishDate - a.data.publishDate)
}
// ? END GROWTH COLLECTION

// ? BEGIN REMOTE WORK COLLECTION
function remoteWorkCollection(collection) {
  return collection
    .getFilteredByGlob('./posts/**/*.md')
    .filter((item) => item.data.category === 'remote-work')
    .sort((a, b) => b.data.publishDate - a.data.publishDate)
}
// ? END REMOTE WORK COLLECTION

module.exports = {
  codeCollection,
  communityCollection,
  growthCollection,
  remoteWorkCollection,
}
