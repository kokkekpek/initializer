export default interface InitializerInterface {
    init():Promise<void | Error>
    clear():Promise<void | Error>
}