// Scene Mesh Camera Renderer

//Scene
const scene = new THREE.Scene();

//group for scenes 

const group = new THREE.Group()
group.position.x = 1

//Mesh (width, height,depth)
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: "purple" })
const mesh = new THREE.Mesh(geometry, material)
mesh.position.z = -4



//MESH 2 
const geometryT = new THREE.BoxGeometry(1,1,1)
const materialT = new THREE.MeshBasicMaterial({color: "green"})
const meshT  = new THREE.Mesh(geometryT, materialT)
meshT.position.x = 2
meshT.position.y = 1



// camera
group.add(mesh,meshT)
scene.add(group)

// AxesHelper 
const AxesHelper = new THREE.AxesHelper(window.innerWidth)
scene.add(AxesHelper)

const aspect = {
    width: window.innerWidth,
    height: window.innerHeight,
}
 


const camera = new THREE.PerspectiveCamera(75, aspect.width / aspect.height)
camera.position.z = 4
camera.position.y = 1
camera.position.x = 3

scene.add(camera)




const canvas = document.querySelector(".draw")


// //cordenates of canvas on screen
// canvas.addEventListener('mousemove', function(event){
//     const rect = canvas.getBoundingClientRect()
//     const positionX = (event.clientX - rect.left) * canvas.width / rect.width
//     const positionY = (event.clientY - rect.top) * canvas.height / rect.height
    
//     console.log(positionX,positionY);

// })



const renderer = new THREE.WebGLRenderer({ canvas })
renderer.setSize(aspect.width, aspect.height)
renderer.render(scene, camera)