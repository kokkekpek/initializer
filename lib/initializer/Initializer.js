"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const PromisesExecutor_1 = __importDefault(require("./promise/PromisesExecutor"));
const InitializationClearedError_1 = __importDefault(require("./InitializationClearedError"));
class Initializer {
    constructor() {
        this._initialized = false;
        this._initializationInProgress = false;
        this._clearingInProgress = false;
        this._initializationExecutors = new PromisesExecutor_1.default();
        this._clearExecutors = new PromisesExecutor_1.default();
    }
    init() {
        return new Promise((resolve, reject) => {
            if (this._initialized) {
                resolve();
                return;
            }
            if (this._clearingInProgress) {
                reject();
                return;
            }
            this._initializationExecutors.add(resolve, reject);
            if (this._initializationInProgress)
                return;
            this._initializationInProgress = true;
            this._init();
        });
    }
    clear() {
        return new Promise((resolve, reject) => {
            this._clearExecutors.add(resolve, reject);
            if (this._clearingInProgress)
                return;
            this._clearingInProgress = true;
            this._initReject(new InitializationClearedError_1.default());
            this._clear();
        });
    }
    /***********************
     * Must be overwritten *
     ***********************/
    _init() { }
    /************************
     * Must call from child *
     ************************/
    _initResolve() {
        this._initialized = true;
        this._initializationInProgress = false;
        this._initializationExecutors.resolve();
    }
    /************************
     * Must call from child *
     ************************/
    _initReject(error) {
        this._initialized = false;
        this._initializationInProgress = false;
        this._initializationExecutors.reject(error);
    }
    /***********************
     * Must be overwritten *
     ***********************/
    _clear() { }
    /************************
     * Must call from child *
     ************************/
    _clearResolve() {
        this._clearingInProgress = false;
        this._clearExecutors.resolve();
    }
}
exports.default = Initializer;
