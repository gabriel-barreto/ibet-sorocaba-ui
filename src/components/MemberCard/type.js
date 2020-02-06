import PropTypes from 'prop-types';

export default {
  name: PropTypes.string.isRequired,
  photo: PropTypes.shape({
    url: PropTypes.string,
  }),
  social: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.any.isRequired,
      label: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
