export default class PromiseExecutor {
    private readonly _resolve;
    private readonly _reject;
    private _executed;
    constructor(resolve: Function, reject?: Function);
    resolve(): void;
    reject(error: Error): void;
}
