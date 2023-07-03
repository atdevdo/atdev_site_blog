let post__mainContent = document.querySelector('.post__mainContent')['children']

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

tocbot.init()
