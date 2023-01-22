import { Data } from "../domain/Data"
import { InMemoryDataRepository } from "../infra/InMemoryDataRepository"
import { GetService } from "./GetService"
import { ServiceResponse } from "./ServiceResponse"

describe('GetService', function () {
    it('given valid key return value', function () {
        const repository = InMemoryDataRepository.empty()
        const service = new GetService(repository)
        const data = Data.from('key', 'value')
        repository.set(data.key, data.value)

        const result = service.run(data.key)
        expect(result).toBeInstanceOf(ServiceResponse)
        expect(result.success()).toBe(true)
    })

    it('given invalid key return empty value', function () {
        const repository = InMemoryDataRepository.empty()
        const service = new GetService(repository)
        const result = service.run('not-found-key')
        expect(result).toBeInstanceOf(ServiceResponse)
        expect(result.success()).toBe(false)
    })
})
