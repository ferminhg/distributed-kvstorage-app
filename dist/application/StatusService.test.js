"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const StatusService_1 = require("./StatusService");
describe('StatusService', () => {
    test('run', () => {
        const statusService = new StatusService_1.StatusService();
        expect(statusService.run()).toBe('ok');
    });
});
//# sourceMappingURL=StatusService.test.js.map