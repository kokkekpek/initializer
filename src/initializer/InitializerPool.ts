import Initializer from './Initializer'
import InitializerInterface from './InitializerInterface'

export default class InitializerPool extends Initializer {
    private readonly _initializers: InitializerInterface[]
    private _count: number

    public constructor(initializers: InitializerInterface[]) {
        super()
        this._count = 0
        this._initializers = initializers
    }

    protected _init(): void {
        this._count = 0
        for (let i: number = 0; i < this._initializers.length; i++) {
            const initializer: InitializerInterface = this._initializers[i]
            initializer.init().then(
                () => {
                    this._count++
                    if (this._count == this._initializers.length)
                        this._initResolve()
                },
                (error: Error) => this._initReject(error)
            )
        }
    }

    protected _clear(): void {
        let count: number = 0
        for (let i: number = 0; i < this._initializers.length; i++) {
            const initializer: InitializerInterface = this._initializers[i]
            initializer.clear().then(() => {
                count++
                if (count == this._initializers.length)
                    this._clearResolve()
            })
        }
    }
}