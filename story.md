# Dev Story

https://egghead.io/courses/how-to-write-an-open-source-javascript-library

## 1. Setting up Github

## 2. Configuring npm and creating a package.json

- install node.js
- read [NPM docs](https://docs.npmjs.com/)

```sh
npm set init-author-name 'Fedor Pestunov'
npm set init-author-email 'fpestunov@gmail.com'
npm set save-exact true
npm set init-license 'MIT'
cat ~/.npmrc
```

- sign in npmjs.com

```sh
npm adduser
npm init
```

## 3. Creating the library and adding dependencies

```sh
npm install --save unique-random-array
```

- create `src\index.js`
- test our module

```sh
node
const lib = require('./src/index.js')
lib.all
lib.random
```

## 4. Pushing to GitHub

## 5. Publishing to npm

```sh
npm publish
```

```sh
mkdir proj & cd proj/
npm info usa-presidents
// теперь можно устанавливать
npm i usa-presidents
```

create `index.js`

```js
let names = require("usa-presidents");

console.log(names.all);
console.log(names.random());
console.log(names.random());
```

```sh
node index.js
```

That is publishing our first module to NPM!

npm.im/usa-presidents
