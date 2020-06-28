import Initializer from '../../../src/initializer/Initializer'

export default abstract class Abstract100Initializer extends Initializer {
    private static readonly _TIMEOUT: number = 100
    protected _success: boolean = false

    protected _init(): void {
        setTimeout(() => {
            this._initResult()
        }, Abstract100Initializer._TIMEOUT)
    }

    protected _clear(): void {
        setTimeout(() => {
            this._clearResult()
        }, Abstract100Initializer._TIMEOUT)
    }

    public get success(): boolean {
        return this._success
    }

    /***********************
     * Must be overwritten *
     ***********************/
    protected _initResult(): void {}

    /***********************
     * Must be overwritten *
     ***********************/
    protected _clearResult(): void {}
}