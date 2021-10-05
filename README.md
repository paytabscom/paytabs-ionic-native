# paytabs-ionic-native

Ionic Native paytabs library is a wrapper for the native PayTabs Android and iOS SDKs, It helps you integrate with PayTabs seamlessly.


## Install

```bash
npm install paytabs
npx cap sync
```
## Usage
Be sure from register the plugin in android project in the main activity like that:
```
import com.getcapacitor.BridgeActivity;
import com.getcapacitor.Plugin;
import com.paytabs.ionic.plugin.PayTabs;
import com.paytabs.ionic.plugin.PayTabsPlugin;

import java.util.ArrayList;

public class MainActivity extends BridgeActivity {
  @Override
  public void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);

    // Initializes the Bridge
    this.init(savedInstanceState, new ArrayList<Class<? extends Plugin>>() {{
      // Additional plugins you've installed go here
      // Ex: add(TotallyAwesomePlugin.class);
      add(PayTabsPlugin.class);
    }});
  }
}
```

## API

<docgen-index>

* [`startCardPayment(...)`](#startcardpayment)
* [`startApplePayPayment(...)`](#startapplepaypayment)
* [`startAlternativePaymentMethod(...)`](#startalternativepaymentmethod)
* [Interfaces](#interfaces)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### startCardPayment(...)

```typescript
startCardPayment(options: PaymentSDKConfiguration) => any
```

| Param         | Type                                                                        |
| ------------- | --------------------------------------------------------------------------- |
| **`options`** | <code><a href="#paymentsdkconfiguration">PaymentSDKConfiguration</a></code> |

**Returns:** <code>any</code>

--------------------


### startApplePayPayment(...)

```typescript
startApplePayPayment(options: PaymentSDKConfiguration) => any
```

| Param         | Type                                                                        |
| ------------- | --------------------------------------------------------------------------- |
| **`options`** | <code><a href="#paymentsdkconfiguration">PaymentSDKConfiguration</a></code> |

**Returns:** <code>any</code>

--------------------


### startAlternativePaymentMethod(...)

```typescript
startAlternativePaymentMethod(options: PaymentSDKConfiguration) => any
```

| Param         | Type                                                                        |
| ------------- | --------------------------------------------------------------------------- |
| **`options`** | <code><a href="#paymentsdkconfiguration">PaymentSDKConfiguration</a></code> |

**Returns:** <code>any</code>

--------------------


### Interfaces


#### PaymentSDKConfiguration

<a href="#paymentsdkconfiguration">PaymentSDKConfiguration</a>: payment request configuration

| Prop                             | Type                                                                            | Description                                                   |
| -------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------- |
| **`profileID`**                  | <code>string</code>                                                             | merchant profile id                                           |
| **`serverKey`**                  | <code>string</code>                                                             | merchant server key                                           |
| **`clientKey`**                  | <code>string</code>                                                             | merchant client key                                           |
| **`transactionType`**            | <code>string</code>                                                             | transaction type: refer to TransactionType enum               |
| **`transactionClass`**           | <code>string</code>                                                             | transaction class: refer to TransactionClass enum             |
| **`cartID`**                     | <code>string</code>                                                             | order or cart id                                              |
| **`currency`**                   | <code>string</code>                                                             | payment currency                                              |
| **`amount`**                     | <code>number</code>                                                             | amount                                                        |
| **`cartDescription`**            | <code>string</code>                                                             | order or cart description                                     |
| **`languageCode`**               | <code>string</code>                                                             | user interface language code(en, ar, ..)                      |
| **`forceShippingInfo`**          | <code>boolean</code>                                                            | validate shipping info                                        |
| **`showBillingInfo`**            | <code>boolean</code>                                                            | validate billing info                                         |
| **`showShippingInfo`**           | <code>boolean</code>                                                            | handle missing shipping info by showing shipping info section |
| **`billingDetails`**             | <code><a href="#paymentsdkbillingdetails">PaymentSDKBillingDetails</a></code>   | configured billing details                                    |
| **`shippingDetails`**            | <code><a href="#paymentsdkshippingdetails">PaymentSDKShippingDetails</a></code> | configured shipping details                                   |
| **`merchantCountryCode`**        | <code>string</code>                                                             | merchant country code                                         |
| **`screenTitle`**                | <code>string</code>                                                             | title of the screen                                           |
| **`merchantName`**               | <code>string</code>                                                             | merchant name                                                 |
| **`serverIP`**                   | <code>string</code>                                                             | server ip                                                     |
| **`tokeniseType`**               | <code>string</code>                                                             | tokenise type: refer to TokeiseType enum                      |
| **`tokenFormat`**                | <code>string</code>                                                             | token format: refer to TokeiseFormat enum                     |
| **`hideCardScanner`**            | <code>string</code>                                                             | option to hide or show card scanner button                    |
| **`merchantApplePayIdentifier`** | <code>string</code>                                                             | merchant apple pay bundle id                                  |
| **`simplifyApplePayValidation`** | <code>string</code>                                                             | minize the vlaidation on apple pay billing and shipping info  |
| **`supportedApplePayNetworks`**  | <code>[string]</code>                                                           | supported apple pay networks                                  |
| **`token`**                      | <code>string</code>                                                             | returned token                                                |
| **`transactionReference`**       | <code>string</code>                                                             | returned transaction reference                                |
| **`samsungToken`**               | <code>string</code>                                                             | samsung Token                                                 |
| **`theme`**                      | <code><a href="#paymentsdktheme">PaymentSDKTheme</a></code>                     | customized theme                                              |
| **`alternativePaymentMethods`**  | <code>[string]</code>                                                           | list of alternative payment methods                           |


#### PaymentSDKBillingDetails

<a href="#paymentsdkbillingdetails">PaymentSDKBillingDetails</a>

| Prop              | Type                | Description                    |
| ----------------- | ------------------- | ------------------------------ |
| **`name`**        | <code>string</code> | billing: customer name         |
| **`email`**       | <code>string</code> | billing: customer email        |
| **`phone`**       | <code>string</code> | billing: customer phone        |
| **`addressLine`** | <code>string</code> | billing: customer address line |
| **`city`**        | <code>string</code> | billing: customer city         |
| **`state`**       | <code>string</code> | billing: customer state        |
| **`countryCode`** | <code>string</code> | billing: customer country code |
| **`zip`**         | <code>string</code> | billing: customer zip code     |


#### PaymentSDKShippingDetails

<a href="#paymentsdkshippingdetails">PaymentSDKShippingDetails</a>

| Prop              | Type                | Description                     |
| ----------------- | ------------------- | ------------------------------- |
| **`name`**        | <code>string</code> | shipping: customer name         |
| **`email`**       | <code>string</code> | shipping: customer email        |
| **`phone`**       | <code>string</code> | shipping: customer phone        |
| **`addressLine`** | <code>string</code> | shipping: customer address line |
| **`city`**        | <code>string</code> | shipping: customer city         |
| **`state`**       | <code>string</code> | shipping: customer state        |
| **`countryCode`** | <code>string</code> | shipping: customer country code |
| **`zip`**         | <code>string</code> | shipping: customer zip code     |


#### PaymentSDKTheme

<a href="#paymentsdktheme">PaymentSDKTheme</a>

| Prop                     | Type                | Description                 |
| ------------------------ | ------------------- | --------------------------- |
| **`primaryColor`**       | <code>string</code> | theme: primary color        |
| **`primaryFontColor`**   | <code>string</code> | theme: primary font color   |
| **`primaryFont`**        | <code>string</code> | theme: primary font         |
| **`secondaryColor`**     | <code>string</code> | theme: secondary color      |
| **`secondaryFontColor`** | <code>string</code> | theme: secondary font color |
| **`secondaryFont`**      | <code>string</code> | theme: secondary font       |
| **`strokeColor`**        | <code>string</code> | theme: stroke color         |
| **`strokeThinckness`**   | <code>number</code> | theme: primary color        |
| **`inputsCornerRadius`** | <code>number</code> | theme: input corner radius  |
| **`buttonColor`**        | <code>string</code> | theme: button color         |
| **`buttonFontColor`**    | <code>string</code> | theme: button font color    |
| **`buttonFont`**         | <code>string</code> | theme: button font          |
| **`titleFontColor`**     | <code>string</code> | theme: title font color     |
| **`titleFont`**          | <code>string</code> | theme: title font           |
| **`backgroundColor`**    | <code>string</code> | theme: background color     |
| **`placeholderColor`**   | <code>string</code> | theme: placeholder color    |

</docgen-api>
