import $http from './http.service';
import { HTTP as HTTPUtils } from '../utils';

const PATH = '/page';

const fetch = page => HTTPUtils.handle($http.get(`${PATH}/${page}`));

export default { fetch };
