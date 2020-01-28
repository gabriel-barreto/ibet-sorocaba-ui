import React from 'react';
import PropTypes from 'prop-types';

import { HTMLContainer } from '../../../components';

import * as S from './styled';

import Coordinator from './Coordinator';

function AboutSection({ coordinator, content }) {
  return (
    <S.AboutSectionWrapper id="about">
      <Coordinator {...coordinator} />
      <S.AboutContentWrapper>
        <Coordinator {...coordinator} noPhoto />
        <HTMLContainer content={content} />
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
  content: PropTypes.string.isRequired,
};

export default AboutSection;
