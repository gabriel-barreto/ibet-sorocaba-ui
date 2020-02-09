import $http from './http.service';
import { HTTP as HTTPUtils } from '../utils';

const sendContact = payload =>
  HTTPUtils.handle($http.post('/mailer/contact', { context: payload }));

const sendSubscription = payload =>
  HTTPUtils.handle($http.post('/mailer/sub', { context: payload }));

export default { sendContact, sendSubscription };
