# README
## Installation
```sh
yarn add kokkekpek/initializer#^1.0
```

## Use
Queue - initialize one by one
```typescript
import {InitializerInterface, InitializerQueue} from 'initializer'

const redis: InitializerInterface = new RedisInitializer()
const telegram: InitializerInterface = new TelegramInitializer(redis)
const parser: InitializerInterface = new ParserInitializer(telegram)
const queue: InitializerInterface = new InitializerQueue([
    redis,
    telegram,
    parser
])
queue.init().then(
    () => {
        // All initialized, do something here
    },
    (error: Error) => {
        // Something wrong
    }
)
```

Pool - initialize all in one time
```typescript
import {InitializerInterface, InitializerPool} from 'initializer'

const one: InitializerInterface = new InitializerOne()
const two: InitializerInterface = new InitializerTwo()
const three: InitializerInterface = new InitializerThree()
const pool: InitializerInterface = new InitializerPool([
    one,
    two,
    three
])
pool.init().then(
    () => {
        // All initialized, do something here
    },
    (error: Error) => {
        // Something wrong
    }
)
```

Custom an initializer extends from Initializer class
```typescript
import {Initializer} from 'initializer'

export default class CustomInitializer extends Initializer {
    /**
     * Override Initializer method
     */
    protected _init(): void {
        // Do something here... Initialize database connection, create directories etc.

        /**
         * After all call:
         *     this._initResolve() // For resolve initialization
         *     this._initReject(new Error()) // For reject initialization
         */
        this._initResult()
    }

    /**
     * Override Initializer method
     */
    protected _clear(): void {
        // Clear here. Remove all listeners, drop connection. Remove temporary files etc.

        /** 
         * After all call:
         *     this._clearResolve() // For resolve clearing
         * No clearing reject
         */
        this._clearResolve()
    }
}
```

## DEV
Install modules
```sh
yarn install
```

Build
```sh
yarn build
````

Test
```sh
yarn test
````