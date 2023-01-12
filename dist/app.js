"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const StatusService_1 = require("./application/StatusService");
const SetService_1 = require("./application/SetService");
const GetService_1 = require("./application/GetService");
const app = (0, express_1.default)();
const PORT = 3000;
app.get('/health', (req, res) => {
    const service = new StatusService_1.StatusService();
    res.send(service.run());
});
app.post('/set', (req, res) => {
    const { key, value } = req.query;
    const service = SetService_1.SetServiceFactory.build();
    res.send(service.run(key, value));
});
app.get('/get', (req, res) => {
    const { key } = req.query;
    const service = GetService_1.GetServiceFactory.build();
    res.send(service.run(key));
});
app.listen(PORT, () => {
    return console.log(`👾 listening at http://localhost:${PORT}`);
});
//# sourceMappingURL=app.js.map