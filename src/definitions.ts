export interface PayTabsIonicPlugin {
  startCardPayment(options: PaymentSDKConfiguration): Promise<any>;
  startTokenizedCardPayment(options: PaymentSDKTokenizationArgument): Promise<any>;
  start3DSecureTokenizedCardPayment(options: PaymentSDKConfiguration, savedCardInfo: PaymentSDKSavedCardInfo, token: string): Promise<any>;
  startPaymentWithSavedCards(options: PaymentSDKConfiguration, support3ds: boolean): Promise<any>;
  startApplePayPayment(options: PaymentSDKConfiguration): Promise<any>;
  queryTransaction(options: PaymentSDKQueryConfiguration): Promise<any>;
  startAlternativePaymentMethod(options: PaymentSDKConfiguration): Promise<any>;
}


/**
* PaymentSDKQueryConfiguration: query request configuration
*/
export interface PaymentSDKQueryConfiguration{
  /**
  * merchant server key
  */
  serverKey: string;
  /**
  * merchant client key
  */
  clientKey: string;
  /**
  * merchant country code
  */
  merchantCountryCode: string;
  /**
  * merchant profile id
  */
  profileID: string;
  /**
  * returned transaction reference
  */
  transactionReference: string;
}

/**
* PaymentSDKTokenizationArgument: tokenization configuration
*/
export interface PaymentSDKTokenizationArgument{
  /**
  * payment configurations
  */
  configurations: PaymentSDKConfiguration;
  /**
  * trx token
  */
  token: string;
  /**
  * transaction reference
  */
  transactionReference: string;
}

/**
* PaymentSDKConfiguration: payment request configuration
*/
export interface PaymentSDKConfiguration {
  /**
  * merchant profile id
  */
  profileID: string;
  /**
  * merchant server key
  */
  serverKey: string;
  /**
  * merchant client key
  */
  clientKey: string;
  /**
  * transaction type: refer to TransactionType enum
  */
  transactionType?: string;
  /**
  * transaction class: refer to TransactionClass enum
  */
  transactionClass?: string;
  /**
  * order or cart id
  */
  cartID: string;
  /**
  * payment currency
  */
  currency: string;
  /**
  * amount
  */
  amount: number;
  /**
  * order or cart description
  */
  cartDescription: string;
  /**
  * user interface language code(en, ar, ..)
  */
  languageCode?: string;
  /**
  * validate shipping info
  */
  forceShippingInfo?: boolean;
  /**
  * validate billing info
  */
  showBillingInfo?: boolean;
  /**
  * handle missing shipping info by showing shipping info section 
  */
  showShippingInfo?: boolean;
  /**
  * configured billing details
  */
  billingDetails?: PaymentSDKBillingDetails;
  /**
  * configured shipping details
  */
  shippingDetails?: PaymentSDKShippingDetails;
  /**
  * merchant country code
  */
  merchantCountryCode: string;
  /**
  * title of the screen
  */
  screenTitle?: string;
  /**
  * merchant name
  */
  merchantName?: string;
  /**
  * server ip
  */
  serverIP?: string;
  /**
  * tokenise type: refer to TokeiseType enum
  */
  tokeniseType?: string;
  /**
  * token format: refer to TokeiseFormat enum
  */
  tokenFormat?: string;
  /**
  * option to hide or show card scanner button
  */
  hideCardScanner?: string;
  /**
  * merchant Apple Pay bundle id
  */
  merchantApplePayIdentifier?: string;
  /**
  * minimize the validation on Apple Pay billing and shipping info
  */
  simplifyApplePayValidation?: string;
  /**
  * supported Apple Pay networks
  */
  supportedApplePayNetworks?: [string];
  /**
  * returned token 
  */
  token?: string;
  /**
   * is digital product
   */
  isDigitalProduct?: boolean;
  /**
  * returned transaction reference
  */
  transactionReference?: string;
  /**
  * samsung Token
  */
  samsungToken?: string;
  /**
  * customized theme
  */
  theme?: PaymentSDKTheme;
  /**
  * list of alternative payment methods
  */
  alternativePaymentMethods?: [string];
}

/**
* PaymentSDKBillingDetails
*/
export interface PaymentSDKBillingDetails {
  /**
  * billing: customer name
  */
  name?: string;
  /**
  * billing: customer email
  */
  email?: string;
  /**
  * billing: customer phone
  */
  phone?: string;
  /**
  * billing: customer address line
  */
  addressLine?: string;
  /**
  * billing: customer city
  */
  city?: string;
  /**
  * billing: customer state
  */
  state?: string;
  /**
  * billing: customer country code
  */
  countryCode?: string;
  /**
  * billing: customer zip code
  */
  zip?: string;
} 

