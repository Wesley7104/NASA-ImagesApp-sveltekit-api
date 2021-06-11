import{S as a,i as s,s as e,e as t,t as r,k as i,c as l,a as o,g as c,d as n,n as h,b as f,f as v,G as p,h as m,H as u}from"../chunks/vendor-eed85717.js";function g(a){let s,e,g,I,d,E,y,b,k,D,x,P,w,C,A,S,V,T,L,G,H,N,O,$,j,M,U,q,z,B,F,J,K,Q,R,W,X,Y,Z=a[0].title+"",_=a[0].date+"",aa=a[0].explanation+"";return{c(){s=t("main"),e=t("div"),g=t("section"),I=t("div"),d=t("p"),E=r("Astronomy Picture of the Day (APOD):"),y=i(),b=t("h1"),k=r(Z),D=i(),x=t("div"),P=t("div"),w=t("nav"),C=t("ul"),A=t("li"),S=t("a"),V=r("Choose Date"),T=i(),L=t("li"),G=t("a"),H=r(_),N=i(),O=t("li"),$=t("a"),j=r("Previous Image"),M=i(),U=t("div"),q=t("img"),F=i(),J=t("div"),K=t("h2"),Q=r(aa),R=i(),W=t("p"),X=r("Image Copyright Info: "),Y=r(a[1]),this.h()},l(t){s=l(t,"MAIN",{});var r=o(s);e=l(r,"DIV",{class:!0});var i=o(e);g=l(i,"SECTION",{class:!0});var f=o(g);I=l(f,"DIV",{class:!0});var v=o(I);d=l(v,"P",{class:!0});var p=o(d);E=c(p,"Astronomy Picture of the Day (APOD):"),p.forEach(n),y=h(v),b=l(v,"H1",{class:!0});var m=o(b);k=c(m,Z),m.forEach(n),v.forEach(n),D=h(f),x=l(f,"DIV",{class:!0});var u=o(x);P=l(u,"DIV",{class:!0});var z=o(P);w=l(z,"NAV",{class:!0,role:!0,"aria-label":!0});var B=o(w);C=l(B,"UL",{class:!0});var sa=o(C);A=l(sa,"LI",{});var ea=o(A);S=l(ea,"A",{class:!0});var ta=o(S);V=c(ta,"Choose Date"),ta.forEach(n),ea.forEach(n),T=h(sa),L=l(sa,"LI",{});var ra=o(L);G=l(ra,"A",{class:!0,"aria-label":!0});var ia=o(G);H=c(ia,_),ia.forEach(n),ra.forEach(n),N=h(sa),O=l(sa,"LI",{});var la=o(O);$=l(la,"A",{"sveltekit:prefetch":!0,href:!0,class:!0});var oa=o($);j=c(oa,"Previous Image"),oa.forEach(n),la.forEach(n),sa.forEach(n),B.forEach(n),z.forEach(n),u.forEach(n),M=h(f),U=l(f,"DIV",{class:!0});var ca=o(U);q=l(ca,"IMG",{src:!0,alt:!0}),ca.forEach(n),F=h(f),J=l(f,"DIV",{class:!0});var na=o(J);K=l(na,"H2",{class:!0});var ha=o(K);Q=c(ha,aa),ha.forEach(n),R=h(na),W=l(na,"P",{class:!0});var fa=o(W);X=c(fa,"Image Copyright Info: "),Y=c(fa,a[1]),fa.forEach(n),na.forEach(n),f.forEach(n),i.forEach(n),r.forEach(n),this.h()},h(){f(d,"class","text myTextStyle has-text-centered svelte-ewifk0"),f(b,"class","title myTextStyle has-text-centered svelte-ewifk0"),f(I,"class","hero-head"),f(S,"class","pagination-next btn svelte-ewifk0"),f(G,"class","pagination-link btn is-current svelte-ewifk0"),f(G,"aria-label","Goto page 1"),f($,"sveltekit:prefetch",""),f($,"href","/api/previous"),f($,"class","pagination-previous btn svelte-ewifk0"),f(C,"class","pagination-list"),f(w,"class","pagination is-dark is-centered"),f(w,"role","navigation"),f(w,"aria-label","pagination"),f(P,"class","column is-four-fifths"),f(x,"class","columns is-centered"),q.src!==(z=a[0].url)&&f(q,"src",z),f(q,"alt",B=a[0].title),f(U,"class","hero-body "),f(K,"class","text myTextStyle svelte-ewifk0"),f(W,"class","text myTextStyle svelte-ewifk0"),f(J,"class","hero-foot"),f(g,"class","hero is-fullheight has-background"),f(e,"class","container")},m(a,t){v(a,s,t),p(s,e),p(e,g),p(g,I),p(I,d),p(d,E),p(I,y),p(I,b),p(b,k),p(g,D),p(g,x),p(x,P),p(P,w),p(w,C),p(C,A),p(A,S),p(S,V),p(C,T),p(C,L),p(L,G),p(G,H),p(C,N),p(C,O),p(O,$),p($,j),p(g,M),p(g,U),p(U,q),p(g,F),p(g,J),p(J,K),p(K,Q),p(J,R),p(J,W),p(W,X),p(W,Y)},p(a,[s]){1&s&&Z!==(Z=a[0].title+"")&&m(k,Z),1&s&&_!==(_=a[0].date+"")&&m(H,_),1&s&&q.src!==(z=a[0].url)&&f(q,"src",z),1&s&&B!==(B=a[0].title)&&f(q,"alt",B),1&s&&aa!==(aa=a[0].explanation+"")&&m(Q,aa),2&s&&m(Y,a[1])},i:u,o:u,d(a){a&&n(s)}}}async function I({fetch:a,page:s}){const e=await a("/api/${date}");return e.ok?{props:{apiComplete:await e.json()}}:{status:e.status,error:new Error}}function d(a,s,e){let{apiComplete:t}=s,{apiImage:r}=s,{isImgPublicDomain:i}=s;return r=t.url?t.url:"no image available... Sorry something is broken... :(",a.$$set=a=>{"apiComplete"in a&&e(0,t=a.apiComplete),"apiImage"in a&&e(2,r=a.apiImage),"isImgPublicDomain"in a&&e(1,i=a.isImgPublicDomain)},[t,i,r]}export default class extends a{constructor(a){super(),s(this,a,d,g,e,{apiComplete:0,apiImage:2,isImgPublicDomain:1})}}export{I as load};
