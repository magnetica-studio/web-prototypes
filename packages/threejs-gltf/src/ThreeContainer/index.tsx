import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { GLTFLoader, GLTF } from 'three/examples/jsm/loaders/GLTFLoader';
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

const draw = async (container: HTMLDivElement | null) => {
  if (!container) throw new Error('Invalid element');
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );

  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  container.appendChild(renderer.domElement);

  const gltf = await loadGLTF('./gltf/skull/scene.gltf');
  scene.add(gltf.scene);
  const light = new THREE.HemisphereLight(0xb1e1ff, 0xb97a20, 150);
  scene.add(light);

  camera.position.z = 3;

  const animate = function() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
  };
  animate();
};

export const ThreeContainer: React.FC = () => {
  const containerRef = useRef(null);
  useEffect(() => {
    draw(containerRef.current);
  });
  return <div id="container" ref={containerRef} />;
};

export default ThreeContainer;
