import{arrayToIterator as v,deferred as b,mergeIterators as x,transformIterator as D}from"@latticexyz/utils";var O=self.indexedDB,N=2;function B(u,y){u.objectStoreNames.contains(y)||u.createObjectStore(y)}function E(u,y,d=N,j=O){let[l,i,m]=b(),S=j.open(u,d);return S.onupgradeneeded=()=>{let a=S.result;for(let g of y)B(a,g)},S.onsuccess=()=>{let a=S.result;l(a)},S.onerror=a=>{i(new Error(JSON.stringify(a)))},m}async function J(u,y,d,j){let l=await E(u,y,d,j);function i(e){return l.transaction(e,"readwrite").objectStore(e)}function m(e,r,o,s=!1){let n=i(e).put(o,r);if(s)return;let[t,c,I]=b();return n.onerror=w=>{c(new Error(JSON.stringify(w)))},n.onsuccess=()=>{t()},I}function S(e,r){let[o,s,f]=b(),t=i(e).get(r);return t.onerror=c=>{s(new Error(JSON.stringify(c)))},t.onsuccess=()=>{let c=t.result;o(c)},f}function a(e,r){let[o,s,f]=b(),t=i(e).delete(r);return t.onerror=c=>{s(new Error(JSON.stringify(c)))},t.onsuccess=()=>{o()},f}function g(e){let[r,o,s]=b(),n=i(e).getAllKeys();return n.onerror=t=>{o(new Error(JSON.stringify(t)))},n.onsuccess=()=>{let t=v(n.result),c=D(t,I=>I.toString());r(c)},s}function p(e){let[r,o,s]=b(),n=i(e).getAll();return n.onerror=t=>{o(new Error(JSON.stringify(t)))},n.onsuccess=()=>{r(v(n.result))},s}async function K(e){let[r,o]=await Promise.all([g(e),p(e)]);return x(r,o)}return{set:m,get:S,remove:a,keys:g,values:p,entries:K,db:l}}export{J as initCache};
//# sourceMappingURL=initCache-EWNWDC2L.js.map