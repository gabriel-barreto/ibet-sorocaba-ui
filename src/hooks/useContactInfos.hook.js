import { useEffect, useState } from 'react';

import { contactInfo } from '../services';
import { Icons, $Object } from '../utils';

const mapSocial = payload =>
  payload.social.map(each => ({
    ...each,
    icon: Icons.getIcon(each.icon),
  }));

const mapInfos = payload => [
  {
    value: payload.phone,
    icon: Icons.getIcon('phone'),
    url: `tel:${payload.phone}`,
  },
  {
    value: payload.email,
    icon: Icons.getIcon('email'),
    url: `mailto:${payload.email}`,
  },
];

const fetchContactInfos = (state, setState) => {
  if ($Object.isEmpty(state.contacts)) {
    setState(prev => ({ ...prev, loading: true }));
    contactInfo
      .fetch()
      .then(payload => {
        if (payload) {
          setState(prev => ({
            ...prev,
            contacts: {
              ...payload,
              social: mapSocial(payload),
              infos: mapInfos(payload),
            },
          }));
        }
      })
      .finally(() => {
        setState(prev => ({ ...prev, loading: false }));
      });
  }
};

export default () => {
  const [state, setState] = useState({
    contacts: {},
    loading: false,
  });

  useEffect(() => {
    fetchContactInfos(state, setState);
  }, []);

  return [state.contacts, state.loading];
};
