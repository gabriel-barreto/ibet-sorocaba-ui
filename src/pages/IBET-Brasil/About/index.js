import React from 'react';
import PropTypes from 'prop-types';

import { HTMLContainer } from '../../../components';

import * as C from './content';
import * as S from './styled';

function AboutSection({ content, map }) {
  return (
    <S.AboutSectionWrapper>
      <S.AboutSectionContentWrapper>
        <S.AboutSectionTitle>IBET Brasil</S.AboutSectionTitle>
        <HTMLContainer content={content} />
      </S.AboutSectionContentWrapper>
      <S.AboutSectionMap>
        <S.AboutSectionMapSource srcSet={map.md} media="(min-width: 415px)" />
        <S.AboutSectionMapSource srcSet={map.xl} media="(min-width: 1200px)" />
        <S.AboutSectionMapDefault
          src={map.sm}
          alt="IBET pelo Brasil"
          title="IBET pelo Brasil"
        />
      </S.AboutSectionMap>
    </S.AboutSectionWrapper>
  );
}

AboutSection.defaultProps = { content: C.content, map: C.images.map };
AboutSection.propTypes = {
  content: PropTypes.string,
  map: PropTypes.shape({
    sm: PropTypes.string,
    md: PropTypes.string,
    xl: PropTypes.string,
  }),
};

export default AboutSection;
