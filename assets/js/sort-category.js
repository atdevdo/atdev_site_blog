/** @format */

const sorted_title_box = document.getElementById('sorted-title')
const sorted_time_box = document.getElementById('sorted-time')
const sorted_date_box = document.getElementById('sorted-date')
const not_sorted_box = document.getElementById('not-sorted')

const sort_by_title_btn = document.getElementById('sort-btn-title')
const sort_by_time_to_read_btn = document.getElementById('sort-btn-time-read')
const sort_by_date_btn = document.getElementById('sort-btn-date')

const btn_sort_title_img = sort_by_title_btn.querySelector('img')
const btn_sort_time_img = sort_by_time_to_read_btn.querySelector('img')

let title_counter = 1
let time_counter = 1
let date_counter = 1

sorted_title_box.style.display = 'none'
sorted_time_box.style.display = 'none'
sorted_date_box.style.display = 'none'
not_sorted_box.style.display = 'block'

sort_by_title_btn.addEventListener('click', () => {
	title_counter++
	if (title_counter % 2 == 0) {
		sorted_title_box.style.display = 'block'
		sort_by_title_btn.setAttribute('class', 'active')
		btn_sort_title_img.src = '/assets/icons/sort-az-flipped.png'

		sorted_time_box.style.display = 'none'
		sorted_date_box.style.display = 'none'
		not_sorted_box.style.display = 'none'

		btn_sort_time_img.src = '/assets/icons/sort-time-read.png'

		date_counter = 1
		time_counter = 1

		sort_by_time_to_read_btn.removeAttribute('class', 'active')
		sort_by_date_btn.removeAttribute('class', 'active')
	} else {
		sorted_title_box.style.display = 'none'
		sorted_time_box.style.display = 'none'
		sorted_date_box.style.display = 'none'

		not_sorted_box.style.display = 'block'
		btn_sort_title_img.src = '/assets/icons/sort-az.png'

		sort_by_title_btn.removeAttribute('class', 'active')
		sort_by_time_to_read_btn.removeAttribute('class', 'active')
		sort_by_date_btn.removeAttribute('class', 'active')
	}
})

sort_by_time_to_read_btn.addEventListener('click', () => {
	time_counter++
	if (time_counter % 2 == 0) {
		sorted_time_box.style.display = 'block'
		sort_by_time_to_read_btn.setAttribute('class', 'active')
		btn_sort_time_img.src = '/assets/icons/sort-time-read-flipped.png'

		sorted_title_box.style.display = 'none'
		sorted_date_box.style.display = 'none'
		not_sorted_box.style.display = 'none'

		btn_sort_title_img.src = '/assets/icons/sort-az.png'

		title_counter = 1
		date_counter = 1

		sort_by_title_btn.removeAttribute('class', 'active')
		sort_by_date_btn.removeAttribute('class', 'active')
	} else {
		sorted_time_box.style.display = 'none'
		sorted_title_box.style.display = 'none'
		sorted_date_box.style.display = 'none'

		not_sorted_box.style.display = 'block'
		btn_sort_time_img.src = '/assets/icons/sort-time-read.png'

		sort_by_time_to_read_btn.removeAttribute('class', 'active')
		sort_by_title_btn.removeAttribute('class', 'active')
		sort_by_date_btn.removeAttribute('class', 'active')
	}
})

sort_by_date_btn.addEventListener('click', () => {
	date_counter++
	if (date_counter % 2 == 0) {
		sorted_date_box.style.display = 'block'
		sort_by_date_btn.setAttribute('class', 'active')

		sorted_title_box.style.display = 'none'
		sorted_time_box.style.display = 'none'
		not_sorted_box.style.display = 'none'

		btn_sort_time_img.src = '/assets/icons/sort-time-read.png'
		btn_sort_title_img.src = '/assets/icons/sort-az.png'

		title_counter = 1
		time_counter = 1

		sort_by_title_btn.removeAttribute('class', 'active')
		sort_by_time_to_read_btn.removeAttribute('class', 'active')
	} else {
		sorted_date_box.style.display = 'none'
		sorted_title_box.style.display = 'none'
		sorted_time_box.style.display = 'none'

		not_sorted_box.style.display = 'block'

		sort_by_date_btn.removeAttribute('class', 'active')
		sort_by_title_btn.removeAttribute('class', 'active')
		sort_by_time_to_read_btn.removeAttribute('class', 'active')
	}
})
// END DISPLAY SORTED POSTS
