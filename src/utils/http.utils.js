const responseHandler = response => response.data;

const errorHandler = err => {
  console.error('Request error');
  console.log(err);
};

const handle = request => request.then(responseHandler).catch(errorHandler);

export default { errorHandler, handle, responseHandler };
