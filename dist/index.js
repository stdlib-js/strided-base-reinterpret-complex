/** @license Apache-2.0 */

'use strict';

/**
* Reinterpret a complex-valued floating-point point array as a real-valued floating-point array view having the same precision.
*
* @module @stdlib/strided-base-reinterpret-complex
*
* @example
* var Complex128Array = require( '@stdlib/array-complex128' );
* var reinterpret = require( '@stdlib/strided-base-reinterpret-complex' );
*
* var x = new Complex128Array( 10 );
*
* var out = reinterpret( x, 0 );
* // returns <Float64Array>
*
* var bool = ( out.buffer === x.buffer );
* // returns true
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
