import { Data } from "../domain/Data"
import { InMemoryDataRepository } from "../infra/InMemoryDataRepository"
import { GetService } from "./GetService"
import { ServiceResponse } from "./ServiceResponse"

const repository = InMemoryDataRepository.empty()
describe('GetService', function () {
    it('given valid key return value', function () {
        const service = new GetService(repository)
        const data = Data.from('key', 'value')
        repository.set(data.key, data.value)

        const result = service.run(data.key)
        expect(result).toBeInstanceOf(ServiceResponse)
        expect(result.success()).toBe(true)
    })
})
