"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const StatusService_1 = require("./StatusService");
const app = (0, express_1.default)();
const port = 3000;
app.get('/', (req, res) => {
    const service = new StatusService_1.StatusService();
    res.send(service.run());
});
app.listen(port, () => {
    return console.log(`👾 listening at http://localhost:${port}`);
});
//# sourceMappingURL=app.js.map