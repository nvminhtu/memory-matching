/*!
 * Angular Demo v0.0.1 
 (http://feit.topming.com)
 * Copyright 2014 Alex Huang
 * Licensed under 
 */

/*
 AngularJS v1.3.0-rc.0
 (c) 2010-2014 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(P,Y,s){'use strict';function Q(b){return function(){var a=arguments[0],c;c="["+(b?b+":":"")+a+"] http://errors.angularjs.org/1.3.0-rc.0/"+(b?b+"/":"")+a;for(a=1;a<arguments.length;a++){c=c+(1==a?"?":"&")+"p"+(a-1)+"=";var d=encodeURIComponent,e;e=arguments[a];e="function"==typeof e?e.toString().replace(/ \{[\s\S]*$/,""):"undefined"==typeof e?"undefined":"string"!=typeof e?JSON.stringify(e):e;c+=d(e)}return Error(c)}}function eb(b){if(null==b||Sa(b))return!1;var a=b.length;return 1===b.nodeType&&
a?!0:D(b)||H(b)||0===a||"number"===typeof a&&0<a&&a-1 in b}function r(b,a,c){var d,e;if(b)if(E(b))for(d in b)"prototype"==d||"length"==d||"name"==d||b.hasOwnProperty&&!b.hasOwnProperty(d)||a.call(c,b[d],d);else if(H(b)||eb(b)){var f="object"!==typeof b;d=0;for(e=b.length;d<e;d++)(f||d in b)&&a.call(c,b[d],d)}else if(b.forEach&&b.forEach!==r)b.forEach(a,c);else for(d in b)b.hasOwnProperty(d)&&a.call(c,b[d],d);return b}function bc(b){var a=[],c;for(c in b)b.hasOwnProperty(c)&&a.push(c);return a.sort()}
function ld(b,a,c){for(var d=bc(b),e=0;e<d.length;e++)a.call(c,b[d[e]],d[e]);return d}function cc(b){return function(a,c){b(c,a)}}function md(){return++fb}function dc(b,a){a?b.$$hashKey=a:delete b.$$hashKey}function B(b){var a=b.$$hashKey;r(arguments,function(a){a!==b&&r(a,function(a,c){b[c]=a})});dc(b,a);return b}function V(b){return parseInt(b,10)}function ec(b,a){return B(new (B(function(){},{prototype:b})),a)}function y(){}function Fa(b){return b}function fa(b){return function(){return b}}function F(b){return"undefined"===
typeof b}function G(b){return"undefined"!==typeof b}function S(b){return null!==b&&"object"===typeof b}function D(b){return"string"===typeof b}function Ga(b){return"number"===typeof b}function ia(b){return"[object Date]"===Ha.call(b)}function E(b){return"function"===typeof b}function gb(b){return"[object RegExp]"===Ha.call(b)}function Sa(b){return b&&b.window===b}function Ta(b){return b&&b.$evalAsync&&b.$watch}function nd(b){return!(!b||!(b.nodeName||b.prop&&b.attr&&b.find))}function od(b){var a=
{};b=b.split(",");var c;for(c=0;c<b.length;c++)a[b[c]]=!0;return a}function pa(b){return K(b.nodeName||b[0].nodeName)}function pd(b,a,c){var d=[];r(b,function(b,f,g){d.push(a.call(c,b,f,g))});return d}function Ca(b,a){if(b.indexOf)return b.indexOf(a);for(var c=0;c<b.length;c++)if(a===b[c])return c;return-1}function Ia(b,a){var c=Ca(b,a);0<=c&&b.splice(c,1);return a}function Ja(b,a,c,d){if(Sa(b)||Ta(b))throw Ua("cpws");if(a){if(b===a)throw Ua("cpi");c=c||[];d=d||[];if(S(b)){var e=Ca(c,b);if(-1!==e)return d[e];
c.push(b);d.push(a)}if(H(b))for(var f=a.length=0;f<b.length;f++)e=Ja(b[f],null,c,d),S(b[f])&&(c.push(b[f]),d.push(e)),a.push(e);else{var g=a.$$hashKey;H(a)?a.length=0:r(a,function(c,b){delete a[b]});for(f in b)b.hasOwnProperty(f)&&(e=Ja(b[f],null,c,d),S(b[f])&&(c.push(b[f]),d.push(e)),a[f]=e);dc(a,g)}}else if(a=b)H(b)?a=Ja(b,[],c,d):ia(b)?a=new Date(b.getTime()):gb(b)?(a=new RegExp(b.source,b.toString().match(/[^\/]*$/)[0]),a.lastIndex=b.lastIndex):S(b)&&(e=Object.create(Object.getPrototypeOf(b)),
a=Ja(b,e,c,d));return a}function qa(b,a){if(H(b)){a=a||[];for(var c=0,d=b.length;c<d;c++)a[c]=b[c]}else if(S(b))for(c in a=a||{},b)if("$"!==c.charAt(0)||"$"!==c.charAt(1))a[c]=b[c];return a||b}function ra(b,a){if(b===a)return!0;if(null===b||null===a)return!1;if(b!==b&&a!==a)return!0;var c=typeof b,d;if(c==typeof a&&"object"==c)if(H(b)){if(!H(a))return!1;if((c=b.length)==a.length){for(d=0;d<c;d++)if(!ra(b[d],a[d]))return!1;return!0}}else{if(ia(b))return ia(a)?ra(b.getTime(),a.getTime()):!1;if(gb(b)&&
gb(a))return b.toString()==a.toString();if(Ta(b)||Ta(a)||Sa(b)||Sa(a)||H(a))return!1;c={};for(d in b)if("$"!==d.charAt(0)&&!E(b[d])){if(!ra(b[d],a[d]))return!1;c[d]=!0}for(d in a)if(!c.hasOwnProperty(d)&&"$"!==d.charAt(0)&&a[d]!==s&&!E(a[d]))return!1;return!0}return!1}function hb(b,a,c){return b.concat(Va.call(a,c))}function fc(b,a){var c=2<arguments.length?Va.call(arguments,2):[];return!E(a)||a instanceof RegExp?a:c.length?function(){return arguments.length?a.apply(b,c.concat(Va.call(arguments,0))):
a.apply(b,c)}:function(){return arguments.length?a.apply(b,arguments):a.call(b)}}function qd(b,a){var c=a;"string"===typeof b&&"$"===b.charAt(0)&&"$"===b.charAt(1)?c=s:Sa(a)?c="$WINDOW":a&&Y===a?c="$DOCUMENT":Ta(a)&&(c="$SCOPE");return c}function sa(b,a){return"undefined"===typeof b?s:JSON.stringify(b,qd,a?"  ":null)}function gc(b){return D(b)?JSON.parse(b):b}function ta(b){b=x(b).clone();try{b.empty()}catch(a){}var c=x("<div>").append(b).html();try{return 3===b[0].nodeType?K(c):c.match(/^(<[^>]+>)/)[1].replace(/^<([\w\-]+)/,
function(a,c){return"<"+K(c)})}catch(d){return K(c)}}function hc(b){try{return decodeURIComponent(b)}catch(a){}}function ic(b){var a={},c,d;r((b||"").split("&"),function(b){b&&(c=b.replace(/\+/g,"%20").split("="),d=hc(c[0]),G(d)&&(b=G(c[1])?hc(c[1]):!0,Fb.call(a,d)?H(a[d])?a[d].push(b):a[d]=[a[d],b]:a[d]=b))});return a}function Gb(b){var a=[];r(b,function(b,d){H(b)?r(b,function(b){a.push(Da(d,!0)+(!0===b?"":"="+Da(b,!0)))}):a.push(Da(d,!0)+(!0===b?"":"="+Da(b,!0)))});return a.length?a.join("&"):""}
function ib(b){return Da(b,!0).replace(/%26/gi,"&").replace(/%3D/gi,"=").replace(/%2B/gi,"+")}function Da(b,a){return encodeURIComponent(b).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%3B/gi,";").replace(/%20/g,a?"%20":"+")}function rd(b,a){var c,d,e=jb.length;b=x(b);for(d=0;d<e;++d)if(c=jb[d]+a,D(c=b.attr(c)))return c;return null}function sd(b,a){var c,d,e={};r(jb,function(a){a+="app";!c&&b.hasAttribute&&b.hasAttribute(a)&&(c=b,d=b.getAttribute(a))});
r(jb,function(a){a+="app";var e;!c&&(e=b.querySelector("["+a.replace(":","\\:")+"]"))&&(c=e,d=e.getAttribute(a))});c&&(e.strictDi=null!==rd(c,"strict-di"),a(c,d?[d]:[],e))}function jc(b,a,c){S(c)||(c={});c=B({strictDi:!1},c);var d=function(){b=x(b);if(b.injector()){var d=b[0]===Y?"document":ta(b);throw Ua("btstrpd",d.replace(/</,"&lt;").replace(/>/,"&gt;"));}a=a||[];a.unshift(["$provide",function(a){a.value("$rootElement",b)}]);c.debugInfoEnabled&&a.push(["$compileProvider",function(a){a.debugInfoEnabled(!0)}]);
a.unshift("ng");d=Hb(a,c.strictDi);d.invoke(["$rootScope","$rootElement","$compile","$injector",function(a,b,c,d){a.$apply(function(){b.data("$injector",d);c(b)(a)})}]);return d},e=/^NG_ENABLE_DEBUG_INFO!/,f=/^NG_DEFER_BOOTSTRAP!/;P&&e.test(P.name)&&(c.debugInfoEnabled=!0,P.name=P.name.replace(e,""));if(P&&!f.test(P.name))return d();P.name=P.name.replace(f,"");xa.resumeBootstrap=function(b){r(b,function(b){a.push(b)});d()}}function td(){P.name="NG_ENABLE_DEBUG_INFO!"+P.name;P.location.reload()}function ud(b){return xa.element(b).injector().get("$$testability")}
function Wa(b,a){a=a||"_";return b.replace(vd,function(b,d){return(d?a:"")+b.toLowerCase()})}function wd(){var b;kc||((ua=P.jQuery)&&ua.fn.on?(x=ua,B(ua.fn,{scope:Ka.scope,isolateScope:Ka.isolateScope,controller:Ka.controller,injector:Ka.injector,inheritedData:Ka.inheritedData}),b=ua.cleanData,ua.cleanData=function(a){if(Ib)Ib=!1;else for(var c=0,d;null!=(d=a[c]);c++)ua(d).triggerHandler("$destroy");b(a)}):x=U,xa.element=x,kc=!0)}function Jb(b,a,c){if(!b)throw Ua("areq",a||"?",c||"required");return b}
function kb(b,a,c){c&&H(b)&&(b=b[b.length-1]);Jb(E(b),a,"not a function, got "+(b&&"object"===typeof b?b.constructor.name||"Object":typeof b));return b}function La(b,a){if("hasOwnProperty"===b)throw Ua("badname",a);}function lc(b,a,c){if(!a)return b;a=a.split(".");for(var d,e=b,f=a.length,g=0;g<f;g++)d=a[g],b&&(b=(e=b)[d]);return!c&&E(b)?fc(e,b):b}function lb(b){var a=b[0];b=b[b.length-1];var c=[a];do{a=a.nextSibling;if(!a)break;c.push(a)}while(a!==b);return x(c)}function xd(b){function a(a,b,c){return a[b]||
(a[b]=c())}var c=Q("$injector"),d=Q("ng");b=a(b,"angular",Object);b.$$minErr=b.$$minErr||Q;return a(b,"module",function(){var b={};return function(f,g,h){if("hasOwnProperty"===f)throw d("badname","module");g&&b.hasOwnProperty(f)&&(b[f]=null);return a(b,f,function(){function a(c,d,e,f){f||(f=b);return function(){f[e||"push"]([c,d,arguments]);return q}}if(!g)throw c("nomod",f);var b=[],d=[],e=[],l=a("$injector","invoke","push",d),q={_invokeQueue:b,_configBlocks:d,_runBlocks:e,requires:g,name:f,provider:a("$provide",
"provider"),factory:a("$provide","factory"),service:a("$provide","service"),value:a("$provide","value"),constant:a("$provide","constant","unshift"),animation:a("$animateProvider","register"),filter:a("$filterProvider","register"),controller:a("$controllerProvider","register"),directive:a("$compileProvider","directive"),config:l,run:function(a){e.push(a);return this}};h&&l(h);return q})}})}function yd(b){B(b,{bootstrap:jc,copy:Ja,extend:B,equals:ra,element:x,forEach:r,injector:Hb,noop:y,bind:fc,toJson:sa,
fromJson:gc,identity:Fa,isUndefined:F,isDefined:G,isString:D,isFunction:E,isObject:S,isNumber:Ga,isElement:nd,isArray:H,version:zd,isDate:ia,lowercase:K,uppercase:mb,callbacks:{counter:0},getTestability:ud,$$minErr:Q,$$csp:Xa,reloadWithDebugInfo:td});Ya=xd(P);try{Ya("ngLocale")}catch(a){Ya("ngLocale",[]).provider("$locale",Ad)}Ya("ng",["ngLocale"],["$provide",function(a){a.provider({$$sanitizeUri:Bd});a.provider("$compile",mc).directive({a:Cd,input:nc,textarea:nc,form:Dd,script:Ed,select:Fd,style:Gd,
option:Hd,ngBind:Id,ngBindHtml:Jd,ngBindTemplate:Kd,ngClass:Ld,ngClassEven:Md,ngClassOdd:Nd,ngCloak:Od,ngController:Pd,ngForm:Qd,ngHide:Rd,ngIf:Sd,ngInclude:Td,ngInit:Ud,ngNonBindable:Vd,ngPluralize:Wd,ngRepeat:Xd,ngShow:Yd,ngStyle:Zd,ngSwitch:$d,ngSwitchWhen:ae,ngSwitchDefault:be,ngOptions:ce,ngTransclude:de,ngModel:ee,ngList:fe,ngChange:ge,pattern:oc,ngPattern:oc,required:pc,ngRequired:pc,minlength:qc,ngMinlength:qc,maxlength:rc,ngMaxlength:rc,ngValue:he,ngModelOptions:ie}).directive({ngInclude:je}).directive(nb).directive(sc);
a.provider({$anchorScroll:ke,$animate:le,$browser:me,$cacheFactory:ne,$controller:oe,$document:pe,$exceptionHandler:qe,$filter:tc,$interpolate:re,$interval:se,$http:te,$httpBackend:ue,$location:ve,$log:we,$parse:xe,$rootScope:ye,$q:ze,$$q:Ae,$sce:Be,$sceDelegate:Ce,$sniffer:De,$templateCache:Ee,$templateRequest:Fe,$$testability:Ge,$timeout:He,$window:Ie,$$rAF:Je,$$asyncCallback:Ke})}])}function Za(b){return b.replace(Le,function(a,b,d,e){return e?d.toUpperCase():d}).replace(Me,"Moz$1")}function uc(b){b=
b.nodeType;return 1===b||!b||9===b}function Ne(b,a){var c,d,e=a.createDocumentFragment(),f=[];if(Kb.test(b)){c=c||e.appendChild(a.createElement("div"));d=(Oe.exec(b)||["",""])[1].toLowerCase();d=ja[d]||ja._default;c.innerHTML=d[1]+b.replace(Pe,"<$1></$2>")+d[2];for(d=d[0];d--;)c=c.lastChild;f=hb(f,c.childNodes);c=e.firstChild;c.textContent=""}else f.push(a.createTextNode(b));e.textContent="";e.innerHTML="";r(f,function(a){e.appendChild(a)});return e}function U(b){if(b instanceof U)return b;var a;
D(b)&&(b=da(b),a=!0);if(!(this instanceof U)){if(a&&"<"!=b.charAt(0))throw Lb("nosel");return new U(b)}if(a){a=Y;var c;b=(c=Qe.exec(b))?[a.createElement(c[1])]:(c=Ne(b,a))?c.childNodes:[]}vc(this,b)}function Mb(b){return b.cloneNode(!0)}function ob(b,a){a||pb(b);if(b.querySelectorAll)for(var c=b.querySelectorAll("*"),d=0,e=c.length;d<e;d++)pb(c[d])}function wc(b,a,c,d){if(G(d))throw Lb("offargs");var e=(d=qb(b))&&d.events;if(d&&d.handle)if(a)r(a.split(" "),function(a){F(c)?(b.removeEventListener(a,
e[a],!1),delete e[a]):Ia(e[a]||[],c)});else for(a in e)"$destroy"!==a&&b.removeEventListener(a,e[a],!1),delete e[a]}function pb(b,a){var c=b.ng339,d=c&&rb[c];d&&(a?delete d.data[a]:(d.handle&&(d.events.$destroy&&d.handle({},"$destroy"),wc(b)),delete rb[c],b.ng339=s))}function qb(b,a){var c=b.ng339,c=c&&rb[c];a&&!c&&(b.ng339=c=++Re,c=rb[c]={events:{},data:{},handle:s});return c}function Nb(b,a,c){if(uc(b)){var d=G(c),e=!d&&a&&!S(a),f=!a;b=(b=qb(b,!e))&&b.data;if(d)b[a]=c;else{if(f)return b;if(e)return b&&
b[a];B(b,a)}}}function Ob(b,a){return b.getAttribute?-1<(" "+(b.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ").indexOf(" "+a+" "):!1}function Pb(b,a){a&&b.setAttribute&&r(a.split(" "),function(a){b.setAttribute("class",da((" "+(b.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ").replace(" "+da(a)+" "," ")))})}function Qb(b,a){if(a&&b.setAttribute){var c=(" "+(b.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ");r(a.split(" "),function(a){a=da(a);-1===c.indexOf(" "+a+" ")&&(c+=a+" ")});
b.setAttribute("class",da(c))}}function vc(b,a){if(a)if(a.nodeType)b[b.length++]=a;else{var c=a.length;if("number"===typeof c&&a.window!==a){if(c)for(var d=0;d<c;d++)b[b.length++]=a[d]}else b[b.length++]=a}}function xc(b,a){return sb(b,"$"+(a||"ngController")+"Controller")}function sb(b,a,c){9==b.nodeType&&(b=b.documentElement);for(a=H(a)?a:[a];b;){for(var d=0,e=a.length;d<e;d++)if((c=x.data(b,a[d]))!==s)return c;b=b.parentNode||11===b.nodeType&&b.host}}function yc(b){for(ob(b,!0);b.firstChild;)b.removeChild(b.firstChild)}
function zc(b,a){a||ob(b);var c=b.parentNode;c&&c.removeChild(b)}function Ac(b,a){var c=tb[a.toLowerCase()];return c&&Bc[pa(b)]&&c}function Se(b,a){var c=b.nodeName;return("INPUT"===c||"TEXTAREA"===c)&&Cc[a]}function Te(b,a){var c=function(c,e){c.isDefaultPrevented=function(){return c.defaultPrevented};var f=a[e||c.type],g=f?f.length:0;if(g){1<g&&(f=qa(f));for(var h=0;h<g;h++)f[h].call(b,c)}};c.elem=b;return c}function Ma(b,a){var c=b&&b.$$hashKey;if(c)return"function"===typeof c&&(c=b.$$hashKey()),
c;c=typeof b;return c="function"==c||"object"==c&&null!==b?b.$$hashKey=c+":"+(a||md)():c+":"+b}function $a(b,a){if(a){var c=0;this.nextUid=function(){return++c}}r(b,this.put,this)}function Ue(b){return(b=b.toString().replace(Dc,"").match(Ec))?"function("+(b[1]||"").replace(/[\s\r\n]+/," ")+")":"fn"}function Rb(b,a,c){var d;if("function"===typeof b){if(!(d=b.$inject)){d=[];if(b.length){if(a)throw D(c)&&c||(c=b.name||Ue(b)),Na("strictdi",c);a=b.toString().replace(Dc,"");a=a.match(Ec);r(a[1].split(Ve),
function(a){a.replace(We,function(a,b,c){d.push(c)})})}b.$inject=d}}else H(b)?(a=b.length-1,kb(b[a],"fn"),d=b.slice(0,a)):kb(b,"fn",!0);return d}function Hb(b,a){function c(a){return function(b,c){if(S(b))r(b,cc(a));else return a(b,c)}}function d(a,b){La(a,"service");if(E(b)||H(b))b=p.instantiate(b);if(!b.$get)throw Na("pget",a);return n[a+"Provider"]=b}function e(a,b){return d(a,{$get:b})}function f(a){var b=[],c;r(a,function(a){function d(a){var b,c;b=0;for(c=a.length;b<c;b++){var e=a[b],f=p.get(e[0]);
f[e[1]].apply(f,e[2])}}if(!k.get(a)){k.put(a,!0);try{D(a)?(c=Ya(a),b=b.concat(f(c.requires)).concat(c._runBlocks),d(c._invokeQueue),d(c._configBlocks)):E(a)?b.push(p.invoke(a)):H(a)?b.push(p.invoke(a)):kb(a,"module")}catch(e){throw H(a)&&(a=a[a.length-1]),e.message&&e.stack&&-1==e.stack.indexOf(e.message)&&(e=e.message+"\n"+e.stack),Na("modulerr",a,e.stack||e.message||e);}}});return b}function g(b,c){function d(a){if(b.hasOwnProperty(a)){if(b[a]===h)throw Na("cdep",a+" <- "+m.join(" <- "));return b[a]}try{return m.unshift(a),
b[a]=h,b[a]=c(a)}catch(e){throw b[a]===h&&delete b[a],e;}finally{m.shift()}}function e(b,c,f,h){"string"===typeof f&&(h=f,f=null);var g=[];h=Rb(b,a,h);var m,l,k;l=0;for(m=h.length;l<m;l++){k=h[l];if("string"!==typeof k)throw Na("itkn",k);g.push(f&&f.hasOwnProperty(k)?f[k]:d(k))}H(b)&&(b=b[m]);return b.apply(c,g)}return{invoke:e,instantiate:function(a,b,c){var d=function(){};d.prototype=(H(a)?a[a.length-1]:a).prototype;d=new d;a=e(a,d,b,c);return S(a)||E(a)?a:d},get:d,annotate:Rb,has:function(a){return n.hasOwnProperty(a+
"Provider")||b.hasOwnProperty(a)}}}a=!0===a;var h={},m=[],k=new $a([],!0),n={$provide:{provider:c(d),factory:c(e),service:c(function(a,b){return e(a,["$injector",function(a){return a.instantiate(b)}])}),value:c(function(a,b){return e(a,fa(b))}),constant:c(function(a,b){La(a,"constant");n[a]=b;l[a]=b}),decorator:function(a,b){var c=p.get(a+"Provider"),d=c.$get;c.$get=function(){var a=q.invoke(d,c);return q.invoke(b,null,{$delegate:a})}}}},p=n.$injector=g(n,function(){throw Na("unpr",m.join(" <- "));
}),l={},q=l.$injector=g(l,function(a){var b=p.get(a+"Provider");return q.invoke(b.$get,b,s,a)});r(f(b),function(a){q.invoke(a||y)});return q}function ke(){var b=!0;this.disableAutoScrolling=function(){b=!1};this.$get=["$window","$location","$rootScope",function(a,c,d){function e(a){var b=null;r(a,function(a){b||"a"!==pa(a)||(b=a)});return b}function f(){var b=c.hash(),d;b?(d=g.getElementById(b))?d.scrollIntoView():(d=e(g.getElementsByName(b)))?d.scrollIntoView():"top"===b&&a.scrollTo(0,0):a.scrollTo(0,
0)}var g=a.document;b&&d.$watch(function(){return c.hash()},function(){d.$evalAsync(f)});return f}]}function Ke(){this.$get=["$$rAF","$timeout",function(b,a){return b.supported?function(a){return b(a)}:function(b){return a(b,0,!1)}}]}function Xe(b,a,c,d){function e(a){try{a.apply(null,Va.call(arguments,1))}finally{if(t--,0===t)for(;v.length;)try{v.pop()()}catch(b){c.error(b)}}}function f(a,b){(function ea(){r(w,function(a){a()});A=b(ea,a)})()}function g(){W=null;O!=h.url()&&(O=h.url(),r(C,function(a){a(h.url())}))}
var h=this,m=a[0],k=b.location,n=b.history,p=b.setTimeout,l=b.clearTimeout,q={};h.isMock=!1;var t=0,v=[];h.$$completeOutstandingRequest=e;h.$$incOutstandingRequestCount=function(){t++};h.notifyWhenNoOutstandingRequests=function(a){r(w,function(a){a()});0===t?a():v.push(a)};var w=[],A;h.addPollFn=function(a){F(A)&&f(100,p);w.push(a);return a};var O=k.href,z=a.find("base"),W=null;h.url=function(a,c){k!==b.location&&(k=b.location);n!==b.history&&(n=b.history);if(a){if(O!=a)return O=a,d.history?c?n.replaceState(null,
"",a):(n.pushState(null,"",a),z.attr("href",z.attr("href"))):(W=a,c?k.replace(a):k.href=a),h}else return W||k.href.replace(/%27/g,"'")};var C=[],Z=!1;h.onUrlChange=function(a){if(!Z){if(d.history)x(b).on("popstate",g);if(d.hashchange)x(b).on("hashchange",g);else h.addPollFn(g);Z=!0}C.push(a);return a};h.$$checkUrlChange=g;h.baseHref=function(){var a=z.attr("href");return a?a.replace(/^(https?\:)?\/\/[^\/]*/,""):""};var N={},L="",T=h.baseHref();h.cookies=function(a,b){var d,e,f,h;if(a)b===s?m.cookie=
encodeURIComponent(a)+"=;path="+T+";expires=Thu, 01 Jan 1970 00:00:00 GMT":D(b)&&(d=(m.cookie=encodeURIComponent(a)+"="+encodeURIComponent(b)+";path="+T).length+1,4096<d&&c.warn("Cookie '"+a+"' possibly not set or overflowed because it was too large ("+d+" > 4096 bytes)!"));else{if(m.cookie!==L)for(L=m.cookie,d=L.split("; "),N={},f=0;f<d.length;f++)e=d[f],h=e.indexOf("="),0<h&&(a=decodeURIComponent(e.substring(0,h)),N[a]===s&&(N[a]=decodeURIComponent(e.substring(h+1))));return N}};h.defer=function(a,
b){var c;t++;c=p(function(){delete q[c];e(a)},b||0);q[c]=!0;return c};h.defer.cancel=function(a){return q[a]?(delete q[a],l(a),e(y),!0):!1}}function me(){this.$get=["$window","$log","$sniffer","$document",function(b,a,c,d){return new Xe(b,d,a,c)}]}function ne(){this.$get=function(){function b(b,d){function e(a){a!=p&&(l?l==a&&(l=a.n):l=a,f(a.n,a.p),f(a,p),p=a,p.n=null)}function f(a,b){a!=b&&(a&&(a.p=b),b&&(b.n=a))}if(b in a)throw Q("$cacheFactory")("iid",b);var g=0,h=B({},d,{id:b}),m={},k=d&&d.capacity||
Number.MAX_VALUE,n={},p=null,l=null;return a[b]={put:function(a,b){if(k<Number.MAX_VALUE){var c=n[a]||(n[a]={key:a});e(c)}if(!F(b))return a in m||g++,m[a]=b,g>k&&this.remove(l.key),b},get:function(a){if(k<Number.MAX_VALUE){var b=n[a];if(!b)return;e(b)}return m[a]},remove:function(a){if(k<Number.MAX_VALUE){var b=n[a];if(!b)return;b==p&&(p=b.p);b==l&&(l=b.n);f(b.n,b.p);delete n[a]}delete m[a];g--},removeAll:function(){m={};g=0;n={};p=l=null},destroy:function(){n=h=m=null;delete a[b]},info:function(){return B({},
h,{size:g})}}}var a={};b.info=function(){var b={};r(a,function(a,e){b[e]=a.info()});return b};b.get=function(b){return a[b]};return b}}function Ee(){this.$get=["$cacheFactory",function(b){return b("templates")}]}function mc(b,a){var c={},d=/^\s*directive\:\s*([\d\w_\-]+)\s+(.*)$/,e=/(([\d\w_\-]+)(?:\:([^;]+))?;?)/,f=od("ngSrc,ngSrcset,src,srcset"),g=/^(on[a-z]+|formaction)$/;this.directive=function k(a,d){La(a,"directive");D(a)?(Jb(d,"directiveFactory"),c.hasOwnProperty(a)||(c[a]=[],b.factory(a+"Directive",
["$injector","$exceptionHandler",function(b,d){var e=[];r(c[a],function(c,f){try{var h=b.invoke(c);E(h)?h={compile:fa(h)}:!h.compile&&h.link&&(h.compile=fa(h.link));h.priority=h.priority||0;h.index=f;h.name=h.name||a;h.require=h.require||h.controller&&h.name;h.restrict=h.restrict||"EA";e.push(h)}catch(g){d(g)}});return e}])),c[a].push(d)):r(a,cc(k));return this};this.aHrefSanitizationWhitelist=function(b){return G(b)?(a.aHrefSanitizationWhitelist(b),this):a.aHrefSanitizationWhitelist()};this.imgSrcSanitizationWhitelist=
function(b){return G(b)?(a.imgSrcSanitizationWhitelist(b),this):a.imgSrcSanitizationWhitelist()};var h=!0;this.debugInfoEnabled=function(a){return G(a)?(h=a,this):h};this.$get=["$injector","$interpolate","$exceptionHandler","$templateRequest","$parse","$controller","$rootScope","$document","$sce","$animate","$$sanitizeUri",function(a,b,p,l,q,t,v,w,A,O,z){function W(a,b){try{a.addClass(b)}catch(c){}}function C(a,b,c,d,e){a instanceof x||(a=x(a));r(a,function(b,c){3==b.nodeType&&b.nodeValue.match(/\S+/)&&
(a[c]=x(b).wrap("<span></span>").parent()[0])});var f=Z(a,b,a,c,d,e);C.$$addScopeClass(a);var h=null,g=a,l;return function(b,c,d,e,k){Jb(b,"scope");h||(h=(k=k&&k[0])?"foreignobject"!==pa(k)&&k.toString().match(/SVG/)?"svg":"html":"html");"html"!==h&&a[0]!==l&&(g=x(U(h,x("<div>").append(a).html())));l=a[0];k=c?Ka.clone.call(g):g;if(d)for(var p in d)k.data("$"+p+"Controller",d[p].instance);C.$$addScopeInfo(k,b);c&&c(k,b);f&&f(b,k,k,e);return k}}function Z(a,b,c,d,e,f){function h(a,c,d,e){var f,l,k,
p,n,q,O;if(v)for(O=Array(c.length),p=0;p<g.length;p+=3)f=g[p],O[f]=c[f];else O=c;p=0;for(n=g.length;p<n;)l=O[g[p++]],c=g[p++],f=g[p++],c?(c.scope?(k=a.$new(),C.$$addScopeInfo(x(l),k)):k=a,q=c.transcludeOnThisElement?N(a,c.transclude,e,c.elementTranscludeOnThisElement):!c.templateOnThisElement&&e?e:!e&&b?N(a,b):null,c(f,k,l,d,q)):f&&f(a,l.childNodes,s,e)}for(var g=[],l,k,p,n,v,q=0;q<a.length;q++){l=new Sb;k=L(a[q],[],l,0===q?d:s,e);(f=k.length?u(k,a[q],l,b,c,null,[],[],f):null)&&f.scope&&C.$$addScopeClass(l.$$element);
l=f&&f.terminal||!(p=a[q].childNodes)||!p.length?null:Z(p,f?(f.transcludeOnThisElement||!f.templateOnThisElement)&&f.transclude:b);if(f||l)g.push(q,f,l),n=!0,v=v||f;f=null}return n?h:null}function N(a,b,c,d){return function(e,f,h,g){var l=!1;e||(e=a.$new(),l=e.$$transcluded=!0);f=b(e,f,h,c,g);if(l&&!d)f.on("$destroy",function(){e.$destroy()});return f}}function L(b,f,h,g,l){var p=h.$attr,n;switch(b.nodeType){case 1:ea(f,va(pa(b)),"E",g,l);for(var v,q,O,t=b.attributes,A=0,z=t&&t.length;A<z;A++){var w=
!1,N=!1;v=t[A];if(!aa||8<=aa||v.specified){n=v.name;v=da(v.value);q=va(n);if(O=J.test(q))n=Wa(q.substr(6),"-");var W=q.replace(/(Start|End)$/,""),C;a:{var r=W;if(c.hasOwnProperty(r)){C=void 0;for(var r=a.get(r+"Directive"),u=0,T=r.length;u<T;u++)if(C=r[u],C.multiElement){C=!0;break a}}C=!1}C&&q===W+"Start"&&(w=n,N=n.substr(0,n.length-5)+"end",n=n.substr(0,n.length-6));q=va(n.toLowerCase());p[q]=n;if(O||!h.hasOwnProperty(q))h[q]=v,Ac(b,q)&&(h[q]=!0);ya(b,f,v,q,O);ea(f,q,"A",g,l,w,N)}}b=b.className;
if(D(b)&&""!==b)for(;n=e.exec(b);)q=va(n[2]),ea(f,q,"C",g,l)&&(h[q]=da(n[3])),b=b.substr(n.index+n[0].length);break;case 3:P(f,b.nodeValue);break;case 8:try{if(n=d.exec(b.nodeValue))q=va(n[1]),ea(f,q,"M",g,l)&&(h[q]=da(n[2]))}catch($){}}f.sort(F);return f}function T(a,b,c){var d=[],e=0;if(b&&a.hasAttribute&&a.hasAttribute(b)){do{if(!a)throw ka("uterdir",b,c);1==a.nodeType&&(a.hasAttribute(b)&&e++,a.hasAttribute(c)&&e--);d.push(a);a=a.nextSibling}while(0<e)}else d.push(a);return x(d)}function R(a,
b,c){return function(d,e,f,h,g){e=T(e[0],b,c);return a(d,e,f,h,g)}}function u(a,c,d,e,f,h,g,l,k){function v(a,b,c,d){if(a){c&&(a=R(a,c,d));a.require=I.require;a.directiveName=ha;if(u===I||I.$$isolateScope)a=ga(a,{isolateScope:!0});g.push(a)}if(b){c&&(b=R(b,c,d));b.require=I.require;b.directiveName=ha;if(u===I||I.$$isolateScope)b=ga(b,{isolateScope:!0});l.push(b)}}function O(a,b,c,d){var e,f="data",h=!1;if(D(b)){for(;"^"==(e=b.charAt(0))||"?"==e;)b=b.substr(1),"^"==e&&(f="inheritedData"),h=h||"?"==
e;e=null;d&&"data"===f&&(e=d[b])&&(e=e.instance);e=e||c[f]("$"+b+"Controller");if(!e&&!h)throw ka("ctreq",b,a);}else H(b)&&(e=[],r(b,function(b){e.push(O(a,b,c,d))}));return e}function A(a,e,f,h,k){function p(a,b,c){var d;Ta(a)||(c=b,b=a,a=s);B&&(d=T);c||(c=B?R.parent():R);return k(a,b,d,c)}var v,z,w,ma,T,$,R,M;c===f?(M=d,R=d.$$element):(R=x(f),M=new Sb(R,d));u&&(ma=e.$new(!0));$=k&&p;N&&(W={},T={},r(N,function(a){var b={$scope:a===u||a.$$isolateScope?ma:e,$element:R,$attrs:M,$transclude:$};w=a.controller;
"@"==w&&(w=M[a.name]);b=t(w,b,!0,a.controllerAs);T[a.name]=b;B||R.data("$"+a.name+"Controller",b.instance);W[a.name]=b}));if(u){var ea=/^\s*([@=&])(\??)\s*(\w*)\s*$/;C.$$addScopeInfo(R,ma,!0,!(Z&&(Z===u||Z===u.$$originalDirective)));C.$$addScopeClass(R,!0);h=W&&W[u.name];var L=ma;h&&h.identifier&&!0===u.bindToController&&(L=h.instance);r(u.scope,function(a,c){var d=a.match(ea)||[],f=d[3]||c,h="?"==d[2],d=d[1],g,l,k,p;ma.$$isolateBindings[c]=d+f;switch(d){case "@":M.$observe(f,function(a){ma[c]=a});
M.$$observers[f].$$scope=e;M[f]&&(L[c]=b(M[f])(e));break;case "=":if(h&&!M[f])break;l=q(M[f]);p=l.literal?ra:function(a,b){return a===b||a!==a&&b!==b};k=l.assign||function(){g=L[c]=l(e);throw ka("nonassign",M[f],u.name);};g=L[c]=l(e);h=e.$watch(q(M[f],function(a){p(a,L[c])||(p(a,g)?k(e,a=L[c]):L[c]=a);return g=a}),null,l.literal);ma.$on("$destroy",h);break;case "&":l=q(M[f]);L[c]=function(a){return l(e,a)};break;default:throw ka("iscp",u.name,c,a);}})}W&&(r(W,function(a){a()}),W=null);h=0;for(v=g.length;h<
v;h++)z=g[h],Fc(z,z.isolateScope?ma:e,R,M,z.require&&O(z.directiveName,z.require,R,T),$);h=e;u&&(u.template||null===u.templateUrl)&&(h=ma);a&&a(h,f.childNodes,s,k);for(h=l.length-1;0<=h;h--)z=l[h],Fc(z,z.isolateScope?ma:e,R,M,z.require&&O(z.directiveName,z.require,R,T),$)}k=k||{};for(var z=-Number.MAX_VALUE,w,N=k.controllerDirectives,W,u=k.newIsolateScopeDirective,Z=k.templateDirective,ea=k.nonTlbTranscludeDirective,y=!1,F=!1,B=k.hasElementTranscludeDirective,ca=d.$$element=x(c),I,ha,J,P=e,za,K=0,
ya=a.length;K<ya;K++){I=a[K];var ub=I.$$start,V=I.$$end;ub&&(ca=T(c,ub,V));J=s;if(z>I.priority)break;if(J=I.scope)I.templateUrl||(S(J)?(Q("new/isolated scope",u||w,I,ca),u=I):Q("new/isolated scope",u,I,ca)),w=w||I;ha=I.name;!I.templateUrl&&I.controller&&(J=I.controller,N=N||{},Q("'"+ha+"' controller",N[ha],I,ca),N[ha]=I);if(J=I.transclude)y=!0,I.$$tlb||(Q("transclusion",ea,I,ca),ea=I),"element"==J?(B=!0,z=I.priority,J=ca,ca=d.$$element=x(Y.createComment(" "+ha+": "+d[ha]+" ")),c=ca[0],M(f,Va.call(J,
0),c),P=C(J,e,z,h&&h.name,{nonTlbTranscludeDirective:ea})):(J=x(Mb(c)).contents(),ca.empty(),P=C(J,e));if(I.template)if(F=!0,Q("template",Z,I,ca),Z=I,J=E(I.template)?I.template(ca,d):I.template,J=X(J),I.replace){h=I;J=Kb.test(J)?x(U(I.templateNamespace,da(J))):[];c=J[0];if(1!=J.length||1!==c.nodeType)throw ka("tplrt",ha,"");M(f,ca,c);ya={$attr:{}};J=L(c,[],ya);var aa=a.splice(K+1,a.length-(K+1));u&&$(J);a=a.concat(J).concat(aa);G(d,ya);ya=a.length}else ca.html(J);if(I.templateUrl)F=!0,Q("template",
Z,I,ca),Z=I,I.replace&&(h=I),A=Ye(a.splice(K,a.length-K),ca,d,f,y&&P,g,l,{controllerDirectives:N,newIsolateScopeDirective:u,templateDirective:Z,nonTlbTranscludeDirective:ea}),ya=a.length;else if(I.compile)try{za=I.compile(ca,d,P),E(za)?v(null,za,ub,V):za&&v(za.pre,za.post,ub,V)}catch(ba){p(ba,ta(ca))}I.terminal&&(A.terminal=!0,z=Math.max(z,I.priority))}A.scope=w&&!0===w.scope;A.transcludeOnThisElement=y;A.elementTranscludeOnThisElement=B;A.templateOnThisElement=F;A.transclude=P;k.hasElementTranscludeDirective=
B;return A}function $(a){for(var b=0,c=a.length;b<c;b++)a[b]=ec(a[b],{$$isolateScope:!0})}function ea(b,d,e,f,h,g,l){if(d===h)return null;h=null;if(c.hasOwnProperty(d)){var n;d=a.get(d+"Directive");for(var v=0,q=d.length;v<q;v++)try{n=d[v],(f===s||f>n.priority)&&-1!=n.restrict.indexOf(e)&&(g&&(n=ec(n,{$$start:g,$$end:l})),b.push(n),h=n)}catch(O){p(O)}}return h}function G(a,b){var c=b.$attr,d=a.$attr,e=a.$$element;r(a,function(d,e){"$"!=e.charAt(0)&&(b[e]&&b[e]!==d&&(d+=("style"===e?";":" ")+b[e]),
a.$set(e,d,!0,c[e]))});r(b,function(b,f){"class"==f?(W(e,b),a["class"]=(a["class"]?a["class"]+" ":"")+b):"style"==f?(e.attr("style",e.attr("style")+";"+b),a.style=(a.style?a.style+";":"")+b):"$"==f.charAt(0)||a.hasOwnProperty(f)||(a[f]=b,d[f]=c[f])})}function Ye(a,b,c,d,e,f,h,g){var k=[],p,n,v=b[0],q=a.shift(),O=B({},q,{templateUrl:null,transclude:null,replace:null,$$originalDirective:q}),t=E(q.templateUrl)?q.templateUrl(b,c):q.templateUrl,z=q.templateNamespace;b.empty();l(A.getTrustedResourceUrl(t)).then(function(l){var A,
w;l=X(l);if(q.replace){l=Kb.test(l)?x(U(z,da(l))):[];A=l[0];if(1!=l.length||1!==A.nodeType)throw ka("tplrt",q.name,t);l={$attr:{}};M(d,b,A);var C=L(A,[],l);S(q.scope)&&$(C);a=C.concat(a);G(c,l)}else A=v,b.html(l);a.unshift(O);p=u(a,A,c,e,b,q,f,h,g);r(d,function(a,c){a==A&&(d[c]=b[0])});for(n=Z(b[0].childNodes,e);k.length;){l=k.shift();w=k.shift();var R=k.shift(),T=k.shift(),C=b[0];if(w!==v){var ea=w.className;g.hasElementTranscludeDirective&&q.replace||(C=Mb(A));M(R,x(w),C);W(x(C),ea)}w=p.transcludeOnThisElement?
N(l,p.transclude,T):T;p(n,l,C,d,w)}k=null});return function(a,b,c,d,e){a=e;k?(k.push(b),k.push(c),k.push(d),k.push(a)):(p.transcludeOnThisElement&&(a=N(b,p.transclude,e)),p(n,b,c,d,a))}}function F(a,b){var c=b.priority-a.priority;return 0!==c?c:a.name!==b.name?a.name<b.name?-1:1:a.index-b.index}function Q(a,b,c,d){if(b)throw ka("multidir",b.name,c.name,a,ta(d));}function P(a,c){var d=b(c,!0);d&&a.push({priority:0,compile:function(a){a=a.parent();var b=!!a.length;b&&C.$$addBindingClass(a);return function(a,
c){var e=c.parent();b||C.$$addBindingClass(e);C.$$addBindingInfo(e,d.expressions);a.$watch(d,function(a){c[0].nodeValue=a})}}})}function U(a,b){a=K(a||"html");switch(a){case "svg":case "math":var c=Y.createElement("div");c.innerHTML="<"+a+">"+b+"</"+a+">";return c.childNodes[0].childNodes;default:return b}}function za(a,b){if("srcdoc"==b)return A.HTML;var c=pa(a);if("xlinkHref"==b||"form"==c&&"action"==b||"img"!=c&&("src"==b||"ngSrc"==b))return A.RESOURCE_URL}function ya(a,c,d,e,h){var l=b(d,!0);
if(l){if("multiple"===e&&"select"===pa(a))throw ka("selmulti",ta(a));c.push({priority:100,compile:function(){return{pre:function(c,d,k){d=k.$$observers||(k.$$observers={});if(g.test(e))throw ka("nodomevents");if(l=b(k[e],!0,za(a,e),f[e]||h))k[e]=l(c),(d[e]||(d[e]=[])).$$inter=!0,(k.$$observers&&k.$$observers[e].$$scope||c).$watch(l,function(a,b){"class"===e&&a!=b?k.$updateClass(a,b):k.$set(e,a)})}}}})}}function M(a,b,c){var d=b[0],e=b.length,f=d.parentNode,h,g;if(a)for(h=0,g=a.length;h<g;h++)if(a[h]==
d){a[h++]=c;g=h+e-1;for(var l=a.length;h<l;h++,g++)g<l?a[h]=a[g]:delete a[h];a.length-=e-1;a.context===d&&(a.context=c);break}f&&f.replaceChild(c,d);a=Y.createDocumentFragment();a.appendChild(d);x(c).data(x(d).data());ua?(Ib=!0,ua.cleanData([d])):delete x.cache[d[x.expando]];d=1;for(e=b.length;d<e;d++)f=b[d],x(f).remove(),a.appendChild(f),delete b[d];b[0]=c;b.length=1}function ga(a,b){return B(function(){return a.apply(null,arguments)},a,b)}function Fc(a,b,c,d,e,f){try{a(b,c,d,e,f)}catch(h){p(h,ta(c))}}
var Sb=function(a,b){if(b){var c=Object.keys(b),d,e,f;d=0;for(e=c.length;d<e;d++)f=c[d],this[f]=b[f]}else this.$attr={};this.$$element=a};Sb.prototype={$normalize:va,$addClass:function(a){a&&0<a.length&&O.addClass(this.$$element,a)},$removeClass:function(a){a&&0<a.length&&O.removeClass(this.$$element,a)},$updateClass:function(a,b){var c=Gc(a,b);c&&c.length&&O.addClass(this.$$element,c);(c=Gc(b,a))&&c.length&&O.removeClass(this.$$element,c)},$set:function(a,b,c,d){var e=this.$$element[0],f=Ac(e,a),
h=Se(e,a),e=a;f?(this.$$element.prop(a,b),d=f):h&&(this[h]=b,e=h);this[a]=b;d?this.$attr[a]=d:(d=this.$attr[a])||(this.$attr[a]=d=Wa(a,"-"));f=pa(this.$$element);if("a"===f&&"href"===a||"img"===f&&"src"===a)this[a]=b=z(b,"src"===a);!1!==c&&(null===b||b===s?this.$$element.removeAttr(d):this.$$element.attr(d,b));(a=this.$$observers)&&r(a[e],function(a){try{a(b)}catch(c){p(c)}})},$observe:function(a,b){var c=this,d=c.$$observers||(c.$$observers={}),e=d[a]||(d[a]=[]);e.push(b);v.$evalAsync(function(){e.$$inter||
b(c[a])});return function(){Ia(e,b)}}};var ha=b.startSymbol(),V=b.endSymbol(),X="{{"==ha||"}}"==V?Fa:function(a){return a.replace(/\{\{/g,ha).replace(/}}/g,V)},J=/^ngAttr[A-Z]/;C.$$addBindingInfo=h?function(a,b){var c=a.data("$binding")||[];H(b)?c=c.concat(b):c.push(b);a.data("$binding",c)}:y;C.$$addBindingClass=h?function(a){W(a,"ng-binding")}:y;C.$$addScopeInfo=h?function(a,b,c,d){a.data(c?d?"$isolateScopeNoTemplate":"$isolateScope":"$scope",b)}:y;C.$$addScopeClass=h?function(a,b){W(a,b?"ng-isolate-scope":
"ng-scope")}:y;return C}]}function va(b){return Za(b.replace(Ze,""))}function Gc(b,a){var c="",d=b.split(/\s+/),e=a.split(/\s+/),f=0;a:for(;f<d.length;f++){for(var g=d[f],h=0;h<e.length;h++)if(g==e[h])continue a;c+=(0<c.length?" ":"")+g}return c}function oe(){var b={},a=!1,c=/^(\S+)(\s+as\s+(\w+))?$/;this.register=function(a,c){La(a,"controller");S(a)?B(b,a):b[a]=c};this.allowGlobals=function(){a=!0};this.$get=["$injector","$window",function(d,e){function f(a,b,c,d){if(!a||!S(a.$scope))throw Q("$controller")("noscp",
d,b);a.$scope[b]=c}return function(g,h,m,k){var n,p,l;m=!0===m;k&&D(k)&&(l=k);D(g)&&(k=g.match(c),p=k[1],l=l||k[3],g=b.hasOwnProperty(p)?b[p]:lc(h.$scope,p,!0)||(a?lc(e,p,!0):s),kb(g,p,!0));if(m)return m=function(){},m.prototype=(H(g)?g[g.length-1]:g).prototype,n=new m,l&&f(h,l,n,p||g.name),B(function(){d.invoke(g,n,h,p);return n},{instance:n,identifier:l});n=d.instantiate(g,h,p);l&&f(h,l,n,p||g.name);return n}}]}function pe(){this.$get=["$window",function(b){return x(b.document)}]}function qe(){this.$get=
["$log",function(b){return function(a,c){b.error.apply(b,arguments)}}]}function Hc(b){var a={},c,d,e;if(!b)return a;r(b.split("\n"),function(b){e=b.indexOf(":");c=K(da(b.substr(0,e)));d=da(b.substr(e+1));c&&(a[c]=a[c]?a[c]+", "+d:d)});return a}function Ic(b){var a=S(b)?b:s;return function(c){a||(a=Hc(b));return c?a[K(c)]||null:a}}function Jc(b,a,c){if(E(c))return c(b,a);r(c,function(c){b=c(b,a)});return b}function te(){var b=/^\s*(\[|\{[^\{])/,a=/[\}\]]\s*$/,c=/^\)\]\}',?\n/,d={"Content-Type":"application/json;charset=utf-8"},
e=this.defaults={transformResponse:[function(d){D(d)&&(d=d.replace(c,""),b.test(d)&&a.test(d)&&(d=gc(d)));return d}],transformRequest:[function(a){return S(a)&&"[object File]"!==Ha.call(a)&&"[object Blob]"!==Ha.call(a)?sa(a):a}],headers:{common:{Accept:"application/json, text/plain, */*"},post:qa(d),put:qa(d),patch:qa(d)},xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN"},f=!1;this.useApplyAsync=function(a){return G(a)?(f=!!a,this):f};var g=this.interceptors=[];this.$get=["$httpBackend","$browser",
"$cacheFactory","$rootScope","$q","$injector",function(a,b,c,d,p,l){function q(a){function b(a){var d=B({},a,{data:Jc(a.data,a.headers,c.transformResponse)});a=a.status;return 200<=a&&300>a?d:p.reject(d)}var c={method:"get",transformRequest:e.transformRequest,transformResponse:e.transformResponse},d=function(a){var b=e.headers,c=B({},a.headers),d,f,b=B({},b.common,b[K(a.method)]);a:for(d in b){a=K(d);for(f in c)if(K(f)===a)continue a;c[d]=b[d]}(function(a){var b;r(a,function(c,d){E(c)&&(b=c(),null!=
b?a[d]=b:delete a[d])})})(c);return c}(a);B(c,a);c.headers=d;c.method=mb(c.method);var f=[function(a){d=a.headers;var c=Jc(a.data,Ic(d),a.transformRequest);F(c)&&r(d,function(a,b){"content-type"===K(b)&&delete d[b]});F(a.withCredentials)&&!F(e.withCredentials)&&(a.withCredentials=e.withCredentials);return t(a,c,d).then(b,b)},s],h=p.when(c);for(r(A,function(a){(a.request||a.requestError)&&f.unshift(a.request,a.requestError);(a.response||a.responseError)&&f.push(a.response,a.responseError)});f.length;){a=
f.shift();var g=f.shift(),h=h.then(a,g)}h.success=function(a){h.then(function(b){a(b.data,b.status,b.headers,c)});return h};h.error=function(a){h.then(null,function(b){a(b.data,b.status,b.headers,c)});return h};return h}function t(c,g,l){function k(a,b,c,e){function h(){A(b,a,c,e)}R&&(200<=a&&300>a?R.put($,[a,b,Hc(c),e]):R.remove($));f?d.$applyAsync(h):(h(),d.$$phase||d.$apply())}function A(a,b,d,e){b=Math.max(b,0);(200<=b&&300>b?r.resolve:r.reject)({data:a,status:b,headers:Ic(d),config:c,statusText:e})}
function t(){var a=Ca(q.pendingRequests,c);-1!==a&&q.pendingRequests.splice(a,1)}var r=p.defer(),T=r.promise,R,u,$=v(c.url,c.params);q.pendingRequests.push(c);T.then(t,t);!c.cache&&!e.cache||!1===c.cache||"GET"!==c.method&&"JSONP"!==c.method||(R=S(c.cache)?c.cache:S(e.cache)?e.cache:w);if(R)if(u=R.get($),G(u)){if(u&&E(u.then))return u.then(t,t),u;H(u)?A(u[1],u[0],qa(u[2]),u[3]):A(u,200,{},"OK")}else R.put($,T);F(u)&&((u=Kc(c.url)?b.cookies()[c.xsrfCookieName||e.xsrfCookieName]:s)&&(l[c.xsrfHeaderName||
e.xsrfHeaderName]=u),a(c.method,$,g,k,l,c.timeout,c.withCredentials,c.responseType));return T}function v(a,b){if(!b)return a;var c=[];ld(b,function(a,b){null===a||F(a)||(H(a)||(a=[a]),r(a,function(a){S(a)&&(ia(a)?a=a.toISOString():S(a)&&(a=sa(a)));c.push(Da(b)+"="+Da(a))}))});0<c.length&&(a+=(-1==a.indexOf("?")?"?":"&")+c.join("&"));return a}var w=c("$http"),A=[];r(g,function(a){A.unshift(D(a)?l.get(a):l.invoke(a))});q.pendingRequests=[];(function(a){r(arguments,function(a){q[a]=function(b,c){return q(B(c||
{},{method:a,url:b}))}})})("get","delete","head","jsonp");(function(a){r(arguments,function(a){q[a]=function(b,c,d){return q(B(d||{},{method:a,url:b,data:c}))}})})("post","put","patch");q.defaults=e;return q}]}function $e(b){if(8>=aa&&(!b.match(/^(get|post|head|put|delete|options)$/i)||!P.XMLHttpRequest))return new P.ActiveXObject("Microsoft.XMLHTTP");if(P.XMLHttpRequest)return new P.XMLHttpRequest;throw Q("$httpBackend")("noxhr");}function ue(){this.$get=["$browser","$window","$document",function(b,
a,c){return af(b,$e,b.defer,a.angular.callbacks,c[0])}]}function af(b,a,c,d,e){function f(a,b,c){var f=e.createElement("script"),n=null;f.type="text/javascript";f.src=a;f.async=!0;n=function(a){f.removeEventListener("load",n,!1);f.removeEventListener("error",n,!1);e.body.removeChild(f);f=null;var g=-1,q="unknown";a&&("load"!==a.type||d[b].called||(a={type:"error"}),q=a.type,g="error"===a.type?404:200);c&&c(g,q)};f.addEventListener("load",n,!1);f.addEventListener("error",n,!1);e.body.appendChild(f);
return n}return function(e,h,m,k,n,p,l,q){function t(){w=-1;O&&O();z&&z.abort()}function v(a,d,e,f,g){C&&c.cancel(C);O=z=null;0===d&&(d=e?200:"file"==Aa(h).protocol?404:0);a(1223===d?204:d,e,f,g||"");b.$$completeOutstandingRequest(y)}var w;b.$$incOutstandingRequestCount();h=h||b.url();if("jsonp"==K(e)){var A="_"+(d.counter++).toString(36);d[A]=function(a){d[A].data=a;d[A].called=!0};var O=f(h.replace("JSON_CALLBACK","angular.callbacks."+A),A,function(a,b){v(k,a,d[A].data,"",b);d[A]=y})}else{var z=
a(e);z.open(e,h,!0);r(n,function(a,b){G(a)&&z.setRequestHeader(b,a)});z.onreadystatechange=function(){if(z&&4==z.readyState){var a=null,b=null,c="";-1!==w&&(a=z.getAllResponseHeaders(),b="response"in z?z.response:z.responseText);-1===w&&10>aa||(c=z.statusText);v(k,w||z.status,b,a,c)}};l&&(z.withCredentials=!0);if(q)try{z.responseType=q}catch(W){if("json"!==q)throw W;}z.send(m||null)}if(0<p)var C=c(t,p);else p&&E(p.then)&&p.then(t)}}function re(){var b="{{",a="}}";this.startSymbol=function(a){return a?
(b=a,this):b};this.endSymbol=function(b){return b?(a=b,this):a};this.$get=["$parse","$exceptionHandler","$sce",function(c,d,e){function f(a){return"\\\\\\"+a}function g(f,g,q,t){function v(c){return c.replace(k,b).replace(n,a)}function w(a){try{var b;var c=q?e.getTrusted(q,a):e.valueOf(a);if(null==c)b="";else{switch(typeof c){case "string":break;case "number":c=""+c;break;default:c=sa(c)}b=c}return b}catch(h){a=Tb("interr",f,h.toString()),d(a)}}t=!!t;for(var A,O,z=0,r=[],C=[],Z=f.length,N=[],L=[];z<
Z;)if(-1!=(A=f.indexOf(b,z))&&-1!=(O=f.indexOf(a,A+h)))z!==A&&N.push(v(f.substring(z,A))),z=f.substring(A+h,O),r.push(z),C.push(c(z,w)),z=O+m,L.push(N.length),N.push("");else{z!==Z&&N.push(v(f.substring(z)));break}if(q&&1<N.length)throw Tb("noconcat",f);if(!g||r.length){var T=function(a){for(var b=0,c=r.length;b<c;b++){if(t&&F(a[b]))return;N[L[b]]=a[b]}return N.join("")};return B(function(a){var b=0,c=r.length,e=Array(c);try{for(;b<c;b++)e[b]=C[b](a);return T(e)}catch(h){a=Tb("interr",f,h.toString()),
d(a)}},{exp:f,expressions:r,$$watchDelegate:function(a,b,c){var d;return a.$watchGroup(C,function(c,e){var f=T(c);E(b)&&b.call(this,f,c!==e?d:f,a);d=f},c)}})}}var h=b.length,m=a.length,k=new RegExp(b.replace(/./g,f),"g"),n=new RegExp(a.replace(/./g,f),"g");g.startSymbol=function(){return b};g.endSymbol=function(){return a};return g}]}function se(){this.$get=["$rootScope","$window","$q","$$q",function(b,a,c,d){function e(e,h,m,k){var n=a.setInterval,p=a.clearInterval,l=0,q=G(k)&&!k,t=(q?d:c).defer(),
v=t.promise;m=G(m)?m:0;v.then(null,null,e);v.$$intervalId=n(function(){t.notify(l++);0<m&&l>=m&&(t.resolve(l),p(v.$$intervalId),delete f[v.$$intervalId]);q||b.$apply()},h);f[v.$$intervalId]=t;return v}var f={};e.cancel=function(b){return b&&b.$$intervalId in f?(f[b.$$intervalId].reject("canceled"),a.clearInterval(b.$$intervalId),delete f[b.$$intervalId],!0):!1};return e}]}function Ad(){this.$get=function(){return{id:"en-us",NUMBER_FORMATS:{DECIMAL_SEP:".",GROUP_SEP:",",PATTERNS:[{minInt:1,minFrac:0,
maxFrac:3,posPre:"",posSuf:"",negPre:"-",negSuf:"",gSize:3,lgSize:3},{minInt:1,minFrac:2,maxFrac:2,posPre:"\u00a4",posSuf:"",negPre:"(\u00a4",negSuf:")",gSize:3,lgSize:3}],CURRENCY_SYM:"$"},DATETIME_FORMATS:{MONTH:"January February March April May June July August September October November December".split(" "),SHORTMONTH:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),DAY:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),SHORTDAY:"Sun Mon Tue Wed Thu Fri Sat".split(" "),
AMPMS:["AM","PM"],medium:"MMM d, y h:mm:ss a",short:"M/d/yy h:mm a",fullDate:"EEEE, MMMM d, y",longDate:"MMMM d, y",mediumDate:"MMM d, y",shortDate:"M/d/yy",mediumTime:"h:mm:ss a",shortTime:"h:mm a"},pluralCat:function(b){return 1===b?"one":"other"}}}}function Ub(b){b=b.split("/");for(var a=b.length;a--;)b[a]=ib(b[a]);return b.join("/")}function Lc(b,a,c){b=Aa(b,c);a.$$protocol=b.protocol;a.$$host=b.hostname;a.$$port=V(b.port)||bf[b.protocol]||null}function Mc(b,a,c){var d="/"!==b.charAt(0);d&&(b=
"/"+b);b=Aa(b,c);a.$$path=decodeURIComponent(d&&"/"===b.pathname.charAt(0)?b.pathname.substring(1):b.pathname);a.$$search=ic(b.search);a.$$hash=decodeURIComponent(b.hash);a.$$path&&"/"!=a.$$path.charAt(0)&&(a.$$path="/"+a.$$path)}function wa(b,a){if(0===a.indexOf(b))return a.substr(b.length)}function ab(b){var a=b.indexOf("#");return-1==a?b:b.substr(0,a)}function Vb(b){return b.substr(0,ab(b).lastIndexOf("/")+1)}function Nc(b,a){this.$$html5=!0;a=a||"";var c=Vb(b);Lc(b,this,b);this.$$parse=function(a){var e=
wa(c,a);if(!D(e))throw vb("ipthprfx",a,c);Mc(e,this,b);this.$$path||(this.$$path="/");this.$$compose()};this.$$compose=function(){var a=Gb(this.$$search),b=this.$$hash?"#"+ib(this.$$hash):"";this.$$url=Ub(this.$$path)+(a?"?"+a:"")+b;this.$$absUrl=c+this.$$url.substr(1)};this.$$parseLinkUrl=function(d,e){if(e&&"#"===e[0])return this.hash(e.slice(1)),!0;var f,g;(f=wa(b,d))!==s?(g=f,g=(f=wa(a,f))!==s?c+(wa("/",f)||f):b+g):(f=wa(c,d))!==s?g=c+f:c==d+"/"&&(g=c);g&&this.$$parse(g);return!!g}}function Wb(b,
a){var c=Vb(b);Lc(b,this,b);this.$$parse=function(d){var e=wa(b,d)||wa(c,d),e="#"==e.charAt(0)?wa(a,e):this.$$html5?e:"";if(!D(e))throw vb("ihshprfx",d,a);Mc(e,this,b);d=this.$$path;var f=/^\/[A-Z]:(\/.*)/;0===e.indexOf(b)&&(e=e.replace(b,""));f.exec(e)||(d=(e=f.exec(d))?e[1]:d);this.$$path=d;this.$$compose()};this.$$compose=function(){var c=Gb(this.$$search),e=this.$$hash?"#"+ib(this.$$hash):"";this.$$url=Ub(this.$$path)+(c?"?"+c:"")+e;this.$$absUrl=b+(this.$$url?a+this.$$url:"")};this.$$parseLinkUrl=
function(a,c){return ab(b)==ab(a)?(this.$$parse(a),!0):!1}}function Oc(b,a){this.$$html5=!0;Wb.apply(this,arguments);var c=Vb(b);this.$$parseLinkUrl=function(d,e){if(e&&"#"===e[0])return this.hash(e.slice(1)),!0;var f,g;b==ab(d)?f=d:(g=wa(c,d))?f=b+a+g:c===d+"/"&&(f=c);f&&this.$$parse(f);return!!f};this.$$compose=function(){var c=Gb(this.$$search),e=this.$$hash?"#"+ib(this.$$hash):"";this.$$url=Ub(this.$$path)+(c?"?"+c:"")+e;this.$$absUrl=b+a+this.$$url}}function wb(b){return function(){return this[b]}}
function Pc(b,a){return function(c){if(F(c))return this[b];this[b]=a(c);this.$$compose();return this}}function ve(){var b="",a=!1;this.hashPrefix=function(a){return G(a)?(b=a,this):b};this.html5Mode=function(b){return G(b)?(a=b,this):a};this.$get=["$rootScope","$browser","$sniffer","$rootElement",function(c,d,e,f){function g(a){c.$broadcast("$locationChangeSuccess",h.absUrl(),a)}var h,m=d.baseHref(),k=d.url();if(a){if(!m)throw vb("nobase");m=k.substring(0,k.indexOf("/",k.indexOf("//")+2))+(m||"/");
e=e.history?Nc:Oc}else m=ab(k),e=Wb;h=new e(m,"#"+b);h.$$parseLinkUrl(k,k);var n=/^\s*(javascript|mailto):/i;f.on("click",function(a){if(!a.ctrlKey&&!a.metaKey&&2!=a.which){for(var b=x(a.target);"a"!==pa(b[0]);)if(b[0]===f[0]||!(b=b.parent())[0])return;var e=b.prop("href"),g=b.attr("href")||b.attr("xlink:href");S(e)&&"[object SVGAnimatedString]"===e.toString()&&(e=Aa(e.animVal).href);n.test(e)||!e||b.attr("target")||a.isDefaultPrevented()||!h.$$parseLinkUrl(e,g)||(a.preventDefault(),h.absUrl()!=d.url()&&
(c.$apply(),P.angular["ff-684208-preventDefault"]=!0))}});h.absUrl()!=k&&d.url(h.absUrl(),!0);d.onUrlChange(function(a){h.absUrl()!=a&&(c.$evalAsync(function(){var b=h.absUrl();h.$$parse(a);c.$broadcast("$locationChangeStart",a,b).defaultPrevented?(h.$$parse(b),d.url(b)):g(b)}),c.$$phase||c.$digest())});var p=0;c.$watch(function(){var a=d.url(),b=h.$$replace;p&&a==h.absUrl()||(p++,c.$evalAsync(function(){c.$broadcast("$locationChangeStart",h.absUrl(),a).defaultPrevented?h.$$parse(a):(d.url(h.absUrl(),
b),g(a))}));h.$$replace=!1;return p});return h}]}function we(){var b=!0,a=this;this.debugEnabled=function(a){return G(a)?(b=a,this):b};this.$get=["$window",function(c){function d(a){a instanceof Error&&(a.stack?a=a.message&&-1===a.stack.indexOf(a.message)?"Error: "+a.message+"\n"+a.stack:a.stack:a.sourceURL&&(a=a.message+"\n"+a.sourceURL+":"+a.line));return a}function e(a){var b=c.console||{},e=b[a]||b.log||y;a=!1;try{a=!!e.apply}catch(m){}return a?function(){var a=[];r(arguments,function(b){a.push(d(b))});
return e.apply(b,a)}:function(a,b){e(a,null==b?"":b)}}return{log:e("log"),info:e("info"),warn:e("warn"),error:e("error"),debug:function(){var c=e("debug");return function(){b&&c.apply(a,arguments)}}()}}]}function na(b,a){if("__defineGetter__"===b||"__defineSetter__"===b||"__lookupGetter__"===b||"__lookupSetter__"===b||"__proto__"===b)throw oa("isecfld",a);return b}function Oa(b,a){if(b){if(b.constructor===b)throw oa("isecfn",a);if(b.window===b)throw oa("isecwindow",a);if(b.children&&(b.nodeName||
b.prop&&b.attr&&b.find))throw oa("isecdom",a);if(b===Object)throw oa("isecobj",a);}return b}function xb(b,a,c,d){a=a.split(".");for(var e,f=0;1<a.length;f++){e=na(a.shift(),d);var g=b[e];g||(g={},b[e]=g);b=g}e=na(a.shift(),d);Oa(b,d);Oa(b[e],d);return b[e]=c}function Qc(b,a,c,d,e,f){na(b,f);na(a,f);na(c,f);na(d,f);na(e,f);return function(f,h){var m=h&&h.hasOwnProperty(b)?h:f;if(null==m)return m;m=m[b];if(!a)return m;if(null==m)return s;m=m[a];if(!c)return m;if(null==m)return s;m=m[c];if(!d)return m;
if(null==m)return s;m=m[d];return e?null==m?s:m=m[e]:m}}function Rc(b,a,c){var d=Sc[b];if(d)return d;var e=b.split("."),f=e.length;if(a.csp)d=6>f?Qc(e[0],e[1],e[2],e[3],e[4],c):function(a,b){var d=0,g;do g=Qc(e[d++],e[d++],e[d++],e[d++],e[d++],c)(a,b),b=s,a=g;while(d<f);return g};else{var g="";r(e,function(a,b){na(a,c);g+="if(s == null) return undefined;\ns="+(b?"s":'((l&&l.hasOwnProperty("'+a+'"))?l:s)')+"."+a+";\n"});g+="return s;";a=new Function("s","l",g);a.toString=fa(g);d=a}return Sc[b]=d}function xe(){var b=
Object.create(null),a={csp:!1};this.$get=["$filter","$sniffer",function(c,d){function e(a,b,c,d){var e,f;return e=a.$watch(function(a){return d(a)},function(a,c,d){f=a;E(b)&&b.apply(this,arguments);G(a)&&d.$$postDigest(function(){G(f)&&e()})},c)}function f(a,b,c,d){function e(a){var b=!0;r(a,function(a){G(a)||(b=!1)});return b}var f;return f=a.$watch(function(a){return d(a)},function(a,c,d){E(b)&&b.call(this,a,c,d);e(a)&&d.$$postDigest(function(){e(a)&&f()})},c)}function g(a,b,c,d){var e;return e=
a.$watch(function(a){return d(a)},function(a,c,d){E(b)&&b.apply(this,arguments);e()},c)}function h(a,b){if(!b)return a;var c=function(c,d){var e=a(c,d),f=b(e,c,d);return G(e)?f:e};c.$$watchDelegate=a.$$watchDelegate;return c}a.csp=d.csp;return function(d,k){var n,p,l;switch(typeof d){case "string":return l=d=d.trim(),n=b[l],n||(":"===d.charAt(0)&&":"===d.charAt(1)&&(p=!0,d=d.substring(2)),n=new Xb(a),n=(new bb(n,c,a)).parse(d),n.constant?n.$$watchDelegate=g:p&&(n.$$watchDelegate=n.literal?f:e),b[l]=
n),h(n,k);case "function":return h(d,k);default:return h(y,k)}}}]}function ze(){this.$get=["$rootScope","$exceptionHandler",function(b,a){return Tc(function(a){b.$evalAsync(a)},a)}]}function Ae(){this.$get=["$browser","$exceptionHandler",function(b,a){return Tc(function(a){b.defer(a)},a)}]}function Tc(b,a){function c(a,b,c){function d(b){return function(c){e||(e=!0,b.call(a,c))}}var e=!1;return[d(b),d(c)]}function d(){this.$$state={status:0}}function e(a,b){return function(c){b.call(a,c)}}function f(c){!c.processScheduled&&
c.pending&&(c.processScheduled=!0,b(function(){var b,d,e;e=c.pending;c.processScheduled=!1;c.pending=s;for(var f=0,h=e.length;f<h;++f){d=e[f][0];b=e[f][c.status];try{E(b)?d.resolve(b(c.value)):1===c.status?d.resolve(c.value):d.reject(c.value)}catch(g){d.reject(g),a(g)}}}))}function g(){this.promise=new d;this.resolve=e(this,this.resolve);this.reject=e(this,this.reject);this.notify=e(this,this.notify)}var h=Q("$q",TypeError);d.prototype={then:function(a,b,c){var d=new g;this.$$state.pending=this.$$state.pending||
[];this.$$state.pending.push([d,a,b,c]);0<this.$$state.status&&f(this.$$state);return d.promise},"catch":function(a){return this.then(null,a)},"finally":function(a,b){return this.then(function(b){return k(b,!0,a)},function(b){return k(b,!1,a)},b)}};g.prototype={resolve:function(a){this.promise.$$state.status||(a===this.promise?this.$$reject(h("qcycle",a)):this.$$resolve(a))},$$resolve:function(b){var d,e;e=c(this,this.$$resolve,this.$$reject);try{if(S(b)||E(b))d=b&&b.then;E(d)?(this.promise.$$state.status=
-1,d.call(b,e[0],e[1],this.notify)):(this.promise.$$state.value=b,this.promise.$$state.status=1,f(this.promise.$$state))}catch(h){e[1](h),a(h)}},reject:function(a){this.promise.$$state.status||this.$$reject(a)},$$reject:function(a){this.promise.$$state.value=a;this.promise.$$state.status=2;f(this.promise.$$state)},notify:function(c){var d=this.promise.$$state.pending;0>=this.promise.$$state.status&&d&&d.length&&b(function(){for(var b,e,f=0,h=d.length;f<h;f++){e=d[f][0];b=d[f][3];try{e.notify(E(b)?
b(c):c)}catch(g){a(g)}}})}};var m=function(a,b){var c=new g;b?c.resolve(a):c.reject(a);return c.promise},k=function(a,b,c){var d=null;try{E(c)&&(d=c())}catch(e){return m(e,!1)}return d&&E(d.then)?d.then(function(){return m(a,b)},function(a){return m(a,!1)}):m(a,b)},n=function(a,b,c,d){var e=new g;e.resolve(a);return e.promise.then(b,c,d)},p=function q(a){if(!E(a))throw h("norslvr",a);if(!(this instanceof q))return new q(a);var b=new g;a(function(a){b.resolve(a)},function(a){b.reject(a)});return b.promise};
p.defer=function(){return new g};p.reject=function(a){var b=new g;b.reject(a);return b.promise};p.when=n;p.all=function(a){var b=new g,c=0,d=H(a)?[]:{};r(a,function(a,e){c++;n(a).then(function(a){d.hasOwnProperty(e)||(d[e]=a,--c||b.resolve(d))},function(a){d.hasOwnProperty(e)||b.reject(a)})});0===c&&b.resolve(d);return b.promise};return p}function Je(){this.$get=["$window","$timeout",function(b,a){var c=b.requestAnimationFrame||b.webkitRequestAnimationFrame||b.mozRequestAnimationFrame,d=b.cancelAnimationFrame||
b.webkitCancelAnimationFrame||b.mozCancelAnimationFrame||b.webkitCancelRequestAnimationFrame,e=!!c,f=e?function(a){var b=c(a);return function(){d(b)}}:function(b){var c=a(b,16.66,!1);return function(){a.cancel(c)}};f.supported=e;return f}]}function ye(){var b=10,a=Q("$rootScope"),c=null,d=null;this.digestTtl=function(a){arguments.length&&(b=a);return b};this.$get=["$injector","$exceptionHandler","$parse","$browser",function(e,f,g,h){function m(){this.$id=++fb;this.$$phase=this.$parent=this.$$watchers=
this.$$nextSibling=this.$$prevSibling=this.$$childHead=this.$$childTail=null;this["this"]=this.$root=this;this.$$destroyed=!1;this.$$asyncQueue=[];this.$$postDigestQueue=[];this.$$listeners={};this.$$listenerCount={};this.$$isolateBindings={};this.$$applyAsyncQueue=[]}function k(b){if(t.$$phase)throw a("inprog",t.$$phase);t.$$phase=b}function n(a,b,c){do a.$$listenerCount[c]-=b,0===a.$$listenerCount[c]&&delete a.$$listenerCount[c];while(a=a.$parent)}function p(){}function l(){for(var a=t.$$applyAsyncQueue;a.length;)try{a.shift()()}catch(b){f(b)}d=
null}function q(){null===d&&(d=h.defer(function(){t.$apply(l)}))}m.prototype={constructor:m,$new:function(a){a?(a=new m,a.$root=this.$root,a.$$asyncQueue=this.$$asyncQueue,a.$$postDigestQueue=this.$$postDigestQueue):(this.$$ChildScope||(this.$$ChildScope=function(){this.$$watchers=this.$$nextSibling=this.$$childHead=this.$$childTail=null;this.$$listeners={};this.$$listenerCount={};this.$id=++fb;this.$$ChildScope=null},this.$$ChildScope.prototype=this),a=new this.$$ChildScope);a["this"]=a;a.$parent=
this;a.$$prevSibling=this.$$childTail;this.$$childHead?this.$$childTail=this.$$childTail.$$nextSibling=a:this.$$childHead=this.$$childTail=a;return a},$watch:function(a,b,d){var e=g(a);if(e.$$watchDelegate)return e.$$watchDelegate(this,b,d,e);var f=this.$$watchers,h={fn:b,last:p,get:e,exp:a,eq:!!d};c=null;E(b)||(h.fn=y);f||(f=this.$$watchers=[]);f.unshift(h);return function(){Ia(f,h);c=null}},$watchGroup:function(a,b){function c(){g=!1;k?(k=!1,b(e,e,h)):b(e,d,h)}var d=Array(a.length),e=Array(a.length),
f=[],h=this,g=!1,k=!0;if(!a.length){var l=!0;h.$evalAsync(function(){l&&b(e,e,h)});return function(){l=!1}}if(1===a.length)return this.$watch(a[0],function(a,c,f){e[0]=a;d[0]=c;b(e,a===c?e:d,f)});r(a,function(a,b){var k=h.$watch(a,function(a,f){e[b]=a;d[b]=f;g||(g=!0,h.$evalAsync(c))});f.push(k)});return function(){for(;f.length;)f.shift()()}},$watchCollection:function(a,b){var c=this,d,e,f,h=1<b.length,k=0,l=g(a,function(a){d=a;var b,c,f,h;if(S(d))if(eb(d))for(e!==m&&(e=m,q=e.length=0,k++),a=d.length,
q!==a&&(k++,e.length=q=a),b=0;b<a;b++)h=e[b],f=d[b],c=h!==h&&f!==f,c||h===f||(k++,e[b]=f);else{e!==n&&(e=n={},q=0,k++);a=0;for(b in d)d.hasOwnProperty(b)&&(a++,f=d[b],h=e[b],b in e?(c=h!==h&&f!==f,c||h===f||(k++,e[b]=f)):(q++,e[b]=f,k++));if(q>a)for(b in k++,e)d.hasOwnProperty(b)||(q--,delete e[b])}else e!==d&&(e=d,k++);return k}),m=[],n={},p=!0,q=0;return this.$watch(l,function(){p?(p=!1,b(d,d,c)):b(d,f,c);if(h)if(S(d))if(eb(d)){f=Array(d.length);for(var a=0;a<d.length;a++)f[a]=d[a]}else for(a in f=
{},d)Fb.call(d,a)&&(f[a]=d[a]);else f=d})},$digest:function(){var e,g,m,n,q=this.$$asyncQueue,r=this.$$postDigestQueue,C,s,N=b,L,T=[],R,u,$;k("$digest");h.$$checkUrlChange();this===t&&null!==d&&(h.defer.cancel(d),l());c=null;do{s=!1;for(L=this;q.length;){try{$=q.shift(),$.scope.$eval($.expression)}catch(G){f(G)}c=null}a:do{if(n=L.$$watchers)for(C=n.length;C--;)try{if(e=n[C])if((g=e.get(L))!==(m=e.last)&&!(e.eq?ra(g,m):"number"===typeof g&&"number"===typeof m&&isNaN(g)&&isNaN(m)))s=!0,c=e,e.last=e.eq?
Ja(g,null):g,e.fn(g,m===p?g:m,L),5>N&&(R=4-N,T[R]||(T[R]=[]),u=E(e.exp)?"fn: "+(e.exp.name||e.exp.toString()):e.exp,u+="; newVal: "+sa(g)+"; oldVal: "+sa(m),T[R].push(u));else if(e===c){s=!1;break a}}catch(x){f(x)}if(!(n=L.$$childHead||L!==this&&L.$$nextSibling))for(;L!==this&&!(n=L.$$nextSibling);)L=L.$parent}while(L=n);if((s||q.length)&&!N--)throw t.$$phase=null,a("infdig",b,sa(T));}while(s||q.length);for(t.$$phase=null;r.length;)try{r.shift()()}catch(y){f(y)}},$destroy:function(){if(!this.$$destroyed){var a=
this.$parent;this.$broadcast("$destroy");this.$$destroyed=!0;if(this!==t){for(var b in this.$$listenerCount)n(this,this.$$listenerCount[b],b);a.$$childHead==this&&(a.$$childHead=this.$$nextSibling);a.$$childTail==this&&(a.$$childTail=this.$$prevSibling);this.$$prevSibling&&(this.$$prevSibling.$$nextSibling=this.$$nextSibling);this.$$nextSibling&&(this.$$nextSibling.$$prevSibling=this.$$prevSibling);this.$parent=this.$$nextSibling=this.$$prevSibling=this.$$childHead=this.$$childTail=this.$root=null;
this.$$listeners={};this.$$watchers=this.$$asyncQueue=this.$$postDigestQueue=[];this.$destroy=this.$digest=this.$apply=y;this.$on=this.$watch=this.$watchGroup=function(){return y}}}},$eval:function(a,b){return g(a)(this,b)},$evalAsync:function(a){t.$$phase||t.$$asyncQueue.length||h.defer(function(){t.$$asyncQueue.length&&t.$digest()});this.$$asyncQueue.push({scope:this,expression:a})},$$postDigest:function(a){this.$$postDigestQueue.push(a)},$apply:function(a){try{return k("$apply"),this.$eval(a)}catch(b){f(b)}finally{t.$$phase=
null;try{t.$digest()}catch(c){throw f(c),c;}}},$applyAsync:function(a){function b(){c.$eval(a)}var c=this;a&&t.$$applyAsyncQueue.push(b);q()},$on:function(a,b){var c=this.$$listeners[a];c||(this.$$listeners[a]=c=[]);c.push(b);var d=this;do d.$$listenerCount[a]||(d.$$listenerCount[a]=0),d.$$listenerCount[a]++;while(d=d.$parent);var e=this;return function(){c[Ca(c,b)]=null;n(e,1,a)}},$emit:function(a,b){var c=[],d,e=this,h=!1,g={name:a,targetScope:e,stopPropagation:function(){h=!0},preventDefault:function(){g.defaultPrevented=
!0},defaultPrevented:!1},k=hb([g],arguments,1),l,m;do{d=e.$$listeners[a]||c;g.currentScope=e;l=0;for(m=d.length;l<m;l++)if(d[l])try{d[l].apply(null,k)}catch(n){f(n)}else d.splice(l,1),l--,m--;if(h)return g.currentScope=null,g;e=e.$parent}while(e);g.currentScope=null;return g},$broadcast:function(a,b){var c=this,d=this,e={name:a,targetScope:this,preventDefault:function(){e.defaultPrevented=!0},defaultPrevented:!1};if(!this.$$listenerCount[a])return e;for(var h=hb([e],arguments,1),g,k;c=d;){e.currentScope=
c;d=c.$$listeners[a]||[];g=0;for(k=d.length;g<k;g++)if(d[g])try{d[g].apply(null,h)}catch(l){f(l)}else d.splice(g,1),g--,k--;if(!(d=c.$$listenerCount[a]&&c.$$childHead||c!==this&&c.$$nextSibling))for(;c!==this&&!(d=c.$$nextSibling);)c=c.$parent}e.currentScope=null;return e}};var t=new m;return t}]}function Bd(){var b=/^\s*(https?|ftp|mailto|tel|file):/,a=/^\s*((https?|ftp|file|blob):|data:image\/)/;this.aHrefSanitizationWhitelist=function(a){return G(a)?(b=a,this):b};this.imgSrcSanitizationWhitelist=
function(b){return G(b)?(a=b,this):a};this.$get=function(){return function(c,d){var e=d?a:b,f;if(!aa||8<=aa)if(f=Aa(c).href,""!==f&&!f.match(e))return"unsafe:"+f;return c}}}function cf(b){if("self"===b)return b;if(D(b)){if(-1<b.indexOf("***"))throw Ba("iwcard",b);b=b.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g,"\\$1").replace(/\x08/g,"\\x08").replace("\\*\\*",".*").replace("\\*","[^:/.?&;]*");return new RegExp("^"+b+"$")}if(gb(b))return new RegExp("^"+b.source+"$");throw Ba("imatcher");}function Uc(b){var a=
[];G(b)&&r(b,function(b){a.push(cf(b))});return a}function Ce(){this.SCE_CONTEXTS=la;var b=["self"],a=[];this.resourceUrlWhitelist=function(a){arguments.length&&(b=Uc(a));return b};this.resourceUrlBlacklist=function(b){arguments.length&&(a=Uc(b));return a};this.$get=["$injector",function(c){function d(a,b){return"self"===a?Kc(b):!!a.exec(b.href)}function e(a){var b=function(a){this.$$unwrapTrustedValue=function(){return a}};a&&(b.prototype=new a);b.prototype.valueOf=function(){return this.$$unwrapTrustedValue()};
b.prototype.toString=function(){return this.$$unwrapTrustedValue().toString()};return b}var f=function(a){throw Ba("unsafe");};c.has("$sanitize")&&(f=c.get("$sanitize"));var g=e(),h={};h[la.HTML]=e(g);h[la.CSS]=e(g);h[la.URL]=e(g);h[la.JS]=e(g);h[la.RESOURCE_URL]=e(h[la.URL]);return{trustAs:function(a,b){var c=h.hasOwnProperty(a)?h[a]:null;if(!c)throw Ba("icontext",a,b);if(null===b||b===s||""===b)return b;if("string"!==typeof b)throw Ba("itype",a);return new c(b)},getTrusted:function(c,e){if(null===
e||e===s||""===e)return e;var g=h.hasOwnProperty(c)?h[c]:null;if(g&&e instanceof g)return e.$$unwrapTrustedValue();if(c===la.RESOURCE_URL){var g=Aa(e.toString()),p,l,q=!1;p=0;for(l=b.length;p<l;p++)if(d(b[p],g)){q=!0;break}if(q)for(p=0,l=a.length;p<l;p++)if(d(a[p],g)){q=!1;break}if(q)return e;throw Ba("insecurl",e.toString());}if(c===la.HTML)return f(e);throw Ba("unsafe");},valueOf:function(a){return a instanceof g?a.$$unwrapTrustedValue():a}}}]}function Be(){var b=!0;this.enabled=function(a){arguments.length&&
(b=!!a);return b};this.$get=["$parse","$sniffer","$sceDelegate",function(a,c,d){if(b&&c.msie&&8>c.msieDocumentMode)throw Ba("iequirks");var e=qa(la);e.isEnabled=function(){return b};e.trustAs=d.trustAs;e.getTrusted=d.getTrusted;e.valueOf=d.valueOf;b||(e.trustAs=e.getTrusted=function(a,b){return b},e.valueOf=Fa);e.parseAs=function(b,c){var d=a(c);return d.literal&&d.constant?d:a(c,function(a){return e.getTrusted(b,a)})};var f=e.parseAs,g=e.getTrusted,h=e.trustAs;r(la,function(a,b){var c=K(b);e[Za("parse_as_"+
c)]=function(b){return f(a,b)};e[Za("get_trusted_"+c)]=function(b){return g(a,b)};e[Za("trust_as_"+c)]=function(b){return h(a,b)}});return e}]}function De(){this.$get=["$window","$document",function(b,a){var c={},d=V((/android (\d+)/.exec(K((b.navigator||{}).userAgent))||[])[1]),e=/Boxee/i.test((b.navigator||{}).userAgent),f=a[0]||{},g=f.documentMode,h,m=/^(Moz|webkit|O|ms)(?=[A-Z])/,k=f.body&&f.body.style,n=!1,p=!1;if(k){for(var l in k)if(n=m.exec(l)){h=n[0];h=h.substr(0,1).toUpperCase()+h.substr(1);
break}h||(h="WebkitOpacity"in k&&"webkit");n=!!("transition"in k||h+"Transition"in k);p=!!("animation"in k||h+"Animation"in k);!d||n&&p||(n=D(f.body.style.webkitTransition),p=D(f.body.style.webkitAnimation))}return{history:!(!b.history||!b.history.pushState||4>d||e),hashchange:"onhashchange"in b&&(!g||7<g),hasEvent:function(a){if("input"==a&&9==aa)return!1;if(F(c[a])){var b=f.createElement("div");c[a]="on"+a in b}return c[a]},csp:Xa(),vendorPrefix:h,transitions:n,animations:p,android:d,msie:aa,msieDocumentMode:g}}]}
function Fe(){this.$get=["$templateCache","$http","$q",function(b,a,c){function d(e,f){function g(){h.totalPendingRequests--;if(!f)throw ka("tpload",e);return c.reject()}var h=d;h.totalPendingRequests++;return a.get(e,{cache:b}).then(function(a){a=a.data;if(!a||0===a.length)return g();h.totalPendingRequests--;b.put(e,a);return a},g)}d.totalPendingRequests=0;return d}]}function Ge(){this.$get=["$rootScope","$browser","$location",function(b,a,c){return{findBindings:function(a,b,c){a=a.getElementsByClassName("ng-binding");
var g=[];r(a,function(a){var d=xa.element(a).data("$binding");d&&r(d,function(d){c?(new RegExp("(^|\\s)"+b+"(\\s|\\||$)")).test(d)&&g.push(a):-1!=d.indexOf(b)&&g.push(a)})});return g},findModels:function(a,b,c){for(var g=["ng-","data-ng-","ng\\:"],h=0;h<g.length;++h){var m=a.querySelectorAll("["+g[h]+"model"+(c?"=":"*=")+'"'+b+'"]');if(m.length)return m}},getLocation:function(){return c.url()},setLocation:function(a){a!==c.url()&&(c.url(a),b.$digest())},whenStable:function(b){a.notifyWhenNoOutstandingRequests(b)}}}]}
function He(){this.$get=["$rootScope","$browser","$q","$$q","$exceptionHandler",function(b,a,c,d,e){function f(f,m,k){var n=G(k)&&!k,p=(n?d:c).defer(),l=p.promise;m=a.defer(function(){try{p.resolve(f())}catch(a){p.reject(a),e(a)}finally{delete g[l.$$timeoutId]}n||b.$apply()},m);l.$$timeoutId=m;g[m]=p;return l}var g={};f.cancel=function(b){return b&&b.$$timeoutId in g?(g[b.$$timeoutId].reject("canceled"),delete g[b.$$timeoutId],a.defer.cancel(b.$$timeoutId)):!1};return f}]}function Aa(b,a){var c=b;
aa&&(X.setAttribute("href",c),c=X.href);X.setAttribute("href",c);return{href:X.href,protocol:X.protocol?X.protocol.replace(/:$/,""):"",host:X.host,search:X.search?X.search.replace(/^\?/,""):"",hash:X.hash?X.hash.replace(/^#/,""):"",hostname:X.hostname,port:X.port,pathname:"/"===X.pathname.charAt(0)?X.pathname:"/"+X.pathname}}function Kc(b){b=D(b)?Aa(b):b;return b.protocol===Vc.protocol&&b.host===Vc.host}function Ie(){this.$get=fa(P)}function tc(b){function a(c,d){if(S(c)){var e={};r(c,function(b,
c){e[c]=a(c,b)});return e}return b.factory(c+"Filter",d)}this.register=a;this.$get=["$injector",function(a){return function(b){return a.get(b+"Filter")}}];a("currency",Wc);a("date",Xc);a("filter",df);a("json",ef);a("limitTo",ff);a("lowercase",gf);a("number",Yc);a("orderBy",Zc);a("uppercase",hf)}function df(){return function(b,a,c){if(!H(b))return b;var d=typeof c,e=[];e.check=function(a,b){for(var c=0;c<e.length;c++)if(!e[c](a,b))return!1;return!0};"function"!==d&&(c="boolean"===d&&c?function(a,b){return xa.equals(a,
b)}:function(a,b){if(a&&b&&"object"===typeof a&&"object"===typeof b){for(var d in a)if("$"!==d.charAt(0)&&Fb.call(a,d)&&c(a[d],b[d]))return!0;return!1}b=(""+b).toLowerCase();return-1<(""+a).toLowerCase().indexOf(b)});var f=function(a,b){if("string"==typeof b&&"!"===b.charAt(0))return!f(a,b.substr(1));switch(typeof a){case "boolean":case "number":case "string":return c(a,b);case "object":switch(typeof b){case "object":return c(a,b);default:for(var d in a)if("$"!==d.charAt(0)&&f(a[d],b))return!0}return!1;
case "array":for(d=0;d<a.length;d++)if(f(a[d],b))return!0;return!1;default:return!1}};switch(typeof a){case "boolean":case "number":case "string":a={$:a};case "object":for(var g in a)(function(b){"undefined"!==typeof a[b]&&e.push(function(c){return f("$"==b?c:c&&c[b],a[b])})})(g);break;case "function":e.push(a);break;default:return b}d=[];for(g=0;g<b.length;g++){var h=b[g];e.check(h,g)&&d.push(h)}return d}}function Wc(b){var a=b.NUMBER_FORMATS;return function(b,d){F(d)&&(d=a.CURRENCY_SYM);return null==
b?b:$c(b,a.PATTERNS[1],a.GROUP_SEP,a.DECIMAL_SEP,2).replace(/\u00A4/g,d)}}function Yc(b){var a=b.NUMBER_FORMATS;return function(b,d){return null==b?b:$c(b,a.PATTERNS[0],a.GROUP_SEP,a.DECIMAL_SEP,d)}}function $c(b,a,c,d,e){if(!isFinite(b)||S(b))return"";var f=0>b;b=Math.abs(b);var g=b+"",h="",m=[],k=!1;if(-1!==g.indexOf("e")){var n=g.match(/([\d\.]+)e(-?)(\d+)/);n&&"-"==n[2]&&n[3]>e+1?(g="0",b=0):(h=g,k=!0)}if(k)0<e&&-1<b&&1>b&&(h=b.toFixed(e));else{g=(g.split(ad)[1]||"").length;F(e)&&(e=Math.min(Math.max(a.minFrac,
g),a.maxFrac));b=+(Math.round(+(b.toString()+"e"+e)).toString()+"e"+-e);b=(""+b).split(ad);g=b[0];b=b[1]||"";var n=0,p=a.lgSize,l=a.gSize;if(g.length>=p+l)for(n=g.length-p,k=0;k<n;k++)0===(n-k)%l&&0!==k&&(h+=c),h+=g.charAt(k);for(k=n;k<g.length;k++)0===(g.length-k)%p&&0!==k&&(h+=c),h+=g.charAt(k);for(;b.length<e;)b+="0";e&&"0"!==e&&(h+=d+b.substr(0,e))}m.push(f?a.negPre:a.posPre);m.push(h);m.push(f?a.negSuf:a.posSuf);return m.join("")}function yb(b,a,c){var d="";0>b&&(d="-",b=-b);for(b=""+b;b.length<
a;)b="0"+b;c&&(b=b.substr(b.length-a));return d+b}function ba(b,a,c,d){c=c||0;return function(e){e=e["get"+b]();if(0<c||e>-c)e+=c;0===e&&-12==c&&(e=12);return yb(e,a,d)}}function zb(b,a){return function(c,d){var e=c["get"+b](),f=mb(a?"SHORT"+b:b);return d[f][e]}}function bd(b){var a=(new Date(b,0,1)).getDay();return new Date(b,0,(4>=a?5:12)-a)}function cd(b){return function(a){var c=bd(a.getFullYear());a=+new Date(a.getFullYear(),a.getMonth(),a.getDate()+(4-a.getDay()))-+c;a=1+Math.round(a/6048E5);
return yb(a,b)}}function Xc(b){function a(a){var b;if(b=a.match(c)){a=new Date(0);var f=0,g=0,h=b[8]?a.setUTCFullYear:a.setFullYear,m=b[8]?a.setUTCHours:a.setHours;b[9]&&(f=V(b[9]+b[10]),g=V(b[9]+b[11]));h.call(a,V(b[1]),V(b[2])-1,V(b[3]));f=V(b[4]||0)-f;g=V(b[5]||0)-g;h=V(b[6]||0);b=Math.round(1E3*parseFloat("0."+(b[7]||0)));m.call(a,f,g,h,b)}return a}var c=/^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;return function(c,e,f){var g="",h=[],
m,k;e=e||"mediumDate";e=b.DATETIME_FORMATS[e]||e;D(c)&&(c=jf.test(c)?V(c):a(c));Ga(c)&&(c=new Date(c));if(!ia(c))return c;for(;e;)(k=kf.exec(e))?(h=hb(h,k,1),e=h.pop()):(h.push(e),e=null);f&&"UTC"===f&&(c=new Date(c.getTime()),c.setMinutes(c.getMinutes()+c.getTimezoneOffset()));r(h,function(a){m=lf[a];g+=m?m(c,b.DATETIME_FORMATS):a.replace(/(^'|'$)/g,"").replace(/''/g,"'")});return g}}function ef(){return function(b){return sa(b,!0)}}function ff(){return function(b,a){if(!H(b)&&!D(b))return b;a=Infinity===
Math.abs(Number(a))?Number(a):V(a);if(D(b))return a?0<=a?b.slice(0,a):b.slice(a,b.length):"";var c=[],d,e;a>b.length?a=b.length:a<-b.length&&(a=-b.length);0<a?(d=0,e=a):(d=b.length+a,e=b.length);for(;d<e;d++)c.push(b[d]);return c}}function Zc(b){return function(a,c,d){function e(a,b){return b?function(b,c){return a(c,b)}:a}function f(a,b){var c=typeof a,d=typeof b;return c==d?(ia(a)&&ia(b)&&(a=a.valueOf(),b=b.valueOf()),"string"==c&&(a=a.toLowerCase(),b=b.toLowerCase()),a===b?0:a<b?-1:1):c<d?-1:1}
if(!H(a)||!c)return a;c=H(c)?c:[c];c=pd(c,function(a){var c=!1,d=a||Fa;if(D(a)){if("+"==a.charAt(0)||"-"==a.charAt(0))c="-"==a.charAt(0),a=a.substring(1);d=b(a);if(d.constant){var h=d();return e(function(a,b){return f(a[h],b[h])},c)}}return e(function(a,b){return f(d(a),d(b))},c)});for(var g=[],h=0;h<a.length;h++)g.push(a[h]);return g.sort(e(function(a,b){for(var d=0;d<c.length;d++){var e=c[d](a,b);if(0!==e)return e}return 0},d))}}function Ea(b){E(b)&&(b={link:b});b.restrict=b.restrict||"AC";return fa(b)}
function dd(b,a,c,d){function e(a,c){c=c?"-"+Wa(c,"-"):"";d.removeClass(b,(a?Pa:Qa)+c);d.addClass(b,(a?Qa:Pa)+c)}var f=this,g=b.parent().controller("form")||Ab,h=0,m=0,k=[],n=f.$error={};f.$name=a.name||a.ngForm;f.$dirty=!1;f.$pristine=!0;f.$valid=!0;f.$invalid=!1;f.$submitted=!1;g.$addControl(f);b.addClass(Ra);e(!0);f.$rollbackViewValue=function(){r(k,function(a){a.$rollbackViewValue()})};f.$commitViewValue=function(){r(k,function(a){a.$commitViewValue()})};f.$addControl=function(a){La(a.$name,"input");
k.push(a);a.$name&&(f[a.$name]=a)};f.$removeControl=function(a){a.$name&&f[a.$name]===a&&delete f[a.$name];f.$$clearControlValidity(a);Ia(k,a)};f.$$clearControlValidity=function(a){function b(c,d){f.$setValidity(d,!0,a)}r(f.$pending,b);r(n,b);g.$$clearControlValidity(f)};f.$$setPending=function(a,b){var c=f.$pending&&f.$pending[a];c&&-1!=Ca(c,b)||(m++,f.$valid=f.$invalid=s,f.$pending=f.$pending||{},c||(c=f.$pending[a]=[]),c.push(b),g.$$setPending(a,f))};f.$setValidity=function(a,b,c){var d=n[a],k,
r=f.$pending&&f.$pending[a];r&&(k=0<=Ca(r,c))&&(Ia(r,c),m--,0===r.length&&delete f.$pending[a]);if(r=f.$pending&&0===m)f.$pending=s;if(b){if(d||k)(d&&Ia(d,c),d&&d.length)||(n[a]&&h--,h?r&&(e(!1),f.$valid=!1,f.$invalid=!0):f.$pending||(e(b),f.$valid=!0,f.$invalid=!1),n[a]=!1,e(!0,a),g.$setValidity(a,!0,f))}else{f.$pending||(f.$valid=!1,f.$invalid=!0);h||e(b);if(d){if(-1!=Ca(d,c))return}else n[a]=d=[],h++,e(!1,a),g.$setValidity(a,!1,f);d.push(c)}};f.$setDirty=function(){d.removeClass(b,Ra);d.addClass(b,
Bb);f.$dirty=!0;f.$pristine=!1;g.$setDirty()};f.$setPristine=function(){d.setClass(b,Ra,Bb+" ng-submitted");f.$dirty=!1;f.$pristine=!0;f.$submitted=!1;r(k,function(a){a.$setPristine()})};f.$setSubmitted=function(){d.addClass(b,"ng-submitted");f.$submitted=!0;g.$setSubmitted()}}function Yb(b){b.$formatters.push(function(a){return b.$isEmpty(a)?a:a.toString()})}function cb(b,a,c,d,e,f){var g=a.prop("validity"),h=a[0].placeholder,m={},k=K(a[0].type);d.$$validityState=g;if(!e.android){var n=!1;a.on("compositionstart",
function(a){n=!0});a.on("compositionend",function(){n=!1;p()})}var p=function(e){if(!n){var f=a.val(),l=e&&e.type;if(aa&&"input"===(e||m).type&&a[0].placeholder!==h)h=a[0].placeholder;else{"password"===k||c.ngTrim&&"false"===c.ngTrim||(f=da(f));var p=g&&d.$$hasNativeValidators;if(d.$viewValue!==f||""===f&&p)b.$$phase?d.$setViewValue(f,l,p):b.$apply(function(){d.$setViewValue(f,l,p)})}}};if(e.hasEvent("input"))a.on("input",p);else{var l,q=function(a){l||(l=f.defer(function(){p(a);l=null}))};a.on("keydown",
function(a){var b=a.keyCode;91===b||15<b&&19>b||37<=b&&40>=b||q(a)});if(e.hasEvent("paste"))a.on("paste cut",q)}a.on("change",p);d.$render=function(){a.val(d.$isEmpty(d.$viewValue)?"":d.$viewValue)}}function Cb(b,a){return function(c){var d;return ia(c)?c:D(c)&&(b.lastIndex=0,c=b.exec(c))?(c.shift(),d={yyyy:1970,MM:1,dd:1,HH:0,mm:0,ss:0},r(c,function(b,c){c<a.length&&(d[a[c]]=+b)}),new Date(d.yyyy,d.MM-1,d.dd,d.HH,d.mm,d.ss||0)):NaN}}function db(b,a,c,d){return function(e,f,g,h,m,k,n){Db(e,f,g,h);
cb(e,f,g,h,m,k);var p=h&&h.$options&&h.$options.timezone;h.$$parserName=b;h.$parsers.push(function(b){return h.$isEmpty(b)?null:a.test(b)?(b=c(b),"UTC"===p&&b.setMinutes(b.getMinutes()-b.getTimezoneOffset()),b):s});h.$formatters.push(function(a){return ia(a)?n("date")(a,d,p):""});g.min&&(h.$validators.min=function(a){return h.$isEmpty(a)||F(g.min)||c(a)>=c(g.min)});g.max&&(h.$validators.max=function(a){return h.$isEmpty(a)||F(g.max)||c(a)<=c(g.max)})}}function Db(b,a,c,d){(d.$$hasNativeValidators=
S(a[0].validity))&&d.$parsers.push(function(b){var c=a.prop("validity")||{};return c.badInput||c.typeMismatch?s:b})}function ed(b,a,c,d,e){if(G(d)){b=b(d);if(!b.constant)throw Q("ngModel")("constexpr",c,d);return b(a)}return e}function Zb(b,a){b="ngClass"+b;return["$animate",function(c){function d(a,b){var c=[],d=0;a:for(;d<a.length;d++){for(var e=a[d],n=0;n<b.length;n++)if(e==b[n])continue a;c.push(e)}return c}function e(a){if(!H(a)){if(D(a))return a.split(" ");if(S(a)){var b=[];r(a,function(a,c){a&&
(b=b.concat(c.split(" ")))});return b}}return a}return{restrict:"AC",link:function(f,g,h){function m(a,b){var c=g.data("$classCounts")||{},d=[];r(a,function(a){if(0<b||c[a])c[a]=(c[a]||0)+b,c[a]===+(0<b)&&d.push(a)});g.data("$classCounts",c);return d.join(" ")}function k(b){if(!0===a||f.$index%2===a){var l=e(b||[]);if(!n){var k=m(l,1);h.$addClass(k)}else if(!ra(b,n)){var r=e(n),k=d(l,r),l=d(r,l),k=m(k,1),l=m(l,-1);k&&k.length&&c.addClass(g,k);l&&l.length&&c.removeClass(g,l)}}n=qa(b)}var n;f.$watch(h[b],
k,!0);h.$observe("class",function(a){k(f.$eval(h[b]))});"ngClass"!==b&&f.$watch("$index",function(c,d){var g=c&1;if(g!==(d&1)){var k=e(f.$eval(h[b]));g===a?(g=m(k,1),h.$addClass(g)):(g=m(k,-1),h.$removeClass(g))}})}}}]}var mf=/^\/(.+)\/([a-z]*)$/,K=function(b){return D(b)?b.toLowerCase():b},Fb=Object.prototype.hasOwnProperty,mb=function(b){return D(b)?b.toUpperCase():b},aa,x,ua,Va=[].slice,nf=[].push,Ha=Object.prototype.toString,Ua=Q("ng"),xa=P.angular||(P.angular={}),Ya,fb=0;aa=V((/msie (\d+)/.exec(K(navigator.userAgent))||
[])[1]);isNaN(aa)&&(aa=V((/trident\/.*; rv:(\d+)/.exec(K(navigator.userAgent))||[])[1]));y.$inject=[];Fa.$inject=[];var H=Array.isArray,da=function(b){return D(b)?b.trim():b},Xa=function(){if(G(Xa.isActive_))return Xa.isActive_;var b=!(!Y.querySelector("[ng-csp]")&&!Y.querySelector("[data-ng-csp]"));if(!b)try{new Function("")}catch(a){b=!0}return Xa.isActive_=b},jb=["ng-","data-ng-","ng:","x-ng-"],vd=/[A-Z]/g,kc=!1,Ib,zd={full:"1.3.0-rc.0",major:1,minor:3,dot:0,codeName:"sonic-boltification"};U.expando=
"ng339";var rb=U.cache={},Re=1;U._data=function(b){return this.cache[b[this.expando]]||{}};var Le=/([\:\-\_]+(.))/g,Me=/^moz([A-Z])/,of={mouseleave:"mouseout",mouseenter:"mouseover"},Lb=Q("jqLite"),Qe=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,Kb=/<|&#?\w+;/,Oe=/<([\w:]+)/,Pe=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,ja={option:[1,'<select multiple="multiple">',"</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],
td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ja.optgroup=ja.option;ja.tbody=ja.tfoot=ja.colgroup=ja.caption=ja.thead;ja.th=ja.td;var Ka=U.prototype={ready:function(b){function a(){c||(c=!0,b())}var c=!1;"complete"===Y.readyState?setTimeout(a):(this.on("DOMContentLoaded",a),U(P).on("load",a),this.on("DOMContentLoaded",a))},toString:function(){var b=[];r(this,function(a){b.push(""+a)});return"["+b.join(", ")+"]"},eq:function(b){return 0<=b?x(this[b]):x(this[this.length+b])},
length:0,push:nf,sort:[].sort,splice:[].splice},tb={};r("multiple selected checked disabled readOnly required open".split(" "),function(b){tb[K(b)]=b});var Bc={};r("input select option textarea button form details".split(" "),function(b){Bc[b]=!0});var Cc={ngMinlength:"minlength",ngMaxlength:"maxlength",ngPattern:"pattern"};r({data:Nb,removeData:pb},function(b,a){U[a]=b});r({data:Nb,inheritedData:sb,scope:function(b){return x.data(b,"$scope")||sb(b.parentNode||b,["$isolateScope","$scope"])},isolateScope:function(b){return x.data(b,
"$isolateScope")||x.data(b,"$isolateScopeNoTemplate")},controller:xc,injector:function(b){return sb(b,"$injector")},removeAttr:function(b,a){b.removeAttribute(a)},hasClass:Ob,css:function(b,a,c){a=Za(a);if(G(c))b.style[a]=c;else return b.style[a]},attr:function(b,a,c){var d=K(a);if(tb[d])if(G(c))c?(b[a]=!0,b.setAttribute(a,d)):(b[a]=!1,b.removeAttribute(d));else return b[a]||(b.attributes.getNamedItem(a)||y).specified?d:s;else if(G(c))b.setAttribute(a,c);else if(b.getAttribute)return b=b.getAttribute(a,
2),null===b?s:b},prop:function(b,a,c){if(G(c))b[a]=c;else return b[a]},text:function(){function b(a,b){if(F(b)){var d=a.nodeType;return 1===d||3===d?a.textContent:""}a.textContent=b}b.$dv="";return b}(),val:function(b,a){if(F(a)){if(b.multiple&&"select"===pa(b)){var c=[];r(b.options,function(a){a.selected&&c.push(a.value||a.text)});return 0===c.length?null:c}return b.value}b.value=a},html:function(b,a){if(F(a))return b.innerHTML;ob(b,!0);b.innerHTML=a},empty:yc},function(b,a){U.prototype[a]=function(a,
d){var e,f,g=this.length;if(b!==yc&&(2==b.length&&b!==Ob&&b!==xc?a:d)===s){if(S(a)){for(e=0;e<g;e++)if(b===Nb)b(this[e],a);else for(f in a)b(this[e],f,a[f]);return this}e=b.$dv;g=e===s?Math.min(g,1):g;for(f=0;f<g;f++){var h=b(this[f],a,d);e=e?e+h:h}return e}for(e=0;e<g;e++)b(this[e],a,d);return this}});r({removeData:pb,on:function a(c,d,e,f){if(G(f))throw Lb("onargs");if(uc(c)){var g=qb(c,!0);f=g.events;var h=g.handle;h||(h=g.handle=Te(c,f));for(var g=0<=d.indexOf(" ")?d.split(" "):[d],m=g.length;m--;){d=
g[m];var k=f[d];k||(f[d]=[],"mouseenter"===d||"mouseleave"===d?a(c,of[d],function(a){var c=a.relatedTarget;c&&(c===this||this.contains(c))||h(a,d)}):"$destroy"!==d&&c.addEventListener(d,h,!1),k=f[d]);k.push(e)}}},off:wc,one:function(a,c,d){a=x(a);a.on(c,function f(){a.off(c,d);a.off(c,f)});a.on(c,d)},replaceWith:function(a,c){var d,e=a.parentNode;ob(a);r(new U(c),function(c){d?e.insertBefore(c,d.nextSibling):e.replaceChild(c,a);d=c})},children:function(a){var c=[];r(a.childNodes,function(a){1===a.nodeType&&
c.push(a)});return c},contents:function(a){return a.contentDocument||a.childNodes||[]},append:function(a,c){var d=a.nodeType;if(1===d||11===d){c=new U(c);for(var d=0,e=c.length;d<e;d++)a.appendChild(c[d])}},prepend:function(a,c){if(1===a.nodeType){var d=a.firstChild;r(new U(c),function(c){a.insertBefore(c,d)})}},wrap:function(a,c){c=x(c).eq(0).clone()[0];var d=a.parentNode;d&&d.replaceChild(c,a);c.appendChild(a)},remove:zc,detach:function(a){zc(a,!0)},after:function(a,c){var d=a,e=a.parentNode;c=
new U(c);for(var f=0,g=c.length;f<g;f++){var h=c[f];e.insertBefore(h,d.nextSibling);d=h}},addClass:Qb,removeClass:Pb,toggleClass:function(a,c,d){c&&r(c.split(" "),function(c){var f=d;F(f)&&(f=!Ob(a,c));(f?Qb:Pb)(a,c)})},parent:function(a){return(a=a.parentNode)&&11!==a.nodeType?a:null},next:function(a){return a.nextElementSibling},find:function(a,c){return a.getElementsByTagName?a.getElementsByTagName(c):[]},clone:Mb,triggerHandler:function(a,c,d){var e,f;e=c.type||c;var g=qb(a);if(g=(g=g&&g.events)&&
g[e])e={preventDefault:function(){this.defaultPrevented=!0},isDefaultPrevented:function(){return!0===this.defaultPrevented},stopPropagation:y,type:e,target:a},c.type&&(e=B(e,c)),c=qa(g),f=d?[e].concat(d):[e],r(c,function(c){c.apply(a,f)})}},function(a,c){U.prototype[c]=function(c,e,f){for(var g,h=0,m=this.length;h<m;h++)F(g)?(g=a(this[h],c,e,f),G(g)&&(g=x(g))):vc(g,a(this[h],c,e,f));return G(g)?g:this};U.prototype.bind=U.prototype.on;U.prototype.unbind=U.prototype.off});$a.prototype={put:function(a,
c){this[Ma(a,this.nextUid)]=c},get:function(a){return this[Ma(a,this.nextUid)]},remove:function(a){var c=this[a=Ma(a,this.nextUid)];delete this[a];return c}};var Ec=/^function\s*[^\(]*\(\s*([^\)]*)\)/m,Ve=/,/,We=/^\s*(_?)(\S+?)\1\s*$/,Dc=/((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg,Na=Q("$injector");Hb.$$annotate=Rb;var pf=Q("$animate"),le=["$provide",function(a){this.$$selectors={};this.register=function(c,d){var e=c+"-animation";if(c&&"."!=c.charAt(0))throw pf("notcsel",c);this.$$selectors[c.substr(1)]=e;
a.factory(e,d)};this.classNameFilter=function(a){1===arguments.length&&(this.$$classNameFilter=a instanceof RegExp?a:null);return this.$$classNameFilter};this.$get=["$$q","$$asyncCallback",function(a,d){function e(){f||(f=a.defer(),d(function(){f.resolve();f=null}));return f.promise}var f;return{enter:function(a,c,d){d?d.after(a):c.prepend(a);return e()},leave:function(a){a.remove();return e()},move:function(a,c,d){return this.enter(a,c,d)},addClass:function(a,c){c=D(c)?c:H(c)?c.join(" "):"";r(a,
function(a){Qb(a,c)});return e()},removeClass:function(a,c){c=D(c)?c:H(c)?c.join(" "):"";r(a,function(a){Pb(a,c)});return e()},setClass:function(a,c,d){this.addClass(a,c);this.removeClass(a,d);return e()},enabled:y,cancel:y}}]}],ka=Q("$compile");mc.$inject=["$provide","$$sanitizeUriProvider"];var Ze=/^(x[\:\-_]|data[\:\-_])/i,Tb=Q("$interpolate"),qf=/^([^\?#]*)(\?([^#]*))?(#(.*))?$/,bf={http:80,https:443,ftp:21},vb=Q("$location");Oc.prototype=Wb.prototype=Nc.prototype={$$html5:!1,$$replace:!1,absUrl:wb("$$absUrl"),
url:function(a,c){if(F(a))return this.$$url;var d=qf.exec(a);d[1]&&this.path(decodeURIComponent(d[1]));(d[2]||d[1])&&this.search(d[3]||"");this.hash(d[5]||"",c);return this},protocol:wb("$$protocol"),host:wb("$$host"),port:wb("$$port"),path:Pc("$$path",function(a){return"/"==a.charAt(0)?a:"/"+a}),search:function(a,c){switch(arguments.length){case 0:return this.$$search;case 1:if(D(a))this.$$search=ic(a);else if(S(a))r(a,function(c,e){null==c&&delete a[e]}),this.$$search=a;else throw vb("isrcharg");
break;default:F(c)||null===c?delete this.$$search[a]:this.$$search[a]=c}this.$$compose();return this},hash:Pc("$$hash",Fa),replace:function(){this.$$replace=!0;return this}};var oa=Q("$parse"),rf=Function.prototype.call,sf=Function.prototype.apply,tf=Function.prototype.bind,Eb=B(Object.create(null),{"null":function(){return null},"true":function(){return!0},"false":function(){return!1},undefined:y,"+":function(a,c,d,e){d=d(a,c);e=e(a,c);return G(d)?G(e)?d+e:d:G(e)?e:s},"-":function(a,c,d,e){d=d(a,
c);e=e(a,c);return(G(d)?d:0)-(G(e)?e:0)},"*":function(a,c,d,e){return d(a,c)*e(a,c)},"/":function(a,c,d,e){return d(a,c)/e(a,c)},"%":function(a,c,d,e){return d(a,c)%e(a,c)},"^":function(a,c,d,e){return d(a,c)^e(a,c)},"=":y,"===":function(a,c,d,e){return d(a,c)===e(a,c)},"!==":function(a,c,d,e){return d(a,c)!==e(a,c)},"==":function(a,c,d,e){return d(a,c)==e(a,c)},"!=":function(a,c,d,e){return d(a,c)!=e(a,c)},"<":function(a,c,d,e){return d(a,c)<e(a,c)},">":function(a,c,d,e){return d(a,c)>e(a,c)},"<=":function(a,
c,d,e){return d(a,c)<=e(a,c)},">=":function(a,c,d,e){return d(a,c)>=e(a,c)},"&&":function(a,c,d,e){return d(a,c)&&e(a,c)},"||":function(a,c,d,e){return d(a,c)||e(a,c)},"&":function(a,c,d,e){return d(a,c)&e(a,c)},"|":function(a,c,d,e){return e(a,c)(a,c,d(a,c))},"!":function(a,c,d){return!d(a,c)}}),uf={n:"\n",f:"\f",r:"\r",t:"\t",v:"\v","'":"'",'"':'"'},Xb=function(a){this.options=a};Xb.prototype={constructor:Xb,lex:function(a){this.text=a;this.index=0;this.ch=s;for(this.tokens=[];this.index<this.text.length;)if(this.ch=
this.text.charAt(this.index),this.is("\"'"))this.readString(this.ch);else if(this.isNumber(this.ch)||this.is(".")&&this.isNumber(this.peek()))this.readNumber();else if(this.isIdent(this.ch))this.readIdent();else if(this.is("(){}[].,;:?"))this.tokens.push({index:this.index,text:this.ch}),this.index++;else if(this.isWhitespace(this.ch))this.index++;else{a=this.ch+this.peek();var c=a+this.peek(2),d=Eb[this.ch],e=Eb[a],f=Eb[c];f?(this.tokens.push({index:this.index,text:c,fn:f}),this.index+=3):e?(this.tokens.push({index:this.index,
text:a,fn:e}),this.index+=2):d?(this.tokens.push({index:this.index,text:this.ch,fn:d}),this.index+=1):this.throwError("Unexpected next character ",this.index,this.index+1)}return this.tokens},is:function(a){return-1!==a.indexOf(this.ch)},peek:function(a){a=a||1;return this.index+a<this.text.length?this.text.charAt(this.index+a):!1},isNumber:function(a){return"0"<=a&&"9">=a},isWhitespace:function(a){return" "===a||"\r"===a||"\t"===a||"\n"===a||"\v"===a||"\u00a0"===a},isIdent:function(a){return"a"<=
a&&"z">=a||"A"<=a&&"Z">=a||"_"===a||"$"===a},isExpOperator:function(a){return"-"===a||"+"===a||this.isNumber(a)},throwError:function(a,c,d){d=d||this.index;c=G(c)?"s "+c+"-"+this.index+" ["+this.text.substring(c,d)+"]":" "+d;throw oa("lexerr",a,c,this.text);},readNumber:function(){for(var a="",c=this.index;this.index<this.text.length;){var d=K(this.text.charAt(this.index));if("."==d||this.isNumber(d))a+=d;else{var e=this.peek();if("e"==d&&this.isExpOperator(e))a+=d;else if(this.isExpOperator(d)&&
e&&this.isNumber(e)&&"e"==a.charAt(a.length-1))a+=d;else if(!this.isExpOperator(d)||e&&this.isNumber(e)||"e"!=a.charAt(a.length-1))break;else this.throwError("Invalid exponent")}this.index++}a*=1;this.tokens.push({index:c,text:a,constant:!0,fn:function(){return a}})},readIdent:function(){for(var a=this,c="",d=this.index,e,f,g,h;this.index<this.text.length;){h=this.text.charAt(this.index);if("."===h||this.isIdent(h)||this.isNumber(h))"."===h&&(e=this.index),c+=h;else break;this.index++}e&&"."===c[c.length-
1]&&(this.index--,c=c.slice(0,-1),e=c.lastIndexOf("."),-1===e&&(e=s));if(e)for(f=this.index;f<this.text.length;){h=this.text.charAt(f);if("("===h){g=c.substr(e-d+1);c=c.substr(0,e-d);this.index=f;break}if(this.isWhitespace(h))f++;else break}d={index:d,text:c};if(f=Eb[c])d.fn=f,d.constant=!0;else{var m=Rc(c,this.options,this.text);d.fn=B(function(a,c){return m(a,c)},{assign:function(d,e){return xb(d,c,e,a.text)}})}this.tokens.push(d);g&&(this.tokens.push({index:e,text:"."}),this.tokens.push({index:e+
1,text:g}))},readString:function(a){var c=this.index;this.index++;for(var d="",e=a,f=!1;this.index<this.text.length;){var g=this.text.charAt(this.index),e=e+g;if(f)"u"===g?(f=this.text.substring(this.index+1,this.index+5),f.match(/[\da-f]{4}/i)||this.throwError("Invalid unicode escape [\\u"+f+"]"),this.index+=4,d+=String.fromCharCode(parseInt(f,16))):d+=uf[g]||g,f=!1;else if("\\"===g)f=!0;else{if(g===a){this.index++;this.tokens.push({index:c,text:e,string:d,constant:!0,fn:function(){return d}});return}d+=
g}this.index++}this.throwError("Unterminated quote",c)}};var bb=function(a,c,d){this.lexer=a;this.$filter=c;this.options=d};bb.ZERO=B(function(){return 0},{constant:!0});bb.prototype={constructor:bb,parse:function(a){this.text=a;this.tokens=this.lexer.lex(a);a=this.statements();0!==this.tokens.length&&this.throwError("is an unexpected token",this.tokens[0]);a.literal=!!a.literal;a.constant=!!a.constant;return a},primary:function(){var a;if(this.expect("("))a=this.filterChain(),this.consume(")");else if(this.expect("["))a=
this.arrayDeclaration();else if(this.expect("{"))a=this.object();else{var c=this.expect();(a=c.fn)||this.throwError("not a primary expression",c);c.constant&&(a.constant=!0,a.literal=!0)}for(var d;c=this.expect("(","[",".");)"("===c.text?(a=this.functionCall(a,d),d=null):"["===c.text?(d=a,a=this.objectIndex(a)):"."===c.text?(d=a,a=this.fieldAccess(a)):this.throwError("IMPOSSIBLE");return a},throwError:function(a,c){throw oa("syntax",c.text,a,c.index+1,this.text,this.text.substring(c.index));},peekToken:function(){if(0===
this.tokens.length)throw oa("ueoe",this.text);return this.tokens[0]},peek:function(a,c,d,e){if(0<this.tokens.length){var f=this.tokens[0],g=f.text;if(g===a||g===c||g===d||g===e||!(a||c||d||e))return f}return!1},expect:function(a,c,d,e){return(a=this.peek(a,c,d,e))?(this.tokens.shift(),a):!1},consume:function(a){this.expect(a)||this.throwError("is unexpected, expecting ["+a+"]",this.peek())},unaryFn:function(a,c){return B(function(d,e){return a(d,e,c)},{constant:c.constant})},ternaryFn:function(a,
c,d){return B(function(e,f){return a(e,f)?c(e,f):d(e,f)},{constant:a.constant&&c.constant&&d.constant})},binaryFn:function(a,c,d){return B(function(e,f){return c(e,f,a,d)},{constant:a.constant&&d.constant})},statements:function(){for(var a=[];;)if(0<this.tokens.length&&!this.peek("}",")",";","]")&&a.push(this.filterChain()),!this.expect(";"))return 1===a.length?a[0]:function(c,d){for(var e,f=0;f<a.length;f++){var g=a[f];g&&(e=g(c,d))}return e}},filterChain:function(){for(var a=this.expression(),c;;)if(c=
this.expect("|"))a=this.binaryFn(a,c.fn,this.filter());else return a},filter:function(){var a=this.expect(),c=this.$filter(a.text),d,e;if(this.peek(":"))for(d=[],e=[];this.expect(":");)d.push(this.expression());return fa(function(a,g,h){if(e){e[0]=h;for(h=d.length;h--;)e[h+1]=d[h](a,g);return c.apply(s,e)}return c(h)})},expression:function(){return this.assignment()},assignment:function(){var a=this.ternary(),c,d;return(d=this.expect("="))?(a.assign||this.throwError("implies assignment but ["+this.text.substring(0,
d.index)+"] can not be assigned to",d),c=this.ternary(),function(d,f){return a.assign(d,c(d,f),f)}):a},ternary:function(){var a=this.logicalOR(),c,d;if(this.expect("?")){c=this.assignment();if(d=this.expect(":"))return this.ternaryFn(a,c,this.assignment());this.throwError("expected :",d)}else return a},logicalOR:function(){for(var a=this.logicalAND(),c;;)if(c=this.expect("||"))a=this.binaryFn(a,c.fn,this.logicalAND());else return a},logicalAND:function(){var a=this.equality(),c;if(c=this.expect("&&"))a=
this.binaryFn(a,c.fn,this.logicalAND());return a},equality:function(){var a=this.relational(),c;if(c=this.expect("==","!=","===","!=="))a=this.binaryFn(a,c.fn,this.equality());return a},relational:function(){var a=this.additive(),c;if(c=this.expect("<",">","<=",">="))a=this.binaryFn(a,c.fn,this.relational());return a},additive:function(){for(var a=this.multiplicative(),c;c=this.expect("+","-");)a=this.binaryFn(a,c.fn,this.multiplicative());return a},multiplicative:function(){for(var a=this.unary(),
c;c=this.expect("*","/","%");)a=this.binaryFn(a,c.fn,this.unary());return a},unary:function(){var a;return this.expect("+")?this.primary():(a=this.expect("-"))?this.binaryFn(bb.ZERO,a.fn,this.unary()):(a=this.expect("!"))?this.unaryFn(a.fn,this.unary()):this.primary()},fieldAccess:function(a){var c=this,d=this.expect().text,e=Rc(d,this.options,this.text);return B(function(c,d,h){return e(h||a(c,d))},{assign:function(e,g,h){(h=a(e,h))||a.assign(e,h={});return xb(h,d,g,c.text)}})},objectIndex:function(a){var c=
this,d=this.expression();this.consume("]");return B(function(e,f){var g=a(e,f),h=d(e,f);na(h,c.text);return g?Oa(g[h],c.text):s},{assign:function(e,f,g){var h=na(d(e,g),c.text);(g=Oa(a(e,g),c.text))||a.assign(e,g={});return g[h]=f}})},functionCall:function(a,c){var d=[];if(")"!==this.peekToken().text){do d.push(this.expression());while(this.expect(","))}this.consume(")");var e=this.text,f=d.length?[]:null;return function(g,h){var m=c?c(g,h):g,k=a(g,h,m)||y;if(f)for(var n=d.length;n--;)f[n]=d[n](g,
h);Oa(m,e);if(k){if(k.constructor===k)throw oa("isecfn",e);if(k===rf||k===sf||k===tf)throw oa("isecff",e);}m=k.apply?k.apply(m,f):k(f[0],f[1],f[2],f[3],f[4]);return Oa(m,e)}},arrayDeclaration:function(){var a=[],c=!0;if("]"!==this.peekToken().text){do{if(this.peek("]"))break;var d=this.expression();a.push(d);d.constant||(c=!1)}while(this.expect(","))}this.consume("]");return B(function(c,d){for(var g=[],h=0;h<a.length;h++)g.push(a[h](c,d));return g},{literal:!0,constant:c})},object:function(){var a=
[],c=!0;if("}"!==this.peekToken().text){do{if(this.peek("}"))break;var d=this.expect(),d=d.string||d.text;this.consume(":");var e=this.expression();a.push({key:d,value:e});e.constant||(c=!1)}while(this.expect(","))}this.consume("}");return B(function(c,d){for(var e={},m=0;m<a.length;m++){var k=a[m];e[k.key]=k.value(c,d)}return e},{literal:!0,constant:c})}};var Sc=Object.create(null),Ba=Q("$sce"),la={HTML:"html",CSS:"css",URL:"url",RESOURCE_URL:"resourceUrl",JS:"js"},ka=Q("$compile"),X=Y.createElement("a"),
Vc=Aa(P.location.href,!0);tc.$inject=["$provide"];Wc.$inject=["$locale"];Yc.$inject=["$locale"];var ad=".",lf={yyyy:ba("FullYear",4),yy:ba("FullYear",2,0,!0),y:ba("FullYear",1),MMMM:zb("Month"),MMM:zb("Month",!0),MM:ba("Month",2,1),M:ba("Month",1,1),dd:ba("Date",2),d:ba("Date",1),HH:ba("Hours",2),H:ba("Hours",1),hh:ba("Hours",2,-12),h:ba("Hours",1,-12),mm:ba("Minutes",2),m:ba("Minutes",1),ss:ba("Seconds",2),s:ba("Seconds",1),sss:ba("Milliseconds",3),EEEE:zb("Day"),EEE:zb("Day",!0),a:function(a,c){return 12>
a.getHours()?c.AMPMS[0]:c.AMPMS[1]},Z:function(a){a=-1*a.getTimezoneOffset();return a=(0<=a?"+":"")+(yb(Math[0<a?"floor":"ceil"](a/60),2)+yb(Math.abs(a%60),2))},ww:cd(2),w:cd(1)},kf=/((?:[^yMdHhmsaZEw']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|d+|H+|h+|m+|s+|a|Z|w+))(.*)/,jf=/^\-?\d+$/;Xc.$inject=["$locale"];var gf=fa(K),hf=fa(mb);Zc.$inject=["$parse"];var Cd=fa({restrict:"E",compile:function(a,c){8>=aa&&(c.href||c.name||c.$set("href",""),a.append(Y.createComment("IE fix")));if(!c.href&&!c.xlinkHref&&!c.name)return function(a,
c){var f="[object SVGAnimatedString]"===Ha.call(c.prop("href"))?"xlink:href":"href";c.on("click",function(a){c.attr(f)||a.preventDefault()})}}}),nb={};r(tb,function(a,c){if("multiple"!=a){var d=va("ng-"+c);nb[d]=function(){return{restrict:"A",priority:100,link:function(a,f,g){a.$watch(g[d],function(a){g.$set(c,!!a)})}}}}});r(Cc,function(a,c){nb[c]=function(){return{priority:100,link:function(a,e,f){if("ngPattern"===c&&"/"==f.ngPattern.charAt(0)&&(e=f.ngPattern.match(mf))){f.$set("ngPattern",new RegExp(e[1],
e[2]));return}a.$watch(f[c],function(a){f.$set(c,a)})}}}});r(["src","srcset","href"],function(a){var c=va("ng-"+a);nb[c]=function(){return{priority:99,link:function(d,e,f){var g=a,h=a;"href"===a&&"[object SVGAnimatedString]"===Ha.call(e.prop("href"))&&(h="xlinkHref",f.$attr[h]="xlink:href",g=null);f.$observe(c,function(c){c?(f.$set(h,c),aa&&g&&e.prop(g,f[h])):"href"===a&&f.$set(h,null)})}}}});var Ab={$addControl:y,$removeControl:y,$setValidity:y,$$setPending:y,$setDirty:y,$setPristine:y,$setSubmitted:y,
$$clearControlValidity:y};dd.$inject=["$element","$attrs","$scope","$animate"];var fd=function(a){return["$timeout",function(c){return{name:"form",restrict:a?"EAC":"E",controller:dd,compile:function(){return{pre:function(a,e,f,g){if(!f.action){var h=function(c){a.$apply(function(){g.$commitViewValue();g.$setSubmitted()});c.preventDefault?c.preventDefault():c.returnValue=!1};e[0].addEventListener("submit",h,!1);e.on("$destroy",function(){c(function(){e[0].removeEventListener("submit",h,!1)},0,!1)})}var m=
e.parent().controller("form"),k=f.name||f.ngForm;k&&xb(a,k,g,k);if(m)e.on("$destroy",function(){m.$removeControl(g);k&&xb(a,k,s,k);B(g,Ab)})}}}}}]},Dd=fd(),Qd=fd(!0),vf=/^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/,wf=/^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i,xf=/^\s*(\-|\+)?(\d+|(\d*(\.\d*)))\s*$/,gd=/^(\d{4})-(\d{2})-(\d{2})$/,hd=/^(\d{4})-(\d\d)-(\d\d)T(\d\d):(\d\d)(?::(\d\d))?$/,$b=/^(\d{4})-W(\d\d)$/,
id=/^(\d{4})-(\d\d)$/,jd=/^(\d\d):(\d\d)(?::(\d\d))?$/,yf=/(\s+|^)default(\s+|$)/,ac=new Q("ngModel"),kd={text:function(a,c,d,e,f,g){cb(a,c,d,e,f,g);Yb(e)},date:db("date",gd,Cb(gd,["yyyy","MM","dd"]),"yyyy-MM-dd"),"datetime-local":db("datetimelocal",hd,Cb(hd,"yyyy MM dd HH mm ss".split(" ")),"yyyy-MM-ddTHH:mm:ss"),time:db("time",jd,Cb(jd,["HH","mm","ss"]),"HH:mm:ss"),week:db("week",$b,function(a){if(ia(a))return a;if(D(a)){$b.lastIndex=0;var c=$b.exec(a);if(c){a=+c[1];var d=+c[2],c=bd(a),d=7*(d-1);
return new Date(a,0,c.getDate()+d)}}return NaN},"yyyy-Www"),month:db("month",id,Cb(id,["yyyy","MM"]),"yyyy-MM"),number:function(a,c,d,e,f,g){Db(a,c,d,e);cb(a,c,d,e,f,g);e.$$parserName="number";e.$parsers.push(function(a){return e.$isEmpty(a)?null:xf.test(a)?parseFloat(a):s});e.$formatters.push(function(a){if(!e.$isEmpty(a)){if(!Ga(a))throw ac("numfmt",a);a=a.toString()}return a});d.min&&(e.$validators.min=function(a){return e.$isEmpty(a)||F(d.min)||a>=parseFloat(d.min)});d.max&&(e.$validators.max=
function(a){return e.$isEmpty(a)||F(d.max)||a<=parseFloat(d.max)})},url:function(a,c,d,e,f,g){Db(a,c,d,e);cb(a,c,d,e,f,g);Yb(e);e.$$parserName="url";e.$validators.url=function(a,c){var d=a||c;return e.$isEmpty(d)||vf.test(d)}},email:function(a,c,d,e,f,g){Db(a,c,d,e);cb(a,c,d,e,f,g);Yb(e);e.$$parserName="email";e.$validators.email=function(a,c){var d=a||c;return e.$isEmpty(d)||wf.test(d)}},radio:function(a,c,d,e){F(d.name)&&c.attr("name",++fb);c.on("click",function(f){c[0].checked&&a.$apply(function(){e.$setViewValue(d.value,
f&&f.type)})});e.$render=function(){c[0].checked=d.value==e.$viewValue};d.$observe("value",e.$render)},checkbox:function(a,c,d,e,f,g,h,m){var k=ed(m,a,"ngTrueValue",d.ngTrueValue,!0),n=ed(m,a,"ngFalseValue",d.ngFalseValue,!1);c.on("click",function(d){a.$apply(function(){e.$setViewValue(c[0].checked,d&&d.type)})});e.$render=function(){c[0].checked=e.$viewValue};e.$isEmpty=function(a){return a!==k};e.$formatters.push(function(a){return ra(a,k)});e.$parsers.push(function(a){return a?k:n})},hidden:y,
button:y,submit:y,reset:y,file:y},nc=["$browser","$sniffer","$filter","$parse",function(a,c,d,e){return{restrict:"E",require:["?ngModel"],link:function(f,g,h,m){m[0]&&(kd[K(h.type)]||kd.text)(f,g,h,m[0],c,a,d,e)}}}],Qa="ng-valid",Pa="ng-invalid",Ra="ng-pristine",Bb="ng-dirty",zf=["$scope","$exceptionHandler","$attrs","$element","$parse","$animate","$timeout",function(a,c,d,e,f,g,h){function m(a,c){c=c?"-"+Wa(c,"-"):"";g.removeClass(e,(a?Pa:Qa)+c);g.addClass(e,(a?Qa:Pa)+c)}this.$modelValue=this.$viewValue=
Number.NaN;this.$validators={};this.$asyncValidators={};this.$validators={};this.$parsers=[];this.$formatters=[];this.$viewChangeListeners=[];this.$untouched=!0;this.$touched=!1;this.$pristine=!0;this.$dirty=!1;this.$valid=!0;this.$invalid=!1;this.$name=d.name;var k=f(d.ngModel),n=k.assign,p=null,l=this;this.$$setOptions=function(a){l.$options=a;if(!(n||a&&a.getterSetter))throw ac("nonassign",d.ngModel,ta(e));};this.$render=y;this.$isEmpty=function(a){return F(a)||""===a||null===a||a!==a};var q=e.inheritedData("$formController")||
Ab,t=0,v=0,w=this.$error={};e.addClass(Ra).addClass("ng-untouched");m(!0);this.$$clearValidity=function(){g.removeClass(e,"ng-pending");r(l.$error,function(a,c){var d=Wa(c,"-");g.removeClass(e,Qa+d);g.removeClass(e,Pa+d)});l.$pending&&l.$$clearPending();t=0;w=l.$error={};q.$$clearControlValidity(l)};this.$$clearPending=function(){v=0;l.$pending=s;g.removeClass(e,"ng-pending")};this.$$setPending=function(a,c,d){function f(c){return function(){var e=l.$viewValue||"";l.$pending&&l.$pending[a]&&d===e&&
(v--,delete l.$pending[a],l.$setValidity(a,c),0===v&&(l.$$clearPending(),l.$$updateValidModelValue(e),l.$$writeModelToScope()))}}l.$pending=l.$pending||{};xa.isUndefined(l.$pending[a])&&(l.$pending[a]=!0,v++);l.$valid=l.$invalid=s;q.$$setPending(a,l);g.addClass(e,"ng-pending");g.removeClass(e,Pa);g.removeClass(e,Qa);d=d||"";c.then(f(!0),f(!1))};this.$setValidity=function(a,c){if(l.$pending||w[a]!==!c)c?(w[a]&&t--,t||v||(m(!0),l.$valid=!0,l.$invalid=!1)):w[a]||(t++,v||(m(!1),l.$invalid=!0,l.$valid=
!1)),w[a]=!c,m(c,a),q.$setValidity(a,c,l)};this.$setPristine=function(){l.$dirty=!1;l.$pristine=!0;g.removeClass(e,Bb);g.addClass(e,Ra)};this.$setUntouched=function(){l.$touched=!1;l.$untouched=!0;g.setClass(e,"ng-untouched","ng-touched")};this.$setTouched=function(){l.$touched=!0;l.$untouched=!1;g.setClass(e,"ng-touched","ng-untouched")};this.$rollbackViewValue=function(){h.cancel(p);l.$viewValue=l.$$lastCommittedViewValue;l.$render()};this.$validate=function(){if(l.$modelValue===l.$modelValue){var a=
l.$modelValue;l.$$runValidators(l.$$invalidModelValue||l.$modelValue,l.$viewValue);a!==l.$modelValue&&l.$$writeModelToScope()}};this.$$runValidators=function(a,c){function d(e,f){var h=!0;r(e,function(d,e){var g=d(a,c);f(e,g);h=h&&g});return h}l.$pending&&l.$$clearPending();d(l.$validators,function(a,c){l.$setValidity(a,c)})&&d(l.$asyncValidators,function(c,d){if(!d||!E(d.then))throw ac("$asyncValidators",d);l.$$setPending(c,d,a)});l.$$updateValidModelValue(a)};this.$$updateValidModelValue=function(a){l.$modelValue=
l.$valid?a:s;l.$$invalidModelValue=l.$valid?s:a};this.$commitViewValue=function(a){var c=l.$viewValue;h.cancel(p);if(a||l.$$lastCommittedViewValue!==c){l.$$lastCommittedViewValue=c;l.$pristine&&(l.$dirty=!0,l.$pristine=!1,g.removeClass(e,Ra),g.addClass(e,Bb),q.$setDirty());var d;a=c;for(var f=0;f<l.$parsers.length;f++)if(a=l.$parsers[f](a),F(a)){d=!0;break}f=l.$$parserName||"parse";d?(l.$$invalidModelValue=l.$modelValue=s,l.$$clearValidity(),l.$setValidity(f,!1),l.$$writeModelToScope()):l.$modelValue===
a||!F(l.$$invalidModelValue)&&l.$$invalidModelValue==a||(l.$setValidity(f,!0),l.$$runValidators(a,c),l.$$writeModelToScope())}};this.$$writeModelToScope=function(){var d;l.$options&&l.$options.getterSetter&&E(d=k(a))?d(l.$modelValue):n(a,l.$modelValue);r(l.$viewChangeListeners,function(a){try{a()}catch(d){c(d)}})};this.$setViewValue=function(a,c,d){l.$viewValue=a;l.$options&&!l.$options.updateOnDefault||l.$$debounceViewValueCommit(c,d)};this.$$debounceViewValueCommit=function(a,c){var d=0,e=l.$options;
e&&G(e.debounce)&&(e=e.debounce,Ga(e)?d=e:Ga(e[a])?d=e[a]:Ga(e["default"])&&(d=e["default"]));h.cancel(p);d?p=h(function(){l.$commitViewValue(c)},d):l.$commitViewValue(c)};a.$watch(function(){var c=k(a);l.$options&&l.$options.getterSetter&&E(c)&&(c=c());if(l.$modelValue!==c&&(F(l.$$invalidModelValue)||l.$$invalidModelValue!=c)){for(var d=l.$formatters,e=d.length,f=c;e--;)f=d[e](f);l.$$runValidators(c,f);l.$viewValue!==f&&(l.$viewValue=l.$$lastCommittedViewValue=f,l.$render())}return c})}],ee=function(){return{restrict:"A",
require:["ngModel","^?form","^?ngModelOptions"],controller:zf,link:{pre:function(a,c,d,e){var f=e[0],g=e[1]||Ab;f.$$setOptions(e[2]&&e[2].$options);g.$addControl(f);a.$on("$destroy",function(){g.$removeControl(f)})},post:function(a,c,d,e){var f=e[0];if(f.$options&&f.$options.updateOn)c.on(f.$options.updateOn,function(c){a.$apply(function(){f.$$debounceViewValueCommit(c&&c.type)})});c.on("blur",function(c){f.$touched||a.$apply(function(){f.$setTouched()})})}}}},ge=fa({restrict:"A",require:"ngModel",
link:function(a,c,d,e){e.$viewChangeListeners.push(function(){a.$eval(d.ngChange)})}}),pc=function(){return{restrict:"A",require:"?ngModel",link:function(a,c,d,e){e&&(d.required=!0,e.$validators.required=function(a,c){return!d.required||!e.$isEmpty(c)},d.$observe("required",function(){e.$validate()}))}}},oc=function(){return{restrict:"A",require:"?ngModel",link:function(a,c,d,e){if(e){var f,g=d.ngPattern||d.pattern;d.$observe("pattern",function(a){D(a)&&0<a.length&&(a=new RegExp(a));if(a&&!a.test)throw Q("ngPattern")("noregexp",
g,a,ta(c));f=a||s;e.$validate()});e.$validators.pattern=function(a){return e.$isEmpty(a)||F(f)||f.test(a)}}}}},rc=function(){return{restrict:"A",require:"?ngModel",link:function(a,c,d,e){if(e){var f=0;d.$observe("maxlength",function(a){f=V(a)||0;e.$validate()});e.$validators.maxlength=function(a,c){return e.$isEmpty(c)||c.length<=f}}}}},qc=function(){return{restrict:"A",require:"?ngModel",link:function(a,c,d,e){if(e){var f=0;d.$observe("minlength",function(a){f=V(a)||0;e.$validate()});e.$validators.minlength=
function(a,c){return e.$isEmpty(c)||c.length>=f}}}}},fe=function(){return{restrict:"A",priority:100,require:"ngModel",link:function(a,c,d,e){var f=c.attr(d.$attr.ngList)||", ",g="false"!==d.ngTrim,h=g?da(f):f;e.$parsers.push(function(a){if(!F(a)){var c=[];a&&r(a.split(h),function(a){a&&c.push(g?da(a):a)});return c}});e.$formatters.push(function(a){return H(a)?a.join(f):s});e.$isEmpty=function(a){return!a||!a.length}}}},Af=/^(true|false|\d+)$/,he=function(){return{restrict:"A",priority:100,compile:function(a,
c){return Af.test(c.ngValue)?function(a,c,f){f.$set("value",a.$eval(f.ngValue))}:function(a,c,f){a.$watch(f.ngValue,function(a){f.$set("value",a)})}}}},ie=function(){return{restrict:"A",controller:["$scope","$attrs",function(a,c){var d=this;this.$options=a.$eval(c.ngModelOptions);this.$options.updateOn!==s?(this.$options.updateOnDefault=!1,this.$options.updateOn=da(this.$options.updateOn.replace(yf,function(){d.$options.updateOnDefault=!0;return" "}))):this.$options.updateOnDefault=!0}]}},Id=["$compile",
function(a){return{restrict:"AC",compile:function(c){a.$$addBindingClass(c);return function(c,e,f){a.$$addBindingInfo(e,f.ngBind);c.$watch(f.ngBind,function(a){e.text(a==s?"":a)})}}}}],Kd=["$interpolate","$compile",function(a,c){return{compile:function(d){c.$$addBindingClass(d);return function(d,f,g){d=a(f.attr(g.$attr.ngBindTemplate));c.$$addBindingInfo(f,d.expressions);g.$observe("ngBindTemplate",function(a){f.text(a)})}}}}],Jd=["$sce","$parse","$compile",function(a,c,d){return{restrict:"A",compile:function(e,
f){var g=c(f.ngBindHtml),h=c(f.ngBindHtml,function(a){return(a||"").toString()});d.$$addBindingClass(e);return function(c,e,f){d.$$addBindingInfo(e,f.ngBindHtml);c.$watch(h,function(){e.html(a.getTrustedHtml(g(c))||"")})}}}}],Ld=Zb("",!0),Nd=Zb("Odd",0),Md=Zb("Even",1),Od=Ea({compile:function(a,c){c.$set("ngCloak",s);a.removeClass("ng-cloak")}}),Pd=[function(){return{restrict:"A",scope:!0,controller:"@",priority:500}}],sc={},Bf={blur:!0,focus:!0};r("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(" "),
function(a){var c=va("ng-"+a);sc[c]=["$parse",function(d){return{restrict:"A",compile:function(e,f){var g=d(f[c]);return function(c,d){var e=K(a);d.on(e,function(a){var d=function(){g(c,{$event:a})};Bf[e]&&c.$$phase?c.$evalAsync(d):c.$apply(d)})}}}}]});var Sd=["$animate",function(a){return{multiElement:!0,transclude:"element",priority:600,terminal:!0,restrict:"A",$$tlb:!0,link:function(c,d,e,f,g){var h,m,k;c.$watch(e.ngIf,function(c){c?m||g(function(c,f){m=f;c[c.length++]=Y.createComment(" end ngIf: "+
e.ngIf+" ");h={clone:c};a.enter(c,d.parent(),d)}):(k&&(k.remove(),k=null),m&&(m.$destroy(),m=null),h&&(k=lb(h.clone),a.leave(k).then(function(){k=null}),h=null))})}}}],Td=["$templateRequest","$anchorScroll","$animate","$sce",function(a,c,d,e){return{restrict:"ECA",priority:400,terminal:!0,transclude:"element",controller:xa.noop,compile:function(f,g){var h=g.ngInclude||g.src,m=g.onload||"",k=g.autoscroll;return function(f,g,l,q,r){var v=0,s,A,x,z=function(){A&&(A.remove(),A=null);s&&(s.$destroy(),
s=null);x&&(d.leave(x).then(function(){A=null}),A=x,x=null)};f.$watch(e.parseAsResourceUrl(h),function(e){var h=function(){!G(k)||k&&!f.$eval(k)||c()},l=++v;e?(a(e,!0).then(function(a){if(l===v){var c=f.$new();q.template=a;a=r(c,function(a){z();d.enter(a,null,g).then(h)});s=c;x=a;s.$emit("$includeContentLoaded");f.$eval(m)}},function(){l===v&&(z(),f.$emit("$includeContentError"))}),f.$emit("$includeContentRequested")):(z(),q.template=null)})}}}}],je=["$compile",function(a){return{restrict:"ECA",priority:-400,
require:"ngInclude",link:function(c,d,e,f){d.html(f.template);a(d.contents())(c)}}}],Ud=Ea({priority:450,compile:function(){return{pre:function(a,c,d){a.$eval(d.ngInit)}}}}),Vd=Ea({terminal:!0,priority:1E3}),Wd=["$locale","$interpolate",function(a,c){var d=/{}/g;return{restrict:"EA",link:function(e,f,g){var h=g.count,m=g.$attr.when&&f.attr(g.$attr.when),k=g.offset||0,n=e.$eval(m)||{},p={},l=c.startSymbol(),q=c.endSymbol(),s=/^when(Minus)?(.+)$/;r(g,function(a,c){s.test(c)&&(n[K(c.replace("when","").replace("Minus",
"-"))]=f.attr(g.$attr[c]))});r(n,function(a,e){p[e]=c(a.replace(d,l+h+"-"+k+q))});e.$watch(function(){var c=parseFloat(e.$eval(h));if(isNaN(c))return"";c in n||(c=a.pluralCat(c-k));return p[c](e)},function(a){f.text(a)})}}}],Xd=["$parse","$animate",function(a,c){var d=Q("ngRepeat"),e=function(a,c,d,e,k,n,p){a[d]=e;k&&(a[k]=n);a.$index=c;a.$first=0===c;a.$last=c===p-1;a.$middle=!(a.$first||a.$last);a.$odd=!(a.$even=0===(c&1))};return{restrict:"A",multiElement:!0,transclude:"element",priority:1E3,terminal:!0,
$$tlb:!0,compile:function(f,g){var h=g.ngRepeat,m=Y.createComment(" end ngRepeat: "+h+" "),k=h.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+track\s+by\s+([\s\S]+?))?\s*$/);if(!k)throw d("iexp",h);var n=k[1],p=k[2],l=k[3],q=k[4],k=n.match(/^(?:([\$\w]+)|\(([\$\w]+)\s*,\s*([\$\w]+)\))$/);if(!k)throw d("iidexp",n);var t=k[3]||k[1],v=k[2];if(l&&(!/^[$a-zA-Z_][$a-zA-Z0-9_]*$/.test(l)||/^(null|undefined|this|\$index|\$first|\$middle|\$last|\$even|\$odd|\$parent)$/.test(l)))throw d("badident",
l);var w,A,G,z,y={$id:Ma};q?w=a(q):(G=function(a,c){return Ma(c)},z=function(a){return a});return function(a,f,g,k,n){w&&(A=function(c,d,e){v&&(y[v]=c);y[t]=d;y.$index=e;return w(a,y)});var q=Object.create(null);a.$watchCollection(p,function(g){var k,p,N=f[0],y,w=Object.create(null),L,F,B,D,H,M,ga;l&&(a[l]=g);if(eb(g))H=g,p=A||G;else{p=A||z;H=[];for(ga in g)g.hasOwnProperty(ga)&&"$"!=ga.charAt(0)&&H.push(ga);H.sort()}L=H.length;ga=Array(L);for(k=0;k<L;k++)if(F=g===H?k:H[k],B=g[F],D=p(F,B,k),q[D])M=
q[D],delete q[D],w[D]=M,ga[k]=M;else{if(w[D])throw r(ga,function(a){a&&a.scope&&(q[a.id]=a)}),d("dupes",h,D,sa(B));ga[k]={id:D,scope:s,clone:s};w[D]=!0}for(y in q){M=q[y];D=lb(M.clone);c.leave(D);if(D[0].parent)for(k=0,p=D.length;k<p;k++)D[k].$$NG_REMOVED=!0;M.scope.$destroy()}for(k=0;k<L;k++)if(F=g===H?k:H[k],B=g[F],M=ga[k],M.scope){y=N;do y=y.nextSibling;while(y&&y.$$NG_REMOVED);M.clone[0]!=y&&c.move(lb(M.clone),null,x(N));N=M.clone[M.clone.length-1];e(M.scope,k,t,B,v,F,L)}else n(function(a,d){M.scope=
d;var f=m.cloneNode();a[a.length++]=f;c.enter(a,null,x(N));N=f;M.clone=a;w[M.id]=M;e(M.scope,k,t,B,v,F,L)});q=w})}}}}],Yd=["$animate",function(a){return{restrict:"A",multiElement:!0,link:function(c,d,e){c.$watch(e.ngShow,function(c){a[c?"removeClass":"addClass"](d,"ng-hide")})}}}],Rd=["$animate",function(a){return{restrict:"A",multiElement:!0,link:function(c,d,e){c.$watch(e.ngHide,function(c){a[c?"addClass":"removeClass"](d,"ng-hide")})}}}],Zd=Ea(function(a,c,d){a.$watch(d.ngStyle,function(a,d){d&&
a!==d&&r(d,function(a,d){c.css(d,"")});a&&c.css(a)},!0)}),$d=["$animate",function(a){return{restrict:"EA",require:"ngSwitch",controller:["$scope",function(){this.cases={}}],link:function(c,d,e,f){var g=[],h=[],m=[],k=[];c.$watch(e.ngSwitch||e.on,function(d){var p,l;p=0;for(l=m.length;p<l;++p)a.cancel(m[p]);p=m.length=0;for(l=k.length;p<l;++p){var q=lb(h[p].clone);k[p].$destroy();(m[p]=a.leave(q)).then(function(){m.splice(p,1)})}h.length=0;k.length=0;if(g=f.cases["!"+d]||f.cases["?"])c.$eval(e.change),
r(g,function(c){c.transclude(function(d,e){k.push(e);var f=c.element;d[d.length++]=Y.createComment(" end ngSwitchWhen: ");h.push({clone:d});a.enter(d,f.parent(),f)})})})}}}],ae=Ea({transclude:"element",priority:1200,require:"^ngSwitch",multiElement:!0,link:function(a,c,d,e,f){e.cases["!"+d.ngSwitchWhen]=e.cases["!"+d.ngSwitchWhen]||[];e.cases["!"+d.ngSwitchWhen].push({transclude:f,element:c})}}),be=Ea({transclude:"element",priority:1200,require:"^ngSwitch",multiElement:!0,link:function(a,c,d,e,f){e.cases["?"]=
e.cases["?"]||[];e.cases["?"].push({transclude:f,element:c})}}),de=Ea({restrict:"EAC",link:function(a,c,d,e,f){if(!f)throw Q("ngTransclude")("orphan",ta(c));f(function(a){c.empty();c.append(a)})}}),Ed=["$templateCache",function(a){return{restrict:"E",terminal:!0,compile:function(c,d){"text/ng-template"==d.type&&a.put(d.id,c[0].text)}}}],Cf=Q("ngOptions"),ce=fa({restrict:"A",terminal:!0}),Fd=["$compile","$parse",function(a,c){var d=/^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/,
e={$setViewValue:y};return{restrict:"E",require:["select","?ngModel"],controller:["$element","$scope","$attrs",function(a,c,d){var m=this,k={},n=e,p;m.databound=d.ngModel;m.init=function(a,c,d){n=a;p=d};m.addOption=function(c,d){La(c,'"option value"');k[c]=!0;n.$viewValue==c&&(a.val(c),p.parent()&&p.remove());d[0].hasAttribute("selected")&&(d[0].selected=!0)};m.removeOption=function(a){this.hasOption(a)&&(delete k[a],n.$viewValue==a&&this.renderUnknownOption(a))};m.renderUnknownOption=function(c){c=
"? "+Ma(c)+" ?";p.val(c);a.prepend(p);a.val(c);p.prop("selected",!0)};m.hasOption=function(a){return k.hasOwnProperty(a)};c.$on("$destroy",function(){m.renderUnknownOption=y})}],link:function(e,g,h,m){function k(a,c,d,e){d.$render=function(){var a=d.$viewValue;e.hasOption(a)?(B.parent()&&B.remove(),c.val(a),""===a&&y.prop("selected",!0)):F(a)&&y?c.val(""):e.renderUnknownOption(a)};c.on("change",function(){a.$apply(function(){B.parent()&&B.remove();d.$setViewValue(c.val())})})}function n(a,c,d){var e;
d.$render=function(){var a=new $a(d.$viewValue);r(c.find("option"),function(c){c.selected=G(a.get(c.value))})};a.$watch(function(){ra(e,d.$viewValue)||(e=qa(d.$viewValue),d.$render())});c.on("change",function(){a.$apply(function(){var a=[];r(c.find("option"),function(c){c.selected&&a.push(c.value)});d.$setViewValue(a)})})}function p(e,f,g){function h(){A=!1;var a={"":[]},c=[""],d,k,s,t,w;s=g.$modelValue;t=y(e)||[];var C=n?bc(t):t,F,J,u;J={};u=!1;if(q)if(k=g.$modelValue,x&&H(k))for(u=new $a([]),d=
{},w=0;w<k.length;w++)d[m]=k[w],u.put(x(e,d),k[w]);else u=new $a(k);w=u;var E,K;for(u=0;F=C.length,u<F;u++){k=u;if(n){k=C[u];if("$"===k.charAt(0))continue;J[n]=k}J[m]=t[k];d=p(e,J)||"";(k=a[d])||(k=a[d]=[],c.push(d));q?d=G(w.remove(x?x(e,J):r(e,J))):(x?(d={},d[m]=s,d=x(e,d)===x(e,J)):d=s===r(e,J),w=w||d);E=l(e,J);E=G(E)?E:"";k.push({id:x?x(e,J):n?C[u]:u,label:E,selected:d})}q||(v||null===s?a[""].unshift({id:"",label:"",selected:!w}):w||a[""].unshift({id:"?",label:"",selected:!0}));J=0;for(C=c.length;J<
C;J++){d=c[J];k=a[d];B.length<=J?(s={element:z.clone().attr("label",d),label:k.label},t=[s],B.push(t),f.append(s.element)):(t=B[J],s=t[0],s.label!=d&&s.element.attr("label",s.label=d));E=null;u=0;for(F=k.length;u<F;u++)d=k[u],(w=t[u+1])?(E=w.element,w.label!==d.label&&E.text(w.label=d.label),w.id!==d.id&&E.val(w.id=d.id),E[0].selected!==d.selected&&(E.prop("selected",w.selected=d.selected),aa&&E.prop("selected",w.selected))):(""===d.id&&v?K=v:(K=D.clone()).val(d.id).prop("selected",d.selected).attr("selected",
d.selected).text(d.label),t.push({element:K,label:d.label,id:d.id,selected:d.selected}),E?E.after(K):s.element.append(K),E=K);for(u++;t.length>u;)t.pop().element.remove()}for(;B.length>J;)B.pop()[0].element.remove()}var k;if(!(k=t.match(d)))throw Cf("iexp",t,ta(f));var l=c(k[2]||k[1]),m=k[4]||k[6],n=k[5],p=c(k[3]||""),r=c(k[2]?k[1]:m),y=c(k[7]),x=k[8]?c(k[8]):null,B=[[{element:f,label:""}]];v&&(a(v)(e),v.removeClass("ng-scope"),v.remove());f.empty();f.on("change",function(){e.$apply(function(){var a,
c=y(e)||[],d={},k,l,p,t,v,w,u;if(q)for(l=[],t=0,w=B.length;t<w;t++)for(a=B[t],p=1,v=a.length;p<v;p++){if((k=a[p].element)[0].selected){k=k.val();n&&(d[n]=k);if(x)for(u=0;u<c.length&&(d[m]=c[u],x(e,d)!=k);u++);else d[m]=c[k];l.push(r(e,d))}}else if(k=f.val(),"?"==k)l=s;else if(""===k)l=null;else if(x)for(u=0;u<c.length;u++){if(d[m]=c[u],x(e,d)==k){l=r(e,d);break}}else d[m]=c[k],n&&(d[n]=k),l=r(e,d);g.$setViewValue(l);h()})});g.$render=h;e.$watchCollection(y,function(){A||(e.$$postDigest(h),A=!0)});
q&&e.$watchCollection(function(){return g.$modelValue},function(){A||(e.$$postDigest(h),A=!0)})}if(m[1]){var l=m[0];m=m[1];var q=h.multiple,t=h.ngOptions,v=!1,y,A=!1,D=x(Y.createElement("option")),z=x(Y.createElement("optgroup")),B=D.clone();h=0;for(var C=g.children(),E=C.length;h<E;h++)if(""===C[h].value){y=v=C.eq(h);break}l.init(m,v,B);q&&(m.$isEmpty=function(a){return!a||0===a.length});t?p(e,g,m):q?n(e,g,m):k(e,g,m,l)}}}}],Hd=["$interpolate",function(a){var c={addOption:y,removeOption:y};return{restrict:"E",
priority:100,compile:function(d,e){if(F(e.value)){var f=a(d.text(),!0);f||e.$set("value",d.text())}return function(a,d,e){var k=d.parent(),n=k.data("$selectController")||k.parent().data("$selectController");n&&n.databound?d.prop("selected",!1):n=c;f?a.$watch(f,function(a,c){e.$set("value",a);c!==a&&n.removeOption(c);n.addOption(a,d)}):n.addOption(e.value,d);d.on("$destroy",function(){n.removeOption(e.value)})}}}}],Gd=fa({restrict:"E",terminal:!1});P.angular.bootstrap?console.log("WARNING: Tried to load angular more than once."):
(wd(),yd(xa),x(Y).ready(function(){sd(Y,jc)}))})(window,document);!window.angular.$$csp()&&window.angular.element(document).find("head").prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide:not(.ng-animate){display:none !important;}ng\\:form{display:block;}</style>');
//# sourceMappingURL=angular.min.js.map

