import Initializer from './Initializer';
import InitializerInterface from './InitializerInterface';
export default class InitializerPool extends Initializer {
    private readonly _initializers;
    private _count;
    constructor(initializers: InitializerInterface[]);
    protected _init(): void;
    protected _clear(): void;
}
