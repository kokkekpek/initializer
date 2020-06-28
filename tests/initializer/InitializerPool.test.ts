import Success100Initializer from '../__override__/Success100Initializer'
import InitializerInterface from '../../src/initializer/InitializerInterface'
import InitializerPool from '../../src/initializer/InitializerPool'
import Fail100Initializer from '../__override__/Fail100Initializer'
import InitializationClearedError from '../../src/initializer/InitializationClearedError'

it('init', done => {
    expect.assertions(1)
    const initializer1: InitializerInterface = new Success100Initializer()
    const initializer2: InitializerInterface = new Success100Initializer()
    const queue: InitializerInterface = new InitializerPool([
        initializer1,
        initializer2
    ])
    queue.init().then(() => expect(true).toBeTruthy())
    setTimeout(done, 500)
})

it('init success', done => {
    expect.assertions(2)
    const initializer1: Success100Initializer = new Success100Initializer()
    const initializer2: Success100Initializer = new Success100Initializer()
    const queue: InitializerInterface = new InitializerPool([
        initializer1,
        initializer2
    ])
    queue.init().then(() => {
        expect(initializer1.success).toBeTruthy()
        expect(initializer2.success).toBeTruthy()
    })
    setTimeout(done, 500)
})

it('init clear', done => {
    expect.assertions(4)
    const initializer1: Success100Initializer = new Success100Initializer()
    const initializer2: Success100Initializer = new Success100Initializer()
    const queue: InitializerInterface = new InitializerPool([
        initializer1,
        initializer2
    ])
    queue.init().then(
        () => {},
        (error: Error) => {
            expect(!initializer1.success).toBeTruthy()
            expect(!initializer2.success).toBeTruthy()
            expect(error.message).toBe(InitializationClearedError.MESSAGE)
        }
    )
    queue.clear().then(() => expect(true).toBeTruthy())
    setTimeout(done, 500)
})

it('init fail', done => {
    expect.assertions(3)
    const initializer1: Success100Initializer = new Success100Initializer()
    const initializer2: Fail100Initializer = new Fail100Initializer()
    const queue: InitializerInterface = new InitializerPool([
        initializer1,
        initializer2
    ])
    queue.init().then(
        () => {},
        (error: Error) => {
            expect(initializer1.success).toBeTruthy()
            expect(!initializer2.success).toBeTruthy()
            expect(error.message).toBe(Fail100Initializer.ERROR_MESSAGE)
        }
    )
    setTimeout(done, 500)
})