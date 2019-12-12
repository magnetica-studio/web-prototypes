const textsStr =
`国境の長いトンネルを抜けると雪国であった。夜の底が白くなった。信号所に汽車が止まった。
　向側の座席から娘が立って来て、島村の前のガラス窓を落した。雪の冷気が流れこんだ。娘は窓いっぱいに乗り出して、遠くへ呼ぶように、
「駅長さあん、駅長さあん」
　明りをさげてゆっくり雪を踏んで来た男は、襟巻で鼻の上まで包み、耳に帽子の毛皮を垂れていた。
　もうそんな寒さかと島村は外を眺めると、鉄道の官舎らしいバラックが山裾に寒々と散らばっているだけで、雪の色はそこまで行かぬうちに闇に呑まれてい　た。
「駅長さん、私です、御機嫌よろしゅうございます」
「ああ、葉子さんじゃないか。お帰りかい。また寒くなったよ」
「弟が今度こちらに勤めさせていただいておりますのですってね。お世話さまですわ」
`.split('\n')


const keyFrames: Keyframe[] = [
  {
    opacity: 0
  },
  {
    opacity: 1
  },
  {
    opacity: 0
  }
]


class Text {
  container: HTMLElement
  text: string
  element: HTMLSpanElement
  animationOptions: KeyframeAnimationOptions

  constructor(container: HTMLElement, text) {
    this.container = container
    this.text = text
    this.element = document.createElement('span')
    this.element.innerText = this.text
    this.animationOptions = {
      duration: 200 * this.text.length,
      fill: 'forwards'
    }
  }

  async render(): Promise<void> {
    this.container.appendChild(this.element)
    const animation = this.element.animate(keyFrames, this.animationOptions).finished.then(
      () => {
        console.log('animation for ', this.text, ' ended')
        this.container.removeChild(this.element)
      }
    )
    return animation
  }
}


let texts: Text[] = []
export function createTexts(container: HTMLElement) {
  texts = textsStr.map(text => new Text(container, text))
}

export async function renderTexts() {
  for (let text of texts) {
    await text.render()
  }
}

