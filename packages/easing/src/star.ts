import starIcon from './star.svg'

export default class Star {
  elem: HTMLImageElement
  animation: Animation
  constructor(container: HTMLElement) {
    const star = document.createElement('img')
    star.src = starIcon
    star.style.left = Math.floor(Math.random() * 100) + '%'
    this.elem = star
  }
  animate(keyFrames: Keyframe[], options: KeyframeAnimationOptions) {
    this.animation = this.elem.animate(keyFrames, options)
  }
}