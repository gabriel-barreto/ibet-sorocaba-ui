import { useEffect, useState } from 'react';

import { PagesContent } from '../services';
import { $Object } from '../utils';

export default slug => {
  if (!slug) throw new Error('You need provide a slug to fetch page content');

  const [state, setState] = useState({
    error: false,
    loading: false,
    payload: {},
  });

  useEffect(() => {
    if ($Object.isEmpty(state.payload)) {
      setState(prev => ({ ...prev, loading: true }));

      PagesContent.fetch(slug)
        .then(payload => {
          if (!payload) throw new Error('fail to fetch');
          setState(prev => ({ ...prev, payload }));
        })
        .catch(() => {
          setState({ error: true, loading: false, payload: {} });
        })
        .finally(() => {
          setState(prev => ({ ...prev, loading: false }));
        });
    }
  }, []);

  return [state.payload, state.loading, state.error];
};
