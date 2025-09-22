import { WebPlugin } from '@capacitor/core';

import type { PayTabsIonicPlugin, PaymentSDKTokenizationArgument, PaymentSDKQueryConfiguration, PaymentSDKConfiguration, PaymentSDKSavedCardInfo } from './definitions';

export class PayTabsIonicWeb extends WebPlugin implements PayTabsIonicPlugin {
  startCardPayment(_options: PaymentSDKConfiguration): Promise<any> {
    throw new Error('Method not implemented.');
  }
  startTokenizedCardPayment(_options: PaymentSDKTokenizationArgument): Promise<any> {
    throw new Error('Method not implemented.');
  }
  start3DSecureTokenizedCardPayment(_options: PaymentSDKConfiguration, _savedCardInfo: PaymentSDKSavedCardInfo, _token: string): Promise<any> {
    throw new Error('Method not implemented.');
  }
  startApplePayPayment(_options: PaymentSDKConfiguration): Promise<any> {
    throw new Error('Method not implemented.');
  }
  startAlternativePaymentMethod(_options: PaymentSDKConfiguration): Promise<any> {
    throw new Error('Method not implemented.');
  }
  queryTransaction(_options: PaymentSDKQueryConfiguration): Promise<any> {
    throw new Error('Method not implemented.');
  }
}
