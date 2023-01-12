"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Data = void 0;
class Data {
    constructor(key, value) {
        this.key = key;
        this.value = value;
        this.key = key;
        this.value = value;
    }
    static from(key, value) {
        return new Data(key, value);
    }
    static empty() {
        return new Data('', '');
    }
}
exports.Data = Data;
//# sourceMappingURL=Data.js.map