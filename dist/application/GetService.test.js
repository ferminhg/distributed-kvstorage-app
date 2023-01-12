"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Data_1 = require("../domain/Data");
const InMemoryDataRepository_1 = require("../infra/InMemoryDataRepository");
const GetService_1 = require("./GetService");
const ServiceResponse_1 = require("./ServiceResponse");
const repository = InMemoryDataRepository_1.InMemoryDataRepository.empty();
describe('GetService', function () {
    it('given valid key return value', function () {
        const service = new GetService_1.GetService(repository);
        const data = Data_1.Data.from('key', 'value');
        repository.set(data.key, data.value);
        const result = service.run(data.key);
        expect(result).toBeInstanceOf(ServiceResponse_1.ServiceResponse);
        expect(result.success()).toBe(true);
    });
});
//# sourceMappingURL=GetService.test.js.map