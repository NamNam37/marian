import{S as T,i as U,s as j,k as d,q as S,a as y,l as b,m as k,r as g,h as f,c as P,n as h,b as O,D as p,U as A,K as I,H as E}from"../chunks/index.1fe49b4b.js";import{g as q}from"../chunks/navigation.214b8065.js";import{p as z}from"../chunks/stores.900e9a1e.js";function H(r){let e,o,u,s,i,m,_;return{c(){e=d("h1"),o=S("ANO! to je správně"),u=y(),s=d("button"),i=S("Pokračovat"),this.h()},l(t){e=b(t,"H1",{class:!0});var c=k(e);o=g(c,"ANO! to je správně"),c.forEach(f),u=P(t),s=b(t,"BUTTON",{class:!0});var v=k(s);i=g(v,"Pokračovat"),v.forEach(f),this.h()},h(){h(e,"class","svelte-1y5mbk5"),h(s,"class","svelte-1y5mbk5")},m(t,c){O(t,e,c),p(e,o),O(t,u,c),O(t,s,c),p(s,i),m||(_=I(s,"click",r[1]),m=!0)},p:E,d(t){t&&f(e),t&&f(u),t&&f(s),m=!1,_()}}}function D(r){let e,o,u,s,i,m,_,t,c,v,N,a=(r[0]=="n2"||r[0]=="n*n"||r[0]=="nn"||r[0]=="n^2")&&H(r);return{c(){e=d("main"),o=d("h1"),u=S("Otázka 4"),s=y(),i=d("p"),m=S("Složitost selection sortu O(_)"),_=y(),t=d("input"),c=y(),a&&a.c(),this.h()},l(l){e=b(l,"MAIN",{class:!0});var n=k(e);o=b(n,"H1",{class:!0});var $=k(o);u=g($,"Otázka 4"),$.forEach(f),s=P(n),i=b(n,"P",{class:!0});var w=k(i);m=g(w,"Složitost selection sortu O(_)"),w.forEach(f),_=P(n),t=b(n,"INPUT",{type:!0,class:!0}),c=P(n),a&&a.l(n),n.forEach(f),this.h()},h(){h(o,"class","svelte-1y5mbk5"),h(i,"class","svelte-1y5mbk5"),h(t,"type","text"),h(t,"class","svelte-1y5mbk5"),h(e,"class","svelte-1y5mbk5")},m(l,n){O(l,e,n),p(e,o),p(o,u),p(e,s),p(e,i),p(i,m),p(e,_),p(e,t),A(t,r[0]),p(e,c),a&&a.m(e,null),v||(N=I(t,"input",r[2]),v=!0)},p(l,[n]){n&1&&t.value!==l[0]&&A(t,l[0]),l[0]=="n2"||l[0]=="n*n"||l[0]=="nn"||l[0]=="n^2"?a?a.p(l,n):(a=H(l),a.c(),a.m(e,null)):a&&(a.d(1),a=null)},i:E,o:E,d(l){l&&f(e),a&&a.d(),v=!1,N()}}}function B(r,e,o){async function u(){await new Promise(function(_){_(z.subscribe(t=>sessionStorage&&sessionStorage.setItem("code","true")))}),q("/")}let s="";function i(){s=this.value,o(0,s)}return[s,u,i]}class F extends T{constructor(e){super(),U(this,e,B,D,j,{})}}export{F as component};
