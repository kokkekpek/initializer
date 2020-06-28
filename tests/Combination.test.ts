import Success100Initializer from './__override__/Success100Initializer'
import InitializerInterface from '../src/initializer/InitializerInterface'
import InitializerQueue from '../src/initializer/InitializerQueue'
import InitializerPool from '../src/initializer/InitializerPool'

it('InitializerQueue', done => {
    const initializer1: InitializerInterface = new Success100Initializer()
    const initializer2: InitializerInterface = new Success100Initializer()
    const initializer3: InitializerInterface = new Success100Initializer()
    const queue: InitializerInterface = new InitializerQueue([
        initializer1,
        initializer2,
        initializer3
    ])
    queue.init().then(() => {
        expect(true).toBeTruthy()
        done()
    })
}, 400)

it('InitializerPool', done => {
    const initializer1: InitializerInterface = new Success100Initializer()
    const initializer2: InitializerInterface = new Success100Initializer()
    const initializer3: InitializerInterface = new Success100Initializer()
    const pool: InitializerInterface = new InitializerPool([
        initializer1,
        initializer2,
        initializer3
    ])
    pool.init().then(() => {
        expect(true).toBeTruthy()
        done()
    })
}, 200)