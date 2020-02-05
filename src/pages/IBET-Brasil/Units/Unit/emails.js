import React from 'react';
import PropTypes from 'prop-types';

import { At as EmailIcon } from 'styled-icons/boxicons-regular/At';

import * as S from './styled';

export const Type = {
  email: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]),
};

function Emails({ email }) {
  return email instanceof Array ? (
    email.map(each => (
      <S.UnitContactInfo key={each}>
        <EmailIcon size={18} />
        <S.UnitContactInfoValue href={`mailto:${each}`}>
          {each}
        </S.UnitContactInfoValue>
      </S.UnitContactInfo>
    ))
  ) : (
    <S.UnitContactInfo>
      <EmailIcon size={18} />
      <S.UnitContactInfoValue href={`mailto:${email}`}>
        {email}
      </S.UnitContactInfoValue>
    </S.UnitContactInfo>
  );
}

Emails.defaultProps = { email: [] };
Emails.propTypes = Type;

export default Emails;
