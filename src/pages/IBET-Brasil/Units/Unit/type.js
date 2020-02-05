import PropTypes from 'prop-types';

import { Type as CoordinatorType } from './coordinator';
import { Type as EmailsType } from './emails';
import { Type as PhonesType } from './phones';

export default {
  coordinator: CoordinatorType.isRequired,
  email: EmailsType,
  phone: PhonesType,
  unit: PropTypes.string.isRequired,
};
