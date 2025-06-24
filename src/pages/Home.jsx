import { useSpaceXContext } from '@/hooks/useSpaceXContext'
import Spinner from '@/components/Spinner'

const Home = () => {
  const { companyInfo, isCompanyInfoLoading } = useSpaceXContext()

  return (
    <>
      <div className='container my-4'>
        <h1>Welcome to the SpaceX Explorer!</h1>
        <p>This website offers a detailed and up-to-date overview of various SpaceX missions, vehicles, and history. As a visitor, you can explore data about rocket launches, spacecraft, and the Tesla Roadster launched into space.</p>
        <p>On this Home page, you’ll find general information about SpaceX as a company — including its mission, founder, headquarters, number of employees, and other basic details that provide context for the rest of the content across the site.</p>
        <p>Feel free to browse each section to learn more about SpaceX's incredible journey into space exploration!</p>
        <img src='https://www.spacex.com/static/images/share.jpg' alt='SpaceX' />
        {isCompanyInfoLoading
          ? <Spinner />
          : (
            <div className='card shadow'>
              <div className='card-header bg-dark text-white'>
                <h2 className='mb-0'>About {companyInfo.name}</h2>
              </div>
              <div className='card-body'>
                <p className='mb-3'>{companyInfo.summary}</p>
                <div className='row'>
                  <div className='col-md-6'>
                    <h5>General Information</h5>
                    <ul className='list-group list-group-flush'>
                      <li className='list-group-item'><strong>Founder:</strong> {companyInfo.founder}</li>
                      <li className='list-group-item'><strong>Founded:</strong> {companyInfo.founded}</li>
                      <li className='list-group-item'><strong>Employees:</strong> {companyInfo.employees}</li>
                      <li className='list-group-item'><strong>Valuation:</strong> ${companyInfo.valuation}</li>
                    </ul>
                  </div>
                  <div className='col-md-6'>
                    <h5>Location & Operations</h5>
                    <ul className='list-group list-group-flush'>
                      <li className='list-group-item'>
                        <strong>Headquarters:</strong> {companyInfo.headquarters.address}, {companyInfo.headquarters.city}, {companyInfo.headquarters.state}
                      </li>
                      <li className='list-group-item'><strong>Vehicles:</strong> {companyInfo.vehicles}</li>
                      <li className='list-group-item'><strong>Launch Sites:</strong> {companyInfo.launch_sites}</li>
                      <li className='list-group-item'><strong>Test Sites:</strong> {companyInfo.test_sites}</li>
                    </ul>
                  </div>
                </div>
                <div className='row'>
                  <div className='col-md-6'>
                    <h5>Executive Team</h5>
                    <ul className='list-group list-group-flush'>
                      <li className='list-group-item'><strong>CEO:</strong> {companyInfo.ceo}</li>
                      <li className='list-group-item'><strong>CTO:</strong> {companyInfo.cto}</li>
                      <li className='list-group-item'><strong>COO:</strong> {companyInfo.coo}</li>
                      <li className='list-group-item'><strong>CTO of Propulsion:</strong> {companyInfo.cto_propulsion}</li>
                    </ul>
                  </div>
                  <div className='col-md-6'>
                    <h5>External Links</h5>
                    <ul className='list-group list-group-flush'>
                      <li className='list-group-item'>
                        <strong>Official Website: </strong>
                        <a href={companyInfo.links.website} target='_blank' rel='noopener noreferrer'>
                          {companyInfo.links.website}
                        </a>
                      </li>
                      <li className='list-group-item'>
                        <strong>Flickr: </strong>
                        <a href={companyInfo.links.flickr} target='_blank' rel='noopener noreferrer'>
                          {companyInfo.links.flickr}
                        </a>
                      </li>
                      <li className='list-group-item'>
                        <strong>X (SpaceX): </strong>
                        <a href={companyInfo.links.twitter} target='_blank' rel='noopener noreferrer'>
                          {companyInfo.links.twitter}
                        </a>
                      </li>
                      <li className='list-group-item'>
                        <strong>X (Elon Musk): </strong>
                        <a href={companyInfo.links.elon_twitter} target='_blank' rel='noopener noreferrer'>
                          {companyInfo.links.elon_twitter}
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            )}
      </div>
    </>
  )
}

export default Home
