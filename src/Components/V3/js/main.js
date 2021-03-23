let scene, camera, renderer;
let controls;
let objLoader;
let keyLight, fillLight, backLight;
let cameraLight, ambientLight;

function init() {
  scene = new THREE.Scene();

  camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );

  renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);

  document.body.appendChild(renderer.domElement);
  controls = new THREE.OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.campingFactor = 0.25;
  controls.enableZoom = true;

  // remember lighting later
  cameraLight = new THREE.PointLight(new THREE.Color(1, 1, 1), 0.5);
  camera.add(cameraLight);
  scene.add(camera);
  ambientLight = new THREE.AmbientLight(new THREE.Color(1, 1, 1), 0.2);
  scene.add(ambientLight);

  //   keyLight = new THREE.DirectionalLight(new THREE.Color("hsl(30, 100%, 75%)"), 1.0);
  //   keyLight.position.set(-100,0,100);

  //   fillLight = new THREE.DirectionalLight(new THREE.)

  //loading the 3D model object will need node command here on in.
  objLoader = new THREE.OBJLoader();
  objLoader.setPath("/models/");
  objLoader.load("skeleton.obj", function (object) {
    // Setting object back 60 from camera
    object.position.y -= 10;
    scene.add(object);
  });
}

function animate() {
  controls.update();
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}

init();
animate();