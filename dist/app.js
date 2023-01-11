"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const StatusService_1 = require("./application/StatusService");
const SetService_1 = require("./application/SetService");
const app = (0, express_1.default)();
const PORT = 3000;
app.get('/', (req, res) => {
    const service = new StatusService_1.StatusService();
    res.send(service.run());
});
app.post('/set', (req, res) => {
    const { key, value } = req.query;
    const service = new SetService_1.SetService();
    res.send(service.run(key, value));
});
app.listen(PORT, () => {
    return console.log(`👾 listening at http://localhost:${PORT}`);
});
//# sourceMappingURL=app.js.map