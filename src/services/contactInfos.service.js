import $http from './http.service';
import { HTTP as HTTPUtils } from '../utils';

const PATH = '/contact';

const fetch = () =>
  $http
    .get(PATH)
    .then(HTTPUtils.responseHandler)
    .catch(HTTPUtils.errorHandler);

export default { fetch };
