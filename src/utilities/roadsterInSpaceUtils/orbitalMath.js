import * as THREE from 'three'

const TWO_PI = 2 * Math.PI

export const degToRad = (deg) => (deg * Math.PI) / 180
export const radToDeg = (rad) => (rad * 180) / Math.PI

export function solveKepler (M, e, tolerance = 1e-6) {
  let E = M
  let delta = 1
  while (Math.abs(delta) > tolerance) {
    delta = (E - e * Math.sin(E) - M) / (1 - e * Math.cos(E))
    E = E - delta
  }
  return E
}

export function getOrbitalPosition (t, T, a, e) {
  const M = TWO_PI * (t % T) / T
  const E = solveKepler(M, e)
  const r = a * (1 - e * Math.cos(E))
  const theta = 2 * Math.atan2(
    Math.sqrt(1 + e) * Math.sin(E / 2),
    Math.sqrt(1 - e) * Math.cos(E / 2)
  )
  return { r, theta }
}

export function polarToCartesian (r, theta) {
  return new THREE.Vector3(r * Math.cos(theta), r * Math.sin(theta), 0)
}
