var capacitorPayTabsIonic = (function (exports, core) {
   'use strict';

   /**
   * TokeniseType: define the behaviour of of saving card option inside the SDKs.
   */
   exports.TokeniseType = void 0;
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
   })(exports.TokeniseType || (exports.TokeniseType = {}));
   /**
   * TokeniseFromat: the returned token format
   */
   exports.TokeniseFromat = void 0;
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
   })(exports.TokeniseFromat || (exports.TokeniseFromat = {}));
   /**
   * TransactionType
   */
   exports.TransactionType = void 0;
   (function (TransactionType) {
       /**
       * sale
       */
       TransactionType["sale"] = "sale";
       /**
       * authorize / capture option
       */
       TransactionType["authorize"] = "auth";
   })(exports.TransactionType || (exports.TransactionType = {}));
   /**
   * TransactionClass
   */
   exports.TransactionClass = void 0;
   (function (TransactionClass) {
       /**
       * ecom: default transaction
       */
       TransactionClass["ecom"] = "ecom";
       /**
       * recurring: recurring transaction
       */
       TransactionClass["recurring"] = "recur";
   })(exports.TransactionClass || (exports.TransactionClass = {}));
   /**
   * AlternativePaymentMethod
   */
   exports.AlternativePaymentMethod = void 0;
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
   })(exports.AlternativePaymentMethod || (exports.AlternativePaymentMethod = {}));

   const PayTabsIonic = core.registerPlugin('PayTabsIonic', {
       web: () => Promise.resolve().then(function () { return web; }).then(m => new m.PayTabsIonicWeb()),
   });

   class PayTabsIonicWeb extends core.WebPlugin {
       startCardPayment(_options) {
           throw new Error('Method not implemented.');
       }
       startApplePayPayment(_options) {
           throw new Error('Method not implemented.');
       }
       startAlternativePaymentMethod(_options) {
           throw new Error('Method not implemented.');
       }
   }

   var web = /*#__PURE__*/Object.freeze({
      __proto__: null,
      PayTabsIonicWeb: PayTabsIonicWeb
   });

   exports.PayTabsIonic = PayTabsIonic;

   Object.defineProperty(exports, '__esModule', { value: true });

   return exports;

})({}, capacitorExports);
//# sourceMappingURL=plugin.js.map
