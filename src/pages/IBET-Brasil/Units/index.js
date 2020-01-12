import React from 'react';
import PropTypes from 'prop-types';

import UnitType from './Unit/type';
import Unit from './Unit';

import * as C from './content';
import * as S from './styled';

function UnitsSection({ units }) {
  return (
    <S.UnitsSectionWrapper>
      <S.UnitsSectionTitle>Unidades IBET</S.UnitsSectionTitle>
      <S.UnitsSectionGrid>
        {units.length > 0
          ? units.map(each => <Unit key={each.initials} {...each} />)
          : null}
      </S.UnitsSectionGrid>
    </S.UnitsSectionWrapper>
  );
}

UnitsSection.defaultProps = { units: C.units };
UnitsSection.propTypes = {
  units: PropTypes.arrayOf(PropTypes.shape(UnitType)),
};

export default UnitsSection;
