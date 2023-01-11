export class SetService {
	public run(key: string, value: string): ServiceResponse {
		return new ServiceResponse('ok', '')
		// return `Set ${key} to ${value}`
	}
}

export class ServiceResponse {
	constructor(public status: string, public message: string) {
		this.status = status
		this.message = message
	}
}
