import PropTypes from 'prop-types';

export default {
  city: PropTypes.string.isRequired,
  coordinators: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    }),
  ).isRequired,
  email: PropTypes.arrayOf(PropTypes.string),
  initials: PropTypes.string.isRequired,
  phone: PropTypes.arrayOf(PropTypes.string),
  uf: PropTypes.string.isRequired,
};
