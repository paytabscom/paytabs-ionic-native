package com.paytabs.ionic.native.plugin;

import com.getcapacitor.JSObject;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;

@CapacitorPlugin(name = "PayTabsIonic")
public class PayTabsIonicPlugin extends Plugin implements CallbackPaymentInterface {

    private PayTabsIonic implementation = new PayTabsIonic();
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
    public void startAlternativePaymentMethod(PluginCall call) {
        this.call = call;

        try {
            PaymentSdkConfigurationDetails configData = payTabsHelper.createConfiguration(call).build();
            PaymentSdkActivity.startAlternativePaymentMethods(this.getActivity(), configData, this);
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
