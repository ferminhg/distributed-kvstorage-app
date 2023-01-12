import { Data } from "./Data";

export interface DataRepository {
    get(key: string): Data
    set(key: string, value: string): void
}
