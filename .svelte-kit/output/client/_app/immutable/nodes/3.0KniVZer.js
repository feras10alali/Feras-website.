import{s as me,n as Q,b as pe,o as ke,i as G}from"../chunks/5.jX7F8vbw.js";import{S as fe,i as he,o as ne,j as f,g as v,e as o,s as y,b as ce,c as n,d as C,p as S,h as x,f as ve,m as l,k as r,B as be,l as ge}from"../chunks/index.BsNNkGcD.js";import{b as _e,g as we}from"../chunks/entry.C1V1UjnN.js";import{p as ye}from"../chunks/stores.XFx3Gozs.js";const xe=""+new URL("../assets/Blogo.CDZ2cX-h.png",import.meta.url).href,Te=""+new URL("../assets/oldTV.BqrICE9k.mp4",import.meta.url).href,Le=""+new URL("../assets/noPicture.DcvZmqcn.jpeg",import.meta.url).href;async function Ce(d){const{callbackUrl:e=window.location.href}=d??{},c=(await(await fetch(`${_e??""}/auth/signout`,{method:"post",headers:{"Content-Type":"application/x-www-form-urlencoded","X-Auth-Return-Redirect":"1"},body:new URLSearchParams({callbackUrl:e})})).json()).url??e;window.location.href=c,c.includes("#")&&window.location.reload()}function de(d){var ae,ie;let e,t,s=`<button class="navbar-toggler svelte-vlok32" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon svelte-vlok32"></span></button> <div class="collapse navbar-collapse svelte-vlok32" id="navbarNav"><ul class="navbar-nav mx-auto svelte-vlok32"><li class="nav-item svelte-vlok32"><a class="nav-link active svelte-vlok32" aria-current="page" href="#">Home</a></li> <li class="nav-item svelte-vlok32"><a class="nav-link svelte-vlok32" href="#">courses</a></li> <li class="nav-item svelte-vlok32"><a class="nav-link svelte-vlok32" href="#">upcoming</a></li> <a class="navbar-brand svelte-vlok32"><img src="${xe}" alt="" class="svelte-vlok32"/></a> <li class="nav-item svelte-vlok32"><a class="nav-link svelte-vlok32" href="#">Discord</a></li> <li class="nav-item svelte-vlok32"><a class="nav-link svelte-vlok32" aria-disabled="true">Social</a></li> <li class="nav-item svelte-vlok32"><a class="nav-link svelte-vlok32" aria-disabled="true">social</a></li></ul></div>`,a,c,h,j,p,N,M,H,O,U=(((ae=d[0].data.session.user)==null?void 0:ae.name)??"User")+"",P,X,V,Z,b,I,W='<a href="/myAccount" class="svelte-vlok32">Account</a>',z,q,F,R,T,Y="signOut",B,_,ee=`<a class="svelte-vlok32"><video autoplay="" class="svelte-vlok32"><source src="${Te}" type="video/mp4" class="svelte-vlok32"/></video></a>`,$,w,te='<div class="card svelte-vlok32" style="width: 18rem;"><img src="..." class="card-img-top svelte-vlok32" alt="..."/> <div class="card-body svelte-vlok32"><h5 class="card-title svelte-vlok32">Card title</h5> <p class="card-text svelte-vlok32">Some quick example text to build on the card title and make up the bulk of the card&#39;s content.</p> <a href="#" class="btn btn-primary svelte-vlok32">Go somewhere</a></div></div> <div class="card svelte-vlok32" style="width: 18rem;"><img src="..." class="card-img-top svelte-vlok32" alt="..."/> <div class="card-body svelte-vlok32"><h5 class="card-title svelte-vlok32">Card title</h5> <p class="card-text svelte-vlok32">Some quick example text to build on the card title and make up the bulk of the card&#39;s content.</p> <a href="#" class="btn btn-primary svelte-vlok32">Go somewhere</a></div></div> <div class="card svelte-vlok32" style="width: 18rem;"><img src="..." class="card-img-top svelte-vlok32" alt="..."/> <div class="card-body svelte-vlok32"><h5 class="card-title svelte-vlok32">Card title</h5> <p class="card-text svelte-vlok32">Some quick example text to build on the card title and make up the bulk of the card&#39;s content.</p> <a href="#" class="btn btn-primary svelte-vlok32">Go somewhere</a></div></div>',J,se,u=((ie=d[0].data.session.user)==null?void 0:ie.image)&&ue(d);function le(i,m){var g;return(g=i[0].data.session.user)!=null&&g.image?He:Me}let A=le(d),k=A(d);return{c(){e=o("nav"),t=o("div"),t.innerHTML=s,a=y(),c=o("div"),h=o("button"),u&&u.c(),j=y(),p=o("div"),k.c(),N=y(),M=o("p"),H=o("strong"),O=ce("@"),P=ce(U),X=y(),V=o("hr"),Z=y(),b=o("ul"),I=o("li"),I.innerHTML=W,z=y(),q=o("hr"),F=y(),R=o("li"),T=o("a"),T.textContent=Y,B=y(),_=o("div"),_.innerHTML=ee,$=y(),w=o("div"),w.innerHTML=te,this.h()},l(i){e=n(i,"NAV",{class:!0});var m=C(e);t=n(m,"DIV",{class:!0,"data-svelte-h":!0}),S(t)!=="svelte-1wj6bks"&&(t.innerHTML=s),a=x(m),c=n(m,"DIV",{class:!0});var g=C(c);h=n(g,"BUTTON",{type:!0,class:!0,"data-bs-toggle":!0,"aria-expanded":!0});var D=C(h);u&&u.l(D),D.forEach(v),j=x(g),p=n(g,"DIV",{class:!0});var L=C(p);k.l(L),N=x(L),M=n(L,"P",{id:!0,class:!0});var re=C(M);H=n(re,"STRONG",{class:!0});var K=C(H);O=ve(K,"@"),P=ve(K,U),K.forEach(v),re.forEach(v),X=x(L),V=n(L,"HR",{id:!0,class:!0}),Z=x(L),b=n(L,"UL",{class:!0});var E=C(b);I=n(E,"LI",{class:!0,"data-svelte-h":!0}),S(I)!=="svelte-1plhd6e"&&(I.innerHTML=W),z=x(E),q=n(E,"HR",{id:!0,class:!0}),F=x(E),R=n(E,"LI",{class:!0});var oe=C(R);T=n(oe,"A",{class:!0,"data-svelte-h":!0}),S(T)!=="svelte-10kdepq"&&(T.textContent=Y),oe.forEach(v),E.forEach(v),L.forEach(v),g.forEach(v),m.forEach(v),B=x(i),_=n(i,"DIV",{id:!0,class:!0,"data-svelte-h":!0}),S(_)!=="svelte-12luesw"&&(_.innerHTML=ee),$=x(i),w=n(i,"DIV",{id:!0,class:!0,"data-svelte-h":!0}),S(w)!=="svelte-zr4etu"&&(w.innerHTML=te),this.h()},h(){l(t,"class","container-fluid svelte-vlok32"),l(h,"type","button"),l(h,"class","btn btn-secondary dropdown-toggle svelte-vlok32"),l(h,"data-bs-toggle","dropdown"),l(h,"aria-expanded","false"),l(H,"class","svelte-vlok32"),l(M,"id","username"),l(M,"class","svelte-vlok32"),l(V,"id","hr"),l(V,"class","svelte-vlok32"),l(I,"class","svelte-vlok32"),l(q,"id","hrul"),l(q,"class","svelte-vlok32"),l(T,"class","svelte-vlok32"),l(R,"class","svelte-vlok32"),l(b,"class","svelte-vlok32"),l(p,"class","dropdown-menu svelte-vlok32"),l(c,"class","btn-group dropstart svelte-vlok32"),l(e,"class","navbar navbar-expand-lg bg-body-tertiary svelte-vlok32"),l(_,"id","oldTV"),l(_,"class","svelte-vlok32"),l(w,"id","corses"),l(w,"class","svelte-vlok32")},m(i,m){f(i,e,m),r(e,t),r(e,a),r(e,c),r(c,h),u&&u.m(h,null),r(c,j),r(c,p),k.m(p,null),r(p,N),r(p,M),r(M,H),r(H,O),r(H,P),r(p,X),r(p,V),r(p,Z),r(p,b),r(b,I),r(b,z),r(b,q),r(b,F),r(b,R),r(R,T),f(i,B,m),f(i,_,m),f(i,$,m),f(i,w,m),J||(se=be(T,"click",Ce),J=!0)},p(i,m){var g,D;(g=i[0].data.session.user)!=null&&g.image?u?u.p(i,m):(u=ue(i),u.c(),u.m(h,null)):u&&(u.d(1),u=null),A===(A=le(i))&&k?k.p(i,m):(k.d(1),k=A(i),k&&(k.c(),k.m(p,N))),m&1&&U!==(U=(((D=i[0].data.session.user)==null?void 0:D.name)??"User")+"")&&ge(P,U)},d(i){i&&(v(e),v(B),v(_),v($),v(w)),u&&u.d(),k.d(),J=!1,se()}}}function ue(d){let e,t;return{c(){e=o("img"),this.h()},l(s){e=n(s,"IMG",{src:!0,width:!0,class:!0}),this.h()},h(){G(e.src,t=d[0].data.session.user.image)||l(e,"src",t),l(e,"width","50px"),l(e,"class","svelte-vlok32")},m(s,a){f(s,e,a)},p(s,a){a&1&&!G(e.src,t=s[0].data.session.user.image)&&l(e,"src",t)},d(s){s&&v(e)}}}function Me(d){let e,t,s;return{c(){e=o("img"),s=o("br"),this.h()},l(a){e=n(a,"IMG",{src:!0,width:!0,id:!0,class:!0}),s=n(a,"BR",{class:!0}),this.h()},h(){G(e.src,t=Le)||l(e,"src",t),l(e,"width","50px"),l(e,"id","droped-avatar"),l(e,"class","svelte-vlok32"),l(s,"class","svelte-vlok32")},m(a,c){f(a,e,c),f(a,s,c)},p:Q,d(a){a&&(v(e),v(s))}}}function He(d){let e,t,s;return{c(){e=o("img"),s=o("br"),this.h()},l(a){e=n(a,"IMG",{src:!0,width:!0,id:!0,class:!0}),s=n(a,"BR",{class:!0}),this.h()},h(){G(e.src,t=d[0].data.session.user.image)||l(e,"src",t),l(e,"width","50px"),l(e,"id","droped-avatar"),l(e,"class","svelte-vlok32"),l(s,"class","svelte-vlok32")},m(a,c){f(a,e,c),f(a,s,c)},p(a,c){c&1&&!G(e.src,t=a[0].data.session.user.image)&&l(e,"src",t)},d(a){a&&(v(e),v(s))}}}function Ie(d){let e,t=d[0].data.session&&de(d);return{c(){t&&t.c(),e=ne()},l(s){t&&t.l(s),e=ne()},m(s,a){t&&t.m(s,a),f(s,e,a)},p(s,[a]){s[0].data.session?t?t.p(s,a):(t=de(s),t.c(),t.m(e.parentNode,e)):t&&(t.d(1),t=null)},i:Q,o:Q,d(s){s&&v(e),t&&t.d(s)}}}function Re(d,e,t){let s;return pe(d,ye,a=>t(0,s=a)),ke(()=>{s.data.session||we("/signin")}),[s]}class De extends fe{constructor(e){super(),he(this,e,Re,Ie,me,{})}}export{De as component};
