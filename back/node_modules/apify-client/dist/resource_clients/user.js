"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlatformFeature = exports.UserClient = void 0;
const resource_client_1 = require("../base/resource_client");
class UserClient extends resource_client_1.ResourceClient {
    /**
     * @hidden
     */
    constructor(options) {
        super({
            resourcePath: 'users',
            ...options,
        });
    }
    /**
     * Depending on whether ApifyClient was created with a token,
     * the method will either return public or private user data.
     * https://docs.apify.com/api/v2#/reference/users
     */
    async get() {
        return this._get();
    }
}
exports.UserClient = UserClient;
var PlatformFeature;
(function (PlatformFeature) {
    PlatformFeature["Actors"] = "ACTORS";
    PlatformFeature["Storage"] = "STORAGE";
    PlatformFeature["ProxySERPS"] = "PROXY_SERPS";
    PlatformFeature["Scheduler"] = "SCHEDULER";
    PlatformFeature["Webhooks"] = "WEBHOOKS";
    PlatformFeature["Proxy"] = "PROXY";
    PlatformFeature["ProxyExternalAccess"] = "PROXY_EXTERNAL_ACCESS";
})(PlatformFeature || (exports.PlatformFeature = PlatformFeature = {}));
//# sourceMappingURL=user.js.map