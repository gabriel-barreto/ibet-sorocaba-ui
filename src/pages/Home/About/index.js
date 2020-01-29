import React from 'react';
import PropTypes from 'prop-types';

import { $Object } from '../../../utils';

import { HTMLContainer } from '../../../components';
import Coordinator from './Coordinator';

import * as S from './styled';

function AboutSection({ coordinator, content }) {
  return (
    <S.AboutSectionWrapper id="about">
      {!$Object.isEmpty(coordinator) ? <Coordinator {...coordinator} /> : null}
      <S.AboutContentWrapper>
        {!$Object.isEmpty(coordinator) ? (
          <Coordinator {...coordinator} noPhoto />
        ) : null}
        <HTMLContainer content={content} />
        <S.AboutContentButton to="/ibet-sorocaba">
          Ler mais...
        </S.AboutContentButton>
      </S.AboutContentWrapper>
    </S.AboutSectionWrapper>
  );
}

AboutSection.defaultProps = { coordinator: {} };
AboutSection.propTypes = {
  coordinator: PropTypes.shape({
    photo: PropTypes.shape({ photo: PropTypes.string }),
    name: PropTypes.string,
    title: PropTypes.string,
    position: PropTypes.string,
  }),
  content: PropTypes.string.isRequired,
};

export default AboutSection;
