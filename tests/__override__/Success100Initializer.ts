import Abstract100Initializer from './abstract/Abstract100Initializer'

export default class Success100Initializer extends Abstract100Initializer {
    protected _initResult(): void {
        this._success = true
        this._initResolve()
    }

    protected _clearResult(): void {
        this._success = false
        this._clearResolve()
    }
}