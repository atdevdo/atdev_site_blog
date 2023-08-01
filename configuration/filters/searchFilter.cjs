const elasticlunr = require('elasticlunr')

elasticlunr.clearStopWords()

module.exports = function (collection) {
	var index = elasticlunr(function () {
		this.addField('title')
		this.addField('description')
		this.setRef('id')
	})

	collection.forEach((page) => {
		index.addDoc({
			id: page.url,
			title: page.template.frontMatter.data.title,
			description: page.template.frontMatter.data.description,
		})
	})

	return index.toJSON()
}
