import{s as Z,n as R,b as ee,o as se,d as V}from"../chunks/6.3Z8XxjRC.js";import{S as ae,i as te,n as Q,k as b,g as c,e as u,s as h,b as O,c as d,j as W,h as j,d as T,f as P,o as l,l as n,p as le,m as X}from"../chunks/index.ruX3qJc0.js";import{g as ie}from"../chunks/entry.B93WCNDX.js";import{p as re}from"../chunks/stores.B9cgTbae.js";import{l as oe,n as ne}from"../chunks/noPicture.BKj8w0It.js";import{s as ce}from"../chunks/client.CDuZTxnV.js";function Y(o){var F,J;let e,a=`<div class="container-fluid svelte-1e3oxyj"><button class="navbar-toggler svelte-1e3oxyj" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon svelte-1e3oxyj"></span></button> <div class="collapse navbar-collapse svelte-1e3oxyj" id="navbarNav"><ul class="navbar-nav mx-auto svelte-1e3oxyj"><li class="nav-item svelte-1e3oxyj"><a class="nav-link active svelte-1e3oxyj" aria-current="page" href="/Home">Home</a></li> <li class="nav-item svelte-1e3oxyj"><a class="nav-link svelte-1e3oxyj" href="/courses">courses</a></li> <li class="nav-item svelte-1e3oxyj"><a class="nav-link svelte-1e3oxyj" href="/upcoming">upcoming</a></li> <a class="navbar-brand svelte-1e3oxyj"><img src="${oe}" alt="Logo" class="svelte-1e3oxyj"/></a> <li class="nav-item svelte-1e3oxyj"><a class="nav-link svelte-1e3oxyj" href="/Discord">Discord</a></li> <li class="nav-item svelte-1e3oxyj"><a class="nav-link svelte-1e3oxyj" aria-disabled="true">Social</a></li> <li class="nav-item svelte-1e3oxyj"><a class="nav-link svelte-1e3oxyj" aria-disabled="true">social</a></li></ul></div></div>`,s,t,w,C,S,_,g,$,k=(((F=o[0].data.session.user)==null?void 0:F.name)??"User")+"",E,B,M,U,m,y,N=(((J=o[0].data.session.user)==null?void 0:J.email)??"User")+"",D,G,f,q="sign out",L,A;function z(i,r){var p;return(p=i[0].data.session.user)!=null&&p.image?ue:ve}let H=z(o),v=H(o);return{c(){e=u("nav"),e.innerHTML=a,s=h(),t=u("div"),v.c(),w=h(),C=u("br"),S=h(),_=u("p"),g=u("strong"),$=O("@"),E=O(k),B=h(),M=u("br"),U=h(),m=u("div"),y=u("a"),D=O(N),G=h(),f=u("button"),f.textContent=q,this.h()},l(i){e=d(i,"NAV",{class:!0,"data-svelte-h":!0}),W(e)!=="svelte-gbxr5w"&&(e.innerHTML=a),s=j(i),t=d(i,"DIV",{id:!0,class:!0});var r=T(t);v.l(r),w=j(r),C=d(r,"BR",{class:!0}),S=j(r),_=d(r,"P",{id:!0,class:!0});var p=T(_);g=d(p,"STRONG",{class:!0});var x=T(g);$=P(x,"@"),E=P(x,k),x.forEach(c),p.forEach(c),B=j(r),M=d(r,"BR",{class:!0}),r.forEach(c),U=j(i),m=d(i,"DIV",{id:!0,class:!0});var I=T(m);y=d(I,"A",{id:!0,class:!0});var K=T(y);D=P(K,N),K.forEach(c),G=j(I),f=d(I,"BUTTON",{id:!0,class:!0,"data-svelte-h":!0}),W(f)!=="svelte-1v7v0bx"&&(f.textContent=q),I.forEach(c),this.h()},h(){l(e,"class","navbar navbar-expand-lg bg-body-tertiary svelte-1e3oxyj"),l(C,"class","svelte-1e3oxyj"),l(g,"class","svelte-1e3oxyj"),l(_,"id","username"),l(_,"class","svelte-1e3oxyj"),l(M,"class","svelte-1e3oxyj"),l(t,"id","main"),l(t,"class","svelte-1e3oxyj"),l(y,"id","email"),l(y,"class","svelte-1e3oxyj"),l(f,"id","signout"),l(f,"class","svelte-1e3oxyj"),l(m,"id","main-1"),l(m,"class","svelte-1e3oxyj")},m(i,r){b(i,e,r),b(i,s,r),b(i,t,r),v.m(t,null),n(t,w),n(t,C),n(t,S),n(t,_),n(_,g),n(g,$),n(g,E),n(t,B),n(t,M),b(i,U,r),b(i,m,r),n(m,y),n(y,D),n(m,G),n(m,f),L||(A=le(f,"click",ce),L=!0)},p(i,r){var p,x;H===(H=z(i))&&v?v.p(i,r):(v.d(1),v=H(i),v&&(v.c(),v.m(t,w))),r&1&&k!==(k=(((p=i[0].data.session.user)==null?void 0:p.name)??"User")+"")&&X(E,k),r&1&&N!==(N=(((x=i[0].data.session.user)==null?void 0:x.email)??"User")+"")&&X(D,N)},d(i){i&&(c(e),c(s),c(t),c(U),c(m)),v.d(),L=!1,A()}}}function ve(o){let e,a;return{c(){e=u("img"),this.h()},l(s){e=d(s,"IMG",{src:!0,width:!0,id:!0,class:!0}),this.h()},h(){V(e.src,a=ne)||l(e,"src",a),l(e,"width","50px"),l(e,"id","droped-avatar"),l(e,"class","svelte-1e3oxyj")},m(s,t){b(s,e,t)},p:R,d(s){s&&c(e)}}}function ue(o){let e,a;return{c(){e=u("img"),this.h()},l(s){e=d(s,"IMG",{src:!0,width:!0,id:!0,class:!0}),this.h()},h(){V(e.src,a=o[0].data.session.user.image)||l(e,"src",a),l(e,"width","115px"),l(e,"id","droped-avatar"),l(e,"class","svelte-1e3oxyj")},m(s,t){b(s,e,t)},p(s,t){t&1&&!V(e.src,a=s[0].data.session.user.image)&&l(e,"src",a)},d(s){s&&c(e)}}}function de(o){let e,a=o[0].data.session&&Y(o);return{c(){a&&a.c(),e=Q()},l(s){a&&a.l(s),e=Q()},m(s,t){a&&a.m(s,t),b(s,e,t)},p(s,[t]){s[0].data.session?a?a.p(s,t):(a=Y(s),a.c(),a.m(e.parentNode,e)):a&&(a.d(1),a=null)},i:R,o:R,d(s){s&&c(e),a&&a.d(s)}}}function me(o,e,a){let s;return ee(o,re,t=>a(0,s=t)),se(()=>{s.data.session||ie("/signin")}),[s]}class xe extends ae{constructor(e){super(),te(this,e,me,de,Z,{})}}export{xe as component};