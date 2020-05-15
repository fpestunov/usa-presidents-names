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

## 6. Releasing a version to GitHub

```sh
git tag 1.0.0
git push --tags
```

Github / Repository / Releases / Draft a new release

## 7. Releasing a new version to npm

SemVer, A.B.C
A - major changes, breaking API `all()`->`getAll()`
B - minor changes
C - patch release, bug fix

Process:

- make new version
- change version in `package.json`
- commit & push to github with `git tag`
- `npm publish`

## 8. Publishing a beta version

- change version `"version": "1.1.0-beta.0"`
- add tag, commit & push with tag
- `npm publish --tag beta`
- now i can install beta `npm install usa-presidents@beta`

## 9. Setting up Unit Testing with Mocha and Chai

- install Mocha and Chai `npm i -D mocha chai`
  > `npm i -D` short for `install --save-dev`
- settup testing and add test
- `npm run test`

## 10. Unit Testing with Mocha and Cha

`npm t` - run test