/**
 * @license AngularJS v1.3.0-beta.7
 * (c) 2010-2014 Google, Inc. http://angularjs.org
 * License: MIT
 */
(function(window, angular, undefined) {'use strict';

/**
 * @ngdoc module
 * @name ngRoute
 * @description
 *
 * # ngRoute
 *
 * The `ngRoute` module provides routing and deeplinking services and directives for angular apps.
 *
 * ## Example
 * See {@link ngRoute.$route#example $route} for an example of configuring and using `ngRoute`.
 *
 *
 * <div doc-module-components="ngRoute"></div>
 */
 /* global -ngRouteModule */
var ngRouteModule = angular.module('ngRoute', ['ng']).
                        provider('$route', $RouteProvider);

/**
 * @ngdoc provider
 * @name $routeProvider
 * @function
 *
 * @description
 *
 * Used for configuring routes.
 *
 * ## Example
 * See {@link ngRoute.$route#example $route} for an example of configuring and using `ngRoute`.
 *
 * ## Dependencies
 * Requires the {@link ngRoute `ngRoute`} module to be installed.
 */
function $RouteProvider(){
  function inherit(parent, extra) {
    return angular.extend(new (angular.extend(function() {}, {prototype:parent}))(), extra);
  }

  var routes = {};

  /**
   * @ngdoc method
   * @name $routeProvider#when
   *
   * @param {string} path Route path (matched against `$location.path`). If `$location.path`
   *    contains redundant trailing slash or is missing one, the route will still match and the
   *    `$location.path` will be updated to add or drop the trailing slash to exactly match the
   *    route definition.
   *
   *    * `path` can contain named groups starting with a colon: e.g. `:name`. All characters up
   *        to the next slash are matched and stored in `$routeParams` under the given `name`
   *        when the route matches.
   *    * `path` can contain named groups starting with a colon and ending with a star:
   *        e.g.`:name*`. All characters are eagerly stored in `$routeParams` under the given `name`
   *        when the route matches.
   *    * `path` can contain optional named groups with a question mark: e.g.`:name?`.
   *
   *    For example, routes like `/color/:color/largecode/:largecode*\/edit` will match
   *    `/color/brown/largecode/code/with/slashes/edit` and extract:
   *
   *    * `color: brown`
   *    * `largecode: code/with/slashes`.
   *
   *
   * @param {Object} route Mapping information to be assigned to `$route.current` on route
   *    match.
   *
   *    Object properties:
   *
   *    - `controller` – `{(string|function()=}` – Controller fn that should be associated with
   *      newly created scope or the name of a {@link angular.Module#controller registered
   *      controller} if passed as a string.
   *    - `controllerAs` – `{string=}` – A controller alias name. If present the controller will be
   *      published to scope under the `controllerAs` name.
   *    - `template` – `{string=|function()=}` – html template as a string or a function that
   *      returns an html template as a string which should be used by {@link
   *      ngRoute.directive:ngView ngView} or {@link ng.directive:ngInclude ngInclude} directives.
   *      This property takes precedence over `templateUrl`.
   *
   *      If `template` is a function, it will be called with the following parameters:
   *
   *      - `{Array.<Object>}` - route parameters extracted from the current
   *        `$location.path()` by applying the current route
   *
   *    - `templateUrl` – `{string=|function()=}` – path or function that returns a path to an html
   *      template that should be used by {@link ngRoute.directive:ngView ngView}.
   *
   *      If `templateUrl` is a function, it will be called with the following parameters:
   *
   *      - `{Array.<Object>}` - route parameters extracted from the current
   *        `$location.path()` by applying the current route
   *
   *    - `resolve` - `{Object.<string, function>=}` - An optional map of dependencies which should
   *      be injected into the controller. If any of these dependencies are promises, the router
   *      will wait for them all to be resolved or one to be rejected before the controller is
   *      instantiated.
   *      If all the promises are resolved successfully, the values of the resolved promises are
   *      injected and {@link ngRoute.$route#$routeChangeSuccess $routeChangeSuccess} event is
   *      fired. If any of the promises are rejected the
   *      {@link ngRoute.$route#$routeChangeError $routeChangeError} event is fired. The map object
   *      is:
   *
   *      - `key` – `{string}`: a name of a dependency to be injected into the controller.
   *      - `factory` - `{string|function}`: If `string` then it is an alias for a service.
   *        Otherwise if function, then it is {@link auto.$injector#invoke injected}
   *        and the return value is treated as the dependency. If the result is a promise, it is
   *        resolved before its value is injected into the controller. Be aware that
   *        `ngRoute.$routeParams` will still refer to the previous route within these resolve
   *        functions.  Use `$route.current.params` to access the new route parameters, instead.
   *
   *    - `redirectTo` – {(string|function())=} – value to update
   *      {@link ng.$location $location} path with and trigger route redirection.
   *
   *      If `redirectTo` is a function, it will be called with the following parameters:
   *
   *      - `{Object.<string>}` - route parameters extracted from the current
   *        `$location.path()` by applying the current route templateUrl.
   *      - `{string}` - current `$location.path()`
   *      - `{Object}` - current `$location.search()`
   *
   *      The custom `redirectTo` function is expected to return a string which will be used
   *      to update `$location.path()` and `$location.search()`.
   *
   *    - `[reloadOnSearch=true]` - {boolean=} - reload route when only `$location.search()`
   *      or `$location.hash()` changes.
   *
   *      If the option is set to `false` and url in the browser changes, then
   *      `$routeUpdate` event is broadcasted on the root scope.
   *
   *    - `[caseInsensitiveMatch=false]` - {boolean=} - match routes without being case sensitive
   *
   *      If the option is set to `true`, then the particular route can be matched without being
   *      case sensitive
   *
   * @returns {Object} self
   *
   * @description
   * Adds a new route definition to the `$route` service.
   */
  this.when = function(path, route) {
    routes[path] = angular.extend(
      {reloadOnSearch: true},
      route,
      path && pathRegExp(path, route)
    );

    // create redirection for trailing slashes
    if (path) {
      var redirectPath = (path[path.length-1] == '/')
            ? path.substr(0, path.length-1)
            : path +'/';

      routes[redirectPath] = angular.extend(
        {redirectTo: path},
        pathRegExp(redirectPath, route)
      );
    }

    return this;
  };

   /**
    * @param path {string} path
    * @param opts {Object} options
    * @return {?Object}
    *
    * @description
    * Normalizes the given path, returning a regular expression
    * and the original path.
    *
    * Inspired by pathRexp in visionmedia/express/lib/utils.js.
    */
  function pathRegExp(path, opts) {
    var insensitive = opts.caseInsensitiveMatch,
        ret = {
          originalPath: path,
          regexp: path
        },
        keys = ret.keys = [];

    path = path
      .replace(/([().])/g, '\\$1')
      .replace(/(\/)?:(\w+)([\?\*])?/g, function(_, slash, key, option){
        var optional = option === '?' ? option : null;
        var star = option === '*' ? option : null;
        keys.push({ name: key, optional: !!optional });
        slash = slash || '';
        return ''
          + (optional ? '' : slash)
          + '(?:'
          + (optional ? slash : '')
          + (star && '(.+?)' || '([^/]+)')
          + (optional || '')
          + ')'
          + (optional || '');
      })
      .replace(/([\/$\*])/g, '\\$1');

    ret.regexp = new RegExp('^' + path + '$', insensitive ? 'i' : '');
    return ret;
  }

  /**
   * @ngdoc method
   * @name $routeProvider#otherwise
   *
   * @description
   * Sets route definition that will be used on route change when no other route definition
   * is matched.
   *
   * @param {Object} params Mapping information to be assigned to `$route.current`.
   * @returns {Object} self
   */
  this.otherwise = function(params) {
    this.when(null, params);
    return this;
  };


  this.$get = ['$rootScope',
               '$location',
               '$routeParams',
               '$q',
               '$injector',
               '$http',
               '$templateCache',
               '$sce',
      function($rootScope, $location, $routeParams, $q, $injector, $http, $templateCache, $sce) {

    /**
     * @ngdoc service
     * @name $route
     * @requires $location
     * @requires $routeParams
     *
     * @property {Object} current Reference to the current route definition.
     * The route definition contains:
     *
     *   - `controller`: The controller constructor as define in route definition.
     *   - `locals`: A map of locals which is used by {@link ng.$controller $controller} service for
     *     controller instantiation. The `locals` contain
     *     the resolved values of the `resolve` map. Additionally the `locals` also contain:
     *
     *     - `$scope` - The current route scope.
     *     - `$template` - The current route template HTML.
     *
     * @property {Object} routes Object with all route configuration Objects as its properties.
     *
     * @description
     * `$route` is used for deep-linking URLs to controllers and views (HTML partials).
     * It watches `$location.url()` and tries to map the path to an existing route definition.
     *
     * Requires the {@link ngRoute `ngRoute`} module to be installed.
     *
     * You can define routes through {@link ngRoute.$routeProvider $routeProvider}'s API.
     *
     * The `$route` service is typically used in conjunction with the
     * {@link ngRoute.directive:ngView `ngView`} directive and the
     * {@link ngRoute.$routeParams `$routeParams`} service.
     *
     * @example
     * This example shows how changing the URL hash causes the `$route` to match a route against the
     * URL, and the `ngView` pulls in the partial.
     *
     * Note that this example is using {@link ng.directive:script inlined templates}
     * to get it working on jsfiddle as well.
     *
     * <example name="$route-service" module="ngRouteExample"
     *          deps="angular-route.js" fixBase="true">
     *   <file name="index.html">
     *     <div ng-controller="MainController">
     *       Choose:
     *       <a href="Book/Moby">Moby</a> |
     *       <a href="Book/Moby/ch/1">Moby: Ch1</a> |
     *       <a href="Book/Gatsby">Gatsby</a> |
     *       <a href="Book/Gatsby/ch/4?key=value">Gatsby: Ch4</a> |
     *       <a href="Book/Scarlet">Scarlet Letter</a><br/>
     *
     *       <div ng-view></div>
     *
     *       <hr />
     *
     *       <pre>$location.path() = {{$location.path()}}</pre>
     *       <pre>$route.current.templateUrl = {{$route.current.templateUrl}}</pre>
     *       <pre>$route.current.params = {{$route.current.params}}</pre>
     *       <pre>$route.current.scope.name = {{$route.current.scope.name}}</pre>
     *       <pre>$routeParams = {{$routeParams}}</pre>
     *     </div>
     *   </file>
     *
     *   <file name="book.html">
     *     controller: {{name}}<br />
     *     Book Id: {{params.bookId}}<br />
     *   </file>
     *
     *   <file name="chapter.html">
     *     controller: {{name}}<br />
     *     Book Id: {{params.bookId}}<br />
     *     Chapter Id: {{params.chapterId}}
     *   </file>
     *
     *   <file name="script.js">
     *     angular.module('ngRouteExample', ['ngRoute'])
     *
     *      .controller('MainController', function($scope, $route, $routeParams, $location) {
     *          $scope.$route = $route;
     *          $scope.$location = $location;
     *          $scope.$routeParams = $routeParams;
     *      })
     *
     *      .controller('BookController', function($scope, $routeParams) {
     *          $scope.name = "BookController";
     *          $scope.params = $routeParams;
     *      })
     *
     *      .controller('ChapterController', function($scope, $routeParams) {
     *          $scope.name = "ChapterController";
     *          $scope.params = $routeParams;
     *      })
     *
     *     .config(function($routeProvider, $locationProvider) {
     *       $routeProvider
     *        .when('/Book/:bookId', {
     *         templateUrl: 'book.html',
     *         controller: 'BookController',
     *         resolve: {
     *           // I will cause a 1 second delay
     *           delay: function($q, $timeout) {
     *             var delay = $q.defer();
     *             $timeout(delay.resolve, 1000);
     *             return delay.promise;
     *           }
     *         }
     *       })
     *       .when('/Book/:bookId/ch/:chapterId', {
     *         templateUrl: 'chapter.html',
     *         controller: 'ChapterController'
     *       });
     *
     *       // configure html5 to get links working on jsfiddle
     *       $locationProvider.html5Mode(true);
     *     });
     *
     *   </file>
     *
     *   <file name="protractor.js" type="protractor">
     *     it('should load and compile correct template', function() {
     *       element(by.linkText('Moby: Ch1')).click();
     *       var content = element(by.css('[ng-view]')).getText();
     *       expect(content).toMatch(/controller\: ChapterController/);
     *       expect(content).toMatch(/Book Id\: Moby/);
     *       expect(content).toMatch(/Chapter Id\: 1/);
     *
     *       element(by.partialLinkText('Scarlet')).click();
     *
     *       content = element(by.css('[ng-view]')).getText();
     *       expect(content).toMatch(/controller\: BookController/);
     *       expect(content).toMatch(/Book Id\: Scarlet/);
     *     });
     *   </file>
     * </example>
     */

    /**
     * @ngdoc event
     * @name $route#$routeChangeStart
     * @eventType broadcast on root scope
     * @description
     * Broadcasted before a route change. At this  point the route services starts
     * resolving all of the dependencies needed for the route change to occur.
     * Typically this involves fetching the view template as well as any dependencies
     * defined in `resolve` route property. Once  all of the dependencies are resolved
     * `$routeChangeSuccess` is fired.
     *
     * @param {Object} angularEvent Synthetic event object.
     * @param {Route} next Future route information.
     * @param {Route} current Current route information.
     */

    /**
     * @ngdoc event
     * @name $route#$routeChangeSuccess
     * @eventType broadcast on root scope
     * @description
     * Broadcasted after a route dependencies are resolved.
     * {@link ngRoute.directive:ngView ngView} listens for the directive
     * to instantiate the controller and render the view.
     *
     * @param {Object} angularEvent Synthetic event object.
     * @param {Route} current Current route information.
     * @param {Route|Undefined} previous Previous route information, or undefined if current is
     * first route entered.
     */

    /**
     * @ngdoc event
     * @name $route#$routeChangeError
     * @eventType broadcast on root scope
     * @description
     * Broadcasted if any of the resolve promises are rejected.
     *
     * @param {Object} angularEvent Synthetic event object
     * @param {Route} current Current route information.
     * @param {Route} previous Previous route information.
     * @param {Route} rejection Rejection of the promise. Usually the error of the failed promise.
     */

    /**
     * @ngdoc event
     * @name $route#$routeUpdate
     * @eventType broadcast on root scope
     * @description
     *
     * The `reloadOnSearch` property has been set to false, and we are reusing the same
     * instance of the Controller.
     */

    var forceReload = false,
        $route = {
          routes: routes,

          /**
           * @ngdoc method
           * @name $route#reload
           *
           * @description
           * Causes `$route` service to reload the current route even if
           * {@link ng.$location $location} hasn't changed.
           *
           * As a result of that, {@link ngRoute.directive:ngView ngView}
           * creates new scope, reinstantiates the controller.
           */
          reload: function() {
            forceReload = true;
            $rootScope.$evalAsync(updateRoute);
          }
        };

    $rootScope.$on('$locationChangeSuccess', updateRoute);

    return $route;

    /////////////////////////////////////////////////////

    /**
     * @param on {string} current url
     * @param route {Object} route regexp to match the url against
     * @return {?Object}
     *
     * @description
     * Check if the route matches the current url.
     *
     * Inspired by match in
     * visionmedia/express/lib/router/router.js.
     */
    function switchRouteMatcher(on, route) {
      var keys = route.keys,
          params = {};

      if (!route.regexp) return null;

      var m = route.regexp.exec(on);
      if (!m) return null;

      for (var i = 1, len = m.length; i < len; ++i) {
        var key = keys[i - 1];

        var val = 'string' == typeof m[i]
              ? decodeURIComponent(m[i])
              : m[i];

        if (key && val) {
          params[key.name] = val;
        }
      }
      return params;
    }

    function updateRoute() {
      var next = parseRoute(),
          last = $route.current;

      if (next && last && next.$$route === last.$$route
          && angular.equals(next.pathParams, last.pathParams)
          && !next.reloadOnSearch && !forceReload) {
        last.params = next.params;
        angular.copy(last.params, $routeParams);
        $rootScope.$broadcast('$routeUpdate', last);
      } else if (next || last) {
        forceReload = false;
        $rootScope.$broadcast('$routeChangeStart', next, last);
        $route.current = next;
        if (next) {
          if (next.redirectTo) {
            if (angular.isString(next.redirectTo)) {
              $location.path(interpolate(next.redirectTo, next.params)).search(next.params)
                       .replace();
            } else {
              $location.url(next.redirectTo(next.pathParams, $location.path(), $location.search()))
                       .replace();
            }
          }
        }

        $q.when(next).
          then(function() {
            if (next) {
              var locals = angular.extend({}, next.resolve),
                  template, templateUrl;

              angular.forEach(locals, function(value, key) {
                locals[key] = angular.isString(value) ?
                    $injector.get(value) : $injector.invoke(value, null, null, key);
              });

              if (angular.isDefined(template = next.template)) {
                if (angular.isFunction(template)) {
                  template = template(next.params);
                }
              } else if (angular.isDefined(templateUrl = next.templateUrl)) {
                if (angular.isFunction(templateUrl)) {
                  templateUrl = templateUrl(next.params);
                }
                templateUrl = $sce.getTrustedResourceUrl(templateUrl);
                if (angular.isDefined(templateUrl)) {
                  next.loadedTemplateUrl = templateUrl;
                  template = $http.get(templateUrl, {cache: $templateCache}).
                      then(function(response) { return response.data; });
                }
              }
              if (angular.isDefined(template)) {
                locals['$template'] = template;
              }
              return $q.all(locals);
            }
          }).
          // after route change
          then(function(locals) {
            if (next == $route.current) {
              if (next) {
                next.locals = locals;
                angular.copy(next.params, $routeParams);
              }
              $rootScope.$broadcast('$routeChangeSuccess', next, last);
            }
          }, function(error) {
            if (next == $route.current) {
              $rootScope.$broadcast('$routeChangeError', next, last, error);
            }
          });
      }
    }


    /**
     * @returns {Object} the current active route, by matching it against the URL
     */
    function parseRoute() {
      // Match a route
      var params, match;
      angular.forEach(routes, function(route, path) {
        if (!match && (params = switchRouteMatcher($location.path(), route))) {
          match = inherit(route, {
            params: angular.extend({}, $location.search(), params),
            pathParams: params});
          match.$$route = route;
        }
      });
      // No route matched; fallback to "otherwise" route
      return match || routes[null] && inherit(routes[null], {params: {}, pathParams:{}});
    }

    /**
     * @returns {string} interpolation of the redirect path with the parameters
     */
    function interpolate(string, params) {
      var result = [];
      angular.forEach((string||'').split(':'), function(segment, i) {
        if (i === 0) {
          result.push(segment);
        } else {
          var segmentMatch = segment.match(/(\w+)(.*)/);
          var key = segmentMatch[1];
          result.push(params[key]);
          result.push(segmentMatch[2] || '');
          delete params[key];
        }
      });
      return result.join('');
    }
  }];
}

ngRouteModule.provider('$routeParams', $RouteParamsProvider);


/**
 * @ngdoc service
 * @name $routeParams
 * @requires $route
 *
 * @description
 * The `$routeParams` service allows you to retrieve the current set of route parameters.
 *
 * Requires the {@link ngRoute `ngRoute`} module to be installed.
 *
 * The route parameters are a combination of {@link ng.$location `$location`}'s
 * {@link ng.$location#search `search()`} and {@link ng.$location#path `path()`}.
 * The `path` parameters are extracted when the {@link ngRoute.$route `$route`} path is matched.
 *
 * In case of parameter name collision, `path` params take precedence over `search` params.
 *
 * The service guarantees that the identity of the `$routeParams` object will remain unchanged
 * (but its properties will likely change) even when a route change occurs.
 *
 * Note that the `$routeParams` are only updated *after* a route change completes successfully.
 * This means that you cannot rely on `$routeParams` being correct in route resolve functions.
 * Instead you can use `$route.current.params` to access the new route's parameters.
 *
 * @example
 * ```js
 *  // Given:
 *  // URL: http://server.com/index.html#/Chapter/1/Section/2?search=moby
 *  // Route: /Chapter/:chapterId/Section/:sectionId
 *  //
 *  // Then
 *  $routeParams ==> {chapterId:1, sectionId:2, search:'moby'}
 * ```
 */
function $RouteParamsProvider() {
  this.$get = function() { return {}; };
}

ngRouteModule.directive('ngView', ngViewFactory);
ngRouteModule.directive('ngView', ngViewFillContentFactory);


/**
 * @ngdoc directive
 * @name ngView
 * @restrict ECA
 *
 * @description
 * # Overview
 * `ngView` is a directive that complements the {@link ngRoute.$route $route} service by
 * including the rendered template of the current route into the main layout (`index.html`) file.
 * Every time the current route changes, the included view changes with it according to the
 * configuration of the `$route` service.
 *
 * Requires the {@link ngRoute `ngRoute`} module to be installed.
 *
 * @animations
 * enter - animation is used to bring new content into the browser.
 * leave - animation is used to animate existing content away.
 *
 * The enter and leave animation occur concurrently.
 *
 * @scope
 * @priority 400
 * @param {string=} onload Expression to evaluate whenever the view updates.
 *
 * @param {string=} autoscroll Whether `ngView` should call {@link ng.$anchorScroll
 *                  $anchorScroll} to scroll the viewport after the view is updated.
 *
 *                  - If the attribute is not set, disable scrolling.
 *                  - If the attribute is set without value, enable scrolling.
 *                  - Otherwise enable scrolling only if the `autoscroll` attribute value evaluated
 *                    as an expression yields a truthy value.
 * @example
    <example name="ngView-directive" module="ngViewExample"
             deps="angular-route.js;angular-animate.js"
             animations="true" fixBase="true">
      <file name="index.html">
        <div ng-controller="MainCtrl as main">
          Choose:
          <a href="Book/Moby">Moby</a> |
          <a href="Book/Moby/ch/1">Moby: Ch1</a> |
          <a href="Book/Gatsby">Gatsby</a> |
          <a href="Book/Gatsby/ch/4?key=value">Gatsby: Ch4</a> |
          <a href="Book/Scarlet">Scarlet Letter</a><br/>

          <div class="view-animate-container">
            <div ng-view class="view-animate"></div>
          </div>
          <hr />

          <pre>$location.path() = {{main.$location.path()}}</pre>
          <pre>$route.current.templateUrl = {{main.$route.current.templateUrl}}</pre>
          <pre>$route.current.params = {{main.$route.current.params}}</pre>
          <pre>$route.current.scope.name = {{main.$route.current.scope.name}}</pre>
          <pre>$routeParams = {{main.$routeParams}}</pre>
        </div>
      </file>

      <file name="book.html">
        <div>
          controller: {{book.name}}<br />
          Book Id: {{book.params.bookId}}<br />
        </div>
      </file>

      <file name="chapter.html">
        <div>
          controller: {{chapter.name}}<br />
          Book Id: {{chapter.params.bookId}}<br />
          Chapter Id: {{chapter.params.chapterId}}
        </div>
      </file>

      <file name="animations.css">
        .view-animate-container {
          position:relative;
          height:100px!important;
          position:relative;
          background:white;
          border:1px solid black;
          height:40px;
          overflow:hidden;
        }

        .view-animate {
          padding:10px;
        }

        .view-animate.ng-enter, .view-animate.ng-leave {
          -webkit-transition:all cubic-bezier(0.250, 0.460, 0.450, 0.940) 1.5s;
          transition:all cubic-bezier(0.250, 0.460, 0.450, 0.940) 1.5s;

          display:block;
          width:100%;
          border-left:1px solid black;

          position:absolute;
          top:0;
          left:0;
          right:0;
          bottom:0;
          padding:10px;
        }

        .view-animate.ng-enter {
          left:100%;
        }
        .view-animate.ng-enter.ng-enter-active {
          left:0;
        }
        .view-animate.ng-leave.ng-leave-active {
          left:-100%;
        }
      </file>

      <file name="script.js">
        angular.module('ngViewExample', ['ngRoute', 'ngAnimate'])
          .config(['$routeProvider', '$locationProvider',
            function($routeProvider, $locationProvider) {
              $routeProvider
                .when('/Book/:bookId', {
                  templateUrl: 'book.html',
                  controller: 'BookCtrl',
                  controllerAs: 'book'
                })
                .when('/Book/:bookId/ch/:chapterId', {
                  templateUrl: 'chapter.html',
                  controller: 'ChapterCtrl',
                  controllerAs: 'chapter'
                });

              // configure html5 to get links working on jsfiddle
              $locationProvider.html5Mode(true);
          }])
          .controller('MainCtrl', ['$route', '$routeParams', '$location',
            function($route, $routeParams, $location) {
              this.$route = $route;
              this.$location = $location;
              this.$routeParams = $routeParams;
          }])
          .controller('BookCtrl', ['$routeParams', function($routeParams) {
            this.name = "BookCtrl";
            this.params = $routeParams;
          }])
          .controller('ChapterCtrl', ['$routeParams', function($routeParams) {
            this.name = "ChapterCtrl";
            this.params = $routeParams;
          }]);

      </file>

      <file name="protractor.js" type="protractor">
        it('should load and compile correct template', function() {
          element(by.linkText('Moby: Ch1')).click();
          var content = element(by.css('[ng-view]')).getText();
          expect(content).toMatch(/controller\: ChapterCtrl/);
          expect(content).toMatch(/Book Id\: Moby/);
          expect(content).toMatch(/Chapter Id\: 1/);

          element(by.partialLinkText('Scarlet')).click();

          content = element(by.css('[ng-view]')).getText();
          expect(content).toMatch(/controller\: BookCtrl/);
          expect(content).toMatch(/Book Id\: Scarlet/);
        });
      </file>
    </example>
 */


/**
 * @ngdoc event
 * @name ngView#$viewContentLoaded
 * @eventType emit on the current ngView scope
 * @description
 * Emitted every time the ngView content is reloaded.
 */
ngViewFactory.$inject = ['$route', '$anchorScroll', '$animate'];
function ngViewFactory(   $route,   $anchorScroll,   $animate) {
  return {
    restrict: 'ECA',
    terminal: true,
    priority: 400,
    transclude: 'element',
    link: function(scope, $element, attr, ctrl, $transclude) {
        var currentScope,
            currentElement,
            previousElement,
            autoScrollExp = attr.autoscroll,
            onloadExp = attr.onload || '';

        scope.$on('$routeChangeSuccess', update);
        update();

        function cleanupLastView() {
          if(previousElement) {
            previousElement.remove();
            previousElement = null;
          }
          if(currentScope) {
            currentScope.$destroy();
            currentScope = null;
          }
          if(currentElement) {
            $animate.leave(currentElement, function() {
              previousElement = null;
            });
            previousElement = currentElement;
            currentElement = null;
          }
        }

        function update() {
          var locals = $route.current && $route.current.locals,
              template = locals && locals.$template;

          if (angular.isDefined(template)) {
            var newScope = scope.$new();
            var current = $route.current;

            // Note: This will also link all children of ng-view that were contained in the original
            // html. If that content contains controllers, ... they could pollute/change the scope.
            // However, using ng-view on an element with additional content does not make sense...
            // Note: We can't remove them in the cloneAttchFn of $transclude as that
            // function is called before linking the content, which would apply child
            // directives to non existing elements.
            var clone = $transclude(newScope, function(clone) {
              $animate.enter(clone, null, currentElement || $element, function onNgViewEnter () {
                if (angular.isDefined(autoScrollExp)
                  && (!autoScrollExp || scope.$eval(autoScrollExp))) {
                  $anchorScroll();
                }
              });
              cleanupLastView();
            });

            currentElement = clone;
            currentScope = current.scope = newScope;
            currentScope.$emit('$viewContentLoaded');
            currentScope.$eval(onloadExp);
          } else {
            cleanupLastView();
          }
        }
    }
  };
}

// This directive is called during the $transclude call of the first `ngView` directive.
// It will replace and compile the content of the element with the loaded template.
// We need this directive so that the element content is already filled when
// the link function of another directive on the same element as ngView
// is called.
ngViewFillContentFactory.$inject = ['$compile', '$controller', '$route'];
function ngViewFillContentFactory($compile, $controller, $route) {
  return {
    restrict: 'ECA',
    priority: -400,
    link: function(scope, $element) {
      var current = $route.current,
          locals = current.locals;

      $element.html(locals.$template);

      var link = $compile($element.contents());

      if (current.controller) {
        locals.$scope = scope;
        var controller = $controller(current.controller, locals);
        if (current.controllerAs) {
          scope[current.controllerAs] = controller;
        }
        $element.data('$ngControllerController', controller);
        $element.children().data('$ngControllerController', controller);
      }

      link(scope);
    }
  };
}


})(window, window.angular);

