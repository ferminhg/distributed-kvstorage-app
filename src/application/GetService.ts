import { Data } from "../domain/Data"
import { DataRepository } from "../domain/DataRepository"
import { InMemoryDataRepository } from "../infra/InMemoryDataRepository"
import { ServiceResponse } from "./ServiceResponse"

export class GetService {
    private repository: DataRepository
    constructor(repository: DataRepository) {
        this.repository = repository
    }
    public run(key: string): ServiceResponse {
        const data = this.repository.get(key)
        return ServiceResponse.fromData(data)
    }
}

export class GetServiceFactory {
    public static build(): GetService {
        return new GetService(InMemoryDataRepository.from(Data.from('1', '👽')))
    }
}