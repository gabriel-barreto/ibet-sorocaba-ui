import $http from './http.service';
import { HTTP as HTTPUtils } from '../utils';

const sendContact = payload =>
  HTTPUtils.handle($http.post('/mailer/contact', payload));

const sendSubscription = payload =>
  HTTPUtils.handle($http.post('/mailer/sub', payload));

export default { sendContact, sendSubscription };
