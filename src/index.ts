import { registerPlugin } from '@capacitor/core';

import type { PayTabsIonicPlugin } from './definitions';

const PayTabsIonic = registerPlugin<PayTabsIonicPlugin>('PayTabsIonic', {
  web: () => import('./web').then(m => new m.PayTabsIonicWeb()),
});

export * from './definitions';
export { PayTabsIonic };
