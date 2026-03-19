'use client';

import { useEffect, useState } from 'react';

export function PlausibleInit() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    import('@plausible-analytics/tracker').then((plausible) => {
      plausible.init({ domain: 'twanluttik.com' });
    });
  }, [mounted]);

  return null;
}
