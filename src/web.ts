import { WebPlugin } from '@capacitor/core';

import type { PayTabsIonicPlugin, PaymentSDKConfiguration, PaymentSDKSavedCardInfo } from './definitions';

export class PayTabsIonicWeb extends WebPlugin implements PayTabsIonicPlugin {
  startCardPayment(_options: PaymentSDKConfiguration): Promise<any> {
    throw new Error('Method not implemented.');
  }
  startTokenizedCardPayment(_options: PaymentSDKConfiguration, token: string, transactionRef:string): Promise<any> {
    throw new Error('Method not implemented.');
  }
  start3DSecureTokenizedCardPayment(_options: PaymentSDKConfiguration, savedCardInfo: PaymentSDKSavedCardInfo, token: string): Promise<any> {
    throw new Error('Method not implemented.');
  }
  startPaymentWithSavedCards(_options: PaymentSDKConfiguration, support3ds: boolean): Promise<any> {
    throw new Error('Method not implemented.');
  }
  startApplePayPayment(_options: PaymentSDKConfiguration): Promise<any> {
    throw new Error('Method not implemented.');
  }
  startAlternativePaymentMethod(_options: PaymentSDKConfiguration): Promise<any> {
    throw new Error('Method not implemented.');
  }
}
