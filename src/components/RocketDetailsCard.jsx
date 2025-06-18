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
    <div className='card mb-4'>
      <img src={flickr_images[0]} className='card-img-top' alt={`Image of ${name}`} />
      <div className='card-body'>
        <h2 className='card-title'>{name}</h2>
        <p className='card-text'>{description}</p>
        <h5>General Info</h5>
        <ul>
          <li><strong>Active:</strong> {active ? 'Sí' : 'No'}</li>
          <li><strong>Stages:</strong> {stages}</li>
          <li><strong>Boosters:</strong> {boosters}</li>
          <li><strong>Cost per launch:</strong> ${cost_per_launch.toLocaleString()}</li>
          <li><strong>Success rate:</strong> {success_rate_pct}%</li>
          <li><strong>First flight:</strong> {first_flight}</li>
          <li><strong>Country:</strong> {country}</li>
          <li><strong>Company:</strong> {company}</li>
          <li><strong>Wikipedia:</strong> <a href={wikipedia} target='_blank' rel='noopener noreferrer'>{wikipedia}</a></li>
        </ul>
        <h5>Dimensions</h5>
        <ul>
          <li><strong>Height:</strong> {height?.meters} m</li>
          <li><strong>Diameter:</strong> {diameter?.meters} m</li>
          <li><strong>Mass:</strong> {mass?.kg} kg</li>
        </ul>
        <h5>First Stage</h5>
        <ul>
          <li><strong>Thrust (Sea Level):</strong> {first_stage.thrust_sea_level.kN} kN</li>
          <li><strong>Thrust (Vacuum):</strong> {first_stage.thrust_vacuum.kN} kN</li>
          <li><strong>Reusable:</strong> {first_stage.reusable ? 'Yes' : 'No'}</li>
          <li><strong>Engines:</strong> {first_stage.engines}</li>
          <li><strong>Fuel Amount:</strong> {first_stage.fuel_amount_tons} tons</li>
          {first_stage.burn_time_sec && <li><strong>Burn Time:</strong> {first_stage.burn_time_sec} sec</li>}
        </ul>
        <h5>Second Stage</h5>
        <ul>
          <li><strong>Thrust:</strong> {second_stage.thrust.kN} kN</li>
          <li><strong>Reusable:</strong> {second_stage.reusable ? 'Yes' : 'No'}</li>
          <li><strong>Engines:</strong> {second_stage.engines}</li>
          <li><strong>Fuel Amount:</strong> {second_stage.fuel_amount_tons} tons</li>
          {second_stage.burn_time_sec && <li><strong>Burn Time:</strong> {second_stage.burn_time_sec} sec</li>}
          <li><strong>Payload Option:</strong> {second_stage.payloads.option_1}</li>
          <li><strong>Fairing Height:</strong> {second_stage.payloads.composite_fairing.height.meters && `${second_stage.payloads.composite_fairing.height.meters} m`}</li>
          <li><strong>Fairing Diameter:</strong> {second_stage.payloads.composite_fairing.diameter.meters && `${second_stage.payloads.composite_fairing.diameter.meters} m`}</li>
        </ul>
        <h5>Engines</h5>
        <ul>
          <li><strong>Number:</strong> {engines.number}</li>
          <li><strong>Type:</strong> {engines.type}</li>
          <li><strong>Version:</strong> {engines.version}</li>
          {engines.layout && <li><strong>Layout:</strong> {engines.layout}</li>}
          {engines.engine_loss_max !== null && <li><strong>Max Engine Loss:</strong> {engines.engine_loss_max}</li>}
          <li><strong>ISP (Sea Level):</strong> {engines.isp.sea_level}</li>
          <li><strong>ISP (Vacuum):</strong> {engines.isp.vacuum}</li>
          <li><strong>Thrust (Sea Level):</strong> {engines.thrust_sea_level.kN} kN</li>
          <li><strong>Thrust (Vacuum):</strong> {engines.thrust_vacuum.kN} kN</li>
          <li><strong>Propellant 1:</strong> {engines.propellant_1}</li>
          <li><strong>Propellant 2:</strong> {engines.propellant_2}</li>
          <li><strong>Thrust to Weight:</strong> {engines.thrust_to_weight}</li>
        </ul>
        <h5>Landing Legs</h5>
        <ul>
          <li><strong>Number:</strong> {landing_legs.number}</li>
          {landing_legs.material && <li><strong>Material:</strong> {landing_legs.material}</li>}
        </ul>
        <h5>Payload Weights</h5>
        <ul>
          {payload_weights.map(payload => (
            <li key={payload.id}>
              <strong>{payload.name}:</strong> {payload.kg} kg
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default RocketDetailsCard
