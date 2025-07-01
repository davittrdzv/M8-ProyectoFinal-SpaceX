import Carousel from '@/components/Carousel'
import { standardizeDateFormat } from '@/utilities/standardizeDateFormat'

/* eslint-disable camelcase */
const RocketDetailsCard = ({
  name,
  description,
  height,
  diameter,
  mass,
  first_stage,
  second_stage,
  engines,
  landing_legs,
  payload_weights,
  flickr_images,
  active,
  stages,
  boosters,
  cost_per_launch,
  success_rate_pct,
  first_flight,
  country,
  company,
  wikipedia
}) => {
  return (
    <>
      <h1>{name}</h1>
      <Carousel images={flickr_images} />
      <h3 className='mt-2'>{description}</h3>
      <div className='row justify-content-center align-items-stretch gx-4 gy-4 mt-2'>
        <div className='col-12 col-md-3 text-center d-flex flex-column h-100'>
          <h3 className='border-custom'>General Information</h3>
          <ul className='list-group list-group-flush'>
            <li className='list-group-item'>
              <strong>Active:</strong>
              <p className='compact-text'>{active ? 'Yes' : 'No'}</p>
            </li>
            <li className='list-group-item'>
              <strong>Stages:</strong>
              <p className='compact-text'>{stages}</p>
            </li>
            <li className='list-group-item'>
              <strong>Boosters:</strong>
              <p className='compact-text'>{boosters}</p>
            </li>
            <li className='list-group-item'>
              <strong>Cost per launch:</strong>
              <p className='compact-text'>${cost_per_launch.toLocaleString()}</p>
            </li>
            <li className='list-group-item'>
              <strong>Success rate:</strong>
              <p className='compact-text'>{success_rate_pct}%</p>
            </li>
            <li className='list-group-item'>
              <strong>First flight:</strong>
              <p className='compact-text'>{standardizeDateFormat(first_flight)}</p>
            </li>
            <li className='list-group-item'>
              <strong>Country:</strong>
              <p className='compact-text'>{country}</p>
            </li>
            <li className='list-group-item'>
              <strong>Company:</strong>
              <p className='compact-text'>{company}</p>
            </li>
            <li className='list-group-item'>
              <strong>External Links:</strong>
              <p className='compact-text'>
                <a href={wikipedia} className='btn btn-custom'>Wikipedia</a>
              </p>
            </li>
          </ul>
        </div>
        <div className='col-12 col-md-3 text-center d-flex flex-column h-100'>
          <h3 className='border-custom'>Dimensions</h3>
          <ul className='list-group list-group-flush'>
            <li className='list-group-item'>
              <strong>Height:</strong>
              <p className='compact-text'>{height?.meters} m</p>
            </li>
            <li className='list-group-item'>
              <strong>Diameter:</strong>
              <p className='compact-text'>{diameter?.meters} m</p>
            </li>
            <li className='list-group-item'>
              <strong>Mass:</strong>
              <p className='compact-text'>{mass?.kg} kg</p>
            </li>
          </ul>
        </div>
        <div className='col-12 col-md-3 text-center d-flex flex-column h-100'>
          <h3 className='border-custom'>First Stage</h3>
          <ul className='list-group list-group-flush'>
            <li className='list-group-item'>
              <strong>Thrust (Sea Level):</strong>
              <p className='compact-text'>{first_stage.thrust_sea_level.kN} kN</p>
            </li>
            <li className='list-group-item'>
              <strong>Thrust (Vacuum):</strong>
              <p className='compact-text'>{first_stage.thrust_vacuum.kN} kN</p>
            </li>
            <li className='list-group-item'>
              <strong>Reusable:</strong>
              <p className='compact-text'>{first_stage.reusable ? 'Yes' : 'No'}</p>
            </li>
            <li className='list-group-item'>
              <strong>Engines:</strong>
              <p className='compact-text'>{first_stage.engines}</p>
            </li>
            <li className='list-group-item'>
              <strong>Fuel Amount:</strong>
              <p className='compact-text'>{first_stage.fuel_amount_tons} tons</p>
            </li>
            {first_stage.burn_time_sec && (
              <li className='list-group-item'>
                <strong>Burn Time:</strong>
                <p className='compact-text'>{first_stage.burn_time_sec} sec</p>
              </li>)}
          </ul>
        </div>
        <div className='col-12 col-md-3 text-center d-flex flex-column h-100'>
          <h3 className='border-custom'>Second Stage</h3>
          <ul className='list-group list-group-flush'>
            <li className='list-group-item'>
              <strong>Thrust:</strong>
              <p className='compact-text'>{second_stage.thrust.kN} kN</p>
            </li>
            <li className='list-group-item'>
              <strong>Reusable:</strong>
              <p className='compact-text'>{second_stage.reusable ? 'Yes' : 'No'}</p>
            </li>
            <li className='list-group-item'>
              <strong>Engines:</strong>
              <p className='compact-text'>{second_stage.engines}</p>
            </li>
            <li className='list-group-item'>
              <strong>Fuel Amount:</strong>
              <p className='compact-text'>{second_stage.fuel_amount_tons} tons</p>
            </li>
            {second_stage.burn_time_sec && (
              <li className='list-group-item'>
                <strong>Burn Time:</strong>
                <p className='compact-text'>{second_stage.burn_time_sec} sec</p>
              </li>)}
            <li className='list-group-item'>
              <strong>Payload Option:</strong>
              <p className='compact-text'>{second_stage.payloads.option_1}</p>
            </li>
            {second_stage.burn_time_sec && (
              <li className='list-group-item'>
                <strong>Fairing Height:</strong>
                <p className='compact-text'>{second_stage.payloads.composite_fairing.height.meters} m</p>
              </li>)}
            {second_stage.burn_time_sec && (
              <li className='list-group-item'>
                <strong>Fairing Diameter:</strong>
                <p className='compact-text'>{second_stage.payloads.composite_fairing.diameter.meters} m</p>
              </li>)}
          </ul>
        </div>
        <div className='col-12 col-md-3 text-center d-flex flex-column h-100'>
          <h3 className='border-custom'>Engines</h3>
          <ul className='list-group list-group-flush'>
            <li className='list-group-item'>
              <strong>Number:</strong>
              <p className='compact-text'>{engines.number}</p>
            </li>
            <li className='list-group-item'>
              <strong>Type:</strong>
              <p className='compact-text'>{engines.type}</p>
            </li>
            {engines.version && (
              <li className='list-group-item'>
                <strong>Version:</strong>
                <p className='compact-text'>{engines.version}</p>
              </li>
            )}
            {engines.layout && (
              <li className='list-group-item'>
                <strong>Layout:</strong>
                <p className='compact-text'>{engines.layout}</p>
              </li>
            )}
            {engines.engine_loss_max && (
              <li className='list-group-item'>
                <strong>Max Engine Loss:</strong>
                <p className='compact-text'>{engines.engine_loss_max}</p>
              </li>
            )}
            <li className='list-group-item'>
              <strong>ISP (Sea Level):</strong>
              <p className='compact-text'>{engines.isp.sea_level}</p>
            </li>
            <li className='list-group-item'>
              <strong>ISP (Vacuum):</strong>
              <p className='compact-text'>{engines.isp.vacuum}</p>
            </li>
            <li className='list-group-item'>
              <strong>Thrust (Sea Level):</strong>
              <p className='compact-text'>{engines.thrust_sea_level.kN} kN</p>
            </li>
            <li className='list-group-item'>
              <strong>Thrust (Vacuum):</strong>
              <p className='compact-text'>{engines.thrust_vacuum.kN} kN</p>
            </li>
            <li className='list-group-item'>
              <strong>Propellant 1:</strong>
              <p className='compact-text'>{engines.propellant_1}</p>
            </li>
            <li className='list-group-item'>
              <strong>Propellant 2:</strong>
              <p className='compact-text'>{engines.propellant_2}</p>
            </li>
            <li className='list-group-item'>
              <strong>Thrust to Weight:</strong>
              <p className='compact-text'>{engines.thrust_to_weight}</p>
            </li>
          </ul>
        </div>
        <div className='col-12 col-md-3 text-center d-flex flex-column h-100'>
          <h3 className='border-custom'>Landing Legs</h3>
          <ul className='list-group list-group-flush'>
            <li className='list-group-item'>
              <strong>Number:</strong>
              <p className='compact-text'>{landing_legs.number}</p>
            </li>
            {landing_legs.material && (
              <li className='list-group-item'>
                <strong>Material:</strong>
                <p className='compact-text'>{landing_legs.material}</p>
              </li>
            )}
          </ul>
        </div>
        <div className='col-12 col-md-3 text-center d-flex flex-column h-100'>
          <h3 className='border-custom'>Payload Weights</h3>
          <ul className='list-group list-group-flush'>
            {payload_weights.map(payload => (
              <li key={payload.id} className='list-group-item'>
                <strong>{payload.name}:</strong>
                <p className='compact-text'>{payload.kg} kg</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}

export default RocketDetailsCard
