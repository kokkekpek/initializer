# README
## Installation
```sh
yarn add kokkekpek/initializer#^1.0
```

## Use
```typescript
import {InitializerInterface, InitializerQueue} from '../'

const redis: InitializerInterface = new RedisInitializer()
const telegram: InitializerInterface = new TelegramInitializer()
const mongo: InitializerInterface = new MongoInitializer()
const queue: InitializerInterface = new InitializerQueue([
    redis,
    telegram,
    mongo
])
queue.init().then(() => {
    // ALL INITIALIZED. DO SOMETHING HERE
})
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