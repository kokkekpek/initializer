import PromiseExecutor from './PromiseExecutor'

export default class PromisesExecutor {
    private readonly _items: PromiseExecutor[]

    public constructor() {
        this._items = []
    }

    public add(resolve: Function, reject?: Function): void {
        const item: PromiseExecutor = new PromiseExecutor(resolve, reject)
        this._items.push(item)
    }

    public resolve(): void {
        for (let i: number = 0; i < this._items.length; i++)
            this._items[i].resolve()
        this._items.length = 0
    }

    public reject(error: Error): void {
        for (let i: number = 0; i < this._items.length; i++)
            this._items[i].reject(error)
        this._items.length = 0
    }
}