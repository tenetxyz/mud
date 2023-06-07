import{InMemoryTupleStorage as k,AsyncTupleDatabase as A}from"tuple-database";function D(t={}){let n=t.storage??new k;return new A(n)}import{AsyncTupleDatabaseClient as h}from"tuple-database";import{getAbiTypeDefaultValue as O}from"@latticexyz/schema-type/deprecated";async function y(t,n,e,s,i,r,a){let o=S(t,e,s,i),c=await n.get(o)??a?.defaultValue,l=a?.transaction??n.transact();l.set(o,{...c,...r}),a?.transaction||await l.commit()}async function g(t,n,e,s,i){return n.get(S(t,e,s,i))}async function T(t,n,e,s,i,r){let a=r?.transaction??n.transact();a.remove(S(t,e,s,i)),r?.transaction||await a.commit()}async function d(t,n,e){let s=v(t,e);return(await n.scan(s)).map(({key:r,value:a})=>({namespace:r[0],table:r[1],key:f(r),value:a}))}async function b(t,n,e,s){let i=v(t,s);return n.subscribe(i,r=>{let a={};for(let o of r.set??[]){let[c,l]=o.key;if(typeof c!="string"||typeof l!="string"){console.warn("store-cache: Expected first tuple elements to be namespace and table, ignoring set operation:",o);continue}a[C(c,l)]??={namespace:c,table:l,set:[],remove:[]},a[C(c,l)].set.push({key:f(o.key),value:o.value})}for(let o of r.remove??[]){let[c,l]=o;if(typeof c!="string"||typeof l!="string"){console.warn("store-cache: Expected first tuple elements to be namespace and table, ignoring remove operation:",o);continue}a[C(c,l)]??={namespace:c,table:l,set:[],remove:[]},a[C(c,l)].remove.push({key:f(o)})}e(Object.values(a))})}function x(t){let n={};for(let e in t)n[e]=O(t[e]);return n}function v(t,n){let{table:e,key:s}=n||{},i=n?n.namespace??t.namespace:void 0,r=e!=null&&i!=null?[i,e]:void 0,a={};return e&&(a.gte=s?.gte&&u(s.gte,p(t,e)),a.gt=s?.gt&&u(s.gt,p(t,e)),a.lte=s?.lte&&u(s.lte,p(t,e)),a.lt=s?.lt&&u(s.lt,p(t,e)),s?.eq&&(a.gte=u(s.eq,p(t,e)),a.lte=u(s.eq,p(t,e)))),{prefix:r,...a}}function S(t,n,e,s){return[n,e,...u(s,p(t,e))]}function p(t,n){let e=t.tables[n];return e?Object.getOwnPropertyNames(e.keySchema):void 0}function u(t,n){let e=[];for(let s of n??Object.keys(t))e.push({[s]:P(t[s])});return e}function f(t){let n={};for(let e of t)if(!(e===null||Array.isArray(e)||typeof e!="object"))for(let[s,i]of Object.entries(e))n[s]=R(i);return n}function P(t){return typeof t=="bigint"?`${t.toString()}n`:t}function R(t){return typeof t=="string"&&/^-?\d+n$/.test(t)?BigInt(t.slice(0,-1)):t}function C(t,n){return t+"/"+n}import{curry as m}from"@latticexyz/common/utils";function K(t,n){let e=new h(t),{namespace:s}=n,i={},r={set:m(y,n,e),get:m(g,n,e),remove:m(T,n,e),subscribe:m(b,n,e),scan:m(d,n,e)};for(let a in n.tables)i[a]={set:(o,c,l)=>r.set(s,a,o,c,{defaultValue:x(n.tables?.[a].schema),...l}),get:m(r.get,s,a),remove:m(r.remove,s,a),subscribe:(o,c)=>b(n,e,o,{namespace:s,table:a,...c}),scan:o=>d(n,e,{namespace:s,table:a,...o})};return{tables:i,_tupleDatabaseClient:e,...r}}export{D as createDatabase,K as createDatabaseClient,g as get,T as remove,y as set,b as subscribe};
//# sourceMappingURL=index.js.map