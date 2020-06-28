export default class PromiseExecutor {
    private readonly _resolve: Function
    private readonly _reject: Function | undefined
    private _executed: boolean = false

    public constructor(resolve: Function, reject?: Function) {
        this._resolve = resolve
        this._reject = reject
    }

    public resolve(): void {
        if (this._executed) return
        this._executed = true
        this._resolve()
    }

    public reject(error: Error): void {
        if (this._executed) return
        this._executed = true
        if (this._reject) this._reject(error)
    }
}