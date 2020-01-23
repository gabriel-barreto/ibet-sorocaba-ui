import React from 'react';

import { LinkAlt as LinkIcon } from 'styled-icons/boxicons-regular/LinkAlt';

import * as S from './styled';

import type from './type';

function MemberCard({ name, title, photo, social }) {
  return (
    <S.MemberCard>
      <S.MemberPhoto src={photo} title={name} alt={name} />
      <S.MemberName>{name}</S.MemberName>
      <S.MemberTitle>{title}</S.MemberTitle>
      <S.MemberSocial>
        {social.map(each => (
          <S.MemberSocialLink
            key={each.url}
            href={each.url}
            title={each.title}
            alt={each.title}
            target="blank"
            rel="noreferrer noopener"
          >
            {each.icon ? <each.icon size={24} /> : <LinkIcon size={24} />}
          </S.MemberSocialLink>
        ))}
      </S.MemberSocial>
    </S.MemberCard>
  );
}

MemberCard.propTypes = type;

export default MemberCard;
