import AppConfig from './app.config';

const headers = {
  'Content-Type': 'application/json; charset=utf-8',
  Accept: 'application/json; charset=utf-8',
};

const config = {
  development: { baseURL: 'http://localhost:5000/api', headers },
  production: { baseURL: 'https://ibet-sorocaba.herokuapp.com/api', headers },
};

export default config[AppConfig.mode];
