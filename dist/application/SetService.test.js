"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Data_1 = require("../domain/Data");
const InMemoryDataRepository_1 = require("../infra/InMemoryDataRepository");
const ServiceResponse_1 = require("./ServiceResponse");
const SetService_1 = require("./SetService");
const repository = InMemoryDataRepository_1.InMemoryDataRepository.empty();
describe('SetService', function () {
    it('given valid key value return ok', function () {
        const service = new SetService_1.SetService(repository);
        const data = Data_1.Data.from('key', 'value');
        const result = service.run('key', 'value');
        expect(result).toBeInstanceOf(ServiceResponse_1.ServiceResponse);
        expect(result.success()).toBe(true);
    });
});
//# sourceMappingURL=SetService.test.js.map