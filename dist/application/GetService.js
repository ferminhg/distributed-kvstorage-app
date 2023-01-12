"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetServiceFactory = exports.GetService = void 0;
const Data_1 = require("../domain/Data");
const InMemoryDataRepository_1 = require("../infra/InMemoryDataRepository");
const ServiceResponse_1 = require("./ServiceResponse");
class GetService {
    constructor(repository) {
        this.repository = repository;
    }
    run(key) {
        const data = this.repository.get(key);
        return ServiceResponse_1.ServiceResponse.fromData(data);
    }
}
exports.GetService = GetService;
class GetServiceFactory {
    static build() {
        return new GetService(InMemoryDataRepository_1.InMemoryDataRepository.from(Data_1.Data.from('1', '👽')));
    }
}
exports.GetServiceFactory = GetServiceFactory;
//# sourceMappingURL=GetService.js.map