import AppConfig from './app.config';

const headers = {
  'Content-Type': 'application/json; charset=utf-8',
  Accept: 'application/json; charset=utf-8',
};

const config = {
  development: { baseURL: '', headers },
  production: { baseURL: '', headers },
};

export default config[AppConfig.mode];
