const debounce = (timeout, fn) => {
  let timer = 0;
  return () => {
    clearTimeout(timer);
    timer = setTimeout(fn, timeout);
  };
};

export default { debounce };
