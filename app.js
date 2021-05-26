// var sceneEl = document.querySelector('a-scene');
// console.log(sceneEl.querySelector('#hp-model'));

var el = document.querySelector('#hp-model');

// // wait until model is loaded
// el.addEventListener('model-loaded', function(event){

//   el.object3D.traverse(function(object3D){
//     var mat = object3D.material
//     if (mat) {

//       // modify material here
//       // mat.color.setRGB(1,0,1)
//          let mat = new THREE.MeshStandardMaterial;
//                    let color = new THREE.Color(0xaa5511);
//                    mat.color = color;
//                    mat.emissive = color;
//                    mat.wireframe = true;
//                    mat.side= "double";
//       // transparent:true;
//       //           opacity:0.3;
//       //           side:double;
//       //           dithering: false;
//       //           roughness: 1;
//       //           metalness: 0"
//       console.log("DONE!!!");
//       // or replace it completely
//       // object3D.material = new THREE.MeshPhongMaterial()

//     }
//   })

// });
el.addEventListener('model-loaded', function(ev) {
    let mesh = el.getObject3D('mesh');
    if (!mesh) { return; }
    //console.log(mesh);
    mesh.traverse(function(node) {
        if (node.isMesh) {
            console.log("making material...");
            mat = node.material;

            // let mat = new THREE.MeshLambertMaterial;
            // let mat = new THREE.MeshPhysicalMaterial;
            // let mat = new THREE.MeshToonMaterial;
            let color = new THREE.Color(0xaf5511);
            // mat.color = color;
            // mat.depthTest="false";
            mat.opacity = 0.8;
            mat.emissive = color;
            mat.emissiveIntensity = 0.015;
            mat.roughness = 0.5;
            mat.metalnes = 0.86;
            mat.side = THREE.BackSide;
            mat.blending = THREE.AdditiveBlending;
            // mat.refractionRatio= 0.01;
     //        { name: 'No', constant: THREE.NoBlending },
					// { name: 'Normal', constant: THREE.NormalBlending },
					// { name: 'Additive', constant: THREE.AdditiveBlending },
					// { name: 'Subtractive', constant: THREE.SubtractiveBlending },
					// { name: 'Multiply', constant: THREE.MultiplyBlending }
            // mat.dithering="false";
            // mat.flatShading="true";

            // mat.wireframe = true;
            // node.material = mat;        
            console.log("done making material...");

        }
    });
    // comp.modelLoaded = true;
});