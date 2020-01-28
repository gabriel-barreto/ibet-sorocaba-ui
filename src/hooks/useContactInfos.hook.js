import { useEffect, useState } from 'react';

import { contactInfo } from '../services';
import { Icons } from '../utils';

const mapSocial = payload =>
  payload.social.map(each => ({
    ...each,
    icon: Icons.getIcon(each.icon),
  }));

const mapInfos = payload => [
  {
    value: payload.phones[0],
    icon: Icons.getIcon('phone'),
    url: `tel:${payload.phones[0]}`,
  },
  {
    value: payload.email,
    icon: Icons.getIcon('email'),
    url: `mailto:${payload.email}`,
  },
];

const fetchContactInfos = (state, setState) => {
  if (!Object.keys(state.contacts).length) {
    setState(prev => ({ ...prev, loading: true }));
    contactInfo
      .fetch()
      .then(payload => {
        setState(prev => ({
          ...prev,
          contacts: {
            social: mapSocial(payload),
            infos: mapInfos(payload),
          },
        }));
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
