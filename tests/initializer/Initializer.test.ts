import Initializer from '../../src/initializer/Initializer'
import InitializationClearedError from '../../src/initializer/InitializationClearedError'
import Success100Initializer from '../__override__/Success100Initializer'
import Fail100Initializer from '../__override__/Fail100Initializer'

it('init', done => {
    expect.assertions(1)
    const initializer: Initializer = new Success100Initializer()
    initializer.init().then(() => expect(true).toBeTruthy())
    setTimeout(done, 300)
})

it('two init', done => {
    expect.assertions(2)
    const initializer: Initializer = new Success100Initializer()
    initializer.init().then(() => expect(true).toBeTruthy())
    initializer.init().then(() => expect(true).toBeTruthy())
    setTimeout(done, 300)
})

it('clear', done => {
    expect.assertions(1)
    const initializer: Initializer = new Success100Initializer()
    initializer.clear().then(() => expect(true).toBeTruthy())
    setTimeout(done, 300)
})

it('two clear', done => {
    expect.assertions(2)
    const initializer: Initializer = new Success100Initializer()
    initializer.clear().then(() => expect(true).toBeTruthy())
    initializer.clear().then(() => expect(true).toBeTruthy())
    setTimeout(done, 300)
})

it('init clear', done => {
    expect.assertions(2)
    const initializer: Initializer = new Success100Initializer()
    initializer.init().then(
        () => {},
        () => expect(true).toBeTruthy()
    )
    initializer.clear().then(() => expect(true).toBeTruthy())
    setTimeout(done, 300)
})

it('init init clear', done => {
    expect.assertions(3)
    const initializer: Initializer = new Success100Initializer()
    initializer.init().then(
        () => {},
        () => expect(true).toBeTruthy()
    )
    initializer.init().then(
        () => {},
        () => expect(true).toBeTruthy()
    )
    initializer.clear().then(() => expect(true).toBeTruthy())
    setTimeout(done, 300)
})

it('init clear clear', done => {
    expect.assertions(3)
    const initializer: Initializer = new Success100Initializer()
    initializer.init().then(
        () => {},
        () => expect(true).toBeTruthy()
    )
    initializer.clear().then(() => expect(true).toBeTruthy())
    initializer.clear().then(() => expect(true).toBeTruthy())
    setTimeout(done, 300)
})

it('clear init', done => {
    expect.assertions(2)
    const initializer: Initializer = new Success100Initializer()
    initializer.clear().then(() => expect(true).toBeTruthy())
    initializer.init().then(
        () => {},
        () => expect(true).toBeTruthy()
    )
    setTimeout(done, 300)
})

it('init and clear after', done => {
    expect.assertions(1)
    const initializer: Initializer = new Success100Initializer()
    initializer.init().then(() => initializer.clear().then(() => expect(true).toBeTruthy()))
    setTimeout(done, 300)
})

it('clear and init after', done => {
    expect.assertions(1)
    const initializer: Initializer = new Success100Initializer()
    initializer.clear().then(() => initializer.init().then(() => expect(true).toBeTruthy()))
    setTimeout(done, 300)
})


/*********
 * FAILS *
 *********/
it('Fail100Initializer fail', done => {
    expect.assertions(1)
    const initializer: Initializer = new Fail100Initializer()
    initializer.init().then(
        () => {},
        (error: Error) => expect(error.message).toBe(Fail100Initializer.ERROR_MESSAGE)
    )
    setTimeout(done, 300)
})

it('Fail100Initializer clear fail', done => {
    expect.assertions(1)
    const initializer: Initializer = new Fail100Initializer()
    initializer.init().then(
        () => {},
        (error: Error) => expect(error.message).toBe(InitializationClearedError.MESSAGE)
    )
    initializer.clear().then()
    setTimeout(done, 300)
})