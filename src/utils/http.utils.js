import $Operators from './operators.utils';

const responseHandler = response => response.data;

const errorHandler = err => {
  console.error('Request error');
  console.log(err);
};

const handle = request => {
  const debounceReq = $Operators.debounce(500, request);
  return debounceReq()
    .then(responseHandler)
    .catch(errorHandler);
};

export default { errorHandler, handle, responseHandler };
