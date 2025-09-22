package com.paytabs.ionic.plugin;

import android.util.Log;

import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;
import com.payment.paymentsdk.PaymentSdkActivity;
import com.payment.paymentsdk.QuerySdkActivity;
import com.payment.paymentsdk.integrationmodels.PaymentSdkConfigurationDetails;
import com.payment.paymentsdk.integrationmodels.PaymentSdkError;
import com.payment.paymentsdk.integrationmodels.PaymentSdkTransactionDetails;
import com.payment.paymentsdk.integrationmodels.PaymentSDKQueryConfiguration;
import com.payment.paymentsdk.sharedclasses.interfaces.CallbackPaymentInterface;
import com.payment.paymentsdk.sharedclasses.interfaces.CallbackQueryInterface;
import com.payment.paymentsdk.sharedclasses.model.response.TransactionResponseBody;

import org.jetbrains.annotations.NotNull;
import org.json.JSONException;

@CapacitorPlugin(name = "PayTabsIonic")
public class PayTabsIonicPlugin extends Plugin implements CallbackPaymentInterface, CallbackQueryInterface {

    private PayTabsIonic payTabsHelper = new PayTabsIonic();

    PluginCall call;
    @PluginMethod
    public void startCardPayment(PluginCall call) {
        this.call = call;
        try {
            PaymentSdkConfigurationDetails configData = payTabsHelper.createConfiguration(call).build();
            String samsungToken = call.getString("samsungToken");

            if (samsungToken != null && samsungToken.length() > 0)
                PaymentSdkActivity.startSamsungPayment(this.getActivity(), configData, samsungToken, this);
            else
                PaymentSdkActivity.startCardPayment(this.getActivity(), configData, this);
        } catch (JSONException e) {
            payTabsHelper.returnResponse(500,"unexpected JSON exception", "error", null, call);
        }

    }

    @PluginMethod
    public void startTokenizedCardPayment(PluginCall call) {
        Log.e("Plugin Call", call.getData().toString());
        this.call = call;
        try {
            PaymentSdkConfigurationDetails configData = payTabsHelper.createConfigurationFromInnerObject(call).build();
            String token = call.getString("token");
            String trxRef = call.getString("transactionReference");
            PaymentSdkActivity.startTokenizedCardPayment(this.getActivity(), configData, token, trxRef, this);
        } catch (JSONException e) {
            payTabsHelper.returnResponse(500,"unexpected JSON exception", "error", null, call);
        }

    }

    @PluginMethod
    public void start3DSecureTokenizedCardPayment(PluginCall call) {
        this.call = call;
        try {
            PaymentSdkConfigurationDetails configData = payTabsHelper.createConfigurationFromInnerObject(call).build();
            PaymentSdkActivity.startCardPayment(this.getActivity(), configData, this);
        } catch (JSONException e) {
            payTabsHelper.returnResponse(500,"unexpected JSON exception", "error", null, call);
        }

    }


    @PluginMethod
    public void startAlternativePaymentMethod(PluginCall call) {
        this.call = call;

        try {
            PaymentSdkConfigurationDetails configData = payTabsHelper.createConfiguration(call).build();
            PaymentSdkActivity.startAlternativePaymentMethods(this.getActivity(), configData, this);
        } catch (JSONException e) {
            payTabsHelper.returnResponse(500,"unexpected JSON exception", "error", null, call);
        }
    }


    
    @PluginMethod
    public void queryTransaction(PluginCall call) {
        this.call = call;
        try {
            PaymentSDKQueryConfiguration configData = payTabsHelper.createQueryConfiguration(call);
            QuerySdkActivity.queryTransaction(this.getActivity(), configData, this);
        } catch (JSONException e) {
            payTabsHelper.returnResponse(500,"unexpected JSON exception", "error", null, call);
        }

    }

    @Override
    public void onError(@NotNull PaymentSdkError err) {
        if (err.getCode() != null)
            payTabsHelper.returnResponse(err.getCode(), err.getMsg(), "error",null, call);
        else
            payTabsHelper.returnResponse(0, err.getMsg(), "error", null, call);
    }

    
    @Override 
    public void onCancel() {
        payTabsHelper.returnQueryResponse(0, "Cancelled", "event", null, call);
    }

    @Override 
    public void onResult(TransactionResponseBody transactionResponseBody) {
        payTabsHelper.returnQueryResponse(200, "success", "success", transactionResponseBody, call);
    }

    @PluginMethod
    public void startApplePayPayment(PluginCall call) {
        call.unimplemented("Not implemented on Android");
    }

    @Override
    public void onPaymentFinish(@NotNull PaymentSdkTransactionDetails paymentSdkTransactionDetails) {
        payTabsHelper.returnResponse(200, "success", "success", paymentSdkTransactionDetails, call);
    }

    @Override
    public void onPaymentCancel() {
        payTabsHelper.returnResponse(0, "Cancelled", "event", null, call);
    }
}
