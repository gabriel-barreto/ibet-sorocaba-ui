export const sanitize = markup => {
  if (!markup) return markup;

  const scriptRegex = new RegExp('<script.*>.*</script>', 'gi');
  return markup.replace(scriptRegex, '');
};

export default { sanitize };
