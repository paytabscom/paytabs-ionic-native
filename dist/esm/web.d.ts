import { WebPlugin } from '@capacitor/core';
import type { PayTabsIonicPlugin, PaymentSDKConfiguration } from './definitions';
export declare class PayTabsIonicWeb extends WebPlugin implements PayTabsIonicPlugin {
    startCardPayment(_options: PaymentSDKConfiguration): Promise<any>;
    startApplePayPayment(_options: PaymentSDKConfiguration): Promise<any>;
    startAlternativePaymentMethod(_options: PaymentSDKConfiguration): Promise<any>;
}
