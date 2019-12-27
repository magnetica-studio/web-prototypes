import Star from './star'
const container = document.getElementById('container')

const keyframes: Keyframe[] = [
  { 
    transform: 'translateY(-1000px) scaleY(2.5) scaleX(.2)', 
    transformOrigin: '50% 0', filter: 'blur(40px)', opacity: 0.3,
  },
  { 
    transform: 'translateY(1000px) scaleY(1) scaleX(1)',
    transformOrigin: '50% 50%',
    filter: 'blur(0)',
    opacity: 1
  }
]

const stars: Star[] = []

export function createStars(container, particleSize) {
  for (let i = 0; i < particleSize; i++){
    const star = new Star(container)
    container.appendChild(star.elem)
    stars.push(star)
  }
}

export function renderStars() {
  stars.forEach(star => {
    const options: KeyframeAnimationOptions = {
      composite: 'accumulate', // how the effect will be chained over iterations. add/replace/accumulate are acceptable.
      iterations: Infinity,    // Specifies how many times it iterates
      iterationComposite: 'accumulate', // replace/accumulate
      duration: Math.random() * 10000,           // duration of the animation
      fill: 'both',
      delay: Math.random() * 3000,
      endDelay: 0,
      easing: 'ease-out'
    }
    star.animate(keyframes, options)
  })
}

