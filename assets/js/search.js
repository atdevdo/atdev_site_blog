/** @format */

;(function (window, document) {
	'use strict'

	const search = (e) => {
		// @ts-ignore
		const results = window.searchIndex.search(e.target.value, {
			bool: 'OR',
			expand: true,
		})

		const resEl = document.getElementById('searchResults')
		const noResultsEl = document.getElementById('noResultsFound')

		// @ts-ignore
		resEl.innerHTML = ''
		if (results) {
			// @ts-ignore

			results.map((r) => {
				const { id, title, description } = r.doc
				const el = document.createElement('li')
				// @ts-ignore
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
		}

		//   else {
		//     // @ts-ignore
		//     noResultsEl.style.display = 'block'
		//   }
	}

	fetch('/search-index.json').then((response) =>
		response.json().then((rawIndex) => {
			// @ts-ignore
			window.searchIndex = elasticlunr.Index.load(rawIndex)
			// @ts-ignore
			document
				.getElementById('searchField')
				.addEventListener('input', search)
		})
	)
})(window, document)
