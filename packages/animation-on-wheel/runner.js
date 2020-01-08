const videoUrl = 'https://magnetica-prototypes.s3-ap-northeast-1.amazonaws.com/bg.mp4'
document.addEventListener('DOMContentLoaded', async () => {
  const vid = document.querySelector('video')
  const span = document.querySelector('span')

  const onprogress = (e) => {
    const loadState = ((e.loaded / e.total) * 100).toFixed(1)
    console.log('loading...', loadState)
    span.innerText = `Loading... ${loadState}`
  }

  const res = await loadVideo(videoUrl, onprogress)
  vid.src= URL.createObjectURL(res)
  span.innerText = ''

  const SPEED_MS = 70
  const power = SPEED_MS / 1000
  let t = 0

  function play(e) {
    t += e.deltaY > 0 ? power : -power
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

  document.querySelector('#wrapper').addEventListener('wheel', throttle(play, SPEED_MS))

})



