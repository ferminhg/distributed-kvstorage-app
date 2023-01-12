"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InMemoryDataRepository = void 0;
const Data_1 = require("../domain/Data");
class InMemoryDataRepository {
    constructor(data = {}) {
        this.data = data;
    }
    static from(data = {}) {
        return new InMemoryDataRepository(data);
    }
    static empty() {
        return new InMemoryDataRepository();
    }
    get(key) {
        return this.data;
    }
    set(key, value) {
        this.data = Data_1.Data.from(key, value);
    }
}
exports.InMemoryDataRepository = InMemoryDataRepository;
//# sourceMappingURL=InMemoryDataRepository.js.map