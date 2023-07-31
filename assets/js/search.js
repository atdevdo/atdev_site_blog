!(function (e, t) {
	'use strict'
	let n = (n) => {
		let l = e.searchIndex.search(n.target.value, {
				bool: 'OR',
				expand: !0,
			}),
			d = t.getElementById('searchResults')
		t.getElementById('noResultsFound'),
			(d.innerHTML = ''),
			l &&
				l.map((e) => {
					let { id: n, title: l, description: a } = e.doc,
						r = t.createElement('li')
					d.appendChild(r)
					let s = t.createElement('h3')
					r.appendChild(s)
					let h = t.createElement('a')
					h.setAttribute('href', n),
						(h.textContent = l),
						s.appendChild(h)
					let c = t.createElement('p')
					;(c.textContent = a), r.appendChild(c)
				})
	}
	fetch('/search-index.json').then((l) =>
		l.json().then((l) => {
			;(e.searchIndex = elasticlunr.Index.load(l)),
				t.getElementById('searchField').addEventListener('input', n)
		})
	)
})(window, document)
