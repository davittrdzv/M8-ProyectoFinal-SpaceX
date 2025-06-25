import { useRef, useEffect } from 'react'
import { Viewer, Entity } from 'resium'
import { Cartesian3, Color } from 'cesium'
import { standardizeDateFormat } from '@/utilities/standardizeDateFormat'

const EarthGlobe = ({ starlinkData }) => {
  const viewerRef = useRef()

  useEffect(() => {
    window.viewer = viewerRef.current?.cesiumElement
  }, [])

  return (
    <div style={{ width: '85%', height: '600px', margin: '0 auto' }}>
      <Viewer
        ref={viewerRef}
        sceneModePicker={false}
        baseLayerPicker={false}
        timeline={false}
        animation={false}
        homeButton={false}
        navigationHelpButton={false}
        geocoder={false}
        infoBox
        selectionIndicator
        scene3DOnly
        initialView={Cartesian3.fromDegrees(-100, 40, 25000000)}
      >
        {starlinkData.map(sat => {
          const position = Cartesian3.fromDegrees(
            sat.longitude,
            sat.latitude,
            sat.height_km * 1000
          )

          return (
            <Entity
              key={sat.id}
              name={sat.spaceTrack.OBJECT_NAME}
              position={position}
              point={{ pixelSize: 8, color: Color.CYAN }}
              description={`
                <p><strong>Name:</strong> ${sat.spaceTrack.OBJECT_NAME}</p>
                <p><strong>Version:</strong> ${sat.version || 'Unknown'}</p>
                <p><strong>Launch Date:</strong> ${standardizeDateFormat(sat.spaceTrack.LAUNCH_DATE)}</p>
              `}
            />
          )
        })}
      </Viewer>
    </div>
  )
}

export default EarthGlobe
