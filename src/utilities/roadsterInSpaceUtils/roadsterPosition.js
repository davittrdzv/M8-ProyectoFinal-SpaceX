import * as THREE from 'three'
import { getOrbitalPosition, polarToCartesian } from '@/utilities/roadsterInSpaceUtils/orbitalMath'

export function createRoadster (scene, info) {
  const scale = 0.5
  const semiMajorAxis = info.semi_major_axis_au
  const eccentricity = info.eccentricity
  const periodDays = info.period_days
  const inclination = THREE.MathUtils.degToRad(info.inclination)
  const longitude = THREE.MathUtils.degToRad(info.longitude)
  const periapsisArg = THREE.MathUtils.degToRad(info.periapsis_arg)
  const launch = new Date(info.launch_date_utc)

  const geometry = new THREE.SphereGeometry(0.5, 16, 16)
  const material = new THREE.MeshStandardMaterial({ color: 0xff0000, emissive: 0xff0000, emissiveIntensity: 1 })
  const mesh = new THREE.Mesh(geometry, material)

  const orbitGroup = new THREE.Group()
  orbitGroup.rotation.x = inclination
  orbitGroup.rotation.z = longitude
  orbitGroup.rotateY(periapsisArg)
  orbitGroup.add(mesh)
  scene.add(orbitGroup)

  const update = () => {
    const now = new Date()
    const daysSinceLaunch = (now - launch) / (1000 * 60 * 60 * 24)
    const { r, theta } = getOrbitalPosition(daysSinceLaunch, periodDays, semiMajorAxis, eccentricity)
    const pos = polarToCartesian(r * scale, theta)
    mesh.position.set(pos.x, pos.y, pos.z)
  }

  return { update }
}
