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

function resizeIFrame() {
	if (parent.postMessage) {
		var body = document.body,
			html = document.documentElement,
			loc = document.location,
			height = Math.max(
				body.scrollHeight,
				body.offsetHeight,
				html.clientHeight,
				html.scrollHeight,
				html.offsetHeight
			),
			width =
				Math.max(
					body.scrollWidth,
					body.offsetWidth, //add a bit of margin
					html.clientWidth,
					html.scrollWidth,
					html.offsetWidth
				) + 5

		parent.postMessage(
			{ h: height, w: width },
			loc.protocol + '//' + loc.host
		)
	}
}
