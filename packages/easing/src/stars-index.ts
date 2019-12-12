import 'web-animations-js/web-animations-next.min.js'
import {createStars, renderStars} from './particle'

document.addEventListener('DOMContentLoaded', () => {
  const starContainer = document.getElementById('stars') 
  createStars(starContainer, 10)
  renderStars()
})
