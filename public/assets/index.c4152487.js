import{S as x,i as k,s as S,e as g,t as q,a as h,b as C,c as m,l as P,d as A,n as p,f as L,g as B,h as w,j as b,m as $,k as d,o as _,p as y,q as M,r as N,u as z,O as E,W as F,v as G,w as R,x as H,y as W,z as D,A as I,B as K}from"./vendor.43763a04.js";function le(){import("data:text/javascript,")}const J=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerpolicy&&(s.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?s.credentials="include":r.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}};J();function Q(o){let e,t,n,r;return{c(){e=g("button"),t=q(o[0]),h(e,"class","svelte-1wddjlc")},m(s,i){C(s,e,i),m(e,t),n||(r=P(e,"click",o[1]),n=!0)},p(s,[i]){i&1&&A(t,s[0])},i:p,o:p,d(s){s&&L(e),n=!1,r()}}}function T(o,e,t){let{text:n="unset"}=e,{action:r=()=>{}}=e;const s=B(),i=()=>{r(),s("click",n)};return o.$$set=l=>{"text"in l&&t(0,n=l.text),"action"in l&&t(2,r=l.action)},[n,i,r]}class O extends x{constructor(e){super();k(this,e,T,Q,S,{text:0,action:2})}}function U(o){let e,t,n,r,s,i,l,a,f,u,v;return i=new O({props:{text:"Singleplayer",action:o[1]}}),a=new O({props:{text:"Multiplayer"}}),u=new O({props:{text:"Settings"}}),{c(){e=g("main"),t=g("h1"),t.textContent="Forgotten Stars",n=w(),r=g("h4"),r.textContent="Rematch",s=w(),b(i.$$.fragment),l=w(),b(a.$$.fragment),f=w(),b(u.$$.fragment),h(t,"class","svelte-1xtjb70"),h(r,"class","svelte-1xtjb70"),h(e,"class","svelte-1xtjb70")},m(c,j){C(c,e,j),m(e,t),m(e,n),m(e,r),m(e,s),$(i,e,null),m(e,l),$(a,e,null),m(e,f),$(u,e,null),v=!0},p,i(c){v||(d(i.$$.fragment,c),d(a.$$.fragment,c),d(u.$$.fragment,c),v=!0)},o(c){_(i.$$.fragment,c),_(a.$$.fragment,c),_(u.$$.fragment,c),v=!1},d(c){c&&L(e),y(i),y(a),y(u)}}}function V(o,e,t){let n,r=p,s=()=>(r(),r=M(i,a=>t(2,n=a)),i);o.$$.on_destroy.push(()=>r());let{page:i}=e;s();const l=()=>{N(i,n="play",n)};return o.$$set=a=>{"page"in a&&s(t(0,i=a.page))},[i,l]}class X extends x{constructor(e){super();k(this,e,V,U,S,{page:0})}}class Y{constructor(e){const t=e.getBoundingClientRect();this.scene=new z,this.camera=new E(t.width/-2,t.width/2,t.height/2,t.height/-2,1,1e3),this.renderer=new F,this.renderer.setSize(t.width,t.height),e.appendChild(this.renderer.domElement),this.camera.position.z=5}start(){this.render()}render(){this.renderer.render(this.scene,this.camera),window.requestAnimationFrame(this.render.bind(this))}}class Z{constructor(e){this.map=new Y(e),this.player,this.map.update=()=>{},this.map.start()}}function ee(o){let e;return{c(){e=g("div"),h(e,"class","svelte-4qo4a9")},m(t,n){C(t,e,n),o[1](e)},p,i:p,o:p,d(t){t&&L(e),o[1](null)}}}function te(o,e,t){let n;G(()=>{new Z(n)});function r(s){R[s?"unshift":"push"](()=>{n=s,t(0,n)})}return[n,r]}class ne extends x{constructor(e){super();k(this,e,te,ee,S,{})}}function re(o){let e,t;return e=new ne({}),{c(){b(e.$$.fragment)},m(n,r){$(e,n,r),t=!0},p,i(n){t||(d(e.$$.fragment,n),t=!0)},o(n){_(e.$$.fragment,n),t=!1},d(n){y(e,n)}}}function se(o){let e,t;return e=new X({props:{page:o[1]}}),{c(){b(e.$$.fragment)},m(n,r){$(e,n,r),t=!0},p,i(n){t||(d(e.$$.fragment,n),t=!0)},o(n){_(e.$$.fragment,n),t=!1},d(n){y(e,n)}}}function ie(o){let e,t,n,r;const s=[se,re],i=[];function l(a,f){return a[0]==="home"?0:a[0]==="play"?1:-1}return~(e=l(o))&&(t=i[e]=s[e](o)),{c(){t&&t.c(),n=H()},m(a,f){~e&&i[e].m(a,f),C(a,n,f),r=!0},p(a,[f]){let u=e;e=l(a),e===u?~e&&i[e].p(a,f):(t&&(I(),_(i[u],1,1,()=>{i[u]=null}),W()),~e?(t=i[e],t?t.p(a,f):(t=i[e]=s[e](a),t.c()),d(t,1),t.m(n.parentNode,n)):t=null)},i(a){r||(d(t),r=!0)},o(a){_(t),r=!1},d(a){~e&&i[e].d(a),a&&L(n)}}}function oe(o,e,t){let n;const r=K("home");return D(o,r,s=>t(0,n=s)),[n,r]}class ae extends x{constructor(e){super();k(this,e,oe,ie,S,{})}}new ae({target:document.body});export{le as __vite_legacy_guard};
