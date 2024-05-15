import * as THREE from './three.js-master/build/three.module.js'

//Scene
var scene = new THREE.Scene()

//Initialize
const FOV = 75,NEAR = 0.1, FAR = 1000
const ASPECT = window.innerWidth/window.innerHeight

//Camera
var camera = new THREE.PerspectiveCamera(FOV, ASPECT, NEAR, FAR)
camera.lookAt(0, 0, 0)
camera.position.set(20, 60, 180)

//Renderer
var renderer = new THREE.WebGLRenderer({antialias: true})
renderer.setSize(window.innerWidth, window.innerHeight)
renderer.setClearColor("#303030")
renderer.shadowMap.enabled = true


//Add to HTML
document.body.appendChild(renderer.domElement)


var createBox = () =>{
    var boxGeo = new THREE.BoxGeometry(250, 2, 150)
    const loader = new THREE.TextureLoader()
    const FloorTexture = loader.load("assets/floor.png")
    var boxMaterial = new THREE.MeshPhongMaterial({map: FloorTexture})
    var boxMesh = new THREE.Mesh(boxGeo, boxMaterial)
    boxMesh.position.set(35, -14, 35)
    boxMesh.rotation.y = Math.PI/ -4
    boxMesh.receiveShadow = true

    return boxMesh
}

var createUpper = () => {
    var UpperGeo = new THREE.CylinderGeometry(3, 8, 20, 12, 12)
    var UpperMaterial = new THREE.MeshPhongMaterial({color: "#ffffff"})
    var UpperMesh = new THREE.Mesh(UpperGeo, UpperMaterial)
    UpperMesh.position.y = 9
    UpperMesh.castShadow = true

    return UpperMesh
}


var createLower = () => {
    var lowerGeo = new THREE.CylinderGeometry(8, 5, 12, 12, 12)
    var lowerMaterial = new THREE.MeshPhongMaterial({color: "#ffffff"})
    var lowerMesh = new THREE.Mesh(lowerGeo, lowerMaterial)
    lowerMesh.position.y = -7
    lowerMesh.castShadow = true

    return lowerMesh
}

var createNeck = () => {
    var neckGeo = new THREE. CylinderGeometry(4, 3, 12, 12, 12)
    var neckMaterial = new THREE.MeshPhongMaterial({color: "#ffffff"})
    var neckMesh = new THREE.Mesh(neckGeo, neckMaterial)

    neckMesh.position.y = 23
    neckMesh.castShadow = true

    return neckMesh
}

var createHead = () =>{
    var headGeo = new THREE.SphereGeometry(4, 32, 16)
    var headMaterial = new THREE.MeshPhongMaterial({color: "#ff0000"})
    var headMesh = new THREE.Mesh(headGeo, headMaterial)

    headMesh.position.y = 25
    headMesh.castShadow = true

    return headMesh
}

var createBall = () => {
    var ballGeo = new THREE.SphereGeometry(10, 32, 16)
    const loader1 = new THREE.TextureLoader()
    const ballTexture = loader1.load("assets/bowling-ball.png")
    var ballMaterial = new THREE.MeshPhongMaterial({map: ballTexture})
    var ballMesh = new THREE.Mesh(ballGeo, ballMaterial)

    ballMesh.position.set(90, -3, 90)
    ballMesh.rotation.set(Math.PI/2, Math.PI/2, Math.PI/2)
    ballMesh.castShadow = true

    return ballMesh
}

var spotLight = new THREE.SpotLight("#ffffff", 1)
spotLight.shadow.mapSize.width = 1024
spotLight.shadow.mapSize.height = 1024
spotLight.shadow.camera.NEAR = 0.5
spotLight.shadow.camera.FAR = 500
spotLight.castShadow = true

spotLight.position.set(100, 200, 300)
scene.add(spotLight)


//Add objects to Scene
var boxMesh = createBox()
scene.add(boxMesh)

var UpperPart = createUpper()
scene.add(UpperPart)

var lowerPart = createLower()
scene.add(lowerPart)

var neckPart = createNeck()
scene.add(neckPart)

var headPart = createHead()
scene.add(headPart)

var bowlingBall = createBall()
scene.add(bowlingBall)


//Render Function
var render = () => {

    //Request Animation Frame utk Texture/Animasi
    requestAnimationFrame(render)
    renderer.render(scene, camera)
}
render()