const responseHandler = response => response.data;

const errorHandler = err => {
  console.error('Request error');
  console.log(err);
};

export default { errorHandler, responseHandler };
