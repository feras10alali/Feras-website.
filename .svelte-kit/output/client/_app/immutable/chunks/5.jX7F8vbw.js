function y(){}function w(t,n){for(const e in n)t[e]=n[e];return t}function j(t){return t()}function P(){return Object.create(null)}function E(t){t.forEach(j)}function v(t){return typeof t=="function"}function A(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}let i;function B(t,n){return t===n?!0:(i||(i=document.createElement("a")),i.href=n,t===i.href)}function F(t){return Object.keys(t).length===0}function O(t,...n){if(t==null){for(const r of n)r(void 0);return y}const e=t.subscribe(...n);return e.unsubscribe?()=>e.unsubscribe():e}function T(t,n,e){t.$$.on_destroy.push(O(n,e))}function U(t,n,e,r){if(t){const o=m(t,n,e,r);return t[0](o)}}function m(t,n,e,r){return t[1]&&r?w(e.ctx.slice(),t[1](r(n))):e.ctx}function C(t,n,e,r){if(t[2]&&r){const o=t[2](r(e));if(n.dirty===void 0)return o;if(typeof o=="object"){const l=[],_=Math.max(n.dirty.length,o.length);for(let s=0;s<_;s+=1)l[s]=n.dirty[s]|o[s];return l}return n.dirty|o}return n.dirty}function D(t,n,e,r,o,l){if(o){const _=m(n,e,r,l);t.p(_,o)}}function G(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let r=0;r<e;r++)n[r]=-1;return n}return-1}function H(t){const n={};for(const e in t)e[0]!=="$"&&(n[e]=t[e]);return n}function I(t,n){const e={};n=new Set(n);for(const r in t)!n.has(r)&&r[0]!=="$"&&(e[r]=t[r]);return e}function J(t){return t&&v(t.destroy)?t.destroy:y}let f;function d(t){f=t}function x(){if(!f)throw new Error("Function called outside component initialization");return f}function K(t){x().$$.on_mount.push(t)}function L(t){x().$$.after_update.push(t)}const a=[],b=[];let u=[];const g=[],k=Promise.resolve();let p=!1;function q(){p||(p=!0,k.then(z))}function N(){return q(),k}function S(t){u.push(t)}const h=new Set;let c=0;function z(){if(c!==0)return;const t=f;do{try{for(;c<a.length;){const n=a[c];c++,d(n),M(n.$$)}}catch(n){throw a.length=0,c=0,n}for(d(null),a.length=0,c=0;b.length;)b.pop()();for(let n=0;n<u.length;n+=1){const e=u[n];h.has(e)||(h.add(e),e())}u.length=0}while(a.length);for(;g.length;)g.pop()();p=!1,h.clear(),d(t)}function M(t){if(t.fragment!==null){t.update(),E(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(S)}}function Q(t){const n=[],e=[];u.forEach(r=>t.indexOf(r)===-1?n.push(r):e.push(r)),e.forEach(r=>r()),u=n}const R=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"}));export{a as A,q as B,R as _,C as a,T as b,U as c,w as d,J as e,I as f,G as g,H as h,B as i,L as j,b as k,P as l,z as m,y as n,K as o,v as p,F as q,E as r,A as s,N as t,D as u,S as v,Q as w,f as x,d as y,j as z};