/**
 * @license AngularJS v1.3.0-beta.7
 * (c) 2010-2014 Google, Inc. http://angularjs.org
 * License: MIT
 */
(function(window, angular, undefined) {'use strict';

var $resourceMinErr = angular.$$minErr('$resource');

// Helper functions and regex to lookup a dotted path on an object
// stopping at undefined/null.  The path must be composed of ASCII
// identifiers (just like $parse)
var MEMBER_NAME_REGEX = /^(\.[a-zA-Z_$][0-9a-zA-Z_$]*)+$/;

function isValidDottedPath(path) {
  return (path != null && path !== '' && path !== 'hasOwnProperty' &&
      MEMBER_NAME_REGEX.test('.' + path));
}

function lookupDottedPath(obj, path) {
  if (!isValidDottedPath(path)) {
    throw $resourceMinErr('badmember', 'Dotted member path "@{0}" is invalid.', path);
  }
  var keys = path.split('.');
  for (var i = 0, ii = keys.length; i < ii && obj !== undefined; i++) {
    var key = keys[i];
    obj = (obj !== null) ? obj[key] : undefined;
  }
  return obj;
}

/**
 * Create a shallow copy of an object and clear other fields from the destination
 */
function shallowClearAndCopy(src, dst) {
  dst = dst || {};

  angular.forEach(dst, function(value, key){
    delete dst[key];
  });

  for (var key in src) {
    if (src.hasOwnProperty(key) && !(key.charAt(0) === '$' && key.charAt(1) === '$')) {
      dst[key] = src[key];
    }
  }

  return dst;
}

/**
 * @ngdoc module
 * @name ngResource
 * @description
 *
 * # ngResource
 *
 * The `ngResource` module provides interaction support with RESTful services
 * via the $resource service.
 *
 *
 * <div doc-module-components="ngResource"></div>
 *
 * See {@link ngResource.$resource `$resource`} for usage.
 */

/**
 * @ngdoc service
 * @name $resource
 * @requires $http
 *
 * @description
 * A factory which creates a resource object that lets you interact with
 * [RESTful](http://en.wikipedia.org/wiki/Representational_State_Transfer) server-side data sources.
 *
 * The returned resource object has action methods which provide high-level behaviors without
 * the need to interact with the low level {@link ng.$http $http} service.
 *
 * Requires the {@link ngResource `ngResource`} module to be installed.
 *
 * By default, trailing slashes will be stripped from the calculated URLs,
 * which can pose problems with server backends that do not expect that
 * behavior.  This can be disabled by configuring the `$resourceProvider` like
 * this:
 *
 * ```js
     app.config(['$resourceProvider', function ($resourceProvider) {
       // Don't strip trailing slashes from calculated URLs
       $resourceProvider.defaults.stripTrailingSlashes = false;
     }]);
 * ```
 *
 * @param {string} url A parametrized URL template with parameters prefixed by `:` as in
 *   `/user/:username`. If you are using a URL with a port number (e.g.
 *   `http://example.com:8080/api`), it will be respected.
 *
 *   If you are using a url with a suffix, just add the suffix, like this:
 *   `$resource('http://example.com/resource.json')` or `$resource('http://example.com/:id.json')`
 *   or even `$resource('http://example.com/resource/:resource_id.:format')`
 *   If the parameter before the suffix is empty, :resource_id in this case, then the `/.` will be
 *   collapsed down to a single `.`.  If you need this sequence to appear and not collapse then you
 *   can escape it with `/\.`.
 *
 * @param {Object=} paramDefaults Default values for `url` parameters. These can be overridden in
 *   `actions` methods. If any of the parameter value is a function, it will be executed every time
 *   when a param value needs to be obtained for a request (unless the param was overridden).
 *
 *   Each key value in the parameter object is first bound to url template if present and then any
 *   excess keys are appended to the url search query after the `?`.
 *
 *   Given a template `/path/:verb` and parameter `{verb:'greet', salutation:'Hello'}` results in
 *   URL `/path/greet?salutation=Hello`.
 *
 *   If the parameter value is prefixed with `@` then the value of that parameter is extracted from
 *   the data object (useful for non-GET operations).
 *
 * @param {Object.<Object>=} actions Hash with declaration of custom action that should extend
 *   the default set of resource actions. The declaration should be created in the format of {@link
 *   ng.$http#usage_parameters $http.config}:
 *
 *       {action1: {method:?, params:?, isArray:?, headers:?, ...},
 *        action2: {method:?, params:?, isArray:?, headers:?, ...},
 *        ...}
 *
 *   Where:
 *
 *   - **`action`** – {string} – The name of action. This name becomes the name of the method on
 *     your resource object.
 *   - **`method`** – {string} – HTTP request method. Valid methods are: `GET`, `POST`, `PUT`,
 *     `DELETE`, and `JSONP`.
 *   - **`params`** – {Object=} – Optional set of pre-bound parameters for this action. If any of
 *     the parameter value is a function, it will be executed every time when a param value needs to
 *     be obtained for a request (unless the param was overridden).
 *   - **`url`** – {string} – action specific `url` override. The url templating is supported just
 *     like for the resource-level urls.
 *   - **`isArray`** – {boolean=} – If true then the returned object for this action is an array,
 *     see `returns` section.
 *   - **`transformRequest`** –
 *     `{function(data, headersGetter)|Array.<function(data, headersGetter)>}` –
 *     transform function or an array of such functions. The transform function takes the http
 *     request body and headers and returns its transformed (typically serialized) version.
 *   - **`transformResponse`** –
 *     `{function(data, headersGetter)|Array.<function(data, headersGetter)>}` –
 *     transform function or an array of such functions. The transform function takes the http
 *     response body and headers and returns its transformed (typically deserialized) version.
 *   - **`cache`** – `{boolean|Cache}` – If true, a default $http cache will be used to cache the
 *     GET request, otherwise if a cache instance built with
 *     {@link ng.$cacheFactory $cacheFactory}, this cache will be used for
 *     caching.
 *   - **`timeout`** – `{number|Promise}` – timeout in milliseconds, or {@link ng.$q promise} that
 *     should abort the request when resolved.
 *   - **`withCredentials`** - `{boolean}` - whether to set the `withCredentials` flag on the
 *     XHR object. See
 *     [requests with credentials](https://developer.mozilla.org/en/http_access_control#section_5)
 *     for more information.
 *   - **`responseType`** - `{string}` - see
 *     [requestType](https://developer.mozilla.org/en-US/docs/DOM/XMLHttpRequest#responseType).
 *   - **`interceptor`** - `{Object=}` - The interceptor object has two optional methods -
 *     `response` and `responseError`. Both `response` and `responseError` interceptors get called
 *     with `http response` object. See {@link ng.$http $http interceptors}.
 *
 * @param {Object} options Hash with custom settings that should extend the
 *   default `$resourceProvider` behavior.  The only supported option is
 *
 *   Where:
 *
 *   - **`stripTrailingSlashes`** – {boolean} – If true then the trailing
 *   slashes from any calculated URL will be stripped. (Defaults to true.)
 *
 * @returns {Object} A resource "class" object with methods for the default set of resource actions
 *   optionally extended with custom `actions`. The default set contains these actions:
 *   ```js
 *   { 'get':    {method:'GET'},
 *     'save':   {method:'POST'},
 *     'query':  {method:'GET', isArray:true},
 *     'remove': {method:'DELETE'},
 *     'delete': {method:'DELETE'} };
 *   ```
 *
 *   Calling these methods invoke an {@link ng.$http} with the specified http method,
 *   destination and parameters. When the data is returned from the server then the object is an
 *   instance of the resource class. The actions `save`, `remove` and `delete` are available on it
 *   as  methods with the `$` prefix. This allows you to easily perform CRUD operations (create,
 *   read, update, delete) on server-side data like this:
 *   ```js
 *   var User = $resource('/user/:userId', {userId:'@id'});
 *   var user = User.get({userId:123}, function() {
 *     user.abc = true;
 *     user.$save();
 *   });
 *   ```
 *
 *   It is important to realize that invoking a $resource object method immediately returns an
 *   empty reference (object or array depending on `isArray`). Once the data is returned from the
 *   server the existing reference is populated with the actual data. This is a useful trick since
 *   usually the resource is assigned to a model which is then rendered by the view. Having an empty
 *   object results in no rendering, once the data arrives from the server then the object is
 *   populated with the data and the view automatically re-renders itself showing the new data. This
 *   means that in most cases one never has to write a callback function for the action methods.
 *
 *   The action methods on the class object or instance object can be invoked with the following
 *   parameters:
 *
 *   - HTTP GET "class" actions: `Resource.action([parameters], [success], [error])`
 *   - non-GET "class" actions: `Resource.action([parameters], postData, [success], [error])`
 *   - non-GET instance actions:  `instance.$action([parameters], [success], [error])`
 *
 *   Success callback is called with (value, responseHeaders) arguments. Error callback is called
 *   with (httpResponse) argument.
 *
 *   Class actions return empty instance (with additional properties below).
 *   Instance actions return promise of the action.
 *
 *   The Resource instances and collection have these additional properties:
 *
 *   - `$promise`: the {@link ng.$q promise} of the original server interaction that created this
 *     instance or collection.
 *
 *     On success, the promise is resolved with the same resource instance or collection object,
 *     updated with data from server. This makes it easy to use in
 *     {@link ngRoute.$routeProvider resolve section of $routeProvider.when()} to defer view
 *     rendering until the resource(s) are loaded.
 *
 *     On failure, the promise is resolved with the {@link ng.$http http response} object, without
 *     the `resource` property.
 *
 *     If an interceptor object was provided, the promise will instead be resolved with the value
 *     returned by the interceptor.
 *
 *   - `$resolved`: `true` after first server interaction is completed (either with success or
 *      rejection), `false` before that. Knowing if the Resource has been resolved is useful in
 *      data-binding.
 *
 * @example
 *
 * # Credit card resource
 *
 * ```js
     // Define CreditCard class
     var CreditCard = $resource('/user/:userId/card/:cardId',
      {userId:123, cardId:'@id'}, {
       charge: {method:'POST', params:{charge:true}}
      });

     // We can retrieve a collection from the server
     var cards = CreditCard.query(function() {
       // GET: /user/123/card
       // server returns: [ {id:456, number:'1234', name:'Smith'} ];

       var card = cards[0];
       // each item is an instance of CreditCard
       expect(card instanceof CreditCard).toEqual(true);
       card.name = "J. Smith";
       // non GET methods are mapped onto the instances
       card.$save();
       // POST: /user/123/card/456 {id:456, number:'1234', name:'J. Smith'}
       // server returns: {id:456, number:'1234', name: 'J. Smith'};

       // our custom method is mapped as well.
       card.$charge({amount:9.99});
       // POST: /user/123/card/456?amount=9.99&charge=true {id:456, number:'1234', name:'J. Smith'}
     });

     // we can create an instance as well
     var newCard = new CreditCard({number:'0123'});
     newCard.name = "Mike Smith";
     newCard.$save();
     // POST: /user/123/card {number:'0123', name:'Mike Smith'}
     // server returns: {id:789, number:'0123', name: 'Mike Smith'};
     expect(newCard.id).toEqual(789);
 * ```
 *
 * The object returned from this function execution is a resource "class" which has "static" method
 * for each action in the definition.
 *
 * Calling these methods invoke `$http` on the `url` template with the given `method`, `params` and
 * `headers`.
 * When the data is returned from the server then the object is an instance of the resource type and
 * all of the non-GET methods are available with `$` prefix. This allows you to easily support CRUD
 * operations (create, read, update, delete) on server-side data.

   ```js
     var User = $resource('/user/:userId', {userId:'@id'});
     User.get({userId:123}, function(user) {
       user.abc = true;
       user.$save();
     });
   ```
 *
 * It's worth noting that the success callback for `get`, `query` and other methods gets passed
 * in the response that came from the server as well as $http header getter function, so one
 * could rewrite the above example and get access to http headers as:
 *
   ```js
     var User = $resource('/user/:userId', {userId:'@id'});
     User.get({userId:123}, function(u, getResponseHeaders){
       u.abc = true;
       u.$save(function(u, putResponseHeaders) {
         //u => saved user object
         //putResponseHeaders => $http header getter
       });
     });
   ```
 *
 * You can also access the raw `$http` promise via the `$promise` property on the object returned
 *
   ```
     var User = $resource('/user/:userId', {userId:'@id'});
     User.get({userId:123})
         .$promise.then(function(user) {
           $scope.user = user;
         });
   ```

 * # Creating a custom 'PUT' request
 * In this example we create a custom method on our resource to make a PUT request
 * ```js
 *		var app = angular.module('app', ['ngResource', 'ngRoute']);
 *
 *		// Some APIs expect a PUT request in the format URL/object/ID
 *		// Here we are creating an 'update' method
 *		app.factory('Notes', ['$resource', function($resource) {
 *    return $resource('/notes/:id', null,
 *        {
 *            'update': { method:'PUT' }
 *        });
 *		}]);
 *
 *		// In our controller we get the ID from the URL using ngRoute and $routeParams
 *		// We pass in $routeParams and our Notes factory along with $scope
 *		app.controller('NotesCtrl', ['$scope', '$routeParams', 'Notes',
                                      function($scope, $routeParams, Notes) {
 *    // First get a note object from the factory
 *    var note = Notes.get({ id:$routeParams.id });
 *    $id = note.id;
 *
 *    // Now call update passing in the ID first then the object you are updating
 *    Notes.update({ id:$id }, note);
 *
 *    // This will PUT /notes/ID with the note object in the request payload
 *		}]);
 * ```
 */
angular.module('ngResource', ['ng']).
  provider('$resource', function () {
    var provider = this;

    this.defaults = {
      // Strip slashes by default
      stripTrailingSlashes: true,

      // Default actions configuration
      actions: {
        'get': {method: 'GET'},
        'save': {method: 'POST'},
        'query': {method: 'GET', isArray: true},
        'remove': {method: 'DELETE'},
        'delete': {method: 'DELETE'}
      }
    };

    this.$get = ['$http', '$q', function ($http, $q) {

      var noop = angular.noop,
        forEach = angular.forEach,
        extend = angular.extend,
        copy = angular.copy,
        isFunction = angular.isFunction;

      /**
       * We need our custom method because encodeURIComponent is too aggressive and doesn't follow
       * http://www.ietf.org/rfc/rfc3986.txt with regards to the character set
       * (pchar) allowed in path segments:
       *    segment       = *pchar
       *    pchar         = unreserved / pct-encoded / sub-delims / ":" / "@"
       *    pct-encoded   = "%" HEXDIG HEXDIG
       *    unreserved    = ALPHA / DIGIT / "-" / "." / "_" / "~"
       *    sub-delims    = "!" / "$" / "&" / "'" / "(" / ")"
       *                     / "*" / "+" / "," / ";" / "="
       */
      function encodeUriSegment(val) {
        return encodeUriQuery(val, true).
          replace(/%26/gi, '&').
          replace(/%3D/gi, '=').
          replace(/%2B/gi, '+');
      }


      /**
       * This method is intended for encoding *key* or *value* parts of query component. We need a
       * custom method because encodeURIComponent is too aggressive and encodes stuff that doesn't
       * have to be encoded per http://tools.ietf.org/html/rfc3986:
       *    query       = *( pchar / "/" / "?" )
       *    pchar         = unreserved / pct-encoded / sub-delims / ":" / "@"
       *    unreserved    = ALPHA / DIGIT / "-" / "." / "_" / "~"
       *    pct-encoded   = "%" HEXDIG HEXDIG
       *    sub-delims    = "!" / "$" / "&" / "'" / "(" / ")"
       *                     / "*" / "+" / "," / ";" / "="
       */
      function encodeUriQuery(val, pctEncodeSpaces) {
        return encodeURIComponent(val).
          replace(/%40/gi, '@').
          replace(/%3A/gi, ':').
          replace(/%24/g, '$').
          replace(/%2C/gi, ',').
          replace(/%20/g, (pctEncodeSpaces ? '%20' : '+'));
      }

      function Route(template, defaults) {
        this.template = template;
        this.defaults = extend({}, provider.defaults, defaults);
        this.urlParams = {};
      }

      Route.prototype = {
        setUrlParams: function (config, params, actionUrl) {
          var self = this,
            url = actionUrl || self.template,
            val,
            encodedVal;

          var urlParams = self.urlParams = {};
          forEach(url.split(/\W/), function (param) {
            if (param === 'hasOwnProperty') {
              throw $resourceMinErr('badname', "hasOwnProperty is not a valid parameter name.");
            }
            if (!(new RegExp("^\\d+$").test(param)) && param &&
              (new RegExp("(^|[^\\\\]):" + param + "(\\W|$)").test(url))) {
              urlParams[param] = true;
            }
          });
          url = url.replace(/\\:/g, ':');

          params = params || {};
          forEach(self.urlParams, function (_, urlParam) {
            val = params.hasOwnProperty(urlParam) ? params[urlParam] : self.defaults[urlParam];
            if (angular.isDefined(val) && val !== null) {
              encodedVal = encodeUriSegment(val);
              url = url.replace(new RegExp(":" + urlParam + "(\\W|$)", "g"), function (match, p1) {
                return encodedVal + p1;
              });
            } else {
              url = url.replace(new RegExp("(\/?):" + urlParam + "(\\W|$)", "g"), function (match,
                  leadingSlashes, tail) {
                if (tail.charAt(0) == '/') {
                  return tail;
                } else {
                  return leadingSlashes + tail;
                }
              });
            }
          });

          // strip trailing slashes and set the url (unless this behavior is specifically disabled)
          if (self.defaults.stripTrailingSlashes) {
            url = url.replace(/\/+$/, '') || '/';
          }

          // then replace collapse `/.` if found in the last URL path segment before the query
          // E.g. `http://url.com/id./format?q=x` becomes `http://url.com/id.format?q=x`
          url = url.replace(/\/\.(?=\w+($|\?))/, '.');
          // replace escaped `/\.` with `/.`
          config.url = url.replace(/\/\\\./, '/.');


          // set params - delegate param encoding to $http
          forEach(params, function (value, key) {
            if (!self.urlParams[key]) {
              config.params = config.params || {};
              config.params[key] = value;
            }
          });
        }
      };


      function resourceFactory(url, paramDefaults, actions, options) {
        var route = new Route(url, options);

        actions = extend({}, provider.defaults.actions, actions);

        function extractParams(data, actionParams) {
          var ids = {};
          actionParams = extend({}, paramDefaults, actionParams);
          forEach(actionParams, function (value, key) {
            if (isFunction(value)) { value = value(); }
            ids[key] = value && value.charAt && value.charAt(0) == '@' ?
              lookupDottedPath(data, value.substr(1)) : value;
          });
          return ids;
        }

        function defaultResponseInterceptor(response) {
          return response.resource;
        }

        function Resource(value) {
          shallowClearAndCopy(value || {}, this);
        }

        forEach(actions, function (action, name) {
          var hasBody = /^(POST|PUT|PATCH)$/i.test(action.method);

          Resource[name] = function (a1, a2, a3, a4) {
            var params = {}, data, success, error;

            /* jshint -W086 */ /* (purposefully fall through case statements) */
            switch (arguments.length) {
              case 4:
                error = a4;
                success = a3;
              //fallthrough
              case 3:
              case 2:
                if (isFunction(a2)) {
                  if (isFunction(a1)) {
                    success = a1;
                    error = a2;
                    break;
                  }

                  success = a2;
                  error = a3;
                  //fallthrough
                } else {
                  params = a1;
                  data = a2;
                  success = a3;
                  break;
                }
              case 1:
                if (isFunction(a1)) success = a1;
                else if (hasBody) data = a1;
                else params = a1;
                break;
              case 0: break;
              default:
                throw $resourceMinErr('badargs',
                  "Expected up to 4 arguments [params, data, success, error], got {0} arguments",
                  arguments.length);
            }
            /* jshint +W086 */ /* (purposefully fall through case statements) */

            var isInstanceCall = this instanceof Resource;
            var value = isInstanceCall ? data : (action.isArray ? [] : new Resource(data));
            var httpConfig = {};
            var responseInterceptor = action.interceptor && action.interceptor.response ||
              defaultResponseInterceptor;
            var responseErrorInterceptor = action.interceptor && action.interceptor.responseError ||
              undefined;

            forEach(action, function (value, key) {
              if (key != 'params' && key != 'isArray' && key != 'interceptor') {
                httpConfig[key] = copy(value);
              }
            });

            if (hasBody) httpConfig.data = data;
            route.setUrlParams(httpConfig,
              extend({}, extractParams(data, action.params || {}), params),
              action.url);

            var promise = $http(httpConfig).then(function (response) {
              var data = response.data,
                promise = value.$promise;

              if (data) {
                // Need to convert action.isArray to boolean in case it is undefined
                // jshint -W018
                if (angular.isArray(data) !== (!!action.isArray)) {
                  throw $resourceMinErr('badcfg',
                      'Error in resource configuration. Expected ' +
                      'response to contain an {0} but got an {1}',
                    action.isArray ? 'array' : 'object',
                    angular.isArray(data) ? 'array' : 'object');
                }
                // jshint +W018
                if (action.isArray) {
                  value.length = 0;
                  forEach(data, function (item) {
                    value.push(new Resource(item));
                  });
                } else {
                  shallowClearAndCopy(data, value);
                  value.$promise = promise;
                }
              }

              value.$resolved = true;

              response.resource = value;

              return response;
            }, function (response) {
              value.$resolved = true;

              (error || noop)(response);

              return $q.reject(response);
            });

            promise = promise.then(
              function (response) {
                var value = responseInterceptor(response);
                (success || noop)(value, response.headers);
                return value;
              },
              responseErrorInterceptor);

            if (!isInstanceCall) {
              // we are creating instance / collection
              // - set the initial promise
              // - return the instance / collection
              value.$promise = promise;
              value.$resolved = false;

              return value;
            }

            // instance call
            return promise;
          };


          Resource.prototype['$' + name] = function (params, success, error) {
            if (isFunction(params)) {
              error = success; success = params; params = {};
            }
            var result = Resource[name].call(this, params, this, success, error);
            return result.$promise || result;
          };
        });

        Resource.bind = function (additionalParamDefaults) {
          return resourceFactory(url, extend({}, paramDefaults, additionalParamDefaults), actions);
        };

        return Resource;
      }

      return resourceFactory;
    }];
  });


})(window, window.angular);


