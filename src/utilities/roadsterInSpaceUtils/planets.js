import * as THREE from 'three'
import { getOrbitalPosition, polarToCartesian } from '@/utilities/roadsterInSpaceUtils/orbitalMath'
import { planetsData } from '@/utilities/roadsterInSpaceUtils/planetsData'

// Crea un sprite con texto legible (texto plano siempre frente a la cámara)
function createTextSprite (text, color = '#00ffff', fontSize = 150) {
  const canvas = document.createElement('canvas')
  const context = canvas.getContext('2d')
  const padding = 20
  context.font = `${fontSize}px Arial`

  // Ajustar canvas al tamaño del texto
  const metrics = context.measureText(text)
  const textWidth = metrics.width
  canvas.width = textWidth + padding * 2
  canvas.height = fontSize + padding * 2

  // Rehacer el contexto después de ajustar canvas
  const ctx = canvas.getContext('2d')
  ctx.font = `${fontSize}px Arial`
  ctx.fillStyle = color
  ctx.textBaseline = 'top'
  ctx.fillText(text, padding, padding / 2)

  // Crear textura y sprite
  const texture = new THREE.CanvasTexture(canvas)
  texture.minFilter = THREE.LinearFilter
  texture.magFilter = THREE.LinearFilter
  texture.needsUpdate = true

  const material = new THREE.SpriteMaterial({ map: texture, transparent: true })
  const sprite = new THREE.Sprite(material)

  // Escala relativa al tamaño del texto para que no sea gigante ni muy pequeño
  sprite.scale.set(canvas.width / 50, canvas.height / 50, 1)

  return sprite
}

export function createPlanets (scene) {
  const scale = 10
  const planets = []

  planetsData.forEach(planet => {
    // Crear sprite de texto con el nombre del planeta
    const sprite = createTextSprite(planet.name, '#00ffff', 70)
    scene.add(sprite)

    // Crear órbita (línea)
    const segments = 180
    const points = []
    for (let i = 0; i <= segments; i++) {
      const theta = (i / segments) * 2 * Math.PI
      const x = planet.semiMajorAxis * Math.cos(theta) * scale
      const y = planet.semiMajorAxis * Math.sin(theta) * scale
      points.push(new THREE.Vector3(x, y, 0))
    }
    const orbitGeometry = new THREE.BufferGeometry().setFromPoints(points)
    const orbitMaterial = new THREE.LineBasicMaterial({ color: 0xffffff })
    const orbitLine = new THREE.LineLoop(orbitGeometry, orbitMaterial)
    scene.add(orbitLine)

    planets.push({
      mesh: sprite,
      periodDays: planet.periodDays,
      semiMajorAxis: planet.semiMajorAxis,
      name: planet.name
    })
  })

  // Función para actualizar posición de todos los planetas según tiempo
  function update () {
    const now = new Date()
    const epoch = new Date('2000-01-01T00:00:00Z') // referencia arbitraria
    const daysSinceEpoch = (now - epoch) / (1000 * 60 * 60 * 24)

    planets.forEach(planet => {
      const { r, theta } = getOrbitalPosition(daysSinceEpoch, planet.periodDays, planet.semiMajorAxis, 0) // excentricidad 0 para simplificar
      const pos = polarToCartesian(r * scale, theta)
      planet.mesh.position.set(pos.x, pos.y, pos.z)
    })
  }

  return { update }
}
