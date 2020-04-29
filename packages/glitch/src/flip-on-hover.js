const originalImage = document.querySelector('.original')
const grayImage = document.querySelector('.gray')

grayImage.addEventListener('mouseover', () => {
  // originalImage.classList.add('clip-animate')
  grayImage.classList.add('disappear')
  originalImage.classList.add('emerge')
})