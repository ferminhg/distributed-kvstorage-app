"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceResponse = void 0;
class ServiceResponse {
    constructor(status, data) {
        this.status = status;
        if (data) {
            this.data = data;
        }
    }
    static ok() {
        return new ServiceResponse(this.STATUS_OK, undefined);
    }
    static fromData(data) {
        let response = new ServiceResponse(this.STATUS_OK, data);
        return response;
    }
    success() {
        return this.status === ServiceResponse.STATUS_OK;
    }
}
exports.ServiceResponse = ServiceResponse;
ServiceResponse.STATUS_OK = 'ok';
//# sourceMappingURL=ServiceResponse.js.map