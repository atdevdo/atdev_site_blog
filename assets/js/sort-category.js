/** @format */

// BEGIN DISPLAY SORTED POSTS
const btn_sort_title_box = document.getElementById('sort-btn-title')
const btn_sort_title_img = btn_sort_title_box.querySelector('img')

const btn_sort_time_box = document.getElementById('sort-btn-time-read')
const btn_sort_time_img = btn_sort_time_box.querySelector('img')

localStorage.setItem('imgFlippedTitle', 'no')
localStorage.setItem('imgFlippedTime', 'no')

btn_sort_title_box.addEventListener('click', () => {
  if (localStorage.getItem('imgFlippedTitle') == 'no') {
    btn_sort_title_img.src = '/assets/icons/sort-az-flipped.png'
    localStorage.setItem('imgFlippedTitle', 'yes')
  } else {
    btn_sort_title_img.src = '/assets/icons/sort-az.png'
    localStorage.setItem('imgFlippedTitle', 'no')
  }
})

btn_sort_time_box.addEventListener('click', () => {
  if (localStorage.getItem('imgFlippedTime') == 'no') {
    btn_sort_time_img.src = '/assets/icons/sort-time-read-flipped.png'
    localStorage.setItem('imgFlippedTime', 'yes')
  } else {
    btn_sort_time_img.src = '/assets/icons/sort-time-read.png'
    localStorage.setItem('imgFlippedTime', 'no')
  }
})

if (localStorage.getItem('byTitle') == null) {
  localStorage.setItem('byTitle', 'yes')
}

if (localStorage.getItem('byTime') == null) {
  localStorage.setItem('byTime', 'yes')
}

if (localStorage.getItem('byDate') == null) {
  localStorage.setItem('byDate', 'yes')
}

const sorted_title_box = document.getElementById('sorted-title')
const sorted_time_box = document.getElementById('sorted-time')
const sorted_date_box = document.getElementById('sorted-date')
const not_sorted_box = document.getElementById('not-sorted')

const sort_by_title_btn = document.getElementById('sort-btn-title')
const sort_by_time_to_read_btn = document.getElementById('sort-btn-time-read')
const sort_by_date_btn = document.getElementById('sort-btn-date')
// const not_sorted_btn = document.getElementById("sort_btn_not")

sorted_title_box.style.display = 'none'
sorted_time_box.style.display = 'none'
sorted_date_box.style.display = 'none'
not_sorted_box.style.display = 'block'

sort_by_title_btn.addEventListener('click', () => {
  if (localStorage.getItem('byTitle') == 'yes') {
    sorted_title_box.style.display = 'block'
    sort_by_title_btn.setAttribute('class', 'active')
    sort_by_time_to_read_btn.removeAttribute('class', 'active')
    localStorage.setItem('byTime', 'yes')
    not_sorted_box.style.display = 'none'
    localStorage.setItem('byTitle', 'no')
  } else {
    sorted_title_box.style.display = 'none'
    not_sorted_box.style.display = 'block'
    sort_by_title_btn.removeAttribute('class', 'active')
    localStorage.setItem('byTitle', 'yes')
  }
})

sort_by_time_to_read_btn.addEventListener('click', () => {
  if (localStorage.getItem('byTime') == 'yes') {
    sorted_time_box.style.display = 'block'
    sorted_title_box.style.display = 'none'
    sort_by_time_to_read_btn.setAttribute('class', 'active')
    sort_by_title_btn.removeAttribute('class', 'active')
    localStorage.setItem('byTitle', 'yes')
    not_sorted_box.style.display = 'none'
    localStorage.setItem('byTime', 'no')
  } else {
    sorted_time_box.style.display = 'none'
    sorted_title_box.style.display = 'none'
    not_sorted_box.style.display = 'block'
    sort_by_time_to_read_btn.removeAttribute('class', 'active')
    localStorage.setItem('byTime', 'yes')
  }
})

sort_by_date_btn.addEventListener('click', () => {
  if (localStorage.getItem('byDate') == 'yes') {
    sorted_date_box.style.display = 'block'
    sorted_time_box.style.display = 'none'
    sorted_title_box.style.display = 'none'
    not_sorted_box.style.display = 'none'
    sort_by_date_btn.setAttribute('class', 'active')
    sort_by_title_btn.removeAttribute('class', 'active')
    sort_by_time_to_read_btn.removeAttribute('class', 'active')
    localStorage.setItem('byTitle', 'yes')
    localStorage.setItem('byTime', 'yes')
    localStorage.setItem('byDate', 'no')
  } else {
    sorted_date_box.style.display = 'none'
    sorted_time_box.style.display = 'none'
    sorted_title_box.style.display = 'none'
    not_sorted_box.style.display = 'block'
    sort_by_date_btn.removeAttribute('class', 'active')
    localStorage.setItem('byDate', 'yes')
  }
})
// END DISPLAY SORTED POSTS
