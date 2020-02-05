import React from 'react';
import PropTypes from 'prop-types';

import * as S from './styled';

function CoordinationSection({ coordinators }) {
  return (
    <S.CoordinationSectionWrapper>
      <S.CoordinationSectionTitle>Coordenação</S.CoordinationSectionTitle>
      <S.CoordinationProfilesWrapper>
        {coordinators.map(each => (
          <S.CoordinatorProfile key={each.name}>
            <S.CoordinatorProfilePhoto
              src={each.photo.url}
              title={each.name}
              alt={each.name}
            />
            {each.content ? (
              <S.CoordinatorProfileContent content={each.content} />
            ) : null}
            <S.CoordinatorProfileInfo>
              <S.CoordinatorProfileName>{each.name}</S.CoordinatorProfileName>
              <S.CoordinatorProfileTitle>
                {each.title}
              </S.CoordinatorProfileTitle>
              <S.CoordinatorProfilePosition>
                {each.position}
              </S.CoordinatorProfilePosition>
            </S.CoordinatorProfileInfo>
          </S.CoordinatorProfile>
        ))}
      </S.CoordinationProfilesWrapper>
    </S.CoordinationSectionWrapper>
  );
}

CoordinationSection.defaultProps = { coordinators: [] };
CoordinationSection.propTypes = {
  coordinators: PropTypes.arrayOf(
    PropTypes.shape({
      content: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      photo: PropTypes.string.isRequired,
      position: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    }),
  ),
};

export default CoordinationSection;
