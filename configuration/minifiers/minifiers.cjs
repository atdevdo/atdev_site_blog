const CleanCSS = require('clean-css')
const { minify } = require('terser')

module.exports = {
	cssMinifier: function (code) {
		return new CleanCSS({}).minify(code).styles
	},
	jsMinifier: async function (code, callback) {
		try {
			const minified = await minify(code)
			callback(null, minified.code)
		} catch (err) {
			console.error('Terser error: ', err)
			// Fail gracefully.
			callback(null, code)
		}
	},
}
