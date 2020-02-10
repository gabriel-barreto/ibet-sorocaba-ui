const responseHandler = response => {
  if (response.status >= 200 && response.status <= 201) {
    return response.data;
  }
  throw new Error(response);
};

const errorHandler = err => {
  console.error('Request error');
  console.log(err);
  throw err;
};

const handle = request => request.then(responseHandler).catch(errorHandler);

export default { errorHandler, handle, responseHandler };
