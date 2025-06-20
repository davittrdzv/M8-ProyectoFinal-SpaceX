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

const getCrewSpaceXService = () => axios.get(`${BASE_URLV4}/crew`)

const getOneCrewSpaceXService = (id) => axios.get(`${BASE_URLV4}/crew/${id}`)

const getShipsSpaceXService = () => axios.get(`${BASE_URLV4}/ships`)

const getOneShipSpaceXService = (id) => axios.get(`${BASE_URLV4}/ships/${id}`)

const getCapsulesSpaceXService = () => axios.get(`${BASE_URLV4}/capsules`)

const getOneCapsuleSpaceXService = (id) => axios.get(`${BASE_URLV4}/capsules/${id}`)

const getPayloadsSpaceXService = () => axios.get(`${BASE_URLV4}/payloads`)

const getOnePayloadSpaceXService = (id) => axios.get(`${BASE_URLV4}/payloads/${id}`)

const getCoresSpaceXService = () => axios.get(`${BASE_URLV4}/cores`)

const getOneCoreSpaceXService = (id) => axios.get(`${BASE_URLV4}/cores/${id}`)

const getLandpadsSpaceXService = () => axios.get(`${BASE_URLV4}/landpads`)

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
  getCrewSpaceXService,
  getOneCrewSpaceXService,
  getShipsSpaceXService,
  getOneShipSpaceXService,
  getCapsulesSpaceXService,
  getOneCapsuleSpaceXService,
  getPayloadsSpaceXService,
  getOnePayloadSpaceXService,
  getCoresSpaceXService,
  getOneCoreSpaceXService,
  getLandpadsSpaceXService,
  getOneLandpadSpaceXService,

}
