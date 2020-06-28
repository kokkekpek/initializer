import PromiseExecutor from '../../src/initializer/PromiseExecutor'

it('resolve', () => {
    expect.assertions(1)
    const promiseExecutor: PromiseExecutor = new PromiseExecutor(
        () => expect(true).toBeTruthy(),
        () => expect(false).toBeTruthy()
    )
    promiseExecutor.resolve()
})

it('double resolve', () => {
    expect.assertions(1)
    const promiseExecutor: PromiseExecutor = new PromiseExecutor(
        () => expect(true).toBeTruthy(),
        () => expect(false).toBeTruthy()
    )
    promiseExecutor.resolve()
    promiseExecutor.resolve()
})

it('reject', () => {
    expect.assertions(1)
    const promiseExecutor: PromiseExecutor = new PromiseExecutor(
        () => expect(false).toBeTruthy(),
        () => expect(true).toBeTruthy()
    )
    promiseExecutor.reject(new Error())
})

it('double reject', () => {
    expect.assertions(1)
    const promiseExecutor: PromiseExecutor = new PromiseExecutor(
        () => expect(false).toBeTruthy(),
        () => expect(true).toBeTruthy()
    )
    promiseExecutor.reject(new Error())
    promiseExecutor.reject(new Error())
})

it('reject error message', () => {
    expect.assertions(1)
    const text: string = 'error text'
    const promiseExecutor: PromiseExecutor = new PromiseExecutor(
        () => expect(false).toBeTruthy(),
        (error: Error) => expect(error.message).toBe(text)
        )
    promiseExecutor.reject(new Error(text))
})