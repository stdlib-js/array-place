"use strict";var s=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var m=s(function(P,c){
function b(){return{mode:"repeat"}}c.exports=b
});var p=s(function(R,f){
var w=require('@stdlib/assert-is-plain-object/dist'),h=require('@stdlib/assert-has-own-property/dist'),T=require('@stdlib/array-base-assert-contains/dist').factory,v=require('@stdlib/error-tools-fmtprodmsg/dist'),l=["strict","non_strict","strict_broadcast","broadcast","repeat"],E=T(l);function j(e,r){return w(r)?h(r,"mode")&&(e.mode=r.mode,!E(e.mode))?new TypeError(v('1wP4S',"mode",l.join('", "'),e.mode)):null:new TypeError(v('1wP2V',r));}f.exports=j
});var q=s(function(z,g){
var O=require('@stdlib/array-base-assert-is-mostly-safe-data-type-cast/dist'),D=require('@stdlib/array-base-assert-is-real-data-type/dist'),V=require('@stdlib/array-base-assert-is-complex-floating-point-data-type/dist'),d=require('@stdlib/assert-is-collection/dist'),x=require('@stdlib/array-base-place/dist'),y=require('@stdlib/array-dtype/dist'),C=require('@stdlib/array-convert/dist'),n=require('@stdlib/error-tools-fmtprodmsg/dist'),M=m(),S=p();function _(e,r,t){var o,u,a,i;if(!d(e))throw new TypeError(n('1wP2O',e));if(!d(r))throw new TypeError(n('1wP2y',r));if(!d(t))throw new TypeError(n('1wP2l',t));if(o=M(),arguments.length>3&&(u=S(o,arguments[3]),u))throw u;if(a=y(e)||"generic",i=y(t)||"generic",!O(i,a))throw new TypeError(n('1wPFu',i,a));return V(a)&&D(i)&&(t=C(t,a)),x(e,r,t,o.mode)}g.exports=_
});var k=q();module.exports=k;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
