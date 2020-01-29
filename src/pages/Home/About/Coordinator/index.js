import React from 'react';
import PropTypes from 'prop-types';

import * as S from './styled';

function Coordinator({ name, position, title, noPhoto, photo }) {
  return (
    <S.CoordinatorWrapper className={noPhoto ? '--visible' : ''}>
      {!noPhoto && photo ? (
        <S.CoordinatorPhoto src={photo.url} title={name} alt={name} />
      ) : null}
      <S.CoordinatorInfoWrapper>
        <S.CoordinatorName>{name}</S.CoordinatorName>
        <S.CoordinatorTitle>{title}</S.CoordinatorTitle>
        <S.CoordinatorPosition>{position}</S.CoordinatorPosition>
      </S.CoordinatorInfoWrapper>
    </S.CoordinatorWrapper>
  );
}

Coordinator.defaultProps = { photo: {}, noPhoto: false };

Coordinator.propTypes = {
  name: PropTypes.string.isRequired,
  photo: PropTypes.shape({ url: PropTypes.string.isRequired }),
  position: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  noPhoto: PropTypes.bool,
};

export default Coordinator;
