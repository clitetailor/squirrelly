!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e=e||self).Sqrl={})}(this,function(e){"use strict";var n={},t={"&":"&amp;","<":"&lt;",'"':"&quot;","'":"&#39;"};function r(e){return t[e]}var i=/[&<"']/g,o=/[&<"']/,f={e:function(e){var t=String(e);return o.test(t)?t.replace(i,r):t}},u={},a={start:"",end:""};var c={};e.H=n,e.defineFilter=function(e,t){f[e]=t},e.defineHelper=function(e,t){n[e]=t},e.definePartial=function(e,t){c[e]=t},e.Render=function(e,t){return"function"==typeof e?e(t,{H:n,F:f,P:c}):"Err: Function must be 1st arg"},e.F=f,e.setDefaultFilters=function(e){if("clear"===e)u={};else for(var t in e)e.hasOwnProperty(t)&&(u[t]=e[t]);!function(){for(var e in a={start:"",end:""},u)u.hasOwnProperty(e)&&u[e]&&(a.start+="Sqrl.F."+e+"(",a.end+=")")}()},e.autoEscaping=function(e){return e},Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=squirrelly.runtime.js.map
