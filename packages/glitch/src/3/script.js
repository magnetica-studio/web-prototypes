import water from '../../images/water.jpg'
import filterImage from '../../images/displacement_map.png'

const app = new PIXI.Application({width: window.innerWidth, height: window.innerHeight});
document.body.appendChild(app.view);
const image = new PIXI.Sprite.from(water);
image.width = window.innerWidth;
image.height = window.innerHeight;
app.stage.addChild(image);


const displacementSprite = new PIXI.Sprite.from(filterImage);
const displacementFilter = new PIXI.filters.DisplacementFilter(displacementSprite);
displacementSprite.texture.baseTexture.wrapMode = PIXI.WRAP_MODES.REPEAT;
app.stage.addChild(displacementSprite);
app.stage.filters = [displacementFilter];
app.renderer.view.style.transform = 'scale(1.02)';
displacementSprite.scale.x = 4;
displacementSprite.scale.y = 4;
animate();

function animate() {
  displacementSprite.x += 10;
  displacementSprite.y += 4;
  requestAnimationFrame(animate);
}

animate()