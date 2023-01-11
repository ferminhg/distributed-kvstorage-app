"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceResponse = exports.SetService = void 0;
class SetService {
    run(key, value) {
        return new ServiceResponse('ok', '');
        // return `Set ${key} to ${value}`
    }
}
exports.SetService = SetService;
class ServiceResponse {
    constructor(status, message) {
        this.status = status;
        this.message = message;
        this.status = status;
        this.message = message;
    }
}
exports.ServiceResponse = ServiceResponse;
//# sourceMappingURL=SetService.js.map