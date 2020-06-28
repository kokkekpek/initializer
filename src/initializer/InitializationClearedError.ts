export default class InitializationClearedError extends Error {
    public static readonly MESSAGE: string = 'INITIALIZATION CLEARED'

    public constructor() {
        super(InitializationClearedError.MESSAGE);
    }
}