let bodyTagPostWrapper = document.getElementById('body-tag-post-wrapper')
let h1 = document.querySelector('h1')
let h2 = document.querySelector('h2')
let h3 = document.querySelector('h3')
let post__mainContent = document.querySelector('.post__mainContent')

if (
	post__mainContent.contains(h1) ||
	post__mainContent.contains(h2) ||
	post__mainContent.contains(h3)
) {
	bodyTagPostWrapper.setAttribute('class', 'body-tag-post-table')
	post__mainContent = document.querySelector('.post__mainContent')['children']

	const list = []

	for (let index = 0; index < post__mainContent.length; index++) {
		if (post__mainContent[index]['localName'] == 'h1') {
			list.push(post__mainContent[index])
		}

		if (post__mainContent[index]['localName'] == 'h2') {
			list.push(post__mainContent[index])
		}

		if (post__mainContent[index]['localName'] == 'h3') {
			list.push(post__mainContent[index])
		}
	}

	for (let index = 0; index < list.length; index++) {
		list[index].setAttribute('id', index + 1)
		console.log(list[index])
	}

	tocbot.init({
		fixedSidebarOffset: 'auto',
		scrollSmoothDuration: 100,
	})
	tocbot.refresh()
}
