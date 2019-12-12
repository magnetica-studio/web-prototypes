import 'web-animations-js/web-animations-next.min.js'
import {createStars, renderStars } from './particle'
import { createTexts, renderTexts } from './texts'

document.addEventListener('DOMContentLoaded', () => {
  const starContainer = document.getElementById('stars') 
  const textContainer = document.getElementById('textArea')
  createStars(starContainer, 10)
  createTexts(textContainer)
  renderStars()
  renderTexts()
})
