import React from 'react';

import { LinkAlt as LinkIcon } from 'styled-icons/boxicons-regular/LinkAlt';

import FallbackProfilePhoto from '../../assets/FallbackProfilePhoto.jpg';

import { Icons } from '../../utils';

import * as S from './styled';

import type from './type';

function MemberCard({ name, title, photo, social }) {
  const getIcon = iconName => {
    const Icon = Icons.getIcon(iconName);
    return Icon ? <Icon size={24} /> : <LinkIcon size={24} />;
  };
  return (
    <S.MemberCard>
      <S.MemberPhoto src={photo.url} title={name} alt={name} />
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
            {getIcon(each.icon)}
          </S.MemberSocialLink>
        ))}
      </S.MemberSocial>
    </S.MemberCard>
  );
}

MemberCard.defaultProps = { photo: { url: FallbackProfilePhoto } };
MemberCard.propTypes = type;

export default MemberCard;
