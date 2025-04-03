import * as THREE from 'three';
  const scene = new THREE.Scene();
  const particles = new THREE.Points(particleGeometry, new THREE.PointsMaterial({ 
      color: 0x00f0ff, 
      size: 0.1 
  }));
  scene.add(particles);
