/** @format */

const sorted_title_box = document.getElementById('sorted-title')
const sorted_time_box = document.getElementById('sorted-time')
const sorted_category_box = document.getElementById('sorted-category')
const sorted_date_box = document.getElementById('sorted-date')
const not_sorted_box = document.getElementById('not-sorted')

const sort_by_title_btn = document.getElementById('sort-btn-title')
const sort_by_time_to_read_btn = document.getElementById('sort-btn-time-read')
const sort_by_category_btn = document.getElementById('sort-btn-category')
const sort_by_date_btn = document.getElementById('sort-btn-date')

const btn_sort_title_img = sort_by_title_btn.querySelector('img')
const btn_sort_time_img = sort_by_time_to_read_btn.querySelector('img')
const btn_sort_category_img = sort_by_category_btn.querySelector('img')

let title_counter = 1
let time_counter = 1
let category_counter = 1
let date_counter = 1

sorted_title_box.style.display = 'none'
sorted_time_box.style.display = 'none'
sorted_category_box.style.display = 'none'
sorted_date_box.style.display = 'none'
not_sorted_box.style.display = 'block'

sort_by_title_btn.addEventListener('click', () => {
	title_counter++
	if (title_counter % 2 == 0) {
		sorted_title_box.style.display = 'block'
		btn_sort_title_img.src = '/assets/icons/sort-az-flipped.png'
		sort_by_title_btn.setAttribute('class', 'active')
		sort_by_time_to_read_btn.removeAttribute('class', 'active')
		sort_by_category_btn.removeAttribute('class', 'active')
		not_sorted_box.style.display = 'none'
	}

	if (title_counter % 2 != 0) {
		sorted_title_box.style.display = 'none'
		not_sorted_box.style.display = 'block'
		sort_by_title_btn.removeAttribute('class', 'active')
		btn_sort_title_img.src = '/assets/icons/sort-az.png'
	}
})

sort_by_time_to_read_btn.addEventListener('click', () => {
	time_counter++
	if (time_counter % 2 == 0) {
		sorted_time_box.style.display = 'block'
		sorted_title_box.style.display = 'none'
		sort_by_time_to_read_btn.setAttribute('class', 'active')
		sort_by_title_btn.removeAttribute('class', 'active')
		sort_by_category_btn.removeAttribute('class', 'active')
		not_sorted_box.style.display = 'none'
		btn_sort_time_img.src = '/assets/icons/sort-time-read-flipped.png'
	}

	if (time_counter % 2 != 0) {
		sorted_time_box.style.display = 'none'
		sorted_title_box.style.display = 'none'
		not_sorted_box.style.display = 'block'
		sort_by_time_to_read_btn.removeAttribute('class', 'active')
		btn_sort_time_img.src = '/assets/icons/sort-time-read.png'
	}
})

sort_by_category_btn.addEventListener('click', () => {
	category_counter++
	if (category_counter % 2 == 0) {
		sorted_category_box.style.display = 'block'
		sorted_time_box.style.display = 'none'
		sorted_title_box.style.display = 'none'
		not_sorted_box.style.display = 'none'
		sort_by_category_btn.setAttribute('class', 'active')
		sort_by_title_btn.removeAttribute('class', 'active')
		sort_by_time_to_read_btn.removeAttribute('class', 'active')
		btn_sort_category_img.src = '/assets/icons/sort-category-flipped.png'
	}

	if (category_counter % 2 != 0) {
		sorted_category_box.style.display = 'none'
		sorted_time_box.style.display = 'none'
		sorted_title_box.style.display = 'none'
		not_sorted_box.style.display = 'block'
		sort_by_category_btn.removeAttribute('class', 'active')
		btn_sort_category_img.src = '/assets/icons/sort-category.png'
	}
})

sort_by_date_btn.addEventListener('click', () => {
	date_counter++
	if (date_counter % 2 == 0) {
		sorted_date_box.style.display = 'block'
		sorted_category_box.style.display = 'none'
		sorted_time_box.style.display = 'none'
		sorted_title_box.style.display = 'none'
		not_sorted_box.style.display = 'none'
		sort_by_date_btn.setAttribute('class', 'active')
		sort_by_category_btn.removeAttribute('class', 'active')
		sort_by_title_btn.removeAttribute('class', 'active')
		sort_by_time_to_read_btn.removeAttribute('class', 'active')
	}

	if (date_counter % 2 != 0) {
		sorted_date_box.style.display = 'none'
		sorted_category_box.style.display = 'none'
		sorted_time_box.style.display = 'none'
		sorted_title_box.style.display = 'none'
		not_sorted_box.style.display = 'block'
		sort_by_date_btn.removeAttribute('class', 'active')
	}
})
// END DISPLAY SORTED POSTS