/**
* PaymentSDKShippingDetails
*/
export interface PaymentSDKShippingDetails {
  /**
  *  shipping: customer name
  */
  name?: string;
  /**
  * shipping: customer email
  */
  email?: string;
  /**
  * shipping: customer phone
  */
  phone?: string;
  /**
  * shipping: customer address line
  */
  addressLine?: string;
  /**
  * shipping: customer city
  */
  city?: string;
  /**
  * shipping: customer state
  */
  state?: string;
  /**
  * shipping: customer country code
  */
  countryCode?: string;
  /**
  * shipping: customer zip code
  */
  zip?: string;
} 

/**
* PaymentSDKTheme
*/
export interface PaymentSDKTheme {
  /**
  * theme: primary color
  */
  primaryColor?: string;
  /**
  * theme: primary font color
  */
  primaryFontColor?: string;
  /**
  * theme: primary font
  */
  primaryFont?: string;
  /**
  * theme: secondary color
  */
  secondaryColor?: string;
  /**
  * theme: secondary font color
  */
  secondaryFontColor?: string;
  /**
  * theme: secondary font
  */
  secondaryFont?: string;
  /**
  * theme: stroke color
  */
  strokeColor?: string;
  /**
  * theme: primary color
  */
  strokeThinckness?: number;
  /**
  * theme: input corner radius
  */
  inputsCornerRadius?: number;
  /**
  * theme: button color
  */
  buttonColor?: string;
  /**
  * theme: button font color
  */
  buttonFontColor?: string;
  /**
  * theme: button font
  */
  buttonFont?: string;
  /**
  * theme: title font color
  */
  titleFontColor?: string;
  /**
  * theme: title font
  */
  titleFont?: string;
  /**
  * theme: background color
  */
  backgroundColor?: string;
  /**
  * theme: placeholder color
  */
  placeholderColor?: string;
  
  /**
  * theme: logo
  */
  logoImage?: string;
} 


/**
* PaymentSDKSavedCardInfo
*/
export interface PaymentSDKSavedCardInfo {
  /**
  * maskedCard: Card mask
  */
   maskedCard?: string;
  /**
  * cardType: card type (visa, mc...)
  */
   cardType?: string;
} 
/**
* TokeniseType: define the behaviour of saving card option inside the SDKs.
*/
export enum TokeniseType {
  /**
  * none: tokenise is off
  */
  none = "none",
   /**
  * merchantMandatory: tokenise is forced
  */
  merchantMandatory = "merchantMandatory",
   /**
  * userMandatory: tokenise is forced as per user approval
  */
  userMandatory = "userMandatory",
   /**
  * userOptinoal: tokenise if optional as per user approval
  */
  userOptinoal = "userOptinoal",
}

/**
* TokeniseFromat: the returned token format
*/
export enum TokeniseFromat {
  /**
  * none: no format
  */
  none = "1", 
  /**
  * hex32: Hex with 32 length
  */
  hex32 = "2", 
  /**
  * alphaNum20: alpha numeric 20 length
  */
  alphaNum20 = "3", 
  /**
  * digit22: digits with 22 length
  */
  digit22 = "3", 
  /**
  * digit16: digits with 16 length
  */
  digit16 = "5", 
  /**
  * alphaNum32: alpha numeric 32 length
  */
  alphaNum32 = "6"
}

/**
* TransactionType
*/
export enum TransactionType {
  /**
  * sale
  */
  sale = "sale", 
  /**
  * authorize / capture option
  */
  authorize = "auth"
}

/**
* TransactionClass
*/
export enum TransactionClass {
  /**
  * ecom: default transaction
  */ 
  ecom = "ecom", 
  /**
  * recurring: recurring transaction
  */ 
  recurring = "recur"
}

/**
* AlternativePaymentMethod
*/
export enum AlternativePaymentMethod {
  /**
  * unionpay: for supporting payment with unionpay
  */ 
  unionPay = "unionpay", 
  /**
  * stcpay: for supporting payment with stcpay
  */ 
  stcPay = "stcpay", 
  /**
  * valu: for supporting payment with valu
  */ 
  valu = "valu", 
  /**
  * meezaqr: for supporting payment with meezaqr
  */ 
  meezaQR = "meezaqr", 
  /**
  * omannet: for supporting payment with omannet
  */ 
  omannet = "omannet", 
  /**
  * knetcredit: for supporting payment with knetcredit
  */ 
  knetCredit = "knetcredit", 
  /**
  * knetdebit: for supporting payment with knetdebit
  */ 
  knetDebit = "knetdebit",
  /**
  * fawry: for supporting payment with fawry
  */  
  fawry = "fawry",
  /**
  * tabby: for supporting payment with tabby
  */  
  tabby = "tabby"
}
