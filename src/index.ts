import { registerPlugin } from '@capacitor/core';

import type { AlternativePaymentMethod, PaymentSDKTokenizationArgument, PaymentSDKBillingDetails, PaymentSDKQueryConfiguration, PaymentSDKConfiguration, PaymentSDKShippingDetails, PaymentSDKTheme, PayTabsIonicPlugin, TokeniseFromat, TokeniseType, TransactionClass, TransactionType, PaymentSDKCardDiscount } from './definitions';

const PayTabsIonic = registerPlugin<PayTabsIonicPlugin>('PayTabsIonic', {
  web: () => import('./web').then(m => new m.PayTabsIonicWeb()),
});

export * from './definitions';
export { PayTabsIonic , PaymentSDKTokenizationArgument, PaymentSDKQueryConfiguration, PaymentSDKConfiguration, PaymentSDKBillingDetails, PaymentSDKShippingDetails, PaymentSDKTheme, TokeniseType, TokeniseFromat, TransactionType, TransactionClass, AlternativePaymentMethod, PaymentSDKCardDiscount };
