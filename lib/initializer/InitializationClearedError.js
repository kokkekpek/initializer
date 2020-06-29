"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class InitializationClearedError extends Error {
    constructor() {
        super(InitializationClearedError.MESSAGE);
    }
}
exports.default = InitializationClearedError;
InitializationClearedError.MESSAGE = 'INITIALIZATION CLEARED';
