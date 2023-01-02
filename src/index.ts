import { registerPlugin } from '@capacitor/core';

import type { AlternativePaymentMethod, PaymentSDKBillingDetails, PaymentSDKQueryConfiguration, PaymentSDKConfiguration, PaymentSDKShippingDetails, PaymentSDKTheme, PayTabsIonicPlugin, TokeniseFromat, TokeniseType, TransactionClass, TransactionType } from './definitions';

const PayTabsIonic = registerPlugin<PayTabsIonicPlugin>('PayTabsIonic', {
  web: () => import('./web').then(m => new m.PayTabsIonicWeb()),
});

export * from './definitions';
export { PayTabsIonic , PaymentSDKQueryConfiguration, PaymentSDKConfiguration, PaymentSDKBillingDetails, PaymentSDKShippingDetails, PaymentSDKTheme, TokeniseType, TokeniseFromat, TransactionType, TransactionClass, AlternativePaymentMethod };
