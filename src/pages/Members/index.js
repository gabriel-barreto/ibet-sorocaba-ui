import React from 'react';

import { usePagesContent } from '../../hooks';

import { FullScreenSpinner, Layout } from '../../components';
import MemberCard from '../../components/MemberCard';

import * as S from './styled';

function MembersPage() {
  const [state, loading, error] = usePagesContent('members');
  return (
    <Layout title="Membros" redirectCondition={error}>
      <FullScreenSpinner visible={loading} />
      <S.MembersSection>
        <S.MembersSectionTitle>Coordenadores</S.MembersSectionTitle>
        <S.MembersSectionGroup>
          {state && state.length > 0
            ? state
                .filter(each => new RegExp('^coord', 'i').test(each.position))
                .map(each => <MemberCard {...each} key={each.name} />)
            : null}
        </S.MembersSectionGroup>
        <S.MembersSectionTitle>Professores</S.MembersSectionTitle>
        <S.MembersSectionGroup>
          {state && state.length > 0
            ? state
                .filter(each => new RegExp('prof', 'i').test(each.position))
                .map(each => <MemberCard {...each} key={each.name} />)
            : null}
        </S.MembersSectionGroup>
      </S.MembersSection>
    </Layout>
  );
}

export default MembersPage;
