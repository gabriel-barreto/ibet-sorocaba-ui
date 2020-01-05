import React from 'react';
import PropTypes from 'prop-types';

import * as S from './styled';

function AboutSection({ coordinator, content }) {
  return (
    <S.AboutSectionWrapper id="about">
      <S.AboutPhoto
        src={coordinator.photo}
        alt={coordinator.name}
        title={coordinator.name}
      />
      <S.AboutContentWrapper>
        <S.AboutCoordinatorWrapper>
          <S.AboutCoordinatorName>{coordinator.name}</S.AboutCoordinatorName>
          <S.AboutCoordinatorTitle>{coordinator.title}</S.AboutCoordinatorTitle>
          <S.AboutCoordinatorPosition>
            {coordinator.position}
          </S.AboutCoordinatorPosition>
        </S.AboutCoordinatorWrapper>
        {content.map((each, i) => (
          <S.AboutContentParagraph key={i}>{each}</S.AboutContentParagraph>
        ))}
        <S.AboutContentButton to="/ibet-sorocaba">
          Ler mais...
        </S.AboutContentButton>
      </S.AboutContentWrapper>
    </S.AboutSectionWrapper>
  );
}

AboutSection.propTypes = {
  coordinator: PropTypes.shape({
    photo: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
  }).isRequired,
  content: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default AboutSection;
