import PromisesExecutor from './promise/PromisesExecutor'
import InitializationClearedError from './InitializationClearedError'
import InitializerInterface from './InitializerInterface'

export default abstract class Initializer implements InitializerInterface {
    private _initialized: boolean = false
    private _initializationInProgress: boolean = false
    private _clearingInProgress: boolean = false
    private _initializationExecutors: PromisesExecutor = new PromisesExecutor()
    private _clearExecutors: PromisesExecutor = new PromisesExecutor()

    public init():Promise<void | Error> {
        return new Promise((resolve: Function, reject: Function) => {
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
        })
    }

    public clear():Promise<void | Error> {
        return new Promise((resolve: Function, reject: Function) => {
            this._clearExecutors.add(resolve, reject)
            if (this._clearingInProgress) return
            this._clearingInProgress = true
            this._initReject(new InitializationClearedError())
            this._clear()
        })
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