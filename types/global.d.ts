declare global {
  interface Window {
    callBridge: any;
    setupWebViewJavascriptBridge: any;
    WebViewJavascriptBridge: any;
    WVJBCallbacks: any;
    registBridge: any;
  }
}

export {};
