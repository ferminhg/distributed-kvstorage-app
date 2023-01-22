import { Data } from "../domain/Data";

export class ServiceResponse {
    public static readonly STATUS_OK = 'ok';
    public static readonly STATUS_KO = 'ko';

    constructor(public status: string, public data: Data) {
    }

    public static ok(): ServiceResponse {
        return new ServiceResponse(this.STATUS_OK, Data.empty())
    }

    public static fromData(data: Data): ServiceResponse {
        return  new ServiceResponse(this.STATUS_OK, data)
    }

    public static fromError(): ServiceResponse {
        return new ServiceResponse(this.STATUS_KO, Data.empty())
    }

    public success(): boolean {
        return this.status === ServiceResponse.STATUS_OK
    }
}
