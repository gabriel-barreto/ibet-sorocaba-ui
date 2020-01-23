import React from 'react';

import { Layout } from '../../components';

import MemberCard from '../../components/MemberCard';

import * as C from './content';
import * as S from './styled';

function MembersPage() {
  return (
    <Layout title="Membros">
      <S.MembersSection>
        <S.MembersSectionTitle>Coordenadores</S.MembersSectionTitle>
        <S.MembersSectionGroup>
          {C.members
            .filter(each => each.coord)
            .map(each => (
              <MemberCard {...each} key={each.name} />
            ))}
        </S.MembersSectionGroup>
        <S.MembersSectionTitle>Professores</S.MembersSectionTitle>
        <S.MembersSectionGroup>
          {C.members.map(each => (
            <MemberCard {...each} key={each.name} />
          ))}
        </S.MembersSectionGroup>
      </S.MembersSection>
    </Layout>
  );
}

export default MembersPage;
