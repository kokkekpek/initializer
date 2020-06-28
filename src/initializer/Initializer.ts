import PromisesExecutor from './promise/PromisesExecutor'
import InitializationClearedError from './InitializationClearedError'

export default abstract class Initializer {
    private _initialized: boolean = false
    private _initializationInProgress: boolean = false
    private _clearingInProgress: boolean = false
    private _initializationExecutors: PromisesExecutor = new PromisesExecutor()
    private _clearExecutors: PromisesExecutor = new PromisesExecutor()

    public init():Promise<void | Error> {
        return new Promise(this._initPromise.bind(this))
    }

    private _initPromise(resolve: Function, reject: Function): void {
        if (this._initialized) {
            resolve()
            return
        }
        if (this._clearingInProgress) {
            reject()
            return
        }
        this._initializationExecutors.add(resolve, reject)
        if (this._initializationInProgress) return
        this._initializationInProgress = true
        this._init()
    }

    /***********************
     * Must be overwritten *
     ***********************/
    protected _init(): void {}

    /************************
     * Must call from child *
     ************************/
    protected _initResolve(): void {
        this._initialized = true
        this._initializationInProgress = false
        this._initializationExecutors.resolve()
    }

    /************************
     * Must call from child *
     ************************/
    protected _initReject(error: Error): void {
        this._initialized = false
        this._initializationInProgress = false
        this._initializationExecutors.reject(error)
    }

    public clear():Promise<void | Error> {
        return new Promise(this._clearPromise.bind(this))
    }

    private _clearPromise(resolve: Function, reject: Function): void {
        this._clearExecutors.add(resolve, reject)
        if (this._clearingInProgress) return
        this._clearingInProgress = true
        this._initReject(new InitializationClearedError())
        this._clear()
    }

    /***********************
     * Must be overwritten *
     ***********************/
    protected _clear(): void {}

    /************************
     * Must call from child *
     ************************/
    protected _clearResolve(): void {
        this._clearingInProgress = false
        this._clearExecutors.resolve()
    }
}