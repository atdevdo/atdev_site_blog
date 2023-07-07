/** @format */

var header = document.querySelector('header')
var sticky = header.offsetTop
let myButton = document.getElementById('scroll-button')

window.onscroll = function () {
	myFunction()
	scrollFunction()
}

function myFunction() {
	if (window.pageYOffset > sticky) {
		header.classList.add('sticky')
	} else {
		header.classList.remove('sticky')
	}
}

function scrollFunction() {
	if (
		document.body.scrollTop > 100 ||
		document.documentElement.scrollTop > 100
	) {
		myButton.style.display = 'block'
	} else {
		myButton.style.display = 'none'
	}
}

window.addEventListener('message', function (event) {
	if (event.data.scrollY !== undefined) {
		window.scrollTo(0, event.data.scrollY)
	}
})
