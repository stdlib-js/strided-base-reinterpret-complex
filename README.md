<!--

@license Apache-2.0

Copyright (c) 2024 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# reinterpret

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Reinterpret a complex-valued floating-point array as a real-valued floating-point array having the same precision.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="installation">

## Installation

```bash
npm install @stdlib/strided-base-reinterpret-complex
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm`][esm-url] branch (see [README][esm-readme]).
-   If you are using Deno, visit the [`deno`][deno-url] branch (see [README][deno-readme] for usage intructions).
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd`][umd-url] branch (see [README][umd-readme]).

The [branches.md][branches-url] file summarizes the available branches and displays a diagram illustrating their relationships.

To view installation and usage instructions specific to each branch build, be sure to explicitly navigate to the respective README files on each branch, as linked to above.

</section>

<section class="usage">

## Usage

```javascript
var reinterpret = require( '@stdlib/strided-base-reinterpret-complex' );
```

#### reinterpret( x, offset )

Returns a real-valued floating-point array view of a complex-valued floating-point array.

```javascript
var Complex128Array = require( '@stdlib/array-complex128' );

var x = new Complex128Array( 10 );

var view = reinterpret( x, 0 );
// returns <Float64Array>

var bool = ( view.buffer === x.buffer );
// returns true

var len = view.length;
// returns 20
```

The `offset` argument specifies the starting index of the returned real-valued floating-point array view relative to the input array.

```javascript
var Complex64Array = require( '@stdlib/array-complex64' );

var x = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );

var view = reinterpret( x, 2 );
// returns <Float32Array>

var len = view.length;
// returns 4

var re = view[ 0 ];
// returns 5.0

var im = view[ 1 ];
// returns 6.0
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var Complex128Array = require( '@stdlib/array-complex128' );
var real = require( '@stdlib/complex-real' );
var imag = require( '@stdlib/complex-imag' );
var reinterpret = require( '@stdlib/strided-base-reinterpret-complex' );

// Define a complex number array:
var x = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
// returns <Complex128Array>

// Reinterpret as a `float64` array:
var view = reinterpret( x, 0 );
// returns <Float64Array>

// Set view elements:
view[ 0 ] = 9.0;
view[ 1 ] = 10.0;

// Get the first element of the complex number array:
var z = x.get( 0 );
// returns <Complex128>

var re = real( z );
// returns 9.0

var im = imag( z );
// returns 10.0
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2024. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/strided-base-reinterpret-complex.svg
[npm-url]: https://npmjs.org/package/@stdlib/strided-base-reinterpret-complex

[test-image]: https://github.com/stdlib-js/strided-base-reinterpret-complex/actions/workflows/test.yml/badge.svg?branch=v0.1.1
[test-url]: https://github.com/stdlib-js/strided-base-reinterpret-complex/actions/workflows/test.yml?query=branch:v0.1.1

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/strided-base-reinterpret-complex/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/strided-base-reinterpret-complex?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/strided-base-reinterpret-complex.svg
[dependencies-url]: https://david-dm.org/stdlib-js/strided-base-reinterpret-complex/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/strided-base-reinterpret-complex/tree/deno
[deno-readme]: https://github.com/stdlib-js/strided-base-reinterpret-complex/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/strided-base-reinterpret-complex/tree/umd
[umd-readme]: https://github.com/stdlib-js/strided-base-reinterpret-complex/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/strided-base-reinterpret-complex/tree/esm
[esm-readme]: https://github.com/stdlib-js/strided-base-reinterpret-complex/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/strided-base-reinterpret-complex/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/strided-base-reinterpret-complex/main/LICENSE

</section>

<!-- /.links -->
