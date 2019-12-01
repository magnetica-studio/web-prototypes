import starIcon from './star.svg'
const container = document.getElementById('container')

class Star {
  elem: HTMLImageElement
  constructor() {
    const star = document.createElement('img')
    star.src = starIcon
    star.style.width = "2rem"
    this.elem = star
  }
}

const star = new Star()

container.appendChild(star.elem)