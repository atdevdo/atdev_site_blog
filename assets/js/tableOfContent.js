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

const element = document.getElementById('tableOfContent')
element.scrollIntoView()
element.scrollIntoView(true)
element.scrollIntoView({ behavior: 'instant', block: 'center', inline: 'end' })
