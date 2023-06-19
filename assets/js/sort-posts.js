/** @format */

// BEGIN DISPLAY SORTED POSTS
const btn_sort_title_box = document.getElementById('sort-btn-title')
const btn_sort_title_img = btn_sort_title_box.querySelector('img')

const btn_sort_time_box = document.getElementById('sort-btn-time-read')
const btn_sort_time_img = btn_sort_time_box.querySelector('img')

const btn_sort_category_box = document.getElementById('sort-btn-category')
const btn_sort_category_img = btn_sort_category_box.querySelector('img')

let title_counter_first = 1
let time_counter_first = 1
let category_counter_first = 1
let date_counter_first = 1

btn_sort_title_box.addEventListener('click', () => {
	title_counter_first++
	if (title_counter_first % 2 == 0) {
		btn_sort_title_img.src = '/assets/icons/sort-az-flipped.png'
	}

	if (title_counter_first % 2 != 0) {
		btn_sort_title_img.src = '/assets/icons/sort-az.png'
	}
})

btn_sort_time_box.addEventListener('click', () => {
	time_counter_first++
	if (time_counter_first % 2 == 0) {
		btn_sort_time_img.src = '/assets/icons/sort-time-read-flipped.png'
	}

	if (time_counter_first % 2 != 0) {
		btn_sort_time_img.src = '/assets/icons/sort-time-read.png'
	}
})

btn_sort_category_box.addEventListener('click', () => {
	category_counter_first++
	if (category_counter_first % 2 == 0) {
		btn_sort_category_img.src = '/assets/icons/sort-category-flipped.png'
	}

	if (category_counter_first % 2 != 0) {
		btn_sort_category_img.src = '/assets/icons/sort-category.png'
	}
})

const sorted_title_box = document.getElementById('sorted-title')
const sorted_time_box = document.getElementById('sorted-time')
const sorted_category_box = document.getElementById('sorted-category')
const sorted_date_box = document.getElementById('sorted-date')
const not_sorted_box = document.getElementById('not-sorted')

const sort_by_title_btn = document.getElementById('sort-btn-title')
const sort_by_time_to_read_btn = document.getElementById('sort-btn-time-read')
const sort_by_category_btn = document.getElementById('sort-btn-category')
const sort_by_date_btn = document.getElementById('sort-btn-date')

let title_counter_second = 1
let time_counter_second = 1
let category_counter_second = 1
let date_counter_second = 1

sorted_title_box.style.display = 'none'
sorted_time_box.style.display = 'none'
sorted_category_box.style.display = 'none'
sorted_date_box.style.display = 'none'
not_sorted_box.style.display = 'block'

sort_by_title_btn.addEventListener('click', () => {
	title_counter_second++
	if (title_counter_second % 2 == 0) {
		sorted_title_box.style.display = 'block'
		sort_by_title_btn.setAttribute('class', 'active')
		sort_by_time_to_read_btn.removeAttribute('class', 'active')
		sort_by_category_btn.removeAttribute('class', 'active')
		not_sorted_box.style.display = 'none'
	}

	if (title_counter_second % 2 != 0) {
		sorted_title_box.style.display = 'none'
		not_sorted_box.style.display = 'block'
		sort_by_title_btn.removeAttribute('class', 'active')
	}
})

sort_by_time_to_read_btn.addEventListener('click', () => {
	time_counter_second++
	if (time_counter_second % 2 == 0) {
		sorted_time_box.style.display = 'block'
		sorted_title_box.style.display = 'none'
		sort_by_time_to_read_btn.setAttribute('class', 'active')
		sort_by_title_btn.removeAttribute('class', 'active')
		sort_by_category_btn.removeAttribute('class', 'active')
		not_sorted_box.style.display = 'none'
	}

	if (time_counter_second % 2 != 0) {
		sorted_time_box.style.display = 'none'
		sorted_title_box.style.display = 'none'
		not_sorted_box.style.display = 'block'
		sort_by_time_to_read_btn.removeAttribute('class', 'active')
	}
})

sort_by_category_btn.addEventListener('click', () => {
	category_counter_second++
	if (category_counter_second % 2 == 0) {
		sorted_category_box.style.display = 'block'
		sorted_time_box.style.display = 'none'
		sorted_title_box.style.display = 'none'
		not_sorted_box.style.display = 'none'
		sort_by_category_btn.setAttribute('class', 'active')
		sort_by_title_btn.removeAttribute('class', 'active')
		sort_by_time_to_read_btn.removeAttribute('class', 'active')
	}

	if (category_counter_second % 2 != 0) {
		sorted_category_box.style.display = 'none'
		sorted_time_box.style.display = 'none'
		sorted_title_box.style.display = 'none'
		not_sorted_box.style.display = 'block'
		sort_by_category_btn.removeAttribute('class', 'active')
	}
})

sort_by_date_btn.addEventListener('click', () => {
	date_counter_second++
	if (date_counter_second % 2 == 0) {
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

	if (date_counter_second % 2 != 0) {
		sorted_date_box.style.display = 'none'
		sorted_category_box.style.display = 'none'
		sorted_time_box.style.display = 'none'
		sorted_title_box.style.display = 'none'
		not_sorted_box.style.display = 'block'
		sort_by_date_btn.removeAttribute('class', 'active')
	}
})
// END DISPLAY SORTED POSTS
