# bound-compose

[![Build Status][travis-image]][travis-url]
[![Dependency Status][david-image]][david-url]
[![Devdependency Status][david-dev-image]][david-dev-url]
[![npm version][npm-image]][npm-url]
[![License][license-image]][license-url]

Creae a bound composed function. using the [redux#compose](http://redux.js.org/docs/api/compose.html) .

```sh
npm i bound-compose
```

## Usage

```js
// For example,
// `boundCompose(f, g, h)(b)(...args)` is identical to doing
// `(b, ...args) => f(b, g(b, h(b, ...args), ...args), ...args)` .

let result;
result = doSomething1(result, ...args)
result = doSomething2(result, ...args)
result = doSomething3(result, ...args)

// ↓

result = doSomething3(doSomething2(doSomething1(result, ...args), ...args), ...args)

// ↓

const result = boundCompose(doSomething3, doSomething2, doSomething1)(arg)(...args)

// or

const result = boundCompose.left(doSomething1, doSomething2, doSomething3)(arg)(...args)
```

## Contributing

1. Fork it!
2. Create your feature branch: git checkout -b my-new-feature
3. Commit your changes: git commit -am 'Add some feature'
4. Push to the branch: git push origin my-new-feature
5. Submit a pull request :D
## License

[MIT][license-url]

© sugarshin

[npm-image]: https://img.shields.io/npm/v/bound-compose.svg?style=flat-square
[npm-url]: https://www.npmjs.org/package/bound-compose
[travis-image]: https://img.shields.io/travis/sugarshin/bound-compose/master.svg?branch=master&style=flat-square
[travis-url]: https://travis-ci.org/sugarshin/bound-compose
[david-image]: https://david-dm.org/sugarshin/bound-compose.svg?style=flat-square
[david-url]: https://david-dm.org/sugarshin/bound-compose
[david-dev-image]: https://david-dm.org/sugarshin/bound-compose/dev-status.svg?style=flat-square
[david-dev-url]: https://david-dm.org/sugarshin/bound-compose#info=devDependencies
[license-image]: https://img.shields.io/:license-mit-blue.svg?style=flat-square
[license-url]: https://sugarshin.mit-license.org/
