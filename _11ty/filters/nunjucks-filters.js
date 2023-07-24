/** @format */
function fixCategory(category) {
	return category.replace(/-/g, ' ')
}

function dateNow() {
	return new Date().toLocaleDateString('en-us', {
		weekday: 'long',
		year: 'numeric',
		month: 'short',
		day: 'numeric',
	})
}

module.exports = {
	fixCategory,
	dateNow,
}
