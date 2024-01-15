
  const scene = new THREE.Scene();
  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.z = 5;

  const geometry = new THREE.SphereGeometry( 15, 32, 16 ); 
  const material = new THREE.MeshBasicMaterial( { color: 0xffff00 } ); 
  const sphere = new THREE.Mesh( geometry, material ); 
  scene.add( sphere );

  
  
  