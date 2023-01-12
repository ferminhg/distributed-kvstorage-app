import { Data } from '../domain/Data'
import { DataRepository } from '../domain/DataRepository'
import { InMemoryDataRepository } from '../infra/InMemoryDataRepository'
import { ServiceResponse } from './ServiceResponse'
import { SetService } from './SetService'


const repository = InMemoryDataRepository.empty()

describe('SetService', function () {
	it('given valid key value return ok', function () {
		const service = new SetService(repository)
		const data = Data.from('key', 'value')

		const result = service.run('key', 'value')
		expect(result).toBeInstanceOf(ServiceResponse)
		expect(result.success()).toBe(true)
	})
})
