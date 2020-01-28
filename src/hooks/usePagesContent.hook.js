import { useEffect, useState } from 'react';

import { PagesContent } from '../services';
import { $Object } from '../utils';

export default slug => {
  if (!slug) throw new Error('You need provide a slug to fetch page content');

  const [state, setState] = useState({ payload: {}, loading: false });
  useEffect(() => {
    if ($Object.isEmpty(state.payload)) {
      setState(prev => ({ ...prev, loading: true }));

      PagesContent.fetch(slug)
        .then(payload => setState(prev => ({ ...prev, payload })))
        .finally(() => {
          setState(prev => ({ ...prev, loading: false }));
        });
    }
  }, []);

  return [state.payload, state.loading];
};
