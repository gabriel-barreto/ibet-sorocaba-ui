import React from 'react';
import PropTypes from 'prop-types';

import Slider from '../Slider';

import * as C from './content';
import * as S from './styled';

function Structure({ paragraphs }) {
  return (
    <S.StructureWrapper>
      <S.StructureContentContainer>
        <S.StructureTitle>Nossa Estrutura</S.StructureTitle>
        <S.StructureParagraphs>
          {paragraphs.map((each, i) => (
            <S.StructureParagraph key={i}>{each}</S.StructureParagraph>
          ))}
        </S.StructureParagraphs>
      </S.StructureContentContainer>
      <Slider />
    </S.StructureWrapper>
  );
}

Structure.defaultProps = { paragraphs: C.paragraphs };
Structure.propTypes = { paragraphs: PropTypes.arrayOf(PropTypes.string) };

export default Structure;
