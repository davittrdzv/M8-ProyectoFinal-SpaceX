import { Viewer } from 'resium'
import { Cartesian3 } from 'cesium'
import StarlinkPosition from '@/components/StarlinkPosition'

const EarthGlobe = ({ starlinkData }) => {
  return (
    <div style={{ width: '85%', height: '600px', margin: '0 auto' }}>
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
      >
        {starlinkData.map(sat => (
          <StarlinkPosition
            key={sat.id}
            name={sat.spaceTrack.OBJECT_NAME}
            longitude={sat.longitude}
            latitude={sat.latitude}
            height={sat.height_km}
          />
        ))}
      </Viewer>
    </div>
  )
}

export default EarthGlobe
