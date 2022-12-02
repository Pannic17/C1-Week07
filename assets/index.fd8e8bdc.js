var Ed=Object.defineProperty;var Ad=(i,e,t)=>e in i?Ed(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var nt=(i,e,t)=>(Ad(i,typeof e!="symbol"?e+"":e,t),t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerpolicy&&(r.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?r.credentials="include":s.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();function Xo(i,e){const t=Object.create(null),n=i.split(",");for(let s=0;s<n.length;s++)t[n[s]]=!0;return e?s=>!!t[s.toLowerCase()]:s=>!!t[s]}function qo(i){if(Fe(i)){const e={};for(let t=0;t<i.length;t++){const n=i[t],s=vt(n)?Pd(n):qo(n);if(s)for(const r in s)e[r]=s[r]}return e}else{if(vt(i))return i;if(ut(i))return i}}const Cd=/;(?![^(]*\))/g,Ld=/:([^]+)/,Rd=/\/\*.*?\*\//gs;function Pd(i){const e={};return i.replace(Rd,"").split(Cd).forEach(t=>{if(t){const n=t.split(Ld);n.length>1&&(e[n[0].trim()]=n[1].trim())}}),e}function $o(i){let e="";if(vt(i))e=i;else if(Fe(i))for(let t=0;t<i.length;t++){const n=$o(i[t]);n&&(e+=n+" ")}else if(ut(i))for(const t in i)i[t]&&(e+=t+" ");return e.trim()}const Dd="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Id=Xo(Dd);function Ku(i){return!!i||i===""}const st={},rs=[],hn=()=>{},Nd=()=>!1,Fd=/^on[^a-z]/,oa=i=>Fd.test(i),Yo=i=>i.startsWith("onUpdate:"),Tt=Object.assign,Ko=(i,e)=>{const t=i.indexOf(e);t>-1&&i.splice(t,1)},Od=Object.prototype.hasOwnProperty,je=(i,e)=>Od.call(i,e),Fe=Array.isArray,Ws=i=>la(i)==="[object Map]",Ud=i=>la(i)==="[object Set]",ke=i=>typeof i=="function",vt=i=>typeof i=="string",Zo=i=>typeof i=="symbol",ut=i=>i!==null&&typeof i=="object",Zu=i=>ut(i)&&ke(i.then)&&ke(i.catch),zd=Object.prototype.toString,la=i=>zd.call(i),Bd=i=>la(i).slice(8,-1),kd=i=>la(i)==="[object Object]",Jo=i=>vt(i)&&i!=="NaN"&&i[0]!=="-"&&""+parseInt(i,10)===i,Xr=Xo(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ca=i=>{const e=Object.create(null);return t=>e[t]||(e[t]=i(t))},Vd=/-(\w)/g,cs=ca(i=>i.replace(Vd,(e,t)=>t?t.toUpperCase():"")),Hd=/\B([A-Z])/g,vs=ca(i=>i.replace(Hd,"-$1").toLowerCase()),Ju=ca(i=>i.charAt(0).toUpperCase()+i.slice(1)),Sa=ca(i=>i?`on${Ju(i)}`:""),Qr=(i,e)=>!Object.is(i,e),wa=(i,e)=>{for(let t=0;t<i.length;t++)i[t](e)},ea=(i,e,t)=>{Object.defineProperty(i,e,{configurable:!0,enumerable:!1,value:t})},Qu=i=>{const e=parseFloat(i);return isNaN(e)?i:e};let Fl;const Gd=()=>Fl||(Fl=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let mn;class Wd{constructor(e=!1){this.detached=e,this.active=!0,this.effects=[],this.cleanups=[],this.parent=mn,!e&&mn&&(this.index=(mn.scopes||(mn.scopes=[])).push(this)-1)}run(e){if(this.active){const t=mn;try{return mn=this,e()}finally{mn=t}}}on(){mn=this}off(){mn=this.parent}stop(e){if(this.active){let t,n;for(t=0,n=this.effects.length;t<n;t++)this.effects[t].stop();for(t=0,n=this.cleanups.length;t<n;t++)this.cleanups[t]();if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this.active=!1}}}function jd(i,e=mn){e&&e.active&&e.effects.push(i)}const Qo=i=>{const e=new Set(i);return e.w=0,e.n=0,e},eh=i=>(i.w&ri)>0,th=i=>(i.n&ri)>0,Xd=({deps:i})=>{if(i.length)for(let e=0;e<i.length;e++)i[e].w|=ri},qd=i=>{const{deps:e}=i;if(e.length){let t=0;for(let n=0;n<e.length;n++){const s=e[n];eh(s)&&!th(s)?s.delete(i):e[t++]=s,s.w&=~ri,s.n&=~ri}e.length=t}},go=new WeakMap;let ks=0,ri=1;const _o=30;let ln;const Ai=Symbol(""),xo=Symbol("");class el{constructor(e,t=null,n){this.fn=e,this.scheduler=t,this.active=!0,this.deps=[],this.parent=void 0,jd(this,n)}run(){if(!this.active)return this.fn();let e=ln,t=ni;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=ln,ln=this,ni=!0,ri=1<<++ks,ks<=_o?Xd(this):Ol(this),this.fn()}finally{ks<=_o&&qd(this),ri=1<<--ks,ln=this.parent,ni=t,this.parent=void 0,this.deferStop&&this.stop()}}stop(){ln===this?this.deferStop=!0:this.active&&(Ol(this),this.onStop&&this.onStop(),this.active=!1)}}function Ol(i){const{deps:e}=i;if(e.length){for(let t=0;t<e.length;t++)e[t].delete(i);e.length=0}}let ni=!0;const nh=[];function ys(){nh.push(ni),ni=!1}function bs(){const i=nh.pop();ni=i===void 0?!0:i}function Gt(i,e,t){if(ni&&ln){let n=go.get(i);n||go.set(i,n=new Map);let s=n.get(t);s||n.set(t,s=Qo()),ih(s)}}function ih(i,e){let t=!1;ks<=_o?th(i)||(i.n|=ri,t=!eh(i)):t=!i.has(ln),t&&(i.add(ln),ln.deps.push(i))}function Bn(i,e,t,n,s,r){const a=go.get(i);if(!a)return;let o=[];if(e==="clear")o=[...a.values()];else if(t==="length"&&Fe(i)){const l=Qu(n);a.forEach((c,u)=>{(u==="length"||u>=l)&&o.push(c)})}else switch(t!==void 0&&o.push(a.get(t)),e){case"add":Fe(i)?Jo(t)&&o.push(a.get("length")):(o.push(a.get(Ai)),Ws(i)&&o.push(a.get(xo)));break;case"delete":Fe(i)||(o.push(a.get(Ai)),Ws(i)&&o.push(a.get(xo)));break;case"set":Ws(i)&&o.push(a.get(Ai));break}if(o.length===1)o[0]&&vo(o[0]);else{const l=[];for(const c of o)c&&l.push(...c);vo(Qo(l))}}function vo(i,e){const t=Fe(i)?i:[...i];for(const n of t)n.computed&&Ul(n);for(const n of t)n.computed||Ul(n)}function Ul(i,e){(i!==ln||i.allowRecurse)&&(i.scheduler?i.scheduler():i.run())}const $d=Xo("__proto__,__v_isRef,__isVue"),sh=new Set(Object.getOwnPropertyNames(Symbol).filter(i=>i!=="arguments"&&i!=="caller").map(i=>Symbol[i]).filter(Zo)),Yd=tl(),Kd=tl(!1,!0),Zd=tl(!0),zl=Jd();function Jd(){const i={};return["includes","indexOf","lastIndexOf"].forEach(e=>{i[e]=function(...t){const n=Je(this);for(let r=0,a=this.length;r<a;r++)Gt(n,"get",r+"");const s=n[e](...t);return s===-1||s===!1?n[e](...t.map(Je)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{i[e]=function(...t){ys();const n=Je(this)[e].apply(this,t);return bs(),n}}),i}function tl(i=!1,e=!1){return function(n,s,r){if(s==="__v_isReactive")return!i;if(s==="__v_isReadonly")return i;if(s==="__v_isShallow")return e;if(s==="__v_raw"&&r===(i?e?mf:ch:e?lh:oh).get(n))return n;const a=Fe(n);if(!i&&a&&je(zl,s))return Reflect.get(zl,s,r);const o=Reflect.get(n,s,r);return(Zo(s)?sh.has(s):$d(s))||(i||Gt(n,"get",s),e)?o:Dt(o)?a&&Jo(s)?o:o.value:ut(o)?i?uh(o):sl(o):o}}const Qd=rh(),ef=rh(!0);function rh(i=!1){return function(t,n,s,r){let a=t[n];if(Ks(a)&&Dt(a)&&!Dt(s))return!1;if(!i&&(!yo(s)&&!Ks(s)&&(a=Je(a),s=Je(s)),!Fe(t)&&Dt(a)&&!Dt(s)))return a.value=s,!0;const o=Fe(t)&&Jo(n)?Number(n)<t.length:je(t,n),l=Reflect.set(t,n,s,r);return t===Je(r)&&(o?Qr(s,a)&&Bn(t,"set",n,s):Bn(t,"add",n,s)),l}}function tf(i,e){const t=je(i,e);i[e];const n=Reflect.deleteProperty(i,e);return n&&t&&Bn(i,"delete",e,void 0),n}function nf(i,e){const t=Reflect.has(i,e);return(!Zo(e)||!sh.has(e))&&Gt(i,"has",e),t}function sf(i){return Gt(i,"iterate",Fe(i)?"length":Ai),Reflect.ownKeys(i)}const ah={get:Yd,set:Qd,deleteProperty:tf,has:nf,ownKeys:sf},rf={get:Zd,set(i,e){return!0},deleteProperty(i,e){return!0}},af=Tt({},ah,{get:Kd,set:ef}),nl=i=>i,ua=i=>Reflect.getPrototypeOf(i);function mr(i,e,t=!1,n=!1){i=i.__v_raw;const s=Je(i),r=Je(e);t||(e!==r&&Gt(s,"get",e),Gt(s,"get",r));const{has:a}=ua(s),o=n?nl:t?ol:al;if(a.call(s,e))return o(i.get(e));if(a.call(s,r))return o(i.get(r));i!==s&&i.get(e)}function gr(i,e=!1){const t=this.__v_raw,n=Je(t),s=Je(i);return e||(i!==s&&Gt(n,"has",i),Gt(n,"has",s)),i===s?t.has(i):t.has(i)||t.has(s)}function _r(i,e=!1){return i=i.__v_raw,!e&&Gt(Je(i),"iterate",Ai),Reflect.get(i,"size",i)}function Bl(i){i=Je(i);const e=Je(this);return ua(e).has.call(e,i)||(e.add(i),Bn(e,"add",i,i)),this}function kl(i,e){e=Je(e);const t=Je(this),{has:n,get:s}=ua(t);let r=n.call(t,i);r||(i=Je(i),r=n.call(t,i));const a=s.call(t,i);return t.set(i,e),r?Qr(e,a)&&Bn(t,"set",i,e):Bn(t,"add",i,e),this}function Vl(i){const e=Je(this),{has:t,get:n}=ua(e);let s=t.call(e,i);s||(i=Je(i),s=t.call(e,i)),n&&n.call(e,i);const r=e.delete(i);return s&&Bn(e,"delete",i,void 0),r}function Hl(){const i=Je(this),e=i.size!==0,t=i.clear();return e&&Bn(i,"clear",void 0,void 0),t}function xr(i,e){return function(n,s){const r=this,a=r.__v_raw,o=Je(a),l=e?nl:i?ol:al;return!i&&Gt(o,"iterate",Ai),a.forEach((c,u)=>n.call(s,l(c),l(u),r))}}function vr(i,e,t){return function(...n){const s=this.__v_raw,r=Je(s),a=Ws(r),o=i==="entries"||i===Symbol.iterator&&a,l=i==="keys"&&a,c=s[i](...n),u=t?nl:e?ol:al;return!e&&Gt(r,"iterate",l?xo:Ai),{next(){const{value:h,done:d}=c.next();return d?{value:h,done:d}:{value:o?[u(h[0]),u(h[1])]:u(h),done:d}},[Symbol.iterator](){return this}}}}function Hn(i){return function(...e){return i==="delete"?!1:this}}function of(){const i={get(r){return mr(this,r)},get size(){return _r(this)},has:gr,add:Bl,set:kl,delete:Vl,clear:Hl,forEach:xr(!1,!1)},e={get(r){return mr(this,r,!1,!0)},get size(){return _r(this)},has:gr,add:Bl,set:kl,delete:Vl,clear:Hl,forEach:xr(!1,!0)},t={get(r){return mr(this,r,!0)},get size(){return _r(this,!0)},has(r){return gr.call(this,r,!0)},add:Hn("add"),set:Hn("set"),delete:Hn("delete"),clear:Hn("clear"),forEach:xr(!0,!1)},n={get(r){return mr(this,r,!0,!0)},get size(){return _r(this,!0)},has(r){return gr.call(this,r,!0)},add:Hn("add"),set:Hn("set"),delete:Hn("delete"),clear:Hn("clear"),forEach:xr(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{i[r]=vr(r,!1,!1),t[r]=vr(r,!0,!1),e[r]=vr(r,!1,!0),n[r]=vr(r,!0,!0)}),[i,t,e,n]}const[lf,cf,uf,hf]=of();function il(i,e){const t=e?i?hf:uf:i?cf:lf;return(n,s,r)=>s==="__v_isReactive"?!i:s==="__v_isReadonly"?i:s==="__v_raw"?n:Reflect.get(je(t,s)&&s in n?t:n,s,r)}const df={get:il(!1,!1)},ff={get:il(!1,!0)},pf={get:il(!0,!1)},oh=new WeakMap,lh=new WeakMap,ch=new WeakMap,mf=new WeakMap;function gf(i){switch(i){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function _f(i){return i.__v_skip||!Object.isExtensible(i)?0:gf(Bd(i))}function sl(i){return Ks(i)?i:rl(i,!1,ah,df,oh)}function xf(i){return rl(i,!1,af,ff,lh)}function uh(i){return rl(i,!0,rf,pf,ch)}function rl(i,e,t,n,s){if(!ut(i)||i.__v_raw&&!(e&&i.__v_isReactive))return i;const r=s.get(i);if(r)return r;const a=_f(i);if(a===0)return i;const o=new Proxy(i,a===2?n:t);return s.set(i,o),o}function as(i){return Ks(i)?as(i.__v_raw):!!(i&&i.__v_isReactive)}function Ks(i){return!!(i&&i.__v_isReadonly)}function yo(i){return!!(i&&i.__v_isShallow)}function hh(i){return as(i)||Ks(i)}function Je(i){const e=i&&i.__v_raw;return e?Je(e):i}function dh(i){return ea(i,"__v_skip",!0),i}const al=i=>ut(i)?sl(i):i,ol=i=>ut(i)?uh(i):i;function vf(i){ni&&ln&&(i=Je(i),ih(i.dep||(i.dep=Qo())))}function yf(i,e){i=Je(i),i.dep&&vo(i.dep)}function Dt(i){return!!(i&&i.__v_isRef===!0)}function bf(i){return Dt(i)?i.value:i}const Mf={get:(i,e,t)=>bf(Reflect.get(i,e,t)),set:(i,e,t,n)=>{const s=i[e];return Dt(s)&&!Dt(t)?(s.value=t,!0):Reflect.set(i,e,t,n)}};function fh(i){return as(i)?i:new Proxy(i,Mf)}var ph;class Sf{constructor(e,t,n,s){this._setter=t,this.dep=void 0,this.__v_isRef=!0,this[ph]=!1,this._dirty=!0,this.effect=new el(e,()=>{this._dirty||(this._dirty=!0,yf(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=n}get value(){const e=Je(this);return vf(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}ph="__v_isReadonly";function wf(i,e,t=!1){let n,s;const r=ke(i);return r?(n=i,s=hn):(n=i.get,s=i.set),new Sf(n,s,r||!s,t)}function ii(i,e,t,n){let s;try{s=n?i(...n):i()}catch(r){ha(r,e,t)}return s}function Qt(i,e,t,n){if(ke(i)){const r=ii(i,e,t,n);return r&&Zu(r)&&r.catch(a=>{ha(a,e,t)}),r}const s=[];for(let r=0;r<i.length;r++)s.push(Qt(i[r],e,t,n));return s}function ha(i,e,t,n=!0){const s=e?e.vnode:null;if(e){let r=e.parent;const a=e.proxy,o=t;for(;r;){const c=r.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](i,a,o)===!1)return}r=r.parent}const l=e.appContext.config.errorHandler;if(l){ii(l,null,10,[i,a,o]);return}}Tf(i,t,s,n)}function Tf(i,e,t,n=!0){console.error(i)}let Zs=!1,bo=!1;const St=[];let xn=0;const os=[];let Rn=null,vi=0;const mh=Promise.resolve();let ll=null;function Ef(i){const e=ll||mh;return i?e.then(this?i.bind(this):i):e}function Af(i){let e=xn+1,t=St.length;for(;e<t;){const n=e+t>>>1;Js(St[n])<i?e=n+1:t=n}return e}function cl(i){(!St.length||!St.includes(i,Zs&&i.allowRecurse?xn+1:xn))&&(i.id==null?St.push(i):St.splice(Af(i.id),0,i),gh())}function gh(){!Zs&&!bo&&(bo=!0,ll=mh.then(xh))}function Cf(i){const e=St.indexOf(i);e>xn&&St.splice(e,1)}function Lf(i){Fe(i)?os.push(...i):(!Rn||!Rn.includes(i,i.allowRecurse?vi+1:vi))&&os.push(i),gh()}function Gl(i,e=Zs?xn+1:0){for(;e<St.length;e++){const t=St[e];t&&t.pre&&(St.splice(e,1),e--,t())}}function _h(i){if(os.length){const e=[...new Set(os)];if(os.length=0,Rn){Rn.push(...e);return}for(Rn=e,Rn.sort((t,n)=>Js(t)-Js(n)),vi=0;vi<Rn.length;vi++)Rn[vi]();Rn=null,vi=0}}const Js=i=>i.id==null?1/0:i.id,Rf=(i,e)=>{const t=Js(i)-Js(e);if(t===0){if(i.pre&&!e.pre)return-1;if(e.pre&&!i.pre)return 1}return t};function xh(i){bo=!1,Zs=!0,St.sort(Rf);const e=hn;try{for(xn=0;xn<St.length;xn++){const t=St[xn];t&&t.active!==!1&&ii(t,null,14)}}finally{xn=0,St.length=0,_h(),Zs=!1,ll=null,(St.length||os.length)&&xh()}}function Pf(i,e,...t){if(i.isUnmounted)return;const n=i.vnode.props||st;let s=t;const r=e.startsWith("update:"),a=r&&e.slice(7);if(a&&a in n){const u=`${a==="modelValue"?"model":a}Modifiers`,{number:h,trim:d}=n[u]||st;d&&(s=t.map(m=>vt(m)?m.trim():m)),h&&(s=t.map(Qu))}let o,l=n[o=Sa(e)]||n[o=Sa(cs(e))];!l&&r&&(l=n[o=Sa(vs(e))]),l&&Qt(l,i,6,s);const c=n[o+"Once"];if(c){if(!i.emitted)i.emitted={};else if(i.emitted[o])return;i.emitted[o]=!0,Qt(c,i,6,s)}}function vh(i,e,t=!1){const n=e.emitsCache,s=n.get(i);if(s!==void 0)return s;const r=i.emits;let a={},o=!1;if(!ke(i)){const l=c=>{const u=vh(c,e,!0);u&&(o=!0,Tt(a,u))};!t&&e.mixins.length&&e.mixins.forEach(l),i.extends&&l(i.extends),i.mixins&&i.mixins.forEach(l)}return!r&&!o?(ut(i)&&n.set(i,null),null):(Fe(r)?r.forEach(l=>a[l]=null):Tt(a,r),ut(i)&&n.set(i,a),a)}function da(i,e){return!i||!oa(e)?!1:(e=e.slice(2).replace(/Once$/,""),je(i,e[0].toLowerCase()+e.slice(1))||je(i,vs(e))||je(i,e))}let cn=null,yh=null;function ta(i){const e=cn;return cn=i,yh=i&&i.type.__scopeId||null,e}function Df(i,e=cn,t){if(!e||i._n)return i;const n=(...s)=>{n._d&&Jl(-1);const r=ta(e);let a;try{a=i(...s)}finally{ta(r),n._d&&Jl(1)}return a};return n._n=!0,n._c=!0,n._d=!0,n}function Ta(i){const{type:e,vnode:t,proxy:n,withProxy:s,props:r,propsOptions:[a],slots:o,attrs:l,emit:c,render:u,renderCache:h,data:d,setupState:m,ctx:g,inheritAttrs:p}=i;let f,_;const S=ta(i);try{if(t.shapeFlag&4){const b=s||n;f=gn(u.call(b,b,h,r,m,d,g)),_=l}else{const b=e;f=gn(b.length>1?b(r,{attrs:l,slots:o,emit:c}):b(r,null)),_=e.props?l:If(l)}}catch(b){Xs.length=0,ha(b,i,1),f=si(On)}let x=f;if(_&&p!==!1){const b=Object.keys(_),{shapeFlag:M}=x;b.length&&M&7&&(a&&b.some(Yo)&&(_=Nf(_,a)),x=ai(x,_))}return t.dirs&&(x=ai(x),x.dirs=x.dirs?x.dirs.concat(t.dirs):t.dirs),t.transition&&(x.transition=t.transition),f=x,ta(S),f}const If=i=>{let e;for(const t in i)(t==="class"||t==="style"||oa(t))&&((e||(e={}))[t]=i[t]);return e},Nf=(i,e)=>{const t={};for(const n in i)(!Yo(n)||!(n.slice(9)in e))&&(t[n]=i[n]);return t};function Ff(i,e,t){const{props:n,children:s,component:r}=i,{props:a,children:o,patchFlag:l}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return n?Wl(n,a,c):!!a;if(l&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const d=u[h];if(a[d]!==n[d]&&!da(c,d))return!0}}}else return(s||o)&&(!o||!o.$stable)?!0:n===a?!1:n?a?Wl(n,a,c):!0:!!a;return!1}function Wl(i,e,t){const n=Object.keys(e);if(n.length!==Object.keys(i).length)return!0;for(let s=0;s<n.length;s++){const r=n[s];if(e[r]!==i[r]&&!da(t,r))return!0}return!1}function Of({vnode:i,parent:e},t){for(;e&&e.subTree===i;)(i=e.vnode).el=t,e=e.parent}const Uf=i=>i.__isSuspense;function zf(i,e){e&&e.pendingBranch?Fe(i)?e.effects.push(...i):e.effects.push(i):Lf(i)}function Bf(i,e){if(_t){let t=_t.provides;const n=_t.parent&&_t.parent.provides;n===t&&(t=_t.provides=Object.create(n)),t[i]=e}}function qr(i,e,t=!1){const n=_t||cn;if(n){const s=n.parent==null?n.vnode.appContext&&n.vnode.appContext.provides:n.parent.provides;if(s&&i in s)return s[i];if(arguments.length>1)return t&&ke(e)?e.call(n.proxy):e}}const yr={};function Ea(i,e,t){return bh(i,e,t)}function bh(i,e,{immediate:t,deep:n,flush:s,onTrack:r,onTrigger:a}=st){const o=_t;let l,c=!1,u=!1;if(Dt(i)?(l=()=>i.value,c=yo(i)):as(i)?(l=()=>i,n=!0):Fe(i)?(u=!0,c=i.some(x=>as(x)||yo(x)),l=()=>i.map(x=>{if(Dt(x))return x.value;if(as(x))return is(x);if(ke(x))return ii(x,o,2)})):ke(i)?e?l=()=>ii(i,o,2):l=()=>{if(!(o&&o.isUnmounted))return h&&h(),Qt(i,o,3,[d])}:l=hn,e&&n){const x=l;l=()=>is(x())}let h,d=x=>{h=_.onStop=()=>{ii(x,o,4)}},m;if(er)if(d=hn,e?t&&Qt(e,o,3,[l(),u?[]:void 0,d]):l(),s==="sync"){const x=zp();m=x.__watcherHandles||(x.__watcherHandles=[])}else return hn;let g=u?new Array(i.length).fill(yr):yr;const p=()=>{if(!!_.active)if(e){const x=_.run();(n||c||(u?x.some((b,M)=>Qr(b,g[M])):Qr(x,g)))&&(h&&h(),Qt(e,o,3,[x,g===yr?void 0:u&&g[0]===yr?[]:g,d]),g=x)}else _.run()};p.allowRecurse=!!e;let f;s==="sync"?f=p:s==="post"?f=()=>Nt(p,o&&o.suspense):(p.pre=!0,o&&(p.id=o.uid),f=()=>cl(p));const _=new el(l,f);e?t?p():g=_.run():s==="post"?Nt(_.run.bind(_),o&&o.suspense):_.run();const S=()=>{_.stop(),o&&o.scope&&Ko(o.scope.effects,_)};return m&&m.push(S),S}function kf(i,e,t){const n=this.proxy,s=vt(i)?i.includes(".")?Mh(n,i):()=>n[i]:i.bind(n,n);let r;ke(e)?r=e:(r=e.handler,t=e);const a=_t;us(this);const o=bh(s,r.bind(n),t);return a?us(a):Ci(),o}function Mh(i,e){const t=e.split(".");return()=>{let n=i;for(let s=0;s<t.length&&n;s++)n=n[t[s]];return n}}function is(i,e){if(!ut(i)||i.__v_skip||(e=e||new Set,e.has(i)))return i;if(e.add(i),Dt(i))is(i.value,e);else if(Fe(i))for(let t=0;t<i.length;t++)is(i[t],e);else if(Ud(i)||Ws(i))i.forEach(t=>{is(t,e)});else if(kd(i))for(const t in i)is(i[t],e);return i}function Vf(){const i={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return ul(()=>{i.isMounted=!0}),Eh(()=>{i.isUnmounting=!0}),i}const qt=[Function,Array],Hf={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:qt,onEnter:qt,onAfterEnter:qt,onEnterCancelled:qt,onBeforeLeave:qt,onLeave:qt,onAfterLeave:qt,onLeaveCancelled:qt,onBeforeAppear:qt,onAppear:qt,onAfterAppear:qt,onAppearCancelled:qt},setup(i,{slots:e}){const t=Rp(),n=Vf();let s;return()=>{const r=e.default&&wh(e.default(),!0);if(!r||!r.length)return;let a=r[0];if(r.length>1){for(const p of r)if(p.type!==On){a=p;break}}const o=Je(i),{mode:l}=o;if(n.isLeaving)return Aa(a);const c=jl(a);if(!c)return Aa(a);const u=Mo(c,o,n,t);So(c,u);const h=t.subTree,d=h&&jl(h);let m=!1;const{getTransitionKey:g}=c.type;if(g){const p=g();s===void 0?s=p:p!==s&&(s=p,m=!0)}if(d&&d.type!==On&&(!yi(c,d)||m)){const p=Mo(d,o,n,t);if(So(d,p),l==="out-in")return n.isLeaving=!0,p.afterLeave=()=>{n.isLeaving=!1,t.update.active!==!1&&t.update()},Aa(a);l==="in-out"&&c.type!==On&&(p.delayLeave=(f,_,S)=>{const x=Sh(n,d);x[String(d.key)]=d,f._leaveCb=()=>{_(),f._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=S})}return a}}},Gf=Hf;function Sh(i,e){const{leavingVNodes:t}=i;let n=t.get(e.type);return n||(n=Object.create(null),t.set(e.type,n)),n}function Mo(i,e,t,n){const{appear:s,mode:r,persisted:a=!1,onBeforeEnter:o,onEnter:l,onAfterEnter:c,onEnterCancelled:u,onBeforeLeave:h,onLeave:d,onAfterLeave:m,onLeaveCancelled:g,onBeforeAppear:p,onAppear:f,onAfterAppear:_,onAppearCancelled:S}=e,x=String(i.key),b=Sh(t,i),M=(v,A)=>{v&&Qt(v,n,9,A)},R=(v,A)=>{const D=A[1];M(v,A),Fe(v)?v.every(X=>X.length<=1)&&D():v.length<=1&&D()},I={mode:r,persisted:a,beforeEnter(v){let A=o;if(!t.isMounted)if(s)A=p||o;else return;v._leaveCb&&v._leaveCb(!0);const D=b[x];D&&yi(i,D)&&D.el._leaveCb&&D.el._leaveCb(),M(A,[v])},enter(v){let A=l,D=c,X=u;if(!t.isMounted)if(s)A=f||l,D=_||c,X=S||u;else return;let le=!1;const k=v._enterCb=U=>{le||(le=!0,U?M(X,[v]):M(D,[v]),I.delayedLeave&&I.delayedLeave(),v._enterCb=void 0)};A?R(A,[v,k]):k()},leave(v,A){const D=String(i.key);if(v._enterCb&&v._enterCb(!0),t.isUnmounting)return A();M(h,[v]);let X=!1;const le=v._leaveCb=k=>{X||(X=!0,A(),k?M(g,[v]):M(m,[v]),v._leaveCb=void 0,b[D]===i&&delete b[D])};b[D]=i,d?R(d,[v,le]):le()},clone(v){return Mo(v,e,t,n)}};return I}function Aa(i){if(fa(i))return i=ai(i),i.children=null,i}function jl(i){return fa(i)?i.children?i.children[0]:void 0:i}function So(i,e){i.shapeFlag&6&&i.component?So(i.component.subTree,e):i.shapeFlag&128?(i.ssContent.transition=e.clone(i.ssContent),i.ssFallback.transition=e.clone(i.ssFallback)):i.transition=e}function wh(i,e=!1,t){let n=[],s=0;for(let r=0;r<i.length;r++){let a=i[r];const o=t==null?a.key:String(t)+String(a.key!=null?a.key:r);a.type===on?(a.patchFlag&128&&s++,n=n.concat(wh(a.children,e,o))):(e||a.type!==On)&&n.push(o!=null?ai(a,{key:o}):a)}if(s>1)for(let r=0;r<n.length;r++)n[r].patchFlag=-2;return n}const $r=i=>!!i.type.__asyncLoader,fa=i=>i.type.__isKeepAlive;function Wf(i,e){Th(i,"a",e)}function jf(i,e){Th(i,"da",e)}function Th(i,e,t=_t){const n=i.__wdc||(i.__wdc=()=>{let s=t;for(;s;){if(s.isDeactivated)return;s=s.parent}return i()});if(pa(e,n,t),t){let s=t.parent;for(;s&&s.parent;)fa(s.parent.vnode)&&Xf(n,e,t,s),s=s.parent}}function Xf(i,e,t,n){const s=pa(e,i,n,!0);Ah(()=>{Ko(n[e],s)},t)}function pa(i,e,t=_t,n=!1){if(t){const s=t[i]||(t[i]=[]),r=e.__weh||(e.__weh=(...a)=>{if(t.isUnmounted)return;ys(),us(t);const o=Qt(e,t,i,a);return Ci(),bs(),o});return n?s.unshift(r):s.push(r),r}}const kn=i=>(e,t=_t)=>(!er||i==="sp")&&pa(i,(...n)=>e(...n),t),qf=kn("bm"),ul=kn("m"),$f=kn("bu"),Yf=kn("u"),Eh=kn("bum"),Ah=kn("um"),Kf=kn("sp"),Zf=kn("rtg"),Jf=kn("rtc");function Qf(i,e=_t){pa("ec",i,e)}function ui(i,e,t,n){const s=i.dirs,r=e&&e.dirs;for(let a=0;a<s.length;a++){const o=s[a];r&&(o.oldValue=r[a].value);let l=o.dir[n];l&&(ys(),Qt(l,t,8,[i.el,o,i,e]),bs())}}const ep=Symbol(),wo=i=>i?Uh(i)?pl(i)||i.proxy:wo(i.parent):null,js=Tt(Object.create(null),{$:i=>i,$el:i=>i.vnode.el,$data:i=>i.data,$props:i=>i.props,$attrs:i=>i.attrs,$slots:i=>i.slots,$refs:i=>i.refs,$parent:i=>wo(i.parent),$root:i=>wo(i.root),$emit:i=>i.emit,$options:i=>hl(i),$forceUpdate:i=>i.f||(i.f=()=>cl(i.update)),$nextTick:i=>i.n||(i.n=Ef.bind(i.proxy)),$watch:i=>kf.bind(i)}),Ca=(i,e)=>i!==st&&!i.__isScriptSetup&&je(i,e),tp={get({_:i},e){const{ctx:t,setupState:n,data:s,props:r,accessCache:a,type:o,appContext:l}=i;let c;if(e[0]!=="$"){const m=a[e];if(m!==void 0)switch(m){case 1:return n[e];case 2:return s[e];case 4:return t[e];case 3:return r[e]}else{if(Ca(n,e))return a[e]=1,n[e];if(s!==st&&je(s,e))return a[e]=2,s[e];if((c=i.propsOptions[0])&&je(c,e))return a[e]=3,r[e];if(t!==st&&je(t,e))return a[e]=4,t[e];To&&(a[e]=0)}}const u=js[e];let h,d;if(u)return e==="$attrs"&&Gt(i,"get",e),u(i);if((h=o.__cssModules)&&(h=h[e]))return h;if(t!==st&&je(t,e))return a[e]=4,t[e];if(d=l.config.globalProperties,je(d,e))return d[e]},set({_:i},e,t){const{data:n,setupState:s,ctx:r}=i;return Ca(s,e)?(s[e]=t,!0):n!==st&&je(n,e)?(n[e]=t,!0):je(i.props,e)||e[0]==="$"&&e.slice(1)in i?!1:(r[e]=t,!0)},has({_:{data:i,setupState:e,accessCache:t,ctx:n,appContext:s,propsOptions:r}},a){let o;return!!t[a]||i!==st&&je(i,a)||Ca(e,a)||(o=r[0])&&je(o,a)||je(n,a)||je(js,a)||je(s.config.globalProperties,a)},defineProperty(i,e,t){return t.get!=null?i._.accessCache[e]=0:je(t,"value")&&this.set(i,e,t.value,null),Reflect.defineProperty(i,e,t)}};let To=!0;function np(i){const e=hl(i),t=i.proxy,n=i.ctx;To=!1,e.beforeCreate&&Xl(e.beforeCreate,i,"bc");const{data:s,computed:r,methods:a,watch:o,provide:l,inject:c,created:u,beforeMount:h,mounted:d,beforeUpdate:m,updated:g,activated:p,deactivated:f,beforeDestroy:_,beforeUnmount:S,destroyed:x,unmounted:b,render:M,renderTracked:R,renderTriggered:I,errorCaptured:v,serverPrefetch:A,expose:D,inheritAttrs:X,components:le,directives:k,filters:U}=e;if(c&&ip(c,n,null,i.appContext.config.unwrapInjectedRef),a)for(const te in a){const G=a[te];ke(G)&&(n[te]=G.bind(t))}if(s){const te=s.call(t,t);ut(te)&&(i.data=sl(te))}if(To=!0,r)for(const te in r){const G=r[te],z=ke(G)?G.bind(t,t):ke(G.get)?G.get.bind(t,t):hn,W=!ke(G)&&ke(G.set)?G.set.bind(t):hn,ce=Op({get:z,set:W});Object.defineProperty(n,te,{enumerable:!0,configurable:!0,get:()=>ce.value,set:re=>ce.value=re})}if(o)for(const te in o)Ch(o[te],n,t,te);if(l){const te=ke(l)?l.call(t):l;Reflect.ownKeys(te).forEach(G=>{Bf(G,te[G])})}u&&Xl(u,i,"c");function ie(te,G){Fe(G)?G.forEach(z=>te(z.bind(t))):G&&te(G.bind(t))}if(ie(qf,h),ie(ul,d),ie($f,m),ie(Yf,g),ie(Wf,p),ie(jf,f),ie(Qf,v),ie(Jf,R),ie(Zf,I),ie(Eh,S),ie(Ah,b),ie(Kf,A),Fe(D))if(D.length){const te=i.exposed||(i.exposed={});D.forEach(G=>{Object.defineProperty(te,G,{get:()=>t[G],set:z=>t[G]=z})})}else i.exposed||(i.exposed={});M&&i.render===hn&&(i.render=M),X!=null&&(i.inheritAttrs=X),le&&(i.components=le),k&&(i.directives=k)}function ip(i,e,t=hn,n=!1){Fe(i)&&(i=Eo(i));for(const s in i){const r=i[s];let a;ut(r)?"default"in r?a=qr(r.from||s,r.default,!0):a=qr(r.from||s):a=qr(r),Dt(a)&&n?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>a.value,set:o=>a.value=o}):e[s]=a}}function Xl(i,e,t){Qt(Fe(i)?i.map(n=>n.bind(e.proxy)):i.bind(e.proxy),e,t)}function Ch(i,e,t,n){const s=n.includes(".")?Mh(t,n):()=>t[n];if(vt(i)){const r=e[i];ke(r)&&Ea(s,r)}else if(ke(i))Ea(s,i.bind(t));else if(ut(i))if(Fe(i))i.forEach(r=>Ch(r,e,t,n));else{const r=ke(i.handler)?i.handler.bind(t):e[i.handler];ke(r)&&Ea(s,r,i)}}function hl(i){const e=i.type,{mixins:t,extends:n}=e,{mixins:s,optionsCache:r,config:{optionMergeStrategies:a}}=i.appContext,o=r.get(e);let l;return o?l=o:!s.length&&!t&&!n?l=e:(l={},s.length&&s.forEach(c=>na(l,c,a,!0)),na(l,e,a)),ut(e)&&r.set(e,l),l}function na(i,e,t,n=!1){const{mixins:s,extends:r}=e;r&&na(i,r,t,!0),s&&s.forEach(a=>na(i,a,t,!0));for(const a in e)if(!(n&&a==="expose")){const o=sp[a]||t&&t[a];i[a]=o?o(i[a],e[a]):e[a]}return i}const sp={data:ql,props:mi,emits:mi,methods:mi,computed:mi,beforeCreate:Ct,created:Ct,beforeMount:Ct,mounted:Ct,beforeUpdate:Ct,updated:Ct,beforeDestroy:Ct,beforeUnmount:Ct,destroyed:Ct,unmounted:Ct,activated:Ct,deactivated:Ct,errorCaptured:Ct,serverPrefetch:Ct,components:mi,directives:mi,watch:ap,provide:ql,inject:rp};function ql(i,e){return e?i?function(){return Tt(ke(i)?i.call(this,this):i,ke(e)?e.call(this,this):e)}:e:i}function rp(i,e){return mi(Eo(i),Eo(e))}function Eo(i){if(Fe(i)){const e={};for(let t=0;t<i.length;t++)e[i[t]]=i[t];return e}return i}function Ct(i,e){return i?[...new Set([].concat(i,e))]:e}function mi(i,e){return i?Tt(Tt(Object.create(null),i),e):e}function ap(i,e){if(!i)return e;if(!e)return i;const t=Tt(Object.create(null),i);for(const n in e)t[n]=Ct(i[n],e[n]);return t}function op(i,e,t,n=!1){const s={},r={};ea(r,ga,1),i.propsDefaults=Object.create(null),Lh(i,e,s,r);for(const a in i.propsOptions[0])a in s||(s[a]=void 0);t?i.props=n?s:xf(s):i.type.props?i.props=s:i.props=r,i.attrs=r}function lp(i,e,t,n){const{props:s,attrs:r,vnode:{patchFlag:a}}=i,o=Je(s),[l]=i.propsOptions;let c=!1;if((n||a>0)&&!(a&16)){if(a&8){const u=i.vnode.dynamicProps;for(let h=0;h<u.length;h++){let d=u[h];if(da(i.emitsOptions,d))continue;const m=e[d];if(l)if(je(r,d))m!==r[d]&&(r[d]=m,c=!0);else{const g=cs(d);s[g]=Ao(l,o,g,m,i,!1)}else m!==r[d]&&(r[d]=m,c=!0)}}}else{Lh(i,e,s,r)&&(c=!0);let u;for(const h in o)(!e||!je(e,h)&&((u=vs(h))===h||!je(e,u)))&&(l?t&&(t[h]!==void 0||t[u]!==void 0)&&(s[h]=Ao(l,o,h,void 0,i,!0)):delete s[h]);if(r!==o)for(const h in r)(!e||!je(e,h)&&!0)&&(delete r[h],c=!0)}c&&Bn(i,"set","$attrs")}function Lh(i,e,t,n){const[s,r]=i.propsOptions;let a=!1,o;if(e)for(let l in e){if(Xr(l))continue;const c=e[l];let u;s&&je(s,u=cs(l))?!r||!r.includes(u)?t[u]=c:(o||(o={}))[u]=c:da(i.emitsOptions,l)||(!(l in n)||c!==n[l])&&(n[l]=c,a=!0)}if(r){const l=Je(t),c=o||st;for(let u=0;u<r.length;u++){const h=r[u];t[h]=Ao(s,l,h,c[h],i,!je(c,h))}}return a}function Ao(i,e,t,n,s,r){const a=i[t];if(a!=null){const o=je(a,"default");if(o&&n===void 0){const l=a.default;if(a.type!==Function&&ke(l)){const{propsDefaults:c}=s;t in c?n=c[t]:(us(s),n=c[t]=l.call(null,e),Ci())}else n=l}a[0]&&(r&&!o?n=!1:a[1]&&(n===""||n===vs(t))&&(n=!0))}return n}function Rh(i,e,t=!1){const n=e.propsCache,s=n.get(i);if(s)return s;const r=i.props,a={},o=[];let l=!1;if(!ke(i)){const u=h=>{l=!0;const[d,m]=Rh(h,e,!0);Tt(a,d),m&&o.push(...m)};!t&&e.mixins.length&&e.mixins.forEach(u),i.extends&&u(i.extends),i.mixins&&i.mixins.forEach(u)}if(!r&&!l)return ut(i)&&n.set(i,rs),rs;if(Fe(r))for(let u=0;u<r.length;u++){const h=cs(r[u]);$l(h)&&(a[h]=st)}else if(r)for(const u in r){const h=cs(u);if($l(h)){const d=r[u],m=a[h]=Fe(d)||ke(d)?{type:d}:Object.assign({},d);if(m){const g=Zl(Boolean,m.type),p=Zl(String,m.type);m[0]=g>-1,m[1]=p<0||g<p,(g>-1||je(m,"default"))&&o.push(h)}}}const c=[a,o];return ut(i)&&n.set(i,c),c}function $l(i){return i[0]!=="$"}function Yl(i){const e=i&&i.toString().match(/^\s*function (\w+)/);return e?e[1]:i===null?"null":""}function Kl(i,e){return Yl(i)===Yl(e)}function Zl(i,e){return Fe(e)?e.findIndex(t=>Kl(t,i)):ke(e)&&Kl(e,i)?0:-1}const Ph=i=>i[0]==="_"||i==="$stable",dl=i=>Fe(i)?i.map(gn):[gn(i)],cp=(i,e,t)=>{if(e._n)return e;const n=Df((...s)=>dl(e(...s)),t);return n._c=!1,n},Dh=(i,e,t)=>{const n=i._ctx;for(const s in i){if(Ph(s))continue;const r=i[s];if(ke(r))e[s]=cp(s,r,n);else if(r!=null){const a=dl(r);e[s]=()=>a}}},Ih=(i,e)=>{const t=dl(e);i.slots.default=()=>t},up=(i,e)=>{if(i.vnode.shapeFlag&32){const t=e._;t?(i.slots=Je(e),ea(e,"_",t)):Dh(e,i.slots={})}else i.slots={},e&&Ih(i,e);ea(i.slots,ga,1)},hp=(i,e,t)=>{const{vnode:n,slots:s}=i;let r=!0,a=st;if(n.shapeFlag&32){const o=e._;o?t&&o===1?r=!1:(Tt(s,e),!t&&o===1&&delete s._):(r=!e.$stable,Dh(e,s)),a=e}else e&&(Ih(i,e),a={default:1});if(r)for(const o in s)!Ph(o)&&!(o in a)&&delete s[o]};function Nh(){return{app:null,config:{isNativeTag:Nd,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let dp=0;function fp(i,e){return function(n,s=null){ke(n)||(n=Object.assign({},n)),s!=null&&!ut(s)&&(s=null);const r=Nh(),a=new Set;let o=!1;const l=r.app={_uid:dp++,_component:n,_props:s,_container:null,_context:r,_instance:null,version:Bp,get config(){return r.config},set config(c){},use(c,...u){return a.has(c)||(c&&ke(c.install)?(a.add(c),c.install(l,...u)):ke(c)&&(a.add(c),c(l,...u))),l},mixin(c){return r.mixins.includes(c)||r.mixins.push(c),l},component(c,u){return u?(r.components[c]=u,l):r.components[c]},directive(c,u){return u?(r.directives[c]=u,l):r.directives[c]},mount(c,u,h){if(!o){const d=si(n,s);return d.appContext=r,u&&e?e(d,c):i(d,c,h),o=!0,l._container=c,c.__vue_app__=l,pl(d.component)||d.component.proxy}},unmount(){o&&(i(null,l._container),delete l._container.__vue_app__)},provide(c,u){return r.provides[c]=u,l}};return l}}function Co(i,e,t,n,s=!1){if(Fe(i)){i.forEach((d,m)=>Co(d,e&&(Fe(e)?e[m]:e),t,n,s));return}if($r(n)&&!s)return;const r=n.shapeFlag&4?pl(n.component)||n.component.proxy:n.el,a=s?null:r,{i:o,r:l}=i,c=e&&e.r,u=o.refs===st?o.refs={}:o.refs,h=o.setupState;if(c!=null&&c!==l&&(vt(c)?(u[c]=null,je(h,c)&&(h[c]=null)):Dt(c)&&(c.value=null)),ke(l))ii(l,o,12,[a,u]);else{const d=vt(l),m=Dt(l);if(d||m){const g=()=>{if(i.f){const p=d?je(h,l)?h[l]:u[l]:l.value;s?Fe(p)&&Ko(p,r):Fe(p)?p.includes(r)||p.push(r):d?(u[l]=[r],je(h,l)&&(h[l]=u[l])):(l.value=[r],i.k&&(u[i.k]=l.value))}else d?(u[l]=a,je(h,l)&&(h[l]=a)):m&&(l.value=a,i.k&&(u[i.k]=a))};a?(g.id=-1,Nt(g,t)):g()}}}const Nt=zf;function pp(i){return mp(i)}function mp(i,e){const t=Gd();t.__VUE__=!0;const{insert:n,remove:s,patchProp:r,createElement:a,createText:o,createComment:l,setText:c,setElementText:u,parentNode:h,nextSibling:d,setScopeId:m=hn,insertStaticContent:g}=i,p=(E,L,H,Z=null,$=null,oe=null,he=!1,ne=null,de=!!L.dynamicChildren)=>{if(E===L)return;E&&!yi(E,L)&&(Z=He(E),re(E,$,oe,!0),E=null),L.patchFlag===-2&&(de=!1,L.dynamicChildren=null);const{type:se,ref:w,shapeFlag:y}=L;switch(se){case ma:f(E,L,H,Z);break;case On:_(E,L,H,Z);break;case Yr:E==null&&S(L,H,Z,he);break;case on:le(E,L,H,Z,$,oe,he,ne,de);break;default:y&1?M(E,L,H,Z,$,oe,he,ne,de):y&6?k(E,L,H,Z,$,oe,he,ne,de):(y&64||y&128)&&se.process(E,L,H,Z,$,oe,he,ne,de,Ee)}w!=null&&$&&Co(w,E&&E.ref,oe,L||E,!L)},f=(E,L,H,Z)=>{if(E==null)n(L.el=o(L.children),H,Z);else{const $=L.el=E.el;L.children!==E.children&&c($,L.children)}},_=(E,L,H,Z)=>{E==null?n(L.el=l(L.children||""),H,Z):L.el=E.el},S=(E,L,H,Z)=>{[E.el,E.anchor]=g(E.children,L,H,Z,E.el,E.anchor)},x=({el:E,anchor:L},H,Z)=>{let $;for(;E&&E!==L;)$=d(E),n(E,H,Z),E=$;n(L,H,Z)},b=({el:E,anchor:L})=>{let H;for(;E&&E!==L;)H=d(E),s(E),E=H;s(L)},M=(E,L,H,Z,$,oe,he,ne,de)=>{he=he||L.type==="svg",E==null?R(L,H,Z,$,oe,he,ne,de):A(E,L,$,oe,he,ne,de)},R=(E,L,H,Z,$,oe,he,ne)=>{let de,se;const{type:w,props:y,shapeFlag:F,transition:j,dirs:J}=E;if(de=E.el=a(E.type,oe,y&&y.is,y),F&8?u(de,E.children):F&16&&v(E.children,de,null,Z,$,oe&&w!=="foreignObject",he,ne),J&&ui(E,null,Z,"created"),y){for(const me in y)me!=="value"&&!Xr(me)&&r(de,me,null,y[me],oe,E.children,Z,$,q);"value"in y&&r(de,"value",null,y.value),(se=y.onVnodeBeforeMount)&&pn(se,Z,E)}I(de,E,E.scopeId,he,Z),J&&ui(E,null,Z,"beforeMount");const ae=(!$||$&&!$.pendingBranch)&&j&&!j.persisted;ae&&j.beforeEnter(de),n(de,L,H),((se=y&&y.onVnodeMounted)||ae||J)&&Nt(()=>{se&&pn(se,Z,E),ae&&j.enter(de),J&&ui(E,null,Z,"mounted")},$)},I=(E,L,H,Z,$)=>{if(H&&m(E,H),Z)for(let oe=0;oe<Z.length;oe++)m(E,Z[oe]);if($){let oe=$.subTree;if(L===oe){const he=$.vnode;I(E,he,he.scopeId,he.slotScopeIds,$.parent)}}},v=(E,L,H,Z,$,oe,he,ne,de=0)=>{for(let se=de;se<E.length;se++){const w=E[se]=ne?Qn(E[se]):gn(E[se]);p(null,w,L,H,Z,$,oe,he,ne)}},A=(E,L,H,Z,$,oe,he)=>{const ne=L.el=E.el;let{patchFlag:de,dynamicChildren:se,dirs:w}=L;de|=E.patchFlag&16;const y=E.props||st,F=L.props||st;let j;H&&hi(H,!1),(j=F.onVnodeBeforeUpdate)&&pn(j,H,L,E),w&&ui(L,E,H,"beforeUpdate"),H&&hi(H,!0);const J=$&&L.type!=="foreignObject";if(se?D(E.dynamicChildren,se,ne,H,Z,J,oe):he||G(E,L,ne,null,H,Z,J,oe,!1),de>0){if(de&16)X(ne,L,y,F,H,Z,$);else if(de&2&&y.class!==F.class&&r(ne,"class",null,F.class,$),de&4&&r(ne,"style",y.style,F.style,$),de&8){const ae=L.dynamicProps;for(let me=0;me<ae.length;me++){const C=ae[me],O=y[C],ge=F[C];(ge!==O||C==="value")&&r(ne,C,O,ge,$,E.children,H,Z,q)}}de&1&&E.children!==L.children&&u(ne,L.children)}else!he&&se==null&&X(ne,L,y,F,H,Z,$);((j=F.onVnodeUpdated)||w)&&Nt(()=>{j&&pn(j,H,L,E),w&&ui(L,E,H,"updated")},Z)},D=(E,L,H,Z,$,oe,he)=>{for(let ne=0;ne<L.length;ne++){const de=E[ne],se=L[ne],w=de.el&&(de.type===on||!yi(de,se)||de.shapeFlag&70)?h(de.el):H;p(de,se,w,null,Z,$,oe,he,!0)}},X=(E,L,H,Z,$,oe,he)=>{if(H!==Z){if(H!==st)for(const ne in H)!Xr(ne)&&!(ne in Z)&&r(E,ne,H[ne],null,he,L.children,$,oe,q);for(const ne in Z){if(Xr(ne))continue;const de=Z[ne],se=H[ne];de!==se&&ne!=="value"&&r(E,ne,se,de,he,L.children,$,oe,q)}"value"in Z&&r(E,"value",H.value,Z.value)}},le=(E,L,H,Z,$,oe,he,ne,de)=>{const se=L.el=E?E.el:o(""),w=L.anchor=E?E.anchor:o("");let{patchFlag:y,dynamicChildren:F,slotScopeIds:j}=L;j&&(ne=ne?ne.concat(j):j),E==null?(n(se,H,Z),n(w,H,Z),v(L.children,H,w,$,oe,he,ne,de)):y>0&&y&64&&F&&E.dynamicChildren?(D(E.dynamicChildren,F,H,$,oe,he,ne),(L.key!=null||$&&L===$.subTree)&&Fh(E,L,!0)):G(E,L,H,w,$,oe,he,ne,de)},k=(E,L,H,Z,$,oe,he,ne,de)=>{L.slotScopeIds=ne,E==null?L.shapeFlag&512?$.ctx.activate(L,H,Z,he,de):U(L,H,Z,$,oe,he,de):Y(E,L,de)},U=(E,L,H,Z,$,oe,he)=>{const ne=E.component=Lp(E,Z,$);if(fa(E)&&(ne.ctx.renderer=Ee),Pp(ne),ne.asyncDep){if($&&$.registerDep(ne,ie),!E.el){const de=ne.subTree=si(On);_(null,de,L,H)}return}ie(ne,E,L,H,$,oe,he)},Y=(E,L,H)=>{const Z=L.component=E.component;if(Ff(E,L,H))if(Z.asyncDep&&!Z.asyncResolved){te(Z,L,H);return}else Z.next=L,Cf(Z.update),Z.update();else L.el=E.el,Z.vnode=L},ie=(E,L,H,Z,$,oe,he)=>{const ne=()=>{if(E.isMounted){let{next:w,bu:y,u:F,parent:j,vnode:J}=E,ae=w,me;hi(E,!1),w?(w.el=J.el,te(E,w,he)):w=J,y&&wa(y),(me=w.props&&w.props.onVnodeBeforeUpdate)&&pn(me,j,w,J),hi(E,!0);const C=Ta(E),O=E.subTree;E.subTree=C,p(O,C,h(O.el),He(O),E,$,oe),w.el=C.el,ae===null&&Of(E,C.el),F&&Nt(F,$),(me=w.props&&w.props.onVnodeUpdated)&&Nt(()=>pn(me,j,w,J),$)}else{let w;const{el:y,props:F}=L,{bm:j,m:J,parent:ae}=E,me=$r(L);if(hi(E,!1),j&&wa(j),!me&&(w=F&&F.onVnodeBeforeMount)&&pn(w,ae,L),hi(E,!0),y&&Ge){const C=()=>{E.subTree=Ta(E),Ge(y,E.subTree,E,$,null)};me?L.type.__asyncLoader().then(()=>!E.isUnmounted&&C()):C()}else{const C=E.subTree=Ta(E);p(null,C,H,Z,E,$,oe),L.el=C.el}if(J&&Nt(J,$),!me&&(w=F&&F.onVnodeMounted)){const C=L;Nt(()=>pn(w,ae,C),$)}(L.shapeFlag&256||ae&&$r(ae.vnode)&&ae.vnode.shapeFlag&256)&&E.a&&Nt(E.a,$),E.isMounted=!0,L=H=Z=null}},de=E.effect=new el(ne,()=>cl(se),E.scope),se=E.update=()=>de.run();se.id=E.uid,hi(E,!0),se()},te=(E,L,H)=>{L.component=E;const Z=E.vnode.props;E.vnode=L,E.next=null,lp(E,L.props,Z,H),hp(E,L.children,H),ys(),Gl(),bs()},G=(E,L,H,Z,$,oe,he,ne,de=!1)=>{const se=E&&E.children,w=E?E.shapeFlag:0,y=L.children,{patchFlag:F,shapeFlag:j}=L;if(F>0){if(F&128){W(se,y,H,Z,$,oe,he,ne,de);return}else if(F&256){z(se,y,H,Z,$,oe,he,ne,de);return}}j&8?(w&16&&q(se,$,oe),y!==se&&u(H,y)):w&16?j&16?W(se,y,H,Z,$,oe,he,ne,de):q(se,$,oe,!0):(w&8&&u(H,""),j&16&&v(y,H,Z,$,oe,he,ne,de))},z=(E,L,H,Z,$,oe,he,ne,de)=>{E=E||rs,L=L||rs;const se=E.length,w=L.length,y=Math.min(se,w);let F;for(F=0;F<y;F++){const j=L[F]=de?Qn(L[F]):gn(L[F]);p(E[F],j,H,null,$,oe,he,ne,de)}se>w?q(E,$,oe,!0,!1,y):v(L,H,Z,$,oe,he,ne,de,y)},W=(E,L,H,Z,$,oe,he,ne,de)=>{let se=0;const w=L.length;let y=E.length-1,F=w-1;for(;se<=y&&se<=F;){const j=E[se],J=L[se]=de?Qn(L[se]):gn(L[se]);if(yi(j,J))p(j,J,H,null,$,oe,he,ne,de);else break;se++}for(;se<=y&&se<=F;){const j=E[y],J=L[F]=de?Qn(L[F]):gn(L[F]);if(yi(j,J))p(j,J,H,null,$,oe,he,ne,de);else break;y--,F--}if(se>y){if(se<=F){const j=F+1,J=j<w?L[j].el:Z;for(;se<=F;)p(null,L[se]=de?Qn(L[se]):gn(L[se]),H,J,$,oe,he,ne,de),se++}}else if(se>F)for(;se<=y;)re(E[se],$,oe,!0),se++;else{const j=se,J=se,ae=new Map;for(se=J;se<=F;se++){const xe=L[se]=de?Qn(L[se]):gn(L[se]);xe.key!=null&&ae.set(xe.key,se)}let me,C=0;const O=F-J+1;let ge=!1,ye=0;const _e=new Array(O);for(se=0;se<O;se++)_e[se]=0;for(se=j;se<=y;se++){const xe=E[se];if(C>=O){re(xe,$,oe,!0);continue}let Pe;if(xe.key!=null)Pe=ae.get(xe.key);else for(me=J;me<=F;me++)if(_e[me-J]===0&&yi(xe,L[me])){Pe=me;break}Pe===void 0?re(xe,$,oe,!0):(_e[Pe-J]=se+1,Pe>=ye?ye=Pe:ge=!0,p(xe,L[Pe],H,null,$,oe,he,ne,de),C++)}const Se=ge?gp(_e):rs;for(me=Se.length-1,se=O-1;se>=0;se--){const xe=J+se,Pe=L[xe],Be=xe+1<w?L[xe+1].el:Z;_e[se]===0?p(null,Pe,H,Be,$,oe,he,ne,de):ge&&(me<0||se!==Se[me]?ce(Pe,H,Be,2):me--)}}},ce=(E,L,H,Z,$=null)=>{const{el:oe,type:he,transition:ne,children:de,shapeFlag:se}=E;if(se&6){ce(E.component.subTree,L,H,Z);return}if(se&128){E.suspense.move(L,H,Z);return}if(se&64){he.move(E,L,H,Ee);return}if(he===on){n(oe,L,H);for(let y=0;y<de.length;y++)ce(de[y],L,H,Z);n(E.anchor,L,H);return}if(he===Yr){x(E,L,H);return}if(Z!==2&&se&1&&ne)if(Z===0)ne.beforeEnter(oe),n(oe,L,H),Nt(()=>ne.enter(oe),$);else{const{leave:y,delayLeave:F,afterLeave:j}=ne,J=()=>n(oe,L,H),ae=()=>{y(oe,()=>{J(),j&&j()})};F?F(oe,J,ae):ae()}else n(oe,L,H)},re=(E,L,H,Z=!1,$=!1)=>{const{type:oe,props:he,ref:ne,children:de,dynamicChildren:se,shapeFlag:w,patchFlag:y,dirs:F}=E;if(ne!=null&&Co(ne,null,H,E,!0),w&256){L.ctx.deactivate(E);return}const j=w&1&&F,J=!$r(E);let ae;if(J&&(ae=he&&he.onVnodeBeforeUnmount)&&pn(ae,L,E),w&6)Re(E.component,H,Z);else{if(w&128){E.suspense.unmount(H,Z);return}j&&ui(E,null,L,"beforeUnmount"),w&64?E.type.remove(E,L,H,$,Ee,Z):se&&(oe!==on||y>0&&y&64)?q(se,L,H,!1,!0):(oe===on&&y&384||!$&&w&16)&&q(de,L,H),Z&&ue(E)}(J&&(ae=he&&he.onVnodeUnmounted)||j)&&Nt(()=>{ae&&pn(ae,L,E),j&&ui(E,null,L,"unmounted")},H)},ue=E=>{const{type:L,el:H,anchor:Z,transition:$}=E;if(L===on){Me(H,Z);return}if(L===Yr){b(E);return}const oe=()=>{s(H),$&&!$.persisted&&$.afterLeave&&$.afterLeave()};if(E.shapeFlag&1&&$&&!$.persisted){const{leave:he,delayLeave:ne}=$,de=()=>he(H,oe);ne?ne(E.el,oe,de):de()}else oe()},Me=(E,L)=>{let H;for(;E!==L;)H=d(E),s(E),E=H;s(L)},Re=(E,L,H)=>{const{bum:Z,scope:$,update:oe,subTree:he,um:ne}=E;Z&&wa(Z),$.stop(),oe&&(oe.active=!1,re(he,E,L,H)),ne&&Nt(ne,L),Nt(()=>{E.isUnmounted=!0},L),L&&L.pendingBranch&&!L.isUnmounted&&E.asyncDep&&!E.asyncResolved&&E.suspenseId===L.pendingId&&(L.deps--,L.deps===0&&L.resolve())},q=(E,L,H,Z=!1,$=!1,oe=0)=>{for(let he=oe;he<E.length;he++)re(E[he],L,H,Z,$)},He=E=>E.shapeFlag&6?He(E.component.subTree):E.shapeFlag&128?E.suspense.next():d(E.anchor||E.el),Le=(E,L,H)=>{E==null?L._vnode&&re(L._vnode,null,null,!0):p(L._vnode||null,E,L,null,null,null,H),Gl(),_h(),L._vnode=E},Ee={p,um:re,m:ce,r:ue,mt:U,mc:v,pc:G,pbc:D,n:He,o:i};let ve,Ge;return e&&([ve,Ge]=e(Ee)),{render:Le,hydrate:ve,createApp:fp(Le,ve)}}function hi({effect:i,update:e},t){i.allowRecurse=e.allowRecurse=t}function Fh(i,e,t=!1){const n=i.children,s=e.children;if(Fe(n)&&Fe(s))for(let r=0;r<n.length;r++){const a=n[r];let o=s[r];o.shapeFlag&1&&!o.dynamicChildren&&((o.patchFlag<=0||o.patchFlag===32)&&(o=s[r]=Qn(s[r]),o.el=a.el),t||Fh(a,o)),o.type===ma&&(o.el=a.el)}}function gp(i){const e=i.slice(),t=[0];let n,s,r,a,o;const l=i.length;for(n=0;n<l;n++){const c=i[n];if(c!==0){if(s=t[t.length-1],i[s]<c){e[n]=s,t.push(n);continue}for(r=0,a=t.length-1;r<a;)o=r+a>>1,i[t[o]]<c?r=o+1:a=o;c<i[t[r]]&&(r>0&&(e[n]=t[r-1]),t[r]=n)}}for(r=t.length,a=t[r-1];r-- >0;)t[r]=a,a=e[a];return t}const _p=i=>i.__isTeleport,on=Symbol(void 0),ma=Symbol(void 0),On=Symbol(void 0),Yr=Symbol(void 0),Xs=[];let un=null;function xp(i=!1){Xs.push(un=i?null:[])}function vp(){Xs.pop(),un=Xs[Xs.length-1]||null}let Qs=1;function Jl(i){Qs+=i}function yp(i){return i.dynamicChildren=Qs>0?un||rs:null,vp(),Qs>0&&un&&un.push(i),i}function bp(i,e,t,n,s,r){return yp(Pn(i,e,t,n,s,r,!0))}function Mp(i){return i?i.__v_isVNode===!0:!1}function yi(i,e){return i.type===e.type&&i.key===e.key}const ga="__vInternal",Oh=({key:i})=>i!=null?i:null,Kr=({ref:i,ref_key:e,ref_for:t})=>i!=null?vt(i)||Dt(i)||ke(i)?{i:cn,r:i,k:e,f:!!t}:i:null;function Pn(i,e=null,t=null,n=0,s=null,r=i===on?0:1,a=!1,o=!1){const l={__v_isVNode:!0,__v_skip:!0,type:i,props:e,key:e&&Oh(e),ref:e&&Kr(e),scopeId:yh,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:n,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:cn};return o?(fl(l,t),r&128&&i.normalize(l)):t&&(l.shapeFlag|=vt(t)?8:16),Qs>0&&!a&&un&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&un.push(l),l}const si=Sp;function Sp(i,e=null,t=null,n=0,s=null,r=!1){if((!i||i===ep)&&(i=On),Mp(i)){const o=ai(i,e,!0);return t&&fl(o,t),Qs>0&&!r&&un&&(o.shapeFlag&6?un[un.indexOf(i)]=o:un.push(o)),o.patchFlag|=-2,o}if(Fp(i)&&(i=i.__vccOpts),e){e=wp(e);let{class:o,style:l}=e;o&&!vt(o)&&(e.class=$o(o)),ut(l)&&(hh(l)&&!Fe(l)&&(l=Tt({},l)),e.style=qo(l))}const a=vt(i)?1:Uf(i)?128:_p(i)?64:ut(i)?4:ke(i)?2:0;return Pn(i,e,t,n,s,a,r,!0)}function wp(i){return i?hh(i)||ga in i?Tt({},i):i:null}function ai(i,e,t=!1){const{props:n,ref:s,patchFlag:r,children:a}=i,o=e?Ep(n||{},e):n;return{__v_isVNode:!0,__v_skip:!0,type:i.type,props:o,key:o&&Oh(o),ref:e&&e.ref?t&&s?Fe(s)?s.concat(Kr(e)):[s,Kr(e)]:Kr(e):s,scopeId:i.scopeId,slotScopeIds:i.slotScopeIds,children:a,target:i.target,targetAnchor:i.targetAnchor,staticCount:i.staticCount,shapeFlag:i.shapeFlag,patchFlag:e&&i.type!==on?r===-1?16:r|16:r,dynamicProps:i.dynamicProps,dynamicChildren:i.dynamicChildren,appContext:i.appContext,dirs:i.dirs,transition:i.transition,component:i.component,suspense:i.suspense,ssContent:i.ssContent&&ai(i.ssContent),ssFallback:i.ssFallback&&ai(i.ssFallback),el:i.el,anchor:i.anchor,ctx:i.ctx}}function Lo(i=" ",e=0){return si(ma,null,i,e)}function Tp(i,e){const t=si(Yr,null,i);return t.staticCount=e,t}function gn(i){return i==null||typeof i=="boolean"?si(On):Fe(i)?si(on,null,i.slice()):typeof i=="object"?Qn(i):si(ma,null,String(i))}function Qn(i){return i.el===null&&i.patchFlag!==-1||i.memo?i:ai(i)}function fl(i,e){let t=0;const{shapeFlag:n}=i;if(e==null)e=null;else if(Fe(e))t=16;else if(typeof e=="object")if(n&65){const s=e.default;s&&(s._c&&(s._d=!1),fl(i,s()),s._c&&(s._d=!0));return}else{t=32;const s=e._;!s&&!(ga in e)?e._ctx=cn:s===3&&cn&&(cn.slots._===1?e._=1:(e._=2,i.patchFlag|=1024))}else ke(e)?(e={default:e,_ctx:cn},t=32):(e=String(e),n&64?(t=16,e=[Lo(e)]):t=8);i.children=e,i.shapeFlag|=t}function Ep(...i){const e={};for(let t=0;t<i.length;t++){const n=i[t];for(const s in n)if(s==="class")e.class!==n.class&&(e.class=$o([e.class,n.class]));else if(s==="style")e.style=qo([e.style,n.style]);else if(oa(s)){const r=e[s],a=n[s];a&&r!==a&&!(Fe(r)&&r.includes(a))&&(e[s]=r?[].concat(r,a):a)}else s!==""&&(e[s]=n[s])}return e}function pn(i,e,t,n=null){Qt(i,e,7,[t,n])}const Ap=Nh();let Cp=0;function Lp(i,e,t){const n=i.type,s=(e?e.appContext:i.appContext)||Ap,r={uid:Cp++,vnode:i,type:n,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new Wd(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Rh(n,s),emitsOptions:vh(n,s),emit:null,emitted:null,propsDefaults:st,inheritAttrs:n.inheritAttrs,ctx:st,data:st,props:st,attrs:st,slots:st,refs:st,setupState:st,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=Pf.bind(null,r),i.ce&&i.ce(r),r}let _t=null;const Rp=()=>_t||cn,us=i=>{_t=i,i.scope.on()},Ci=()=>{_t&&_t.scope.off(),_t=null};function Uh(i){return i.vnode.shapeFlag&4}let er=!1;function Pp(i,e=!1){er=e;const{props:t,children:n}=i.vnode,s=Uh(i);op(i,t,s,e),up(i,n);const r=s?Dp(i,e):void 0;return er=!1,r}function Dp(i,e){const t=i.type;i.accessCache=Object.create(null),i.proxy=dh(new Proxy(i.ctx,tp));const{setup:n}=t;if(n){const s=i.setupContext=n.length>1?Np(i):null;us(i),ys();const r=ii(n,i,0,[i.props,s]);if(bs(),Ci(),Zu(r)){if(r.then(Ci,Ci),e)return r.then(a=>{Ql(i,a,e)}).catch(a=>{ha(a,i,0)});i.asyncDep=r}else Ql(i,r,e)}else zh(i,e)}function Ql(i,e,t){ke(e)?i.type.__ssrInlineRender?i.ssrRender=e:i.render=e:ut(e)&&(i.setupState=fh(e)),zh(i,t)}let ec;function zh(i,e,t){const n=i.type;if(!i.render){if(!e&&ec&&!n.render){const s=n.template||hl(i).template;if(s){const{isCustomElement:r,compilerOptions:a}=i.appContext.config,{delimiters:o,compilerOptions:l}=n,c=Tt(Tt({isCustomElement:r,delimiters:o},a),l);n.render=ec(s,c)}}i.render=n.render||hn}us(i),ys(),np(i),bs(),Ci()}function Ip(i){return new Proxy(i.attrs,{get(e,t){return Gt(i,"get","$attrs"),e[t]}})}function Np(i){const e=n=>{i.exposed=n||{}};let t;return{get attrs(){return t||(t=Ip(i))},slots:i.slots,emit:i.emit,expose:e}}function pl(i){if(i.exposed)return i.exposeProxy||(i.exposeProxy=new Proxy(fh(dh(i.exposed)),{get(e,t){if(t in e)return e[t];if(t in js)return js[t](i)},has(e,t){return t in e||t in js}}))}function Fp(i){return ke(i)&&"__vccOpts"in i}const Op=(i,e)=>wf(i,e,er),Up=Symbol(""),zp=()=>qr(Up),Bp="3.2.45",kp="http://www.w3.org/2000/svg",bi=typeof document<"u"?document:null,tc=bi&&bi.createElement("template"),Vp={insert:(i,e,t)=>{e.insertBefore(i,t||null)},remove:i=>{const e=i.parentNode;e&&e.removeChild(i)},createElement:(i,e,t,n)=>{const s=e?bi.createElementNS(kp,i):bi.createElement(i,t?{is:t}:void 0);return i==="select"&&n&&n.multiple!=null&&s.setAttribute("multiple",n.multiple),s},createText:i=>bi.createTextNode(i),createComment:i=>bi.createComment(i),setText:(i,e)=>{i.nodeValue=e},setElementText:(i,e)=>{i.textContent=e},parentNode:i=>i.parentNode,nextSibling:i=>i.nextSibling,querySelector:i=>bi.querySelector(i),setScopeId(i,e){i.setAttribute(e,"")},insertStaticContent(i,e,t,n,s,r){const a=t?t.previousSibling:e.lastChild;if(s&&(s===r||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),t),!(s===r||!(s=s.nextSibling)););else{tc.innerHTML=n?`<svg>${i}</svg>`:i;const o=tc.content;if(n){const l=o.firstChild;for(;l.firstChild;)o.appendChild(l.firstChild);o.removeChild(l)}e.insertBefore(o,t)}return[a?a.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}};function Hp(i,e,t){const n=i._vtc;n&&(e=(e?[e,...n]:[...n]).join(" ")),e==null?i.removeAttribute("class"):t?i.setAttribute("class",e):i.className=e}function Gp(i,e,t){const n=i.style,s=vt(t);if(t&&!s){for(const r in t)Ro(n,r,t[r]);if(e&&!vt(e))for(const r in e)t[r]==null&&Ro(n,r,"")}else{const r=n.display;s?e!==t&&(n.cssText=t):e&&i.removeAttribute("style"),"_vod"in i&&(n.display=r)}}const nc=/\s*!important$/;function Ro(i,e,t){if(Fe(t))t.forEach(n=>Ro(i,e,n));else if(t==null&&(t=""),e.startsWith("--"))i.setProperty(e,t);else{const n=Wp(i,e);nc.test(t)?i.setProperty(vs(n),t.replace(nc,""),"important"):i[n]=t}}const ic=["Webkit","Moz","ms"],La={};function Wp(i,e){const t=La[e];if(t)return t;let n=cs(e);if(n!=="filter"&&n in i)return La[e]=n;n=Ju(n);for(let s=0;s<ic.length;s++){const r=ic[s]+n;if(r in i)return La[e]=r}return e}const sc="http://www.w3.org/1999/xlink";function jp(i,e,t,n,s){if(n&&e.startsWith("xlink:"))t==null?i.removeAttributeNS(sc,e.slice(6,e.length)):i.setAttributeNS(sc,e,t);else{const r=Id(e);t==null||r&&!Ku(t)?i.removeAttribute(e):i.setAttribute(e,r?"":t)}}function Xp(i,e,t,n,s,r,a){if(e==="innerHTML"||e==="textContent"){n&&a(n,s,r),i[e]=t==null?"":t;return}if(e==="value"&&i.tagName!=="PROGRESS"&&!i.tagName.includes("-")){i._value=t;const l=t==null?"":t;(i.value!==l||i.tagName==="OPTION")&&(i.value=l),t==null&&i.removeAttribute(e);return}let o=!1;if(t===""||t==null){const l=typeof i[e];l==="boolean"?t=Ku(t):t==null&&l==="string"?(t="",o=!0):l==="number"&&(t=0,o=!0)}try{i[e]=t}catch{}o&&i.removeAttribute(e)}function qp(i,e,t,n){i.addEventListener(e,t,n)}function $p(i,e,t,n){i.removeEventListener(e,t,n)}function Yp(i,e,t,n,s=null){const r=i._vei||(i._vei={}),a=r[e];if(n&&a)a.value=n;else{const[o,l]=Kp(e);if(n){const c=r[e]=Qp(n,s);qp(i,o,c,l)}else a&&($p(i,o,a,l),r[e]=void 0)}}const rc=/(?:Once|Passive|Capture)$/;function Kp(i){let e;if(rc.test(i)){e={};let n;for(;n=i.match(rc);)i=i.slice(0,i.length-n[0].length),e[n[0].toLowerCase()]=!0}return[i[2]===":"?i.slice(3):vs(i.slice(2)),e]}let Ra=0;const Zp=Promise.resolve(),Jp=()=>Ra||(Zp.then(()=>Ra=0),Ra=Date.now());function Qp(i,e){const t=n=>{if(!n._vts)n._vts=Date.now();else if(n._vts<=t.attached)return;Qt(em(n,t.value),e,5,[n])};return t.value=i,t.attached=Jp(),t}function em(i,e){if(Fe(e)){const t=i.stopImmediatePropagation;return i.stopImmediatePropagation=()=>{t.call(i),i._stopped=!0},e.map(n=>s=>!s._stopped&&n&&n(s))}else return e}const ac=/^on[a-z]/,tm=(i,e,t,n,s=!1,r,a,o,l)=>{e==="class"?Hp(i,n,s):e==="style"?Gp(i,t,n):oa(e)?Yo(e)||Yp(i,e,t,n,a):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):nm(i,e,n,s))?Xp(i,e,n,r,a,o,l):(e==="true-value"?i._trueValue=n:e==="false-value"&&(i._falseValue=n),jp(i,e,n,s))};function nm(i,e,t,n){return n?!!(e==="innerHTML"||e==="textContent"||e in i&&ac.test(e)&&ke(t)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&i.tagName==="INPUT"||e==="type"&&i.tagName==="TEXTAREA"||ac.test(e)&&vt(t)?!1:e in i}const im={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};Gf.props;const sm=Tt({patchProp:tm},Vp);let oc;function rm(){return oc||(oc=pp(sm))}const am=(...i)=>{const e=rm().createApp(...i),{mount:t}=e;return e.mount=n=>{const s=om(n);if(!s)return;const r=e._component;!ke(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.innerHTML="";const a=t(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),a},e};function om(i){return vt(i)?document.querySelector(i):i}const lm="/C1-Week07/vite.svg",cm="/C1-Week07/assets/vue.5532db34.svg";/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ml="146",Vi={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Hi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},um=0,lc=1,hm=2,Bh=1,dm=2,Vs=3,Di=0,en=1,Nn=2,dt=0,Un=1,cc=2,uc=3,hc=4,fm=5,ei=100,pm=101,mm=102,dc=103,fc=104,gm=200,_m=201,xm=202,vm=203,ia=204,sa=205,ym=206,bm=207,Mm=208,Sm=209,wm=210,Tm=0,Em=1,Am=2,Po=3,Cm=4,Lm=5,Rm=6,Pm=7,gl=0,Dm=1,Im=2,zn=0,kh=1,Nm=2,Fm=3,Om=4,Um=5,Vh=300,hs=301,ds=302,Do=303,Io=304,_a=306,fs=1e3,Kt=1001,ra=1002,Ze=1003,No=1004,Fo=1005,Ft=1006,Hh=1007,Ms=1008,Ii=1009,zm=1010,Bm=1011,_l=1012,km=1013,wi=1014,ti=1015,ps=1016,Vm=1017,Hm=1018,ls=1020,Gm=1021,Wm=1022,Zt=1023,jm=1024,Xm=1025,Li=1026,ms=1027,qm=1028,$m=1029,Ym=1030,Km=1031,Zm=1033,Pa=33776,Da=33777,Ia=33778,Na=33779,pc=35840,mc=35841,gc=35842,_c=35843,Jm=36196,xc=37492,vc=37496,yc=37808,bc=37809,Mc=37810,Sc=37811,wc=37812,Tc=37813,Ec=37814,Ac=37815,Cc=37816,Lc=37817,Rc=37818,Pc=37819,Dc=37820,Ic=37821,Nc=36492,tr=2300,gs=2301,Fa=2302,Fc=2400,Oc=2401,Uc=2402,Qm=2500,eg=1,Gh=2,Ni=3e3,Ye=3001,tg=3200,ng=3201,Ss=0,ig=1,Dn="srgb",Ti="srgb-linear",Oa=7680,sg=519,Oo=35044,zc="300 es",Uo=1035;class Oi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}}const bt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Bc=1234567;const qs=Math.PI/180,nr=180/Math.PI;function dn(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(bt[i&255]+bt[i>>8&255]+bt[i>>16&255]+bt[i>>24&255]+"-"+bt[e&255]+bt[e>>8&255]+"-"+bt[e>>16&15|64]+bt[e>>24&255]+"-"+bt[t&63|128]+bt[t>>8&255]+"-"+bt[t>>16&255]+bt[t>>24&255]+bt[n&255]+bt[n>>8&255]+bt[n>>16&255]+bt[n>>24&255]).toLowerCase()}function Mt(i,e,t){return Math.max(e,Math.min(t,i))}function xl(i,e){return(i%e+e)%e}function rg(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function ag(i,e,t){return i!==e?(t-i)/(e-i):0}function $s(i,e,t){return(1-t)*i+t*e}function og(i,e,t,n){return $s(i,e,1-Math.exp(-t*n))}function lg(i,e=1){return e-Math.abs(xl(i,e*2)-e)}function cg(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function ug(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function hg(i,e){return i+Math.floor(Math.random()*(e-i+1))}function dg(i,e){return i+Math.random()*(e-i)}function fg(i){return i*(.5-Math.random())}function pg(i){i!==void 0&&(Bc=i);let e=Bc+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function mg(i){return i*qs}function gg(i){return i*nr}function zo(i){return(i&i-1)===0&&i!==0}function Wh(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function aa(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function _g(i,e,t,n,s){const r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+n)/2),u=a((e+n)/2),h=r((e-n)/2),d=a((e-n)/2),m=r((n-e)/2),g=a((n-e)/2);switch(s){case"XYX":i.set(o*u,l*h,l*d,o*c);break;case"YZY":i.set(l*d,o*u,l*h,o*c);break;case"ZXZ":i.set(l*h,l*d,o*u,o*c);break;case"XZX":i.set(o*u,l*g,l*m,o*c);break;case"YXY":i.set(l*m,o*u,l*g,o*c);break;case"ZYZ":i.set(l*g,l*m,o*u,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Fn(i,e){switch(e.constructor){case Float32Array:return i;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function et(i,e){switch(e.constructor){case Float32Array:return i;case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var xg=Object.freeze({__proto__:null,DEG2RAD:qs,RAD2DEG:nr,generateUUID:dn,clamp:Mt,euclideanModulo:xl,mapLinear:rg,inverseLerp:ag,lerp:$s,damp:og,pingpong:lg,smoothstep:cg,smootherstep:ug,randInt:hg,randFloat:dg,randFloatSpread:fg,seededRandom:pg,degToRad:mg,radToDeg:gg,isPowerOfTwo:zo,ceilPowerOfTwo:Wh,floorPowerOfTwo:aa,setQuaternionFromProperEuler:_g,normalize:et,denormalize:Fn});class Te{constructor(e=0,t=0){Te.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Jt{constructor(){Jt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,n,s,r,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=s,u[2]=o,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],h=n[7],d=n[2],m=n[5],g=n[8],p=s[0],f=s[3],_=s[6],S=s[1],x=s[4],b=s[7],M=s[2],R=s[5],I=s[8];return r[0]=a*p+o*S+l*M,r[3]=a*f+o*x+l*R,r[6]=a*_+o*b+l*I,r[1]=c*p+u*S+h*M,r[4]=c*f+u*x+h*R,r[7]=c*_+u*b+h*I,r[2]=d*p+m*S+g*M,r[5]=d*f+m*x+g*R,r[8]=d*_+m*b+g*I,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-n*r*u+n*o*l+s*r*c-s*a*l}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=u*a-o*c,d=o*l-u*r,m=c*r-a*l,g=t*h+n*d+s*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const p=1/g;return e[0]=h*p,e[1]=(s*c-u*n)*p,e[2]=(o*n-s*a)*p,e[3]=d*p,e[4]=(u*t-s*l)*p,e[5]=(s*r-o*t)*p,e[6]=m*p,e[7]=(n*l-c*t)*p,e[8]=(a*t-n*r)*p,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=t,n[4]*=t,n[7]*=t,this}rotate(e){const t=Math.cos(e),n=Math.sin(e),s=this.elements,r=s[0],a=s[3],o=s[6],l=s[1],c=s[4],u=s[7];return s[0]=t*r+n*l,s[3]=t*a+n*c,s[6]=t*o+n*u,s[1]=-n*r+t*l,s[4]=-n*a+t*c,s[7]=-n*o+t*u,this}translate(e,t){const n=this.elements;return n[0]+=e*n[2],n[3]+=e*n[5],n[6]+=e*n[8],n[1]+=t*n[2],n[4]+=t*n[5],n[7]+=t*n[8],this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}function jh(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function ir(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Ri(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Zr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const Ua={[Dn]:{[Ti]:Ri},[Ti]:{[Dn]:Zr}},tn={legacyMode:!0,get workingColorSpace(){return Ti},set workingColorSpace(i){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(i,e,t){if(this.legacyMode||e===t||!e||!t)return i;if(Ua[e]&&Ua[e][t]!==void 0){const n=Ua[e][t];return i.r=n(i.r),i.g=n(i.g),i.b=n(i.b),i}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)}},Xh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ht={r:0,g:0,b:0},nn={h:0,s:0,l:0},br={h:0,s:0,l:0};function za(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}function Mr(i,e){return e.r=i.r,e.g=i.g,e.b=i.b,e}class Ce{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Dn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,tn.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=Ti){return this.r=e,this.g=t,this.b=n,tn.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=Ti){if(e=xl(e,1),t=Mt(t,0,1),n=Mt(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=za(a,r,e+1/3),this.g=za(a,r,e),this.b=za(a,r,e-1/3)}return tn.toWorkingColorSpace(this,s),this}setStyle(e,t=Dn){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(255,parseInt(r[1],10))/255,this.g=Math.min(255,parseInt(r[2],10))/255,this.b=Math.min(255,parseInt(r[3],10))/255,tn.toWorkingColorSpace(this,t),n(r[4]),this;if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(100,parseInt(r[1],10))/100,this.g=Math.min(100,parseInt(r[2],10))/100,this.b=Math.min(100,parseInt(r[3],10))/100,tn.toWorkingColorSpace(this,t),n(r[4]),this;break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o)){const l=parseFloat(r[1])/360,c=parseFloat(r[2])/100,u=parseFloat(r[3])/100;return n(r[4]),this.setHSL(l,c,u,t)}break}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],a=r.length;if(a===3)return this.r=parseInt(r.charAt(0)+r.charAt(0),16)/255,this.g=parseInt(r.charAt(1)+r.charAt(1),16)/255,this.b=parseInt(r.charAt(2)+r.charAt(2),16)/255,tn.toWorkingColorSpace(this,t),this;if(a===6)return this.r=parseInt(r.charAt(0)+r.charAt(1),16)/255,this.g=parseInt(r.charAt(2)+r.charAt(3),16)/255,this.b=parseInt(r.charAt(4)+r.charAt(5),16)/255,tn.toWorkingColorSpace(this,t),this}return e&&e.length>0?this.setColorName(e,t):this}setColorName(e,t=Dn){const n=Xh[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ri(e.r),this.g=Ri(e.g),this.b=Ri(e.b),this}copyLinearToSRGB(e){return this.r=Zr(e.r),this.g=Zr(e.g),this.b=Zr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Dn){return tn.fromWorkingColorSpace(Mr(this,ht),e),Mt(ht.r*255,0,255)<<16^Mt(ht.g*255,0,255)<<8^Mt(ht.b*255,0,255)<<0}getHexString(e=Dn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ti){tn.fromWorkingColorSpace(Mr(this,ht),t);const n=ht.r,s=ht.g,r=ht.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const h=a-o;switch(c=u<=.5?h/(a+o):h/(2-a-o),a){case n:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-n)/h+2;break;case r:l=(n-s)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Ti){return tn.fromWorkingColorSpace(Mr(this,ht),t),e.r=ht.r,e.g=ht.g,e.b=ht.b,e}getStyle(e=Dn){return tn.fromWorkingColorSpace(Mr(this,ht),e),e!==Dn?`color(${e} ${ht.r} ${ht.g} ${ht.b})`:`rgb(${ht.r*255|0},${ht.g*255|0},${ht.b*255|0})`}offsetHSL(e,t,n){return this.getHSL(nn),nn.h+=e,nn.s+=t,nn.l+=n,this.setHSL(nn.h,nn.s,nn.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(nn),e.getHSL(br);const n=$s(nn.h,br.h,t),s=$s(nn.s,br.s,t),r=$s(nn.l,br.l,t);return this.setHSL(n,s,r),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}Ce.NAMES=Xh;let Gi;class qh{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Gi===void 0&&(Gi=ir("canvas")),Gi.width=e.width,Gi.height=e.height;const n=Gi.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Gi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ir("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Ri(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Ri(t[n]/255)*255):t[n]=Ri(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class $h{constructor(e=null){this.isSource=!0,this.uuid=dn(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Ba(s[a].image)):r.push(Ba(s[a]))}else r=Ba(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function Ba(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?qh.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let vg=0;class It extends Oi{constructor(e=It.DEFAULT_IMAGE,t=It.DEFAULT_MAPPING,n=Kt,s=Kt,r=Ft,a=Ms,o=Zt,l=Ii,c=1,u=Ni){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:vg++}),this.uuid=dn(),this.name="",this.source=new $h(e),this.mipmaps=[],this.mapping=t,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Te(0,0),this.repeat=new Te(1,1),this.center=new Te(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Jt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Vh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case fs:e.x=e.x-Math.floor(e.x);break;case Kt:e.x=e.x<0?0:1;break;case ra:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case fs:e.y=e.y-Math.floor(e.y);break;case Kt:e.y=e.y<0?0:1;break;case ra:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}It.DEFAULT_IMAGE=null;It.DEFAULT_MAPPING=Vh;class tt{constructor(e=0,t=0,n=0,s=1){tt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const l=e.elements,c=l[0],u=l[4],h=l[8],d=l[1],m=l[5],g=l[9],p=l[2],f=l[6],_=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-p)<.01&&Math.abs(g-f)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+p)<.1&&Math.abs(g+f)<.1&&Math.abs(c+m+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(c+1)/2,b=(m+1)/2,M=(_+1)/2,R=(u+d)/4,I=(h+p)/4,v=(g+f)/4;return x>b&&x>M?x<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(x),s=R/n,r=I/n):b>M?b<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(b),n=R/s,r=v/s):M<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(M),n=I/r,s=v/r),this.set(n,s,r,t),this}let S=Math.sqrt((f-g)*(f-g)+(h-p)*(h-p)+(d-u)*(d-u));return Math.abs(S)<.001&&(S=1),this.x=(f-g)/S,this.y=(h-p)/S,this.z=(d-u)/S,this.w=Math.acos((c+m+_-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Vt extends Oi{constructor(e=1,t=1,n={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new tt(0,0,e,t),this.scissorTest=!1,this.viewport=new tt(0,0,e,t);const s={width:e,height:t,depth:1};this.texture=new It(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Ft,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new $h(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Yh extends It{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Ze,this.minFilter=Ze,this.wrapR=Kt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class yg extends It{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Ze,this.minFilter=Ze,this.wrapR=Kt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class bn{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let l=n[s+0],c=n[s+1],u=n[s+2],h=n[s+3];const d=r[a+0],m=r[a+1],g=r[a+2],p=r[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(o===1){e[t+0]=d,e[t+1]=m,e[t+2]=g,e[t+3]=p;return}if(h!==p||l!==d||c!==m||u!==g){let f=1-o;const _=l*d+c*m+u*g+h*p,S=_>=0?1:-1,x=1-_*_;if(x>Number.EPSILON){const M=Math.sqrt(x),R=Math.atan2(M,_*S);f=Math.sin(f*R)/M,o=Math.sin(o*R)/M}const b=o*S;if(l=l*f+d*b,c=c*f+m*b,u=u*f+g*b,h=h*f+p*b,f===1-o){const M=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=M,c*=M,u*=M,h*=M}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,s,r,a){const o=n[s],l=n[s+1],c=n[s+2],u=n[s+3],h=r[a],d=r[a+1],m=r[a+2],g=r[a+3];return e[t]=o*g+u*h+l*m-c*d,e[t+1]=l*g+u*d+c*h-o*m,e[t+2]=c*g+u*m+o*d-l*h,e[t+3]=u*g-o*h-l*d-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(s/2),h=o(r/2),d=l(n/2),m=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=d*u*h+c*m*g,this._y=c*m*h-d*u*g,this._z=c*u*g+d*m*h,this._w=c*u*h-d*m*g;break;case"YXZ":this._x=d*u*h+c*m*g,this._y=c*m*h-d*u*g,this._z=c*u*g-d*m*h,this._w=c*u*h+d*m*g;break;case"ZXY":this._x=d*u*h-c*m*g,this._y=c*m*h+d*u*g,this._z=c*u*g+d*m*h,this._w=c*u*h-d*m*g;break;case"ZYX":this._x=d*u*h-c*m*g,this._y=c*m*h+d*u*g,this._z=c*u*g-d*m*h,this._w=c*u*h+d*m*g;break;case"YZX":this._x=d*u*h+c*m*g,this._y=c*m*h+d*u*g,this._z=c*u*g-d*m*h,this._w=c*u*h-d*m*g;break;case"XZY":this._x=d*u*h-c*m*g,this._y=c*m*h-d*u*g,this._z=c*u*g+d*m*h,this._w=c*u*h+d*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],h=t[10],d=n+o+h;if(d>0){const m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(u-l)*m,this._y=(r-c)*m,this._z=(a-s)*m}else if(n>o&&n>h){const m=2*Math.sqrt(1+n-o-h);this._w=(u-l)/m,this._x=.25*m,this._y=(s+a)/m,this._z=(r+c)/m}else if(o>h){const m=2*Math.sqrt(1+o-n-h);this._w=(r-c)/m,this._x=(s+a)/m,this._y=.25*m,this._z=(l+u)/m}else{const m=2*Math.sqrt(1+h-n-o);this._w=(a-s)/m,this._x=(r+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Mt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+a*o+s*c-r*l,this._y=s*u+a*l+r*o-n*c,this._z=r*u+a*c+n*l-s*o,this._w=a*u-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,s=this._y,r=this._z,a=this._w;let o=a*e._w+n*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const m=1-t;return this._w=m*a+t*this._w,this._x=m*n+t*this._x,this._y=m*s+t*this._y,this._z=m*r+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),h=Math.sin((1-t)*u)/c,d=Math.sin(t*u)/c;return this._w=a*h+this._w*d,this._x=n*h+this._x*d,this._y=s*h+this._y*d,this._z=r*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(s),n*Math.sin(r),n*Math.cos(r),t*Math.sin(s))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class P{constructor(e=0,t=0,n=0){P.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(kc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(kc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=l*t+a*s-o*n,u=l*n+o*t-r*s,h=l*s+r*n-a*t,d=-r*t-a*n-o*s;return this.x=c*l+d*-r+u*-o-h*-a,this.y=u*l+d*-a+h*-r-c*-o,this.z=h*l+d*-o+c*-a-u*-r,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ka.copy(this).projectOnVector(e),this.sub(ka)}reflect(e){return this.sub(ka.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Mt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ka=new P,kc=new bn;class ws{constructor(e=new P(1/0,1/0,1/0),t=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,n=1/0,s=1/0,r=-1/0,a=-1/0,o=-1/0;for(let l=0,c=e.length;l<c;l+=3){const u=e[l],h=e[l+1],d=e[l+2];u<t&&(t=u),h<n&&(n=h),d<s&&(s=d),u>r&&(r=u),h>a&&(a=h),d>o&&(o=d)}return this.min.set(t,n,s),this.max.set(r,a,o),this}setFromBufferAttribute(e){let t=1/0,n=1/0,s=1/0,r=-1/0,a=-1/0,o=-1/0;for(let l=0,c=e.count;l<c;l++){const u=e.getX(l),h=e.getY(l),d=e.getZ(l);u<t&&(t=u),h<n&&(n=h),d<s&&(s=d),u>r&&(r=u),h>a&&(a=h),d>o&&(o=d)}return this.min.set(t,n,s),this.max.set(r,a,o),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=di.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0)if(t&&n.attributes!=null&&n.attributes.position!==void 0){const r=n.attributes.position;for(let a=0,o=r.count;a<o;a++)di.fromBufferAttribute(r,a).applyMatrix4(e.matrixWorld),this.expandByPoint(di)}else n.boundingBox===null&&n.computeBoundingBox(),Va.copy(n.boundingBox),Va.applyMatrix4(e.matrixWorld),this.union(Va);const s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,di),di.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ds),Sr.subVectors(this.max,Ds),Wi.subVectors(e.a,Ds),ji.subVectors(e.b,Ds),Xi.subVectors(e.c,Ds),Gn.subVectors(ji,Wi),Wn.subVectors(Xi,ji),fi.subVectors(Wi,Xi);let t=[0,-Gn.z,Gn.y,0,-Wn.z,Wn.y,0,-fi.z,fi.y,Gn.z,0,-Gn.x,Wn.z,0,-Wn.x,fi.z,0,-fi.x,-Gn.y,Gn.x,0,-Wn.y,Wn.x,0,-fi.y,fi.x,0];return!Ha(t,Wi,ji,Xi,Sr)||(t=[1,0,0,0,1,0,0,0,1],!Ha(t,Wi,ji,Xi,Sr))?!1:(wr.crossVectors(Gn,Wn),t=[wr.x,wr.y,wr.z],Ha(t,Wi,ji,Xi,Sr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return di.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(di).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(wn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),wn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),wn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),wn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),wn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),wn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),wn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),wn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(wn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const wn=[new P,new P,new P,new P,new P,new P,new P,new P],di=new P,Va=new ws,Wi=new P,ji=new P,Xi=new P,Gn=new P,Wn=new P,fi=new P,Ds=new P,Sr=new P,wr=new P,pi=new P;function Ha(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){pi.fromArray(i,r);const o=s.x*Math.abs(pi.x)+s.y*Math.abs(pi.y)+s.z*Math.abs(pi.z),l=e.dot(pi),c=t.dot(pi),u=n.dot(pi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const bg=new ws,Is=new P,Ga=new P;class Ts{constructor(e=new P,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):bg.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Is.subVectors(e,this.center);const t=Is.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Is,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ga.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Is.copy(e.center).add(Ga)),this.expandByPoint(Is.copy(e.center).sub(Ga))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Tn=new P,Wa=new P,Tr=new P,jn=new P,ja=new P,Er=new P,Xa=new P;class vl{constructor(e=new P,t=new P(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Tn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(n).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Tn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Tn.copy(this.direction).multiplyScalar(t).add(this.origin),Tn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Wa.copy(e).add(t).multiplyScalar(.5),Tr.copy(t).sub(e).normalize(),jn.copy(this.origin).sub(Wa);const r=e.distanceTo(t)*.5,a=-this.direction.dot(Tr),o=jn.dot(this.direction),l=-jn.dot(Tr),c=jn.lengthSq(),u=Math.abs(1-a*a);let h,d,m,g;if(u>0)if(h=a*l-o,d=a*o-l,g=r*u,h>=0)if(d>=-g)if(d<=g){const p=1/u;h*=p,d*=p,m=h*(h+a*d+2*o)+d*(a*h+d+2*l)+c}else d=r,h=Math.max(0,-(a*d+o)),m=-h*h+d*(d+2*l)+c;else d=-r,h=Math.max(0,-(a*d+o)),m=-h*h+d*(d+2*l)+c;else d<=-g?(h=Math.max(0,-(-a*r+o)),d=h>0?-r:Math.min(Math.max(-r,-l),r),m=-h*h+d*(d+2*l)+c):d<=g?(h=0,d=Math.min(Math.max(-r,-l),r),m=d*(d+2*l)+c):(h=Math.max(0,-(a*r+o)),d=h>0?r:Math.min(Math.max(-r,-l),r),m=-h*h+d*(d+2*l)+c);else d=a>0?-r:r,h=Math.max(0,-(a*d+o)),m=-h*h+d*(d+2*l)+c;return n&&n.copy(this.direction).multiplyScalar(h).add(this.origin),s&&s.copy(Tr).multiplyScalar(d).add(Wa),m}intersectSphere(e,t){Tn.subVectors(e.center,this.origin);const n=Tn.dot(this.direction),s=Tn.dot(Tn)-n*n,r=e.radius*e.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,l=n+a;return o<0&&l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,s=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,s=(e.min.x-d.x)*c),u>=0?(r=(e.min.y-d.y)*u,a=(e.max.y-d.y)*u):(r=(e.max.y-d.y)*u,a=(e.min.y-d.y)*u),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),h>=0?(o=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(o=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Tn)!==null}intersectTriangle(e,t,n,s,r){ja.subVectors(t,e),Er.subVectors(n,e),Xa.crossVectors(ja,Er);let a=this.direction.dot(Xa),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;jn.subVectors(this.origin,e);const l=o*this.direction.dot(Er.crossVectors(jn,Er));if(l<0)return null;const c=o*this.direction.dot(ja.cross(jn));if(c<0||l+c>a)return null;const u=-o*jn.dot(Xa);return u<0?null:this.at(u/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ze{constructor(){ze.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,n,s,r,a,o,l,c,u,h,d,m,g,p,f){const _=this.elements;return _[0]=e,_[4]=t,_[8]=n,_[12]=s,_[1]=r,_[5]=a,_[9]=o,_[13]=l,_[2]=c,_[6]=u,_[10]=h,_[14]=d,_[3]=m,_[7]=g,_[11]=p,_[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ze().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,s=1/qi.setFromMatrixColumn(e,0).length(),r=1/qi.setFromMatrixColumn(e,1).length(),a=1/qi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const d=a*u,m=a*h,g=o*u,p=o*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=m+g*c,t[5]=d-p*c,t[9]=-o*l,t[2]=p-d*c,t[6]=g+m*c,t[10]=a*l}else if(e.order==="YXZ"){const d=l*u,m=l*h,g=c*u,p=c*h;t[0]=d+p*o,t[4]=g*o-m,t[8]=a*c,t[1]=a*h,t[5]=a*u,t[9]=-o,t[2]=m*o-g,t[6]=p+d*o,t[10]=a*l}else if(e.order==="ZXY"){const d=l*u,m=l*h,g=c*u,p=c*h;t[0]=d-p*o,t[4]=-a*h,t[8]=g+m*o,t[1]=m+g*o,t[5]=a*u,t[9]=p-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const d=a*u,m=a*h,g=o*u,p=o*h;t[0]=l*u,t[4]=g*c-m,t[8]=d*c+p,t[1]=l*h,t[5]=p*c+d,t[9]=m*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const d=a*l,m=a*c,g=o*l,p=o*c;t[0]=l*u,t[4]=p-d*h,t[8]=g*h+m,t[1]=h,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=m*h+g,t[10]=d-p*h}else if(e.order==="XZY"){const d=a*l,m=a*c,g=o*l,p=o*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=d*h+p,t[5]=a*u,t[9]=m*h-g,t[2]=g*h-m,t[6]=o*u,t[10]=p*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Mg,e,Sg)}lookAt(e,t,n){const s=this.elements;return Bt.subVectors(e,t),Bt.lengthSq()===0&&(Bt.z=1),Bt.normalize(),Xn.crossVectors(n,Bt),Xn.lengthSq()===0&&(Math.abs(n.z)===1?Bt.x+=1e-4:Bt.z+=1e-4,Bt.normalize(),Xn.crossVectors(n,Bt)),Xn.normalize(),Ar.crossVectors(Bt,Xn),s[0]=Xn.x,s[4]=Ar.x,s[8]=Bt.x,s[1]=Xn.y,s[5]=Ar.y,s[9]=Bt.y,s[2]=Xn.z,s[6]=Ar.z,s[10]=Bt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],h=n[5],d=n[9],m=n[13],g=n[2],p=n[6],f=n[10],_=n[14],S=n[3],x=n[7],b=n[11],M=n[15],R=s[0],I=s[4],v=s[8],A=s[12],D=s[1],X=s[5],le=s[9],k=s[13],U=s[2],Y=s[6],ie=s[10],te=s[14],G=s[3],z=s[7],W=s[11],ce=s[15];return r[0]=a*R+o*D+l*U+c*G,r[4]=a*I+o*X+l*Y+c*z,r[8]=a*v+o*le+l*ie+c*W,r[12]=a*A+o*k+l*te+c*ce,r[1]=u*R+h*D+d*U+m*G,r[5]=u*I+h*X+d*Y+m*z,r[9]=u*v+h*le+d*ie+m*W,r[13]=u*A+h*k+d*te+m*ce,r[2]=g*R+p*D+f*U+_*G,r[6]=g*I+p*X+f*Y+_*z,r[10]=g*v+p*le+f*ie+_*W,r[14]=g*A+p*k+f*te+_*ce,r[3]=S*R+x*D+b*U+M*G,r[7]=S*I+x*X+b*Y+M*z,r[11]=S*v+x*le+b*ie+M*W,r[15]=S*A+x*k+b*te+M*ce,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],h=e[6],d=e[10],m=e[14],g=e[3],p=e[7],f=e[11],_=e[15];return g*(+r*l*h-s*c*h-r*o*d+n*c*d+s*o*m-n*l*m)+p*(+t*l*m-t*c*d+r*a*d-s*a*m+s*c*u-r*l*u)+f*(+t*c*h-t*o*m-r*a*h+n*a*m+r*o*u-n*c*u)+_*(-s*o*u-t*l*h+t*o*d+s*a*h-n*a*d+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=e[9],d=e[10],m=e[11],g=e[12],p=e[13],f=e[14],_=e[15],S=h*f*c-p*d*c+p*l*m-o*f*m-h*l*_+o*d*_,x=g*d*c-u*f*c-g*l*m+a*f*m+u*l*_-a*d*_,b=u*p*c-g*h*c+g*o*m-a*p*m-u*o*_+a*h*_,M=g*h*l-u*p*l-g*o*d+a*p*d+u*o*f-a*h*f,R=t*S+n*x+s*b+r*M;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const I=1/R;return e[0]=S*I,e[1]=(p*d*r-h*f*r-p*s*m+n*f*m+h*s*_-n*d*_)*I,e[2]=(o*f*r-p*l*r+p*s*c-n*f*c-o*s*_+n*l*_)*I,e[3]=(h*l*r-o*d*r-h*s*c+n*d*c+o*s*m-n*l*m)*I,e[4]=x*I,e[5]=(u*f*r-g*d*r+g*s*m-t*f*m-u*s*_+t*d*_)*I,e[6]=(g*l*r-a*f*r-g*s*c+t*f*c+a*s*_-t*l*_)*I,e[7]=(a*d*r-u*l*r+u*s*c-t*d*c-a*s*m+t*l*m)*I,e[8]=b*I,e[9]=(g*h*r-u*p*r-g*n*m+t*p*m+u*n*_-t*h*_)*I,e[10]=(a*p*r-g*o*r+g*n*c-t*p*c-a*n*_+t*o*_)*I,e[11]=(u*o*r-a*h*r-u*n*c+t*h*c+a*n*m-t*o*m)*I,e[12]=M*I,e[13]=(u*p*s-g*h*s+g*n*d-t*p*d-u*n*f+t*h*f)*I,e[14]=(g*o*s-a*p*s-g*n*l+t*p*l+a*n*f-t*o*f)*I,e[15]=(a*h*s-u*o*s+u*n*l-t*h*l-a*n*d+t*o*d)*I,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,u=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,u*o+n,u*l-s*a,0,c*l-s*o,u*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,u=a+a,h=o+o,d=r*c,m=r*u,g=r*h,p=a*u,f=a*h,_=o*h,S=l*c,x=l*u,b=l*h,M=n.x,R=n.y,I=n.z;return s[0]=(1-(p+_))*M,s[1]=(m+b)*M,s[2]=(g-x)*M,s[3]=0,s[4]=(m-b)*R,s[5]=(1-(d+_))*R,s[6]=(f+S)*R,s[7]=0,s[8]=(g+x)*I,s[9]=(f-S)*I,s[10]=(1-(d+p))*I,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;let r=qi.set(s[0],s[1],s[2]).length();const a=qi.set(s[4],s[5],s[6]).length(),o=qi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],sn.copy(this);const c=1/r,u=1/a,h=1/o;return sn.elements[0]*=c,sn.elements[1]*=c,sn.elements[2]*=c,sn.elements[4]*=u,sn.elements[5]*=u,sn.elements[6]*=u,sn.elements[8]*=h,sn.elements[9]*=h,sn.elements[10]*=h,t.setFromRotationMatrix(sn),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,s,r,a){const o=this.elements,l=2*r/(t-e),c=2*r/(n-s),u=(t+e)/(t-e),h=(n+s)/(n-s),d=-(a+r)/(a-r),m=-2*a*r/(a-r);return o[0]=l,o[4]=0,o[8]=u,o[12]=0,o[1]=0,o[5]=c,o[9]=h,o[13]=0,o[2]=0,o[6]=0,o[10]=d,o[14]=m,o[3]=0,o[7]=0,o[11]=-1,o[15]=0,this}makeOrthographic(e,t,n,s,r,a){const o=this.elements,l=1/(t-e),c=1/(n-s),u=1/(a-r),h=(t+e)*l,d=(n+s)*c,m=(a+r)*u;return o[0]=2*l,o[4]=0,o[8]=0,o[12]=-h,o[1]=0,o[5]=2*c,o[9]=0,o[13]=-d,o[2]=0,o[6]=0,o[10]=-2*u,o[14]=-m,o[3]=0,o[7]=0,o[11]=0,o[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const qi=new P,sn=new ze,Mg=new P(0,0,0),Sg=new P(1,1,1),Xn=new P,Ar=new P,Bt=new P,Vc=new ze,Hc=new bn;class lr{constructor(e=0,t=0,n=0,s=lr.DefaultOrder){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],u=s[9],h=s[2],d=s[6],m=s[10];switch(t){case"XYZ":this._y=Math.asin(Mt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Mt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Mt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Mt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Mt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-Mt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Vc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Vc,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Hc.setFromEuler(this),this.setFromQuaternion(Hc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")}}lr.DefaultOrder="XYZ";lr.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class Kh{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let wg=0;const Gc=new P,$i=new bn,En=new ze,Cr=new P,Ns=new P,Tg=new P,Eg=new bn,Wc=new P(1,0,0),jc=new P(0,1,0),Xc=new P(0,0,1),Ag={type:"added"},qc={type:"removed"};class rt extends Oi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:wg++}),this.uuid=dn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=rt.DefaultUp.clone();const e=new P,t=new lr,n=new bn,s=new P(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ze},normalMatrix:{value:new Jt}}),this.matrix=new ze,this.matrixWorld=new ze,this.matrixAutoUpdate=rt.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=rt.DefaultMatrixWorldAutoUpdate,this.layers=new Kh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return $i.setFromAxisAngle(e,t),this.quaternion.multiply($i),this}rotateOnWorldAxis(e,t){return $i.setFromAxisAngle(e,t),this.quaternion.premultiply($i),this}rotateX(e){return this.rotateOnAxis(Wc,e)}rotateY(e){return this.rotateOnAxis(jc,e)}rotateZ(e){return this.rotateOnAxis(Xc,e)}translateOnAxis(e,t){return Gc.copy(e).applyQuaternion(this.quaternion),this.position.add(Gc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Wc,e)}translateY(e){return this.translateOnAxis(jc,e)}translateZ(e){return this.translateOnAxis(Xc,e)}localToWorld(e){return e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return e.applyMatrix4(En.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Cr.copy(e):Cr.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Ns.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?En.lookAt(Ns,Cr,this.up):En.lookAt(Cr,Ns,this.up),this.quaternion.setFromRotationMatrix(En),s&&(En.extractRotation(s.matrixWorld),$i.setFromRotationMatrix(En),this.quaternion.premultiply($i.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Ag)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(qc)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(qc)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),En.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),En.multiply(e.parent.matrixWorld)),e.applyMatrix4(En),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ns,e,Tg),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ns,Eg,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++){const r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++){const o=s[r];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),h=a(e.shapes),d=a(e.skeletons),m=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}rt.DefaultUp=new P(0,1,0);rt.DefaultMatrixAutoUpdate=!0;rt.DefaultMatrixWorldAutoUpdate=!0;const rn=new P,An=new P,qa=new P,Cn=new P,Yi=new P,Ki=new P,$c=new P,$a=new P,Ya=new P,Ka=new P;class In{constructor(e=new P,t=new P,n=new P){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),rn.subVectors(e,t),s.cross(rn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){rn.subVectors(s,t),An.subVectors(n,t),qa.subVectors(e,t);const a=rn.dot(rn),o=rn.dot(An),l=rn.dot(qa),c=An.dot(An),u=An.dot(qa),h=a*c-o*o;if(h===0)return r.set(-2,-1,-1);const d=1/h,m=(c*l-o*u)*d,g=(a*u-o*l)*d;return r.set(1-m-g,g,m)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Cn),Cn.x>=0&&Cn.y>=0&&Cn.x+Cn.y<=1}static getUV(e,t,n,s,r,a,o,l){return this.getBarycoord(e,t,n,s,Cn),l.set(0,0),l.addScaledVector(r,Cn.x),l.addScaledVector(a,Cn.y),l.addScaledVector(o,Cn.z),l}static isFrontFacing(e,t,n,s){return rn.subVectors(n,t),An.subVectors(e,t),rn.cross(An).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return rn.subVectors(this.c,this.b),An.subVectors(this.a,this.b),rn.cross(An).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return In.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return In.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,s,r){return In.getUV(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return In.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return In.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let a,o;Yi.subVectors(s,n),Ki.subVectors(r,n),$a.subVectors(e,n);const l=Yi.dot($a),c=Ki.dot($a);if(l<=0&&c<=0)return t.copy(n);Ya.subVectors(e,s);const u=Yi.dot(Ya),h=Ki.dot(Ya);if(u>=0&&h<=u)return t.copy(s);const d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(n).addScaledVector(Yi,a);Ka.subVectors(e,r);const m=Yi.dot(Ka),g=Ki.dot(Ka);if(g>=0&&m<=g)return t.copy(r);const p=m*c-l*g;if(p<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector(Ki,o);const f=u*g-m*h;if(f<=0&&h-u>=0&&m-g>=0)return $c.subVectors(r,s),o=(h-u)/(h-u+(m-g)),t.copy(s).addScaledVector($c,o);const _=1/(f+p+d);return a=p*_,o=d*_,t.copy(n).addScaledVector(Yi,a).addScaledVector(Ki,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let Cg=0;class Ht extends Oi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Cg++}),this.uuid=dn(),this.name="",this.type="Material",this.blending=Un,this.side=Di,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=ia,this.blendDst=sa,this.blendEquation=ei,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Po,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=sg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Oa,this.stencilZFail=Oa,this.stencilZPass=Oa,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}const s=this[t];if(s===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Un&&(n.blending=this.blending),this.side!==Di&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(t){const r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class vn extends Ht{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ce(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=gl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ct=new P,Lr=new Te;class Ut{constructor(e,t,n){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n===!0,this.usage=Oo,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Lr.fromBufferAttribute(this,t),Lr.applyMatrix3(e),this.setXY(t,Lr.x,Lr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)ct.fromBufferAttribute(this,t),ct.applyMatrix3(e),this.setXYZ(t,ct.x,ct.y,ct.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)ct.fromBufferAttribute(this,t),ct.applyMatrix4(e),this.setXYZ(t,ct.x,ct.y,ct.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)ct.fromBufferAttribute(this,t),ct.applyNormalMatrix(e),this.setXYZ(t,ct.x,ct.y,ct.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)ct.fromBufferAttribute(this,t),ct.transformDirection(e),this.setXYZ(t,ct.x,ct.y,ct.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Fn(t,this.array)),t}setX(e,t){return this.normalized&&(t=et(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Fn(t,this.array)),t}setY(e,t){return this.normalized&&(t=et(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Fn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=et(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Fn(t,this.array)),t}setW(e,t){return this.normalized&&(t=et(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=et(t,this.array),n=et(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=et(t,this.array),n=et(n,this.array),s=et(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=et(t,this.array),n=et(n,this.array),s=et(s,this.array),r=et(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Oo&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class Zh extends Ut{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Jh extends Ut{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class wt extends Ut{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Lg=0;const $t=new ze,Za=new rt,Zi=new P,kt=new ws,Fs=new ws,gt=new P;class Wt extends Oi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Lg++}),this.uuid=dn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(jh(e)?Jh:Zh)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Jt().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return $t.makeRotationFromQuaternion(e),this.applyMatrix4($t),this}rotateX(e){return $t.makeRotationX(e),this.applyMatrix4($t),this}rotateY(e){return $t.makeRotationY(e),this.applyMatrix4($t),this}rotateZ(e){return $t.makeRotationZ(e),this.applyMatrix4($t),this}translate(e,t,n){return $t.makeTranslation(e,t,n),this.applyMatrix4($t),this}scale(e,t,n){return $t.makeScale(e,t,n),this.applyMatrix4($t),this}lookAt(e){return Za.lookAt(e),Za.updateMatrix(),this.applyMatrix4(Za.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Zi).negate(),this.translate(Zi.x,Zi.y,Zi.z),this}setFromPoints(e){const t=[];for(let n=0,s=e.length;n<s;n++){const r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new wt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ws);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];kt.setFromBufferAttribute(r),this.morphTargetsRelative?(gt.addVectors(this.boundingBox.min,kt.min),this.boundingBox.expandByPoint(gt),gt.addVectors(this.boundingBox.max,kt.max),this.boundingBox.expandByPoint(gt)):(this.boundingBox.expandByPoint(kt.min),this.boundingBox.expandByPoint(kt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ts);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new P,1/0);return}if(e){const n=this.boundingSphere.center;if(kt.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];Fs.setFromBufferAttribute(o),this.morphTargetsRelative?(gt.addVectors(kt.min,Fs.min),kt.expandByPoint(gt),gt.addVectors(kt.max,Fs.max),kt.expandByPoint(gt)):(kt.expandByPoint(Fs.min),kt.expandByPoint(Fs.max))}kt.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)gt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(gt));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)gt.fromBufferAttribute(o,c),l&&(Zi.fromBufferAttribute(e,c),gt.add(Zi)),s=Math.max(s,n.distanceToSquared(gt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,s=t.position.array,r=t.normal.array,a=t.uv.array,o=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ut(new Float32Array(4*o),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let D=0;D<o;D++)c[D]=new P,u[D]=new P;const h=new P,d=new P,m=new P,g=new Te,p=new Te,f=new Te,_=new P,S=new P;function x(D,X,le){h.fromArray(s,D*3),d.fromArray(s,X*3),m.fromArray(s,le*3),g.fromArray(a,D*2),p.fromArray(a,X*2),f.fromArray(a,le*2),d.sub(h),m.sub(h),p.sub(g),f.sub(g);const k=1/(p.x*f.y-f.x*p.y);!isFinite(k)||(_.copy(d).multiplyScalar(f.y).addScaledVector(m,-p.y).multiplyScalar(k),S.copy(m).multiplyScalar(p.x).addScaledVector(d,-f.x).multiplyScalar(k),c[D].add(_),c[X].add(_),c[le].add(_),u[D].add(S),u[X].add(S),u[le].add(S))}let b=this.groups;b.length===0&&(b=[{start:0,count:n.length}]);for(let D=0,X=b.length;D<X;++D){const le=b[D],k=le.start,U=le.count;for(let Y=k,ie=k+U;Y<ie;Y+=3)x(n[Y+0],n[Y+1],n[Y+2])}const M=new P,R=new P,I=new P,v=new P;function A(D){I.fromArray(r,D*3),v.copy(I);const X=c[D];M.copy(X),M.sub(I.multiplyScalar(I.dot(X))).normalize(),R.crossVectors(v,X);const k=R.dot(u[D])<0?-1:1;l[D*4]=M.x,l[D*4+1]=M.y,l[D*4+2]=M.z,l[D*4+3]=k}for(let D=0,X=b.length;D<X;++D){const le=b[D],k=le.start,U=le.count;for(let Y=k,ie=k+U;Y<ie;Y+=3)A(n[Y+0]),A(n[Y+1]),A(n[Y+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ut(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,m=n.count;d<m;d++)n.setXYZ(d,0,0,0);const s=new P,r=new P,a=new P,o=new P,l=new P,c=new P,u=new P,h=new P;if(e)for(let d=0,m=e.count;d<m;d+=3){const g=e.getX(d+0),p=e.getX(d+1),f=e.getX(d+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,p),a.fromBufferAttribute(t,f),u.subVectors(a,r),h.subVectors(s,r),u.cross(h),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,p),c.fromBufferAttribute(n,f),o.add(u),l.add(u),c.add(u),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(p,l.x,l.y,l.z),n.setXYZ(f,c.x,c.y,c.z)}else for(let d=0,m=t.count;d<m;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),u.subVectors(a,r),h.subVectors(s,r),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)gt.fromBufferAttribute(e,t),gt.normalize(),e.setXYZ(t,gt.x,gt.y,gt.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,h=o.normalized,d=new c.constructor(l.length*u);let m=0,g=0;for(let p=0,f=l.length;p<f;p++){o.isInterleavedBufferAttribute?m=l[p]*o.data.stride+o.offset:m=l[p]*u;for(let _=0;_<u;_++)d[g++]=c[m++]}return new Ut(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Wt,n=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=e(l,n);t.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let u=0,h=c.length;u<h;u++){const d=c[u],m=e(d,n);l.push(m)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){const m=c[h];u.push(m.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const s=e.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],h=r[c];for(let d=0,m=h.length;d<m;d++)u.push(h[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const Yc=new ze,Ji=new vl,Ja=new Ts,qn=new P,$n=new P,Yn=new P,Qa=new P,eo=new P,to=new P,Rr=new P,Pr=new P,Dr=new P,Ir=new Te,Nr=new Te,Fr=new Te,no=new P,Or=new P;class xt extends rt{constructor(e=new Wt,t=new vn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;if(s===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),Ja.copy(n.boundingSphere),Ja.applyMatrix4(r),e.ray.intersectsSphere(Ja)===!1)||(Yc.copy(r).invert(),Ji.copy(e.ray).applyMatrix4(Yc),n.boundingBox!==null&&Ji.intersectsBox(n.boundingBox)===!1))return;let a;const o=n.index,l=n.attributes.position,c=n.morphAttributes.position,u=n.morphTargetsRelative,h=n.attributes.uv,d=n.attributes.uv2,m=n.groups,g=n.drawRange;if(o!==null)if(Array.isArray(s))for(let p=0,f=m.length;p<f;p++){const _=m[p],S=s[_.materialIndex],x=Math.max(_.start,g.start),b=Math.min(o.count,Math.min(_.start+_.count,g.start+g.count));for(let M=x,R=b;M<R;M+=3){const I=o.getX(M),v=o.getX(M+1),A=o.getX(M+2);a=Ur(this,S,e,Ji,l,c,u,h,d,I,v,A),a&&(a.faceIndex=Math.floor(M/3),a.face.materialIndex=_.materialIndex,t.push(a))}}else{const p=Math.max(0,g.start),f=Math.min(o.count,g.start+g.count);for(let _=p,S=f;_<S;_+=3){const x=o.getX(_),b=o.getX(_+1),M=o.getX(_+2);a=Ur(this,s,e,Ji,l,c,u,h,d,x,b,M),a&&(a.faceIndex=Math.floor(_/3),t.push(a))}}else if(l!==void 0)if(Array.isArray(s))for(let p=0,f=m.length;p<f;p++){const _=m[p],S=s[_.materialIndex],x=Math.max(_.start,g.start),b=Math.min(l.count,Math.min(_.start+_.count,g.start+g.count));for(let M=x,R=b;M<R;M+=3){const I=M,v=M+1,A=M+2;a=Ur(this,S,e,Ji,l,c,u,h,d,I,v,A),a&&(a.faceIndex=Math.floor(M/3),a.face.materialIndex=_.materialIndex,t.push(a))}}else{const p=Math.max(0,g.start),f=Math.min(l.count,g.start+g.count);for(let _=p,S=f;_<S;_+=3){const x=_,b=_+1,M=_+2;a=Ur(this,s,e,Ji,l,c,u,h,d,x,b,M),a&&(a.faceIndex=Math.floor(_/3),t.push(a))}}}}function Rg(i,e,t,n,s,r,a,o){let l;if(e.side===en?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,e.side!==Nn,o),l===null)return null;Or.copy(o),Or.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(Or);return c<t.near||c>t.far?null:{distance:c,point:Or.clone(),object:i}}function Ur(i,e,t,n,s,r,a,o,l,c,u,h){qn.fromBufferAttribute(s,c),$n.fromBufferAttribute(s,u),Yn.fromBufferAttribute(s,h);const d=i.morphTargetInfluences;if(r&&d){Rr.set(0,0,0),Pr.set(0,0,0),Dr.set(0,0,0);for(let g=0,p=r.length;g<p;g++){const f=d[g],_=r[g];f!==0&&(Qa.fromBufferAttribute(_,c),eo.fromBufferAttribute(_,u),to.fromBufferAttribute(_,h),a?(Rr.addScaledVector(Qa,f),Pr.addScaledVector(eo,f),Dr.addScaledVector(to,f)):(Rr.addScaledVector(Qa.sub(qn),f),Pr.addScaledVector(eo.sub($n),f),Dr.addScaledVector(to.sub(Yn),f)))}qn.add(Rr),$n.add(Pr),Yn.add(Dr)}i.isSkinnedMesh&&(i.boneTransform(c,qn),i.boneTransform(u,$n),i.boneTransform(h,Yn));const m=Rg(i,e,t,n,qn,$n,Yn,no);if(m){o&&(Ir.fromBufferAttribute(o,c),Nr.fromBufferAttribute(o,u),Fr.fromBufferAttribute(o,h),m.uv=In.getUV(no,qn,$n,Yn,Ir,Nr,Fr,new Te)),l&&(Ir.fromBufferAttribute(l,c),Nr.fromBufferAttribute(l,u),Fr.fromBufferAttribute(l,h),m.uv2=In.getUV(no,qn,$n,Yn,Ir,Nr,Fr,new Te));const g={a:c,b:u,c:h,normal:new P,materialIndex:0};In.getNormal(qn,$n,Yn,g.normal),m.face=g}return m}class Es extends Wt{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],u=[],h=[];let d=0,m=0;g("z","y","x",-1,-1,n,t,e,a,r,0),g("z","y","x",1,-1,n,t,-e,a,r,1),g("x","z","y",1,1,e,n,t,s,a,2),g("x","z","y",1,-1,e,n,-t,s,a,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new wt(c,3)),this.setAttribute("normal",new wt(u,3)),this.setAttribute("uv",new wt(h,2));function g(p,f,_,S,x,b,M,R,I,v,A){const D=b/I,X=M/v,le=b/2,k=M/2,U=R/2,Y=I+1,ie=v+1;let te=0,G=0;const z=new P;for(let W=0;W<ie;W++){const ce=W*X-k;for(let re=0;re<Y;re++){const ue=re*D-le;z[p]=ue*S,z[f]=ce*x,z[_]=U,c.push(z.x,z.y,z.z),z[p]=0,z[f]=0,z[_]=R>0?1:-1,u.push(z.x,z.y,z.z),h.push(re/I),h.push(1-W/v),te+=1}}for(let W=0;W<v;W++)for(let ce=0;ce<I;ce++){const re=d+ce+Y*W,ue=d+ce+Y*(W+1),Me=d+(ce+1)+Y*(W+1),Re=d+(ce+1)+Y*W;l.push(re,ue,Re),l.push(ue,Me,Re),G+=6}o.addGroup(m,G,A),m+=G,d+=te}}static fromJSON(e){return new Es(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function _s(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function Lt(i){const e={};for(let t=0;t<i.length;t++){const n=_s(i[t]);for(const s in n)e[s]=n[s]}return e}function Pg(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}const Mi={clone:_s,merge:Lt};var Dg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ig=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ot extends Ht{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Dg,this.fragmentShader=Ig,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=_s(e.uniforms),this.uniformsGroups=Pg(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Qh extends rt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ze,this.projectionMatrix=new ze,this.projectionMatrixInverse=new ze}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Pt extends Qh{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=nr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(qs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return nr*2*Math.atan(Math.tan(qs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(qs*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Qi=90,es=1;class Ng extends rt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n;const s=new Pt(Qi,es,e,t);s.layers=this.layers,s.up.set(0,-1,0),s.lookAt(new P(1,0,0)),this.add(s);const r=new Pt(Qi,es,e,t);r.layers=this.layers,r.up.set(0,-1,0),r.lookAt(new P(-1,0,0)),this.add(r);const a=new Pt(Qi,es,e,t);a.layers=this.layers,a.up.set(0,0,1),a.lookAt(new P(0,1,0)),this.add(a);const o=new Pt(Qi,es,e,t);o.layers=this.layers,o.up.set(0,0,-1),o.lookAt(new P(0,-1,0)),this.add(o);const l=new Pt(Qi,es,e,t);l.layers=this.layers,l.up.set(0,-1,0),l.lookAt(new P(0,0,1)),this.add(l);const c=new Pt(Qi,es,e,t);c.layers=this.layers,c.up.set(0,-1,0),c.lookAt(new P(0,0,-1)),this.add(c)}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[s,r,a,o,l,c]=this.children,u=e.getRenderTarget(),h=e.toneMapping,d=e.xr.enabled;e.toneMapping=zn,e.xr.enabled=!1;const m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,s),e.setRenderTarget(n,1),e.render(t,r),e.setRenderTarget(n,2),e.render(t,a),e.setRenderTarget(n,3),e.render(t,o),e.setRenderTarget(n,4),e.render(t,l),n.texture.generateMipmaps=m,e.setRenderTarget(n,5),e.render(t,c),e.setRenderTarget(u),e.toneMapping=h,e.xr.enabled=d,n.texture.needsPMREMUpdate=!0}}class ed extends It{constructor(e,t,n,s,r,a,o,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:hs,super(e,t,n,s,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Fg extends Vt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new ed(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Ft}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Es(5,5,5),r=new Ot({name:"CubemapFromEquirect",uniforms:_s(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:en,blending:dt});r.uniforms.tEquirect.value=t;const a=new xt(s,r),o=t.minFilter;return t.minFilter===Ms&&(t.minFilter=Ft),new Ng(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,s){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}}const io=new P,Og=new P,Ug=new Jt;class gi{constructor(e=new P(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=io.subVectors(n,t).cross(Og.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){const n=e.delta(io),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(n).multiplyScalar(r).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Ug.getNormalMatrix(e),s=this.coplanarPoint(io).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ts=new Ts,zr=new P;class yl{constructor(e=new gi,t=new gi,n=new gi,s=new gi,r=new gi,a=new gi){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){const t=this.planes,n=e.elements,s=n[0],r=n[1],a=n[2],o=n[3],l=n[4],c=n[5],u=n[6],h=n[7],d=n[8],m=n[9],g=n[10],p=n[11],f=n[12],_=n[13],S=n[14],x=n[15];return t[0].setComponents(o-s,h-l,p-d,x-f).normalize(),t[1].setComponents(o+s,h+l,p+d,x+f).normalize(),t[2].setComponents(o+r,h+c,p+m,x+_).normalize(),t[3].setComponents(o-r,h-c,p-m,x-_).normalize(),t[4].setComponents(o-a,h-u,p-g,x-S).normalize(),t[5].setComponents(o+a,h+u,p+g,x+S).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),ts.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(ts)}intersectsSprite(e){return ts.center.set(0,0,0),ts.radius=.7071067811865476,ts.applyMatrix4(e.matrixWorld),this.intersectsSphere(ts)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(zr.x=s.normal.x>0?e.max.x:e.min.x,zr.y=s.normal.y>0?e.max.y:e.min.y,zr.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(zr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function td(){let i=null,e=!1,t=null,n=null;function s(r,a){t(r,a),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function zg(i,e){const t=e.isWebGL2,n=new WeakMap;function s(c,u){const h=c.array,d=c.usage,m=i.createBuffer();i.bindBuffer(u,m),i.bufferData(u,h,d),c.onUploadCallback();let g;if(h instanceof Float32Array)g=5126;else if(h instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)g=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=5123;else if(h instanceof Int16Array)g=5122;else if(h instanceof Uint32Array)g=5125;else if(h instanceof Int32Array)g=5124;else if(h instanceof Int8Array)g=5120;else if(h instanceof Uint8Array)g=5121;else if(h instanceof Uint8ClampedArray)g=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:m,type:g,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version}}function r(c,u,h){const d=u.array,m=u.updateRange;i.bindBuffer(h,c),m.count===-1?i.bufferSubData(h,0,d):(t?i.bufferSubData(h,m.offset*d.BYTES_PER_ELEMENT,d,m.offset,m.count):i.bufferSubData(h,m.offset*d.BYTES_PER_ELEMENT,d.subarray(m.offset,m.offset+m.count)),m.count=-1)}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u&&(i.deleteBuffer(u.buffer),n.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const d=n.get(c);(!d||d.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);h===void 0?n.set(c,s(c,u)):h.version<c.version&&(r(h.buffer,c,u),h.version=c.version)}return{get:a,remove:o,update:l}}class cr extends Wt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(s),c=o+1,u=l+1,h=e/o,d=t/l,m=[],g=[],p=[],f=[];for(let _=0;_<u;_++){const S=_*d-a;for(let x=0;x<c;x++){const b=x*h-r;g.push(b,-S,0),p.push(0,0,1),f.push(x/o),f.push(1-_/l)}}for(let _=0;_<l;_++)for(let S=0;S<o;S++){const x=S+c*_,b=S+c*(_+1),M=S+1+c*(_+1),R=S+1+c*_;m.push(x,b,R),m.push(b,M,R)}this.setIndex(m),this.setAttribute("position",new wt(g,3)),this.setAttribute("normal",new wt(p,3)),this.setAttribute("uv",new wt(f,2))}static fromJSON(e){return new cr(e.width,e.height,e.widthSegments,e.heightSegments)}}var Bg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,kg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Vg=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Hg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Gg=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Wg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,jg="vec3 transformed = vec3( position );",Xg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,qg=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
#ifdef USE_IRIDESCENCE
	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif`,$g=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Yg=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Kg=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,Zg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Jg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Qg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,e_=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,t_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,n_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,i_=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,s_=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,r_=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,a_=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,o_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,l_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,c_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,u_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,h_="gl_FragColor = linearToOutputTexel( gl_FragColor );",d_=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,f_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,p_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,m_=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,g_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,__=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,x_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,v_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,y_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,b_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,M_=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,S_=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,w_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,T_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,E_=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert
#define Material_LightProbeLOD( material )	(0)`,A_=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,C_=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,L_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,R_=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon
#define Material_LightProbeLOD( material )	(0)`,P_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,D_=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong
#define Material_LightProbeLOD( material )	(0)`,I_=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,N_=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,F_=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,O_=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,U_=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,z_=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,B_=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,k_=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,V_=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,H_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,G_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,W_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,j_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,X_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,q_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,$_=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Y_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,K_=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Z_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,J_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,Q_=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,ex=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,tx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,nx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ix=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,sx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,rx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,ax=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,ox=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,lx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,cx=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,ux=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,hx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,fx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,px=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,mx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,gx=`#if NUM_SPOT_LIGHT_COORDS > 0
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
  uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );
		bool inFrustum = all( inFrustumVec );
		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );
		bool frustumTest = all( frustumTestVec );
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,_x=`#if NUM_SPOT_LIGHT_COORDS > 0
  uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,xx=`#if defined( USE_SHADOWMAP ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_COORDS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
#endif`,vx=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,yx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,bx=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,Mx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Sx=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,wx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Tx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ex=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ax=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Cx=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,Lx=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,Rx=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,Px=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,Dx=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,Ix=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,Nx=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,Fx=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,Ox=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Ux=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,zx=`uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	gl_FragColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		gl_FragColor = vec4( mix( pow( gl_FragColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), gl_FragColor.rgb * 0.0773993808, vec3( lessThanEqual( gl_FragColor.rgb, vec3( 0.04045 ) ) ) ), gl_FragColor.w );
	#endif
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Bx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,kx=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Vx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Hx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Gx=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Wx=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,jx=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Xx=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,qx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,$x=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Yx=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Kx=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Zx=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Jx=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Qx=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,e0=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,t0=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,n0=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,i0=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,s0=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,r0=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,a0=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,o0=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,l0=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,c0=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,u0=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,h0=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,d0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,f0=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,p0=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,m0=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,g0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Ne={alphamap_fragment:Bg,alphamap_pars_fragment:kg,alphatest_fragment:Vg,alphatest_pars_fragment:Hg,aomap_fragment:Gg,aomap_pars_fragment:Wg,begin_vertex:jg,beginnormal_vertex:Xg,bsdfs:qg,iridescence_fragment:$g,bumpmap_pars_fragment:Yg,clipping_planes_fragment:Kg,clipping_planes_pars_fragment:Zg,clipping_planes_pars_vertex:Jg,clipping_planes_vertex:Qg,color_fragment:e_,color_pars_fragment:t_,color_pars_vertex:n_,color_vertex:i_,common:s_,cube_uv_reflection_fragment:r_,defaultnormal_vertex:a_,displacementmap_pars_vertex:o_,displacementmap_vertex:l_,emissivemap_fragment:c_,emissivemap_pars_fragment:u_,encodings_fragment:h_,encodings_pars_fragment:d_,envmap_fragment:f_,envmap_common_pars_fragment:p_,envmap_pars_fragment:m_,envmap_pars_vertex:g_,envmap_physical_pars_fragment:C_,envmap_vertex:__,fog_vertex:x_,fog_pars_vertex:v_,fog_fragment:y_,fog_pars_fragment:b_,gradientmap_pars_fragment:M_,lightmap_fragment:S_,lightmap_pars_fragment:w_,lights_lambert_fragment:T_,lights_lambert_pars_fragment:E_,lights_pars_begin:A_,lights_toon_fragment:L_,lights_toon_pars_fragment:R_,lights_phong_fragment:P_,lights_phong_pars_fragment:D_,lights_physical_fragment:I_,lights_physical_pars_fragment:N_,lights_fragment_begin:F_,lights_fragment_maps:O_,lights_fragment_end:U_,logdepthbuf_fragment:z_,logdepthbuf_pars_fragment:B_,logdepthbuf_pars_vertex:k_,logdepthbuf_vertex:V_,map_fragment:H_,map_pars_fragment:G_,map_particle_fragment:W_,map_particle_pars_fragment:j_,metalnessmap_fragment:X_,metalnessmap_pars_fragment:q_,morphcolor_vertex:$_,morphnormal_vertex:Y_,morphtarget_pars_vertex:K_,morphtarget_vertex:Z_,normal_fragment_begin:J_,normal_fragment_maps:Q_,normal_pars_fragment:ex,normal_pars_vertex:tx,normal_vertex:nx,normalmap_pars_fragment:ix,clearcoat_normal_fragment_begin:sx,clearcoat_normal_fragment_maps:rx,clearcoat_pars_fragment:ax,iridescence_pars_fragment:ox,output_fragment:lx,packing:cx,premultiplied_alpha_fragment:ux,project_vertex:hx,dithering_fragment:dx,dithering_pars_fragment:fx,roughnessmap_fragment:px,roughnessmap_pars_fragment:mx,shadowmap_pars_fragment:gx,shadowmap_pars_vertex:_x,shadowmap_vertex:xx,shadowmask_pars_fragment:vx,skinbase_vertex:yx,skinning_pars_vertex:bx,skinning_vertex:Mx,skinnormal_vertex:Sx,specularmap_fragment:wx,specularmap_pars_fragment:Tx,tonemapping_fragment:Ex,tonemapping_pars_fragment:Ax,transmission_fragment:Cx,transmission_pars_fragment:Lx,uv_pars_fragment:Rx,uv_pars_vertex:Px,uv_vertex:Dx,uv2_pars_fragment:Ix,uv2_pars_vertex:Nx,uv2_vertex:Fx,worldpos_vertex:Ox,background_vert:Ux,background_frag:zx,backgroundCube_vert:Bx,backgroundCube_frag:kx,cube_vert:Vx,cube_frag:Hx,depth_vert:Gx,depth_frag:Wx,distanceRGBA_vert:jx,distanceRGBA_frag:Xx,equirect_vert:qx,equirect_frag:$x,linedashed_vert:Yx,linedashed_frag:Kx,meshbasic_vert:Zx,meshbasic_frag:Jx,meshlambert_vert:Qx,meshlambert_frag:e0,meshmatcap_vert:t0,meshmatcap_frag:n0,meshnormal_vert:i0,meshnormal_frag:s0,meshphong_vert:r0,meshphong_frag:a0,meshphysical_vert:o0,meshphysical_frag:l0,meshtoon_vert:c0,meshtoon_frag:u0,points_vert:h0,points_frag:d0,shadow_vert:f0,shadow_frag:p0,sprite_vert:m0,sprite_frag:g0},pe={common:{diffuse:{value:new Ce(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new Jt},uv2Transform:{value:new Jt},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new Te(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ce(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ce(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Jt}},sprite:{diffuse:{value:new Ce(16777215)},opacity:{value:1},center:{value:new Te(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Jt}}},_n={basic:{uniforms:Lt([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.fog]),vertexShader:Ne.meshbasic_vert,fragmentShader:Ne.meshbasic_frag},lambert:{uniforms:Lt([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new Ce(0)}}]),vertexShader:Ne.meshlambert_vert,fragmentShader:Ne.meshlambert_frag},phong:{uniforms:Lt([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new Ce(0)},specular:{value:new Ce(1118481)},shininess:{value:30}}]),vertexShader:Ne.meshphong_vert,fragmentShader:Ne.meshphong_frag},standard:{uniforms:Lt([pe.common,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.roughnessmap,pe.metalnessmap,pe.fog,pe.lights,{emissive:{value:new Ce(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ne.meshphysical_vert,fragmentShader:Ne.meshphysical_frag},toon:{uniforms:Lt([pe.common,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.gradientmap,pe.fog,pe.lights,{emissive:{value:new Ce(0)}}]),vertexShader:Ne.meshtoon_vert,fragmentShader:Ne.meshtoon_frag},matcap:{uniforms:Lt([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,{matcap:{value:null}}]),vertexShader:Ne.meshmatcap_vert,fragmentShader:Ne.meshmatcap_frag},points:{uniforms:Lt([pe.points,pe.fog]),vertexShader:Ne.points_vert,fragmentShader:Ne.points_frag},dashed:{uniforms:Lt([pe.common,pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ne.linedashed_vert,fragmentShader:Ne.linedashed_frag},depth:{uniforms:Lt([pe.common,pe.displacementmap]),vertexShader:Ne.depth_vert,fragmentShader:Ne.depth_frag},normal:{uniforms:Lt([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,{opacity:{value:1}}]),vertexShader:Ne.meshnormal_vert,fragmentShader:Ne.meshnormal_frag},sprite:{uniforms:Lt([pe.sprite,pe.fog]),vertexShader:Ne.sprite_vert,fragmentShader:Ne.sprite_frag},background:{uniforms:{uvTransform:{value:new Jt},t2D:{value:null}},vertexShader:Ne.background_vert,fragmentShader:Ne.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0}},vertexShader:Ne.backgroundCube_vert,fragmentShader:Ne.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ne.cube_vert,fragmentShader:Ne.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ne.equirect_vert,fragmentShader:Ne.equirect_frag},distanceRGBA:{uniforms:Lt([pe.common,pe.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ne.distanceRGBA_vert,fragmentShader:Ne.distanceRGBA_frag},shadow:{uniforms:Lt([pe.lights,pe.fog,{color:{value:new Ce(0)},opacity:{value:1}}]),vertexShader:Ne.shadow_vert,fragmentShader:Ne.shadow_frag}};_n.physical={uniforms:Lt([_n.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new Te(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new Ce(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new Te},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new Ce(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new Ce(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Ne.meshphysical_vert,fragmentShader:Ne.meshphysical_frag};function _0(i,e,t,n,s,r,a){const o=new Ce(0);let l=r===!0?0:1,c,u,h=null,d=0,m=null;function g(f,_){let S=!1,x=_.isScene===!0?_.background:null;x&&x.isTexture&&(x=(_.backgroundBlurriness>0?t:e).get(x));const b=i.xr,M=b.getSession&&b.getSession();M&&M.environmentBlendMode==="additive"&&(x=null),x===null?p(o,l):x&&x.isColor&&(p(x,1),S=!0),(i.autoClear||S)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),x&&(x.isCubeTexture||x.mapping===_a)?(u===void 0&&(u=new xt(new Es(1,1,1),new Ot({name:"BackgroundCubeMaterial",uniforms:_s(_n.backgroundCube.uniforms),vertexShader:_n.backgroundCube.vertexShader,fragmentShader:_n.backgroundCube.fragmentShader,side:en,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(R,I,v){this.matrixWorld.copyPosition(v.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),u.material.uniforms.envMap.value=x,u.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,(h!==x||d!==x.version||m!==i.toneMapping)&&(u.material.needsUpdate=!0,h=x,d=x.version,m=i.toneMapping),u.layers.enableAll(),f.unshift(u,u.geometry,u.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new xt(new cr(2,2),new Ot({name:"BackgroundMaterial",uniforms:_s(_n.background.uniforms),vertexShader:_n.background.vertexShader,fragmentShader:_n.background.fragmentShader,side:Di,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=x,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(h!==x||d!==x.version||m!==i.toneMapping)&&(c.material.needsUpdate=!0,h=x,d=x.version,m=i.toneMapping),c.layers.enableAll(),f.unshift(c,c.geometry,c.material,0,0,null))}function p(f,_){n.buffers.color.setClear(f.r,f.g,f.b,_,a)}return{getClearColor:function(){return o},setClearColor:function(f,_=1){o.set(f),l=_,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(f){l=f,p(o,l)},render:g}}function x0(i,e,t,n){const s=i.getParameter(34921),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),a=n.isWebGL2||r!==null,o={},l=f(null);let c=l,u=!1;function h(U,Y,ie,te,G){let z=!1;if(a){const W=p(te,ie,Y);c!==W&&(c=W,m(c.object)),z=_(U,te,ie,G),z&&S(U,te,ie,G)}else{const W=Y.wireframe===!0;(c.geometry!==te.id||c.program!==ie.id||c.wireframe!==W)&&(c.geometry=te.id,c.program=ie.id,c.wireframe=W,z=!0)}G!==null&&t.update(G,34963),(z||u)&&(u=!1,v(U,Y,ie,te),G!==null&&i.bindBuffer(34963,t.get(G).buffer))}function d(){return n.isWebGL2?i.createVertexArray():r.createVertexArrayOES()}function m(U){return n.isWebGL2?i.bindVertexArray(U):r.bindVertexArrayOES(U)}function g(U){return n.isWebGL2?i.deleteVertexArray(U):r.deleteVertexArrayOES(U)}function p(U,Y,ie){const te=ie.wireframe===!0;let G=o[U.id];G===void 0&&(G={},o[U.id]=G);let z=G[Y.id];z===void 0&&(z={},G[Y.id]=z);let W=z[te];return W===void 0&&(W=f(d()),z[te]=W),W}function f(U){const Y=[],ie=[],te=[];for(let G=0;G<s;G++)Y[G]=0,ie[G]=0,te[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:Y,enabledAttributes:ie,attributeDivisors:te,object:U,attributes:{},index:null}}function _(U,Y,ie,te){const G=c.attributes,z=Y.attributes;let W=0;const ce=ie.getAttributes();for(const re in ce)if(ce[re].location>=0){const Me=G[re];let Re=z[re];if(Re===void 0&&(re==="instanceMatrix"&&U.instanceMatrix&&(Re=U.instanceMatrix),re==="instanceColor"&&U.instanceColor&&(Re=U.instanceColor)),Me===void 0||Me.attribute!==Re||Re&&Me.data!==Re.data)return!0;W++}return c.attributesNum!==W||c.index!==te}function S(U,Y,ie,te){const G={},z=Y.attributes;let W=0;const ce=ie.getAttributes();for(const re in ce)if(ce[re].location>=0){let Me=z[re];Me===void 0&&(re==="instanceMatrix"&&U.instanceMatrix&&(Me=U.instanceMatrix),re==="instanceColor"&&U.instanceColor&&(Me=U.instanceColor));const Re={};Re.attribute=Me,Me&&Me.data&&(Re.data=Me.data),G[re]=Re,W++}c.attributes=G,c.attributesNum=W,c.index=te}function x(){const U=c.newAttributes;for(let Y=0,ie=U.length;Y<ie;Y++)U[Y]=0}function b(U){M(U,0)}function M(U,Y){const ie=c.newAttributes,te=c.enabledAttributes,G=c.attributeDivisors;ie[U]=1,te[U]===0&&(i.enableVertexAttribArray(U),te[U]=1),G[U]!==Y&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](U,Y),G[U]=Y)}function R(){const U=c.newAttributes,Y=c.enabledAttributes;for(let ie=0,te=Y.length;ie<te;ie++)Y[ie]!==U[ie]&&(i.disableVertexAttribArray(ie),Y[ie]=0)}function I(U,Y,ie,te,G,z){n.isWebGL2===!0&&(ie===5124||ie===5125)?i.vertexAttribIPointer(U,Y,ie,G,z):i.vertexAttribPointer(U,Y,ie,te,G,z)}function v(U,Y,ie,te){if(n.isWebGL2===!1&&(U.isInstancedMesh||te.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;x();const G=te.attributes,z=ie.getAttributes(),W=Y.defaultAttributeValues;for(const ce in z){const re=z[ce];if(re.location>=0){let ue=G[ce];if(ue===void 0&&(ce==="instanceMatrix"&&U.instanceMatrix&&(ue=U.instanceMatrix),ce==="instanceColor"&&U.instanceColor&&(ue=U.instanceColor)),ue!==void 0){const Me=ue.normalized,Re=ue.itemSize,q=t.get(ue);if(q===void 0)continue;const He=q.buffer,Le=q.type,Ee=q.bytesPerElement;if(ue.isInterleavedBufferAttribute){const ve=ue.data,Ge=ve.stride,E=ue.offset;if(ve.isInstancedInterleavedBuffer){for(let L=0;L<re.locationSize;L++)M(re.location+L,ve.meshPerAttribute);U.isInstancedMesh!==!0&&te._maxInstanceCount===void 0&&(te._maxInstanceCount=ve.meshPerAttribute*ve.count)}else for(let L=0;L<re.locationSize;L++)b(re.location+L);i.bindBuffer(34962,He);for(let L=0;L<re.locationSize;L++)I(re.location+L,Re/re.locationSize,Le,Me,Ge*Ee,(E+Re/re.locationSize*L)*Ee)}else{if(ue.isInstancedBufferAttribute){for(let ve=0;ve<re.locationSize;ve++)M(re.location+ve,ue.meshPerAttribute);U.isInstancedMesh!==!0&&te._maxInstanceCount===void 0&&(te._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let ve=0;ve<re.locationSize;ve++)b(re.location+ve);i.bindBuffer(34962,He);for(let ve=0;ve<re.locationSize;ve++)I(re.location+ve,Re/re.locationSize,Le,Me,Re*Ee,Re/re.locationSize*ve*Ee)}}else if(W!==void 0){const Me=W[ce];if(Me!==void 0)switch(Me.length){case 2:i.vertexAttrib2fv(re.location,Me);break;case 3:i.vertexAttrib3fv(re.location,Me);break;case 4:i.vertexAttrib4fv(re.location,Me);break;default:i.vertexAttrib1fv(re.location,Me)}}}}R()}function A(){le();for(const U in o){const Y=o[U];for(const ie in Y){const te=Y[ie];for(const G in te)g(te[G].object),delete te[G];delete Y[ie]}delete o[U]}}function D(U){if(o[U.id]===void 0)return;const Y=o[U.id];for(const ie in Y){const te=Y[ie];for(const G in te)g(te[G].object),delete te[G];delete Y[ie]}delete o[U.id]}function X(U){for(const Y in o){const ie=o[Y];if(ie[U.id]===void 0)continue;const te=ie[U.id];for(const G in te)g(te[G].object),delete te[G];delete ie[U.id]}}function le(){k(),u=!0,c!==l&&(c=l,m(c.object))}function k(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:le,resetDefaultState:k,dispose:A,releaseStatesOfGeometry:D,releaseStatesOfProgram:X,initAttributes:x,enableAttribute:b,disableUnusedAttributes:R}}function v0(i,e,t,n){const s=n.isWebGL2;let r;function a(c){r=c}function o(c,u){i.drawArrays(r,c,u),t.update(u,r,1)}function l(c,u,h){if(h===0)return;let d,m;if(s)d=i,m="drawArraysInstanced";else if(d=e.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[m](r,c,u,h),t.update(u,r,h)}this.setMode=a,this.render=o,this.renderInstances=l}function y0(i,e,t){let n;function s(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const I=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(I){if(I==="highp"){if(i.getShaderPrecisionFormat(35633,36338).precision>0&&i.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";I="mediump"}return I==="mediump"&&i.getShaderPrecisionFormat(35633,36337).precision>0&&i.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&i instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&i instanceof WebGL2ComputeRenderingContext;let o=t.precision!==void 0?t.precision:"highp";const l=r(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const c=a||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,h=i.getParameter(34930),d=i.getParameter(35660),m=i.getParameter(3379),g=i.getParameter(34076),p=i.getParameter(34921),f=i.getParameter(36347),_=i.getParameter(36348),S=i.getParameter(36349),x=d>0,b=a||e.has("OES_texture_float"),M=x&&b,R=a?i.getParameter(36183):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:s,getMaxPrecision:r,precision:o,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:d,maxTextureSize:m,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:f,maxVaryings:_,maxFragmentUniforms:S,vertexTextures:x,floatFragmentTextures:b,floatVertexTextures:M,maxSamples:R}}function b0(i){const e=this;let t=null,n=0,s=!1,r=!1;const a=new gi,o=new Jt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d,m){const g=h.length!==0||d||n!==0||s;return s=d,t=u(h,m,0),n=h.length,g},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1,c()},this.setState=function(h,d,m){const g=h.clippingPlanes,p=h.clipIntersection,f=h.clipShadows,_=i.get(h);if(!s||g===null||g.length===0||r&&!f)r?u(null):c();else{const S=r?0:n,x=S*4;let b=_.clippingState||null;l.value=b,b=u(g,d,x,m);for(let M=0;M!==x;++M)b[M]=t[M];_.clippingState=b,this.numIntersection=p?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,d,m,g){const p=h!==null?h.length:0;let f=null;if(p!==0){if(f=l.value,g!==!0||f===null){const _=m+p*4,S=d.matrixWorldInverse;o.getNormalMatrix(S),(f===null||f.length<_)&&(f=new Float32Array(_));for(let x=0,b=m;x!==p;++x,b+=4)a.copy(h[x]).applyMatrix4(S,o),a.normal.toArray(f,b),f[b+3]=a.constant}l.value=f,l.needsUpdate=!0}return e.numPlanes=p,e.numIntersection=0,f}}function M0(i){let e=new WeakMap;function t(a,o){return o===Do?a.mapping=hs:o===Io&&(a.mapping=ds),a}function n(a){if(a&&a.isTexture&&a.isRenderTargetTexture===!1){const o=a.mapping;if(o===Do||o===Io)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Fg(l.height/2);return c.fromEquirectangularTexture(i,a),e.set(a,c),a.addEventListener("dispose",s),t(c.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class ur extends Qh{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,a=n+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const ss=4,Kc=[.125,.215,.35,.446,.526,.582],Si=20,so=new ur,Zc=new Ce;let ro=null;const _i=(1+Math.sqrt(5))/2,ns=1/_i,Jc=[new P(1,1,1),new P(-1,1,1),new P(1,1,-1),new P(-1,1,-1),new P(0,_i,ns),new P(0,_i,-ns),new P(ns,0,_i),new P(-ns,0,_i),new P(_i,ns,0),new P(-_i,ns,0)];class Qc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){ro=this._renderer.getRenderTarget(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=nu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=tu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ro),e.scissorTest=!1,Br(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===hs||e.mapping===ds?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ro=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Ft,minFilter:Ft,generateMipmaps:!1,type:ps,format:Zt,encoding:Ni,depthBuffer:!1},s=eu(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=eu(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=S0(r)),this._blurMaterial=w0(r,e,t)}return s}_compileMaterial(e){const t=new xt(this._lodPlanes[0],e);this._renderer.compile(t,so)}_sceneToCubeUV(e,t,n,s){const o=new Pt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(Zc),u.toneMapping=zn,u.autoClear=!1;const m=new vn({name:"PMREM.Background",side:en,depthWrite:!1,depthTest:!1}),g=new xt(new Es,m);let p=!1;const f=e.background;f?f.isColor&&(m.color.copy(f),e.background=null,p=!0):(m.color.copy(Zc),p=!0);for(let _=0;_<6;_++){const S=_%3;S===0?(o.up.set(0,l[_],0),o.lookAt(c[_],0,0)):S===1?(o.up.set(0,0,l[_]),o.lookAt(0,c[_],0)):(o.up.set(0,l[_],0),o.lookAt(0,0,c[_]));const x=this._cubeSize;Br(s,S*x,_>2?x:0,x,x),u.setRenderTarget(s),p&&u.render(g,o),u.render(e,o)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=d,u.autoClear=h,e.background=f}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===hs||e.mapping===ds;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=nu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=tu());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new xt(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;const l=this._cubeSize;Br(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,so)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){const r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Jc[(s-1)%Jc.length];this._blur(e,s-1,s,r,a)}t.autoClear=n}_blur(e,t,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,s,"latitudinal",r),this._halfBlur(a,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new xt(this._lodPlanes[s],c),d=c.uniforms,m=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*Si-1),p=r/g,f=isFinite(r)?1+Math.floor(u*p):Si;f>Si&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${f} samples when the maximum is set to ${Si}`);const _=[];let S=0;for(let I=0;I<Si;++I){const v=I/p,A=Math.exp(-v*v/2);_.push(A),I===0?S+=A:I<f&&(S+=2*A)}for(let I=0;I<_.length;I++)_[I]=_[I]/S;d.envMap.value=e.texture,d.samples.value=f,d.weights.value=_,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:x}=this;d.dTheta.value=g,d.mipInt.value=x-n;const b=this._sizeLods[s],M=3*b*(s>x-ss?s-x+ss:0),R=4*(this._cubeSize-b);Br(t,M,R,3*b,2*b),l.setRenderTarget(t),l.render(h,so)}}function S0(i){const e=[],t=[],n=[];let s=i;const r=i-ss+1+Kc.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);t.push(o);let l=1/o;a>i-ss?l=Kc[a-i+ss-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),u=-c,h=1+c,d=[u,u,h,u,h,h,u,u,h,h,u,h],m=6,g=6,p=3,f=2,_=1,S=new Float32Array(p*g*m),x=new Float32Array(f*g*m),b=new Float32Array(_*g*m);for(let R=0;R<m;R++){const I=R%3*2/3-1,v=R>2?0:-1,A=[I,v,0,I+2/3,v,0,I+2/3,v+1,0,I,v,0,I+2/3,v+1,0,I,v+1,0];S.set(A,p*g*R),x.set(d,f*g*R);const D=[R,R,R,R,R,R];b.set(D,_*g*R)}const M=new Wt;M.setAttribute("position",new Ut(S,p)),M.setAttribute("uv",new Ut(x,f)),M.setAttribute("faceIndex",new Ut(b,_)),e.push(M),s>ss&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function eu(i,e,t){const n=new Vt(i,e,t);return n.texture.mapping=_a,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Br(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function w0(i,e,t){const n=new Float32Array(Si),s=new P(0,1,0);return new Ot({name:"SphericalGaussianBlur",defines:{n:Si,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:bl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:dt,depthTest:!1,depthWrite:!1})}function tu(){return new Ot({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:bl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:dt,depthTest:!1,depthWrite:!1})}function nu(){return new Ot({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:bl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:dt,depthTest:!1,depthWrite:!1})}function bl(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function T0(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===Do||l===Io,u=l===hs||l===ds;if(c||u)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let h=e.get(o);return t===null&&(t=new Qc(i)),h=c?t.fromEquirectangular(o,h):t.fromCubemap(o,h),e.set(o,h),h.texture}else{if(e.has(o))return e.get(o).texture;{const h=o.image;if(c&&h&&h.height>0||u&&h&&s(h)){t===null&&(t=new Qc(i));const d=c?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,d),o.addEventListener("dispose",r),d.texture}else return null}}}return o}function s(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function E0(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const s=t(n);return s===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function A0(i,e,t,n){const s={},r=new WeakMap;function a(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",a),delete s[d.id];const m=r.get(d);m&&(e.remove(m),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(h,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,t.memory.geometries++),d}function l(h){const d=h.attributes;for(const g in d)e.update(d[g],34962);const m=h.morphAttributes;for(const g in m){const p=m[g];for(let f=0,_=p.length;f<_;f++)e.update(p[f],34962)}}function c(h){const d=[],m=h.index,g=h.attributes.position;let p=0;if(m!==null){const S=m.array;p=m.version;for(let x=0,b=S.length;x<b;x+=3){const M=S[x+0],R=S[x+1],I=S[x+2];d.push(M,R,R,I,I,M)}}else{const S=g.array;p=g.version;for(let x=0,b=S.length/3-1;x<b;x+=3){const M=x+0,R=x+1,I=x+2;d.push(M,R,R,I,I,M)}}const f=new(jh(d)?Jh:Zh)(d,1);f.version=p;const _=r.get(h);_&&e.remove(_),r.set(h,f)}function u(h){const d=r.get(h);if(d){const m=h.index;m!==null&&d.version<m.version&&c(h)}else c(h);return r.get(h)}return{get:o,update:l,getWireframeAttribute:u}}function C0(i,e,t,n){const s=n.isWebGL2;let r;function a(d){r=d}let o,l;function c(d){o=d.type,l=d.bytesPerElement}function u(d,m){i.drawElements(r,m,o,d*l),t.update(m,r,1)}function h(d,m,g){if(g===0)return;let p,f;if(s)p=i,f="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),f="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[f](r,m,o,d*l,g),t.update(m,r,g)}this.setMode=a,this.setIndex=c,this.render=u,this.renderInstances=h}function L0(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case 4:t.triangles+=o*(r/3);break;case 1:t.lines+=o*(r/2);break;case 3:t.lines+=o*(r-1);break;case 2:t.lines+=o*r;break;case 0:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function R0(i,e){return i[0]-e[0]}function P0(i,e){return Math.abs(e[1])-Math.abs(i[1])}function D0(i,e,t){const n={},s=new Float32Array(8),r=new WeakMap,a=new tt,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,u,h,d){const m=c.morphTargetInfluences;if(e.isWebGL2===!0){const p=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,f=p!==void 0?p.length:0;let _=r.get(u);if(_===void 0||_.count!==f){let ie=function(){U.dispose(),r.delete(u),u.removeEventListener("dispose",ie)};var g=ie;_!==void 0&&_.texture.dispose();const b=u.morphAttributes.position!==void 0,M=u.morphAttributes.normal!==void 0,R=u.morphAttributes.color!==void 0,I=u.morphAttributes.position||[],v=u.morphAttributes.normal||[],A=u.morphAttributes.color||[];let D=0;b===!0&&(D=1),M===!0&&(D=2),R===!0&&(D=3);let X=u.attributes.position.count*D,le=1;X>e.maxTextureSize&&(le=Math.ceil(X/e.maxTextureSize),X=e.maxTextureSize);const k=new Float32Array(X*le*4*f),U=new Yh(k,X,le,f);U.type=ti,U.needsUpdate=!0;const Y=D*4;for(let te=0;te<f;te++){const G=I[te],z=v[te],W=A[te],ce=X*le*4*te;for(let re=0;re<G.count;re++){const ue=re*Y;b===!0&&(a.fromBufferAttribute(G,re),k[ce+ue+0]=a.x,k[ce+ue+1]=a.y,k[ce+ue+2]=a.z,k[ce+ue+3]=0),M===!0&&(a.fromBufferAttribute(z,re),k[ce+ue+4]=a.x,k[ce+ue+5]=a.y,k[ce+ue+6]=a.z,k[ce+ue+7]=0),R===!0&&(a.fromBufferAttribute(W,re),k[ce+ue+8]=a.x,k[ce+ue+9]=a.y,k[ce+ue+10]=a.z,k[ce+ue+11]=W.itemSize===4?a.w:1)}}_={count:f,texture:U,size:new Te(X,le)},r.set(u,_),u.addEventListener("dispose",ie)}let S=0;for(let b=0;b<m.length;b++)S+=m[b];const x=u.morphTargetsRelative?1:1-S;d.getUniforms().setValue(i,"morphTargetBaseInfluence",x),d.getUniforms().setValue(i,"morphTargetInfluences",m),d.getUniforms().setValue(i,"morphTargetsTexture",_.texture,t),d.getUniforms().setValue(i,"morphTargetsTextureSize",_.size)}else{const p=m===void 0?0:m.length;let f=n[u.id];if(f===void 0||f.length!==p){f=[];for(let M=0;M<p;M++)f[M]=[M,0];n[u.id]=f}for(let M=0;M<p;M++){const R=f[M];R[0]=M,R[1]=m[M]}f.sort(P0);for(let M=0;M<8;M++)M<p&&f[M][1]?(o[M][0]=f[M][0],o[M][1]=f[M][1]):(o[M][0]=Number.MAX_SAFE_INTEGER,o[M][1]=0);o.sort(R0);const _=u.morphAttributes.position,S=u.morphAttributes.normal;let x=0;for(let M=0;M<8;M++){const R=o[M],I=R[0],v=R[1];I!==Number.MAX_SAFE_INTEGER&&v?(_&&u.getAttribute("morphTarget"+M)!==_[I]&&u.setAttribute("morphTarget"+M,_[I]),S&&u.getAttribute("morphNormal"+M)!==S[I]&&u.setAttribute("morphNormal"+M,S[I]),s[M]=v,x+=v):(_&&u.hasAttribute("morphTarget"+M)===!0&&u.deleteAttribute("morphTarget"+M),S&&u.hasAttribute("morphNormal"+M)===!0&&u.deleteAttribute("morphNormal"+M),s[M]=0)}const b=u.morphTargetsRelative?1:1-x;d.getUniforms().setValue(i,"morphTargetBaseInfluence",b),d.getUniforms().setValue(i,"morphTargetInfluences",s)}}return{update:l}}function I0(i,e,t,n){let s=new WeakMap;function r(l){const c=n.render.frame,u=l.geometry,h=e.get(l,u);return s.get(h)!==c&&(e.update(h),s.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),t.update(l.instanceMatrix,34962),l.instanceColor!==null&&t.update(l.instanceColor,34962)),h}function a(){s=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}const nd=new It,id=new Yh,sd=new yg,rd=new ed,iu=[],su=[],ru=new Float32Array(16),au=new Float32Array(9),ou=new Float32Array(4);function As(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=iu[s];if(r===void 0&&(r=new Float32Array(s),iu[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function ft(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function pt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function xa(i,e){let t=su[e];t===void 0&&(t=new Int32Array(e),su[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function N0(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function F0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ft(t,e))return;i.uniform2fv(this.addr,e),pt(t,e)}}function O0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(ft(t,e))return;i.uniform3fv(this.addr,e),pt(t,e)}}function U0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ft(t,e))return;i.uniform4fv(this.addr,e),pt(t,e)}}function z0(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(ft(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),pt(t,e)}else{if(ft(t,n))return;ou.set(n),i.uniformMatrix2fv(this.addr,!1,ou),pt(t,n)}}function B0(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(ft(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),pt(t,e)}else{if(ft(t,n))return;au.set(n),i.uniformMatrix3fv(this.addr,!1,au),pt(t,n)}}function k0(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(ft(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),pt(t,e)}else{if(ft(t,n))return;ru.set(n),i.uniformMatrix4fv(this.addr,!1,ru),pt(t,n)}}function V0(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function H0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ft(t,e))return;i.uniform2iv(this.addr,e),pt(t,e)}}function G0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ft(t,e))return;i.uniform3iv(this.addr,e),pt(t,e)}}function W0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ft(t,e))return;i.uniform4iv(this.addr,e),pt(t,e)}}function j0(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function X0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ft(t,e))return;i.uniform2uiv(this.addr,e),pt(t,e)}}function q0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ft(t,e))return;i.uniform3uiv(this.addr,e),pt(t,e)}}function $0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ft(t,e))return;i.uniform4uiv(this.addr,e),pt(t,e)}}function Y0(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2D(e||nd,s)}function K0(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||sd,s)}function Z0(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||rd,s)}function J0(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||id,s)}function Q0(i){switch(i){case 5126:return N0;case 35664:return F0;case 35665:return O0;case 35666:return U0;case 35674:return z0;case 35675:return B0;case 35676:return k0;case 5124:case 35670:return V0;case 35667:case 35671:return H0;case 35668:case 35672:return G0;case 35669:case 35673:return W0;case 5125:return j0;case 36294:return X0;case 36295:return q0;case 36296:return $0;case 35678:case 36198:case 36298:case 36306:case 35682:return Y0;case 35679:case 36299:case 36307:return K0;case 35680:case 36300:case 36308:case 36293:return Z0;case 36289:case 36303:case 36311:case 36292:return J0}}function ev(i,e){i.uniform1fv(this.addr,e)}function tv(i,e){const t=As(e,this.size,2);i.uniform2fv(this.addr,t)}function nv(i,e){const t=As(e,this.size,3);i.uniform3fv(this.addr,t)}function iv(i,e){const t=As(e,this.size,4);i.uniform4fv(this.addr,t)}function sv(i,e){const t=As(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function rv(i,e){const t=As(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function av(i,e){const t=As(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function ov(i,e){i.uniform1iv(this.addr,e)}function lv(i,e){i.uniform2iv(this.addr,e)}function cv(i,e){i.uniform3iv(this.addr,e)}function uv(i,e){i.uniform4iv(this.addr,e)}function hv(i,e){i.uniform1uiv(this.addr,e)}function dv(i,e){i.uniform2uiv(this.addr,e)}function fv(i,e){i.uniform3uiv(this.addr,e)}function pv(i,e){i.uniform4uiv(this.addr,e)}function mv(i,e,t){const n=this.cache,s=e.length,r=xa(t,s);ft(n,r)||(i.uniform1iv(this.addr,r),pt(n,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||nd,r[a])}function gv(i,e,t){const n=this.cache,s=e.length,r=xa(t,s);ft(n,r)||(i.uniform1iv(this.addr,r),pt(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||sd,r[a])}function _v(i,e,t){const n=this.cache,s=e.length,r=xa(t,s);ft(n,r)||(i.uniform1iv(this.addr,r),pt(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||rd,r[a])}function xv(i,e,t){const n=this.cache,s=e.length,r=xa(t,s);ft(n,r)||(i.uniform1iv(this.addr,r),pt(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||id,r[a])}function vv(i){switch(i){case 5126:return ev;case 35664:return tv;case 35665:return nv;case 35666:return iv;case 35674:return sv;case 35675:return rv;case 35676:return av;case 5124:case 35670:return ov;case 35667:case 35671:return lv;case 35668:case 35672:return cv;case 35669:case 35673:return uv;case 5125:return hv;case 36294:return dv;case 36295:return fv;case 36296:return pv;case 35678:case 36198:case 36298:case 36306:case 35682:return mv;case 35679:case 36299:case 36307:return gv;case 35680:case 36300:case 36308:case 36293:return _v;case 36289:case 36303:case 36311:case 36292:return xv}}class yv{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=Q0(t.type)}}class bv{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=vv(t.type)}}class Mv{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(e,t[o.id],n)}}}const ao=/(\w+)(\])?(\[|\.)?/g;function lu(i,e){i.seq.push(e),i.map[e.id]=e}function Sv(i,e,t){const n=i.name,s=n.length;for(ao.lastIndex=0;;){const r=ao.exec(n),a=ao.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){lu(t,c===void 0?new yv(o,i,e):new bv(o,i,e));break}else{let h=t.map[o];h===void 0&&(h=new Mv(o),lu(t,h)),t=h}}}class Jr{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,35718);for(let s=0;s<n;++s){const r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);Sv(r,a,this)}}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){const o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const a=e[s];a.id in t&&n.push(a)}return n}}function cu(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}let wv=0;function Tv(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function Ev(i){switch(i){case Ni:return["Linear","( value )"];case Ye:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",i),["Linear","( value )"]}}function uu(i,e,t){const n=i.getShaderParameter(e,35713),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const a=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+Tv(i.getShaderSource(e),a)}else return s}function Av(i,e){const t=Ev(e);return"vec4 "+i+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function Cv(i,e){let t;switch(e){case kh:t="Linear";break;case Nm:t="Reinhard";break;case Fm:t="OptimizedCineon";break;case Om:t="ACESFilmic";break;case Um:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Lv(i){return[i.extensionDerivatives||!!i.envMapCubeUVHeight||i.bumpMap||i.tangentSpaceNormalMap||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Hs).join(`
`)}function Rv(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Pv(i,e){const t={},n=i.getProgramParameter(e,35721);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),a=r.name;let o=1;r.type===35674&&(o=2),r.type===35675&&(o=3),r.type===35676&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function Hs(i){return i!==""}function hu(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function du(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Dv=/^[ \t]*#include +<([\w\d./]+)>/gm;function Bo(i){return i.replace(Dv,Iv)}function Iv(i,e){const t=Ne[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return Bo(t)}const Nv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function fu(i){return i.replace(Nv,Fv)}function Fv(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function pu(i){let e="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Ov(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Bh?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===dm?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Vs&&(e="SHADOWMAP_TYPE_VSM"),e}function Uv(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case hs:case ds:e="ENVMAP_TYPE_CUBE";break;case _a:e="ENVMAP_TYPE_CUBE_UV";break}return e}function zv(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case ds:e="ENVMAP_MODE_REFRACTION";break}return e}function Bv(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case gl:e="ENVMAP_BLENDING_MULTIPLY";break;case Dm:e="ENVMAP_BLENDING_MIX";break;case Im:e="ENVMAP_BLENDING_ADD";break}return e}function kv(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Vv(i,e,t,n){const s=i.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=Ov(t),c=Uv(t),u=zv(t),h=Bv(t),d=kv(t),m=t.isWebGL2?"":Lv(t),g=Rv(r),p=s.createProgram();let f,_,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(f=[g].filter(Hs).join(`
`),f.length>0&&(f+=`
`),_=[m,g].filter(Hs).join(`
`),_.length>0&&(_+=`
`)):(f=[pu(t),"#define SHADER_NAME "+t.shaderName,g,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Hs).join(`
`),_=[m,pu(t),"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==zn?"#define TONE_MAPPING":"",t.toneMapping!==zn?Ne.tonemapping_pars_fragment:"",t.toneMapping!==zn?Cv("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ne.encodings_pars_fragment,Av("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Hs).join(`
`)),a=Bo(a),a=hu(a,t),a=du(a,t),o=Bo(o),o=hu(o,t),o=du(o,t),a=fu(a),o=fu(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,f=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,_=["#define varying in",t.glslVersion===zc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===zc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const x=S+f+a,b=S+_+o,M=cu(s,35633,x),R=cu(s,35632,b);if(s.attachShader(p,M),s.attachShader(p,R),t.index0AttributeName!==void 0?s.bindAttribLocation(p,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(p,0,"position"),s.linkProgram(p),i.debug.checkShaderErrors){const A=s.getProgramInfoLog(p).trim(),D=s.getShaderInfoLog(M).trim(),X=s.getShaderInfoLog(R).trim();let le=!0,k=!0;if(s.getProgramParameter(p,35714)===!1){le=!1;const U=uu(s,M,"vertex"),Y=uu(s,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(p,35715)+`

Program Info Log: `+A+`
`+U+`
`+Y)}else A!==""?console.warn("THREE.WebGLProgram: Program Info Log:",A):(D===""||X==="")&&(k=!1);k&&(this.diagnostics={runnable:le,programLog:A,vertexShader:{log:D,prefix:f},fragmentShader:{log:X,prefix:_}})}s.deleteShader(M),s.deleteShader(R);let I;this.getUniforms=function(){return I===void 0&&(I=new Jr(s,p)),I};let v;return this.getAttributes=function(){return v===void 0&&(v=Pv(s,p)),v},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(p),this.program=void 0},this.name=t.shaderName,this.id=wv++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=M,this.fragmentShader=R,this}let Hv=0;class Gv{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Wv(e),t.set(e,n)),n}}class Wv{constructor(e){this.id=Hv++,this.code=e,this.usedTimes=0}}function jv(i,e,t,n,s,r,a){const o=new Kh,l=new Gv,c=[],u=s.isWebGL2,h=s.logarithmicDepthBuffer,d=s.vertexTextures;let m=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(v,A,D,X,le){const k=X.fog,U=le.geometry,Y=v.isMeshStandardMaterial?X.environment:null,ie=(v.isMeshStandardMaterial?t:e).get(v.envMap||Y),te=!!ie&&ie.mapping===_a?ie.image.height:null,G=g[v.type];v.precision!==null&&(m=s.getMaxPrecision(v.precision),m!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",m,"instead."));const z=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,W=z!==void 0?z.length:0;let ce=0;U.morphAttributes.position!==void 0&&(ce=1),U.morphAttributes.normal!==void 0&&(ce=2),U.morphAttributes.color!==void 0&&(ce=3);let re,ue,Me,Re;if(G){const Ge=_n[G];re=Ge.vertexShader,ue=Ge.fragmentShader}else re=v.vertexShader,ue=v.fragmentShader,l.update(v),Me=l.getVertexShaderID(v),Re=l.getFragmentShaderID(v);const q=i.getRenderTarget(),He=v.alphaTest>0,Le=v.clearcoat>0,Ee=v.iridescence>0;return{isWebGL2:u,shaderID:G,shaderName:v.type,vertexShader:re,fragmentShader:ue,defines:v.defines,customVertexShaderID:Me,customFragmentShaderID:Re,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:m,instancing:le.isInstancedMesh===!0,instancingColor:le.isInstancedMesh===!0&&le.instanceColor!==null,supportsVertexTextures:d,outputEncoding:q===null?i.outputEncoding:q.isXRRenderTarget===!0?q.texture.encoding:Ni,map:!!v.map,matcap:!!v.matcap,envMap:!!ie,envMapMode:ie&&ie.mapping,envMapCubeUVHeight:te,lightMap:!!v.lightMap,aoMap:!!v.aoMap,emissiveMap:!!v.emissiveMap,bumpMap:!!v.bumpMap,normalMap:!!v.normalMap,objectSpaceNormalMap:v.normalMapType===ig,tangentSpaceNormalMap:v.normalMapType===Ss,decodeVideoTexture:!!v.map&&v.map.isVideoTexture===!0&&v.map.encoding===Ye,clearcoat:Le,clearcoatMap:Le&&!!v.clearcoatMap,clearcoatRoughnessMap:Le&&!!v.clearcoatRoughnessMap,clearcoatNormalMap:Le&&!!v.clearcoatNormalMap,iridescence:Ee,iridescenceMap:Ee&&!!v.iridescenceMap,iridescenceThicknessMap:Ee&&!!v.iridescenceThicknessMap,displacementMap:!!v.displacementMap,roughnessMap:!!v.roughnessMap,metalnessMap:!!v.metalnessMap,specularMap:!!v.specularMap,specularIntensityMap:!!v.specularIntensityMap,specularColorMap:!!v.specularColorMap,opaque:v.transparent===!1&&v.blending===Un,alphaMap:!!v.alphaMap,alphaTest:He,gradientMap:!!v.gradientMap,sheen:v.sheen>0,sheenColorMap:!!v.sheenColorMap,sheenRoughnessMap:!!v.sheenRoughnessMap,transmission:v.transmission>0,transmissionMap:!!v.transmissionMap,thicknessMap:!!v.thicknessMap,combine:v.combine,vertexTangents:!!v.normalMap&&!!U.attributes.tangent,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,vertexUvs:!!v.map||!!v.bumpMap||!!v.normalMap||!!v.specularMap||!!v.alphaMap||!!v.emissiveMap||!!v.roughnessMap||!!v.metalnessMap||!!v.clearcoatMap||!!v.clearcoatRoughnessMap||!!v.clearcoatNormalMap||!!v.iridescenceMap||!!v.iridescenceThicknessMap||!!v.displacementMap||!!v.transmissionMap||!!v.thicknessMap||!!v.specularIntensityMap||!!v.specularColorMap||!!v.sheenColorMap||!!v.sheenRoughnessMap,uvsVertexOnly:!(!!v.map||!!v.bumpMap||!!v.normalMap||!!v.specularMap||!!v.alphaMap||!!v.emissiveMap||!!v.roughnessMap||!!v.metalnessMap||!!v.clearcoatNormalMap||!!v.iridescenceMap||!!v.iridescenceThicknessMap||v.transmission>0||!!v.transmissionMap||!!v.thicknessMap||!!v.specularIntensityMap||!!v.specularColorMap||v.sheen>0||!!v.sheenColorMap||!!v.sheenRoughnessMap)&&!!v.displacementMap,fog:!!k,useFog:v.fog===!0,fogExp2:k&&k.isFogExp2,flatShading:!!v.flatShading,sizeAttenuation:v.sizeAttenuation,logarithmicDepthBuffer:h,skinning:le.isSkinnedMesh===!0,morphTargets:U.morphAttributes.position!==void 0,morphNormals:U.morphAttributes.normal!==void 0,morphColors:U.morphAttributes.color!==void 0,morphTargetsCount:W,morphTextureStride:ce,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:v.dithering,shadowMapEnabled:i.shadowMap.enabled&&D.length>0,shadowMapType:i.shadowMap.type,toneMapping:v.toneMapped?i.toneMapping:zn,physicallyCorrectLights:i.physicallyCorrectLights,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Nn,flipSided:v.side===en,useDepthPacking:!!v.depthPacking,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionDerivatives:v.extensions&&v.extensions.derivatives,extensionFragDepth:v.extensions&&v.extensions.fragDepth,extensionDrawBuffers:v.extensions&&v.extensions.drawBuffers,extensionShaderTextureLOD:v.extensions&&v.extensions.shaderTextureLOD,rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),customProgramCacheKey:v.customProgramCacheKey()}}function f(v){const A=[];if(v.shaderID?A.push(v.shaderID):(A.push(v.customVertexShaderID),A.push(v.customFragmentShaderID)),v.defines!==void 0)for(const D in v.defines)A.push(D),A.push(v.defines[D]);return v.isRawShaderMaterial===!1&&(_(A,v),S(A,v),A.push(i.outputEncoding)),A.push(v.customProgramCacheKey),A.join()}function _(v,A){v.push(A.precision),v.push(A.outputEncoding),v.push(A.envMapMode),v.push(A.envMapCubeUVHeight),v.push(A.combine),v.push(A.vertexUvs),v.push(A.fogExp2),v.push(A.sizeAttenuation),v.push(A.morphTargetsCount),v.push(A.morphAttributeCount),v.push(A.numDirLights),v.push(A.numPointLights),v.push(A.numSpotLights),v.push(A.numSpotLightMaps),v.push(A.numHemiLights),v.push(A.numRectAreaLights),v.push(A.numDirLightShadows),v.push(A.numPointLightShadows),v.push(A.numSpotLightShadows),v.push(A.numSpotLightShadowsWithMaps),v.push(A.shadowMapType),v.push(A.toneMapping),v.push(A.numClippingPlanes),v.push(A.numClipIntersection),v.push(A.depthPacking)}function S(v,A){o.disableAll(),A.isWebGL2&&o.enable(0),A.supportsVertexTextures&&o.enable(1),A.instancing&&o.enable(2),A.instancingColor&&o.enable(3),A.map&&o.enable(4),A.matcap&&o.enable(5),A.envMap&&o.enable(6),A.lightMap&&o.enable(7),A.aoMap&&o.enable(8),A.emissiveMap&&o.enable(9),A.bumpMap&&o.enable(10),A.normalMap&&o.enable(11),A.objectSpaceNormalMap&&o.enable(12),A.tangentSpaceNormalMap&&o.enable(13),A.clearcoat&&o.enable(14),A.clearcoatMap&&o.enable(15),A.clearcoatRoughnessMap&&o.enable(16),A.clearcoatNormalMap&&o.enable(17),A.iridescence&&o.enable(18),A.iridescenceMap&&o.enable(19),A.iridescenceThicknessMap&&o.enable(20),A.displacementMap&&o.enable(21),A.specularMap&&o.enable(22),A.roughnessMap&&o.enable(23),A.metalnessMap&&o.enable(24),A.gradientMap&&o.enable(25),A.alphaMap&&o.enable(26),A.alphaTest&&o.enable(27),A.vertexColors&&o.enable(28),A.vertexAlphas&&o.enable(29),A.vertexUvs&&o.enable(30),A.vertexTangents&&o.enable(31),A.uvsVertexOnly&&o.enable(32),v.push(o.mask),o.disableAll(),A.fog&&o.enable(0),A.useFog&&o.enable(1),A.flatShading&&o.enable(2),A.logarithmicDepthBuffer&&o.enable(3),A.skinning&&o.enable(4),A.morphTargets&&o.enable(5),A.morphNormals&&o.enable(6),A.morphColors&&o.enable(7),A.premultipliedAlpha&&o.enable(8),A.shadowMapEnabled&&o.enable(9),A.physicallyCorrectLights&&o.enable(10),A.doubleSided&&o.enable(11),A.flipSided&&o.enable(12),A.useDepthPacking&&o.enable(13),A.dithering&&o.enable(14),A.specularIntensityMap&&o.enable(15),A.specularColorMap&&o.enable(16),A.transmission&&o.enable(17),A.transmissionMap&&o.enable(18),A.thicknessMap&&o.enable(19),A.sheen&&o.enable(20),A.sheenColorMap&&o.enable(21),A.sheenRoughnessMap&&o.enable(22),A.decodeVideoTexture&&o.enable(23),A.opaque&&o.enable(24),v.push(o.mask)}function x(v){const A=g[v.type];let D;if(A){const X=_n[A];D=Mi.clone(X.uniforms)}else D=v.uniforms;return D}function b(v,A){let D;for(let X=0,le=c.length;X<le;X++){const k=c[X];if(k.cacheKey===A){D=k,++D.usedTimes;break}}return D===void 0&&(D=new Vv(i,A,v,r),c.push(D)),D}function M(v){if(--v.usedTimes===0){const A=c.indexOf(v);c[A]=c[c.length-1],c.pop(),v.destroy()}}function R(v){l.remove(v)}function I(){l.dispose()}return{getParameters:p,getProgramCacheKey:f,getUniforms:x,acquireProgram:b,releaseProgram:M,releaseShaderCache:R,programs:c,dispose:I}}function Xv(){let i=new WeakMap;function e(r){let a=i.get(r);return a===void 0&&(a={},i.set(r,a)),a}function t(r){i.delete(r)}function n(r,a,o){i.get(r)[a]=o}function s(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:s}}function qv(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function mu(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function gu(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(h,d,m,g,p,f){let _=i[e];return _===void 0?(_={id:h.id,object:h,geometry:d,material:m,groupOrder:g,renderOrder:h.renderOrder,z:p,group:f},i[e]=_):(_.id=h.id,_.object=h,_.geometry=d,_.material=m,_.groupOrder=g,_.renderOrder=h.renderOrder,_.z=p,_.group=f),e++,_}function o(h,d,m,g,p,f){const _=a(h,d,m,g,p,f);m.transmission>0?n.push(_):m.transparent===!0?s.push(_):t.push(_)}function l(h,d,m,g,p,f){const _=a(h,d,m,g,p,f);m.transmission>0?n.unshift(_):m.transparent===!0?s.unshift(_):t.unshift(_)}function c(h,d){t.length>1&&t.sort(h||qv),n.length>1&&n.sort(d||mu),s.length>1&&s.sort(d||mu)}function u(){for(let h=e,d=i.length;h<d;h++){const m=i[h];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:u,sort:c}}function $v(){let i=new WeakMap;function e(n,s){const r=i.get(n);let a;return r===void 0?(a=new gu,i.set(n,[a])):s>=r.length?(a=new gu,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function Yv(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new P,color:new Ce};break;case"SpotLight":t={position:new P,direction:new P,color:new Ce,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new P,color:new Ce,distance:0,decay:0};break;case"HemisphereLight":t={direction:new P,skyColor:new Ce,groundColor:new Ce};break;case"RectAreaLight":t={color:new Ce,position:new P,halfWidth:new P,halfHeight:new P};break}return i[e.id]=t,t}}}function Kv(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Te};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Te};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Te,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let Zv=0;function Jv(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Qv(i,e){const t=new Yv,n=Kv(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let u=0;u<9;u++)s.probe.push(new P);const r=new P,a=new ze,o=new ze;function l(u,h){let d=0,m=0,g=0;for(let X=0;X<9;X++)s.probe[X].set(0,0,0);let p=0,f=0,_=0,S=0,x=0,b=0,M=0,R=0,I=0,v=0;u.sort(Jv);const A=h!==!0?Math.PI:1;for(let X=0,le=u.length;X<le;X++){const k=u[X],U=k.color,Y=k.intensity,ie=k.distance,te=k.shadow&&k.shadow.map?k.shadow.map.texture:null;if(k.isAmbientLight)d+=U.r*Y*A,m+=U.g*Y*A,g+=U.b*Y*A;else if(k.isLightProbe)for(let G=0;G<9;G++)s.probe[G].addScaledVector(k.sh.coefficients[G],Y);else if(k.isDirectionalLight){const G=t.get(k);if(G.color.copy(k.color).multiplyScalar(k.intensity*A),k.castShadow){const z=k.shadow,W=n.get(k);W.shadowBias=z.bias,W.shadowNormalBias=z.normalBias,W.shadowRadius=z.radius,W.shadowMapSize=z.mapSize,s.directionalShadow[p]=W,s.directionalShadowMap[p]=te,s.directionalShadowMatrix[p]=k.shadow.matrix,b++}s.directional[p]=G,p++}else if(k.isSpotLight){const G=t.get(k);G.position.setFromMatrixPosition(k.matrixWorld),G.color.copy(U).multiplyScalar(Y*A),G.distance=ie,G.coneCos=Math.cos(k.angle),G.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),G.decay=k.decay,s.spot[_]=G;const z=k.shadow;if(k.map&&(s.spotLightMap[I]=k.map,I++,z.updateMatrices(k),k.castShadow&&v++),s.spotLightMatrix[_]=z.matrix,k.castShadow){const W=n.get(k);W.shadowBias=z.bias,W.shadowNormalBias=z.normalBias,W.shadowRadius=z.radius,W.shadowMapSize=z.mapSize,s.spotShadow[_]=W,s.spotShadowMap[_]=te,R++}_++}else if(k.isRectAreaLight){const G=t.get(k);G.color.copy(U).multiplyScalar(Y),G.halfWidth.set(k.width*.5,0,0),G.halfHeight.set(0,k.height*.5,0),s.rectArea[S]=G,S++}else if(k.isPointLight){const G=t.get(k);if(G.color.copy(k.color).multiplyScalar(k.intensity*A),G.distance=k.distance,G.decay=k.decay,k.castShadow){const z=k.shadow,W=n.get(k);W.shadowBias=z.bias,W.shadowNormalBias=z.normalBias,W.shadowRadius=z.radius,W.shadowMapSize=z.mapSize,W.shadowCameraNear=z.camera.near,W.shadowCameraFar=z.camera.far,s.pointShadow[f]=W,s.pointShadowMap[f]=te,s.pointShadowMatrix[f]=k.shadow.matrix,M++}s.point[f]=G,f++}else if(k.isHemisphereLight){const G=t.get(k);G.skyColor.copy(k.color).multiplyScalar(Y*A),G.groundColor.copy(k.groundColor).multiplyScalar(Y*A),s.hemi[x]=G,x++}}S>0&&(e.isWebGL2||i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=pe.LTC_FLOAT_1,s.rectAreaLTC2=pe.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=pe.LTC_HALF_1,s.rectAreaLTC2=pe.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=d,s.ambient[1]=m,s.ambient[2]=g;const D=s.hash;(D.directionalLength!==p||D.pointLength!==f||D.spotLength!==_||D.rectAreaLength!==S||D.hemiLength!==x||D.numDirectionalShadows!==b||D.numPointShadows!==M||D.numSpotShadows!==R||D.numSpotMaps!==I)&&(s.directional.length=p,s.spot.length=_,s.rectArea.length=S,s.point.length=f,s.hemi.length=x,s.directionalShadow.length=b,s.directionalShadowMap.length=b,s.pointShadow.length=M,s.pointShadowMap.length=M,s.spotShadow.length=R,s.spotShadowMap.length=R,s.directionalShadowMatrix.length=b,s.pointShadowMatrix.length=M,s.spotLightMatrix.length=R+I-v,s.spotLightMap.length=I,s.numSpotLightShadowsWithMaps=v,D.directionalLength=p,D.pointLength=f,D.spotLength=_,D.rectAreaLength=S,D.hemiLength=x,D.numDirectionalShadows=b,D.numPointShadows=M,D.numSpotShadows=R,D.numSpotMaps=I,s.version=Zv++)}function c(u,h){let d=0,m=0,g=0,p=0,f=0;const _=h.matrixWorldInverse;for(let S=0,x=u.length;S<x;S++){const b=u[S];if(b.isDirectionalLight){const M=s.directional[d];M.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(_),d++}else if(b.isSpotLight){const M=s.spot[g];M.position.setFromMatrixPosition(b.matrixWorld),M.position.applyMatrix4(_),M.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(_),g++}else if(b.isRectAreaLight){const M=s.rectArea[p];M.position.setFromMatrixPosition(b.matrixWorld),M.position.applyMatrix4(_),o.identity(),a.copy(b.matrixWorld),a.premultiply(_),o.extractRotation(a),M.halfWidth.set(b.width*.5,0,0),M.halfHeight.set(0,b.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),p++}else if(b.isPointLight){const M=s.point[m];M.position.setFromMatrixPosition(b.matrixWorld),M.position.applyMatrix4(_),m++}else if(b.isHemisphereLight){const M=s.hemi[f];M.direction.setFromMatrixPosition(b.matrixWorld),M.direction.transformDirection(_),f++}}}return{setup:l,setupView:c,state:s}}function _u(i,e){const t=new Qv(i,e),n=[],s=[];function r(){n.length=0,s.length=0}function a(h){n.push(h)}function o(h){s.push(h)}function l(h){t.setup(n,h)}function c(h){t.setupView(n,h)}return{init:r,state:{lightsArray:n,shadowsArray:s,lights:t},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function ey(i,e){let t=new WeakMap;function n(r,a=0){const o=t.get(r);let l;return o===void 0?(l=new _u(i,e),t.set(r,[l])):a>=o.length?(l=new _u(i,e),o.push(l)):l=o[a],l}function s(){t=new WeakMap}return{get:n,dispose:s}}class ty extends Ht{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=tg,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class ny extends Ht{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new P,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const iy=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,sy=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function ry(i,e,t){let n=new yl;const s=new Te,r=new Te,a=new tt,o=new ty({depthPacking:ng}),l=new ny,c={},u=t.maxTextureSize,h={0:en,1:Di,2:Nn},d=new Ot({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Te},radius:{value:4}},vertexShader:iy,fragmentShader:sy}),m=d.clone();m.defines.HORIZONTAL_PASS=1;const g=new Wt;g.setAttribute("position",new Ut(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const p=new xt(g,d),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Bh,this.render=function(b,M,R){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||b.length===0)return;const I=i.getRenderTarget(),v=i.getActiveCubeFace(),A=i.getActiveMipmapLevel(),D=i.state;D.setBlending(dt),D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);for(let X=0,le=b.length;X<le;X++){const k=b[X],U=k.shadow;if(U===void 0){console.warn("THREE.WebGLShadowMap:",k,"has no shadow.");continue}if(U.autoUpdate===!1&&U.needsUpdate===!1)continue;s.copy(U.mapSize);const Y=U.getFrameExtents();if(s.multiply(Y),r.copy(U.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/Y.x),s.x=r.x*Y.x,U.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/Y.y),s.y=r.y*Y.y,U.mapSize.y=r.y)),U.map===null){const te=this.type!==Vs?{minFilter:Ze,magFilter:Ze}:{};U.map=new Vt(s.x,s.y,te),U.map.texture.name=k.name+".shadowMap",U.camera.updateProjectionMatrix()}i.setRenderTarget(U.map),i.clear();const ie=U.getViewportCount();for(let te=0;te<ie;te++){const G=U.getViewport(te);a.set(r.x*G.x,r.y*G.y,r.x*G.z,r.y*G.w),D.viewport(a),U.updateMatrices(k,te),n=U.getFrustum(),x(M,R,U.camera,k,this.type)}U.isPointLightShadow!==!0&&this.type===Vs&&_(U,R),U.needsUpdate=!1}f.needsUpdate=!1,i.setRenderTarget(I,v,A)};function _(b,M){const R=e.update(p);d.defines.VSM_SAMPLES!==b.blurSamples&&(d.defines.VSM_SAMPLES=b.blurSamples,m.defines.VSM_SAMPLES=b.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new Vt(s.x,s.y)),d.uniforms.shadow_pass.value=b.map.texture,d.uniforms.resolution.value=b.mapSize,d.uniforms.radius.value=b.radius,i.setRenderTarget(b.mapPass),i.clear(),i.renderBufferDirect(M,null,R,d,p,null),m.uniforms.shadow_pass.value=b.mapPass.texture,m.uniforms.resolution.value=b.mapSize,m.uniforms.radius.value=b.radius,i.setRenderTarget(b.map),i.clear(),i.renderBufferDirect(M,null,R,m,p,null)}function S(b,M,R,I,v,A){let D=null;const X=R.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(X!==void 0?D=X:D=R.isPointLight===!0?l:o,i.localClippingEnabled&&M.clipShadows===!0&&Array.isArray(M.clippingPlanes)&&M.clippingPlanes.length!==0||M.displacementMap&&M.displacementScale!==0||M.alphaMap&&M.alphaTest>0){const le=D.uuid,k=M.uuid;let U=c[le];U===void 0&&(U={},c[le]=U);let Y=U[k];Y===void 0&&(Y=D.clone(),U[k]=Y),D=Y}return D.visible=M.visible,D.wireframe=M.wireframe,A===Vs?D.side=M.shadowSide!==null?M.shadowSide:M.side:D.side=M.shadowSide!==null?M.shadowSide:h[M.side],D.alphaMap=M.alphaMap,D.alphaTest=M.alphaTest,D.clipShadows=M.clipShadows,D.clippingPlanes=M.clippingPlanes,D.clipIntersection=M.clipIntersection,D.displacementMap=M.displacementMap,D.displacementScale=M.displacementScale,D.displacementBias=M.displacementBias,D.wireframeLinewidth=M.wireframeLinewidth,D.linewidth=M.linewidth,R.isPointLight===!0&&D.isMeshDistanceMaterial===!0&&(D.referencePosition.setFromMatrixPosition(R.matrixWorld),D.nearDistance=I,D.farDistance=v),D}function x(b,M,R,I,v){if(b.visible===!1)return;if(b.layers.test(M.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&v===Vs)&&(!b.frustumCulled||n.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,b.matrixWorld);const X=e.update(b),le=b.material;if(Array.isArray(le)){const k=X.groups;for(let U=0,Y=k.length;U<Y;U++){const ie=k[U],te=le[ie.materialIndex];if(te&&te.visible){const G=S(b,te,I,R.near,R.far,v);i.renderBufferDirect(R,null,X,G,b,ie)}}}else if(le.visible){const k=S(b,le,I,R.near,R.far,v);i.renderBufferDirect(R,null,X,k,b,null)}}const D=b.children;for(let X=0,le=D.length;X<le;X++)x(D[X],M,R,I,v)}}function ay(i,e,t){const n=t.isWebGL2;function s(){let N=!1;const Q=new tt;let fe=null;const be=new tt(0,0,0,0);return{setMask:function(we){fe!==we&&!N&&(i.colorMask(we,we,we,we),fe=we)},setLocked:function(we){N=we},setClear:function(we,Xe,mt,yt,oi){oi===!0&&(we*=yt,Xe*=yt,mt*=yt),Q.set(we,Xe,mt,yt),be.equals(Q)===!1&&(i.clearColor(we,Xe,mt,yt),be.copy(Q))},reset:function(){N=!1,fe=null,be.set(-1,0,0,0)}}}function r(){let N=!1,Q=null,fe=null,be=null;return{setTest:function(we){we?He(2929):Le(2929)},setMask:function(we){Q!==we&&!N&&(i.depthMask(we),Q=we)},setFunc:function(we){if(fe!==we){switch(we){case Tm:i.depthFunc(512);break;case Em:i.depthFunc(519);break;case Am:i.depthFunc(513);break;case Po:i.depthFunc(515);break;case Cm:i.depthFunc(514);break;case Lm:i.depthFunc(518);break;case Rm:i.depthFunc(516);break;case Pm:i.depthFunc(517);break;default:i.depthFunc(515)}fe=we}},setLocked:function(we){N=we},setClear:function(we){be!==we&&(i.clearDepth(we),be=we)},reset:function(){N=!1,Q=null,fe=null,be=null}}}function a(){let N=!1,Q=null,fe=null,be=null,we=null,Xe=null,mt=null,yt=null,oi=null;return{setTest:function(it){N||(it?He(2960):Le(2960))},setMask:function(it){Q!==it&&!N&&(i.stencilMask(it),Q=it)},setFunc:function(it,Sn,jt){(fe!==it||be!==Sn||we!==jt)&&(i.stencilFunc(it,Sn,jt),fe=it,be=Sn,we=jt)},setOp:function(it,Sn,jt){(Xe!==it||mt!==Sn||yt!==jt)&&(i.stencilOp(it,Sn,jt),Xe=it,mt=Sn,yt=jt)},setLocked:function(it){N=it},setClear:function(it){oi!==it&&(i.clearStencil(it),oi=it)},reset:function(){N=!1,Q=null,fe=null,be=null,we=null,Xe=null,mt=null,yt=null,oi=null}}}const o=new s,l=new r,c=new a,u=new WeakMap,h=new WeakMap;let d={},m={},g=new WeakMap,p=[],f=null,_=!1,S=null,x=null,b=null,M=null,R=null,I=null,v=null,A=!1,D=null,X=null,le=null,k=null,U=null;const Y=i.getParameter(35661);let ie=!1,te=0;const G=i.getParameter(7938);G.indexOf("WebGL")!==-1?(te=parseFloat(/^WebGL (\d)/.exec(G)[1]),ie=te>=1):G.indexOf("OpenGL ES")!==-1&&(te=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),ie=te>=2);let z=null,W={};const ce=i.getParameter(3088),re=i.getParameter(2978),ue=new tt().fromArray(ce),Me=new tt().fromArray(re);function Re(N,Q,fe){const be=new Uint8Array(4),we=i.createTexture();i.bindTexture(N,we),i.texParameteri(N,10241,9728),i.texParameteri(N,10240,9728);for(let Xe=0;Xe<fe;Xe++)i.texImage2D(Q+Xe,0,6408,1,1,0,6408,5121,be);return we}const q={};q[3553]=Re(3553,3553,1),q[34067]=Re(34067,34069,6),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),He(2929),l.setFunc(Po),$(!1),oe(lc),He(2884),H(dt);function He(N){d[N]!==!0&&(i.enable(N),d[N]=!0)}function Le(N){d[N]!==!1&&(i.disable(N),d[N]=!1)}function Ee(N,Q){return m[N]!==Q?(i.bindFramebuffer(N,Q),m[N]=Q,n&&(N===36009&&(m[36160]=Q),N===36160&&(m[36009]=Q)),!0):!1}function ve(N,Q){let fe=p,be=!1;if(N)if(fe=g.get(Q),fe===void 0&&(fe=[],g.set(Q,fe)),N.isWebGLMultipleRenderTargets){const we=N.texture;if(fe.length!==we.length||fe[0]!==36064){for(let Xe=0,mt=we.length;Xe<mt;Xe++)fe[Xe]=36064+Xe;fe.length=we.length,be=!0}}else fe[0]!==36064&&(fe[0]=36064,be=!0);else fe[0]!==1029&&(fe[0]=1029,be=!0);be&&(t.isWebGL2?i.drawBuffers(fe):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(fe))}function Ge(N){return f!==N?(i.useProgram(N),f=N,!0):!1}const E={[ei]:32774,[pm]:32778,[mm]:32779};if(n)E[dc]=32775,E[fc]=32776;else{const N=e.get("EXT_blend_minmax");N!==null&&(E[dc]=N.MIN_EXT,E[fc]=N.MAX_EXT)}const L={[gm]:0,[_m]:1,[xm]:768,[ia]:770,[wm]:776,[Mm]:774,[ym]:772,[vm]:769,[sa]:771,[Sm]:775,[bm]:773};function H(N,Q,fe,be,we,Xe,mt,yt){if(N===dt){_===!0&&(Le(3042),_=!1);return}if(_===!1&&(He(3042),_=!0),N!==fm){if(N!==S||yt!==A){if((x!==ei||R!==ei)&&(i.blendEquation(32774),x=ei,R=ei),yt)switch(N){case Un:i.blendFuncSeparate(1,771,1,771);break;case cc:i.blendFunc(1,1);break;case uc:i.blendFuncSeparate(0,769,0,1);break;case hc:i.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case Un:i.blendFuncSeparate(770,771,1,771);break;case cc:i.blendFunc(770,1);break;case uc:i.blendFuncSeparate(0,769,0,1);break;case hc:i.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}b=null,M=null,I=null,v=null,S=N,A=yt}return}we=we||Q,Xe=Xe||fe,mt=mt||be,(Q!==x||we!==R)&&(i.blendEquationSeparate(E[Q],E[we]),x=Q,R=we),(fe!==b||be!==M||Xe!==I||mt!==v)&&(i.blendFuncSeparate(L[fe],L[be],L[Xe],L[mt]),b=fe,M=be,I=Xe,v=mt),S=N,A=null}function Z(N,Q){N.side===Nn?Le(2884):He(2884);let fe=N.side===en;Q&&(fe=!fe),$(fe),N.blending===Un&&N.transparent===!1?H(dt):H(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.premultipliedAlpha),l.setFunc(N.depthFunc),l.setTest(N.depthTest),l.setMask(N.depthWrite),o.setMask(N.colorWrite);const be=N.stencilWrite;c.setTest(be),be&&(c.setMask(N.stencilWriteMask),c.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),c.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),ne(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?He(32926):Le(32926)}function $(N){D!==N&&(N?i.frontFace(2304):i.frontFace(2305),D=N)}function oe(N){N!==um?(He(2884),N!==X&&(N===lc?i.cullFace(1029):N===hm?i.cullFace(1028):i.cullFace(1032))):Le(2884),X=N}function he(N){N!==le&&(ie&&i.lineWidth(N),le=N)}function ne(N,Q,fe){N?(He(32823),(k!==Q||U!==fe)&&(i.polygonOffset(Q,fe),k=Q,U=fe)):Le(32823)}function de(N){N?He(3089):Le(3089)}function se(N){N===void 0&&(N=33984+Y-1),z!==N&&(i.activeTexture(N),z=N)}function w(N,Q,fe){fe===void 0&&(z===null?fe=33984+Y-1:fe=z);let be=W[fe];be===void 0&&(be={type:void 0,texture:void 0},W[fe]=be),(be.type!==N||be.texture!==Q)&&(z!==fe&&(i.activeTexture(fe),z=fe),i.bindTexture(N,Q||q[N]),be.type=N,be.texture=Q)}function y(){const N=W[z];N!==void 0&&N.type!==void 0&&(i.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function F(){try{i.compressedTexImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function j(){try{i.compressedTexImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function J(){try{i.texSubImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ae(){try{i.texSubImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function me(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function C(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function O(){try{i.texStorage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ge(){try{i.texStorage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ye(){try{i.texImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function _e(){try{i.texImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Se(N){ue.equals(N)===!1&&(i.scissor(N.x,N.y,N.z,N.w),ue.copy(N))}function xe(N){Me.equals(N)===!1&&(i.viewport(N.x,N.y,N.z,N.w),Me.copy(N))}function Pe(N,Q){let fe=h.get(Q);fe===void 0&&(fe=new WeakMap,h.set(Q,fe));let be=fe.get(N);be===void 0&&(be=i.getUniformBlockIndex(Q,N.name),fe.set(N,be))}function Be(N,Q){const be=h.get(Q).get(N);u.get(N)!==be&&(i.uniformBlockBinding(Q,be,N.__bindingPointIndex),u.set(N,be))}function Qe(){i.disable(3042),i.disable(2884),i.disable(2929),i.disable(32823),i.disable(3089),i.disable(2960),i.disable(32926),i.blendEquation(32774),i.blendFunc(1,0),i.blendFuncSeparate(1,0,1,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(513),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(519,0,4294967295),i.stencilOp(7680,7680,7680),i.clearStencil(0),i.cullFace(1029),i.frontFace(2305),i.polygonOffset(0,0),i.activeTexture(33984),i.bindFramebuffer(36160,null),n===!0&&(i.bindFramebuffer(36009,null),i.bindFramebuffer(36008,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),d={},z=null,W={},m={},g=new WeakMap,p=[],f=null,_=!1,S=null,x=null,b=null,M=null,R=null,I=null,v=null,A=!1,D=null,X=null,le=null,k=null,U=null,ue.set(0,0,i.canvas.width,i.canvas.height),Me.set(0,0,i.canvas.width,i.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:He,disable:Le,bindFramebuffer:Ee,drawBuffers:ve,useProgram:Ge,setBlending:H,setMaterial:Z,setFlipSided:$,setCullFace:oe,setLineWidth:he,setPolygonOffset:ne,setScissorTest:de,activeTexture:se,bindTexture:w,unbindTexture:y,compressedTexImage2D:F,compressedTexImage3D:j,texImage2D:ye,texImage3D:_e,updateUBOMapping:Pe,uniformBlockBinding:Be,texStorage2D:O,texStorage3D:ge,texSubImage2D:J,texSubImage3D:ae,compressedTexSubImage2D:me,compressedTexSubImage3D:C,scissor:Se,viewport:xe,reset:Qe}}function oy(i,e,t,n,s,r,a){const o=s.isWebGL2,l=s.maxTextures,c=s.maxCubemapSize,u=s.maxTextureSize,h=s.maxSamples,d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=/OculusBrowser/g.test(typeof navigator>"u"?"":navigator.userAgent),g=new WeakMap;let p;const f=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function S(w,y){return _?new OffscreenCanvas(w,y):ir("canvas")}function x(w,y,F,j){let J=1;if((w.width>j||w.height>j)&&(J=j/Math.max(w.width,w.height)),J<1||y===!0)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap){const ae=y?aa:Math.floor,me=ae(J*w.width),C=ae(J*w.height);p===void 0&&(p=S(me,C));const O=F?S(me,C):p;return O.width=me,O.height=C,O.getContext("2d").drawImage(w,0,0,me,C),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+w.width+"x"+w.height+") to ("+me+"x"+C+")."),O}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+w.width+"x"+w.height+")."),w;return w}function b(w){return zo(w.width)&&zo(w.height)}function M(w){return o?!1:w.wrapS!==Kt||w.wrapT!==Kt||w.minFilter!==Ze&&w.minFilter!==Ft}function R(w,y){return w.generateMipmaps&&y&&w.minFilter!==Ze&&w.minFilter!==Ft}function I(w){i.generateMipmap(w)}function v(w,y,F,j,J=!1){if(o===!1)return y;if(w!==null){if(i[w]!==void 0)return i[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let ae=y;return y===6403&&(F===5126&&(ae=33326),F===5131&&(ae=33325),F===5121&&(ae=33321)),y===33319&&(F===5126&&(ae=33328),F===5131&&(ae=33327),F===5121&&(ae=33323)),y===6408&&(F===5126&&(ae=34836),F===5131&&(ae=34842),F===5121&&(ae=j===Ye&&J===!1?35907:32856),F===32819&&(ae=32854),F===32820&&(ae=32855)),(ae===33325||ae===33326||ae===33327||ae===33328||ae===34842||ae===34836)&&e.get("EXT_color_buffer_float"),ae}function A(w,y,F){return R(w,F)===!0||w.isFramebufferTexture&&w.minFilter!==Ze&&w.minFilter!==Ft?Math.log2(Math.max(y.width,y.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?y.mipmaps.length:1}function D(w){return w===Ze||w===No||w===Fo?9728:9729}function X(w){const y=w.target;y.removeEventListener("dispose",X),k(y),y.isVideoTexture&&g.delete(y)}function le(w){const y=w.target;y.removeEventListener("dispose",le),Y(y)}function k(w){const y=n.get(w);if(y.__webglInit===void 0)return;const F=w.source,j=f.get(F);if(j){const J=j[y.__cacheKey];J.usedTimes--,J.usedTimes===0&&U(w),Object.keys(j).length===0&&f.delete(F)}n.remove(w)}function U(w){const y=n.get(w);i.deleteTexture(y.__webglTexture);const F=w.source,j=f.get(F);delete j[y.__cacheKey],a.memory.textures--}function Y(w){const y=w.texture,F=n.get(w),j=n.get(y);if(j.__webglTexture!==void 0&&(i.deleteTexture(j.__webglTexture),a.memory.textures--),w.depthTexture&&w.depthTexture.dispose(),w.isWebGLCubeRenderTarget)for(let J=0;J<6;J++)i.deleteFramebuffer(F.__webglFramebuffer[J]),F.__webglDepthbuffer&&i.deleteRenderbuffer(F.__webglDepthbuffer[J]);else{if(i.deleteFramebuffer(F.__webglFramebuffer),F.__webglDepthbuffer&&i.deleteRenderbuffer(F.__webglDepthbuffer),F.__webglMultisampledFramebuffer&&i.deleteFramebuffer(F.__webglMultisampledFramebuffer),F.__webglColorRenderbuffer)for(let J=0;J<F.__webglColorRenderbuffer.length;J++)F.__webglColorRenderbuffer[J]&&i.deleteRenderbuffer(F.__webglColorRenderbuffer[J]);F.__webglDepthRenderbuffer&&i.deleteRenderbuffer(F.__webglDepthRenderbuffer)}if(w.isWebGLMultipleRenderTargets)for(let J=0,ae=y.length;J<ae;J++){const me=n.get(y[J]);me.__webglTexture&&(i.deleteTexture(me.__webglTexture),a.memory.textures--),n.remove(y[J])}n.remove(y),n.remove(w)}let ie=0;function te(){ie=0}function G(){const w=ie;return w>=l&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+l),ie+=1,w}function z(w){const y=[];return y.push(w.wrapS),y.push(w.wrapT),y.push(w.wrapR||0),y.push(w.magFilter),y.push(w.minFilter),y.push(w.anisotropy),y.push(w.internalFormat),y.push(w.format),y.push(w.type),y.push(w.generateMipmaps),y.push(w.premultiplyAlpha),y.push(w.flipY),y.push(w.unpackAlignment),y.push(w.encoding),y.join()}function W(w,y){const F=n.get(w);if(w.isVideoTexture&&de(w),w.isRenderTargetTexture===!1&&w.version>0&&F.__version!==w.version){const j=w.image;if(j===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Le(F,w,y);return}}t.bindTexture(3553,F.__webglTexture,33984+y)}function ce(w,y){const F=n.get(w);if(w.version>0&&F.__version!==w.version){Le(F,w,y);return}t.bindTexture(35866,F.__webglTexture,33984+y)}function re(w,y){const F=n.get(w);if(w.version>0&&F.__version!==w.version){Le(F,w,y);return}t.bindTexture(32879,F.__webglTexture,33984+y)}function ue(w,y){const F=n.get(w);if(w.version>0&&F.__version!==w.version){Ee(F,w,y);return}t.bindTexture(34067,F.__webglTexture,33984+y)}const Me={[fs]:10497,[Kt]:33071,[ra]:33648},Re={[Ze]:9728,[No]:9984,[Fo]:9986,[Ft]:9729,[Hh]:9985,[Ms]:9987};function q(w,y,F){if(F?(i.texParameteri(w,10242,Me[y.wrapS]),i.texParameteri(w,10243,Me[y.wrapT]),(w===32879||w===35866)&&i.texParameteri(w,32882,Me[y.wrapR]),i.texParameteri(w,10240,Re[y.magFilter]),i.texParameteri(w,10241,Re[y.minFilter])):(i.texParameteri(w,10242,33071),i.texParameteri(w,10243,33071),(w===32879||w===35866)&&i.texParameteri(w,32882,33071),(y.wrapS!==Kt||y.wrapT!==Kt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(w,10240,D(y.magFilter)),i.texParameteri(w,10241,D(y.minFilter)),y.minFilter!==Ze&&y.minFilter!==Ft&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const j=e.get("EXT_texture_filter_anisotropic");if(y.type===ti&&e.has("OES_texture_float_linear")===!1||o===!1&&y.type===ps&&e.has("OES_texture_half_float_linear")===!1)return;(y.anisotropy>1||n.get(y).__currentAnisotropy)&&(i.texParameterf(w,j.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,s.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy)}}function He(w,y){let F=!1;w.__webglInit===void 0&&(w.__webglInit=!0,y.addEventListener("dispose",X));const j=y.source;let J=f.get(j);J===void 0&&(J={},f.set(j,J));const ae=z(y);if(ae!==w.__cacheKey){J[ae]===void 0&&(J[ae]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,F=!0),J[ae].usedTimes++;const me=J[w.__cacheKey];me!==void 0&&(J[w.__cacheKey].usedTimes--,me.usedTimes===0&&U(y)),w.__cacheKey=ae,w.__webglTexture=J[ae].texture}return F}function Le(w,y,F){let j=3553;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(j=35866),y.isData3DTexture&&(j=32879);const J=He(w,y),ae=y.source;t.bindTexture(j,w.__webglTexture,33984+F);const me=n.get(ae);if(ae.version!==me.__version||J===!0){t.activeTexture(33984+F),i.pixelStorei(37440,y.flipY),i.pixelStorei(37441,y.premultiplyAlpha),i.pixelStorei(3317,y.unpackAlignment),i.pixelStorei(37443,0);const C=M(y)&&b(y.image)===!1;let O=x(y.image,C,!1,u);O=se(y,O);const ge=b(O)||o,ye=r.convert(y.format,y.encoding);let _e=r.convert(y.type),Se=v(y.internalFormat,ye,_e,y.encoding,y.isVideoTexture);q(j,y,ge);let xe;const Pe=y.mipmaps,Be=o&&y.isVideoTexture!==!0,Qe=me.__version===void 0||J===!0,N=A(y,O,ge);if(y.isDepthTexture)Se=6402,o?y.type===ti?Se=36012:y.type===wi?Se=33190:y.type===ls?Se=35056:Se=33189:y.type===ti&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),y.format===Li&&Se===6402&&y.type!==_l&&y.type!==wi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),y.type=wi,_e=r.convert(y.type)),y.format===ms&&Se===6402&&(Se=34041,y.type!==ls&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),y.type=ls,_e=r.convert(y.type))),Qe&&(Be?t.texStorage2D(3553,1,Se,O.width,O.height):t.texImage2D(3553,0,Se,O.width,O.height,0,ye,_e,null));else if(y.isDataTexture)if(Pe.length>0&&ge){Be&&Qe&&t.texStorage2D(3553,N,Se,Pe[0].width,Pe[0].height);for(let Q=0,fe=Pe.length;Q<fe;Q++)xe=Pe[Q],Be?t.texSubImage2D(3553,Q,0,0,xe.width,xe.height,ye,_e,xe.data):t.texImage2D(3553,Q,Se,xe.width,xe.height,0,ye,_e,xe.data);y.generateMipmaps=!1}else Be?(Qe&&t.texStorage2D(3553,N,Se,O.width,O.height),t.texSubImage2D(3553,0,0,0,O.width,O.height,ye,_e,O.data)):t.texImage2D(3553,0,Se,O.width,O.height,0,ye,_e,O.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){Be&&Qe&&t.texStorage3D(35866,N,Se,Pe[0].width,Pe[0].height,O.depth);for(let Q=0,fe=Pe.length;Q<fe;Q++)xe=Pe[Q],y.format!==Zt?ye!==null?Be?t.compressedTexSubImage3D(35866,Q,0,0,0,xe.width,xe.height,O.depth,ye,xe.data,0,0):t.compressedTexImage3D(35866,Q,Se,xe.width,xe.height,O.depth,0,xe.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Be?t.texSubImage3D(35866,Q,0,0,0,xe.width,xe.height,O.depth,ye,_e,xe.data):t.texImage3D(35866,Q,Se,xe.width,xe.height,O.depth,0,ye,_e,xe.data)}else{Be&&Qe&&t.texStorage2D(3553,N,Se,Pe[0].width,Pe[0].height);for(let Q=0,fe=Pe.length;Q<fe;Q++)xe=Pe[Q],y.format!==Zt?ye!==null?Be?t.compressedTexSubImage2D(3553,Q,0,0,xe.width,xe.height,ye,xe.data):t.compressedTexImage2D(3553,Q,Se,xe.width,xe.height,0,xe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Be?t.texSubImage2D(3553,Q,0,0,xe.width,xe.height,ye,_e,xe.data):t.texImage2D(3553,Q,Se,xe.width,xe.height,0,ye,_e,xe.data)}else if(y.isDataArrayTexture)Be?(Qe&&t.texStorage3D(35866,N,Se,O.width,O.height,O.depth),t.texSubImage3D(35866,0,0,0,0,O.width,O.height,O.depth,ye,_e,O.data)):t.texImage3D(35866,0,Se,O.width,O.height,O.depth,0,ye,_e,O.data);else if(y.isData3DTexture)Be?(Qe&&t.texStorage3D(32879,N,Se,O.width,O.height,O.depth),t.texSubImage3D(32879,0,0,0,0,O.width,O.height,O.depth,ye,_e,O.data)):t.texImage3D(32879,0,Se,O.width,O.height,O.depth,0,ye,_e,O.data);else if(y.isFramebufferTexture){if(Qe)if(Be)t.texStorage2D(3553,N,Se,O.width,O.height);else{let Q=O.width,fe=O.height;for(let be=0;be<N;be++)t.texImage2D(3553,be,Se,Q,fe,0,ye,_e,null),Q>>=1,fe>>=1}}else if(Pe.length>0&&ge){Be&&Qe&&t.texStorage2D(3553,N,Se,Pe[0].width,Pe[0].height);for(let Q=0,fe=Pe.length;Q<fe;Q++)xe=Pe[Q],Be?t.texSubImage2D(3553,Q,0,0,ye,_e,xe):t.texImage2D(3553,Q,Se,ye,_e,xe);y.generateMipmaps=!1}else Be?(Qe&&t.texStorage2D(3553,N,Se,O.width,O.height),t.texSubImage2D(3553,0,0,0,ye,_e,O)):t.texImage2D(3553,0,Se,ye,_e,O);R(y,ge)&&I(j),me.__version=ae.version,y.onUpdate&&y.onUpdate(y)}w.__version=y.version}function Ee(w,y,F){if(y.image.length!==6)return;const j=He(w,y),J=y.source;t.bindTexture(34067,w.__webglTexture,33984+F);const ae=n.get(J);if(J.version!==ae.__version||j===!0){t.activeTexture(33984+F),i.pixelStorei(37440,y.flipY),i.pixelStorei(37441,y.premultiplyAlpha),i.pixelStorei(3317,y.unpackAlignment),i.pixelStorei(37443,0);const me=y.isCompressedTexture||y.image[0].isCompressedTexture,C=y.image[0]&&y.image[0].isDataTexture,O=[];for(let Q=0;Q<6;Q++)!me&&!C?O[Q]=x(y.image[Q],!1,!0,c):O[Q]=C?y.image[Q].image:y.image[Q],O[Q]=se(y,O[Q]);const ge=O[0],ye=b(ge)||o,_e=r.convert(y.format,y.encoding),Se=r.convert(y.type),xe=v(y.internalFormat,_e,Se,y.encoding),Pe=o&&y.isVideoTexture!==!0,Be=ae.__version===void 0||j===!0;let Qe=A(y,ge,ye);q(34067,y,ye);let N;if(me){Pe&&Be&&t.texStorage2D(34067,Qe,xe,ge.width,ge.height);for(let Q=0;Q<6;Q++){N=O[Q].mipmaps;for(let fe=0;fe<N.length;fe++){const be=N[fe];y.format!==Zt?_e!==null?Pe?t.compressedTexSubImage2D(34069+Q,fe,0,0,be.width,be.height,_e,be.data):t.compressedTexImage2D(34069+Q,fe,xe,be.width,be.height,0,be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Pe?t.texSubImage2D(34069+Q,fe,0,0,be.width,be.height,_e,Se,be.data):t.texImage2D(34069+Q,fe,xe,be.width,be.height,0,_e,Se,be.data)}}}else{N=y.mipmaps,Pe&&Be&&(N.length>0&&Qe++,t.texStorage2D(34067,Qe,xe,O[0].width,O[0].height));for(let Q=0;Q<6;Q++)if(C){Pe?t.texSubImage2D(34069+Q,0,0,0,O[Q].width,O[Q].height,_e,Se,O[Q].data):t.texImage2D(34069+Q,0,xe,O[Q].width,O[Q].height,0,_e,Se,O[Q].data);for(let fe=0;fe<N.length;fe++){const we=N[fe].image[Q].image;Pe?t.texSubImage2D(34069+Q,fe+1,0,0,we.width,we.height,_e,Se,we.data):t.texImage2D(34069+Q,fe+1,xe,we.width,we.height,0,_e,Se,we.data)}}else{Pe?t.texSubImage2D(34069+Q,0,0,0,_e,Se,O[Q]):t.texImage2D(34069+Q,0,xe,_e,Se,O[Q]);for(let fe=0;fe<N.length;fe++){const be=N[fe];Pe?t.texSubImage2D(34069+Q,fe+1,0,0,_e,Se,be.image[Q]):t.texImage2D(34069+Q,fe+1,xe,_e,Se,be.image[Q])}}}R(y,ye)&&I(34067),ae.__version=J.version,y.onUpdate&&y.onUpdate(y)}w.__version=y.version}function ve(w,y,F,j,J){const ae=r.convert(F.format,F.encoding),me=r.convert(F.type),C=v(F.internalFormat,ae,me,F.encoding);n.get(y).__hasExternalTextures||(J===32879||J===35866?t.texImage3D(J,0,C,y.width,y.height,y.depth,0,ae,me,null):t.texImage2D(J,0,C,y.width,y.height,0,ae,me,null)),t.bindFramebuffer(36160,w),ne(y)?d.framebufferTexture2DMultisampleEXT(36160,j,J,n.get(F).__webglTexture,0,he(y)):(J===3553||J>=34069&&J<=34074)&&i.framebufferTexture2D(36160,j,J,n.get(F).__webglTexture,0),t.bindFramebuffer(36160,null)}function Ge(w,y,F){if(i.bindRenderbuffer(36161,w),y.depthBuffer&&!y.stencilBuffer){let j=33189;if(F||ne(y)){const J=y.depthTexture;J&&J.isDepthTexture&&(J.type===ti?j=36012:J.type===wi&&(j=33190));const ae=he(y);ne(y)?d.renderbufferStorageMultisampleEXT(36161,ae,j,y.width,y.height):i.renderbufferStorageMultisample(36161,ae,j,y.width,y.height)}else i.renderbufferStorage(36161,j,y.width,y.height);i.framebufferRenderbuffer(36160,36096,36161,w)}else if(y.depthBuffer&&y.stencilBuffer){const j=he(y);F&&ne(y)===!1?i.renderbufferStorageMultisample(36161,j,35056,y.width,y.height):ne(y)?d.renderbufferStorageMultisampleEXT(36161,j,35056,y.width,y.height):i.renderbufferStorage(36161,34041,y.width,y.height),i.framebufferRenderbuffer(36160,33306,36161,w)}else{const j=y.isWebGLMultipleRenderTargets===!0?y.texture:[y.texture];for(let J=0;J<j.length;J++){const ae=j[J],me=r.convert(ae.format,ae.encoding),C=r.convert(ae.type),O=v(ae.internalFormat,me,C,ae.encoding),ge=he(y);F&&ne(y)===!1?i.renderbufferStorageMultisample(36161,ge,O,y.width,y.height):ne(y)?d.renderbufferStorageMultisampleEXT(36161,ge,O,y.width,y.height):i.renderbufferStorage(36161,O,y.width,y.height)}}i.bindRenderbuffer(36161,null)}function E(w,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,w),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(y.depthTexture).__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),W(y.depthTexture,0);const j=n.get(y.depthTexture).__webglTexture,J=he(y);if(y.depthTexture.format===Li)ne(y)?d.framebufferTexture2DMultisampleEXT(36160,36096,3553,j,0,J):i.framebufferTexture2D(36160,36096,3553,j,0);else if(y.depthTexture.format===ms)ne(y)?d.framebufferTexture2DMultisampleEXT(36160,33306,3553,j,0,J):i.framebufferTexture2D(36160,33306,3553,j,0);else throw new Error("Unknown depthTexture format")}function L(w){const y=n.get(w),F=w.isWebGLCubeRenderTarget===!0;if(w.depthTexture&&!y.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");E(y.__webglFramebuffer,w)}else if(F){y.__webglDepthbuffer=[];for(let j=0;j<6;j++)t.bindFramebuffer(36160,y.__webglFramebuffer[j]),y.__webglDepthbuffer[j]=i.createRenderbuffer(),Ge(y.__webglDepthbuffer[j],w,!1)}else t.bindFramebuffer(36160,y.__webglFramebuffer),y.__webglDepthbuffer=i.createRenderbuffer(),Ge(y.__webglDepthbuffer,w,!1);t.bindFramebuffer(36160,null)}function H(w,y,F){const j=n.get(w);y!==void 0&&ve(j.__webglFramebuffer,w,w.texture,36064,3553),F!==void 0&&L(w)}function Z(w){const y=w.texture,F=n.get(w),j=n.get(y);w.addEventListener("dispose",le),w.isWebGLMultipleRenderTargets!==!0&&(j.__webglTexture===void 0&&(j.__webglTexture=i.createTexture()),j.__version=y.version,a.memory.textures++);const J=w.isWebGLCubeRenderTarget===!0,ae=w.isWebGLMultipleRenderTargets===!0,me=b(w)||o;if(J){F.__webglFramebuffer=[];for(let C=0;C<6;C++)F.__webglFramebuffer[C]=i.createFramebuffer()}else{if(F.__webglFramebuffer=i.createFramebuffer(),ae)if(s.drawBuffers){const C=w.texture;for(let O=0,ge=C.length;O<ge;O++){const ye=n.get(C[O]);ye.__webglTexture===void 0&&(ye.__webglTexture=i.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&w.samples>0&&ne(w)===!1){const C=ae?y:[y];F.__webglMultisampledFramebuffer=i.createFramebuffer(),F.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,F.__webglMultisampledFramebuffer);for(let O=0;O<C.length;O++){const ge=C[O];F.__webglColorRenderbuffer[O]=i.createRenderbuffer(),i.bindRenderbuffer(36161,F.__webglColorRenderbuffer[O]);const ye=r.convert(ge.format,ge.encoding),_e=r.convert(ge.type),Se=v(ge.internalFormat,ye,_e,ge.encoding,w.isXRRenderTarget===!0),xe=he(w);i.renderbufferStorageMultisample(36161,xe,Se,w.width,w.height),i.framebufferRenderbuffer(36160,36064+O,36161,F.__webglColorRenderbuffer[O])}i.bindRenderbuffer(36161,null),w.depthBuffer&&(F.__webglDepthRenderbuffer=i.createRenderbuffer(),Ge(F.__webglDepthRenderbuffer,w,!0)),t.bindFramebuffer(36160,null)}}if(J){t.bindTexture(34067,j.__webglTexture),q(34067,y,me);for(let C=0;C<6;C++)ve(F.__webglFramebuffer[C],w,y,36064,34069+C);R(y,me)&&I(34067),t.unbindTexture()}else if(ae){const C=w.texture;for(let O=0,ge=C.length;O<ge;O++){const ye=C[O],_e=n.get(ye);t.bindTexture(3553,_e.__webglTexture),q(3553,ye,me),ve(F.__webglFramebuffer,w,ye,36064+O,3553),R(ye,me)&&I(3553)}t.unbindTexture()}else{let C=3553;(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(o?C=w.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(C,j.__webglTexture),q(C,y,me),ve(F.__webglFramebuffer,w,y,36064,C),R(y,me)&&I(C),t.unbindTexture()}w.depthBuffer&&L(w)}function $(w){const y=b(w)||o,F=w.isWebGLMultipleRenderTargets===!0?w.texture:[w.texture];for(let j=0,J=F.length;j<J;j++){const ae=F[j];if(R(ae,y)){const me=w.isWebGLCubeRenderTarget?34067:3553,C=n.get(ae).__webglTexture;t.bindTexture(me,C),I(me),t.unbindTexture()}}}function oe(w){if(o&&w.samples>0&&ne(w)===!1){const y=w.isWebGLMultipleRenderTargets?w.texture:[w.texture],F=w.width,j=w.height;let J=16384;const ae=[],me=w.stencilBuffer?33306:36096,C=n.get(w),O=w.isWebGLMultipleRenderTargets===!0;if(O)for(let ge=0;ge<y.length;ge++)t.bindFramebuffer(36160,C.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(36160,36064+ge,36161,null),t.bindFramebuffer(36160,C.__webglFramebuffer),i.framebufferTexture2D(36009,36064+ge,3553,null,0);t.bindFramebuffer(36008,C.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,C.__webglFramebuffer);for(let ge=0;ge<y.length;ge++){ae.push(36064+ge),w.depthBuffer&&ae.push(me);const ye=C.__ignoreDepthValues!==void 0?C.__ignoreDepthValues:!1;if(ye===!1&&(w.depthBuffer&&(J|=256),w.stencilBuffer&&(J|=1024)),O&&i.framebufferRenderbuffer(36008,36064,36161,C.__webglColorRenderbuffer[ge]),ye===!0&&(i.invalidateFramebuffer(36008,[me]),i.invalidateFramebuffer(36009,[me])),O){const _e=n.get(y[ge]).__webglTexture;i.framebufferTexture2D(36009,36064,3553,_e,0)}i.blitFramebuffer(0,0,F,j,0,0,F,j,J,9728),m&&i.invalidateFramebuffer(36008,ae)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),O)for(let ge=0;ge<y.length;ge++){t.bindFramebuffer(36160,C.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(36160,36064+ge,36161,C.__webglColorRenderbuffer[ge]);const ye=n.get(y[ge]).__webglTexture;t.bindFramebuffer(36160,C.__webglFramebuffer),i.framebufferTexture2D(36009,36064+ge,3553,ye,0)}t.bindFramebuffer(36009,C.__webglMultisampledFramebuffer)}}function he(w){return Math.min(h,w.samples)}function ne(w){const y=n.get(w);return o&&w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function de(w){const y=a.render.frame;g.get(w)!==y&&(g.set(w,y),w.update())}function se(w,y){const F=w.encoding,j=w.format,J=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||w.format===Uo||F!==Ni&&(F===Ye?o===!1?e.has("EXT_sRGB")===!0&&j===Zt?(w.format=Uo,w.minFilter=Ft,w.generateMipmaps=!1):y=qh.sRGBToLinear(y):(j!==Zt||J!==Ii)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",F)),y}this.allocateTextureUnit=G,this.resetTextureUnits=te,this.setTexture2D=W,this.setTexture2DArray=ce,this.setTexture3D=re,this.setTextureCube=ue,this.rebindTextures=H,this.setupRenderTarget=Z,this.updateRenderTargetMipmap=$,this.updateMultisampleRenderTarget=oe,this.setupDepthRenderbuffer=L,this.setupFrameBufferTexture=ve,this.useMultisampledRTT=ne}function ly(i,e,t){const n=t.isWebGL2;function s(r,a=null){let o;if(r===Ii)return 5121;if(r===Vm)return 32819;if(r===Hm)return 32820;if(r===zm)return 5120;if(r===Bm)return 5122;if(r===_l)return 5123;if(r===km)return 5124;if(r===wi)return 5125;if(r===ti)return 5126;if(r===ps)return n?5131:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(r===Gm)return 6406;if(r===Zt)return 6408;if(r===jm)return 6409;if(r===Xm)return 6410;if(r===Li)return 6402;if(r===ms)return 34041;if(r===qm)return 6403;if(r===Wm)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(r===Uo)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(r===$m)return 36244;if(r===Ym)return 33319;if(r===Km)return 33320;if(r===Zm)return 36249;if(r===Pa||r===Da||r===Ia||r===Na)if(a===Ye)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(r===Pa)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Da)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Ia)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Na)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(r===Pa)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Da)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Ia)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Na)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===pc||r===mc||r===gc||r===_c)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(r===pc)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===mc)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===gc)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===_c)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Jm)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===xc||r===vc)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(r===xc)return a===Ye?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(r===vc)return a===Ye?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===yc||r===bc||r===Mc||r===Sc||r===wc||r===Tc||r===Ec||r===Ac||r===Cc||r===Lc||r===Rc||r===Pc||r===Dc||r===Ic)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(r===yc)return a===Ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===bc)return a===Ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Mc)return a===Ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Sc)return a===Ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===wc)return a===Ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Tc)return a===Ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Ec)return a===Ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Ac)return a===Ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Cc)return a===Ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Lc)return a===Ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Rc)return a===Ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Pc)return a===Ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Dc)return a===Ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Ic)return a===Ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Nc)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(r===Nc)return a===Ye?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;return r===ls?n?34042:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):i[r]!==void 0?i[r]:null}return{convert:s}}class cy extends Pt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Ei extends rt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const uy={type:"move"};class oo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ei,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ei,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ei,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const p of e.hand.values()){const f=t.getJointPose(p,n);if(c.joints[p.jointName]===void 0){const S=new Ei;S.matrixAutoUpdate=!1,S.visible=!1,c.joints[p.jointName]=S,c.add(S)}const _=c.joints[p.jointName];f!==null&&(_.matrix.fromArray(f.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.jointRadius=f.radius),_.visible=f!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),m=.02,g=.005;c.inputState.pinching&&d>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(uy)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}}class ad extends It{constructor(e,t,n,s,r,a,o,l,c,u){if(u=u!==void 0?u:Li,u!==Li&&u!==ms)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Li&&(n=wi),n===void 0&&u===ms&&(n=ls),super(null,s,r,a,o,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Ze,this.minFilter=l!==void 0?l:Ze,this.flipY=!1,this.generateMipmaps=!1}}class hy extends Oi{constructor(e,t){super();const n=this;let s=null,r=1,a=null,o="local-floor",l=null,c=null,u=null,h=null,d=null,m=null;const g=t.getContextAttributes();let p=null,f=null;const _=[],S=[],x=new Pt;x.layers.enable(1),x.viewport=new tt;const b=new Pt;b.layers.enable(2),b.viewport=new tt;const M=[x,b],R=new cy;R.layers.enable(1),R.layers.enable(2);let I=null,v=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(z){let W=_[z];return W===void 0&&(W=new oo,_[z]=W),W.getTargetRaySpace()},this.getControllerGrip=function(z){let W=_[z];return W===void 0&&(W=new oo,_[z]=W),W.getGripSpace()},this.getHand=function(z){let W=_[z];return W===void 0&&(W=new oo,_[z]=W),W.getHandSpace()};function A(z){const W=S.indexOf(z.inputSource);if(W===-1)return;const ce=_[W];ce!==void 0&&ce.dispatchEvent({type:z.type,data:z.inputSource})}function D(){s.removeEventListener("select",A),s.removeEventListener("selectstart",A),s.removeEventListener("selectend",A),s.removeEventListener("squeeze",A),s.removeEventListener("squeezestart",A),s.removeEventListener("squeezeend",A),s.removeEventListener("end",D),s.removeEventListener("inputsourceschange",X);for(let z=0;z<_.length;z++){const W=S[z];W!==null&&(S[z]=null,_[z].disconnect(W))}I=null,v=null,e.setRenderTarget(p),d=null,h=null,u=null,s=null,f=null,G.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(z){r=z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(z){o=z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(z){l=z},this.getBaseLayer=function(){return h!==null?h:d},this.getBinding=function(){return u},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(z){if(s=z,s!==null){if(p=e.getRenderTarget(),s.addEventListener("select",A),s.addEventListener("selectstart",A),s.addEventListener("selectend",A),s.addEventListener("squeeze",A),s.addEventListener("squeezestart",A),s.addEventListener("squeezeend",A),s.addEventListener("end",D),s.addEventListener("inputsourceschange",X),g.xrCompatible!==!0&&await t.makeXRCompatible(),s.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const W={antialias:s.renderState.layers===void 0?g.antialias:!0,alpha:g.alpha,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,t,W),s.updateRenderState({baseLayer:d}),f=new Vt(d.framebufferWidth,d.framebufferHeight,{format:Zt,type:Ii,encoding:e.outputEncoding,stencilBuffer:g.stencil})}else{let W=null,ce=null,re=null;g.depth&&(re=g.stencil?35056:33190,W=g.stencil?ms:Li,ce=g.stencil?ls:wi);const ue={colorFormat:32856,depthFormat:re,scaleFactor:r};u=new XRWebGLBinding(s,t),h=u.createProjectionLayer(ue),s.updateRenderState({layers:[h]}),f=new Vt(h.textureWidth,h.textureHeight,{format:Zt,type:Ii,depthTexture:new ad(h.textureWidth,h.textureHeight,ce,void 0,void 0,void 0,void 0,void 0,void 0,W),stencilBuffer:g.stencil,encoding:e.outputEncoding,samples:g.antialias?4:0});const Me=e.properties.get(f);Me.__ignoreDepthValues=h.ignoreDepthValues}f.isXRRenderTarget=!0,this.setFoveation(1),l=null,a=await s.requestReferenceSpace(o),G.setContext(s),G.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function X(z){for(let W=0;W<z.removed.length;W++){const ce=z.removed[W],re=S.indexOf(ce);re>=0&&(S[re]=null,_[re].dispatchEvent({type:"disconnected",data:ce}))}for(let W=0;W<z.added.length;W++){const ce=z.added[W];let re=S.indexOf(ce);if(re===-1){for(let Me=0;Me<_.length;Me++)if(Me>=S.length){S.push(ce),re=Me;break}else if(S[Me]===null){S[Me]=ce,re=Me;break}if(re===-1)break}const ue=_[re];ue&&ue.dispatchEvent({type:"connected",data:ce})}}const le=new P,k=new P;function U(z,W,ce){le.setFromMatrixPosition(W.matrixWorld),k.setFromMatrixPosition(ce.matrixWorld);const re=le.distanceTo(k),ue=W.projectionMatrix.elements,Me=ce.projectionMatrix.elements,Re=ue[14]/(ue[10]-1),q=ue[14]/(ue[10]+1),He=(ue[9]+1)/ue[5],Le=(ue[9]-1)/ue[5],Ee=(ue[8]-1)/ue[0],ve=(Me[8]+1)/Me[0],Ge=Re*Ee,E=Re*ve,L=re/(-Ee+ve),H=L*-Ee;W.matrixWorld.decompose(z.position,z.quaternion,z.scale),z.translateX(H),z.translateZ(L),z.matrixWorld.compose(z.position,z.quaternion,z.scale),z.matrixWorldInverse.copy(z.matrixWorld).invert();const Z=Re+L,$=q+L,oe=Ge-H,he=E+(re-H),ne=He*q/$*Z,de=Le*q/$*Z;z.projectionMatrix.makePerspective(oe,he,ne,de,Z,$)}function Y(z,W){W===null?z.matrixWorld.copy(z.matrix):z.matrixWorld.multiplyMatrices(W.matrixWorld,z.matrix),z.matrixWorldInverse.copy(z.matrixWorld).invert()}this.updateCamera=function(z){if(s===null)return;R.near=b.near=x.near=z.near,R.far=b.far=x.far=z.far,(I!==R.near||v!==R.far)&&(s.updateRenderState({depthNear:R.near,depthFar:R.far}),I=R.near,v=R.far);const W=z.parent,ce=R.cameras;Y(R,W);for(let ue=0;ue<ce.length;ue++)Y(ce[ue],W);R.matrixWorld.decompose(R.position,R.quaternion,R.scale),z.matrix.copy(R.matrix),z.matrix.decompose(z.position,z.quaternion,z.scale);const re=z.children;for(let ue=0,Me=re.length;ue<Me;ue++)re[ue].updateMatrixWorld(!0);ce.length===2?U(R,x,b):R.projectionMatrix.copy(x.projectionMatrix)},this.getCamera=function(){return R},this.getFoveation=function(){if(h!==null)return h.fixedFoveation;if(d!==null)return d.fixedFoveation},this.setFoveation=function(z){h!==null&&(h.fixedFoveation=z),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=z)};let ie=null;function te(z,W){if(c=W.getViewerPose(l||a),m=W,c!==null){const ce=c.views;d!==null&&(e.setRenderTargetFramebuffer(f,d.framebuffer),e.setRenderTarget(f));let re=!1;ce.length!==R.cameras.length&&(R.cameras.length=0,re=!0);for(let ue=0;ue<ce.length;ue++){const Me=ce[ue];let Re=null;if(d!==null)Re=d.getViewport(Me);else{const He=u.getViewSubImage(h,Me);Re=He.viewport,ue===0&&(e.setRenderTargetTextures(f,He.colorTexture,h.ignoreDepthValues?void 0:He.depthStencilTexture),e.setRenderTarget(f))}let q=M[ue];q===void 0&&(q=new Pt,q.layers.enable(ue),q.viewport=new tt,M[ue]=q),q.matrix.fromArray(Me.transform.matrix),q.projectionMatrix.fromArray(Me.projectionMatrix),q.viewport.set(Re.x,Re.y,Re.width,Re.height),ue===0&&R.matrix.copy(q.matrix),re===!0&&R.cameras.push(q)}}for(let ce=0;ce<_.length;ce++){const re=S[ce],ue=_[ce];re!==null&&ue!==void 0&&ue.update(re,W,l||a)}ie&&ie(z,W),m=null}const G=new td;G.setAnimationLoop(te),this.setAnimationLoop=function(z){ie=z},this.dispose=function(){}}}function dy(i,e){function t(p,f){p.fogColor.value.copy(f.color),f.isFog?(p.fogNear.value=f.near,p.fogFar.value=f.far):f.isFogExp2&&(p.fogDensity.value=f.density)}function n(p,f,_,S,x){f.isMeshBasicMaterial||f.isMeshLambertMaterial?s(p,f):f.isMeshToonMaterial?(s(p,f),u(p,f)):f.isMeshPhongMaterial?(s(p,f),c(p,f)):f.isMeshStandardMaterial?(s(p,f),h(p,f),f.isMeshPhysicalMaterial&&d(p,f,x)):f.isMeshMatcapMaterial?(s(p,f),m(p,f)):f.isMeshDepthMaterial?s(p,f):f.isMeshDistanceMaterial?(s(p,f),g(p,f)):f.isMeshNormalMaterial?s(p,f):f.isLineBasicMaterial?(r(p,f),f.isLineDashedMaterial&&a(p,f)):f.isPointsMaterial?o(p,f,_,S):f.isSpriteMaterial?l(p,f):f.isShadowMaterial?(p.color.value.copy(f.color),p.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(p,f){p.opacity.value=f.opacity,f.color&&p.diffuse.value.copy(f.color),f.emissive&&p.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(p.map.value=f.map),f.alphaMap&&(p.alphaMap.value=f.alphaMap),f.bumpMap&&(p.bumpMap.value=f.bumpMap,p.bumpScale.value=f.bumpScale,f.side===en&&(p.bumpScale.value*=-1)),f.displacementMap&&(p.displacementMap.value=f.displacementMap,p.displacementScale.value=f.displacementScale,p.displacementBias.value=f.displacementBias),f.emissiveMap&&(p.emissiveMap.value=f.emissiveMap),f.normalMap&&(p.normalMap.value=f.normalMap,p.normalScale.value.copy(f.normalScale),f.side===en&&p.normalScale.value.negate()),f.specularMap&&(p.specularMap.value=f.specularMap),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);const _=e.get(f).envMap;if(_&&(p.envMap.value=_,p.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=f.reflectivity,p.ior.value=f.ior,p.refractionRatio.value=f.refractionRatio),f.lightMap){p.lightMap.value=f.lightMap;const b=i.physicallyCorrectLights!==!0?Math.PI:1;p.lightMapIntensity.value=f.lightMapIntensity*b}f.aoMap&&(p.aoMap.value=f.aoMap,p.aoMapIntensity.value=f.aoMapIntensity);let S;f.map?S=f.map:f.specularMap?S=f.specularMap:f.displacementMap?S=f.displacementMap:f.normalMap?S=f.normalMap:f.bumpMap?S=f.bumpMap:f.roughnessMap?S=f.roughnessMap:f.metalnessMap?S=f.metalnessMap:f.alphaMap?S=f.alphaMap:f.emissiveMap?S=f.emissiveMap:f.clearcoatMap?S=f.clearcoatMap:f.clearcoatNormalMap?S=f.clearcoatNormalMap:f.clearcoatRoughnessMap?S=f.clearcoatRoughnessMap:f.iridescenceMap?S=f.iridescenceMap:f.iridescenceThicknessMap?S=f.iridescenceThicknessMap:f.specularIntensityMap?S=f.specularIntensityMap:f.specularColorMap?S=f.specularColorMap:f.transmissionMap?S=f.transmissionMap:f.thicknessMap?S=f.thicknessMap:f.sheenColorMap?S=f.sheenColorMap:f.sheenRoughnessMap&&(S=f.sheenRoughnessMap),S!==void 0&&(S.isWebGLRenderTarget&&(S=S.texture),S.matrixAutoUpdate===!0&&S.updateMatrix(),p.uvTransform.value.copy(S.matrix));let x;f.aoMap?x=f.aoMap:f.lightMap&&(x=f.lightMap),x!==void 0&&(x.isWebGLRenderTarget&&(x=x.texture),x.matrixAutoUpdate===!0&&x.updateMatrix(),p.uv2Transform.value.copy(x.matrix))}function r(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity}function a(p,f){p.dashSize.value=f.dashSize,p.totalSize.value=f.dashSize+f.gapSize,p.scale.value=f.scale}function o(p,f,_,S){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.size.value=f.size*_,p.scale.value=S*.5,f.map&&(p.map.value=f.map),f.alphaMap&&(p.alphaMap.value=f.alphaMap),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);let x;f.map?x=f.map:f.alphaMap&&(x=f.alphaMap),x!==void 0&&(x.matrixAutoUpdate===!0&&x.updateMatrix(),p.uvTransform.value.copy(x.matrix))}function l(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.rotation.value=f.rotation,f.map&&(p.map.value=f.map),f.alphaMap&&(p.alphaMap.value=f.alphaMap),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);let _;f.map?_=f.map:f.alphaMap&&(_=f.alphaMap),_!==void 0&&(_.matrixAutoUpdate===!0&&_.updateMatrix(),p.uvTransform.value.copy(_.matrix))}function c(p,f){p.specular.value.copy(f.specular),p.shininess.value=Math.max(f.shininess,1e-4)}function u(p,f){f.gradientMap&&(p.gradientMap.value=f.gradientMap)}function h(p,f){p.roughness.value=f.roughness,p.metalness.value=f.metalness,f.roughnessMap&&(p.roughnessMap.value=f.roughnessMap),f.metalnessMap&&(p.metalnessMap.value=f.metalnessMap),e.get(f).envMap&&(p.envMapIntensity.value=f.envMapIntensity)}function d(p,f,_){p.ior.value=f.ior,f.sheen>0&&(p.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),p.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(p.sheenColorMap.value=f.sheenColorMap),f.sheenRoughnessMap&&(p.sheenRoughnessMap.value=f.sheenRoughnessMap)),f.clearcoat>0&&(p.clearcoat.value=f.clearcoat,p.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(p.clearcoatMap.value=f.clearcoatMap),f.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap),f.clearcoatNormalMap&&(p.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),p.clearcoatNormalMap.value=f.clearcoatNormalMap,f.side===en&&p.clearcoatNormalScale.value.negate())),f.iridescence>0&&(p.iridescence.value=f.iridescence,p.iridescenceIOR.value=f.iridescenceIOR,p.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(p.iridescenceMap.value=f.iridescenceMap),f.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=f.iridescenceThicknessMap)),f.transmission>0&&(p.transmission.value=f.transmission,p.transmissionSamplerMap.value=_.texture,p.transmissionSamplerSize.value.set(_.width,_.height),f.transmissionMap&&(p.transmissionMap.value=f.transmissionMap),p.thickness.value=f.thickness,f.thicknessMap&&(p.thicknessMap.value=f.thicknessMap),p.attenuationDistance.value=f.attenuationDistance,p.attenuationColor.value.copy(f.attenuationColor)),p.specularIntensity.value=f.specularIntensity,p.specularColor.value.copy(f.specularColor),f.specularIntensityMap&&(p.specularIntensityMap.value=f.specularIntensityMap),f.specularColorMap&&(p.specularColorMap.value=f.specularColorMap)}function m(p,f){f.matcap&&(p.matcap.value=f.matcap)}function g(p,f){p.referencePosition.value.copy(f.referencePosition),p.nearDistance.value=f.nearDistance,p.farDistance.value=f.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:n}}function fy(i,e,t,n){let s={},r={},a=[];const o=t.isWebGL2?i.getParameter(35375):0;function l(S,x){const b=x.program;n.uniformBlockBinding(S,b)}function c(S,x){let b=s[S.id];b===void 0&&(g(S),b=u(S),s[S.id]=b,S.addEventListener("dispose",f));const M=x.program;n.updateUBOMapping(S,M);const R=e.render.frame;r[S.id]!==R&&(d(S),r[S.id]=R)}function u(S){const x=h();S.__bindingPointIndex=x;const b=i.createBuffer(),M=S.__size,R=S.usage;return i.bindBuffer(35345,b),i.bufferData(35345,M,R),i.bindBuffer(35345,null),i.bindBufferBase(35345,x,b),b}function h(){for(let S=0;S<o;S++)if(a.indexOf(S)===-1)return a.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(S){const x=s[S.id],b=S.uniforms,M=S.__cache;i.bindBuffer(35345,x);for(let R=0,I=b.length;R<I;R++){const v=b[R];if(m(v,R,M)===!0){const A=v.value,D=v.__offset;typeof A=="number"?(v.__data[0]=A,i.bufferSubData(35345,D,v.__data)):(v.value.isMatrix3?(v.__data[0]=v.value.elements[0],v.__data[1]=v.value.elements[1],v.__data[2]=v.value.elements[2],v.__data[3]=v.value.elements[0],v.__data[4]=v.value.elements[3],v.__data[5]=v.value.elements[4],v.__data[6]=v.value.elements[5],v.__data[7]=v.value.elements[0],v.__data[8]=v.value.elements[6],v.__data[9]=v.value.elements[7],v.__data[10]=v.value.elements[8],v.__data[11]=v.value.elements[0]):A.toArray(v.__data),i.bufferSubData(35345,D,v.__data))}}i.bindBuffer(35345,null)}function m(S,x,b){const M=S.value;if(b[x]===void 0)return typeof M=="number"?b[x]=M:b[x]=M.clone(),!0;if(typeof M=="number"){if(b[x]!==M)return b[x]=M,!0}else{const R=b[x];if(R.equals(M)===!1)return R.copy(M),!0}return!1}function g(S){const x=S.uniforms;let b=0;const M=16;let R=0;for(let I=0,v=x.length;I<v;I++){const A=x[I],D=p(A);if(A.__data=new Float32Array(D.storage/Float32Array.BYTES_PER_ELEMENT),A.__offset=b,I>0){R=b%M;const X=M-R;R!==0&&X-D.boundary<0&&(b+=M-R,A.__offset=b)}b+=D.storage}return R=b%M,R>0&&(b+=M-R),S.__size=b,S.__cache={},this}function p(S){const x=S.value,b={boundary:0,storage:0};return typeof x=="number"?(b.boundary=4,b.storage=4):x.isVector2?(b.boundary=8,b.storage=8):x.isVector3||x.isColor?(b.boundary=16,b.storage=12):x.isVector4?(b.boundary=16,b.storage=16):x.isMatrix3?(b.boundary=48,b.storage=48):x.isMatrix4?(b.boundary=64,b.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),b}function f(S){const x=S.target;x.removeEventListener("dispose",f);const b=a.indexOf(x.__bindingPointIndex);a.splice(b,1),i.deleteBuffer(s[x.id]),delete s[x.id],delete r[x.id]}function _(){for(const S in s)i.deleteBuffer(s[S]);a=[],s={},r={}}return{bind:l,update:c,dispose:_}}function py(){const i=ir("canvas");return i.style.display="block",i}function od(i={}){this.isWebGLRenderer=!0;const e=i.canvas!==void 0?i.canvas:py(),t=i.context!==void 0?i.context:null,n=i.depth!==void 0?i.depth:!0,s=i.stencil!==void 0?i.stencil:!0,r=i.antialias!==void 0?i.antialias:!1,a=i.premultipliedAlpha!==void 0?i.premultipliedAlpha:!0,o=i.preserveDrawingBuffer!==void 0?i.preserveDrawingBuffer:!1,l=i.powerPreference!==void 0?i.powerPreference:"default",c=i.failIfMajorPerformanceCaveat!==void 0?i.failIfMajorPerformanceCaveat:!1;let u;t!==null?u=t.getContextAttributes().alpha:u=i.alpha!==void 0?i.alpha:!1;let h=null,d=null;const m=[],g=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=Ni,this.physicallyCorrectLights=!1,this.toneMapping=zn,this.toneMappingExposure=1,Object.defineProperties(this,{gammaFactor:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaFactor has been removed."),2},set:function(){console.warn("THREE.WebGLRenderer: .gammaFactor has been removed.")}}});const p=this;let f=!1,_=0,S=0,x=null,b=-1,M=null;const R=new tt,I=new tt;let v=null,A=e.width,D=e.height,X=1,le=null,k=null;const U=new tt(0,0,A,D),Y=new tt(0,0,A,D);let ie=!1;const te=new yl;let G=!1,z=!1,W=null;const ce=new ze,re=new Te,ue=new P,Me={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Re(){return x===null?X:1}let q=t;function He(T,V){for(let K=0;K<T.length;K++){const B=T[K],ee=e.getContext(B,V);if(ee!==null)return ee}return null}try{const T={alpha:!0,depth:n,stencil:s,antialias:r,premultipliedAlpha:a,preserveDrawingBuffer:o,powerPreference:l,failIfMajorPerformanceCaveat:c};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${ml}`),e.addEventListener("webglcontextlost",Se,!1),e.addEventListener("webglcontextrestored",xe,!1),e.addEventListener("webglcontextcreationerror",Pe,!1),q===null){const V=["webgl2","webgl","experimental-webgl"];if(p.isWebGL1Renderer===!0&&V.shift(),q=He(V,T),q===null)throw He(V)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}q.getShaderPrecisionFormat===void 0&&(q.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let Le,Ee,ve,Ge,E,L,H,Z,$,oe,he,ne,de,se,w,y,F,j,J,ae,me,C,O,ge;function ye(){Le=new E0(q),Ee=new y0(q,Le,i),Le.init(Ee),C=new ly(q,Le,Ee),ve=new ay(q,Le,Ee),Ge=new L0,E=new Xv,L=new oy(q,Le,ve,E,Ee,C,Ge),H=new M0(p),Z=new T0(p),$=new zg(q,Ee),O=new x0(q,Le,$,Ee),oe=new A0(q,$,Ge,O),he=new I0(q,oe,$,Ge),J=new D0(q,Ee,L),y=new b0(E),ne=new jv(p,H,Z,Le,Ee,O,y),de=new dy(p,E),se=new $v,w=new ey(Le,Ee),j=new _0(p,H,Z,ve,he,u,a),F=new ry(p,he,Ee),ge=new fy(q,Ge,Ee,ve),ae=new v0(q,Le,Ge,Ee),me=new C0(q,Le,Ge,Ee),Ge.programs=ne.programs,p.capabilities=Ee,p.extensions=Le,p.properties=E,p.renderLists=se,p.shadowMap=F,p.state=ve,p.info=Ge}ye();const _e=new hy(p,q);this.xr=_e,this.getContext=function(){return q},this.getContextAttributes=function(){return q.getContextAttributes()},this.forceContextLoss=function(){const T=Le.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=Le.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(T){T!==void 0&&(X=T,this.setSize(A,D,!1))},this.getSize=function(T){return T.set(A,D)},this.setSize=function(T,V,K){if(_e.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}A=T,D=V,e.width=Math.floor(T*X),e.height=Math.floor(V*X),K!==!1&&(e.style.width=T+"px",e.style.height=V+"px"),this.setViewport(0,0,T,V)},this.getDrawingBufferSize=function(T){return T.set(A*X,D*X).floor()},this.setDrawingBufferSize=function(T,V,K){A=T,D=V,X=K,e.width=Math.floor(T*K),e.height=Math.floor(V*K),this.setViewport(0,0,T,V)},this.getCurrentViewport=function(T){return T.copy(R)},this.getViewport=function(T){return T.copy(U)},this.setViewport=function(T,V,K,B){T.isVector4?U.set(T.x,T.y,T.z,T.w):U.set(T,V,K,B),ve.viewport(R.copy(U).multiplyScalar(X).floor())},this.getScissor=function(T){return T.copy(Y)},this.setScissor=function(T,V,K,B){T.isVector4?Y.set(T.x,T.y,T.z,T.w):Y.set(T,V,K,B),ve.scissor(I.copy(Y).multiplyScalar(X).floor())},this.getScissorTest=function(){return ie},this.setScissorTest=function(T){ve.setScissorTest(ie=T)},this.setOpaqueSort=function(T){le=T},this.setTransparentSort=function(T){k=T},this.getClearColor=function(T){return T.copy(j.getClearColor())},this.setClearColor=function(){j.setClearColor.apply(j,arguments)},this.getClearAlpha=function(){return j.getClearAlpha()},this.setClearAlpha=function(){j.setClearAlpha.apply(j,arguments)},this.clear=function(T=!0,V=!0,K=!0){let B=0;T&&(B|=16384),V&&(B|=256),K&&(B|=1024),q.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Se,!1),e.removeEventListener("webglcontextrestored",xe,!1),e.removeEventListener("webglcontextcreationerror",Pe,!1),se.dispose(),w.dispose(),E.dispose(),H.dispose(),Z.dispose(),he.dispose(),O.dispose(),ge.dispose(),ne.dispose(),_e.dispose(),_e.removeEventListener("sessionstart",be),_e.removeEventListener("sessionend",we),W&&(W.dispose(),W=null),Xe.stop()};function Se(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),f=!0}function xe(){console.log("THREE.WebGLRenderer: Context Restored."),f=!1;const T=Ge.autoReset,V=F.enabled,K=F.autoUpdate,B=F.needsUpdate,ee=F.type;ye(),Ge.autoReset=T,F.enabled=V,F.autoUpdate=K,F.needsUpdate=B,F.type=ee}function Pe(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Be(T){const V=T.target;V.removeEventListener("dispose",Be),Qe(V)}function Qe(T){N(T),E.remove(T)}function N(T){const V=E.get(T).programs;V!==void 0&&(V.forEach(function(K){ne.releaseProgram(K)}),T.isShaderMaterial&&ne.releaseShaderCache(T))}this.renderBufferDirect=function(T,V,K,B,ee,Ae){V===null&&(V=Me);const De=ee.isMesh&&ee.matrixWorld.determinant()<0,Oe=Md(T,V,K,B,ee);ve.setMaterial(B,De);let Ie=K.index;const qe=K.attributes.position;if(Ie===null){if(qe===void 0||qe.count===0)return}else if(Ie.count===0)return;let Ve=1;B.wireframe===!0&&(Ie=oe.getWireframeAttribute(K),Ve=2),O.setup(ee,B,Oe,K,Ie);let We,at=ae;Ie!==null&&(We=$.get(Ie),at=me,at.setIndex(We));const li=Ie!==null?Ie.count:qe.count,zi=K.drawRange.start*Ve,Bi=K.drawRange.count*Ve,fn=Ae!==null?Ae.start*Ve:0,$e=Ae!==null?Ae.count*Ve:1/0,ki=Math.max(zi,fn),lt=Math.min(li,zi+Bi,fn+$e)-1,Xt=Math.max(0,lt-ki+1);if(Xt!==0){if(ee.isMesh)B.wireframe===!0?(ve.setLineWidth(B.wireframeLinewidth*Re()),at.setMode(1)):at.setMode(4);else if(ee.isLine){let Vn=B.linewidth;Vn===void 0&&(Vn=1),ve.setLineWidth(Vn*Re()),ee.isLineSegments?at.setMode(1):ee.isLineLoop?at.setMode(2):at.setMode(3)}else ee.isPoints?at.setMode(0):ee.isSprite&&at.setMode(4);if(ee.isInstancedMesh)at.renderInstances(ki,Xt,ee.count);else if(K.isInstancedBufferGeometry){const Vn=Math.min(K.instanceCount,K._maxInstanceCount);at.renderInstances(ki,Xt,Vn)}else at.render(ki,Xt)}},this.compile=function(T,V){function K(B,ee,Ae){B.transparent===!0&&B.side===Nn?(B.side=en,B.needsUpdate=!0,jt(B,ee,Ae),B.side=Di,B.needsUpdate=!0,jt(B,ee,Ae),B.side=Nn):jt(B,ee,Ae)}d=w.get(T),d.init(),g.push(d),T.traverseVisible(function(B){B.isLight&&B.layers.test(V.layers)&&(d.pushLight(B),B.castShadow&&d.pushShadow(B))}),d.setupLights(p.physicallyCorrectLights),T.traverse(function(B){const ee=B.material;if(ee)if(Array.isArray(ee))for(let Ae=0;Ae<ee.length;Ae++){const De=ee[Ae];K(De,T,B)}else K(ee,T,B)}),g.pop(),d=null};let Q=null;function fe(T){Q&&Q(T)}function be(){Xe.stop()}function we(){Xe.start()}const Xe=new td;Xe.setAnimationLoop(fe),typeof self<"u"&&Xe.setContext(self),this.setAnimationLoop=function(T){Q=T,_e.setAnimationLoop(T),T===null?Xe.stop():Xe.start()},_e.addEventListener("sessionstart",be),_e.addEventListener("sessionend",we),this.render=function(T,V){if(V!==void 0&&V.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(f===!0)return;T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),_e.enabled===!0&&_e.isPresenting===!0&&(_e.cameraAutoUpdate===!0&&_e.updateCamera(V),V=_e.getCamera()),T.isScene===!0&&T.onBeforeRender(p,T,V,x),d=w.get(T,g.length),d.init(),g.push(d),ce.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),te.setFromProjectionMatrix(ce),z=this.localClippingEnabled,G=y.init(this.clippingPlanes,z,V),h=se.get(T,m.length),h.init(),m.push(h),mt(T,V,0,p.sortObjects),h.finish(),p.sortObjects===!0&&h.sort(le,k),G===!0&&y.beginShadows();const K=d.state.shadowsArray;if(F.render(K,T,V),G===!0&&y.endShadows(),this.info.autoReset===!0&&this.info.reset(),j.render(h,T),d.setupLights(p.physicallyCorrectLights),V.isArrayCamera){const B=V.cameras;for(let ee=0,Ae=B.length;ee<Ae;ee++){const De=B[ee];yt(h,T,De,De.viewport)}}else yt(h,T,V);x!==null&&(L.updateMultisampleRenderTarget(x),L.updateRenderTargetMipmap(x)),T.isScene===!0&&T.onAfterRender(p,T,V),O.resetDefaultState(),b=-1,M=null,g.pop(),g.length>0?d=g[g.length-1]:d=null,m.pop(),m.length>0?h=m[m.length-1]:h=null};function mt(T,V,K,B){if(T.visible===!1)return;if(T.layers.test(V.layers)){if(T.isGroup)K=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(V);else if(T.isLight)d.pushLight(T),T.castShadow&&d.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||te.intersectsSprite(T)){B&&ue.setFromMatrixPosition(T.matrixWorld).applyMatrix4(ce);const De=he.update(T),Oe=T.material;Oe.visible&&h.push(T,De,Oe,K,ue.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(T.isSkinnedMesh&&T.skeleton.frame!==Ge.render.frame&&(T.skeleton.update(),T.skeleton.frame=Ge.render.frame),!T.frustumCulled||te.intersectsObject(T))){B&&ue.setFromMatrixPosition(T.matrixWorld).applyMatrix4(ce);const De=he.update(T),Oe=T.material;if(Array.isArray(Oe)){const Ie=De.groups;for(let qe=0,Ve=Ie.length;qe<Ve;qe++){const We=Ie[qe],at=Oe[We.materialIndex];at&&at.visible&&h.push(T,De,at,K,ue.z,We)}}else Oe.visible&&h.push(T,De,Oe,K,ue.z,null)}}const Ae=T.children;for(let De=0,Oe=Ae.length;De<Oe;De++)mt(Ae[De],V,K,B)}function yt(T,V,K,B){const ee=T.opaque,Ae=T.transmissive,De=T.transparent;d.setupLightsView(K),Ae.length>0&&oi(ee,V,K),B&&ve.viewport(R.copy(B)),ee.length>0&&it(ee,V,K),Ae.length>0&&it(Ae,V,K),De.length>0&&it(De,V,K),ve.buffers.depth.setTest(!0),ve.buffers.depth.setMask(!0),ve.buffers.color.setMask(!0),ve.setPolygonOffset(!1)}function oi(T,V,K){const B=Ee.isWebGL2;W===null&&(W=new Vt(1,1,{generateMipmaps:!0,type:Le.has("EXT_color_buffer_half_float")?ps:Ii,minFilter:Ms,samples:B&&r===!0?4:0})),p.getDrawingBufferSize(re),B?W.setSize(re.x,re.y):W.setSize(aa(re.x),aa(re.y));const ee=p.getRenderTarget();p.setRenderTarget(W),p.clear();const Ae=p.toneMapping;p.toneMapping=zn,it(T,V,K),p.toneMapping=Ae,L.updateMultisampleRenderTarget(W),L.updateRenderTargetMipmap(W),p.setRenderTarget(ee)}function it(T,V,K){const B=V.isScene===!0?V.overrideMaterial:null;for(let ee=0,Ae=T.length;ee<Ae;ee++){const De=T[ee],Oe=De.object,Ie=De.geometry,qe=B===null?De.material:B,Ve=De.group;Oe.layers.test(K.layers)&&Sn(Oe,V,K,Ie,qe,Ve)}}function Sn(T,V,K,B,ee,Ae){T.onBeforeRender(p,V,K,B,ee,Ae),T.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),ee.onBeforeRender(p,V,K,B,T,Ae),ee.transparent===!0&&ee.side===Nn?(ee.side=en,ee.needsUpdate=!0,p.renderBufferDirect(K,V,B,ee,T,Ae),ee.side=Di,ee.needsUpdate=!0,p.renderBufferDirect(K,V,B,ee,T,Ae),ee.side=Nn):p.renderBufferDirect(K,V,B,ee,T,Ae),T.onAfterRender(p,V,K,B,ee,Ae)}function jt(T,V,K){V.isScene!==!0&&(V=Me);const B=E.get(T),ee=d.state.lights,Ae=d.state.shadowsArray,De=ee.state.version,Oe=ne.getParameters(T,ee.state,Ae,V,K),Ie=ne.getProgramCacheKey(Oe);let qe=B.programs;B.environment=T.isMeshStandardMaterial?V.environment:null,B.fog=V.fog,B.envMap=(T.isMeshStandardMaterial?Z:H).get(T.envMap||B.environment),qe===void 0&&(T.addEventListener("dispose",Be),qe=new Map,B.programs=qe);let Ve=qe.get(Ie);if(Ve!==void 0){if(B.currentProgram===Ve&&B.lightsStateVersion===De)return Il(T,Oe),Ve}else Oe.uniforms=ne.getUniforms(T),T.onBuild(K,Oe,p),T.onBeforeCompile(Oe,p),Ve=ne.acquireProgram(Oe,Ie),qe.set(Ie,Ve),B.uniforms=Oe.uniforms;const We=B.uniforms;(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(We.clippingPlanes=y.uniform),Il(T,Oe),B.needsLights=wd(T),B.lightsStateVersion=De,B.needsLights&&(We.ambientLightColor.value=ee.state.ambient,We.lightProbe.value=ee.state.probe,We.directionalLights.value=ee.state.directional,We.directionalLightShadows.value=ee.state.directionalShadow,We.spotLights.value=ee.state.spot,We.spotLightShadows.value=ee.state.spotShadow,We.rectAreaLights.value=ee.state.rectArea,We.ltc_1.value=ee.state.rectAreaLTC1,We.ltc_2.value=ee.state.rectAreaLTC2,We.pointLights.value=ee.state.point,We.pointLightShadows.value=ee.state.pointShadow,We.hemisphereLights.value=ee.state.hemi,We.directionalShadowMap.value=ee.state.directionalShadowMap,We.directionalShadowMatrix.value=ee.state.directionalShadowMatrix,We.spotShadowMap.value=ee.state.spotShadowMap,We.spotLightMatrix.value=ee.state.spotLightMatrix,We.spotLightMap.value=ee.state.spotLightMap,We.pointShadowMap.value=ee.state.pointShadowMap,We.pointShadowMatrix.value=ee.state.pointShadowMatrix);const at=Ve.getUniforms(),li=Jr.seqWithValue(at.seq,We);return B.currentProgram=Ve,B.uniformsList=li,Ve}function Il(T,V){const K=E.get(T);K.outputEncoding=V.outputEncoding,K.instancing=V.instancing,K.skinning=V.skinning,K.morphTargets=V.morphTargets,K.morphNormals=V.morphNormals,K.morphColors=V.morphColors,K.morphTargetsCount=V.morphTargetsCount,K.numClippingPlanes=V.numClippingPlanes,K.numIntersection=V.numClipIntersection,K.vertexAlphas=V.vertexAlphas,K.vertexTangents=V.vertexTangents,K.toneMapping=V.toneMapping}function Md(T,V,K,B,ee){V.isScene!==!0&&(V=Me),L.resetTextureUnits();const Ae=V.fog,De=B.isMeshStandardMaterial?V.environment:null,Oe=x===null?p.outputEncoding:x.isXRRenderTarget===!0?x.texture.encoding:Ni,Ie=(B.isMeshStandardMaterial?Z:H).get(B.envMap||De),qe=B.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,Ve=!!B.normalMap&&!!K.attributes.tangent,We=!!K.morphAttributes.position,at=!!K.morphAttributes.normal,li=!!K.morphAttributes.color,zi=B.toneMapped?p.toneMapping:zn,Bi=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,fn=Bi!==void 0?Bi.length:0,$e=E.get(B),ki=d.state.lights;if(G===!0&&(z===!0||T!==M)){const zt=T===M&&B.id===b;y.setState(B,T,zt)}let lt=!1;B.version===$e.__version?($e.needsLights&&$e.lightsStateVersion!==ki.state.version||$e.outputEncoding!==Oe||ee.isInstancedMesh&&$e.instancing===!1||!ee.isInstancedMesh&&$e.instancing===!0||ee.isSkinnedMesh&&$e.skinning===!1||!ee.isSkinnedMesh&&$e.skinning===!0||$e.envMap!==Ie||B.fog===!0&&$e.fog!==Ae||$e.numClippingPlanes!==void 0&&($e.numClippingPlanes!==y.numPlanes||$e.numIntersection!==y.numIntersection)||$e.vertexAlphas!==qe||$e.vertexTangents!==Ve||$e.morphTargets!==We||$e.morphNormals!==at||$e.morphColors!==li||$e.toneMapping!==zi||Ee.isWebGL2===!0&&$e.morphTargetsCount!==fn)&&(lt=!0):(lt=!0,$e.__version=B.version);let Xt=$e.currentProgram;lt===!0&&(Xt=jt(B,V,ee));let Vn=!1,Ps=!1,ya=!1;const Et=Xt.getUniforms(),ci=$e.uniforms;if(ve.useProgram(Xt.program)&&(Vn=!0,Ps=!0,ya=!0),B.id!==b&&(b=B.id,Ps=!0),Vn||M!==T){if(Et.setValue(q,"projectionMatrix",T.projectionMatrix),Ee.logarithmicDepthBuffer&&Et.setValue(q,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),M!==T&&(M=T,Ps=!0,ya=!0),B.isShaderMaterial||B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshStandardMaterial||B.envMap){const zt=Et.map.cameraPosition;zt!==void 0&&zt.setValue(q,ue.setFromMatrixPosition(T.matrixWorld))}(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&Et.setValue(q,"isOrthographic",T.isOrthographicCamera===!0),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial||B.isShadowMaterial||ee.isSkinnedMesh)&&Et.setValue(q,"viewMatrix",T.matrixWorldInverse)}if(ee.isSkinnedMesh){Et.setOptional(q,ee,"bindMatrix"),Et.setOptional(q,ee,"bindMatrixInverse");const zt=ee.skeleton;zt&&(Ee.floatVertexTextures?(zt.boneTexture===null&&zt.computeBoneTexture(),Et.setValue(q,"boneTexture",zt.boneTexture,L),Et.setValue(q,"boneTextureSize",zt.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const ba=K.morphAttributes;if((ba.position!==void 0||ba.normal!==void 0||ba.color!==void 0&&Ee.isWebGL2===!0)&&J.update(ee,K,B,Xt),(Ps||$e.receiveShadow!==ee.receiveShadow)&&($e.receiveShadow=ee.receiveShadow,Et.setValue(q,"receiveShadow",ee.receiveShadow)),B.isMeshGouraudMaterial&&B.envMap!==null&&(ci.envMap.value=Ie,ci.flipEnvMap.value=Ie.isCubeTexture&&Ie.isRenderTargetTexture===!1?-1:1),Ps&&(Et.setValue(q,"toneMappingExposure",p.toneMappingExposure),$e.needsLights&&Sd(ci,ya),Ae&&B.fog===!0&&de.refreshFogUniforms(ci,Ae),de.refreshMaterialUniforms(ci,B,X,D,W),Jr.upload(q,$e.uniformsList,ci,L)),B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(Jr.upload(q,$e.uniformsList,ci,L),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&Et.setValue(q,"center",ee.center),Et.setValue(q,"modelViewMatrix",ee.modelViewMatrix),Et.setValue(q,"normalMatrix",ee.normalMatrix),Et.setValue(q,"modelMatrix",ee.matrixWorld),B.isShaderMaterial||B.isRawShaderMaterial){const zt=B.uniformsGroups;for(let Ma=0,Td=zt.length;Ma<Td;Ma++)if(Ee.isWebGL2){const Nl=zt[Ma];ge.update(Nl,Xt),ge.bind(Nl,Xt)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Xt}function Sd(T,V){T.ambientLightColor.needsUpdate=V,T.lightProbe.needsUpdate=V,T.directionalLights.needsUpdate=V,T.directionalLightShadows.needsUpdate=V,T.pointLights.needsUpdate=V,T.pointLightShadows.needsUpdate=V,T.spotLights.needsUpdate=V,T.spotLightShadows.needsUpdate=V,T.rectAreaLights.needsUpdate=V,T.hemisphereLights.needsUpdate=V}function wd(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return _},this.getActiveMipmapLevel=function(){return S},this.getRenderTarget=function(){return x},this.setRenderTargetTextures=function(T,V,K){E.get(T.texture).__webglTexture=V,E.get(T.depthTexture).__webglTexture=K;const B=E.get(T);B.__hasExternalTextures=!0,B.__hasExternalTextures&&(B.__autoAllocateDepthBuffer=K===void 0,B.__autoAllocateDepthBuffer||Le.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),B.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(T,V){const K=E.get(T);K.__webglFramebuffer=V,K.__useDefaultFramebuffer=V===void 0},this.setRenderTarget=function(T,V=0,K=0){x=T,_=V,S=K;let B=!0,ee=null,Ae=!1,De=!1;if(T){const Ie=E.get(T);Ie.__useDefaultFramebuffer!==void 0?(ve.bindFramebuffer(36160,null),B=!1):Ie.__webglFramebuffer===void 0?L.setupRenderTarget(T):Ie.__hasExternalTextures&&L.rebindTextures(T,E.get(T.texture).__webglTexture,E.get(T.depthTexture).__webglTexture);const qe=T.texture;(qe.isData3DTexture||qe.isDataArrayTexture||qe.isCompressedArrayTexture)&&(De=!0);const Ve=E.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(ee=Ve[V],Ae=!0):Ee.isWebGL2&&T.samples>0&&L.useMultisampledRTT(T)===!1?ee=E.get(T).__webglMultisampledFramebuffer:ee=Ve,R.copy(T.viewport),I.copy(T.scissor),v=T.scissorTest}else R.copy(U).multiplyScalar(X).floor(),I.copy(Y).multiplyScalar(X).floor(),v=ie;if(ve.bindFramebuffer(36160,ee)&&Ee.drawBuffers&&B&&ve.drawBuffers(T,ee),ve.viewport(R),ve.scissor(I),ve.setScissorTest(v),Ae){const Ie=E.get(T.texture);q.framebufferTexture2D(36160,36064,34069+V,Ie.__webglTexture,K)}else if(De){const Ie=E.get(T.texture),qe=V||0;q.framebufferTextureLayer(36160,36064,Ie.__webglTexture,K||0,qe)}b=-1},this.readRenderTargetPixels=function(T,V,K,B,ee,Ae,De){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Oe=E.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&De!==void 0&&(Oe=Oe[De]),Oe){ve.bindFramebuffer(36160,Oe);try{const Ie=T.texture,qe=Ie.format,Ve=Ie.type;if(qe!==Zt&&C.convert(qe)!==q.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const We=Ve===ps&&(Le.has("EXT_color_buffer_half_float")||Ee.isWebGL2&&Le.has("EXT_color_buffer_float"));if(Ve!==Ii&&C.convert(Ve)!==q.getParameter(35738)&&!(Ve===ti&&(Ee.isWebGL2||Le.has("OES_texture_float")||Le.has("WEBGL_color_buffer_float")))&&!We){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=T.width-B&&K>=0&&K<=T.height-ee&&q.readPixels(V,K,B,ee,C.convert(qe),C.convert(Ve),Ae)}finally{const Ie=x!==null?E.get(x).__webglFramebuffer:null;ve.bindFramebuffer(36160,Ie)}}},this.copyFramebufferToTexture=function(T,V,K=0){const B=Math.pow(2,-K),ee=Math.floor(V.image.width*B),Ae=Math.floor(V.image.height*B);L.setTexture2D(V,0),q.copyTexSubImage2D(3553,K,0,0,T.x,T.y,ee,Ae),ve.unbindTexture()},this.copyTextureToTexture=function(T,V,K,B=0){const ee=V.image.width,Ae=V.image.height,De=C.convert(K.format),Oe=C.convert(K.type);L.setTexture2D(K,0),q.pixelStorei(37440,K.flipY),q.pixelStorei(37441,K.premultiplyAlpha),q.pixelStorei(3317,K.unpackAlignment),V.isDataTexture?q.texSubImage2D(3553,B,T.x,T.y,ee,Ae,De,Oe,V.image.data):V.isCompressedTexture?q.compressedTexSubImage2D(3553,B,T.x,T.y,V.mipmaps[0].width,V.mipmaps[0].height,De,V.mipmaps[0].data):q.texSubImage2D(3553,B,T.x,T.y,De,Oe,V.image),B===0&&K.generateMipmaps&&q.generateMipmap(3553),ve.unbindTexture()},this.copyTextureToTexture3D=function(T,V,K,B,ee=0){if(p.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Ae=T.max.x-T.min.x+1,De=T.max.y-T.min.y+1,Oe=T.max.z-T.min.z+1,Ie=C.convert(B.format),qe=C.convert(B.type);let Ve;if(B.isData3DTexture)L.setTexture3D(B,0),Ve=32879;else if(B.isDataArrayTexture)L.setTexture2DArray(B,0),Ve=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}q.pixelStorei(37440,B.flipY),q.pixelStorei(37441,B.premultiplyAlpha),q.pixelStorei(3317,B.unpackAlignment);const We=q.getParameter(3314),at=q.getParameter(32878),li=q.getParameter(3316),zi=q.getParameter(3315),Bi=q.getParameter(32877),fn=K.isCompressedTexture?K.mipmaps[0]:K.image;q.pixelStorei(3314,fn.width),q.pixelStorei(32878,fn.height),q.pixelStorei(3316,T.min.x),q.pixelStorei(3315,T.min.y),q.pixelStorei(32877,T.min.z),K.isDataTexture||K.isData3DTexture?q.texSubImage3D(Ve,ee,V.x,V.y,V.z,Ae,De,Oe,Ie,qe,fn.data):K.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),q.compressedTexSubImage3D(Ve,ee,V.x,V.y,V.z,Ae,De,Oe,Ie,fn.data)):q.texSubImage3D(Ve,ee,V.x,V.y,V.z,Ae,De,Oe,Ie,qe,fn),q.pixelStorei(3314,We),q.pixelStorei(32878,at),q.pixelStorei(3316,li),q.pixelStorei(3315,zi),q.pixelStorei(32877,Bi),ee===0&&B.generateMipmaps&&q.generateMipmap(Ve),ve.unbindTexture()},this.initTexture=function(T){T.isCubeTexture?L.setTextureCube(T,0):T.isData3DTexture?L.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?L.setTexture2DArray(T,0):L.setTexture2D(T,0),ve.unbindTexture()},this.resetState=function(){_=0,S=0,x=null,ve.reset(),O.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class my extends od{}my.prototype.isWebGL1Renderer=!0;class Ml{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Ce(e),this.near=t,this.far=n}clone(){return new Ml(this.color,this.near,this.far)}toJSON(){return{type:"Fog",color:this.color.getHex(),near:this.near,far:this.far}}}class gy extends rt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.backgroundBlurriness=this.backgroundBlurriness),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class _y{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Oo,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=dn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=dn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=dn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const At=new P;class Sl{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s===!0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)At.fromBufferAttribute(this,t),At.applyMatrix4(e),this.setXYZ(t,At.x,At.y,At.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)At.fromBufferAttribute(this,t),At.applyNormalMatrix(e),this.setXYZ(t,At.x,At.y,At.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)At.fromBufferAttribute(this,t),At.transformDirection(e),this.setXYZ(t,At.x,At.y,At.z);return this}setX(e,t){return this.normalized&&(t=et(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=et(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=et(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=et(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Fn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Fn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Fn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Fn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=et(t,this.array),n=et(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=et(t,this.array),n=et(n,this.array),s=et(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=et(t,this.array),n=et(n,this.array),s=et(s,this.array),r=et(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will deinterleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Ut(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Sl(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will deinterleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const xu=new P,vu=new tt,yu=new tt,xy=new P,bu=new ze;class vy extends xt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new ze,this.bindMatrixInverse=new ze}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new tt,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode==="attached"?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode==="detached"?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}boneTransform(e,t){const n=this.skeleton,s=this.geometry;vu.fromBufferAttribute(s.attributes.skinIndex,e),yu.fromBufferAttribute(s.attributes.skinWeight,e),xu.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const a=yu.getComponent(r);if(a!==0){const o=vu.getComponent(r);bu.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(xy.copy(xu).applyMatrix4(bu),a)}}return t.applyMatrix4(this.bindMatrixInverse)}}class ld extends rt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class yy extends It{constructor(e=null,t=1,n=1,s,r,a,o,l,c=Ze,u=Ze,h,d){super(null,a,o,l,c,u,s,r,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Mu=new ze,by=new ze;class wl{constructor(e=[],t=[]){this.uuid=dn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.boneTextureSize=0,this.frame=-1,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new ze)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new ze;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,a=e.length;r<a;r++){const o=e[r]?e[r].matrixWorld:by;Mu.multiplyMatrices(o,t[r]),Mu.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new wl(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Wh(e),e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new yy(t,e,e,Zt,ti);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this.boneTextureSize=e,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){const r=e.bones[n];let a=t[r];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),a=new ld),this.bones.push(a),this.boneInverses.push(new ze().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.5,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){const a=t[s];e.bones.push(a.uuid);const o=n[s];e.boneInverses.push(o.toArray())}return e}}class Su extends Ut{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const wu=new ze,Tu=new ze,kr=[],My=new ze,Os=new xt;class Sy extends xt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Su(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.frustumCulled=!1;for(let s=0;s<n;s++)this.setMatrixAt(s,My)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){const n=this.matrixWorld,s=this.count;if(Os.geometry=this.geometry,Os.material=this.material,Os.material!==void 0)for(let r=0;r<s;r++){this.getMatrixAt(r,wu),Tu.multiplyMatrices(n,wu),Os.matrixWorld=Tu,Os.raycast(e,kr);for(let a=0,o=kr.length;a<o;a++){const l=kr[a];l.instanceId=r,l.object=this,t.push(l)}kr.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Su(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class cd extends Ht{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ce(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Eu=new P,Au=new P,Cu=new ze,lo=new vl,Vr=new Ts;class Tl extends rt{constructor(e=new Wt,t=new cd){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)Eu.fromBufferAttribute(t,s-1),Au.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=Eu.distanceTo(Au);e.setAttribute("lineDistance",new wt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Vr.copy(n.boundingSphere),Vr.applyMatrix4(s),Vr.radius+=r,e.ray.intersectsSphere(Vr)===!1)return;Cu.copy(s).invert(),lo.copy(e.ray).applyMatrix4(Cu);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=new P,u=new P,h=new P,d=new P,m=this.isLineSegments?2:1,g=n.index,f=n.attributes.position;if(g!==null){const _=Math.max(0,a.start),S=Math.min(g.count,a.start+a.count);for(let x=_,b=S-1;x<b;x+=m){const M=g.getX(x),R=g.getX(x+1);if(c.fromBufferAttribute(f,M),u.fromBufferAttribute(f,R),lo.distanceSqToSegment(c,u,d,h)>l)continue;d.applyMatrix4(this.matrixWorld);const v=e.ray.origin.distanceTo(d);v<e.near||v>e.far||t.push({distance:v,point:h.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}else{const _=Math.max(0,a.start),S=Math.min(f.count,a.start+a.count);for(let x=_,b=S-1;x<b;x+=m){if(c.fromBufferAttribute(f,x),u.fromBufferAttribute(f,x+1),lo.distanceSqToSegment(c,u,d,h)>l)continue;d.applyMatrix4(this.matrixWorld);const R=e.ray.origin.distanceTo(d);R<e.near||R>e.far||t.push({distance:R,point:h.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}const Lu=new P,Ru=new P;class wy extends Tl{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)Lu.fromBufferAttribute(t,s),Ru.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Lu.distanceTo(Ru);e.setAttribute("lineDistance",new wt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Ty extends Tl{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class ud extends Ht{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ce(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Pu=new ze,ko=new vl,Hr=new Ts,Gr=new P;class Ey extends rt{constructor(e=new Wt,t=new ud){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Hr.copy(n.boundingSphere),Hr.applyMatrix4(s),Hr.radius+=r,e.ray.intersectsSphere(Hr)===!1)return;Pu.copy(s).invert(),ko.copy(e.ray).applyMatrix4(Pu);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,h=n.attributes.position;if(c!==null){const d=Math.max(0,a.start),m=Math.min(c.count,a.start+a.count);for(let g=d,p=m;g<p;g++){const f=c.getX(g);Gr.fromBufferAttribute(h,f),Du(Gr,f,l,s,e,t,this)}}else{const d=Math.max(0,a.start),m=Math.min(h.count,a.start+a.count);for(let g=d,p=m;g<p;g++)Gr.fromBufferAttribute(h,g),Du(Gr,g,l,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Du(i,e,t,n,s,r,a){const o=ko.distanceSqToPoint(i);if(o<t){const l=new P;ko.closestPointToPoint(i,l),l.applyMatrix4(n);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,object:a})}}class El extends Wt{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};const r=[],a=[];o(s),c(n),u(),this.setAttribute("position",new wt(r,3)),this.setAttribute("normal",new wt(r.slice(),3)),this.setAttribute("uv",new wt(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(S){const x=new P,b=new P,M=new P;for(let R=0;R<t.length;R+=3)m(t[R+0],x),m(t[R+1],b),m(t[R+2],M),l(x,b,M,S)}function l(S,x,b,M){const R=M+1,I=[];for(let v=0;v<=R;v++){I[v]=[];const A=S.clone().lerp(b,v/R),D=x.clone().lerp(b,v/R),X=R-v;for(let le=0;le<=X;le++)le===0&&v===R?I[v][le]=A:I[v][le]=A.clone().lerp(D,le/X)}for(let v=0;v<R;v++)for(let A=0;A<2*(R-v)-1;A++){const D=Math.floor(A/2);A%2===0?(d(I[v][D+1]),d(I[v+1][D]),d(I[v][D])):(d(I[v][D+1]),d(I[v+1][D+1]),d(I[v+1][D]))}}function c(S){const x=new P;for(let b=0;b<r.length;b+=3)x.x=r[b+0],x.y=r[b+1],x.z=r[b+2],x.normalize().multiplyScalar(S),r[b+0]=x.x,r[b+1]=x.y,r[b+2]=x.z}function u(){const S=new P;for(let x=0;x<r.length;x+=3){S.x=r[x+0],S.y=r[x+1],S.z=r[x+2];const b=f(S)/2/Math.PI+.5,M=_(S)/Math.PI+.5;a.push(b,1-M)}g(),h()}function h(){for(let S=0;S<a.length;S+=6){const x=a[S+0],b=a[S+2],M=a[S+4],R=Math.max(x,b,M),I=Math.min(x,b,M);R>.9&&I<.1&&(x<.2&&(a[S+0]+=1),b<.2&&(a[S+2]+=1),M<.2&&(a[S+4]+=1))}}function d(S){r.push(S.x,S.y,S.z)}function m(S,x){const b=S*3;x.x=e[b+0],x.y=e[b+1],x.z=e[b+2]}function g(){const S=new P,x=new P,b=new P,M=new P,R=new Te,I=new Te,v=new Te;for(let A=0,D=0;A<r.length;A+=9,D+=6){S.set(r[A+0],r[A+1],r[A+2]),x.set(r[A+3],r[A+4],r[A+5]),b.set(r[A+6],r[A+7],r[A+8]),R.set(a[D+0],a[D+1]),I.set(a[D+2],a[D+3]),v.set(a[D+4],a[D+5]),M.copy(S).add(x).add(b).divideScalar(3);const X=f(M);p(R,D+0,S,X),p(I,D+2,x,X),p(v,D+4,b,X)}}function p(S,x,b,M){M<0&&S.x===1&&(a[x]=S.x-1),b.x===0&&b.z===0&&(a[x]=M/2/Math.PI+.5)}function f(S){return Math.atan2(S.z,-S.x)}function _(S){return Math.atan2(-S.y,Math.sqrt(S.x*S.x+S.z*S.z))}}static fromJSON(e){return new El(e.vertices,e.indices,e.radius,e.details)}}class Al extends El{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Al(e.radius,e.detail)}}class Cs extends Ht{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ce(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ce(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ss,this.normalScale=new Te(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Ui extends Cs{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Te(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Mt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ce(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ce(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ce(1,1,1),this.specularColorMap=null,this._sheen=0,this._clearcoat=0,this._iridescence=0,this._transmission=0,this.setValues(e)}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Ay extends Ht{constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new Ce(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ce(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ss,this.normalScale=new Te(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}class Cy extends Ht{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ss,this.normalScale=new Te(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}class Ly extends Ht{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ce(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ce(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ss,this.normalScale=new Te(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=gl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}function Kn(i,e,t){return hd(i)?new i.constructor(i.subarray(e,t!==void 0?t:i.length)):i.slice(e,t)}function Wr(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function hd(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Ry(i){function e(s,r){return i[s]-i[r]}const t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function Iu(i,e,t){const n=i.length,s=new i.constructor(n);for(let r=0,a=0;a!==n;++r){const o=t[r]*e;for(let l=0;l!==e;++l)s[a++]=i[o+l]}return s}function dd(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(e.push(r.time),t.push.apply(t,a)),r=i[s++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do a=r[n],a!==void 0&&(e.push(r.time),t.push(a)),r=i[s++];while(r!==void 0)}class hr{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break e}a=t.length;break t}if(!(e>=r)){const o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){const o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class Py extends hr{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Fc,endingEnd:Fc}}intervalChanged_(e,t,n){const s=this.parameterPositions;let r=e-2,a=e+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Oc:r=e,o=2*t-n;break;case Uc:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Oc:a=e,l=2*n-t;break;case Uc:a=1,l=n+s[1]-s[0];break;default:a=e-1,l=t}const c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*u,this._offsetNext=a*u}interpolate_(e,t,n,s){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,m=this._weightNext,g=(n-t)/(s-t),p=g*g,f=p*g,_=-d*f+2*d*p-d*g,S=(1+d)*f+(-1.5-2*d)*p+(-.5+d)*g+1,x=(-1-m)*f+(1.5+m)*p+.5*g,b=m*f-m*p;for(let M=0;M!==o;++M)r[M]=_*a[u+M]+S*a[c+M]+x*a[l+M]+b*a[h+M];return r}}class Dy extends hr{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=(n-t)/(s-t),h=1-u;for(let d=0;d!==o;++d)r[d]=a[c+d]*h+a[l+d]*u;return r}}class Iy extends hr{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}}class Mn{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Wr(t,this.TimeBufferType),this.values=Wr(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Wr(e.times,Array),values:Wr(e.values,Array)};const s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Iy(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Dy(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Py(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case tr:t=this.InterpolantFactoryMethodDiscrete;break;case gs:t=this.InterpolantFactoryMethodLinear;break;case Fa:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return tr;case this.InterpolantFactoryMethodLinear:return gs;case this.InterpolantFactoryMethodSmooth:return Fa}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){const n=this.times,s=n.length;let r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);const o=this.getValueSize();this.times=Kn(n,r,a),this.values=Kn(this.values,r*o,a*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){const l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(s!==void 0&&hd(s))for(let o=0,l=s.length;o!==l;++o){const c=s[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){const e=Kn(this.times),t=Kn(this.values),n=this.getValueSize(),s=this.getInterpolation()===Fa,r=e.length-1;let a=1;for(let o=1;o<r;++o){let l=!1;const c=e[o],u=e[o+1];if(c!==u&&(o!==1||c!==e[0]))if(s)l=!0;else{const h=o*n,d=h-n,m=h+n;for(let g=0;g!==n;++g){const p=t[h+g];if(p!==t[d+g]||p!==t[m+g]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];const h=o*n,d=a*n;for(let m=0;m!==n;++m)t[d+m]=t[h+m]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=Kn(e,0,a),this.values=Kn(t,0,a*n)):(this.times=e,this.values=t),this}clone(){const e=Kn(this.times,0),t=Kn(this.values,0),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}}Mn.prototype.TimeBufferType=Float32Array;Mn.prototype.ValueBufferType=Float32Array;Mn.prototype.DefaultInterpolation=gs;class Ls extends Mn{}Ls.prototype.ValueTypeName="bool";Ls.prototype.ValueBufferType=Array;Ls.prototype.DefaultInterpolation=tr;Ls.prototype.InterpolantFactoryMethodLinear=void 0;Ls.prototype.InterpolantFactoryMethodSmooth=void 0;class fd extends Mn{}fd.prototype.ValueTypeName="color";class sr extends Mn{}sr.prototype.ValueTypeName="number";class Ny extends hr{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(s-t);let c=e*o;for(let u=c+o;c!==u;c+=4)bn.slerpFlat(r,0,a,c-o,a,c,l);return r}}class Fi extends Mn{InterpolantFactoryMethodLinear(e){return new Ny(this.times,this.values,this.getValueSize(),e)}}Fi.prototype.ValueTypeName="quaternion";Fi.prototype.DefaultInterpolation=gs;Fi.prototype.InterpolantFactoryMethodSmooth=void 0;class Rs extends Mn{}Rs.prototype.ValueTypeName="string";Rs.prototype.ValueBufferType=Array;Rs.prototype.DefaultInterpolation=tr;Rs.prototype.InterpolantFactoryMethodLinear=void 0;Rs.prototype.InterpolantFactoryMethodSmooth=void 0;class rr extends Mn{}rr.prototype.ValueTypeName="vector";class Fy{constructor(e,t=-1,n,s=Qm){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=dn(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,s=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(Uy(n[a]).scale(s));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){const t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,a=n.length;r!==a;++r)t.push(Mn.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){const r=t.length,a=[];for(let o=0;o<r;o++){let l=[],c=[];l.push((o+r-1)%r,o,(o+1)%r),c.push(0,1,0);const u=Ry(l);l=Iu(l,1,u),c=Iu(c,1,u),!s&&l[0]===0&&(l.push(r),c.push(c[0])),a.push(new sr(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const s={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){const c=e[o],u=c.name.match(r);if(u&&u.length>1){const h=u[1];let d=s[h];d||(s[h]=d=[]),d.push(c)}}const a=[];for(const o in s)a.push(this.CreateFromMorphTargetSequence(o,s[o],t,n));return a}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(h,d,m,g,p){if(m.length!==0){const f=[],_=[];dd(m,f,_,g),f.length!==0&&p.push(new h(d,f,_))}},s=[],r=e.name||"default",a=e.fps||30,o=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let h=0;h<c.length;h++){const d=c[h].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const m={};let g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let p=0;p<d[g].morphTargets.length;p++)m[d[g].morphTargets[p]]=-1;for(const p in m){const f=[],_=[];for(let S=0;S!==d[g].morphTargets.length;++S){const x=d[g];f.push(x.time),_.push(x.morphTarget===p?1:0)}s.push(new sr(".morphTargetInfluence["+p+"]",f,_))}l=m.length*a}else{const m=".bones["+t[h].name+"]";n(rr,m+".position",d,"pos",s),n(Fi,m+".quaternion",d,"rot",s),n(rr,m+".scale",d,"scl",s)}}return s.length===0?null:new this(r,l,s,o)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,s=e.length;n!==s;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function Oy(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return sr;case"vector":case"vector2":case"vector3":case"vector4":return rr;case"color":return fd;case"quaternion":return Fi;case"bool":case"boolean":return Ls;case"string":return Rs}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function Uy(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=Oy(i.type);if(i.times===void 0){const t=[],n=[];dd(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}const xs={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class zy{constructor(e,t,n){const s=this;let r=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){o++,r===!1&&s.onStart!==void 0&&s.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,s.onProgress!==void 0&&s.onProgress(u,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=c.length;h<d;h+=2){const m=c[h],g=c[h+1];if(m.global&&(m.lastIndex=0),m.test(u))return g}return null}}}const By=new zy;class dr{constructor(e){this.manager=e!==void 0?e:By,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}const Ln={};class ky extends Error{constructor(e,t){super(e),this.response=t}}class pd extends dr{constructor(e){super(e)}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=xs.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Ln[e]!==void 0){Ln[e].push({onLoad:t,onProgress:n,onError:s});return}Ln[e]=[],Ln[e].push({onLoad:t,onProgress:n,onError:s});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=Ln[e],h=c.body.getReader(),d=c.headers.get("Content-Length"),m=d?parseInt(d):0,g=m!==0;let p=0;const f=new ReadableStream({start(_){S();function S(){h.read().then(({done:x,value:b})=>{if(x)_.close();else{p+=b.byteLength;const M=new ProgressEvent("progress",{lengthComputable:g,loaded:p,total:m});for(let R=0,I=u.length;R<I;R++){const v=u[R];v.onProgress&&v.onProgress(M)}_.enqueue(b),S()}})}}});return new Response(f)}else throw new ky(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,o));case"json":return c.json();default:if(o===void 0)return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(o),d=h&&h[1]?h[1].toLowerCase():void 0,m=new TextDecoder(d);return c.arrayBuffer().then(g=>m.decode(g))}}}).then(c=>{xs.add(e,c);const u=Ln[e];delete Ln[e];for(let h=0,d=u.length;h<d;h++){const m=u[h];m.onLoad&&m.onLoad(c)}}).catch(c=>{const u=Ln[e];if(u===void 0)throw this.manager.itemError(e),c;delete Ln[e];for(let h=0,d=u.length;h<d;h++){const m=u[h];m.onError&&m.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class Vy extends dr{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=xs.get(e);if(a!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a;const o=ir("img");function l(){u(),xs.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(h){u(),s&&s(h),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(e),o.src=e,o}}class fr extends dr{constructor(e){super(e)}load(e,t,n,s){const r=new It,a=new Vy(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}}class pr extends rt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ce(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}class Hy extends pr{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(rt.DefaultUp),this.updateMatrix(),this.groundColor=new Ce(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const co=new ze,Nu=new P,Fu=new P;class Cl{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Te(512,512),this.map=null,this.mapPass=null,this.matrix=new ze,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new yl,this._frameExtents=new Te(1,1),this._viewportCount=1,this._viewports=[new tt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Nu.setFromMatrixPosition(e.matrixWorld),t.position.copy(Nu),Fu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Fu),t.updateMatrixWorld(),co.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(co),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(co)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Gy extends Cl{constructor(){super(new Pt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=nr*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Wy extends pr{constructor(e,t,n=0,s=Math.PI/3,r=0,a=1){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(rt.DefaultUp),this.updateMatrix(),this.target=new rt,this.distance=n,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new Gy}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Ou=new ze,Us=new P,uo=new P;class jy extends Cl{constructor(){super(new Pt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Te(4,2),this._viewportCount=6,this._viewports=[new tt(2,1,1,1),new tt(0,1,1,1),new tt(3,1,1,1),new tt(1,1,1,1),new tt(3,0,1,1),new tt(1,0,1,1)],this._cubeDirections=[new P(1,0,0),new P(-1,0,0),new P(0,0,1),new P(0,0,-1),new P(0,1,0),new P(0,-1,0)],this._cubeUps=[new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,0,1),new P(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Us.setFromMatrixPosition(e.matrixWorld),n.position.copy(Us),uo.copy(n.position),uo.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(uo),n.updateMatrixWorld(),s.makeTranslation(-Us.x,-Us.y,-Us.z),Ou.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ou)}}class Gs extends pr{constructor(e,t,n=0,s=1){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new jy}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Xy extends Cl{constructor(){super(new ur(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class md extends pr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(rt.DefaultUp),this.updateMatrix(),this.target=new rt,this.shadow=new Xy}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class qy extends pr{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Pi{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,s=e.length;n<s;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class $y extends dr{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=xs.get(e);if(a!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a;const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,fetch(e,o).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){xs.add(e,l),t&&t(l),r.manager.itemEnd(e)}).catch(function(l){s&&s(l),r.manager.itemError(e),r.manager.itemEnd(e)}),r.manager.itemStart(e)}}class gd{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Uu(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Uu();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Uu(){return(typeof performance>"u"?Date:performance).now()}const Ll="\\[\\]\\.:\\/",Yy=new RegExp("["+Ll+"]","g"),Rl="[^"+Ll+"]",Ky="[^"+Ll.replace("\\.","")+"]",Zy=/((?:WC+[\/:])*)/.source.replace("WC",Rl),Jy=/(WCOD+)?/.source.replace("WCOD",Ky),Qy=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Rl),eb=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Rl),tb=new RegExp("^"+Zy+Jy+Qy+eb+"$"),nb=["material","materials","bones","map"];class ib{constructor(e,t,n){const s=n||Ke.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class Ke{constructor(e,t,n){this.path=t,this.parsedPath=n||Ke.parseTrackName(t),this.node=Ke.findNode(e,this.parsedPath.nodeName)||e,this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new Ke.Composite(e,t,n):new Ke(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Yy,"")}static parseTrackName(e){const t=tb.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){const r=n.nodeName.substring(s+1);nb.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let a=0;a<r.length;a++){const o=r[a];if(o.name===t||o.uuid===t)return o;const l=n(o.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,s=t.propertyName;let r=t.propertyIndex;if(e||(e=Ke.findNode(this.rootNode,t.nodeName)||this.rootNode,this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.error("THREE.PropertyBinding: Trying to update node for track: "+this.path+" but it wasn't found.");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const a=e[s];if(a===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Ke.Composite=ib;Ke.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ke.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ke.prototype.GetterByBindingType=[Ke.prototype._getValue_direct,Ke.prototype._getValue_array,Ke.prototype._getValue_arrayElement,Ke.prototype._getValue_toArray];Ke.prototype.SetterByBindingTypeAndVersioning=[[Ke.prototype._setValue_direct,Ke.prototype._setValue_direct_setNeedsUpdate,Ke.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ke.prototype._setValue_array,Ke.prototype._setValue_array_setNeedsUpdate,Ke.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ke.prototype._setValue_arrayElement,Ke.prototype._setValue_arrayElement_setNeedsUpdate,Ke.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ke.prototype._setValue_fromArray,Ke.prototype._setValue_fromArray_setNeedsUpdate,Ke.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class zu{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Mt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ml}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ml);/**
 * lil-gui
 * https://lil-gui.georgealways.com
 * @version 0.16.0
 * @author George Michael Brower
 * @license MIT
 */class yn{constructor(e,t,n,s,r="div"){this.parent=e,this.object=t,this.property=n,this._disabled=!1,this.initialValue=this.getValue(),this.domElement=document.createElement("div"),this.domElement.classList.add("controller"),this.domElement.classList.add(s),this.$name=document.createElement("div"),this.$name.classList.add("name"),yn.nextNameID=yn.nextNameID||0,this.$name.id="lil-gui-name-"+ ++yn.nextNameID,this.$widget=document.createElement(r),this.$widget.classList.add("widget"),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(n)}name(e){return this._name=e,this.$name.innerHTML=e,this}onChange(e){return this._onChange=e,this}_callOnChange(){this.parent._callOnChange(this),this._onChange!==void 0&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),this._onFinishChange!==void 0&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(e=!0){return this.disable(!e)}disable(e=!0){return e===this._disabled||(this._disabled=e,this.domElement.classList.toggle("disabled",e),this.$disable.toggleAttribute("disabled",e)),this}options(e){const t=this.parent.add(this.object,this.property,e);return t.name(this._name),this.destroy(),t}min(e){return this}max(e){return this}step(e){return this}listen(e=!0){return this._listening=e,this._listenCallbackID!==void 0&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback),this.updateDisplay()}getValue(){return this.object[this.property]}setValue(e){return this.object[this.property]=e,this._callOnChange(),this.updateDisplay(),this}updateDisplay(){return this}load(e){return this.setValue(e),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}}class sb extends yn{constructor(e,t,n){super(e,t,n,"boolean","label"),this.$input=document.createElement("input"),this.$input.setAttribute("type","checkbox"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener("change",()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}}function Vo(i){let e,t;return(e=i.match(/(#|0x)?([a-f0-9]{6})/i))?t=e[2]:(e=i.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?t=parseInt(e[1]).toString(16).padStart(2,0)+parseInt(e[2]).toString(16).padStart(2,0)+parseInt(e[3]).toString(16).padStart(2,0):(e=i.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(t=e[1]+e[1]+e[2]+e[2]+e[3]+e[3]),!!t&&"#"+t}const rb={isPrimitive:!0,match:i=>typeof i=="string",fromHexString:Vo,toHexString:Vo},ar={isPrimitive:!0,match:i=>typeof i=="number",fromHexString:i=>parseInt(i.substring(1),16),toHexString:i=>"#"+i.toString(16).padStart(6,0)},ab={isPrimitive:!1,match:Array.isArray,fromHexString(i,e,t=1){const n=ar.fromHexString(i);e[0]=(n>>16&255)/255*t,e[1]=(n>>8&255)/255*t,e[2]=(255&n)/255*t},toHexString:([i,e,t],n=1)=>ar.toHexString(i*(n=255/n)<<16^e*n<<8^t*n<<0)},ob={isPrimitive:!1,match:i=>Object(i)===i,fromHexString(i,e,t=1){const n=ar.fromHexString(i);e.r=(n>>16&255)/255*t,e.g=(n>>8&255)/255*t,e.b=(255&n)/255*t},toHexString:({r:i,g:e,b:t},n=1)=>ar.toHexString(i*(n=255/n)<<16^e*n<<8^t*n<<0)},lb=[rb,ar,ab,ob];class cb extends yn{constructor(e,t,n,s){var r;super(e,t,n,"color"),this.$input=document.createElement("input"),this.$input.setAttribute("type","color"),this.$input.setAttribute("tabindex",-1),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$text=document.createElement("input"),this.$text.setAttribute("type","text"),this.$text.setAttribute("spellcheck","false"),this.$text.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=(r=this.initialValue,lb.find(a=>a.match(r))),this._rgbScale=s,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener("input",()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$text.addEventListener("input",()=>{const a=Vo(this.$text.value);a&&this._setValueFromHexString(a)}),this.$text.addEventListener("focus",()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener("blur",()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(e){if(this._format.isPrimitive){const t=this._format.fromHexString(e);this.setValue(t)}else this._format.fromHexString(e,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(e){return this._setValueFromHexString(e),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}}class ho extends yn{constructor(e,t,n){super(e,t,n,"function"),this.$button=document.createElement("button"),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener("click",s=>{s.preventDefault(),this.getValue().call(this.object)}),this.$button.addEventListener("touchstart",()=>{}),this.$disable=this.$button}}class ub extends yn{constructor(e,t,n,s,r,a){super(e,t,n,"number"),this._initInput(),this.min(s),this.max(r);const o=a!==void 0;this.step(o?a:this._getImplicitStep(),o),this.updateDisplay()}min(e){return this._min=e,this._onUpdateMinMax(),this}max(e){return this._max=e,this._onUpdateMinMax(),this}step(e,t=!0){return this._step=e,this._stepExplicit=t,this}updateDisplay(){const e=this.getValue();if(this._hasSlider){let t=(e-this._min)/(this._max-this._min);t=Math.max(0,Math.min(t,1)),this.$fill.style.width=100*t+"%"}return this._inputFocused||(this.$input.value=e),this}_initInput(){this.$input=document.createElement("input"),this.$input.setAttribute("type","number"),this.$input.setAttribute("step","any"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$disable=this.$input;const e=u=>{const h=parseFloat(this.$input.value);isNaN(h)||(this._snapClampSetValue(h+u),this.$input.value=this.getValue())};let t,n,s,r,a,o=!1;const l=u=>{if(o){const h=u.clientX-t,d=u.clientY-n;Math.abs(d)>5?(u.preventDefault(),this.$input.blur(),o=!1,this._setDraggingStyle(!0,"vertical")):Math.abs(h)>5&&c()}if(!o){const h=u.clientY-s;a-=h*this._step*this._arrowKeyMultiplier(u),r+a>this._max?a=this._max-r:r+a<this._min&&(a=this._min-r),this._snapClampSetValue(r+a)}s=u.clientY},c=()=>{this._setDraggingStyle(!1,"vertical"),this._callOnFinishChange(),window.removeEventListener("mousemove",l),window.removeEventListener("mouseup",c)};this.$input.addEventListener("input",()=>{const u=parseFloat(this.$input.value);isNaN(u)||this.setValue(this._clamp(u))}),this.$input.addEventListener("keydown",u=>{u.code==="Enter"&&this.$input.blur(),u.code==="ArrowUp"&&(u.preventDefault(),e(this._step*this._arrowKeyMultiplier(u))),u.code==="ArrowDown"&&(u.preventDefault(),e(this._step*this._arrowKeyMultiplier(u)*-1))}),this.$input.addEventListener("wheel",u=>{this._inputFocused&&(u.preventDefault(),e(this._step*this._normalizeMouseWheel(u)))}),this.$input.addEventListener("mousedown",u=>{t=u.clientX,n=s=u.clientY,o=!0,r=this.getValue(),a=0,window.addEventListener("mousemove",l),window.addEventListener("mouseup",c)}),this.$input.addEventListener("focus",()=>{this._inputFocused=!0}),this.$input.addEventListener("blur",()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()})}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement("div"),this.$slider.classList.add("slider"),this.$fill=document.createElement("div"),this.$fill.classList.add("fill"),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add("hasSlider");const e=d=>{const m=this.$slider.getBoundingClientRect();let g=(p=d,f=m.left,_=m.right,S=this._min,x=this._max,(p-f)/(_-f)*(x-S)+S);var p,f,_,S,x;this._snapClampSetValue(g)},t=d=>{e(d.clientX)},n=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("mousemove",t),window.removeEventListener("mouseup",n)};let s,r,a=!1;const o=d=>{d.preventDefault(),this._setDraggingStyle(!0),e(d.touches[0].clientX),a=!1},l=d=>{if(a){const m=d.touches[0].clientX-s,g=d.touches[0].clientY-r;Math.abs(m)>Math.abs(g)?o(d):(window.removeEventListener("touchmove",l),window.removeEventListener("touchend",c))}else d.preventDefault(),e(d.touches[0].clientX)},c=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("touchmove",l),window.removeEventListener("touchend",c)},u=this._callOnFinishChange.bind(this);let h;this.$slider.addEventListener("mousedown",d=>{this._setDraggingStyle(!0),e(d.clientX),window.addEventListener("mousemove",t),window.addEventListener("mouseup",n)}),this.$slider.addEventListener("touchstart",d=>{d.touches.length>1||(this._hasScrollBar?(s=d.touches[0].clientX,r=d.touches[0].clientY,a=!0):o(d),window.addEventListener("touchmove",l),window.addEventListener("touchend",c))}),this.$slider.addEventListener("wheel",d=>{if(Math.abs(d.deltaX)<Math.abs(d.deltaY)&&this._hasScrollBar)return;d.preventDefault();const m=this._normalizeMouseWheel(d)*this._step;this._snapClampSetValue(this.getValue()+m),this.$input.value=this.getValue(),clearTimeout(h),h=setTimeout(u,400)})}_setDraggingStyle(e,t="horizontal"){this.$slider&&this.$slider.classList.toggle("active",e),document.body.classList.toggle("lil-gui-dragging",e),document.body.classList.toggle("lil-gui-"+t,e)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(e){let{deltaX:t,deltaY:n}=e;return Math.floor(e.deltaY)!==e.deltaY&&e.wheelDelta&&(t=0,n=-e.wheelDelta/120,n*=this._stepExplicit?1:10),t+-n}_arrowKeyMultiplier(e){let t=this._stepExplicit?1:10;return e.shiftKey?t*=10:e.altKey&&(t/=10),t}_snap(e){const t=Math.round(e/this._step)*this._step;return parseFloat(t.toPrecision(15))}_clamp(e){return e<this._min&&(e=this._min),e>this._max&&(e=this._max),e}_snapClampSetValue(e){this.setValue(this._clamp(this._snap(e)))}get _hasScrollBar(){const e=this.parent.root.$children;return e.scrollHeight>e.clientHeight}get _hasMin(){return this._min!==void 0}get _hasMax(){return this._max!==void 0}}class hb extends yn{constructor(e,t,n,s){super(e,t,n,"option"),this.$select=document.createElement("select"),this.$select.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this._values=Array.isArray(s)?s:Object.values(s),this._names=Array.isArray(s)?s:Object.keys(s),this._names.forEach(r=>{const a=document.createElement("option");a.innerHTML=r,this.$select.appendChild(a)}),this.$select.addEventListener("change",()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener("focus",()=>{this.$display.classList.add("focus")}),this.$select.addEventListener("blur",()=>{this.$display.classList.remove("focus")}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.updateDisplay()}updateDisplay(){const e=this.getValue(),t=this._values.indexOf(e);return this.$select.selectedIndex=t,this.$display.innerHTML=t===-1?e:this._names[t],this}}class db extends yn{constructor(e,t,n){super(e,t,n,"string"),this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$input.addEventListener("input",()=>{this.setValue(this.$input.value)}),this.$input.addEventListener("keydown",s=>{s.code==="Enter"&&this.$input.blur()}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}}let Bu=!1;class Pl{constructor({parent:e,autoPlace:t=e===void 0,container:n,width:s,title:r="Controls",injectStyles:a=!0,touchStyles:o=!0}={}){if(this.parent=e,this.root=e?e.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement("div"),this.domElement.classList.add("lil-gui"),this.$title=document.createElement("div"),this.$title.classList.add("title"),this.$title.setAttribute("role","button"),this.$title.setAttribute("aria-expanded",!0),this.$title.setAttribute("tabindex",0),this.$title.addEventListener("click",()=>this.openAnimated(this._closed)),this.$title.addEventListener("keydown",l=>{l.code!=="Enter"&&l.code!=="Space"||(l.preventDefault(),this.$title.click())}),this.$title.addEventListener("touchstart",()=>{}),this.$children=document.createElement("div"),this.$children.classList.add("children"),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(r),o&&this.domElement.classList.add("allow-touch-styles"),this.parent)return this.parent.children.push(this),this.parent.folders.push(this),void this.parent.$children.appendChild(this.domElement);this.domElement.classList.add("root"),!Bu&&a&&(function(l){const c=document.createElement("style");c.innerHTML=l;const u=document.querySelector("head link[rel=stylesheet], head style");u?document.head.insertBefore(c,u):document.head.appendChild(c)}('.lil-gui{--background-color:#1f1f1f;--text-color:#ebebeb;--title-background-color:#111;--title-text-color:#ebebeb;--widget-color:#424242;--hover-color:#4f4f4f;--focus-color:#595959;--number-color:#2cc9ff;--string-color:#a2db3c;--font-size:11px;--input-font-size:11px;--font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Arial,sans-serif;--font-family-mono:Menlo,Monaco,Consolas,"Droid Sans Mono",monospace;--padding:4px;--spacing:4px;--widget-height:20px;--name-width:45%;--slider-knob-width:2px;--slider-input-width:27%;--color-input-width:27%;--slider-input-min-width:45px;--color-input-min-width:45px;--folder-indent:7px;--widget-padding:0 0 0 3px;--widget-border-radius:2px;--checkbox-size:calc(var(--widget-height)*0.75);--scrollbar-width:5px;background-color:var(--background-color);color:var(--text-color);font-family:var(--font-family);font-size:var(--font-size);font-style:normal;font-weight:400;line-height:1;text-align:left;touch-action:manipulation;user-select:none;-webkit-user-select:none}.lil-gui,.lil-gui *{box-sizing:border-box;margin:0;padding:0}.lil-gui.root{display:flex;flex-direction:column;width:var(--width,245px)}.lil-gui.root>.title{background:var(--title-background-color);color:var(--title-text-color)}.lil-gui.root>.children{overflow-x:hidden;overflow-y:auto}.lil-gui.root>.children::-webkit-scrollbar{background:var(--background-color);height:var(--scrollbar-width);width:var(--scrollbar-width)}.lil-gui.root>.children::-webkit-scrollbar-thumb{background:var(--focus-color);border-radius:var(--scrollbar-width)}.lil-gui.force-touch-styles{--widget-height:28px;--padding:6px;--spacing:6px;--font-size:13px;--input-font-size:16px;--folder-indent:10px;--scrollbar-width:7px;--slider-input-min-width:50px;--color-input-min-width:65px}.lil-gui.autoPlace{max-height:100%;position:fixed;right:15px;top:0;z-index:1001}.lil-gui .controller{align-items:center;display:flex;margin:var(--spacing) 0;padding:0 var(--padding)}.lil-gui .controller.disabled{opacity:.5}.lil-gui .controller.disabled,.lil-gui .controller.disabled *{pointer-events:none!important}.lil-gui .controller>.name{flex-shrink:0;line-height:var(--widget-height);min-width:var(--name-width);padding-right:var(--spacing);white-space:pre}.lil-gui .controller .widget{align-items:center;display:flex;min-height:var(--widget-height);position:relative;width:100%}.lil-gui .controller.string input{color:var(--string-color)}.lil-gui .controller.boolean .widget{cursor:pointer}.lil-gui .controller.color .display{border-radius:var(--widget-border-radius);height:var(--widget-height);position:relative;width:100%}.lil-gui .controller.color input[type=color]{cursor:pointer;height:100%;opacity:0;width:100%}.lil-gui .controller.color input[type=text]{flex-shrink:0;font-family:var(--font-family-mono);margin-left:var(--spacing);min-width:var(--color-input-min-width);width:var(--color-input-width)}.lil-gui .controller.option select{max-width:100%;opacity:0;position:absolute;width:100%}.lil-gui .controller.option .display{background:var(--widget-color);border-radius:var(--widget-border-radius);height:var(--widget-height);line-height:var(--widget-height);max-width:100%;overflow:hidden;padding-left:.55em;padding-right:1.75em;pointer-events:none;position:relative;word-break:break-all}.lil-gui .controller.option .display.active{background:var(--focus-color)}.lil-gui .controller.option .display:after{bottom:0;content:"\u2195";font-family:lil-gui;padding-right:.375em;position:absolute;right:0;top:0}.lil-gui .controller.option .widget,.lil-gui .controller.option select{cursor:pointer}.lil-gui .controller.number input{color:var(--number-color)}.lil-gui .controller.number.hasSlider input{flex-shrink:0;margin-left:var(--spacing);min-width:var(--slider-input-min-width);width:var(--slider-input-width)}.lil-gui .controller.number .slider{background-color:var(--widget-color);border-radius:var(--widget-border-radius);cursor:ew-resize;height:var(--widget-height);overflow:hidden;padding-right:var(--slider-knob-width);touch-action:pan-y;width:100%}.lil-gui .controller.number .slider.active{background-color:var(--focus-color)}.lil-gui .controller.number .slider.active .fill{opacity:.95}.lil-gui .controller.number .fill{border-right:var(--slider-knob-width) solid var(--number-color);box-sizing:content-box;height:100%}.lil-gui-dragging .lil-gui{--hover-color:var(--widget-color)}.lil-gui-dragging *{cursor:ew-resize!important}.lil-gui-dragging.lil-gui-vertical *{cursor:ns-resize!important}.lil-gui .title{--title-height:calc(var(--widget-height) + var(--spacing)*1.25);-webkit-tap-highlight-color:transparent;text-decoration-skip:objects;cursor:pointer;font-weight:600;height:var(--title-height);line-height:calc(var(--title-height) - 4px);outline:none;padding:0 var(--padding)}.lil-gui .title:before{content:"\u25BE";display:inline-block;font-family:lil-gui;padding-right:2px}.lil-gui .title:active{background:var(--title-background-color);opacity:.75}.lil-gui.root>.title:focus{text-decoration:none!important}.lil-gui.closed>.title:before{content:"\u25B8"}.lil-gui.closed>.children{opacity:0;transform:translateY(-7px)}.lil-gui.closed:not(.transition)>.children{display:none}.lil-gui.transition>.children{overflow:hidden;pointer-events:none;transition-duration:.3s;transition-property:height,opacity,transform;transition-timing-function:cubic-bezier(.2,.6,.35,1)}.lil-gui .children:empty:before{content:"Empty";display:block;font-style:italic;height:var(--widget-height);line-height:var(--widget-height);margin:var(--spacing) 0;opacity:.5;padding:0 var(--padding)}.lil-gui.root>.children>.lil-gui>.title{border-width:0;border-bottom:1px solid var(--widget-color);border-left:0 solid var(--widget-color);border-right:0 solid var(--widget-color);border-top:1px solid var(--widget-color);transition:border-color .3s}.lil-gui.root>.children>.lil-gui.closed>.title{border-bottom-color:transparent}.lil-gui+.controller{border-top:1px solid var(--widget-color);margin-top:0;padding-top:var(--spacing)}.lil-gui .lil-gui .lil-gui>.title{border:none}.lil-gui .lil-gui .lil-gui>.children{border:none;border-left:2px solid var(--widget-color);margin-left:var(--folder-indent)}.lil-gui .lil-gui .controller{border:none}.lil-gui input{-webkit-tap-highlight-color:transparent;background:var(--widget-color);border:0;border-radius:var(--widget-border-radius);color:var(--text-color);font-family:var(--font-family);font-size:var(--input-font-size);height:var(--widget-height);outline:none;width:100%}.lil-gui input:disabled{opacity:1}.lil-gui input[type=number],.lil-gui input[type=text]{padding:var(--widget-padding)}.lil-gui input[type=number]:focus,.lil-gui input[type=text]:focus{background:var(--focus-color)}.lil-gui input::-webkit-inner-spin-button,.lil-gui input::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}.lil-gui input[type=number]{-moz-appearance:textfield}.lil-gui input[type=checkbox]{appearance:none;-webkit-appearance:none;border-radius:var(--widget-border-radius);cursor:pointer;height:var(--checkbox-size);text-align:center;width:var(--checkbox-size)}.lil-gui input[type=checkbox]:checked:before{content:"\u2713";font-family:lil-gui;font-size:var(--checkbox-size);line-height:var(--checkbox-size)}.lil-gui button{-webkit-tap-highlight-color:transparent;background:var(--widget-color);border:1px solid var(--widget-color);border-radius:var(--widget-border-radius);color:var(--text-color);cursor:pointer;font-family:var(--font-family);font-size:var(--font-size);height:var(--widget-height);line-height:calc(var(--widget-height) - 4px);outline:none;text-align:center;text-transform:none;width:100%}.lil-gui button:active{background:var(--focus-color)}@font-face{font-family:lil-gui;src:url("data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAUsAAsAAAAACJwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAAH4AAADAImwmYE9TLzIAAAGIAAAAPwAAAGBKqH5SY21hcAAAAcgAAAD0AAACrukyyJBnbHlmAAACvAAAAF8AAACEIZpWH2hlYWQAAAMcAAAAJwAAADZfcj2zaGhlYQAAA0QAAAAYAAAAJAC5AHhobXR4AAADXAAAABAAAABMAZAAAGxvY2EAAANsAAAAFAAAACgCEgIybWF4cAAAA4AAAAAeAAAAIAEfABJuYW1lAAADoAAAASIAAAIK9SUU/XBvc3QAAATEAAAAZgAAAJCTcMc2eJxVjbEOgjAURU+hFRBK1dGRL+ALnAiToyMLEzFpnPz/eAshwSa97517c/MwwJmeB9kwPl+0cf5+uGPZXsqPu4nvZabcSZldZ6kfyWnomFY/eScKqZNWupKJO6kXN3K9uCVoL7iInPr1X5baXs3tjuMqCtzEuagm/AAlzQgPAAB4nGNgYRBlnMDAysDAYM/gBiT5oLQBAwuDJAMDEwMrMwNWEJDmmsJwgCFeXZghBcjlZMgFCzOiKOIFAB71Bb8AeJy1kjFuwkAQRZ+DwRAwBtNQRUGKQ8OdKCAWUhAgKLhIuAsVSpWz5Bbkj3dEgYiUIszqWdpZe+Z7/wB1oCYmIoboiwiLT2WjKl/jscrHfGg/pKdMkyklC5Zs2LEfHYpjcRoPzme9MWWmk3dWbK9ObkWkikOetJ554fWyoEsmdSlt+uR0pCJR34b6t/TVg1SY3sYvdf8vuiKrpyaDXDISiegp17p7579Gp3p++y7HPAiY9pmTibljrr85qSidtlg4+l25GLCaS8e6rRxNBmsnERunKbaOObRz7N72ju5vdAjYpBXHgJylOAVsMseDAPEP8LYoUHicY2BiAAEfhiAGJgZWBgZ7RnFRdnVJELCQlBSRlATJMoLV2DK4glSYs6ubq5vbKrJLSbGrgEmovDuDJVhe3VzcXFwNLCOILB/C4IuQ1xTn5FPilBTj5FPmBAB4WwoqAHicY2BkYGAA4sk1sR/j+W2+MnAzpDBgAyEMQUCSg4EJxAEAwUgFHgB4nGNgZGBgSGFggJMhDIwMqEAYAByHATJ4nGNgAIIUNEwmAABl3AGReJxjYAACIQYlBiMGJ3wQAEcQBEV4nGNgZGBgEGZgY2BiAAEQyQWEDAz/wXwGAAsPATIAAHicXdBNSsNAHAXwl35iA0UQXYnMShfS9GPZA7T7LgIu03SSpkwzYTIt1BN4Ak/gKTyAeCxfw39jZkjymzcvAwmAW/wgwHUEGDb36+jQQ3GXGot79L24jxCP4gHzF/EIr4jEIe7wxhOC3g2TMYy4Q7+Lu/SHuEd/ivt4wJd4wPxbPEKMX3GI5+DJFGaSn4qNzk8mcbKSR6xdXdhSzaOZJGtdapd4vVPbi6rP+cL7TGXOHtXKll4bY1Xl7EGnPtp7Xy2n00zyKLVHfkHBa4IcJ2oD3cgggWvt/V/FbDrUlEUJhTn/0azVWbNTNr0Ens8de1tceK9xZmfB1CPjOmPH4kitmvOubcNpmVTN3oFJyjzCvnmrwhJTzqzVj9jiSX911FjeAAB4nG3HMRKCMBBA0f0giiKi4DU8k0V2GWbIZDOh4PoWWvq6J5V8If9NVNQcaDhyouXMhY4rPTcG7jwYmXhKq8Wz+p762aNaeYXom2n3m2dLTVgsrCgFJ7OTmIkYbwIbC6vIB7WmFfAAAA==") format("woff")}@media (pointer:coarse){.lil-gui.allow-touch-styles{--widget-height:28px;--padding:6px;--spacing:6px;--font-size:13px;--input-font-size:16px;--folder-indent:10px;--scrollbar-width:7px;--slider-input-min-width:50px;--color-input-min-width:65px}}@media (hover:hover){.lil-gui .controller.color .display:hover:before{border:1px solid #fff9;border-radius:var(--widget-border-radius);bottom:0;content:" ";display:block;left:0;position:absolute;right:0;top:0}.lil-gui .controller.option .display.focus{background:var(--focus-color)}.lil-gui .controller.option .widget:hover .display{background:var(--hover-color)}.lil-gui .controller.number .slider:hover{background-color:var(--hover-color)}body:not(.lil-gui-dragging) .lil-gui .title:hover{background:var(--title-background-color);opacity:.85}.lil-gui .title:focus{text-decoration:underline var(--focus-color)}.lil-gui input:hover{background:var(--hover-color)}.lil-gui input:active{background:var(--focus-color)}.lil-gui input[type=checkbox]:focus{box-shadow:inset 0 0 0 1px var(--focus-color)}.lil-gui button:hover{background:var(--hover-color);border-color:var(--hover-color)}.lil-gui button:focus{border-color:var(--focus-color)}}'),Bu=!0),n?n.appendChild(this.domElement):t&&(this.domElement.classList.add("autoPlace"),document.body.appendChild(this.domElement)),s&&this.domElement.style.setProperty("--width",s+"px"),this.domElement.addEventListener("keydown",l=>l.stopPropagation()),this.domElement.addEventListener("keyup",l=>l.stopPropagation())}add(e,t,n,s,r){if(Object(n)===n)return new hb(this,e,t,n);const a=e[t];switch(typeof a){case"number":return new ub(this,e,t,n,s,r);case"boolean":return new sb(this,e,t);case"string":return new db(this,e,t);case"function":return new ho(this,e,t)}console.error(`gui.add failed
	property:`,t,`
	object:`,e,`
	value:`,a)}addColor(e,t,n=1){return new cb(this,e,t,n)}addFolder(e){return new Pl({parent:this,title:e})}load(e,t=!0){return e.controllers&&this.controllers.forEach(n=>{n instanceof ho||n._name in e.controllers&&n.load(e.controllers[n._name])}),t&&e.folders&&this.folders.forEach(n=>{n._title in e.folders&&n.load(e.folders[n._title])}),this}save(e=!0){const t={controllers:{},folders:{}};return this.controllers.forEach(n=>{if(!(n instanceof ho)){if(n._name in t.controllers)throw new Error(`Cannot save GUI with duplicate property "${n._name}"`);t.controllers[n._name]=n.save()}}),e&&this.folders.forEach(n=>{if(n._title in t.folders)throw new Error(`Cannot save GUI with duplicate folder "${n._title}"`);t.folders[n._title]=n.save()}),t}open(e=!0){return this._closed=!e,this.$title.setAttribute("aria-expanded",!this._closed),this.domElement.classList.toggle("closed",this._closed),this}close(){return this.open(!1)}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}openAnimated(e=!0){return this._closed=!e,this.$title.setAttribute("aria-expanded",!this._closed),requestAnimationFrame(()=>{const t=this.$children.clientHeight;this.$children.style.height=t+"px",this.domElement.classList.add("transition");const n=r=>{r.target===this.$children&&(this.$children.style.height="",this.domElement.classList.remove("transition"),this.$children.removeEventListener("transitionend",n))};this.$children.addEventListener("transitionend",n);const s=e?this.$children.scrollHeight:0;this.domElement.classList.toggle("closed",!e),requestAnimationFrame(()=>{this.$children.style.height=s+"px"})}),this}title(e){return this._title=e,this.$title.innerHTML=e,this}reset(e=!0){return(e?this.controllersRecursive():this.controllers).forEach(t=>t.reset()),this}onChange(e){return this._onChange=e,this}_callOnChange(e){this.parent&&this.parent._callOnChange(e),this._onChange!==void 0&&this._onChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(e){this.parent&&this.parent._callOnFinishChange(e),this._onFinishChange!==void 0&&this._onFinishChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(e=>e.destroy())}controllersRecursive(){let e=Array.from(this.controllers);return this.folders.forEach(t=>{e=e.concat(t.controllersRecursive())}),e}foldersRecursive(){let e=Array.from(this.folders);return this.folders.forEach(t=>{e=e.concat(t.foldersRecursive())}),e}}class fb extends dr{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new xb(t)}),this.register(function(t){return new Tb(t)}),this.register(function(t){return new Eb(t)}),this.register(function(t){return new yb(t)}),this.register(function(t){return new bb(t)}),this.register(function(t){return new Mb(t)}),this.register(function(t){return new Sb(t)}),this.register(function(t){return new _b(t)}),this.register(function(t){return new wb(t)}),this.register(function(t){return new vb(t)}),this.register(function(t){return new mb(t)}),this.register(function(t){return new Ab(t)}),this.register(function(t){return new Cb(t)})}load(e,t,n,s){const r=this;let a;this.resourcePath!==""?a=this.resourcePath:this.path!==""?a=this.path:a=Pi.extractUrlBase(e),this.manager.itemStart(e);const o=function(c){s?s(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new pd(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,a,function(u){t(u),r.manager.itemEnd(e)},o)}catch(u){o(u)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let r;const a={},o={};if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(Pi.decodeText(new Uint8Array(e,0,4))===_d){try{a[Ue.KHR_BINARY_GLTF]=new Lb(e)}catch(u){s&&s(u);return}r=JSON.parse(a[Ue.KHR_BINARY_GLTF].content)}else r=JSON.parse(Pi.decodeText(new Uint8Array(e)));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const l=new Hb(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let c=0;c<this.pluginCallbacks.length;c++){const u=this.pluginCallbacks[c](l);o[u.name]=u,a[u.name]=!0}if(r.extensionsUsed)for(let c=0;c<r.extensionsUsed.length;++c){const u=r.extensionsUsed[c],h=r.extensionsRequired||[];switch(u){case Ue.KHR_MATERIALS_UNLIT:a[u]=new gb;break;case Ue.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS:a[u]=new Db;break;case Ue.KHR_DRACO_MESH_COMPRESSION:a[u]=new Rb(r,this.dracoLoader);break;case Ue.KHR_TEXTURE_TRANSFORM:a[u]=new Pb;break;case Ue.KHR_MESH_QUANTIZATION:a[u]=new Ib;break;default:h.indexOf(u)>=0&&o[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}l.setExtensions(a),l.setPlugins(o),l.parse(n,s)}parseAsync(e,t){const n=this;return new Promise(function(s,r){n.parse(e,t,s,r)})}}function pb(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}const Ue={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS:"KHR_materials_pbrSpecularGlossiness",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class mb{constructor(e){this.parser=e,this.name=Ue.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){const r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let s=t.cache.get(n);if(s)return s;const r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let c;const u=new Ce(16777215);l.color!==void 0&&u.fromArray(l.color);const h=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new md(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new Gs(u),c.distance=h;break;case"spot":c=new Wy(u),c.distance=h,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),s=Promise.resolve(c),t.cache.add(n,s),s}createNodeAttachment(e){const t=this,n=this.parser,r=n.json.nodes[e],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(l){return n._getNodeRef(t.cache,o,l)})}}class gb{constructor(){this.name=Ue.KHR_MATERIALS_UNLIT}getMaterialType(){return vn}extendParams(e,t,n){const s=[];e.color=new Ce(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const a=r.baseColorFactor;e.color.fromArray(a),e.opacity=a[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(e,"map",r.baseColorTexture,Ye))}return Promise.all(s)}}class _b{constructor(e){this.parser=e,this.name=Ue.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}}class xb{constructor(e){this.parser=e,this.name=Ue.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ui}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],a=s.extensions[this.name];if(a.clearcoatFactor!==void 0&&(t.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){const o=a.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Te(o,o)}return Promise.all(r)}}class vb{constructor(e){this.parser=e,this.name=Ue.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ui}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],a=s.extensions[this.name];return a.iridescenceFactor!==void 0&&(t.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",a.iridescenceTexture)),a.iridescenceIor!==void 0&&(t.iridescenceIOR=a.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(r)}}class yb{constructor(e){this.parser=e,this.name=Ue.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ui}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new Ce(0,0,0),t.sheenRoughness=0,t.sheen=1;const a=s.extensions[this.name];return a.sheenColorFactor!==void 0&&t.sheenColor.fromArray(a.sheenColorFactor),a.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",a.sheenColorTexture,Ye)),a.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(r)}}class bb{constructor(e){this.parser=e,this.name=Ue.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ui}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],a=s.extensions[this.name];return a.transmissionFactor!==void 0&&(t.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",a.transmissionTexture)),Promise.all(r)}}class Mb{constructor(e){this.parser=e,this.name=Ue.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ui}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],a=s.extensions[this.name];t.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",a.thicknessTexture)),t.attenuationDistance=a.attenuationDistance||1/0;const o=a.attenuationColor||[1,1,1];return t.attenuationColor=new Ce(o[0],o[1],o[2]),Promise.all(r)}}class Sb{constructor(e){this.parser=e,this.name=Ue.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ui}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class wb{constructor(e){this.parser=e,this.name=Ue.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ui}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],a=s.extensions[this.name];t.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",a.specularTexture));const o=a.specularColorFactor||[1,1,1];return t.specularColor=new Ce(o[0],o[1],o[2]),a.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",a.specularColorTexture,Ye)),Promise.all(r)}}class Tb{constructor(e){this.parser=e,this.name=Ue.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;const r=s.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,a)}}class Eb{constructor(e){this.parser=e,this.name=Ue.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;const a=r.extensions[t],o=s.images[a.source];let l=n.textureLoader;if(o.uri){const c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,a.source,l);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class Ab{constructor(e){this.name=Ue.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){const l=s.byteOffset||0,c=s.byteLength||0,u=s.count,h=s.byteStride,d=new Uint8Array(o,l,c);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(u,h,d,s.mode,s.filter).then(function(m){return m.buffer}):a.ready.then(function(){const m=new ArrayBuffer(u*h);return a.decodeGltfBuffer(new Uint8Array(m),u,h,d,s.mode,s.filter),m})})}else return null}}class Cb{constructor(e){this.name=Ue.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const s=t.meshes[n.mesh];for(const c of s.primitives)if(c.mode!==Yt.TRIANGLES&&c.mode!==Yt.TRIANGLE_STRIP&&c.mode!==Yt.TRIANGLE_FAN&&c.mode!==void 0)return null;const a=n.extensions[this.name].attributes,o=[],l={};for(const c in a)o.push(this.parser.getDependency("accessor",a[c]).then(u=>(l[c]=u,l[c])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(c=>{const u=c.pop(),h=u.isGroup?u.children:[u],d=c[0].count,m=[];for(const g of h){const p=new ze,f=new P,_=new bn,S=new P(1,1,1),x=new Sy(g.geometry,g.material,d);for(let b=0;b<d;b++)l.TRANSLATION&&f.fromBufferAttribute(l.TRANSLATION,b),l.ROTATION&&_.fromBufferAttribute(l.ROTATION,b),l.SCALE&&S.fromBufferAttribute(l.SCALE,b),x.setMatrixAt(b,p.compose(f,_,S));for(const b in l)b!=="TRANSLATION"&&b!=="ROTATION"&&b!=="SCALE"&&g.geometry.setAttribute(b,l[b]);rt.prototype.copy.call(x,g),x.frustumCulled=!1,this.parser.assignFinalMaterial(x),m.push(x)}return u.isGroup?(u.clear(),u.add(...m),u):m[0]}))}}const _d="glTF",zs=12,ku={JSON:1313821514,BIN:5130562};class Lb{constructor(e){this.name=Ue.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,zs);if(this.header={magic:Pi.decodeText(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==_d)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const n=this.header.length-zs,s=new DataView(e,zs);let r=0;for(;r<n;){const a=s.getUint32(r,!0);r+=4;const o=s.getUint32(r,!0);if(r+=4,o===ku.JSON){const l=new Uint8Array(e,zs+r,a);this.content=Pi.decodeText(l)}else if(o===ku.BIN){const l=zs+r;this.body=e.slice(l,l+a)}r+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class Rb{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Ue.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},l={},c={};for(const u in a){const h=Go[u]||u.toLowerCase();o[h]=a[u]}for(const u in e.attributes){const h=Go[u]||u.toLowerCase();if(a[u]!==void 0){const d=n.accessors[e.attributes[u]],m=or[d.componentType];c[h]=m.name,l[h]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(u){return new Promise(function(h){s.decodeDracoFile(u,function(d){for(const m in d.attributes){const g=d.attributes[m],p=l[m];p!==void 0&&(g.normalized=p)}h(d)},o,c)})})}}class Pb{constructor(){this.name=Ue.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return t.texCoord!==void 0&&console.warn('THREE.GLTFLoader: Custom UV sets in "'+this.name+'" extension not yet supported.'),t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class Ho extends Cs{constructor(e){super(),this.isGLTFSpecularGlossinessMaterial=!0;const t=["#ifdef USE_SPECULARMAP","	uniform sampler2D specularMap;","#endif"].join(`
`),n=["#ifdef USE_GLOSSINESSMAP","	uniform sampler2D glossinessMap;","#endif"].join(`
`),s=["vec3 specularFactor = specular;","#ifdef USE_SPECULARMAP","	vec4 texelSpecular = texture2D( specularMap, vUv );","	// reads channel RGB, compatible with a glTF Specular-Glossiness (RGBA) texture","	specularFactor *= texelSpecular.rgb;","#endif"].join(`
`),r=["float glossinessFactor = glossiness;","#ifdef USE_GLOSSINESSMAP","	vec4 texelGlossiness = texture2D( glossinessMap, vUv );","	// reads channel A, compatible with a glTF Specular-Glossiness (RGBA) texture","	glossinessFactor *= texelGlossiness.a;","#endif"].join(`
`),a=["PhysicalMaterial material;","material.diffuseColor = diffuseColor.rgb * ( 1. - max( specularFactor.r, max( specularFactor.g, specularFactor.b ) ) );","vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );","float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );","material.roughness = max( 1.0 - glossinessFactor, 0.0525 ); // 0.0525 corresponds to the base mip of a 256 cubemap.","material.roughness += geometryRoughness;","material.roughness = min( material.roughness, 1.0 );","material.specularColor = specularFactor;"].join(`
`),o={specular:{value:new Ce().setHex(16777215)},glossiness:{value:1},specularMap:{value:null},glossinessMap:{value:null}};this._extraUniforms=o,this.onBeforeCompile=function(l){for(const c in o)l.uniforms[c]=o[c];l.fragmentShader=l.fragmentShader.replace("uniform float roughness;","uniform vec3 specular;").replace("uniform float metalness;","uniform float glossiness;").replace("#include <roughnessmap_pars_fragment>",t).replace("#include <metalnessmap_pars_fragment>",n).replace("#include <roughnessmap_fragment>",s).replace("#include <metalnessmap_fragment>",r).replace("#include <lights_physical_fragment>",a)},Object.defineProperties(this,{specular:{get:function(){return o.specular.value},set:function(l){o.specular.value=l}},specularMap:{get:function(){return o.specularMap.value},set:function(l){o.specularMap.value=l,l?this.defines.USE_SPECULARMAP="":delete this.defines.USE_SPECULARMAP}},glossiness:{get:function(){return o.glossiness.value},set:function(l){o.glossiness.value=l}},glossinessMap:{get:function(){return o.glossinessMap.value},set:function(l){o.glossinessMap.value=l,l?(this.defines.USE_GLOSSINESSMAP="",this.defines.USE_UV=""):(delete this.defines.USE_GLOSSINESSMAP,delete this.defines.USE_UV)}}}),delete this.metalness,delete this.roughness,delete this.metalnessMap,delete this.roughnessMap,this.setValues(e)}copy(e){return super.copy(e),this.specularMap=e.specularMap,this.specular.copy(e.specular),this.glossinessMap=e.glossinessMap,this.glossiness=e.glossiness,delete this.metalness,delete this.roughness,delete this.metalnessMap,delete this.roughnessMap,this}}class Db{constructor(){this.name=Ue.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS,this.specularGlossinessParams=["color","map","lightMap","lightMapIntensity","aoMap","aoMapIntensity","emissive","emissiveIntensity","emissiveMap","bumpMap","bumpScale","normalMap","normalMapType","displacementMap","displacementScale","displacementBias","specularMap","specular","glossinessMap","glossiness","alphaMap","envMap","envMapIntensity"]}getMaterialType(){return Ho}extendParams(e,t,n){const s=t.extensions[this.name];e.color=new Ce(1,1,1),e.opacity=1;const r=[];if(Array.isArray(s.diffuseFactor)){const a=s.diffuseFactor;e.color.fromArray(a),e.opacity=a[3]}if(s.diffuseTexture!==void 0&&r.push(n.assignTexture(e,"map",s.diffuseTexture,Ye)),e.emissive=new Ce(0,0,0),e.glossiness=s.glossinessFactor!==void 0?s.glossinessFactor:1,e.specular=new Ce(1,1,1),Array.isArray(s.specularFactor)&&e.specular.fromArray(s.specularFactor),s.specularGlossinessTexture!==void 0){const a=s.specularGlossinessTexture;r.push(n.assignTexture(e,"glossinessMap",a)),r.push(n.assignTexture(e,"specularMap",a,Ye))}return Promise.all(r)}createMaterial(e){const t=new Ho(e);return t.fog=!0,t.color=e.color,t.map=e.map===void 0?null:e.map,t.lightMap=null,t.lightMapIntensity=1,t.aoMap=e.aoMap===void 0?null:e.aoMap,t.aoMapIntensity=1,t.emissive=e.emissive,t.emissiveIntensity=e.emissiveIntensity===void 0?1:e.emissiveIntensity,t.emissiveMap=e.emissiveMap===void 0?null:e.emissiveMap,t.bumpMap=e.bumpMap===void 0?null:e.bumpMap,t.bumpScale=1,t.normalMap=e.normalMap===void 0?null:e.normalMap,t.normalMapType=Ss,e.normalScale&&(t.normalScale=e.normalScale),t.displacementMap=null,t.displacementScale=1,t.displacementBias=0,t.specularMap=e.specularMap===void 0?null:e.specularMap,t.specular=e.specular,t.glossinessMap=e.glossinessMap===void 0?null:e.glossinessMap,t.glossiness=e.glossiness,t.alphaMap=null,t.envMap=e.envMap===void 0?null:e.envMap,t.envMapIntensity=1,t}}class Ib{constructor(){this.name=Ue.KHR_MESH_QUANTIZATION}}class xd extends hr{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let a=0;a!==s;a++)t[a]=n[r+a];return t}interpolate_(e,t,n,s){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=o*2,c=o*3,u=s-t,h=(n-t)/u,d=h*h,m=d*h,g=e*c,p=g-c,f=-2*m+3*d,_=m-d,S=1-f,x=_-d+h;for(let b=0;b!==o;b++){const M=a[p+b+o],R=a[p+b+l]*u,I=a[g+b+o],v=a[g+b]*u;r[b]=S*M+x*R+f*I+_*v}return r}}const Nb=new bn;class Fb extends xd{interpolate_(e,t,n,s){const r=super.interpolate_(e,t,n,s);return Nb.fromArray(r).normalize().toArray(r),r}}const Yt={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},or={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Vu={9728:Ze,9729:Ft,9984:No,9985:Hh,9986:Fo,9987:Ms},Hu={33071:Kt,33648:ra,10497:fs},Gu={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Go={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv2",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Zn={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},Ob={CUBICSPLINE:void 0,LINEAR:gs,STEP:tr},fo={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function Ub(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new Cs({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Di})),i.DefaultMaterial}function Bs(i,e,t){for(const n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function xi(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function zb(i,e,t){let n=!1,s=!1,r=!1;for(let c=0,u=e.length;c<u;c++){const h=e[c];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(s=!0),h.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);const a=[],o=[],l=[];for(let c=0,u=e.length;c<u;c++){const h=e[c];if(n){const d=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):i.attributes.position;a.push(d)}if(s){const d=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):i.attributes.normal;o.push(d)}if(r){const d=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):i.attributes.color;l.push(d)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l)]).then(function(c){const u=c[0],h=c[1],d=c[2];return n&&(i.morphAttributes.position=u),s&&(i.morphAttributes.normal=h),r&&(i.morphAttributes.color=d),i.morphTargetsRelative=!0,i})}function Bb(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,s=t.length;n<s;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function kb(i){const e=i.extensions&&i.extensions[Ue.KHR_DRACO_MESH_COMPRESSION];let t;return e?t="draco:"+e.bufferView+":"+e.indices+":"+Wu(e.attributes):t=i.indices+":"+Wu(i.attributes)+":"+i.mode,t}function Wu(i){let e="";const t=Object.keys(i).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+i[t[n]]+";";return e}function Wo(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function Vb(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}class Hb{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new pb,this.associations=new Map,this.primitiveCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};const n=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,s=navigator.userAgent.indexOf("Firefox")>-1,r=s?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1;typeof createImageBitmap>"u"||n||s&&r<98?this.textureLoader=new fr(this.options.manager):this.textureLoader=new $y(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new pd(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){const o={scene:a[0][s.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:s.asset,parser:n,userData:{}};Bs(r,o,s),xi(o,s),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(o)})).then(function(){e(o)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){const a=t[s].joints;for(let o=0,l=a.length;o<l;o++)e[a[o]].isBone=!0}for(let s=0,r=e.length;s<r;s++){const a=e[s];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const s=n.clone(),r=(a,o)=>{const l=this.associations.get(a);l!=null&&this.associations.set(o,l);for(const[c,u]of a.children.entries())r(u,o.children[c])};return r(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const s=e(t[n]);if(s)return s}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let s=0;s<t.length;s++){const r=e(t[s]);r&&n.push(r)}return n}getDependency(e,t){const n=e+":"+t;let s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this.loadNode(t);break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:throw new Error("Unknown type: "+e)}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Ue.KHR_BINARY_GLTF].body);const s=this.options;return new Promise(function(r,a){n.load(Pi.resolveURL(t.uri,s.path),r,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const s=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(e){const t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0)return Promise.resolve(null);const r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(a){const o=a[0],l=Gu[s.type],c=or[s.componentType],u=c.BYTES_PER_ELEMENT,h=u*l,d=s.byteOffset||0,m=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,g=s.normalized===!0;let p,f;if(m&&m!==h){const _=Math.floor(d/m),S="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+_+":"+s.count;let x=t.cache.get(S);x||(p=new c(o,_*m,s.count*m/u),x=new _y(p,m/u),t.cache.add(S,x)),f=new Sl(x,l,d%m/u,g)}else o===null?p=new c(s.count*l):p=new c(o,d,s.count*l),f=new Ut(p,l,g);if(s.sparse!==void 0){const _=Gu.SCALAR,S=or[s.sparse.indices.componentType],x=s.sparse.indices.byteOffset||0,b=s.sparse.values.byteOffset||0,M=new S(a[1],x,s.sparse.count*_),R=new c(a[2],b,s.sparse.count*l);o!==null&&(f=new Ut(f.array.slice(),f.itemSize,f.normalized));for(let I=0,v=M.length;I<v;I++){const A=M[I];if(f.setX(A,R[I*l]),l>=2&&f.setY(A,R[I*l+1]),l>=3&&f.setZ(A,R[I*l+2]),l>=4&&f.setW(A,R[I*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return f})}loadTexture(e){const t=this.json,n=this.options,r=t.textures[e].source,a=t.images[r];let o=this.textureLoader;if(a.uri){const l=n.manager.getHandler(a.uri);l!==null&&(o=l)}return this.loadTextureImage(e,r,o)}loadTextureImage(e,t,n){const s=this,r=this.json,a=r.textures[e],o=r.images[t],l=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=a.name||o.name||"";const d=(r.samplers||{})[a.sampler]||{};return u.magFilter=Vu[d.magFilter]||Ft,u.minFilter=Vu[d.minFilter]||Ms,u.wrapS=Hu[d.wrapS]||fs,u.wrapT=Hu[d.wrapT]||fs,s.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const n=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());const a=s.images[e],o=self.URL||self.webkitURL;let l=a.uri||"",c=!1;if(a.bufferView!==void 0)l=n.getDependency("bufferView",a.bufferView).then(function(h){c=!0;const d=new Blob([h],{type:a.mimeType});return l=o.createObjectURL(d),l});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(l).then(function(h){return new Promise(function(d,m){let g=d;t.isImageBitmapLoader===!0&&(g=function(p){const f=new It(p);f.needsUpdate=!0,d(f)}),t.load(Pi.resolveURL(h,r.path),g,void 0,m)})}).then(function(h){return c===!0&&o.revokeObjectURL(l),h.userData.mimeType=a.mimeType||Vb(a.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),h});return this.sourceCache[e]=u,u}assignTexture(e,t,n,s){const r=this;return this.getDependency("texture",n.index).then(function(a){if(n.texCoord!==void 0&&n.texCoord!=0&&!(t==="aoMap"&&n.texCoord==1)&&console.warn("THREE.GLTFLoader: Custom UV set "+n.texCoord+" for texture "+t+" not yet supported."),r.extensions[Ue.KHR_TEXTURE_TRANSFORM]){const o=n.extensions!==void 0?n.extensions[Ue.KHR_TEXTURE_TRANSFORM]:void 0;if(o){const l=r.associations.get(a);a=r.extensions[Ue.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),r.associations.set(a,l)}}return s!==void 0&&(a.encoding=s),e[t]=a,a})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){const o="PointsMaterial:"+n.uuid;let l=this.cache.get(o);l||(l=new ud,Ht.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(o,l)),n=l}else if(e.isLine){const o="LineBasicMaterial:"+n.uuid;let l=this.cache.get(o);l||(l=new cd,Ht.prototype.copy.call(l,n),l.color.copy(n.color),this.cache.add(o,l)),n=l}if(s||r||a){let o="ClonedMaterial:"+n.uuid+":";n.isGLTFSpecularGlossinessMaterial&&(o+="specular-glossiness:"),s&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let l=this.cache.get(o);l||(l=n.clone(),r&&(l.vertexColors=!0),a&&(l.flatShading=!0),s&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(o,l),this.associations.set(l,this.associations.get(n))),n=l}n.aoMap&&t.attributes.uv2===void 0&&t.attributes.uv!==void 0&&t.setAttribute("uv2",t.attributes.uv),e.material=n}getMaterialType(){return Cs}loadMaterial(e){const t=this,n=this.json,s=this.extensions,r=n.materials[e];let a;const o={},l=r.extensions||{},c=[];if(l[Ue.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS]){const h=s[Ue.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS];a=h.getMaterialType(),c.push(h.extendParams(o,r,t))}else if(l[Ue.KHR_MATERIALS_UNLIT]){const h=s[Ue.KHR_MATERIALS_UNLIT];a=h.getMaterialType(),c.push(h.extendParams(o,r,t))}else{const h=r.pbrMetallicRoughness||{};if(o.color=new Ce(1,1,1),o.opacity=1,Array.isArray(h.baseColorFactor)){const d=h.baseColorFactor;o.color.fromArray(d),o.opacity=d[3]}h.baseColorTexture!==void 0&&c.push(t.assignTexture(o,"map",h.baseColorTexture,Ye)),o.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,o.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(o,"metalnessMap",h.metallicRoughnessTexture)),c.push(t.assignTexture(o,"roughnessMap",h.metallicRoughnessTexture))),a=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,o)})))}r.doubleSided===!0&&(o.side=Nn);const u=r.alphaMode||fo.OPAQUE;if(u===fo.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,u===fo.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&a!==vn&&(c.push(t.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new Te(1,1),r.normalTexture.scale!==void 0)){const h=r.normalTexture.scale;o.normalScale.set(h,h)}return r.occlusionTexture!==void 0&&a!==vn&&(c.push(t.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&a!==vn&&(o.emissive=new Ce().fromArray(r.emissiveFactor)),r.emissiveTexture!==void 0&&a!==vn&&c.push(t.assignTexture(o,"emissiveMap",r.emissiveTexture,Ye)),Promise.all(c).then(function(){let h;return a===Ho?h=s[Ue.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS].createMaterial(o):h=new a(o),r.name&&(h.name=r.name),xi(h,r),t.associations.set(h,{materials:e}),r.extensions&&Bs(s,h,r),h})}createUniqueName(e){const t=Ke.sanitizeNodeName(e||"");let n=t;for(let s=1;this.nodeNamesUsed[n];++s)n=t+"_"+s;return this.nodeNamesUsed[n]=!0,n}loadGeometries(e){const t=this,n=this.extensions,s=this.primitiveCache;function r(o){return n[Ue.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(l){return ju(l,o,t)})}const a=[];for(let o=0,l=e.length;o<l;o++){const c=e[o],u=kb(c),h=s[u];if(h)a.push(h.promise);else{let d;c.extensions&&c.extensions[Ue.KHR_DRACO_MESH_COMPRESSION]?d=r(c):d=ju(new Wt,c,t),s[u]={primitive:c,promise:d},a.push(d)}}return Promise.all(a)}loadMesh(e){const t=this,n=this.json,s=this.extensions,r=n.meshes[e],a=r.primitives,o=[];for(let l=0,c=a.length;l<c;l++){const u=a[l].material===void 0?Ub(this.cache):this.getDependency("material",a[l].material);o.push(u)}return o.push(t.loadGeometries(a)),Promise.all(o).then(function(l){const c=l.slice(0,l.length-1),u=l[l.length-1],h=[];for(let m=0,g=u.length;m<g;m++){const p=u[m],f=a[m];let _;const S=c[m];if(f.mode===Yt.TRIANGLES||f.mode===Yt.TRIANGLE_STRIP||f.mode===Yt.TRIANGLE_FAN||f.mode===void 0)_=r.isSkinnedMesh===!0?new vy(p,S):new xt(p,S),_.isSkinnedMesh===!0&&!_.geometry.attributes.skinWeight.normalized&&_.normalizeSkinWeights(),f.mode===Yt.TRIANGLE_STRIP?_.geometry=Xu(_.geometry,eg):f.mode===Yt.TRIANGLE_FAN&&(_.geometry=Xu(_.geometry,Gh));else if(f.mode===Yt.LINES)_=new wy(p,S);else if(f.mode===Yt.LINE_STRIP)_=new Tl(p,S);else if(f.mode===Yt.LINE_LOOP)_=new Ty(p,S);else if(f.mode===Yt.POINTS)_=new Ey(p,S);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+f.mode);Object.keys(_.geometry.morphAttributes).length>0&&Bb(_,r),_.name=t.createUniqueName(r.name||"mesh_"+e),xi(_,r),f.extensions&&Bs(s,_,f),t.assignFinalMaterial(_),h.push(_)}for(let m=0,g=h.length;m<g;m++)t.associations.set(h[m],{meshes:e,primitives:m});if(h.length===1)return h[0];const d=new Ei;t.associations.set(d,{meshes:e});for(let m=0,g=h.length;m<g;m++)d.add(h[m]);return d})}loadCamera(e){let t;const n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Pt(xg.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(t=new ur(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),xi(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n={joints:t.joints};return t.inverseBindMatrices===void 0?Promise.resolve(n):this.getDependency("accessor",t.inverseBindMatrices).then(function(s){return n.inverseBindMatrices=s,n})}loadAnimation(e){const n=this.json.animations[e],s=[],r=[],a=[],o=[],l=[];for(let c=0,u=n.channels.length;c<u;c++){const h=n.channels[c],d=n.samplers[h.sampler],m=h.target,g=m.node,p=n.parameters!==void 0?n.parameters[d.input]:d.input,f=n.parameters!==void 0?n.parameters[d.output]:d.output;s.push(this.getDependency("node",g)),r.push(this.getDependency("accessor",p)),a.push(this.getDependency("accessor",f)),o.push(d),l.push(m)}return Promise.all([Promise.all(s),Promise.all(r),Promise.all(a),Promise.all(o),Promise.all(l)]).then(function(c){const u=c[0],h=c[1],d=c[2],m=c[3],g=c[4],p=[];for(let _=0,S=u.length;_<S;_++){const x=u[_],b=h[_],M=d[_],R=m[_],I=g[_];if(x===void 0)continue;x.updateMatrix();let v;switch(Zn[I.path]){case Zn.weights:v=sr;break;case Zn.rotation:v=Fi;break;case Zn.position:case Zn.scale:default:v=rr;break}const A=x.name?x.name:x.uuid,D=R.interpolation!==void 0?Ob[R.interpolation]:gs,X=[];Zn[I.path]===Zn.weights?x.traverse(function(k){k.morphTargetInfluences&&X.push(k.name?k.name:k.uuid)}):X.push(A);let le=M.array;if(M.normalized){const k=Wo(le.constructor),U=new Float32Array(le.length);for(let Y=0,ie=le.length;Y<ie;Y++)U[Y]=le[Y]*k;le=U}for(let k=0,U=X.length;k<U;k++){const Y=new v(X[k]+"."+Zn[I.path],b.array,le,D);R.interpolation==="CUBICSPLINE"&&(Y.createInterpolant=function(te){const G=this instanceof Fi?Fb:xd;return new G(this.times,this.values,this.getValueSize()/3,te)},Y.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0),p.push(Y)}}const f=n.name?n.name:"animation_"+e;return new Fy(f,void 0,p)})}createNodeMesh(e){const t=this.json,n=this,s=t.nodes[e];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){const a=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&a.traverse(function(o){if(!!o.isMesh)for(let l=0,c=s.weights.length;l<c;l++)o.morphTargetInfluences[l]=s.weights[l]}),a})}loadNode(e){const t=this.json,n=this.extensions,s=this,r=t.nodes[e],a=r.name?s.createUniqueName(r.name):"";return function(){const o=[],l=s._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&o.push(l),r.camera!==void 0&&o.push(s.getDependency("camera",r.camera).then(function(c){return s._getNodeRef(s.cameraCache,r.camera,c)})),s._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){o.push(c)}),Promise.all(o)}().then(function(o){let l;if(r.isBone===!0?l=new ld:o.length>1?l=new Ei:o.length===1?l=o[0]:l=new rt,l!==o[0])for(let c=0,u=o.length;c<u;c++)l.add(o[c]);if(r.name&&(l.userData.name=r.name,l.name=a),xi(l,r),r.extensions&&Bs(n,l,r),r.matrix!==void 0){const c=new ze;c.fromArray(r.matrix),l.applyMatrix4(c)}else r.translation!==void 0&&l.position.fromArray(r.translation),r.rotation!==void 0&&l.quaternion.fromArray(r.rotation),r.scale!==void 0&&l.scale.fromArray(r.scale);return s.associations.has(l)||s.associations.set(l,{}),s.associations.get(l).nodes=e,l})}loadScene(e){const t=this.json,n=this.extensions,s=this.json.scenes[e],r=this,a=new Ei;s.name&&(a.name=r.createUniqueName(s.name)),xi(a,s),s.extensions&&Bs(n,a,s);const o=s.nodes||[],l=[];for(let c=0,u=o.length;c<u;c++)l.push(vd(o[c],a,t,r));return Promise.all(l).then(function(){const c=u=>{const h=new Map;for(const[d,m]of r.associations)(d instanceof Ht||d instanceof It)&&h.set(d,m);return u.traverse(d=>{const m=r.associations.get(d);m!=null&&h.set(d,m)}),h};return r.associations=c(a),a})}}function vd(i,e,t,n){const s=t.nodes[i];return n.getDependency("node",i).then(function(r){if(s.skin===void 0)return r;let a;return n.getDependency("skin",s.skin).then(function(o){a=o;const l=[];for(let c=0,u=a.joints.length;c<u;c++)l.push(n.getDependency("node",a.joints[c]));return Promise.all(l)}).then(function(o){return r.traverse(function(l){if(!l.isMesh)return;const c=[],u=[];for(let h=0,d=o.length;h<d;h++){const m=o[h];if(m){c.push(m);const g=new ze;a.inverseBindMatrices!==void 0&&g.fromArray(a.inverseBindMatrices.array,h*16),u.push(g)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',a.joints[h])}l.bind(new wl(c,u),l.matrixWorld)}),r})}).then(function(r){e.add(r);const a=[];if(s.children){const o=s.children;for(let l=0,c=o.length;l<c;l++){const u=o[l];a.push(vd(u,r,t,n))}}return Promise.all(a)})}function Gb(i,e,t){const n=e.attributes,s=new ws;if(n.POSITION!==void 0){const o=t.json.accessors[n.POSITION],l=o.min,c=o.max;if(l!==void 0&&c!==void 0){if(s.set(new P(l[0],l[1],l[2]),new P(c[0],c[1],c[2])),o.normalized){const u=Wo(or[o.componentType]);s.min.multiplyScalar(u),s.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const o=new P,l=new P;for(let c=0,u=r.length;c<u;c++){const h=r[c];if(h.POSITION!==void 0){const d=t.json.accessors[h.POSITION],m=d.min,g=d.max;if(m!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(m[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(m[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(m[2]),Math.abs(g[2]))),d.normalized){const p=Wo(or[d.componentType]);l.multiplyScalar(p)}o.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(o)}i.boundingBox=s;const a=new Ts;s.getCenter(a.center),a.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=a}function ju(i,e,t){const n=e.attributes,s=[];function r(a,o){return t.getDependency("accessor",a).then(function(l){i.setAttribute(o,l)})}for(const a in n){const o=Go[a]||a.toLowerCase();o in i.attributes||s.push(r(n[a],o))}if(e.indices!==void 0&&!i.index){const a=t.getDependency("accessor",e.indices).then(function(o){i.setIndex(o)});s.push(a)}return xi(i,e),Gb(i,e,t),Promise.all(s).then(function(){return e.targets!==void 0?zb(i,e.targets,t):i})}function Xu(i,e){let t=i.getIndex();if(t===null){const a=[],o=i.getAttribute("position");if(o!==void 0){for(let l=0;l<o.count;l++)a.push(l);i.setIndex(a),t=i.getIndex()}else return console.error("THREE.GLTFLoader.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}const n=t.count-2,s=[];if(e===Gh)for(let a=1;a<=n;a++)s.push(t.getX(0)),s.push(t.getX(a)),s.push(t.getX(a+1));else for(let a=0;a<n;a++)a%2===0?(s.push(t.getX(a)),s.push(t.getX(a+1)),s.push(t.getX(a+2))):(s.push(t.getX(a+2)),s.push(t.getX(a+1)),s.push(t.getX(a)));s.length/3!==n&&console.error("THREE.GLTFLoader.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=i.clone();return r.setIndex(s),r}class po{constructor(e,t,n,s){nt(this,"scene");nt(this,"model");nt(this,"loaded",!1);let r,a=this;this.scene=t,new fb().load(e,function(l){r=l.scene,r.position.set(n[0],n[1],n[2]),r.scale.set(.8,.8,.8),r.rotation.y=(90+180)*Math.PI/180,r.castShadow=!0,r.receiveShadow=!0,t.add(r),a.model=r,a.loaded=!0,s()},function(l){console.log(l.loaded/l.total*100)},function(l){console.log(`ERROR
`+l.toString())})}removeCar(){this.loaded&&(this.scene.remove(this.model),this.model.dispose())}traverse(){console.log(this.model),this.model.traverse(function(e){if(e.isMesh)if(e.name.includes("Glass")||e.name.includes("Optics"))e.material.metalnessMap=null,e.material.metalness=1,e.material.reflectivity=1;else if(e.name.includes("Body"))e.material.metalness=1,e.material.aoMap=e.material.metalnessMap,e.aoMapIntensity=1;else{let t=e.material.map;e.castShadow=!0,e.receiveShadow=!0,e.material=new Ay({map:t,transparent:!0})}})}getMesh(){let e=[];return this.model.traverse(function(t){t.isMesh&&e.push(t)}),e}rotateWheel(e){let t=this.model.children[0].children;for(let n=0;n<t.length;n++)t[n].name.includes("Wheel")&&(t[n].rotation.y+=e);console.log(t)}}class Wb{constructor(e,t,n,s,r){nt(this,"scene");nt(this,"fragments",[]);nt(this,"loaded",!1);nt(this,"current",0);nt(this,"flag",!0);nt(this,"far",200);this.far=t,this.size=r,this.scene=e,this.number=r/s,this.width=n,this.length=s,this.generate([0,-2,-10],n,s,10),this.generate([0,-2,0],n,s,r),console.log(this.fragments)}generate(e,t,n,s){let r=new fr,a=r.load("/CC6_road.png"),o=r.load("/CC6_map.png"),l=new Cs({map:a,metalnessMap:o,metalness:.5,roughness:1}),c=e[2];console.log(s/n);for(let u=0;u<this.number;u++){let h=new xt(new cr(t,n),l);h.position.set(e[0],e[1],c),h.rotation.x=-Math.PI/2,this.fragments.push(h),this.scene.add(h),c+=n}}remove(e){let t=e!=null?e:1500;for(let n=0;n<t;n++)this.scene.remove(this.fragments[n]);this.fragments.splice(0,t)}animate(e){this.fragments.forEach(t=>{t.position.z-=e}),this.current-=e,Math.abs(this.current)>0&&this.flag?(console.log("ADD"),this.generate([0,-2,200],this.width,this.length,this.size),this.flag=!1):Math.abs(this.current)>this.far&&(console.log("REMOVE"),this.remove(this.number),this.current=0,this.flag=!0)}}class jb{constructor(e,t,n){nt(this,"scene");nt(this,"geometry");nt(this,"material");nt(this,"particles",[]);nt(this,"loaded",!1);nt(this,"current",0);nt(this,"flag",!0);nt(this,"far",200);let s=this;this.scene=t,this.far=n,new fr().load(e,function(a){s.loaded=!0,s.geometry=new cr(15,15),s.material=new Ly({map:a,transparent:!0,depthTest:!1,depthWrite:!1}),s.generate(-2,n*8,n+100)})}generate(e,t,n){for(let s=0;s<t;s++){let r=new xt(this.geometry,this.material);r.position.set(Math.random()*60-30,18+Math.random()*2,Math.random()*n-20+e),r.rotation.set(Math.random()*3+2,0,Math.random()*2*Math.PI),r.material.opacity=.8,this.particles.push(r),this.scene.add(r)}}remove(e){let t=e!=null?e:1500;for(let n=0;n<t;n++)this.scene.remove(this.particles[n]);this.particles.splice(0,t)}animate(e){this.particles.forEach(t=>{t.rotation.z-=.002,t.position.z-=e}),this.current-=e,Math.abs(this.current)>0&&this.flag?(console.log("ADD"),this.generate(this.far/2,this.far*8,this.far+20),this.flag=!1):Math.abs(this.current)>this.far&&(console.log("REMOVE"),this.remove(this.far*6),this.current=0,this.flag=!0)}}class Xb{constructor(e,t){nt(this,"scene");nt(this,"buildings",[]);nt(this,"loaded",!1);nt(this,"current",0);nt(this,"flag",!0);nt(this,"far",200);this.scene=e,this.far=t,this.generate([5,-2,-10],2,10),this.generate([5,-2,0],2,200)}generate(e,t,n){let r=new fr().load("/building_face.png"),a=new Cs({map:r,depthTest:!0,depthWrite:!0,metalness:1}),o=e[2],l=[e[0],-e[0]];for(let c=0;c<n/t;c++){for(let u=0;u<2;u++){let h=(Math.random()*t+t)/2,d=Math.random()*2+2,m=new xt(new Es(h,d,t),a);m.position.set(l[u]+Math.random()*1.2-.6,e[1]+d/2,o),this.buildings.push(m),this.scene.add(m)}o+=t}}remove(e){let t=e!=null?e:1500;for(let n=0;n<t;n++)this.scene.remove(this.buildings[n]);this.buildings.splice(0,t)}animate(e){this.buildings.forEach(t=>{t.position.z-=e}),this.current-=e,Math.abs(this.current)>0&&this.flag?(console.log("ADD"),this.generate([5,-2,200],2,200),this.flag=!1):Math.abs(this.current)>this.far&&(console.log("REMOVE"),this.remove(200),this.current=0,this.flag=!0)}}class ot{constructor(e,t){nt(this,"scene");this.lights=[];let n=this;this.scene=e,this.gui=t.addFolder("Lights").close(),this.addEnable=!0,this.addSelection={selection:ot.TYPE.None,add:s},this.addMenu();function s(){n.addLight(n.addSelection.selection),n.lights.length>=3&&n.addEnable.disable()}e.add(new qy(1118481));let r=new Gs(14177406,20,70,1.7);r.position.set(10,-30,25),e.add(r);let a=new Gs(12281344,15,70,2);a.position.set(-10,-30,10),e.add(a);let o=new Gs(6697881,5,100,1.7);o.position.set(-0,-20,50),e.add(o)}addShadow(e){e.castShadow=!0,e.shadow.camera.near=.1,e.shadow.camera.far=500,e.shadow.radius=4,e.shadow.blurSamples=8,e.shadow.camera.right=15,e.shadow.camera.left=-15,e.shadow.camera.top=15,e.shadow.camera.bottom=-15,e.shadow.mapSize.width=512,e.shadow.mapSize.height=512,e.shadow.bias=-5e-4}addMenu(){const e=this.gui.addFolder("Add Light");e.add(this.addSelection,"selection",{None:ot.TYPE.None,Point:ot.TYPE.Point,Directional:ot.TYPE.Directional,Hemisphere:ot.TYPE.Hemisphere}).name("Light Type"),this.addEnable=e.add(this.addSelection,"add").name("Add")}addLight(e,t){switch(e){case ot.TYPE.None:break;case ot.TYPE.Point:this.initPointLight(t||ot.PointLIGHT);break;case ot.TYPE.Directional:this.initDirLight(t||ot.DirLIGHT);break;case ot.TYPE.Hemisphere:this.initHemiLight(t||ot.HemiLIGHT);break}}removeLight(e,t){this.scene.remove(e),e.dispose(),t.destroy()}initPointLight(e){let t=new Gs(e.color,e.intensity,e.distance);t.position.set(3,3,3),this.addShadow(t),this.scene.add(t),this.lights.push(e);let n=this.lights.length-1;return this.pointLightGUI(n,t),t}initDirLight(e){let t=new md(e.color),n=e.rotate.r*Math.cos(e.rotate.a*Math.PI/180),s=e.rotate.r*Math.sin(e.rotate.a*Math.PI/180);t.position.set(n,e.rotate.h,s),t.intensity=e.intensity,this.addShadow(t),this.scene.add(t),this.lights.push(e);let r=this.lights.length-1;return this.dirLightGUI(r,t),t}initHemiLight(e){let t=new Hy(e.color,e.groundColor);this.scene.add(t),this.lights.push(e);let n=this.lights.length-1;return this.hemiLightGUI(n,t),t}pointLightGUI(e,t){let n=this,s="#"+e+" PointLight";const r=this.gui.addFolder(s);r.add(this.lights[e],"intensity",0,100).name("Intensity").onChange(function(l){t.intensity=l}),r.add(this.lights[e],"distance",0,500).name("Distance").onChange(function(l){t.distance=l}),r.addColor(t,"color").name("Color").onChange(function(){n.lights[e].color=t.color}),r.add(this.lights[e].position,"x",-20,20).onChange(function(l){t.position.x=l}),r.add(this.lights[e].position,"y",-20,20).onChange(function(l){t.position.y=l}),r.add(this.lights[e].position,"z",-20,20).onChange(function(l){t.position.z=l}),r.add(this.lights[e],"decay",1,5).name("Decay").onChange(function(l){t.decay=l}),r.add(this.lights[e],"power",1,1e3).name("Power").onChange(function(l){t.power=l}),r.add(this.lights[e].shadow,"radius",0,10).name("Shadow Radius").onChange(function(l){t.shadow.radius=l}),r.add(this.lights[e].shadow,"blurSamples",1,10,1).name("Blur Samples").onChange(function(l){t.shadow.blurSamples=l});let a={Enable:!0,Remove:o};r.add(a,"Enable").onChange(function(){a.Enable?(n.scene.add(t),n.lights[e].enable=!0):(n.scene.remove(t),n.lights[e].enable=!1)});function o(){n.addEnable.enable(),n.removeLight(t,r),n.lights.splice(e,1)}r.add(a,"Remove")}dirLightGUI(e,t){let n=this,s="#"+e+" Directional Light";const r=this.gui.addFolder(s);r.add(this.lights[e],"intensity",0,20).name("Intensity").onChange(function(l){t.intensity=l}),r.addColor(t,"color").name("Color").onChange(function(){n.lights[e].color=t.color}),r.add(this.lights[e].rotate,"r",0,50).onChange(function(l){let c=l*Math.cos(n.lights[e].rotate.a*Math.PI/180),u=l*Math.sin(n.lights[e].rotate.a*Math.PI/180);t.position.set(c,n.lights[e].rotate.h,u)}).name("Rotate Radius"),r.add(this.lights[e].rotate,"a",-360,360).onChange(function(l){let c=n.lights[e].rotate.r*Math.cos(l*Math.PI/180),u=n.lights[e].rotate.r*Math.sin(l*Math.PI/180);t.position.set(c,n.lights[e].rotate.h,u)}).name("Rotate Angle"),r.add(this.lights[e].rotate,"h",1,20).onChange(function(l){t.position.y=l}).name("Light Height"),r.add(this.lights[e].shadow,"radius",0,10).name("Shadow Radius").onChange(function(l){t.shadow.radius=l}),r.add(this.lights[e].shadow,"blurSamples",1,10,1).name("Blur Samples").onChange(function(l){t.shadow.blurSamples=l});let a={Enable:!0,Remove:o};r.add(a,"Enable").onChange(function(){a.Enable?(n.scene.add(t),n.lights[e].enable=!0):(n.scene.remove(t),n.lights[e].enable=!1)});function o(){n.addEnable.enable(),n.removeLight(t,r),n.lights.splice(e,1)}r.add(a,"Remove")}hemiLightGUI(e,t){let n=this,s="#"+e+" Hemisphere Light";const r=this.gui.addFolder(s);r.add(this.lights[e],"intensity",0,20).name("Intensity").onChange(function(l){t.intensity=l}),r.addColor(t,"color").name("Sky Color").onChange(function(){n.lights[e].color=t.color}),r.addColor(t,"groundColor").name("Ground Color").onChange(function(){n.lights[e].groundColor=t.groundColor});let a={Enable:!0,Remove:o};r.add(a,"Enable").onChange(function(){a.Enable?(n.scene.add(t),n.lights[e].enable=!0):(n.scene.remove(t),n.lights[e].enable=!1)});function o(){n.addEnable.enable(),n.removeLight(t,r),n.lights.splice(e,1)}r.add(a,"Remove")}}ot.TYPE={None:0,Point:1,Directional:2,Hemisphere:3,Spot:4};ot.PointLIGHT={type:ot.TYPE.Point,intensity:40,distance:100,color:16776960,position:{x:3,y:3,z:3},decay:1,power:500,shadow:{radius:4,blurSamples:8},enable:!0};ot.DirLIGHT={type:ot.TYPE.Directional,intensity:1,color:65535,rotate:{r:20,a:90,h:15},shadow:{radius:4,blurSamples:8},enable:!0};ot.HemiLIGHT={type:ot.TYPE.Hemisphere,intensity:1,color:16777215,groundColor:1184307,enable:!0};const qu={type:"change"},mo={type:"start"},$u={type:"end"};class qb extends Oi{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new P,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Vi.ROTATE,MIDDLE:Vi.DOLLY,RIGHT:Vi.PAN},this.touches={ONE:Hi.ROTATE,TWO:Hi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return o.phi},this.getAzimuthalAngle=function(){return o.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(C){C.addEventListener("keydown",se),this._domElementKeyEvents=C},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(qu),n.update(),r=s.NONE},this.update=function(){const C=new P,O=new bn().setFromUnitVectors(e.up,new P(0,1,0)),ge=O.clone().invert(),ye=new P,_e=new bn,Se=2*Math.PI;return function(){const Pe=n.object.position;C.copy(Pe).sub(n.target),C.applyQuaternion(O),o.setFromVector3(C),n.autoRotate&&r===s.NONE&&A(I()),n.enableDamping?(o.theta+=l.theta*n.dampingFactor,o.phi+=l.phi*n.dampingFactor):(o.theta+=l.theta,o.phi+=l.phi);let Be=n.minAzimuthAngle,Qe=n.maxAzimuthAngle;return isFinite(Be)&&isFinite(Qe)&&(Be<-Math.PI?Be+=Se:Be>Math.PI&&(Be-=Se),Qe<-Math.PI?Qe+=Se:Qe>Math.PI&&(Qe-=Se),Be<=Qe?o.theta=Math.max(Be,Math.min(Qe,o.theta)):o.theta=o.theta>(Be+Qe)/2?Math.max(Be,o.theta):Math.min(Qe,o.theta)),o.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,o.phi)),o.makeSafe(),o.radius*=c,o.radius=Math.max(n.minDistance,Math.min(n.maxDistance,o.radius)),n.enableDamping===!0?n.target.addScaledVector(u,n.dampingFactor):n.target.add(u),C.setFromSpherical(o),C.applyQuaternion(ge),Pe.copy(n.target).add(C),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,u.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),u.set(0,0,0)),c=1,h||ye.distanceToSquared(n.object.position)>a||8*(1-_e.dot(n.object.quaternion))>a?(n.dispatchEvent(qu),ye.copy(n.object.position),_e.copy(n.object.quaternion),h=!1,!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",F),n.domElement.removeEventListener("pointerdown",H),n.domElement.removeEventListener("pointercancel",oe),n.domElement.removeEventListener("wheel",de),n.domElement.removeEventListener("pointermove",Z),n.domElement.removeEventListener("pointerup",$),n._domElementKeyEvents!==null&&n._domElementKeyEvents.removeEventListener("keydown",se)};const n=this,s={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let r=s.NONE;const a=1e-6,o=new zu,l=new zu;let c=1;const u=new P;let h=!1;const d=new Te,m=new Te,g=new Te,p=new Te,f=new Te,_=new Te,S=new Te,x=new Te,b=new Te,M=[],R={};function I(){return 2*Math.PI/60/60*n.autoRotateSpeed}function v(){return Math.pow(.95,n.zoomSpeed)}function A(C){l.theta-=C}function D(C){l.phi-=C}const X=function(){const C=new P;return function(ge,ye){C.setFromMatrixColumn(ye,0),C.multiplyScalar(-ge),u.add(C)}}(),le=function(){const C=new P;return function(ge,ye){n.screenSpacePanning===!0?C.setFromMatrixColumn(ye,1):(C.setFromMatrixColumn(ye,0),C.crossVectors(n.object.up,C)),C.multiplyScalar(ge),u.add(C)}}(),k=function(){const C=new P;return function(ge,ye){const _e=n.domElement;if(n.object.isPerspectiveCamera){const Se=n.object.position;C.copy(Se).sub(n.target);let xe=C.length();xe*=Math.tan(n.object.fov/2*Math.PI/180),X(2*ge*xe/_e.clientHeight,n.object.matrix),le(2*ye*xe/_e.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(X(ge*(n.object.right-n.object.left)/n.object.zoom/_e.clientWidth,n.object.matrix),le(ye*(n.object.top-n.object.bottom)/n.object.zoom/_e.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function U(C){n.object.isPerspectiveCamera?c/=C:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom*C)),n.object.updateProjectionMatrix(),h=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function Y(C){n.object.isPerspectiveCamera?c*=C:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/C)),n.object.updateProjectionMatrix(),h=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function ie(C){d.set(C.clientX,C.clientY)}function te(C){S.set(C.clientX,C.clientY)}function G(C){p.set(C.clientX,C.clientY)}function z(C){m.set(C.clientX,C.clientY),g.subVectors(m,d).multiplyScalar(n.rotateSpeed);const O=n.domElement;A(2*Math.PI*g.x/O.clientHeight),D(2*Math.PI*g.y/O.clientHeight),d.copy(m),n.update()}function W(C){x.set(C.clientX,C.clientY),b.subVectors(x,S),b.y>0?U(v()):b.y<0&&Y(v()),S.copy(x),n.update()}function ce(C){f.set(C.clientX,C.clientY),_.subVectors(f,p).multiplyScalar(n.panSpeed),k(_.x,_.y),p.copy(f),n.update()}function re(C){C.deltaY<0?Y(v()):C.deltaY>0&&U(v()),n.update()}function ue(C){let O=!1;switch(C.code){case n.keys.UP:k(0,n.keyPanSpeed),O=!0;break;case n.keys.BOTTOM:k(0,-n.keyPanSpeed),O=!0;break;case n.keys.LEFT:k(n.keyPanSpeed,0),O=!0;break;case n.keys.RIGHT:k(-n.keyPanSpeed,0),O=!0;break}O&&(C.preventDefault(),n.update())}function Me(){if(M.length===1)d.set(M[0].pageX,M[0].pageY);else{const C=.5*(M[0].pageX+M[1].pageX),O=.5*(M[0].pageY+M[1].pageY);d.set(C,O)}}function Re(){if(M.length===1)p.set(M[0].pageX,M[0].pageY);else{const C=.5*(M[0].pageX+M[1].pageX),O=.5*(M[0].pageY+M[1].pageY);p.set(C,O)}}function q(){const C=M[0].pageX-M[1].pageX,O=M[0].pageY-M[1].pageY,ge=Math.sqrt(C*C+O*O);S.set(0,ge)}function He(){n.enableZoom&&q(),n.enablePan&&Re()}function Le(){n.enableZoom&&q(),n.enableRotate&&Me()}function Ee(C){if(M.length==1)m.set(C.pageX,C.pageY);else{const ge=me(C),ye=.5*(C.pageX+ge.x),_e=.5*(C.pageY+ge.y);m.set(ye,_e)}g.subVectors(m,d).multiplyScalar(n.rotateSpeed);const O=n.domElement;A(2*Math.PI*g.x/O.clientHeight),D(2*Math.PI*g.y/O.clientHeight),d.copy(m)}function ve(C){if(M.length===1)f.set(C.pageX,C.pageY);else{const O=me(C),ge=.5*(C.pageX+O.x),ye=.5*(C.pageY+O.y);f.set(ge,ye)}_.subVectors(f,p).multiplyScalar(n.panSpeed),k(_.x,_.y),p.copy(f)}function Ge(C){const O=me(C),ge=C.pageX-O.x,ye=C.pageY-O.y,_e=Math.sqrt(ge*ge+ye*ye);x.set(0,_e),b.set(0,Math.pow(x.y/S.y,n.zoomSpeed)),U(b.y),S.copy(x)}function E(C){n.enableZoom&&Ge(C),n.enablePan&&ve(C)}function L(C){n.enableZoom&&Ge(C),n.enableRotate&&Ee(C)}function H(C){n.enabled!==!1&&(M.length===0&&(n.domElement.setPointerCapture(C.pointerId),n.domElement.addEventListener("pointermove",Z),n.domElement.addEventListener("pointerup",$)),j(C),C.pointerType==="touch"?w(C):he(C))}function Z(C){n.enabled!==!1&&(C.pointerType==="touch"?y(C):ne(C))}function $(C){J(C),M.length===0&&(n.domElement.releasePointerCapture(C.pointerId),n.domElement.removeEventListener("pointermove",Z),n.domElement.removeEventListener("pointerup",$)),n.dispatchEvent($u),r=s.NONE}function oe(C){J(C)}function he(C){let O;switch(C.button){case 0:O=n.mouseButtons.LEFT;break;case 1:O=n.mouseButtons.MIDDLE;break;case 2:O=n.mouseButtons.RIGHT;break;default:O=-1}switch(O){case Vi.DOLLY:if(n.enableZoom===!1)return;te(C),r=s.DOLLY;break;case Vi.ROTATE:if(C.ctrlKey||C.metaKey||C.shiftKey){if(n.enablePan===!1)return;G(C),r=s.PAN}else{if(n.enableRotate===!1)return;ie(C),r=s.ROTATE}break;case Vi.PAN:if(C.ctrlKey||C.metaKey||C.shiftKey){if(n.enableRotate===!1)return;ie(C),r=s.ROTATE}else{if(n.enablePan===!1)return;G(C),r=s.PAN}break;default:r=s.NONE}r!==s.NONE&&n.dispatchEvent(mo)}function ne(C){switch(r){case s.ROTATE:if(n.enableRotate===!1)return;z(C);break;case s.DOLLY:if(n.enableZoom===!1)return;W(C);break;case s.PAN:if(n.enablePan===!1)return;ce(C);break}}function de(C){n.enabled===!1||n.enableZoom===!1||r!==s.NONE||(C.preventDefault(),n.dispatchEvent(mo),re(C),n.dispatchEvent($u))}function se(C){n.enabled===!1||n.enablePan===!1||ue(C)}function w(C){switch(ae(C),M.length){case 1:switch(n.touches.ONE){case Hi.ROTATE:if(n.enableRotate===!1)return;Me(),r=s.TOUCH_ROTATE;break;case Hi.PAN:if(n.enablePan===!1)return;Re(),r=s.TOUCH_PAN;break;default:r=s.NONE}break;case 2:switch(n.touches.TWO){case Hi.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;He(),r=s.TOUCH_DOLLY_PAN;break;case Hi.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Le(),r=s.TOUCH_DOLLY_ROTATE;break;default:r=s.NONE}break;default:r=s.NONE}r!==s.NONE&&n.dispatchEvent(mo)}function y(C){switch(ae(C),r){case s.TOUCH_ROTATE:if(n.enableRotate===!1)return;Ee(C),n.update();break;case s.TOUCH_PAN:if(n.enablePan===!1)return;ve(C),n.update();break;case s.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;E(C),n.update();break;case s.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;L(C),n.update();break;default:r=s.NONE}}function F(C){n.enabled!==!1&&C.preventDefault()}function j(C){M.push(C)}function J(C){delete R[C.pointerId];for(let O=0;O<M.length;O++)if(M[O].pointerId==C.pointerId){M.splice(O,1);return}}function ae(C){let O=R[C.pointerId];O===void 0&&(O=new Te,R[C.pointerId]=O),O.set(C.pageX,C.pageY)}function me(C){const O=C.pointerId===M[0].pointerId?M[1]:M[0];return R[O.pointerId]}n.domElement.addEventListener("contextmenu",F),n.domElement.addEventListener("pointerdown",H),n.domElement.addEventListener("pointercancel",oe),n.domElement.addEventListener("wheel",de,{passive:!1}),this.update()}}function $b(i){let e=document.getElementById("three-canvas");const t=new gy,n=new od({antialias:!0}),s=new Pt(90,16/9,1,i/2);s.position.set(0,1,0);const r=new qb(s,e);r.enableDamping=!0,r.rotateSpeed=.2,n.setSize(window.innerWidth*.96,window.innerWidth*.54);let a=e.lastElementChild;for(;a;)e.removeChild(a),a=e.lastElementChild;return e.appendChild(n.domElement),n.toneMapping=kh,t.fog=new Ml(742292,5,180),{scene:t,camera:s,renderer:n,control:r}}const Ys={uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );
			gl_FragColor.a *= opacity;


		}`};class va{constructor(){this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const Yb=new ur(-1,1,1,-1,0,1),Dl=new Wt;Dl.setAttribute("position",new wt([-1,3,0,-1,-1,0,3,-1,0],3));Dl.setAttribute("uv",new wt([0,2,0,0,2,0],2));class yd{constructor(e){this._mesh=new xt(Dl,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Yb)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class jo extends va{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof Ot?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Mi.clone(e.uniforms),this.material=new Ot({defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new yd(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class Yu extends va{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}}class Kb extends va{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class Zb{constructor(e,t){if(this.renderer=e,t===void 0){const n=e.getSize(new Te);this._pixelRatio=e.getPixelRatio(),this._width=n.width,this._height=n.height,t=new Vt(this._width*this._pixelRatio,this._height*this._pixelRatio),t.texture.name="EffectComposer.rt1"}else this._pixelRatio=1,this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],Ys===void 0&&console.error("THREE.EffectComposer relies on CopyShader"),jo===void 0&&console.error("THREE.EffectComposer relies on ShaderPass"),this.copyPass=new jo(Ys),this.clock=new gd}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let s=0,r=this.passes.length;s<r;s++){const a=this.passes[s];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),a.needsSwap){if(n){const o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}Yu!==void 0&&(a instanceof Yu?n=!0:a instanceof Kb&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new Te);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}new ur(-1,1,1,-1,0,1);const bd=new Wt;bd.setAttribute("position",new wt([-1,3,0,-1,-1,0,3,-1,0],3));bd.setAttribute("uv",new wt([0,2,0,0,2,0],2));const Jb={uniforms:{tDiffuse:{value:null}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 tex = texture2D( tDiffuse, vUv );

			gl_FragColor = LinearTosRGB( tex );

		}`},an={defines:{MAX_STEP:0,PERSPECTIVE_CAMERA:!0,DISTANCE_ATTENUATION:!0,FRESNEL:!0,INFINITE_THICK:!1,SELECTIVE:!1},uniforms:{tDiffuse:{value:null},tNormal:{value:null},tMetalness:{value:null},tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null},resolution:{value:new Te},cameraProjectionMatrix:{value:new ze},cameraInverseProjectionMatrix:{value:new ze},opacity:{value:.5},maxDistance:{value:180},cameraRange:{value:0},thickness:{value:.018}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}

	`,fragmentShader:`
		// precision highp float;
		precision highp sampler2D;
		varying vec2 vUv;
		uniform sampler2D tDepth;
		uniform sampler2D tNormal;
		uniform sampler2D tMetalness;
		uniform sampler2D tDiffuse;
		uniform float cameraRange;
		uniform vec2 resolution;
		uniform float opacity;
		uniform float cameraNear;
		uniform float cameraFar;
		uniform float maxDistance;
		uniform float thickness;
		uniform mat4 cameraProjectionMatrix;
		uniform mat4 cameraInverseProjectionMatrix;
		#include <packing>
		float pointToLineDistance(vec3 x0, vec3 x1, vec3 x2) {
			//x0: point, x1: linePointA, x2: linePointB
			//https://mathworld.wolfram.com/Point-LineDistance3-Dimensional.html
			return length(cross(x0-x1,x0-x2))/length(x2-x1);
		}
		float pointPlaneDistance(vec3 point,vec3 planePoint,vec3 planeNormal){
			// https://mathworld.wolfram.com/Point-PlaneDistance.html
			//// https://en.wikipedia.org/wiki/Plane_(geometry)
			//// http://paulbourke.net/geometry/pointlineplane/
			float a=planeNormal.x,b=planeNormal.y,c=planeNormal.z;
			float x0=point.x,y0=point.y,z0=point.z;
			float x=planePoint.x,y=planePoint.y,z=planePoint.z;
			float d=-(a*x+b*y+c*z);
			float distance=(a*x0+b*y0+c*z0+d)/sqrt(a*a+b*b+c*c);
			return distance;
		}
		float getDepth( const in vec2 uv ) {
			return texture2D( tDepth, uv ).x;
		}
		float getViewZ( const in float depth ) {
			#ifdef PERSPECTIVE_CAMERA
				return perspectiveDepthToViewZ( depth, cameraNear, cameraFar );
			#else
				return orthographicDepthToViewZ( depth, cameraNear, cameraFar );
			#endif
		}
		vec3 getViewPosition( const in vec2 uv, const in float depth/*clip space*/, const in float clipW ) {
			vec4 clipPosition = vec4( ( vec3( uv, depth ) - 0.5 ) * 2.0, 1.0 );//ndc
			clipPosition *= clipW; //clip
			return ( cameraInverseProjectionMatrix * clipPosition ).xyz;//view
		}
		vec3 getViewNormal( const in vec2 uv ) {
			return unpackRGBToNormal( texture2D( tNormal, uv ).xyz );
		}
		vec2 viewPositionToXY(vec3 viewPosition){
			vec2 xy;
			vec4 clip=cameraProjectionMatrix*vec4(viewPosition,1);
			xy=clip.xy;//clip
			float clipW=clip.w;
			xy/=clipW;//NDC
			xy=(xy+1.)/2.;//uv
			xy*=resolution;//screen
			return xy;
		}
		void main(){
			#ifdef SELECTIVE
				float metalness=texture2D(tMetalness,vUv).r;
				if(metalness==0.) return;
			#endif

			float depth = getDepth( vUv );
			float viewZ = getViewZ( depth );
			if(-viewZ>=cameraFar) return;

			float clipW = cameraProjectionMatrix[2][3] * viewZ+cameraProjectionMatrix[3][3];
			vec3 viewPosition=getViewPosition( vUv, depth, clipW );

			vec2 d0=gl_FragCoord.xy;
			vec2 d1;

			vec3 viewNormal=getViewNormal( vUv );

			#ifdef PERSPECTIVE_CAMERA
				vec3 viewIncidentDir=normalize(viewPosition);
				vec3 viewReflectDir=reflect(viewIncidentDir,viewNormal);
			#else
				vec3 viewIncidentDir=vec3(0,0,-1);
				vec3 viewReflectDir=reflect(viewIncidentDir,viewNormal);
			#endif

			float maxReflectRayLen=maxDistance/dot(-viewIncidentDir,viewNormal);
			// dot(a,b)==length(a)*length(b)*cos(theta) // https://www.mathsisfun.com/algebra/vectors-dot-product.html
			// if(a.isNormalized&&b.isNormalized) dot(a,b)==cos(theta)
			// maxDistance/maxReflectRayLen=cos(theta)
			// maxDistance/maxReflectRayLen==dot(a,b)
			// maxReflectRayLen==maxDistance/dot(a,b)

			vec3 d1viewPosition=viewPosition+viewReflectDir*maxReflectRayLen;
			#ifdef PERSPECTIVE_CAMERA
				if(d1viewPosition.z>-cameraNear){
					//https://tutorial.math.lamar.edu/Classes/CalcIII/EqnsOfLines.aspx
					float t=(-cameraNear-viewPosition.z)/viewReflectDir.z;
					d1viewPosition=viewPosition+viewReflectDir*t;
				}
			#endif
			d1=viewPositionToXY(d1viewPosition);

			float totalLen=length(d1-d0);
			float xLen=d1.x-d0.x;
			float yLen=d1.y-d0.y;
			float totalStep=max(abs(xLen),abs(yLen));
			float xSpan=xLen/totalStep;
			float ySpan=yLen/totalStep;
			for(float i=0.;i<float(MAX_STEP);i++){
				if(i>=totalStep) break;
				vec2 xy=vec2(d0.x+i*xSpan,d0.y+i*ySpan);
				if(xy.x<0.||xy.x>resolution.x||xy.y<0.||xy.y>resolution.y) break;
				float s=length(xy-d0)/totalLen;
				vec2 uv=xy/resolution;

				float d = getDepth(uv);
				float vZ = getViewZ( d );
				if(-vZ>=cameraFar) continue;
				float cW = cameraProjectionMatrix[2][3] * vZ+cameraProjectionMatrix[3][3];
				vec3 vP=getViewPosition( uv, d, cW );

				#ifdef PERSPECTIVE_CAMERA
					// https://comp.nus.edu.sg/~lowkl/publications/lowk_persp_interp_techrep.pdf
					float recipVPZ=1./viewPosition.z;
					float viewReflectRayZ=1./(recipVPZ+s*(1./d1viewPosition.z-recipVPZ));
				#else
					float viewReflectRayZ=viewPosition.z+s*(d1viewPosition.z-viewPosition.z);
				#endif

				// if(viewReflectRayZ>vZ) continue; // will cause "npm run make-screenshot webgl_postprocessing_ssr" high probability hang.
				// https://github.com/mrdoob/three.js/pull/21539#issuecomment-821061164
				if(viewReflectRayZ<=vZ){

					bool hit;
					#ifdef INFINITE_THICK
						hit=true;
					#else
						float away=pointToLineDistance(vP,viewPosition,d1viewPosition);

						float minThickness;
						vec2 xyNeighbor=xy;
						xyNeighbor.x+=1.;
						vec2 uvNeighbor=xyNeighbor/resolution;
						vec3 vPNeighbor=getViewPosition(uvNeighbor,d,cW);
						minThickness=vPNeighbor.x-vP.x;
						minThickness*=3.;
						float tk=max(minThickness,thickness);

						hit=away<=tk;
					#endif

					if(hit){
						vec3 vN=getViewNormal( uv );
						if(dot(viewReflectDir,vN)>=0.) continue;
						float distance=pointPlaneDistance(vP,viewPosition,viewNormal);
						if(distance>maxDistance) break;
						float op=opacity;
						#ifdef DISTANCE_ATTENUATION
							float ratio=1.-(distance/maxDistance);
							float attenuation=ratio*ratio;
							op=opacity*attenuation;
						#endif
						#ifdef FRESNEL
							float fresnelCoe=(dot(viewIncidentDir,viewReflectDir)+1.)/2.;
							op*=fresnelCoe;
						#endif
						vec4 reflectColor=texture2D(tDiffuse,uv);
						gl_FragColor.xyz=reflectColor.xyz;
						gl_FragColor.a=op;
						break;
					}
				}
			}
		}
	`},jr={defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}

	`,fragmentShader:`

		uniform sampler2D tDepth;

		uniform float cameraNear;
		uniform float cameraFar;

		varying vec2 vUv;

		#include <packing>

		float getLinearDepth( const in vec2 uv ) {

			#if PERSPECTIVE_CAMERA == 1

				float fragCoordZ = texture2D( tDepth, uv ).x;
				float viewZ = perspectiveDepthToViewZ( fragCoordZ, cameraNear, cameraFar );
				return viewZToOrthographicDepth( viewZ, cameraNear, cameraFar );

			#else

				return texture2D( tDepth, uv ).x;

			#endif

		}

		void main() {

			float depth = getLinearDepth( vUv );
			float d = 1.0 - depth;
			// d=(d-.999)*1000.;
			gl_FragColor = vec4( vec3( d ), 1.0 );

		}

	`},Jn={uniforms:{tDiffuse:{value:null},resolution:{value:new Te},opacity:{value:.5}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}

	`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec2 resolution;
		varying vec2 vUv;
		void main() {
			//reverse engineering from PhotoShop blur filter, then change coefficient

			vec2 texelSize = ( 1.0 / resolution );

			vec4 c=texture2D(tDiffuse,vUv);

			vec2 offset;

			offset=(vec2(-1,0))*texelSize;
			vec4 cl=texture2D(tDiffuse,vUv+offset);

			offset=(vec2(1,0))*texelSize;
			vec4 cr=texture2D(tDiffuse,vUv+offset);

			offset=(vec2(0,-1))*texelSize;
			vec4 cb=texture2D(tDiffuse,vUv+offset);

			offset=(vec2(0,1))*texelSize;
			vec4 ct=texture2D(tDiffuse,vUv+offset);

			// float coeCenter=.5;
			// float coeSide=.125;
			float coeCenter=.2;
			float coeSide=.2;
			float a=c.a*coeCenter+cl.a*coeSide+cr.a*coeSide+cb.a*coeSide+ct.a*coeSide;
			vec3 rgb=(c.rgb*c.a*coeCenter+cl.rgb*cl.a*coeSide+cr.rgb*cr.a*coeSide+cb.rgb*cb.a*coeSide+ct.rgb*ct.a*coeSide)/a;
			gl_FragColor=vec4(rgb,a);

		}
	`};class Rt extends va{constructor({renderer:e,scene:t,camera:n,width:s,height:r,selects:a,bouncing:o=!1,groundReflector:l}){super(),this.width=s!==void 0?s:512,this.height=r!==void 0?r:512,this.clear=!0,this.renderer=e,this.scene=t,this.camera=n,this.groundReflector=l,this.opacity=an.uniforms.opacity.value,this.output=0,this.maxDistance=an.uniforms.maxDistance.value,this.thickness=an.uniforms.thickness.value,this.tempColor=new Ce,this._selects=a,this.selective=Array.isArray(this._selects),Object.defineProperty(this,"selects",{get(){return this._selects},set(u){this._selects!==u&&(this._selects=u,Array.isArray(u)?(this.selective=!0,this.ssrMaterial.defines.SELECTIVE=!0,this.ssrMaterial.needsUpdate=!0):(this.selective=!1,this.ssrMaterial.defines.SELECTIVE=!1,this.ssrMaterial.needsUpdate=!0))}}),this._bouncing=o,Object.defineProperty(this,"bouncing",{get(){return this._bouncing},set(u){this._bouncing!==u&&(this._bouncing=u,u?this.ssrMaterial.uniforms.tDiffuse.value=this.prevRenderTarget.texture:this.ssrMaterial.uniforms.tDiffuse.value=this.beautyRenderTarget.texture)}}),this.blur=!0,this._distanceAttenuation=an.defines.DISTANCE_ATTENUATION,Object.defineProperty(this,"distanceAttenuation",{get(){return this._distanceAttenuation},set(u){this._distanceAttenuation!==u&&(this._distanceAttenuation=u,this.ssrMaterial.defines.DISTANCE_ATTENUATION=u,this.ssrMaterial.needsUpdate=!0)}}),this._fresnel=an.defines.FRESNEL,Object.defineProperty(this,"fresnel",{get(){return this._fresnel},set(u){this._fresnel!==u&&(this._fresnel=u,this.ssrMaterial.defines.FRESNEL=u,this.ssrMaterial.needsUpdate=!0)}}),this._infiniteThick=an.defines.INFINITE_THICK,Object.defineProperty(this,"infiniteThick",{get(){return this._infiniteThick},set(u){this._infiniteThick!==u&&(this._infiniteThick=u,this.ssrMaterial.defines.INFINITE_THICK=u,this.ssrMaterial.needsUpdate=!0)}});const c=new ad;c.type=_l,c.minFilter=Ze,c.magFilter=Ze,this.beautyRenderTarget=new Vt(this.width,this.height,{minFilter:Ze,magFilter:Ze,depthTexture:c,depthBuffer:!0}),this.prevRenderTarget=new Vt(this.width,this.height,{minFilter:Ze,magFilter:Ze}),this.normalRenderTarget=new Vt(this.width,this.height,{minFilter:Ze,magFilter:Ze,type:ps}),this.metalnessRenderTarget=new Vt(this.width,this.height,{minFilter:Ze,magFilter:Ze}),this.ssrRenderTarget=new Vt(this.width,this.height,{minFilter:Ze,magFilter:Ze}),this.blurRenderTarget=this.ssrRenderTarget.clone(),this.blurRenderTarget2=this.ssrRenderTarget.clone(),an===void 0&&console.error("THREE.SSRPass: The pass relies on SSRShader."),this.ssrMaterial=new Ot({defines:Object.assign({},an.defines,{MAX_STEP:Math.sqrt(this.width*this.width+this.height*this.height)}),uniforms:Mi.clone(an.uniforms),vertexShader:an.vertexShader,fragmentShader:an.fragmentShader,blending:dt}),this.ssrMaterial.uniforms.tDiffuse.value=this.beautyRenderTarget.texture,this.ssrMaterial.uniforms.tNormal.value=this.normalRenderTarget.texture,this.ssrMaterial.defines.SELECTIVE=this.selective,this.ssrMaterial.needsUpdate=!0,this.ssrMaterial.uniforms.tMetalness.value=this.metalnessRenderTarget.texture,this.ssrMaterial.uniforms.tDepth.value=this.beautyRenderTarget.depthTexture,this.ssrMaterial.uniforms.cameraNear.value=this.camera.near,this.ssrMaterial.uniforms.cameraFar.value=this.camera.far,this.ssrMaterial.uniforms.thickness.value=this.thickness,this.ssrMaterial.uniforms.resolution.value.set(this.width,this.height),this.ssrMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.ssrMaterial.uniforms.cameraInverseProjectionMatrix.value.copy(this.camera.projectionMatrixInverse),this.normalMaterial=new Cy,this.normalMaterial.blending=dt,this.metalnessOnMaterial=new vn({color:"white"}),this.metalnessOffMaterial=new vn({color:"black"}),this.blurMaterial=new Ot({defines:Object.assign({},Jn.defines),uniforms:Mi.clone(Jn.uniforms),vertexShader:Jn.vertexShader,fragmentShader:Jn.fragmentShader}),this.blurMaterial.uniforms.tDiffuse.value=this.ssrRenderTarget.texture,this.blurMaterial.uniforms.resolution.value.set(this.width,this.height),this.blurMaterial2=new Ot({defines:Object.assign({},Jn.defines),uniforms:Mi.clone(Jn.uniforms),vertexShader:Jn.vertexShader,fragmentShader:Jn.fragmentShader}),this.blurMaterial2.uniforms.tDiffuse.value=this.blurRenderTarget.texture,this.blurMaterial2.uniforms.resolution.value.set(this.width,this.height),this.depthRenderMaterial=new Ot({defines:Object.assign({},jr.defines),uniforms:Mi.clone(jr.uniforms),vertexShader:jr.vertexShader,fragmentShader:jr.fragmentShader,blending:dt}),this.depthRenderMaterial.uniforms.tDepth.value=this.beautyRenderTarget.depthTexture,this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new Ot({uniforms:Mi.clone(Ys.uniforms),vertexShader:Ys.vertexShader,fragmentShader:Ys.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:ia,blendDst:sa,blendEquation:ei,blendSrcAlpha:ia,blendDstAlpha:sa,blendEquationAlpha:ei}),this.fsQuad=new yd(null),this.originalClearColor=new Ce}dispose(){this.beautyRenderTarget.dispose(),this.prevRenderTarget.dispose(),this.normalRenderTarget.dispose(),this.metalnessRenderTarget.dispose(),this.ssrRenderTarget.dispose(),this.blurRenderTarget.dispose(),this.blurRenderTarget2.dispose(),this.normalMaterial.dispose(),this.metalnessOnMaterial.dispose(),this.metalnessOffMaterial.dispose(),this.blurMaterial.dispose(),this.blurMaterial2.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this.fsQuad.dispose()}render(e,t){switch(e.setRenderTarget(this.beautyRenderTarget),e.clear(),this.groundReflector&&(this.groundReflector.visible=!1,this.groundReflector.doRender(this.renderer,this.scene,this.camera),this.groundReflector.visible=!0),e.render(this.scene,this.camera),this.groundReflector&&(this.groundReflector.visible=!1),this.renderOverride(e,this.normalMaterial,this.normalRenderTarget,0,0),this.selective&&this.renderMetalness(e,this.metalnessOnMaterial,this.metalnessRenderTarget,0,0),this.ssrMaterial.uniforms.opacity.value=this.opacity,this.ssrMaterial.uniforms.maxDistance.value=this.maxDistance,this.ssrMaterial.uniforms.thickness.value=this.thickness,this.renderPass(e,this.ssrMaterial,this.ssrRenderTarget),this.blur&&(this.renderPass(e,this.blurMaterial,this.blurRenderTarget),this.renderPass(e,this.blurMaterial2,this.blurRenderTarget2)),this.output){case Rt.OUTPUT.Default:this.bouncing?(this.copyMaterial.uniforms.tDiffuse.value=this.beautyRenderTarget.texture,this.copyMaterial.blending=dt,this.renderPass(e,this.copyMaterial,this.prevRenderTarget),this.blur?this.copyMaterial.uniforms.tDiffuse.value=this.blurRenderTarget2.texture:this.copyMaterial.uniforms.tDiffuse.value=this.ssrRenderTarget.texture,this.copyMaterial.blending=Un,this.renderPass(e,this.copyMaterial,this.prevRenderTarget),this.copyMaterial.uniforms.tDiffuse.value=this.prevRenderTarget.texture,this.copyMaterial.blending=dt,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t)):(this.copyMaterial.uniforms.tDiffuse.value=this.beautyRenderTarget.texture,this.copyMaterial.blending=dt,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t),this.blur?this.copyMaterial.uniforms.tDiffuse.value=this.blurRenderTarget2.texture:this.copyMaterial.uniforms.tDiffuse.value=this.ssrRenderTarget.texture,this.copyMaterial.blending=Un,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t));break;case Rt.OUTPUT.SSR:this.blur?this.copyMaterial.uniforms.tDiffuse.value=this.blurRenderTarget2.texture:this.copyMaterial.uniforms.tDiffuse.value=this.ssrRenderTarget.texture,this.copyMaterial.blending=dt,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t),this.bouncing&&(this.blur?this.copyMaterial.uniforms.tDiffuse.value=this.blurRenderTarget2.texture:this.copyMaterial.uniforms.tDiffuse.value=this.beautyRenderTarget.texture,this.copyMaterial.blending=dt,this.renderPass(e,this.copyMaterial,this.prevRenderTarget),this.copyMaterial.uniforms.tDiffuse.value=this.ssrRenderTarget.texture,this.copyMaterial.blending=Un,this.renderPass(e,this.copyMaterial,this.prevRenderTarget));break;case Rt.OUTPUT.Beauty:this.copyMaterial.uniforms.tDiffuse.value=this.beautyRenderTarget.texture,this.copyMaterial.blending=dt,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case Rt.OUTPUT.Depth:this.renderPass(e,this.depthRenderMaterial,this.renderToScreen?null:t);break;case Rt.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.copyMaterial.blending=dt,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case Rt.OUTPUT.Metalness:this.copyMaterial.uniforms.tDiffuse.value=this.metalnessRenderTarget.texture,this.copyMaterial.blending=dt,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;default:console.warn("THREE.SSRPass: Unknown output type.")}}renderPass(e,t,n,s,r){this.originalClearColor.copy(e.getClearColor(this.tempColor));const a=e.getClearAlpha(this.tempColor),o=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,s!=null&&(e.setClearColor(s),e.setClearAlpha(r||0),e.clear()),this.fsQuad.material=t,this.fsQuad.render(e),e.autoClear=o,e.setClearColor(this.originalClearColor),e.setClearAlpha(a)}renderOverride(e,t,n,s,r){this.originalClearColor.copy(e.getClearColor(this.tempColor));const a=e.getClearAlpha(this.tempColor),o=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,s=t.clearColor||s,r=t.clearAlpha||r,s!=null&&(e.setClearColor(s),e.setClearAlpha(r||0),e.clear()),this.scene.overrideMaterial=t,e.render(this.scene,this.camera),this.scene.overrideMaterial=null,e.autoClear=o,e.setClearColor(this.originalClearColor),e.setClearAlpha(a)}renderMetalness(e,t,n,s,r){this.originalClearColor.copy(e.getClearColor(this.tempColor));const a=e.getClearAlpha(this.tempColor),o=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,s=t.clearColor||s,r=t.clearAlpha||r,s!=null&&(e.setClearColor(s),e.setClearAlpha(r||0),e.clear()),this.scene.traverseVisible(l=>{l._SSRPassBackupMaterial=l.material,this._selects.includes(l)?l.material=this.metalnessOnMaterial:l.material=this.metalnessOffMaterial}),e.render(this.scene,this.camera),this.scene.traverseVisible(l=>{l.material=l._SSRPassBackupMaterial}),e.autoClear=o,e.setClearColor(this.originalClearColor),e.setClearAlpha(a)}setSize(e,t){this.width=e,this.height=t,this.ssrMaterial.defines.MAX_STEP=Math.sqrt(e*e+t*t),this.ssrMaterial.needsUpdate=!0,this.beautyRenderTarget.setSize(e,t),this.prevRenderTarget.setSize(e,t),this.ssrRenderTarget.setSize(e,t),this.normalRenderTarget.setSize(e,t),this.metalnessRenderTarget.setSize(e,t),this.blurRenderTarget.setSize(e,t),this.blurRenderTarget2.setSize(e,t),this.ssrMaterial.uniforms.resolution.value.set(e,t),this.ssrMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.ssrMaterial.uniforms.cameraInverseProjectionMatrix.value.copy(this.camera.projectionMatrixInverse),this.blurMaterial.uniforms.resolution.value.set(e,t),this.blurMaterial2.uniforms.resolution.value.set(e,t)}}Rt.OUTPUT={Default:0,SSR:1,Beauty:3,Depth:4,Normal:5,Metalness:7};const Qb=Tp('<div style="margin-left:2vw;"> Week07 by PanNic\u2002\u2002Jiangyun Pan\u2002\u2002Press &#39;W&#39; to accelerate, &#39;S&#39; to slow down<br><a href="https://github.com/Pannic17/C1-Week07">on GitHub</a>\u2002\u2002 <a href="https://git.arts.ac.uk/22044483/C1-Week07">on UAL Git</a>\u2002\u2002 <a href="mailto:j.pan0520221@arts.ac.uk">Please Wait Loading Models</a><div id="three-canvas"></div></div>',1),eM=Pn("div",null,[Lo(" Serial Generation of Cloud, Road and Buildings."),Pn("br"),Lo(" Added SSR and tone-mapping to adjust visual effects."),Pn("br"),Pn("a",{href:"https://vitejs.dev",target:"_blank"},[Pn("img",{src:lm,className:"logo",alt:"Vite logo"})]),Pn("a",{href:"https://vuejs.org/",target:"_blank"},[Pn("img",{src:cm,className:"logo vue",alt:"Vue logo"})])],-1),tM={__name:"App",setup(i){let e,t,n,s,r,a=[!1,!1,!1],o,l,c,u,h,d,m,g,p;g=200,p=.05,document.onkeypress=function(x){x.keyCode==119&&p<1?p+=.01:x.keyCode==115&&p>.01&&(p-=.01),console.log(p)};function f(){let x=$b(g);e=x.scene,t=x.camera,n=x.renderer,s=new Pl;let b={Log:M};s.add(b,"Log");function M(){console.log(t)}t.position.set(0,-.96,-6),t.rotation.set(0,.95*Math.PI,-Math.PI),t.lookAt(e.position),new gd,new ot(e,s);let I=new fr().load("/galaxy.png");e.environment=I,e.background=I,h=new po("/CC6_coupe.gltf",e,[1,-2,-2],function(){a[0]=!0,h.traverse(),A()}),d=new po("/CC6_sedan.gltf",e,[-1.1,-2,1],function(){a[1]=!0,d.traverse(),A()}),m=new po("/CC6_sport.gltf",e,[1.2,-2,4],function(){a[2]=!0,m.traverse(),A()}),l=new Wb(e,g,10,8,200),c=new jb("/smoke_1.png",e,g),u=new Xb(e,g),new xt(new Al(5,8),new vn).position.set(0,-2,-2),console.log(e);function A(){let D=!0;for(let X=0;X<a.length;X++)a[X]||(D=!1),console.log(D);console.log(a),D&&(_(),S())}}function _(){let x=[];x=x.concat(l.fragments),x=x.concat(u.buildings),x=x.concat(h.getMesh()),x=x.concat(d.getMesh()),x=x.concat(m.getMesh()),console.log(x),r=new Zb(n),o=new Rt({renderer:n,scene:e,camera:t,width:innerWidth,height:innerHeight,selects:x}),r.addPass(o),r.addPass(new jo(Jb)),o.thickness=.018,o.infiniteThick=!1;const b=s.addFolder("SSR Setting");o.maxDistance=.2,b.add(o,"bouncing"),b.add(o,"output",{Default:Rt.OUTPUT.Default,"SSR Only":Rt.OUTPUT.SSR,Beauty:Rt.OUTPUT.Beauty,Depth:Rt.OUTPUT.Depth,Normal:Rt.OUTPUT.Normal,Metalness:Rt.OUTPUT.Metalness}).onChange(function(M){o.output=parseInt(M)}),o.opacity=1}function S(){l.animate(p),u.animate(p/4),c.animate(p),r.render(),requestAnimationFrame(S)}return ul(()=>{f(),window.onresize=function(){location.reload()}}),(x,b)=>(xp(),bp(on,null,[Qb,eM],64))}};am(tM).mount("#app");
