!function(e,n){"object"==typeof exports&&"object"==typeof module?module.exports=n():"function"==typeof define&&define.amd?define([],n):"object"==typeof exports?exports.Sqrl=n():e.Sqrl=n()}("undefined"!=typeof self?self:this,function(){return function(e){var n={};function t(r){if(n[r])return n[r].exports;var u=n[r]={i:r,l:!1,exports:{}};return e[r].call(u.exports,u,u.exports,t),u.l=!0,u.exports}return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var u in e)t.d(r,u,function(n){return e[n]}.bind(null,u));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=0)}([function(e,n,t){"use strict";t.r(n);var r={};t.r(r),t.d(r,"__express",function(){return u}),t.d(r,"H",function(){return o}),t.d(r,"Precompile",function(){return a}),t.d(r,"defineFilter",function(){return d}),t.d(r,"defineHelper",function(){return l}),t.d(r,"Render",function(){return p}),t.d(r,"F",function(){return i}),t.d(r,"defaultFilters",function(){return f}),t.d(r,"autoEscape",function(){return c});var u=function(e,n,t){fs.readFile(e,function(e,r){if(e)return t(e);var u=r.toString(),o=Sqrl.Precompile(u),i=Sqrl.Render(o,n);return t(null,i)})},o={},i={d:function(e){return e},e:function(e){var n={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;","`":"&#x60;","=":"&#x3D;"};var t=String(e);return/[&<>"'`=\/]/.test(t)?t.replace(/[&<>"'`=\/]/g,function(e){return n[e]}):t}},f={},c=!0;function d(e,n){i[e]=n}function l(e,n){o[e]=n}function p(e,n){return"function"==typeof e?e(n,r):"string"==typeof e?a(e)(n,r):void 0}var a={};t.d(n,"__express",function(){return u}),t.d(n,"H",function(){return o}),t.d(n,"Precompile",function(){return a}),t.d(n,"defineFilter",function(){return d}),t.d(n,"defineHelper",function(){return l}),t.d(n,"Render",function(){return p}),t.d(n,"F",function(){return i}),t.d(n,"defaultFilters",function(){return f}),t.d(n,"autoEscape",function(){return c})}])});