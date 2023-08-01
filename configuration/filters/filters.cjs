/** @format */
const { DateTime } = require('luxon')
function postDate(dateObj) {
	return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED)
}

module.exports = {
	postDate,
}
