import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import * as S from './styled';

function Tabs({ entries }) {
  const [state, setState] = useState({ active: '' });

  function onTabChangeHandler(active) {
    return setState(prev => ({ ...prev, active }));
  }

  useEffect(() => {
    const [{ label: active }] = entries;
    setState(prev => ({ ...prev, active }));
  }, []);

  return (
    <S.TabsWrapper>
      <S.TabsSelector>
        {entries.map(each => (
          <S.TabsTab
            key={each.label}
            className={each.label === state.active ? '--active' : ''}
            onClick={() => onTabChangeHandler(each.label)}
          >
            {each.label}
          </S.TabsTab>
        ))}
      </S.TabsSelector>
      <S.TabsComponentContainer>
        {state.active
          ? entries.find(each => each.label === state.active).component()
          : null}
      </S.TabsComponentContainer>
    </S.TabsWrapper>
  );
}

Tabs.propTypes = {
  entries: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      component: PropTypes.func,
    }),
  ).isRequired,
};

export default Tabs;
