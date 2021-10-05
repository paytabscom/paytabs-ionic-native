/* eslint-disable @typescript-eslint/naming-convention */
import { Component } from '@angular/core';
import 'paytabs-ionic-native';
// eslint-disable-next-line max-len
import { PaymentSDKBillingDetails, PaymentSDKShippingDetails, PaymentSDKConfiguration, PayTabsIonic } from 'paytabs-ionic-native';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {

  async payWithCard() {
    // eslint-disable-next-line prefer-const
    let billingDetails: PaymentSDKBillingDetails = {
          name: 'John Smith',
          email: 'email@domain.com',
          phone: '+201111111111',
          addressLine: 'Address line',
          city: 'Dubai',
          state: 'Dubai',
          countryCode: 'AE',
          zip: '1234'
        };

     const shippingDetails: PaymentSDKShippingDetails = {
          name: 'John Smith',
          email: 'email@domain.com',
          phone: '+201111111111',
          addressLine: 'Address line',
          city: 'Dubai',
          state: 'Dubai',
          countryCode: 'AE',
          zip: '1234'
        };

    // eslint-disable-next-line prefer-const
    let configuration: PaymentSDKConfiguration = {
          profileID: '47554',
          serverKey: 'SRJNLLK22J-JB6KG2G6K9-DWLH2WNLGT',
          clientKey: 'CBKMDM-RDM962-GKTMTG-Q27HV9',
          cartID: '12345',
          currency: 'USD',
          cartDescription: 'Flowers',
          merchantCountryCode: 'ae',
          merchantName: 'Flowers Store',
          amount: 20,
          screenTitle:'Pay with Card',
          billingDetails,
          shippingDetails,
        };
      const result = await PayTabsIonic.startCardPayment(configuration);
      this.handleResult(result);
  }

  handleResult(result: any) {

    // eslint-disable-next-line eqeqeq
    if (result.status == 'success') {
      // Handle transaction details here.
      const transactionDetails = result.data;
      console.log('responseCode: ' + transactionDetails.paymentResult.responseCode);
      console.log('transactionTime: ' + transactionDetails.paymentResult.transactionTime);
      console.log('responseMessage: ' + transactionDetails.paymentResult.responseMessage);
      console.log('transactionReference: ' + transactionDetails.transactionReference);
      console.log('token: ' + transactionDetails.token);
    // eslint-disable-next-line eqeqeq
    } else if (result.status == 'error') {
      // Handle error here the code and message.
    // eslint-disable-next-line eqeqeq
    } else if (result.status == 'event') {
      // Handle events here.
    }
  }
}



