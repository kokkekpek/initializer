import Initializer from '../../src/initializer/Initializer';

export default class Success100Initializer extends Initializer {
    public static readonly ERROR_MESSAGE: string = 'Success100Initializer fail'

    private static readonly _TIMEOUT: number = 100

    protected _init(): void {
        setTimeout(() => {
            this._initReject(new Error(Success100Initializer.ERROR_MESSAGE))
        }, Success100Initializer._TIMEOUT)
    }

    protected _clear(): void {
        setTimeout(() => {
            this._clearResolve()
        }, Success100Initializer._TIMEOUT)
    }
}