import axios from 'axios'

const BASE_URLV4 = 'https://api.spacexdata.com/v4'
const BASE_URLV5 = 'https://api.spacexdata.com/v5'

const getCompanySpaceXService = () => axios.get(`${BASE_URLV4}/company`)

const getLaunchesSpaceXService = () => axios.get(`${BASE_URLV5}/launches`)

const getOneLaunchSpaceXService = (id) => axios.get(`${BASE_URLV5}/launches/${id}`)

const getRocketsSpaceXService = () => axios.get(`${BASE_URLV4}/rockets`)

const getOneRocketSpaceXService = (id) => axios.get(`${BASE_URLV4}/rockets/${id}`)

const getRoadsterSpaceXService = () => axios.get(`${BASE_URLV4}/roadster`)

const getStarlinkSpaceXService = () => axios.get(`${BASE_URLV4}/starlink`)

const getHistorySpaceXService = () => axios.get(`${BASE_URLV4}/history`)

const getLaunchpadsSpaceXService = () => axios.get(`${BASE_URLV4}/launchpads`)

const getOneCrewSpaceXService = (id) => axios.get(`${BASE_URLV4}/crew/${id}`)

const getOneShipSpaceXService = (id) => axios.get(`${BASE_URLV4}/ships/${id}`)

const getOneCapsuleSpaceXService = (id) => axios.get(`${BASE_URLV4}/capsules/${id}`)

const getOnePayloadSpaceXService = (id) => axios.get(`${BASE_URLV4}/payloads/${id}`)

const getOneCoreSpaceXService = (id) => axios.get(`${BASE_URLV4}/cores/${id}`)

const getOneLandpadSpaceXService = (id) => axios.get(`${BASE_URLV4}/landpads/${id}`)

export {
  getCompanySpaceXService,
  getLaunchesSpaceXService,
  getOneLaunchSpaceXService,
  getRocketsSpaceXService,
  getOneRocketSpaceXService,
  getRoadsterSpaceXService,
  getStarlinkSpaceXService,
  getHistorySpaceXService,
  getLaunchpadsSpaceXService,
  getOneCrewSpaceXService,
  getOneShipSpaceXService,
  getOneCapsuleSpaceXService,
  getOnePayloadSpaceXService,
  getOneCoreSpaceXService,
  getOneLandpadSpaceXService,

}
