import starIcon from './star.svg'

export default class Star {
  elem: HTMLImageElement
  animation: Animation
  constructor() {
    const star = document.createElement('img')
    star.src = starIcon
    star.style.width = "2rem"
    star.style.position = "relative"
    star.style.left = Math.floor(Math.random() * window.innerWidth) + 'px'
    this.elem = star
  }
  animate(keyFrames: Keyframe[], options: KeyframeAnimationOptions) {
    this.animation = this.elem.animate(keyFrames, options)
  }
}