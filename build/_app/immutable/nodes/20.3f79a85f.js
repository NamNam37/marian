import{S as A,i as I,s as T,k as y,q as g,a as b,l as k,m as d,r as j,h as f,c as P,n as _,b as K,D as c,U as S,K as w,H as E}from"../chunks/index.1fe49b4b.js";import{g as U}from"../chunks/navigation.214b8065.js";import{p as q}from"../chunks/stores.900e9a1e.js";function $(o){let e,n,u,t,i,m,h;return{c(){e=y("h1"),n=g("ANO! to je správně"),u=b(),t=y("button"),i=g("Pokračovat"),this.h()},l(s){e=k(s,"H1",{class:!0});var p=d(e);n=j(p,"ANO! to je správně"),p.forEach(f),u=P(s),t=k(s,"BUTTON",{class:!0});var v=d(t);i=j(v,"Pokračovat"),v.forEach(f),this.h()},h(){_(e,"class","svelte-1y5mbk5"),_(t,"class","svelte-1y5mbk5")},m(s,p){K(s,e,p),c(e,n),K(s,u,p),K(s,t,p),c(t,i),m||(h=w(t,"click",o[1]),m=!0)},p:E,d(s){s&&f(e),s&&f(u),s&&f(t),m=!1,h()}}}function z(o){let e,n,u,t,i,m,h,s,p,v,H,a=(o[0]=="krysař"||o[0]=="Krysař"||o[0]=="krysar"||o[0]=="Krysar")&&$(o);return{c(){e=y("main"),n=y("h1"),u=g("Otázka 3"),t=b(),i=y("p"),m=g("Hlavní postava knihy Krysař"),h=b(),s=y("input"),p=b(),a&&a.c(),this.h()},l(l){e=k(l,"MAIN",{class:!0});var r=d(e);n=k(r,"H1",{class:!0});var N=d(n);u=j(N,"Otázka 3"),N.forEach(f),t=P(r),i=k(r,"P",{class:!0});var O=d(i);m=j(O,"Hlavní postava knihy Krysař"),O.forEach(f),h=P(r),s=k(r,"INPUT",{type:!0,class:!0}),p=P(r),a&&a.l(r),r.forEach(f),this.h()},h(){_(n,"class","svelte-1y5mbk5"),_(i,"class","svelte-1y5mbk5"),_(s,"type","text"),_(s,"class","svelte-1y5mbk5"),_(e,"class","svelte-1y5mbk5")},m(l,r){K(l,e,r),c(e,n),c(n,u),c(e,t),c(e,i),c(i,m),c(e,h),c(e,s),S(s,o[0]),c(e,p),a&&a.m(e,null),v||(H=w(s,"input",o[2]),v=!0)},p(l,[r]){r&1&&s.value!==l[0]&&S(s,l[0]),l[0]=="krysař"||l[0]=="Krysař"||l[0]=="krysar"||l[0]=="Krysar"?a?a.p(l,r):(a=$(l),a.c(),a.m(e,null)):a&&(a.d(1),a=null)},i:E,o:E,d(l){l&&f(e),a&&a.d(),v=!1,H()}}}function D(o,e,n){async function u(){await new Promise(function(h){h(q.subscribe(s=>sessionStorage&&sessionStorage.setItem("cj","true")))}),U("/")}let t="";function i(){t=this.value,n(0,t)}return[t,u,i]}class F extends A{constructor(e){super(),I(this,e,D,z,T,{})}}export{F as component};
