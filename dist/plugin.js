var capacitorPayTabsIonic = (function (exports, core) {
    'use strict';

    const PayTabsIonic = core.registerPlugin('PayTabsIonic', {
        web: () => Promise.resolve().then(function () { return web; }).then(m => new m.PayTabsIonicWeb()),
    });

    class PayTabsIonicWeb extends core.WebPlugin {
        async echo(options) {
            console.log('ECHO', options);
            return options;
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
