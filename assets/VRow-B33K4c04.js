import{g as u,p as f,f as R,at as G,A as _,L as B,D as d,av as I,J as g,c as k,c7 as v,c8 as c,bF as y}from"./index-DKEa1WkU.js";const T=f({fluid:{type:Boolean,default:!1},...g(),...I(),...d()},"VContainer"),q=u()({name:"VContainer",props:T(),setup(e,s){let{slots:t}=s;const{rtlClasses:a}=R(),{dimensionStyles:n}=G(e);return _(()=>B(e.tag,{class:["v-container",{"v-container--fluid":e.fluid},a.value,e.class],style:[n.value,e.style]},t)),{}}}),N=c.reduce((e,s)=>(e[s]={type:[Boolean,String,Number],default:!1},e),{}),j=c.reduce((e,s)=>{const t="offset"+y(s);return e[t]={type:[String,Number],default:null},e},{}),L=c.reduce((e,s)=>{const t="order"+y(s);return e[t]={type:[String,Number],default:null},e},{}),b={col:Object.keys(N),offset:Object.keys(j),order:Object.keys(L)};function U(e,s,t){let a=e;if(!(t==null||t===!1)){if(s){const n=s.replace(e,"");a+=`-${n}`}return e==="col"&&(a="v-"+a),e==="col"&&(t===""||t===!0)||(a+=`-${t}`),a.toLowerCase()}}const F=["auto","start","end","center","baseline","stretch"],M=f({cols:{type:[Boolean,String,Number],default:!1},...N,offset:{type:[String,Number],default:null},...j,order:{type:[String,Number],default:null},...L,alignSelf:{type:String,default:null,validator:e=>F.includes(e)},...g(),...d()},"VCol"),H=u()({name:"VCol",props:M(),setup(e,s){let{slots:t}=s;const a=k(()=>{const n=[];let l;for(l in b)b[l].forEach(o=>{const i=e[o],S=U(l,o,i);S&&n.push(S)});const r=n.some(o=>o.startsWith("v-col-"));return n.push({"v-col":!r||!e.cols,[`v-col-${e.cols}`]:e.cols,[`offset-${e.offset}`]:e.offset,[`order-${e.order}`]:e.order,[`align-self-${e.alignSelf}`]:e.alignSelf}),n});return()=>{var n;return v(e.tag,{class:[a.value,e.class],style:e.style},(n=t.default)==null?void 0:n.call(t))}}}),m=["start","end","center"],P=["space-between","space-around","space-evenly"];function C(e,s){return c.reduce((t,a)=>{const n=e+y(a);return t[n]=s(),t},{})}const D=[...m,"baseline","stretch"],$=e=>D.includes(e),h=C("align",()=>({type:String,default:null,validator:$})),K=[...m,...P],w=e=>K.includes(e),A=C("justify",()=>({type:String,default:null,validator:w})),x=[...m,...P,"stretch"],E=e=>x.includes(e),O=C("alignContent",()=>({type:String,default:null,validator:E})),V={align:Object.keys(h),justify:Object.keys(A),alignContent:Object.keys(O)},J={align:"align",justify:"justify",alignContent:"align-content"};function z(e,s,t){let a=J[e];if(t!=null){if(s){const n=s.replace(e,"");a+=`-${n}`}return a+=`-${t}`,a.toLowerCase()}}const W=f({dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:$},...h,justify:{type:String,default:null,validator:w},...A,alignContent:{type:String,default:null,validator:E},...O,...g(),...d()},"VRow"),Q=u()({name:"VRow",props:W(),setup(e,s){let{slots:t}=s;const a=k(()=>{const n=[];let l;for(l in V)V[l].forEach(r=>{const o=e[r],i=z(l,r,o);i&&n.push(i)});return n.push({"v-row--no-gutters":e.noGutters,"v-row--dense":e.dense,[`align-${e.align}`]:e.align,[`justify-${e.justify}`]:e.justify,[`align-content-${e.alignContent}`]:e.alignContent}),n});return()=>{var n;return v(e.tag,{class:["v-row",a.value,e.class],style:e.style},(n=t.default)==null?void 0:n.call(t))}}});export{q as V,Q as a,H as b};
