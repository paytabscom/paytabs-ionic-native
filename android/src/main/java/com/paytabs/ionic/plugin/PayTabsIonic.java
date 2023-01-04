package com.paytabs.ionic.plugin;

import static com.payment.paymentsdk.integrationmodels.PaymentSdkApmsKt.createPaymentSdkApms;
import static com.payment.paymentsdk.integrationmodels.PaymentSdkLanguageCodeKt.createPaymentSdkLanguageCode;
import static com.payment.paymentsdk.integrationmodels.PaymentSdkTokenFormatKt.createPaymentSdkTokenFormat;
import static com.payment.paymentsdk.integrationmodels.PaymentSdkTokeniseKt.createPaymentSdkTokenise;
import static com.payment.paymentsdk.integrationmodels.PaymentSdkTransactionTypeKt.createPaymentSdkTransactionType;

import android.util.Log;

import com.getcapacitor.JSArray;
import com.getcapacitor.JSObject;
import com.getcapacitor.PluginCall;
import com.google.gson.Gson;
import com.payment.paymentsdk.PaymentSdkConfigBuilder;
import com.payment.paymentsdk.integrationmodels.PaymentSdkApms;
import com.payment.paymentsdk.integrationmodels.PaymentSdkBillingDetails;
import com.payment.paymentsdk.integrationmodels.PaymentSdkLanguageCode;
import com.payment.paymentsdk.integrationmodels.PaymentSdkShippingDetails;
import com.payment.paymentsdk.integrationmodels.PaymentSdkTokenFormat;
import com.payment.paymentsdk.integrationmodels.PaymentSdkTokenise;
import com.payment.paymentsdk.integrationmodels.PaymentSdkTransactionDetails;
import com.payment.paymentsdk.integrationmodels.PaymentSdkTransactionType;
import com.payment.paymentsdk.integrationmodels.PaymentSDKQueryConfiguration;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.util.ArrayList;

public class PayTabsIonic {


    public PaymentSdkConfigBuilder createConfiguration(PluginCall paymentDetails) throws JSONException {
        Log.d("Plugin Call", paymentDetails.getString("profileID"));
        String profileId = paymentDetails.getString("profileID");
        String serverKey = paymentDetails.getString("serverKey");
        String clientKey = paymentDetails.getString("clientKey");

        String screenTitle = paymentDetails.getString("screenTitle");
        String orderId = paymentDetails.getString("cartID");
        String cartDesc = paymentDetails.getString("cartDescription");
        String currency = paymentDetails.getString("currency");
        String token = paymentDetails.getString("token");
        String transRef = paymentDetails.getString("transactionReference");
        double amount = paymentDetails.getDouble("amount");

        JSObject billingDetails = paymentDetails.getObject("billingDetails");
        PaymentSdkBillingDetails billingData = null;
        if(billingDetails != null) {
            billingData = new PaymentSdkBillingDetails(
                    billingDetails.getString("city"),
                    billingDetails.getString("countryCode"),
                    billingDetails.getString("email"),
                    billingDetails.getString("name"),
                    billingDetails.getString("phone"), billingDetails.getString("state"),
                    billingDetails.getString("addressLine"), billingDetails.getString("zip")
            );
        }
        JSObject shippingDetails = paymentDetails.getObject("shippingDetails");
        PaymentSdkShippingDetails shippingData = null;
        if(shippingDetails != null ) {
            shippingData = new PaymentSdkShippingDetails(
                    shippingDetails.getString("city"),
                    shippingDetails.getString("countryCode"),
                    shippingDetails.getString("email"),
                    shippingDetails.getString("name"),
                    shippingDetails.getString("phone"), shippingDetails.getString("state"),
                    shippingDetails.getString("addressLine"), shippingDetails.getString("zip")
            );
        }
        JSArray apmsJSONArray = paymentDetails.getArray("alternativePaymentMethods");
        ArrayList<PaymentSdkApms> apmsList = new ArrayList<PaymentSdkApms>();
        if (apmsJSONArray != null) {
            apmsList =  createAPMs(apmsJSONArray);
        }

        PaymentSdkConfigBuilder configData = new PaymentSdkConfigBuilder(
                profileId, serverKey, clientKey, amount, currency)
                .setCartDescription(cartDesc)
                .setBillingData(billingData)
                .setMerchantCountryCode(paymentDetails.getString("merchantCountryCode"))
                .setShippingData(shippingData)
                .setCartId(orderId)
                .setTokenisationData(token, transRef)
                .setScreenTitle(screenTitle)
                .setAlternativePaymentMethods(apmsList);

        if (paymentDetails.getBoolean("forceShippingInfo") != null) {
            configData.hideCardScanner(paymentDetails.getBoolean("forceShippingInfo"));
        }

        if (paymentDetails.getBoolean("showShippingInfo") != null) {
            configData.hideCardScanner(paymentDetails.getBoolean("showShippingInfo"));
        }

        if (paymentDetails.getBoolean("showBillingInfo") != null) {
            configData.hideCardScanner(paymentDetails.getBoolean("showBillingInfo"));
        }

        if (paymentDetails.getBoolean("hideCardScanner") != null) {
            configData.hideCardScanner(paymentDetails.getBoolean("hideCardScanner"));
        }

        if (paymentDetails.getString("transactionType") != null) {
            PaymentSdkTransactionType transactionType = createPaymentSdkTransactionType(paymentDetails.getString("transactionType"));
            configData.setTransactionType(transactionType);
        }

        if ((paymentDetails.getString("tokeniseType") != null) && (paymentDetails.getString("tokenFormat") != null) ) {
            PaymentSdkTokenise tokeniseType = createPaymentSdkTokenise(paymentDetails.getString("tokeniseType"));
            PaymentSdkTokenFormat tokenFormat = createPaymentSdkTokenFormat(paymentDetails.getString("tokenFormat"));
            configData.setTokenise(tokeniseType, tokenFormat);
        }

        if (paymentDetails.getString("languageCode") != null ){
            String langaugeCode = paymentDetails.getString("languageCode");
            PaymentSdkLanguageCode locale = createPaymentSdkLanguageCode(langaugeCode);
            configData.setLanguageCode(locale);
        }

        JSObject themeObjct = paymentDetails.getObject("theme");
        if  (!themeObjct.isNull("logoImage")) {
            String iconUri = themeObjct.optString("logoImage");
            Log.d("LogoImage", iconUri);
            configData.setMerchantIcon(iconUri);
        }

        return configData;
    }


