<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup

import * as THREE from 'three';

import {onMounted} from "vue";
import {GUI} from "three/examples/jsm/libs/lil-gui.module.min";

// Custom Objects
import {Car} from "./threeJS/static/car";
import {Grid} from "./threeJS/serial/grid";
import {Road} from "./threeJS/serial/road";
import {Cloud} from "./threeJS/serial/cloud";
import {Block} from "./threeJS/serial/block";
import {Lights} from "./threeJS/lights";
import {setupScene} from "./threeJS/setup";
import {EffectComposer} from "three/examples/jsm/postprocessing/EffectComposer";
import {GammaCorrectionShader} from "three/examples/jsm/shaders/GammaCorrectionShader";
import {ShaderPass} from "three/examples/jsm/postprocessing/ShaderPass";
import {SSRPass} from "three/examples/jsm/postprocessing/SSRPass";
import {RGBELoader} from "three/examples/jsm/loaders/RGBELoader";

let scene, camera, renderer, gui;
let control, composer, clock;
let loaded = [false, false, false]
let light, ssrPass;
let grid, road, cloud, block;

let coupe1, coupe2, coupe3;

let far, unitCloud;
let speedGrid, speedSerial;
let currentGrid, currentCloud;

far = 200;
speedGrid = 0.5;
speedSerial = 0.05;
currentGrid = 0;

document.onkeypress = function (e) {
  if (e.keyCode == 119 && speedSerial < 1) {
    speedSerial += 0.01;
  } else if (e.keyCode == 115 && speedSerial > 0.01) {
    speedSerial -= 0.01;
  }
  console.log (speedSerial);
}

function initThree () {
  let init = setupScene (far);
  scene = init.scene;
  camera = init.camera;
  renderer = init.renderer;
  control = init.control;
  gui = new GUI ();

  let _gui = {
    "Log": logCamera
  }
  gui.add (_gui, "Log");

  function logCamera () {
    console.log (camera);
  }

  // camera.position.set (0, -0.2, -6)
  // camera.rotation.set (0, 0, -Math.PI)
  camera.position.set(0, -0.96, -6);
  camera.rotation.set(0, .95*Math.PI, -Math.PI);
  camera.lookAt (scene.position)
  // console.log(camera)


  clock = new THREE.Clock ();
  light = new Lights (scene, gui);

  let loader = new THREE.TextureLoader();
  let texture = loader.load("./galaxy.png");
  scene.environment = texture;
  scene.background = texture;
  coupe1 = new Car ("./CC6_coupe.gltf", scene, [1, -2, -2], function () {
    loaded[0] = true
    coupe1.traverse ();
    checkLoad ();
  });
  coupe2 = new Car ("./CC6_sedan.gltf", scene, [-1.1, -2, 1], function () {
    loaded[1] = true
    coupe2.traverse ();
    checkLoad ();
  });
  coupe3 = new Car ("./CC6_sport.gltf", scene, [1.2, -2, 4], function () {
    loaded[2] = true
    coupe3.traverse ();
    checkLoad ();
  });

  // grid = new Grid(scene, far);
  road = new Road (scene, far, 10, 8, 200);
  cloud = new Cloud ("./smoke_1.png", scene, far);
  block = new Block (scene, far);

  // post = new Postprocessing(scene, renderer, camera, window.innerWidth*.96, window.innerWidth*.54)

  let sphere = new THREE.Mesh (new THREE.IcosahedronGeometry (5, 8), new THREE.MeshBasicMaterial ());
  sphere.position.set (0, -2, -2)
  // scene.add( sphere );

  console.log (scene)



  function checkLoad () {
    let allLoad = true
    for (let i = 0; i < loaded.length; i++) {
      if (!loaded[i]) {
        allLoad = false
      }
      console.log (allLoad)
    }
    console.log (loaded)
    if (allLoad) {
      Postprocessing ();
      animate ()
    }

  }

  // // grid = new Grid(scene, far);
  // road = new Road (scene, far, 8, 8, 200);
  // cloud = new Cloud ("/smoke_1.png", scene, far);
  // block = new Block (scene, far);
  //
  // // post = new Postprocessing(scene, renderer, camera, window.innerWidth*.96, window.innerWidth*.54)
  //
  // let sphere = new THREE.Mesh (new THREE.IcosahedronGeometry (5, 8), new THREE.MeshBasicMaterial ());
  // sphere.position.set (0, -2, -2)
  // // scene.add( sphere );
  //
  // console.log (scene)
  // animate ()
}

const params = {
  enableSSR: true,
  autoRotate: true,
  otherMeshes: true,
  groundReflector: true,
};

function Postprocessing () {
  let selects = []
  selects = selects.concat (road.fragments)
  selects = selects.concat (block.buildings)
  selects = selects.concat (coupe1.getMesh ())
  selects = selects.concat (coupe2.getMesh ())
  selects = selects.concat (coupe3.getMesh ())
  console.log (selects)
  composer = new EffectComposer (renderer);
  ssrPass = new SSRPass ({
    renderer,
    scene,
    camera,
    width: innerWidth,
    height: innerHeight,
    selects: selects
  });

  composer.addPass (ssrPass);
  composer.addPass (new ShaderPass (GammaCorrectionShader));

  // GUI
  ssrPass.thickness = 0.018;
  ssrPass.infiniteThick = false;

  const folder = gui.addFolder ('SSR Setting');

  ssrPass.maxDistance = 0.2;

  folder.add (ssrPass, 'bouncing');
  folder.add (ssrPass, 'output', {
    'Default': SSRPass.OUTPUT.Default,
    'SSR Only': SSRPass.OUTPUT.SSR,
    'Beauty': SSRPass.OUTPUT.Beauty,
    'Depth': SSRPass.OUTPUT.Depth,
    'Normal': SSRPass.OUTPUT.Normal,
    'Metalness': SSRPass.OUTPUT.Metalness,
  }).onChange (function (value) {

    ssrPass.output = parseInt (value);

  });
  ssrPass.opacity = 1;
  // folder.open()
  // gui.close()
}

function animate () {
  // let delta = clock.getDelta();

  // console.log("ANIMATE")
  // Serial Grid
  // grid.grid.position.z = far/2-currentGrid;
  currentGrid += speedGrid;
  if (currentGrid >= far) {
    currentGrid = 0;
  }

  // Serial Cloud
  road.animate (speedSerial);
  block.animate (speedSerial / 4);
  cloud.animate (speedSerial);

  composer.render ();

  // renderer.render(scene,camera);
  requestAnimationFrame (animate);
}

onMounted (() => {
  initThree ();
  window.onresize = function () {
    location.reload ()
  }
})

</script>

<template>
  <div style="margin-left: 2vw">
    Week07 by PanNic&ensp;&ensp;Jiangyun Pan&ensp;&ensp;Press 'W' to accelerate, 'S' to slow down<br>
    <a href="https://github.com/Pannic17/C1-Week07">on GitHub</a>&ensp;&ensp;
    <a href="https://git.arts.ac.uk/22044483/C1-Week07">on UAL Git</a>&ensp;&ensp;
    <a href="mailto:j.pan0520221@arts.ac.uk">Please Wait Loading Models</a>
    <div id="three-canvas"></div>
  </div>
  <div>
    Serial Generation of Cloud, Road and Buildings.<br>
    Added SSR and tone-mapping to adjust visual effects.<br>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" className="logo" alt="Vite logo"/>
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" className="logo vue" alt="Vue logo"/>
    </a>
  </div>
  <!--  <HelloWorld msg="Vite + Vue" />-->
</template>

<style scoped>
</style>
