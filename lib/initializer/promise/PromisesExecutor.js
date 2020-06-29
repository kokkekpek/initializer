"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const PromiseExecutor_1 = __importDefault(require("./PromiseExecutor"));
class PromisesExecutor {
    constructor() {
        this._items = [];
    }
    add(resolve, reject) {
        const item = new PromiseExecutor_1.default(resolve, reject);
        this._items.push(item);
    }
    resolve() {
        for (let i = 0; i < this._items.length; i++)
            this._items[i].resolve();
        this._items.length = 0;
    }
    reject(error) {
        for (let i = 0; i < this._items.length; i++)
            this._items[i].reject(error);
        this._items.length = 0;
    }
}
exports.default = PromisesExecutor;