// Declare app level module which depends on filters, and services
var mg=angular.module('mg', ['ngRoute','mg.directives']);
mg.config(["$routeProvider",function($routeProvider) {
    $routeProvider.
      when('/start', {
        templateUrl: 'start.html',
        controller: StartCtrl
      })
      .when('/play',{
        templateUrl:'scence.html',
        controller:ScenceCtrl
      })
      .otherwise({
        redirectTo: '/start'
      });
}]);

mg.value('AppName','Memory Matching');
/* Controllers */

//Start Controller
var StartCtrl=['$scope','$location','AppName',function($scope,$location,AppName) {
	$scope.name=AppName;
}]; 

//Game Controller
var ScenceCtrl=['$scope','$location','$timeout','$interval','AppName',function($scope,$location,$timeout,$interval,AppName) {
	
	$scope.name=AppName;

	$scope.progress=100;
	$scope.dismissCount=0;
	$scope.isWinned=false;


	var PARAMS={
		startDelay:2000,
		selectedDelay:400,
		gameTime:60000,
		heartBit:100
	};

	var remainTime;
	var dismissCount=0;

	$scope.go=function(url){
		$location.url(url);
	}
	$scope.startGame=function(){
		$scope.lastSelected=null;
		$scope.cards=initCards(4);
		$scope.clickCount=0;
		$scope.isStart=false;
		$scope.isWinned=false;

		if(gameTimer){
			$interval.cancel(gameTimer);
		}
		$scope.progress=100;

		//start game
		$timeout(function(){
			for(var i in $scope.cards){
				for(var j in $scope.cards[i]){
					$scope.cards[i][j].selected=false;	
				}
			}
			//set default value
			$scope.isStarted=true;
			remainTime=PARAMS.gameTime;

		},PARAMS.startDelay);

		//game timer
		var gameTimer=$interval(function(){
			remainTime=remainTime - PARAMS.heartBit;
			var p=remainTime/PARAMS.gameTime*100;
			if(p<1){
				$scope.isStarted=false;
			}
			$scope.progress=p;
		},PARAMS.heartBit);

	}

	$scope.selected=function(card){
		if(!$scope.isStarted){
			return;
		}
		$scope.clickCount++;
		if($scope.lastSelected){
			card.selected=true;
			$timeout(function(){
				card.selected=false;
				$scope.lastSelected.selected=false;

				if($scope.lastSelected.icon==card.icon && $scope.lastSelected.id!=card.id){
					$scope.lastSelected.dismiss=true;
					card.dismiss=true;
					dismissCount=dismissCount+2;
					$scope.isWinned=dismissCount==Math.pow($scope.cards.length,2);
				}
				$scope.lastSelected=null;

			},PARAMS.selectedDelay);
		}
		else{
			card.selected=true;
			$scope.lastSelected=card;
		}
	}

	$scope.startGame();

}];


