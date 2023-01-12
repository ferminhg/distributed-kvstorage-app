"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SetServiceFactory = exports.SetService = void 0;
const InMemoryDataRepository_1 = require("../infra/InMemoryDataRepository");
const ServiceResponse_1 = require("./ServiceResponse");
class SetService {
    constructor(repository) {
        this.repository = repository;
    }
    run(key, data) {
        this.repository.set(key, data);
        return ServiceResponse_1.ServiceResponse.ok();
    }
}
exports.SetService = SetService;
class SetServiceFactory {
    static build() {
        return new SetService(InMemoryDataRepository_1.InMemoryDataRepository.empty());
    }
}
exports.SetServiceFactory = SetServiceFactory;
//# sourceMappingURL=SetService.js.map