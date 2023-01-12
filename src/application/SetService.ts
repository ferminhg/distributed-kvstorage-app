import { Data } from "../domain/Data"
import { DataRepository } from "../domain/DataRepository"
import { InMemoryDataRepository } from "../infra/InMemoryDataRepository"
import { ServiceResponse } from "./ServiceResponse"

export class SetService {
    private repository: DataRepository
	constructor(repository: DataRepository) {
		this.repository = repository
	}
	public run(key: string, data: string): ServiceResponse {
		this.repository.set(key, data)
		return ServiceResponse.ok()
	}
}

export class SetServiceFactory {
	public static build(): SetService {
		return new SetService(InMemoryDataRepository.empty())
	}
}
