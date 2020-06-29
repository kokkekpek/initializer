import Initializer from './Initializer';
import InitializerInterface from './InitializerInterface';
export default class InitializerQueue extends Initializer {
    private readonly _initializers;
    private _index;
    constructor(initializers: InitializerInterface[]);
    protected _init(): void;
    private _initOne;
    protected _clear(): void;
    private _clearOne;
}
