import axios from 'axios'

const BASE_URLV4 = 'https://api.spacexdata.com/v4'
const BASE_URLV5 = 'https://api.spacexdata.com/v5'

const companySpaceXService = () => axios.get(`${BASE_URLV4}/company`)

const launchesSpaceXService = () => axios.get(`${BASE_URLV5}/launches`)

const rocketsSpaceXService = () => axios.get(`${BASE_URLV4}/rockets`)

const roadsterSpaceXService = () => axios.get(`${BASE_URLV4}/roadster`)

const starlinkSpaceXService = () => axios.get(`${BASE_URLV4}/starlink`)

const historySpaceXService = () => axios.get(`${BASE_URLV4}/history`)

export {
  companySpaceXService,
  launchesSpaceXService,
  rocketsSpaceXService,
  roadsterSpaceXService,
  starlinkSpaceXService,
  historySpaceXService
}
