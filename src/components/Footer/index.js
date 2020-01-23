import React from 'react';
import PropTypes from 'prop-types';

import ContactSection from '../Contacts';
import SocialButtons from '../Navbar/Social/SocialButtons';
import Infos from '../Navbar/Social/Infos';

import * as C from './content';
import * as S from './styled';

function Footer({ infos, social }) {
  return (
    <>
      <ContactSection />
      <S.FooterWrapper>
        <S.FooterBrand
          src={C.images.brand}
          title="IBET Sorocaba"
          alt="IBET Sorocaba"
        />
        <S.FooterInfos>
          <S.FooterContactInfo>
            <Infos entries={infos} />
          </S.FooterContactInfo>
          <S.FooterAddressInfo className="--featured">{`${C.location.address}, ${C.location.number} - ${C.location.complement}`}</S.FooterAddressInfo>
          <S.FooterAddressInfo>{`${C.location.city} - ${C.location.estate} - ${C.location.country}`}</S.FooterAddressInfo>
        </S.FooterInfos>
        <S.FooterSitemap>
          {C.sitemap.map(each =>
            each.external ? (
              <S.FooterSitemapExternalItem
                key={each.to}
                href={each.to}
                target="blank"
                rel="noreferrer noopener"
              >
                {each.label}
              </S.FooterSitemapExternalItem>
            ) : (
              <S.FooterSitemapItem to={each.to} key={each.to}>
                {each.label}
              </S.FooterSitemapItem>
            ),
          )}
        </S.FooterSitemap>
        <S.FooterSignature>
          <S.FooterSocial>
            <SocialButtons entries={social} />
          </S.FooterSocial>
          <S.FooterSignatureMEC
            src={C.images.mec}
            title="Cursos aprovados pelo MEC"
            alt="Cursos aprovados pelo MEC"
          />
          <S.FooterSignatureText>
            © 2019 Copyright IBET Sorocaba.
          </S.FooterSignatureText>
          <S.FooterSignatureText>
            Desenvolvido por Entrecliques
          </S.FooterSignatureText>
        </S.FooterSignature>
      </S.FooterWrapper>
    </>
  );
}

Footer.propTypes = {
  infos: PropTypes.arrayOf(
    PropTypes.shape({
      label: '',
      icon: '',
      value: '',
      url: '',
    }),
  ).isRequired,
  social: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.any.isRequired,
      label: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default Footer;
