"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const SetService_1 = require("./SetService");
describe('SetService', function () {
    it('given valid key value return ok', function () {
        const service = new SetService_1.SetService();
        const result = service.run('key', 'value');
        expect(result).toBeInstanceOf(SetService_1.ServiceResponse);
    });
});
//# sourceMappingURL=SetService.test.js.map