import * as THREE from 'three'
import { useEffect, useRef } from 'react'
import { OrbitControls } from 'three-stdlib'
import { roadsterOrbit } from '@/utilities/roadsterInSpaceUtils/roadsterOrbit'
import { createRoadster } from '@/utilities/roadsterInSpaceUtils/roadsterPosition'
import { createPlanets } from '@/utilities/roadsterInSpaceUtils/planets'
import { createStarfield } from '@/utilities/roadsterInSpaceUtils/starfield'

const SolarSystemScene = ({ roadsterInfo }) => {
  const mountRef = useRef()

  useEffect(() => {
    if (!roadsterInfo) return

    const scene = new THREE.Scene()
    scene.background = new THREE.Color(0x000000)

    // Cámara
    const camera = new THREE.PerspectiveCamera(
      75,
      mountRef.current.clientWidth / mountRef.current.clientHeight,
      0.1,
      1000
    )
    camera.position.set(0, 20, 60)

    // Renderizador
    const renderer = new THREE.WebGLRenderer({ antialias: true })
    renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight)

    const currentMount = mountRef.current
    currentMount.appendChild(renderer.domElement)

    // Luces
    scene.add(new THREE.AmbientLight(0xffffff, 0.2))
    const pointLight = new THREE.PointLight(0xffffaa, 2, 300)
    pointLight.position.set(0, 0, 0)
    scene.add(pointLight)

    // Sol
    const sun = new THREE.Mesh(
      new THREE.SphereGeometry(5, 32, 32),
      new THREE.MeshBasicMaterial({ color: 0xffff00 })
    )
    scene.add(sun)

    // Agregar estrellas de fondo
    createStarfield(scene)

    // Controles
    const controls = new OrbitControls(camera, renderer.domElement)
    controls.zoomSpeed = 0.2
    controls.minDistance = 30
    controls.maxDistance = 300

    // Elementos del sistema solar
    roadsterOrbit(scene, roadsterInfo)
    const roadster = createRoadster(scene, roadsterInfo)
    const { update: updatePlanets } = createPlanets(scene)

    // Animación
    const animate = () => {
      requestAnimationFrame(animate)
      roadster.update()
      updatePlanets()
      controls.update()
      renderer.render(scene, camera)
    }
    animate()

    // Limpieza al desmontar
    return () => {
      currentMount.removeChild(renderer.domElement)
    }
  }, [roadsterInfo])

  return <div ref={mountRef} style={{ width: '100%', height: '100vh' }} />
}

export default SolarSystemScene
