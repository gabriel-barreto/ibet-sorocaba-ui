import { At as Email } from 'styled-icons/boxicons-regular/At';
import { Facebook } from 'styled-icons/boxicons-logos/Facebook';
import { Instagram } from 'styled-icons/fa-brands/Instagram';
import { Linkedin } from 'styled-icons/boxicons-logos/Linkedin';
import { Phone } from 'styled-icons/icomoon/Phone';

const _iconsCollection = {
  email: Email,
  phone: Phone,
  linkedin: Linkedin,
  instagram: Instagram,
  facebook: Facebook,
};

const getIcon = key => (key in _iconsCollection ? _iconsCollection[key] : null);

export default { getIcon };
