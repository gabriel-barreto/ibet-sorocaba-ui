import axios from 'axios';

import { api as ApiConfig, app as AppConfig } from '../config';

const $http = axios.create({ ...ApiConfig });

const logger = config => {
  if (AppConfig.mode === 'development') console.log(config);
  return config;
};

const onSuccess = config => logger(config);
const onFails = error => {
  console.dir(error);
  return logger(error);
};

$http.interceptors.request.use(onSuccess, onFails);
$http.interceptors.response.use(onSuccess, onFails);

export default $http;
