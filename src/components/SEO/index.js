import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';

import defaultProps from './content';

function SEO({ author, description, lang, meta, name, title }) {
  return (
    <Helmet
      htmlAttributes={{ lang }}
      title={title}
      titleTemplate={title ? `%s | ${name}` : name}
      meta={[
        {
          name: 'description',
          content: description,
        },
        {
          property: 'og:title',
          content: title,
        },
        {
          property: 'og:description',
          content: description,
        },
        {
          property: 'og:type',
          content: 'website',
        },
        {
          name: 'twitter:card',
          content: 'summary',
        },
        {
          name: 'twitter:creator',
          content: author,
        },
        {
          name: 'twitter:title',
          content: title,
        },
        {
          name: 'twitter:description',
          content: description,
        },
      ].concat(meta)}
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
