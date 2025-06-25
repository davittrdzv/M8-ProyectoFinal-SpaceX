import * as THREE from 'three'

export function createStarfield (scene) {
  const starCount = 1000
  const radius = 500

  const geometry = new THREE.BufferGeometry()
  const positions = new Float32Array(starCount * 3)

  for (let i = 0; i < starCount; i++) {
    const phi = Math.acos(2 * Math.random() - 1)  // ángulo polar
    const theta = 2 * Math.PI * Math.random()     // ángulo azimutal

    // Coordenadas esféricas a cartesianas
    const r = radius * (0.9 + 0.1 * Math.random()) // para un poco de variación
    const x = r * Math.sin(phi) * Math.cos(theta)
    const y = r * Math.sin(phi) * Math.sin(theta)
    const z = r * Math.cos(phi)

    positions[i * 3] = x
    positions[i * 3 + 1] = y
    positions[i * 3 + 2] = z
  }

  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))

  const material = new THREE.PointsMaterial({
    color: 0xffffff,
    size: 1.5,
    sizeAttenuation: true,
    transparent: true,
    opacity: 0.8
  })

  const stars = new THREE.Points(geometry, material)
  scene.add(stars)

  return stars
}
