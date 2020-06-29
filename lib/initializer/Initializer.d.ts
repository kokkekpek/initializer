import InitializerInterface from './InitializerInterface';
export default abstract class Initializer implements InitializerInterface {
    private _initialized;
    private _initializationInProgress;
    private _clearingInProgress;
    private _initializationExecutors;
    private _clearExecutors;
    init(): Promise<void | Error>;
    clear(): Promise<void | Error>;
    /***********************
     * Must be overwritten *
     ***********************/
    protected _init(): void;
    /************************
     * Must call from child *
     ************************/
    protected _initResolve(): void;
    /************************
     * Must call from child *
     ************************/
    protected _initReject(error: Error): void;
    /***********************
     * Must be overwritten *
     ***********************/
    protected _clear(): void;
    /************************
     * Must call from child *
     ************************/
    protected _clearResolve(): void;
}
