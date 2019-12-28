import * as THREE from 'three';
import { TrackballControls } from 'three/examples/jsm/controls/TrackballControls';
import { GLTF, GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
const loader = new GLTFLoader();

const loadGLTF = (url: string): Promise<GLTF> =>
  new Promise((resolve, reject) => {
    loader.load(
      url,
      gltf => {
        console.log(gltf);
        resolve(gltf);
      },
      undefined,
      reject
    );
  });

export const draw = async (container: HTMLDivElement | null) => {
  if (!container) throw new Error('Invalid element');
  const gltf = await loadGLTF('./gltf/bot/scene.gltf');
  const scene = gltf.scene;
  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );

  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  container.appendChild(renderer.domElement);

  const light = new THREE.DirectionalLight(0xbac4ff, 8);
  scene.add(light);

  camera.position.z = 5;
  camera.position.y = 3;
  const controls = new TrackballControls(camera, renderer.domElement);
  controls.target.set(0, 0, 0);

  const mixer = new THREE.AnimationMixer(scene);
  const animationAction = mixer.clipAction(gltf.animations[4]);
  animationAction.play();

  const animate = function() {
    requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene, camera);
    mixer.update(0.01);
  };
  animate();
};
