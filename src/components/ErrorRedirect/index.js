import React from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

function ErrorRedirect({ children, condition, to }) {
  return condition ? <Redirect to={to} /> : children;
}

ErrorRedirect.defaultProps = { to: '/erro' };
ErrorRedirect.propTypes = {
  children: PropTypes.node.isRequired,
  condition: PropTypes.bool.isRequired,
  to: PropTypes.string,
};

export default ErrorRedirect;
