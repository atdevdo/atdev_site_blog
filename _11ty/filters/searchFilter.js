/** @format */

const elasticlunr = require('elasticlunr')

module.exports = function (collection) {
	var index = elasticlunr(function () {
		// @ts-ignore
		this.addField('title')
		// @ts-ignore
		this.setRef('id')
	})

	collection.forEach((page) => {
		index.addDoc({
			id: page.url,
			title: page.template.frontMatter.data.title,
		})
	})

	return index.toJSON()
}
