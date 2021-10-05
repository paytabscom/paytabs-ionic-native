import Foundation
import Capacitor
import PaymentSDK

/**
 * Please read the Capacitor iOS Plugin Development Guide
 * here: https://capacitorjs.com/docs/plugins/ios
 */
@objc(PayTabsIonicPlugin)
public class PayTabsIonicPlugin: CAPPlugin {
    private let paytabsHelper = PayTabsIonic()
    private var call: CAPPluginCall!
    
    private lazy var topViewController: UIViewController? = {
        let keyWindow = UIApplication.shared.windows.first(where: { $0.isKeyWindow }) ?? UIApplication.shared.windows.first
        let topController = keyWindow?.rootViewController
        return topController
    }()
    
    @objc func startCardPayment(_ call: CAPPluginCall) {
        self.call = call
        print("start payment card",call.dictionaryRepresentation)
        guard let paymentDetails = call.dictionaryRepresentation as? [String: Any] else { return }
        print("Payment Details",paymentDetails)
        let configuration = paytabsHelper.generateConfiguration(dictionary: paymentDetails)
        DispatchQueue.main.async {
            if let rootViewController = self.topViewController {
                PaymentManager.startCardPayment(on: rootViewController, configuration: configuration, delegate: self)
            }
        }
    }
    
    @objc func startApplePayPayment(_ call: CAPPluginCall) {
        self.call = call
        guard let paymentDetails = call.dictionaryRepresentation as? [String: Any] else { return }
        let configuration = paytabsHelper.generateConfiguration(dictionary: paymentDetails)
        DispatchQueue.main.async {
            if let rootViewController = self.topViewController {
                PaymentManager.startApplePayPayment(on: rootViewController, configuration: configuration, delegate: self)
            }
        }
    }
    
    @objc func startAlternativePaymentMethod(_ call: CAPPluginCall) {
        self.call = call
        guard let paymentDetails = call.dictionaryRepresentation as? [String: Any] else { return }
        let configuration = paytabsHelper.generateConfiguration(dictionary: paymentDetails)
        DispatchQueue.main.async {
            if let rootViewController = self.topViewController {
                PaymentManager.startAlternativePaymentMethod(on: rootViewController, configuration: configuration, delegate: self)
            }
        }
    }
    
    private func sendPluginResult(code: Int, message: String, status: String, transactionDetails: [String: Any]? = nil) -> [String: Any] {
        var response = [String: Any]()
        response["code"] = code
        response["message"] = message
        response["status"] = status
        if let transactionDetails = transactionDetails {
            response["data"] = transactionDetails
        }
        
        return response
    }
}

extension PayTabsPlugin: PaymentManagerDelegate {
    public func paymentManager(didCancelPayment error: Error?) {
        let result = sendPluginResult(code: 0, message: "Cancelled", status: "event")
        call.resolve(result)
    }
    
    public func paymentManager(didFinishTransaction transactionDetails: PaymentSDKTransactionDetails?, error: Error?) {
        if let error = error {
            
            call.reject(error.localizedDescription, "\((error as NSError).code)", error)
            return
        }
        do {
            let encoder = JSONEncoder()
            let data = try encoder.encode(transactionDetails)
            let dictionary = try JSONSerialization.jsonObject(with: data, options: .allowFragments) as? [String: Any]
            let result = sendPluginResult(code: 200,
                                          message: "",
                                          status: "success",
                                          transactionDetails: dictionary)
            
            call.resolve(result)
        } catch  {
            call.reject(error.localizedDescription, "\((error as NSError).code)", error)
        }
    }
}