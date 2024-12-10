import { MTLLoader } from 'three-obj-mtl-loader'
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader'
import {  FBXLoader } from 'three/examples/jsm/loaders/FBXLoader'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { STLLoader } from 'three/examples/jsm/loaders/STLLoader'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js';


// 加载obj,mtl文件
export function objloader(path) {
  return new Promise(resolve => {
    var mtlLoader = new MTLLoader()
    //  初始化obj
    var objLoader = new OBJLoader()
    // 加载mtl文件
    mtlLoader.load(`three/${path}.mtl`, (mtl) => {
      // 初始化
      mtl.preload()
      // 加载贴图
      objLoader.setMaterials(mtl)
      objLoader.load(`three/${path}.obj`, (obj) => {
        resolve(obj)
      })
    })
  })
}

// 加载fbx文件
export function fbxloader(path) {
  return new Promise(resolve => {
    var loader = new FBXLoader()
    console.log('path',path);
    loader.load(`three/${path}.fbx`, (fbx) => {
        console.log('fbx',fbx);
      resolve(fbx)
    }, function (xhr) {
      // 控制台查看加载进度xhr
      // 通过加载进度xhr可以控制前端进度条进度   Math.floor:小数加载进度取整
      console.log('加载进度' + Math.floor(xhr.loaded / xhr.total * 100) + '%');
    })
  })
}
// 加载step文件
// export function stepLoader(path) {
//     return new Promise(resolve => {
//       var loader = new STEPLoader()
//       console.log('path',path);
//       loader.load(path, (step) => {
//         resolve(step)
//       }, function (xhr) {
//         // 控制台查看加载进度xhr
//         // 通过加载进度xhr可以控制前端进度条进度   Math.floor:小数加载进度取整
//         console.log('加载进度' + Math.floor(xhr.loaded / xhr.total * 100) + '%');
//       })
//     })
//   }
// 加载gtlf文件
export function gltfloader(path) {
  return new Promise(resolve => {
    // 创建DRACOLoader用于解压缩.bin文件
    const dracoLoader = new DRACOLoader();
    dracoLoader.setDecoderPath(`three/${path}.bin`);
    dracoLoader.setWorkerLimit(4);
    var loader = new GLTFLoader()
    loader.setDRACOLoader(dracoLoader);
    loader.load(`three/${path}.gltf`, (gltf) => {
      resolve(gltf)
    }, undefined, function ( error ) {

      console.error( error );
    
    })
  })
}
// 加载STL文件
export function stlLoader(path) {
  return new Promise(resolve => {
    const loader = new STLLoader();
    loader.load(`three/${path}.stl`, (stl) => {
      resolve(stl)
    })
  })
}
// 加载obj文件
export function objLoader(path) {
  return new Promise(resolve => {
    const loader = new OBJLoader();
    loader.load(`three/${path}.obj`, (geometry) => {
      resolve(geometry)
    })
  })
}

