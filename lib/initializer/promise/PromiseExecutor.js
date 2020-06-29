"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PromiseExecutor {
    constructor(resolve, reject) {
        this._executed = false;
        this._resolve = resolve;
        this._reject = reject;
    }
    resolve() {
        if (this._executed)
            return;
        this._executed = true;
        this._resolve();
    }
    reject(error) {
        if (this._executed)
            return;
        this._executed = true;
        if (this._reject)
            this._reject(error);
    }
}
exports.default = PromiseExecutor;
