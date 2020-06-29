export default class PromisesExecutor {
    private readonly _items;
    constructor();
    add(resolve: Function, reject?: Function): void;
    resolve(): void;
    reject(error: Error): void;
}
