import { Viewer } from 'resium'
import { Cartesian3 } from 'cesium'

const EarthGlobe = () => {
  return (
    <div className='mx-auto' style={{ width: '85%', height: '500px' }}>
      <Viewer
        sceneModePicker={false}
        baseLayerPicker={false}
        timeline={false}
        animation={false}
        homeButton={false}
        navigationHelpButton={false}
        geocoder={false}
        scene3DOnly
        initialView={Cartesian3.fromDegrees(-100, 40, 25000000)}
      />
    </div>
  )
}

export default EarthGlobe
