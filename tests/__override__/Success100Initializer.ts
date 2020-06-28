import Initializer from '../../src/initializer/Initializer';

export default class Success100Initializer extends Initializer {
    private static readonly _TIMEOUT: number = 100

    protected _init(): void {
        setTimeout(() => {
            this._initResolve()
        }, Success100Initializer._TIMEOUT)
    }

    protected _clear(): void {
        setTimeout(() => {
            this._clearResolve()
        }, Success100Initializer._TIMEOUT)
    }
}