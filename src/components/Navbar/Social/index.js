import React from 'react';

import Infos, { Type as InfosType } from './Infos';
import SocialButtons, { Type as SocialButtonsType } from './SocialButtons';

import * as S from './styled';

function Social({ infos, social }) {
  return (
    <S.NavbarSocial>
      <S.NavbarSocialGroup className="--row">
        <SocialButtons entries={social} />
      </S.NavbarSocialGroup>
      <S.NavbarSocialGroup>
        <Infos entries={infos} />
      </S.NavbarSocialGroup>
    </S.NavbarSocial>
  );
}

export const Type = {
  social: SocialButtonsType.isRequired,
  infos: InfosType.isRequired,
};
Social.propTypes = Type;

export default Social;
