import React from 'react';
import PropTypes from 'prop-types';

import { Phone as PhoneIcon } from 'styled-icons/icomoon/Phone';

import * as S from './styled';

export const Type = {
  phone: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.string,
  ]),
};

function Phones({ phone }) {
  return phone instanceof Array ? (
    phone.map(each => (
      <S.UnitContactInfo key={each}>
        <PhoneIcon size={18} />
        <S.UnitContactInfoValue href={`tel:${each}`}>
          {each}
        </S.UnitContactInfoValue>
      </S.UnitContactInfo>
    ))
  ) : (
    <S.UnitContactInfo>
      <PhoneIcon size={18} />
      <S.UnitContactInfoValue href={`tel:${phone}`}>
        {phone}
      </S.UnitContactInfoValue>
    </S.UnitContactInfo>
  );
}

Phones.defaultProps = { phone: [] };
Phones.propTypes = Type;

export default Phones;
