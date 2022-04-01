// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var n=function(n){return Math.abs(n)};var r=function(){var r,t,u,a,e,f,i;return r=0,t=0,a=0,function(l){if(0===arguments.length)return u?r+a+t:null;u=!0,f=r+l,i=n(r)>=n(l)?r-f+l:l-f+r;r=f,f=a+i,e=n(a)>=n(i)?a-f+i:i-f+a;return r+(a=f)+(t+=e)}};export{r as default};
//# sourceMappingURL=mod.js.map
