'use client';

import { useEffect } from 'react';
import * as plausible from '@plausible-analytics/tracker';

export function PlausibleInit() {
  useEffect(() => {
    plausible.init({ domain: 'twanluttik.com' });
  }, []);

  return null;
}