    private ArrayList<PaymentSdkApms> createAPMs(JSONArray apmsJSONArray) {
        ArrayList<PaymentSdkApms> apmsList = new ArrayList<PaymentSdkApms>();
        for (int i = 0; i < apmsJSONArray.length(); i++) {
            String apmString = apmsJSONArray.optString(i);
            PaymentSdkApms apm = createPaymentSdkApms(apmString);
            apmsList.add(apm);
        }
        return apmsList;
    }
    void returnResponse(int code, String msg, String status, PaymentSdkTransactionDetails data, PluginCall pluginCall) {
        JSObject json = new JSObject();
        if (data != null) {
            String detailsString = new Gson().toJson(data);
            try {
                JSONObject transactionDetails = new JSONObject(detailsString);
                json.put("data", transactionDetails);
                json.put("code", code);
                json.put("message", msg);
                json.put("status", status);
                pluginCall.resolve(json);
                return;
            } catch (JSONException e) {
                json.put("data", null);
                pluginCall.reject(e.getLocalizedMessage());
                return;
            }
        }
        pluginCall.reject(msg);
    }

        public PaymentSDKQueryConfiguration createQueryConfiguration(PluginCall paymentDetails) throws JSONException {
        Log.d("Plugin Call", paymentDetails.getString("profileID"));
        String profileId = paymentDetails.getString("profileID");
        String serverKey = paymentDetails.getString("serverKey");
        String clientKey = paymentDetails.getString("clientKey");
        String transRef = paymentDetails.getString("transactionReference");
        String merchantCountryCode = paymentDetails.getString("merchantCountryCode");
        PaymentSDKQueryConfiguration configData = new PaymentSDKQueryConfiguration(
                serverKey, clientKey, merchantCountryCode, profileId, transRef);

        return configData;
    }

    
    void returnQueryResponse(int code, String msg, String status, TransactionResponseBody data, PluginCall pluginCall) {
        JSObject json = new JSObject();
        if (data != null) {
            String detailsString = new Gson().toJson(data);
            try {
                JSONObject transactionDetails = new JSONObject(detailsString);
                json.put("data", transactionDetails);
                json.put("code", code);
                json.put("message", msg);
                json.put("status", status);
                pluginCall.resolve(json);
                return;
            } catch (JSONException e) {
                json.put("data", null);
                pluginCall.reject(e.getLocalizedMessage());
                return;
            }
        }
        pluginCall.reject(msg);
    }


}
