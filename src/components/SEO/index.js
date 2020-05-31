import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';

import defaultProps from './content';

function SEO({ author, description, lang, name, title }) {
  return (
    <Helmet
      htmlAttributes={{ lang }}
      title={title}
      titleTemplate={title ? `%s | ${name}` : name}
    />
  );
}

SEO.propTypes = {
  author: PropTypes.string,
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  name: PropTypes.string,
  title: PropTypes.string.isRequired,
};

SEO.defaultProps = defaultProps;

export default SEO;
