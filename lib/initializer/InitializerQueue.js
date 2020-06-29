"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Initializer_1 = __importDefault(require("./Initializer"));
class InitializerQueue extends Initializer_1.default {
    constructor(initializers) {
        super();
        this._index = -1;
        this._initializers = initializers;
    }
    _init() {
        this._index = 0;
        this._initOne();
    }
    _initOne() {
        if (this._index >= this._initializers.length) {
            this._initResolve();
            return;
        }
        const initializer = this._initializers[this._index];
        initializer.init().then(() => {
            this._index++;
            this._initOne();
        }, (error) => this._initReject(error));
    }
    _clear() {
        this._index = this._initializers.length - 1;
        this._clearOne();
    }
    _clearOne() {
        if (this._index < 0) {
            this._clearResolve();
            return;
        }
        const initializer = this._initializers[this._index];
        initializer.clear().then(() => {
            this._index--;
            this._clearOne();
        });
    }
}
exports.default = InitializerQueue;
