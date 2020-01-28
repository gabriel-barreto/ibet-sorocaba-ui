import $http from './http.service';
import { HTTP as HTTPUtils } from '../utils';

const PATH = '/contact';

const fetch = (fields = 'social phone email hours') =>
  HTTPUtils.handle($http.get(PATH, { params: { fields } }));

export default { fetch };
