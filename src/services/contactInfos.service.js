import $http from './http.service';
import { HTTP as HTTPUtils } from '../utils';

const PATH = '/contact';

const fetch = (fields = 'social phone email hours') =>
  $http
    .get(PATH, { params: { fields } })
    .then(HTTPUtils.responseHandler)
    .catch(HTTPUtils.errorHandler);

export default { fetch };
