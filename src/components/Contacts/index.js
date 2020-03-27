import React from 'react';
import PropTypes from 'prop-types';

import * as C from './content';
import * as S from './styled';

function ContactSection({ hours }) {
  return (
    <S.ContactSectionWrapper>
      <S.ContactSectionButton to="/contato">
        Entre em contato com nossa equipe
      </S.ContactSectionButton>
      {hours && hours.length > 0 ? (
        <>
          <C.icons.Clock
            size={24}
            fill="#212121"
            style={{ marginBottom: '8px' }}
          />
          {hours.map(each => (
            <S.ContactHoursInfo key={each}>{each}</S.ContactHoursInfo>
          ))}
        </>
      ) : null}
    </S.ContactSectionWrapper>
  );
}

ContactSection.propTypes = {
  hours: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ContactSection;
