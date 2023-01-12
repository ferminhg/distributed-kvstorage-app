import { Data } from "../domain/Data";

export class ServiceResponse {
    public static readonly STATUS_OK = 'ok';
    data!: Data

    constructor(public status: string, data: Data | undefined) {
        if (data) {
            this.data = data
        }
    }

    public static ok(): ServiceResponse {
        return new ServiceResponse(this.STATUS_OK, undefined)
    }

    public static fromData(data: Data): ServiceResponse {
        let response = new ServiceResponse(this.STATUS_OK, data)
        return response
    }

    public success(): boolean {
        return this.status === ServiceResponse.STATUS_OK
    }
}
