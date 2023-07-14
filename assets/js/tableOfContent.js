// const post__mainContent = document.querySelector('.post__mainContent')
// const elements = post__mainContent.children
// const js_toc_id_data = document.querySelector('[data-toc]')

// if (
// 	post__mainContent.querySelector('h1') ||
// 	post__mainContent.querySelector('h2') ||
// 	post__mainContent.querySelector('h3')
// ) {
// 	js_toc_id_data.setAttribute('id', 'js-toc-id')
// 	let bodyTagPostWrapper = document.getElementById('body-tag-post-wrapper')
// 	bodyTagPostWrapper.setAttribute('class', 'body-tag-post-table')
// 	const list = []

// 	for (let index = 0; index < elements.length; index++) {
// 		if (elements[index].tagName.toLowerCase() == 'h1') {
// 			list.push(elements[index])
// 		} else if (elements[index].tagName.toLowerCase() == 'h2') {
// 			list.push(elements[index])
// 		} else if (elements[index].tagName.toLowerCase() == 'h3') {
// 			list.push(elements[index])
// 		}
// 	}

// 	for (let index = 0; index < list.length; index++) {
// 		list[index].setAttribute('id', index + 1)
// 	}

// 	tocbot.init({
// 		fixedSidebarOffset: 'auto',
// 		scrollSmoothDuration: 100,
// 		disableTocScrollSync: false,
// 	})
// 	tocbot.refresh()
// }

const post__mainContent = document.querySelector('.post__mainContent')
const elements = post__mainContent.children
const js_toc_id_data = document.querySelector('[data-toc]')

js_toc_id_data.setAttribute('id', 'js-toc-id')
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
	disableTocScrollSync: false,
})
tocbot.refresh()
