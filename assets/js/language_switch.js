/** @format */
// HTML ELEMENTS
const html = document.getElementById('html')
const btn_language = document.getElementsByClassName('btn-language')

// VARIABLES
let currentPage = 'pages'

// CONDITIONALS
if (!window.location.href.includes('pages')) {
	currentPage = 'services'
}

// CONSTANTS
const currentUrl = window.location.href
const slicedUrl = currentUrl.slice(
	currentUrl.indexOf(`/${currentPage}/${html.lang}/`)
)
const modifiedUrl = slicedUrl
const newUrl = modifiedUrl.replace(`/${currentPage}/${html.lang}/`, '')

// lOOPS
for (let index = 0; index < btn_language.length; index++) {
	btn_language[index].addEventListener('click', (e) => {
		// console.log(`/${currentPage}/${e.target.lang}/${newUrl}`)
		window.location.href = `/${currentPage}/${e.target.lang}/${newUrl}`
	})
}
