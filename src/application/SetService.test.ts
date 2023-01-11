import { ServiceResponse, SetService } from './SetService'

describe('SetService', function () {
	it('given valid key value return ok', function () {
		const service = new SetService()
		const result = service.run('key', 'value')
		expect(result).toBeInstanceOf(ServiceResponse)
	})
})
