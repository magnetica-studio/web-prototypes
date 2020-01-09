const videoUrl = 'https://magnetica-prototypes.s3-ap-northeast-1.amazonaws.com/bg.mp4'

function loadLocalFile() {
  return new Promise((resolve, reject) => {
    const input = document.createElement('input')
    input.setAttribute('type', 'file')
    input.setAttribute('accept', 'video/*')
    input.style.visibility = 'hidden'
    input.onchange = (e) => {
      const file = e.target.files[0]
      const reader = new FileReader()
      reader.addEventListener('load', (e) => {
        resolve(e.target.result)
      })
      reader.readAsDataURL(file)
    }
    document.body.append(input)
    document.body.querySelector('input').click()
  })
}

async function loadDefault() {
  const onprogress = (e) => {
    const span = document.querySelector('span')
    const loadState = ((e.loaded / e.total) * 100).toFixed(1)
    console.log('loading...', loadState)
    span.innerText = `Loading... ${loadState}`
  }
  const res = await loadVideo(videoUrl, onprogress)
  return URL.createObjectURL(res)
}

document.addEventListener('DOMContentLoaded', async () => {
  const vid = document.querySelector('video')
  const span = document.querySelector('span')

  if (isMobile()) {
    vid.src= await loadDefault() 
    // a hack needed to play on mobile
    vid.play()
    vid.pause()
  } else {
    if (confirm('Would you like to use a local file?')) {
      vid.src = await loadLocalFile()
    } else {
      vid.src= await loadDefault() 
    }
  }

  span.innerText = 'Scroll Down ↓↓↓'

  let t = 0

  function play(deltaY, power) {
    t += deltaY > 0 ? power : -power
    console.log(t)
    vid.currentTime = t
    renderText()
  }

  function renderText() {
    const texts = [
      'MAGNETICA studio',
      'is a studio',
      'of the creators,',
      'by the creators,',
      'for the creators.',
      'This prototype is',
      'presented by Yuichi Yogo',
    ]

    const pos = t / vid.duration
    const textIndex = Math.floor((texts.length - 1) * pos)

    document.querySelector('span').innerText = texts[textIndex]
  }

  function enablePc() {
    const SPEED_MS = 70
    const power = SPEED_MS / 1000
    document.querySelector('#wrapper').addEventListener('wheel', throttle((e) => play(e.deltaY, power), SPEED_MS))
  }

  function enableMobile() {

    document.querySelector('#wrapper').addEventListener('touchstart', touchStart, false)
    document.querySelector('#wrapper').addEventListener('touchmove', touchMove, false)

    let startY = 0
    function touchStart(event) {
      startY = event.touches[0].pageY;
    }

    const SPEED_MS = 70
    function touchMove(event){
      offsetY = startY - event.touches[0].pageY
      const power = SPEED_MS / 1000
      play(offsetY, power)
      startY = event.touches[0].pageY
    }
  }

  enablePc()
  enableMobile()

})



