import React from 'react';
import PropTypes from 'prop-types';

import IntroCard from '../IntroCard';

import * as C from './content';
import * as S from './styled';

function ListIntroCard({ entries }) {
  return (
    <S.ListIntroCardsWrapper>
      {entries.map((each, i) => (
        <IntroCard {...each} key={i} />
      ))}
    </S.ListIntroCardsWrapper>
  );
}

ListIntroCard.defaultProps = { entries: C.entries };
ListIntroCard.propTypes = {
  entries: PropTypes.arrayOf(
    PropTypes.shape({
      bg: PropTypes.string.isRequired,
      icon: PropTypes.any.isRequired,
      label: PropTypes.string,
      title: PropTypes.string.isRequired,
    }),
  ),
};

export default ListIntroCard;
