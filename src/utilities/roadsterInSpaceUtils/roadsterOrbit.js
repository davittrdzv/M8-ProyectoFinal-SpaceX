import * as THREE from 'three'

export function roadsterOrbit (scene, info) {
  const semiMajorAxis = info.semi_major_axis_au
  const eccentricity = info.eccentricity
  const inclination = THREE.MathUtils.degToRad(info.inclination)
  const longitudeOfAscendingNode = THREE.MathUtils.degToRad(info.longitude)
  const argumentOfPeriapsis = THREE.MathUtils.degToRad(info.periapsis_arg)
  const scale = 0.5

  const points = []
  const segments = 360
  for (let i = 0; i <= segments; i++) {
    const theta = (i / segments) * 2 * Math.PI
    const r = (semiMajorAxis * (1 - eccentricity ** 2)) / (1 + eccentricity * Math.cos(theta))
    const x = r * Math.cos(theta)
    const y = r * Math.sin(theta)
    points.push(new THREE.Vector3(x * scale, y * scale, 0))
  }

  const orbitGeometry = new THREE.BufferGeometry().setFromPoints(points)
  const orbitMaterial = new THREE.LineBasicMaterial({ color: 0xff0000 })
  const orbitLine = new THREE.LineLoop(orbitGeometry, orbitMaterial)

  orbitLine.rotation.x = inclination
  orbitLine.rotation.z = longitudeOfAscendingNode
  orbitLine.rotateY(argumentOfPeriapsis)

  scene.add(orbitLine)
}
