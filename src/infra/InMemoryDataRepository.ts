import { Data } from "../domain/Data"
import { DataRepository } from "../domain/DataRepository"

export class InMemoryDataRepository implements DataRepository {
    private data: Data
    private key: string | undefined
    constructor(data: any = {}) {
        if (data.key !== undefined) {
            this.key = data.key
        }
        this.data = data
    }

    public static from(data: any = {}): InMemoryDataRepository {
        return new InMemoryDataRepository(data)
    }

    public static empty(): InMemoryDataRepository {
        return new InMemoryDataRepository()
    }

    public get(key: string): Data | undefined {
        if (this.key !== key) {
            return undefined
        }
        return this.data
    }
    public set(key: string, value: string): void {
        this.key = key
        this.data = Data.from(key, value)
    }
}
