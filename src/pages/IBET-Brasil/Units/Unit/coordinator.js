import React from 'react';
import PropTypes from 'prop-types';

import * as S from './styled';

const CoordinatorType = PropTypes.shape({});
export const Type = {
  coordinator: PropTypes.oneOfType([
    PropTypes.arrayOf(CoordinatorType),
    CoordinatorType,
  ]),
};

function Coordinator({ coordinator }) {
  return coordinator instanceof Array ? (
    coordinator.map(each => (
      <S.UnitCoordinator key={each.name}>
        <S.UnitCoordinatorName>{each.name}</S.UnitCoordinatorName>
        <S.UnitCoordinatorTitle>{each.title}</S.UnitCoordinatorTitle>
      </S.UnitCoordinator>
    ))
  ) : (
    <S.UnitCoordinator>
      <S.UnitCoordinatorName>{coordinator.name}</S.UnitCoordinatorName>
      <S.UnitCoordinatorTitle>{coordinator.title}</S.UnitCoordinatorTitle>
    </S.UnitCoordinator>
  );
}

Coordinator.defaultProps = { coordinator: [] };
Coordinator.propTypes = Type;

export default Coordinator;
