import PromisesExecutor from '../../../src/initializer/promise/PromisesExecutor'

it('resolve', () => {
    expect.assertions(2)
    const promiseExecutor: PromisesExecutor = new PromisesExecutor()
    promiseExecutor.add(
        () => expect(true).toBeTruthy(),
        () => expect(false).toBeTruthy())
    promiseExecutor.add(
        () => expect(true).toBeTruthy(),
        () => expect(false).toBeTruthy()
        )
    promiseExecutor.resolve()
})

it('double resolve', () => {
    expect.assertions(2)
    const promiseExecutor: PromisesExecutor = new PromisesExecutor()
    promiseExecutor.add(
        () => expect(true).toBeTruthy(),
        () => expect(false).toBeTruthy())
    promiseExecutor.add(
        () => expect(true).toBeTruthy(),
        () => expect(false).toBeTruthy()
    )
    promiseExecutor.resolve()
    promiseExecutor.resolve()
})

it('reject', () => {
    expect.assertions(2)
    const promiseExecutor: PromisesExecutor = new PromisesExecutor()
    promiseExecutor.add(
        () => expect(false).toBeTruthy(),
        () => expect(true).toBeTruthy())
    promiseExecutor.add(
        () => expect(false).toBeTruthy(),
        () => expect(true).toBeTruthy()
    )
    promiseExecutor.reject(new Error())
})

it('double reject', () => {
    expect.assertions(2)
    const promiseExecutor: PromisesExecutor = new PromisesExecutor()
    promiseExecutor.add(
        () => expect(false).toBeTruthy(),
        () => expect(true).toBeTruthy())
    promiseExecutor.add(
        () => expect(false).toBeTruthy(),
        () => expect(true).toBeTruthy()
    )
    promiseExecutor.reject(new Error())
    promiseExecutor.reject(new Error())
})
