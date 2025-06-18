import axios from 'axios'

const BASE_URLV4 = 'https://api.spacexdata.com/v4'
const BASE_URLV5 = 'https://api.spacexdata.com/v5'

const getCompanySpaceXService = () => axios.get(`${BASE_URLV4}/company`)

const getLaunchesSpaceXService = () => axios.get(`${BASE_URLV5}/launches`)

const getOneLaunchSpaceXService = (id) => axios.get(`${BASE_URLV5}/launches:${id}`)

const getRocketsSpaceXService = () => axios.get(`${BASE_URLV4}/rockets`)

const getOneRocketSpaceXService = (id) => axios.get(`${BASE_URLV4}/rockets:${id}`)

const getRoadsterSpaceXService = () => axios.get(`${BASE_URLV4}/roadster`)

const getStarlinkSpaceXService = () => axios.get(`${BASE_URLV4}/starlink`)

const getHistorySpaceXService = () => axios.get(`${BASE_URLV4}/history`)

const getLaunchpadsSpaceXService = () => axios.get(`${BASE_URLV4}/launchpads`)

export {
  getCompanySpaceXService,
  getLaunchesSpaceXService,
  getOneLaunchSpaceXService,
  getRocketsSpaceXService,
  getOneRocketSpaceXService,
  getRoadsterSpaceXService,
  getStarlinkSpaceXService,
  getHistorySpaceXService,
  getLaunchpadsSpaceXService
}
