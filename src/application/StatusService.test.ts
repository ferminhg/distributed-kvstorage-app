import { StatusService } from './StatusService'
describe('StatusService', () => {
	test('run', () => {
		const statusService = new StatusService()
		expect(statusService.run()).toBe('ok')
	})
})
