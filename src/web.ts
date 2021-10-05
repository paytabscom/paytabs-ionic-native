import { WebPlugin } from '@capacitor/core';

import type { PayTabsIonicPlugin, PaymentSDKConfiguration } from './definitions';

export class PayTabsIonicWeb extends WebPlugin implements PayTabsIonicPlugin {
  startCardPayment(_options: PaymentSDKConfiguration): Promise<any> {
    throw new Error('Method not implemented.');
  }
  startApplePayPayment(_options: PaymentSDKConfiguration): Promise<any> {
    throw new Error('Method not implemented.');
  }
  startAlternativePaymentMethod(_options: PaymentSDKConfiguration): Promise<any> {
    throw new Error('Method not implemented.');
  }
}
