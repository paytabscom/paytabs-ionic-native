/**
* TokeniseType: define the behaviour of of saving card option inside the SDKs.
*/
export var TokeniseType;
(function (TokeniseType) {
    /**
    * none: tokenise is off
    */
    TokeniseType["none"] = "none";
    /**
   * merchantMandatory: tokenise is forced
   */
    TokeniseType["merchantMandatory"] = "merchantMandatory";
    /**
   * userMandatory: tokenise is forced as per user approval
   */
    TokeniseType["userMandatory"] = "userMandatory";
    /**
   * userOptinoal: tokenise if optional as per user approval
   */
    TokeniseType["userOptinoal"] = "userOptinoal";
})(TokeniseType || (TokeniseType = {}));
/**
* TokeniseFromat: the returned token format
*/
export var TokeniseFromat;
(function (TokeniseFromat) {
    /**
    * none: no format
    */
    TokeniseFromat["none"] = "1";
    /**
    * hex32: Hex with 32 length
    */
    TokeniseFromat["hex32"] = "2";
    /**
    * alphaNum20: alpha numeric 20 length
    */
    TokeniseFromat["alphaNum20"] = "3";
    /**
    * digit22: digits with 22 length
    */
    TokeniseFromat["digit22"] = "3";
    /**
    * digit16: digits with 16 length
    */
    TokeniseFromat["digit16"] = "5";
    /**
    * alphaNum32: alpha numeric 32 length
    */
    TokeniseFromat["alphaNum32"] = "6";
})(TokeniseFromat || (TokeniseFromat = {}));
/**
* TransactionType
*/
export var TransactionType;
(function (TransactionType) {
    /**
    * sale
    */
    TransactionType["sale"] = "sale";
    /**
    * authorize / capture option
    */
    TransactionType["authorize"] = "auth";
})(TransactionType || (TransactionType = {}));
/**
* TransactionClass
*/
export var TransactionClass;
(function (TransactionClass) {
    /**
    * ecom: default transaction
    */
    TransactionClass["ecom"] = "ecom";
    /**
    * recurring: recurring transaction
    */
    TransactionClass["recurring"] = "recur";
})(TransactionClass || (TransactionClass = {}));
/**
* AlternativePaymentMethod
*/
export var AlternativePaymentMethod;
(function (AlternativePaymentMethod) {
    /**
    * unionpay: for supporting payment with unionpay
    */
    AlternativePaymentMethod["unionPay"] = "unionpay";
    /**
    * stcpay: for supporting payment with stcpay
    */
    AlternativePaymentMethod["stcPay"] = "stcpay";
    /**
    * valu: for supporting payment with valu
    */
    AlternativePaymentMethod["valu"] = "valu";
    /**
    * meezaqr: for supporting payment with meezaqr
    */
    AlternativePaymentMethod["meezaQR"] = "meezaqr";
    /**
    * omannet: for supporting payment with omannet
    */
    AlternativePaymentMethod["omannet"] = "omannet";
    /**
    * knetcredit: for supporting payment with knetcredit
    */
    AlternativePaymentMethod["knetCredit"] = "knetcredit";
    /**
    * knetdebit: for supporting payment with knetdebit
    */
    AlternativePaymentMethod["knetDebit"] = "knetdebit";
    /**
    * fawry: for supporting payment with fawry
    */
    AlternativePaymentMethod["fawry"] = "fawry";
})(AlternativePaymentMethod || (AlternativePaymentMethod = {}));
//# sourceMappingURL=definitions.js.map