import Initializer from './Initializer'
import InitializerInterface from './InitializerInterface'

export default class InitializerQueue extends Initializer {
    private readonly _initializers: InitializerInterface[]
    private _index: number

    public constructor(initializers: InitializerInterface[]) {
        super()
        this._index = -1
        this._initializers = initializers
    }

    protected _init(): void {
        this._index = 0
        this._initOne()
    }

    private _initOne(): void {
        if (this._index >= this._initializers.length) {
            this._initResolve()
            return
        }

        const initializer: InitializerInterface = this._initializers[this._index]
        initializer.init().then(
            () => {
                this._index++
                this._initOne()
            },
            (error: Error) => this._initReject(error)
        )
    }

    protected _clear(): void {
        this._index = this._initializers.length - 1
        this._clearOne()
    }

    private _clearOne(): void {
        if (this._index < 0) {
            this._clearResolve()
            return
        }

        const initializer: InitializerInterface = this._initializers[this._index]
        initializer.clear().then(() => {
            this._index--
            this._clearOne()
        })
    }
}