# generator-angular-materializecss [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url] [![Coverage percentage][coveralls-image]][coveralls-url]
> generator angular-materializecss lets you quickly set up a project with [angularjs](https://angularjs.org/) and [materializecss framework](http://materializecss.com/)

## Installation

First, install [Yeoman](http://yeoman.io), gulp and generator-angular-materializecss using [npm](https://www.npmjs.com/) (we assume you have pre-installed [node.js](https://nodejs.org/)).

```bash
npm install -g yo
npm install -g gulp
npm install -g gulp-connect
npm install -g connect-history-api-fallback
npm install -g generator-angular-materializecss
```

Then generate your new project:

```bash
yo angular-materializecss
```

Running Project in [http://localhost:8085](http://localhost:8085):

```bash
gulp
```
## Gulp Tasks

```bash
gulp                // server livereload http://localhost:8085
gulp sass           // compile sass files
gulp minify-css     // minify css files
gulp minify-html    //minify html files
gulp minify-js      // minify js files
gulp build          // compile and minify project to production
```

## Getting To Know Yeoman

 * Yeoman has a heart of gold.
 * Yeoman is a person with feelings and opinions, but is very easy to work with.
 * Yeoman can be too opinionated at times but is easily convinced not to be.
 * Feel free to [learn more about Yeoman](http://yeoman.io/).

## License

MIT © [cmtp](https://github.com/cmtp/generator-angular-materializecss)


[npm-image]: https://badge.fury.io/js/generator-angular-materializecss.svg
[npm-url]: https://npmjs.org/package/generator-angular-materializecss
[travis-image]: https://travis-ci.org/cmtp/generator-angular-materializecss.svg?branch=master
[travis-url]: https://travis-ci.org/cmtp/generator-angular-materializecss
[daviddm-image]: https://david-dm.org/cmtp/generator-angular-materializecss.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/cmtp/generator-angular-materializecss
[coveralls-image]: https://coveralls.io/repos/cmtp/generator-angular-materializecss/badge.svg
[coveralls-url]: https://coveralls.io/r/cmtp/generator-angular-materializecss
