import React from 'react';

import type from './type';

import Coordinator from './coordinator';
import Emails from './emails';
import Phones from './phones';

import * as S from './styled';

function Unit({ coordinator, email, phone, unit }) {
  return (
    <S.UnitContainer>
      <S.UnitTitle>{unit}</S.UnitTitle>
      {coordinator ? <Coordinator coordinator={coordinator} /> : null}
      <S.UnitContactInfoWrapper>
        {email ? <Emails email={email} /> : null}
        {phone ? <Phones phone={phone} /> : null}
      </S.UnitContactInfoWrapper>
    </S.UnitContainer>
  );
}

Unit.propTypes = type;

export default Unit;
