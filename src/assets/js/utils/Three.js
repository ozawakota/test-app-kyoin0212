import * as THREE from 'three';
import { LOD } from 'three';

export default class Three {
  constructor() {

    this.init();
    // this.init2();

  }

  init(){
    const width = 1280;
    const height = 550;

    // レンダラーを作成
    const renderer = new THREE.WebGLRenderer({
      canvas: document.querySelector('#myCanvas')
    });

    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(width, height);

    // シーンを作成
    const scene = new THREE.Scene();

    // カメラを作成
    const camera = new THREE.PerspectiveCamera(45, width / height, 1, 10000);
    camera.position.set(0, 0, +1000);

    // 箱を作成
    const geometry = new THREE.BoxGeometry(100, 100, 100);
    const material = new THREE.MeshStandardMaterial({color: 0x0000FF});
    const box = new THREE.Mesh(geometry, material);
    scene.add(box);

    // 平行光源
    const light = new THREE.DirectionalLight(0xFFFFFF);
    light.intensity = 2; // 光の強さを倍に
    light.position.set(1, 1, 1);

    // シーンに追加
    scene.add(light);

    // 初回実行
    tick();

    function tick() {
      requestAnimationFrame(tick);

      // 箱を回転させる
      box.rotation.x += 0.01;
      box.rotation.y += 0.01;

      // レンダリング
      renderer.render(scene, camera);
    }
  }
  init2(){
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 500 );
    camera.position.set( 0, 0, 100 );
    camera.lookAt( 0, 0, 0 );

    const renderer = new THREE.WebGL1Renderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild( renderer.domElement );

    const material = new THREE.LineBasicMaterial( { color: 0xffffff } );
    const points = [];
    points.push( new THREE.Vector3( - 10, 0, 0 ) );
    points.push( new THREE.Vector3( 0, 10, 0 ) );
    points.push( new THREE.Vector3( 10, 0, 0 ) );

    const geometry = new THREE.BufferGeometry().setFromPoints( points );


    const line = new THREE.Line( geometry, material );
    scene.add( line );

    const animate = () => {
      requestAnimationFrame( animate );

      // cube.rotation.x += 0.01;
      // cube.rotation.y += 0.01;

      // console.log(cube.rotation.x);

      renderer.render( scene, camera );
    }


    animate();

  }



}
