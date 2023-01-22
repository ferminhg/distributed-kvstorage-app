import { Data } from "./Data";

export interface DataRepository {
    get(key: string): Data | undefined
    set(key: string, value: string): void
}
