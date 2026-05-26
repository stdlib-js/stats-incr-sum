// Copyright (c) 2026 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
function n(n){return Math.abs(n)}function t(){var t,r,u,e,a,f,i;return t=0,r=0,e=0,function(l){if(0===arguments.length)return u?t+e+r:null;u=!0,f=t+l,i=n(t)>=n(l)?t-f+l:l-f+t;t=f,f=e+i,a=n(e)>=n(i)?e-f+i:i-f+e;return t+(e=f)+(r+=a)}}export{t as default};
//# sourceMappingURL=mod.js.map
