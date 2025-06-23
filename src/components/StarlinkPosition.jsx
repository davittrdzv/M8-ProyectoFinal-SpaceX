import { Entity, PointGraphics, LabelGraphics } from 'resium'
import { Cartesian3, Color } from 'cesium'

const StarlinkPosition = ({ name, longitude, latitude, height }) => {
  if ([longitude, latitude, height].some(val => typeof val !== 'number')) return null

  const position = Cartesian3.fromDegrees(longitude, latitude, height * 1000)

  return (
    <Entity position={position} name={name}>
      <PointGraphics color={Color.CYAN} pixelSize={6} />
      <LabelGraphics text={name} font='12px sans-serif' fillColor={Color.WHITE} />
    </Entity>
  )
}

export default StarlinkPosition
