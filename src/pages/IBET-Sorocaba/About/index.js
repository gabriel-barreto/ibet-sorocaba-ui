import React from 'react';
import PropTypes from 'prop-types';

import { HTMLContainer } from '../../../components';

import * as S from './styled';

function AboutSection({ content }) {
  return (
    <S.AboutSectionWrapper>
      <S.AboutSectionTitle>O IBET Sorocaba</S.AboutSectionTitle>
      <HTMLContainer content={content} />
    </S.AboutSectionWrapper>
  );
}

AboutSection.defaultProps = { content: '' };
AboutSection.propTypes = { content: PropTypes.string };

export default AboutSection;
