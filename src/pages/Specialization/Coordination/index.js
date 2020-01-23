import React from 'react';
import PropTypes from 'prop-types';

import MemberCard from '../../../components/MemberCard';

import * as S from './styled';

function SpecializationCoordination({ entries }) {
  return (
    <S.SpecCoordinationGrid>
      {entries.map(each => (
        <MemberCard {...each} key={each.name} />
      ))}
    </S.SpecCoordinationGrid>
  );
}

SpecializationCoordination.propTypes = {
  entries: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      photo: PropTypes.string.isRequired,
      social: PropTypes.arrayOf(
        PropTypes.shape({
          icon: PropTypes.func.isRequired,
          label: PropTypes.string.isRequired,
          url: PropTypes.string.isRequired,
        }),
      ).isRequired,
    }),
  ).isRequired,
};

export default SpecializationCoordination;
