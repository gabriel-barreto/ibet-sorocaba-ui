import React from 'react';
import PropTypes from 'prop-types';

import Slider from '../Slider';

import * as S from './styled';

function Structure({ content, gallery }) {
  return (
    <S.StructureWrapper>
      <S.StructureContentContainer>
        <S.StructureTitle>Nossa Estrutura</S.StructureTitle>
        <S.StructureParagraphs>
          {content.map((each, i) => (
            <S.StructureParagraph key={i}>{each}</S.StructureParagraph>
          ))}
        </S.StructureParagraphs>
      </S.StructureContentContainer>
      <Slider slides={gallery} />
    </S.StructureWrapper>
  );
}

Structure.defaultProps = { content: [], gallery: [] };
Structure.propTypes = {
  content: PropTypes.arrayOf(PropTypes.string),
  gallery: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string,
      label: PropTypes.string,
      url: PropTypes.string,
    }),
  ),
};

export default Structure;
