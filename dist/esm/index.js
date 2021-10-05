import { registerPlugin } from '@capacitor/core';
const PayTabsIonic = registerPlugin('PayTabsIonic', {
    web: () => import('./web').then(m => new m.PayTabsIonicWeb()),
});
export * from './definitions';
export { PayTabsIonic };
//# sourceMappingURL=index.js.map