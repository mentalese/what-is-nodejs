자바스크립트에 대해서 알고 있다는 전제로 Node.js가 무엇인지 같이 공부해 보도록 하겠습니다.
구글에서 `node.js` 를 검색하는 것으로 시작해 node.js가 무엇인지, 어떤 특성을 가지는지 알아 봅니다.
https://nodejs.org/en/docs/guides/ 에 있는 내용이 node.js에 대한 핵심 내용을 잘 설명해 주고 있습니다.


### node.js는 뭐지?
https://nodejs.org/en/

https://chaudharypulkit93.medium.com/how-does-nodejs-work-beginner-to-advanced-event-loop-v8-engine-libuv-threadpool-bbe9b41b5bdd

> Node.js® is a JavaScript runtime built on Chrome's V8 JavaScript engine.

> Node.js®는 Chrome V8 JavaScript 엔진으로 빌드된 JavaScript 런타임입니다.

- `Chrome V8 JavaScript 엔진` 은 뭐지? (https://v8.dev/docs)  
  > V8 is Google’s open source high-performance JavaScript and WebAssembly engine, written in C++. It is used in Chrome and in Node.js

  > It implements ECMAScript and WebAssembly

  > V8 compiles and executes JavaScript source code, handles memory allocation for objects, and garbage collects objects it no longer needs. V8’s stop-the-world, generational, accurate garbage collector is one of the keys to V8’s performance.

  > JavaScript is commonly used for client-side scripting in a browser, being used to manipulate Document Object Model (DOM) objects for example. The DOM is not, however, typically provided by the JavaScript engine but instead by a browser. The same is true of V8 — Google Chrome provides the DOM. V8 does however provide all the data types, operators, objects and functions specified in the ECMA standard.

- 컴퓨터 프로그래밍에서 `엔진`이란? (https://whatis.techtarget.com/definition/engine)
  - 다른 프로그램을 위해 중요한/본질적인 기능을 하는 `프로그램`

- 'runtime'은 뭐지?
  - A “runtime” is any code which is executed to make your code work

- Javascript로 작성하면 V8이 다 해주는거 아닌가?
  - 브라우저에서는?
    - DOM 조작
    - ajax call 
    - event
  - 서버 환경에서는 Node.js 에서 다음과 같은 프로그래밍 인터페이스를 [기본 라이브러리](https://nodejs.org/api/)로 제공
    - File system
    - HTTP
    - NET
    - ...
  
### node.js 프로그램 예제
https://nodejs.dev/learn

```js
const http = require('http')

const hostname = '127.0.0.1'
const port = 8888

const server = http.createServer((req, res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/plain')
  res.end('Hello World!\n')
})

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`)
})

console.log('hahaha')
```

- Node.js app is run in a single process
- libraries in Node.js are written using non-blocking paradigms
- In Node.js the new ECMAScript standards can be used without problems

### node.js 설치
https://nodejs.dev/

- Current vs LTS 
  - https://nodejs.org/en/about/releases/

- `nvm`을 사용해서 다양한 버전을 관리할수 있다.
  - https://github.com/nvm-sh/nvm
  - `node --version`  

### 실행 / 중지
- 실행
  ```
  node app.js
  ```
- 중지
  - `ctrl-C`
- 좀더 읽어 보기 https://nodejs.dev/learn/how-to-exit-from-a-nodejs-program
  - `process` 모듈

### npm package manager
https://nodejs.dev/learn/an-introduction-to-the-npm-package-manager

- package ? (https://www.w3schools.com/nodejs/nodejs_npm.asp)
  - A package in Node.js contains all the files you need for a module.
  - Modules are JavaScript libraries you can include in your project.
- `npm` is the standard package manager for Node.js.
  ```
  npm --help
  ```
  - `package.json` 파일이 있다면 `npm install`을 통해 필요한 패키지를 한번에 설치할 수 있다. 
  - 패키지는 `node_modules` 디렉토리에 설치된다.
    - `-g` 옵션에 따라 local / global install 선택 가능
    ```
    npm root -g
    npm root
    ```
- package.json ? (https://nodejs.dev/learn/the-package-json-guide)
  - The package.json file is kind of a manifest for your project
  - https://docs.npmjs.com/cli/v7/configuring-npm/package-json

### Overview of Blocking vs Non-Blocking 
https://nodejs.dev/learn/javascript-asynchronous-programming-and-callbacks

https://nodejs.org/en/docs/guides/blocking-vs-non-blocking/

- Blocking methods execute synchronously and non-blocking methods execute asynchronously.
- non-blocking 함수는 callback 함수를 인자로 가진다.
- Some methods also have blocking counterparts, which have names that end with `Sync`
- In the synchronous version if an error is thrown it will need to be caught or the process will crash
- In the asynchronous version, it is up to the author to decide whether an error should throw as shown

### The Node.js Event Loop, Timers, and process.nextTick()
https://nodejs.org/en/docs/guides/

https://nodejs.org/en/docs/guides/event-loop-timers-and-nexttick/

https://nodejs.dev/learn/the-nodejs-event-loop

https://www.youtube.com/watch?v=8aGhZQkoFbQ

https://medium.com/swlh/a-short-introduction-to-node-js-event-loop-558f6f2c2af7 (이벤트 loop 자세한 설명)

https://sjh836.tistory.com/149

- Event Loop?
  > The event loop is what allows Node.js to perform non-blocking I/O operations — despite the fact that JavaScript is single-threaded — by offloading operations to the system kernel whenever possible.
  
  > The loop gives priority to the call stack, and it first processes everything it finds in the call stack, and once there's nothing in there, it goes to pick up things in the message queue.


### Promise
https://nodejs.dev/learn/understanding-javascript-promises

- Once a promise has been called, it will start in a pending state
- The created promise will eventually end in a resolved state, or in a rejected state
- calling the respective callback functions (passed to then and catch) upon finishing.



자바스크립트가 싱글스레드 언어라는것은 어디에 명시되어 있나?
명시 되어 있지는 않다. 다만 자바스크립트를 런타임이 이벤트 loop를 싱글 스레드로 구현을 해 놓은 것이다.

node.js 프로그램 자세한  실행 순서



1. node.js 라는것은 무엇인가? 
   1. 정의 해석, 런타임, 엔진
   2. v8
   3. 어떤 순서로 실행이 되는가?
2. 설치 및 실행
   1. 어떤 버전?
   2. 설치하기
3. hello 소스 분석 1
   1. require / NPM / Package.json
   2. 글로벌 / 로컬 모듈
4. hello 소스 분석 2
   1. callback
   2. promise
   3. async / await
5. 이벤트 loop에 대해
   1. 왜 asynchrous 하게 작성하게 되었을까?
      1. 브라우저가 생겼던 시기에 어떻게 구현을 했을까?
   2. event loop 들여다 보기
      1. 실행순서 자세히 보기
      2. 실행 순서 예측해 보기(셈플)
      3. non blocking 
   3. libuv
      1. thread pool 셈플 (암호화)
   4. OS delegation (https)
   5. 복합 예제
   