var randomColor = function(){
    return '#'+'0123456789abcdef'.split('').map(function(v,i,a){return i>5 ? null : a[Math.floor(Math.random()*16)] }).join('');
};

var initCards=function(level){
	var icons=['music','heart','star','paper-plane','lightbulb','t-shirt','thumbs-up','diamond'];
	var iconCount=Math.min(level*level/2,icons.length);
	var selectedIcons=icons.slice(0,iconCount);
	selectedIcons=selectedIcons.concat(selectedIcons).sort(function(){
		return Math.random()>0.5 ? -1 : 1; 
	});
	var cards=[];
	var j=0;
	var colors={};
	for(var i=0;i<level;i++){
		var row=[];
		for(;j<level*(i+1);j++){
			//set color
			var icon=selectedIcons[j],
			color=colors[icon] || randomColor();
			colors[icon]=color;
			row.push({id:j,icon:selectedIcons[j],dismiss:false,selected:true,color:color});
		}
		cards.push(row);
	}
	return cards;
}


angular.module('mg.directives', [])
.directive('card',function() {
    return {
        restrict : 'E',
        replace : true,
        scope:{
            card:'=',
            selected:'&'
        },
        template:'<div class="card animated" ng-class="{flipInY:card.selected,flipOutY:card.dimiss}" ng-click="selected();">'
                    + '<div ng-show="!card.selected" class="front"></div>'
                    + '<div ng-show="card.selected" class="back" style="color:{{card.color}}"><i class="icon-{{card.icon}}"></i></div>'
                +'</div>'    
        }
})
.directive('progress',function() {
    return {
        restrict : 'E',
        replace : true,
        scope:false,
        template:'<div class="animated zoomIn progress-box" ng-show="!isWinned">'
                    +'<div ng-show="progress>0" class="progress"><div style="width:{{progress}}%"></div></div>'
                    +'<div ng-show="progress<1" class="gameover"> Game Over (- - !)</div>'
                +'</div>'    
    }
});