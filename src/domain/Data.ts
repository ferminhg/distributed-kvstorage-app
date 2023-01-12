export class Data {
    constructor(public key: string, public value: string) {
        this.key = key
        this.value = value
    }

    public static from(key: string, value: string): Data {
        return new Data(key, value)
    }

    public static empty(): Data {
        return new Data('', '')
    }
}
