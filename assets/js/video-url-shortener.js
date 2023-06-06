/** @format */

const iframe = document.querySelector('iframe')
let url = iframe.src
if (!url.includes('embed')) {
  const base = 'https://www.youtube.com/embed/'
  const shortedUrl = url.slice(32)
  url = base + shortedUrl
}

iframe.src = url
