"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Initializer_1 = __importDefault(require("./Initializer"));
class InitializerPool extends Initializer_1.default {
    constructor(initializers) {
        super();
        this._count = 0;
        this._initializers = initializers;
    }
    _init() {
        this._count = 0;
        for (let i = 0; i < this._initializers.length; i++) {
            const initializer = this._initializers[i];
            initializer.init().then(() => {
                this._count++;
                if (this._count == this._initializers.length)
                    this._initResolve();
            }, (error) => this._initReject(error));
        }
    }
    _clear() {
        let count = 0;
        for (let i = 0; i < this._initializers.length; i++) {
            const initializer = this._initializers[i];
            initializer.clear().then(() => {
                count++;
                if (count == this._initializers.length)
                    this._clearResolve();
            });
        }
    }
}
exports.default = InitializerPool;
