import React from 'react';

import { At as EmailIcon } from 'styled-icons/boxicons-regular/At';
import { Phone as PhoneIcon } from 'styled-icons/icomoon/Phone';

import type from './type';
import * as S from './styled';

function Unit({ city, coordinators, emails, initials, phones, uf }) {
  return (
    <S.UnitContainer>
      <S.UnitTitle>
        {initials} - {city}, {uf}
      </S.UnitTitle>
      {coordinators && coordinators.length > 0
        ? coordinators.map(each => (
            <S.UnitCoordinator key={each.name}>
              <S.UnitCoordinatorName>{each.name}</S.UnitCoordinatorName>
              <S.UnitCoordinatorTitle>{each.title}</S.UnitCoordinatorTitle>
            </S.UnitCoordinator>
          ))
        : null}
      <S.UnitContactInfoWrapper>
        {emails
          ? emails.map(each => (
              <S.UnitContactInfo key={each}>
                <EmailIcon size={18} />
                <S.UnitContactInfoValue href={`mailto://${emails}`}>
                  {emails}
                </S.UnitContactInfoValue>
              </S.UnitContactInfo>
            ))
          : null}
        {phones
          ? phones.map(each => (
              <S.UnitContactInfo key={each}>
                <PhoneIcon size={18} />
                <S.UnitContactInfoValue href={`tel://${each}`}>
                  {each}
                </S.UnitContactInfoValue>
              </S.UnitContactInfo>
            ))
          : null}
      </S.UnitContactInfoWrapper>
    </S.UnitContainer>
  );
}

Unit.propTypes = type;

export default Unit;
