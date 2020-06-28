import Abstract100Initializer from './abstract/Abstract100Initializer'

export default class Fail100Initializer extends Abstract100Initializer {
    public static readonly ERROR_MESSAGE: string = 'Success100Initializer fail'

    protected _initResult(): void {
        this._success = false
        this._initReject(new Error(Fail100Initializer.ERROR_MESSAGE))
    }

    protected _clearResult(): void {
        this._success = false
        this._clearResolve()
    }
}