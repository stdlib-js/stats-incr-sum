// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(e="undefined"!=typeof globalThis?globalThis:e||self).incrsum=n()}(this,(function(){"use strict";var e=function(e){return Math.abs(e)};var n=function(){var n,t,u,f,i,o,r;return n=0,t=0,f=0,function(d){if(0===arguments.length)return u?n+f+t:null;u=!0,o=n+d,r=e(n)>=e(d)?n-o+d:d-o+n;n=o,o=f+r,i=e(f)>=e(r)?f-o+r:r-o+f;return n+(f=o)+(t+=i)}};return n}));
//# sourceMappingURL=bundle.js.map
