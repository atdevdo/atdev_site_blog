const post__mainContent = document.querySelector('.post__mainContent')
const elements = post__mainContent.children

if (
	post__mainContent.querySelector('h1') ||
	post__mainContent.querySelector('h2') ||
	post__mainContent.querySelector('h3')
) {
	let bodyTagPostWrapper = document.getElementById('body-tag-post-wrapper')
	bodyTagPostWrapper.setAttribute('class', 'body-tag-post-table')
	const list = []

	for (let index = 0; index < elements.length; index++) {
		if (elements[index].tagName.toLowerCase() == 'h1') {
			list.push(elements[index])
		} else if (elements[index].tagName.toLowerCase() == 'h2') {
			list.push(elements[index])
		} else if (elements[index].tagName.toLowerCase() == 'h3') {
			list.push(elements[index])
		}
	}

	for (let index = 0; index < list.length; index++) {
		list[index].setAttribute('id', index + 1)
	}

	tocbot.init({
		fixedSidebarOffset: 'auto',
		scrollSmoothDuration: 100,
	})
	tocbot.refresh()
}

const element = document.getElementById('top')

element.scrollIntoView()
element.scrollIntoView(true)
element.scrollIntoView({ block: 'end' })
element.scrollIntoView({
	behavior: 'smooth',
	block: 'center',
	inline: 'center',
})

const tableOfContent = document.getElementById('tableOfContent')

tableOfContent.style.position = 'sticky !important;'
tableOfContent.style.top = '30% !important;'
tableOfContent.style.left = '85px !important;'
tableOfContent.style.transform = 'translate(-50%, -50%) !important;'

console.log(tableOfContent.parentNode.parentNode.parentNode.parentNode)
