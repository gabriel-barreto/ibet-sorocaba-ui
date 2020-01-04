const getScreenSize = () => {
  const sizes = {
    sm: window.matchMedia('(max-width: 767px)').matches,
    md: window.matchMedia('(min-width: 768px) and (max-width: 1024px)').matches,
    xl: window.matchMedia('(min-width: 1200px)').matches,
  };

  return Object.keys(sizes).find(each => sizes[each]);
};

export default { getScreenSize };
