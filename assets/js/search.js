;(function (window, document) {
	'use strict'

	const search = (e) => {
		const results = window.searchIndex.search(e.target.value, {
			bool: 'OR',
			expand: true,
		})

		const resEl = document.getElementById('searchResults')
		const noResultsEl = document.getElementById('noResultsFound')

		resEl.innerHTML = ''
		if (results) {
			noResultsEl.style.display = 'none'
			results.map((r) => {
				const { id, title, description } = r.doc
				const el = document.createElement('li')
				resEl.appendChild(el)

				const h3 = document.createElement('h3')
				el.appendChild(h3)

				const a = document.createElement('a')
				a.setAttribute('href', id)
				a.textContent = title
				h3.appendChild(a)

				const p = document.createElement('p')
				p.textContent = description
				el.appendChild(p)
			})
		} else {
			noResultsEl.style.display = 'block'
		}
	}

	fetch('/search-index.json').then((response) =>
		response.json().then((rawIndex) => {
			window.searchIndex = elasticlunr.Index.load(rawIndex)
			document
				.getElementById('searchField')
				.addEventListener('input', search)
		})
	)
})(window, document)

// ;(function (window, document) {
// 	'use strict'

// 	const search = (e) => {
// 		const results = window.searchIndex.search(e.target.value, {
// 			bool: 'OR',
// 			expand: true,
// 		})

// 		const resEl = document.getElementById('searchResults')
// 		const noResultsEl = document.getElementById('noResultsFound')

// 		resEl.innerHTML = ''
// 		if (results) {
// 			noResultsEl.style.display = 'none'
// 			results.map((r) => {
// 				const { id, title, description } = r.doc
// 				const el = document.createElement('li')
// 				resEl.appendChild(el)

// 				const h3 = document.createElement('h3')
// 				el.appendChild(h3)

// 				const a = document.createElement('a')
// 				a.setAttribute('href', id)
// 				a.textContent = title
// 				h3.appendChild(a)

// 				const p = document.createElement('p')
// 				p.textContent = description
// 				el.appendChild(p)
// 			})
// 		} else {
// 			noResultsEl.style.display = 'block'
// 		}
// 	}

// 	fetch('/search-index-en.json').then((response) =>
// 		response.json().then((rawIndex) => {
// 			window.searchIndex = elasticlunr.Index.load(rawIndex)
// 			document
// 				.getElementById('searchField')
// 				.addEventListener('input', search)
// 		})
// 	)
// })(window, document)
// ;(function (window, document) {
// 	'use strict'

// 	const searchEs = (e) => {
// 		const resultsEs = window.searchIndex.search(e.target.value, {
// 			bool: 'OR',
// 			expand: true,
// 		})

// 		const resElEs = document.getElementById('searchResultsEs')
// 		const noResultsElEs = document.getElementById('noResultsFoundEs')

// 		resElEs.innerHTML = ''
// 		if (resultsEs) {
// 			noResultsElEs.style.display = 'none'
// 			resultsEs.map((r) => {
// 				const { id, title, description } = r.doc
// 				const el = document.createElement('li')
// 				resElEs.appendChild(el)

// 				const h3 = document.createElement('h3')
// 				el.appendChild(h3)

// 				const a = document.createElement('a')
// 				a.setAttribute('href', id + 'es')
// 				a.textContent = title
// 				h3.appendChild(a)

// 				const p = document.createElement('p')
// 				p.textContent = description
// 				el.appendChild(p)
// 			})
// 		} else {
// 			noResultsElEs.style.display = 'block'
// 		}
// 	}

// 	fetch('/search-index-es.json').then((response) =>
// 		response.json().then((rawIndex) => {
// 			window.searchIndex = elasticlunr.Index.load(rawIndex)
// 			document
// 				.getElementById('searchFieldEs')
// 				.addEventListener('input', searchEs)
// 		})
// 	)
// })(window, document)
