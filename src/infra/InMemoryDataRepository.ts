import { Data } from "../domain/Data"
import { DataRepository } from "../domain/DataRepository"

export class InMemoryDataRepository implements DataRepository {
    private data: Data
    constructor(data: any = {}) {
        this.data = data
    }

    public static from(data: any = {}): InMemoryDataRepository {
        return new InMemoryDataRepository(data)
    }

    public static empty(): InMemoryDataRepository {
        return new InMemoryDataRepository()
    }

    public get(key: string): Data {
        return this.data
    }
    public set(key: string, value: string): void {
        this.data = Data.from(key, value)
    }
}
