import{aB as H,s as x,az as z,be as me,bT as k,p as T,v as L,q as Q,c as g,b as ye,bv as et,t as w,aM as tt,bU as ge,g as D,A as E,L as f,O as ee,bV as at,ag as nt,aX as lt,ah as be,ai as it,D as R,J as $,af as M,bW as st,aZ as rt,bn as ut,w as ot,h as Se,i as he,bl as ct,bd as pe,at as Ce,k as ke,m as we,bX as dt,ay as vt,M as te,bk as Ie,B as Pe,br as ft,E as Ae,G as Ve,av as Le,ba as Oe,K as Be,bs as G,bo as mt,P as oe,aY as ce,aj as de,a9 as yt,d as gt,bY as _e,a_ as je,bb as bt,bC as O,aP as Me,j as St,z as ht,bP as pt}from"./index-CF2ihxkl.js";import{u as Ct}from"./ssrBoot-CeqS8Fq6.js";import{V as kt}from"./VDivider-QbtoFpwS.js";const ae=Symbol.for("vuetify:list");function Te(){const e=H(ae,{hasPrepend:x(!1),updateHasPrepend:()=>null}),i={hasPrepend:x(!1),updateHasPrepend:t=>{t&&(i.hasPrepend.value=t)}};return z(ae,i),e}function xe(){return H(ae,null)}const le=e=>{const i={activate:t=>{let{id:a,value:l,activated:n}=t;return a=k(a),e&&!l&&n.size===1&&n.has(a)||(l?n.add(a):n.delete(a)),n},in:(t,a,l)=>{let n=new Set;if(t!=null)for(const r of me(t))n=i.activate({id:r,value:!0,activated:new Set(n),children:a,parents:l});return n},out:t=>Array.from(t)};return i},Fe=e=>{const i=le(e);return{activate:a=>{let{activated:l,id:n,...r}=a;n=k(n);const u=l.has(n)?new Set([n]):new Set;return i.activate({...r,id:n,activated:u})},in:(a,l,n)=>{let r=new Set;if(a!=null){const u=me(a);u.length&&(r=i.in(u.slice(0,1),l,n))}return r},out:(a,l,n)=>i.out(a,l,n)}},wt=e=>{const i=le(e);return{activate:a=>{let{id:l,activated:n,children:r,...u}=a;return l=k(l),r.has(l)?n:i.activate({id:l,activated:n,children:r,...u})},in:i.in,out:i.out}},It=e=>{const i=Fe(e);return{activate:a=>{let{id:l,activated:n,children:r,...u}=a;return l=k(l),r.has(l)?n:i.activate({id:l,activated:n,children:r,...u})},in:i.in,out:i.out}},Pt={open:e=>{let{id:i,value:t,opened:a,parents:l}=e;if(t){const n=new Set;n.add(i);let r=l.get(i);for(;r!=null;)n.add(r),r=l.get(r);return n}else return a.delete(i),a},select:()=>null},De={open:e=>{let{id:i,value:t,opened:a,parents:l}=e;if(t){let n=l.get(i);for(a.add(i);n!=null&&n!==i;)a.add(n),n=l.get(n);return a}else a.delete(i);return a},select:()=>null},At={open:De.open,select:e=>{let{id:i,value:t,opened:a,parents:l}=e;if(!t)return a;const n=[];let r=l.get(i);for(;r!=null;)n.push(r),r=l.get(r);return new Set(n)}},ie=e=>{const i={select:t=>{let{id:a,value:l,selected:n}=t;if(a=k(a),e&&!l){const r=Array.from(n.entries()).reduce((u,m)=>{let[c,y]=m;return y==="on"&&u.push(c),u},[]);if(r.length===1&&r[0]===a)return n}return n.set(a,l?"on":"off"),n},in:(t,a,l)=>{const n=new Map;for(const r of t||[])i.select({id:r,value:!0,selected:n,children:a,parents:l});return n},out:t=>{const a=[];for(const[l,n]of t.entries())n==="on"&&a.push(l);return a}};return i},Ge=e=>{const i=ie(e);return{select:a=>{let{selected:l,id:n,...r}=a;n=k(n);const u=l.has(n)?new Map([[n,l.get(n)]]):new Map;return i.select({...r,id:n,selected:u})},in:(a,l,n)=>a!=null&&a.length?i.in(a.slice(0,1),l,n):new Map,out:(a,l,n)=>i.out(a,l,n)}},Vt=e=>{const i=ie(e);return{select:a=>{let{id:l,selected:n,children:r,...u}=a;return l=k(l),r.has(l)?n:i.select({id:l,selected:n,children:r,...u})},in:i.in,out:i.out}},Lt=e=>{const i=Ge(e);return{select:a=>{let{id:l,selected:n,children:r,...u}=a;return l=k(l),r.has(l)?n:i.select({id:l,selected:n,children:r,...u})},in:i.in,out:i.out}},Ot=e=>{const i={select:t=>{let{id:a,value:l,selected:n,children:r,parents:u}=t;a=k(a);const m=new Map(n),c=[a];for(;c.length;){const d=c.shift();n.set(k(d),l?"on":"off"),r.has(d)&&c.push(...r.get(d))}let y=k(u.get(a));for(;y;){const d=r.get(y),b=d.every(s=>n.get(k(s))==="on"),S=d.every(s=>!n.has(k(s))||n.get(k(s))==="off");n.set(y,b?"on":S?"off":"indeterminate"),y=k(u.get(y))}return e&&!l&&Array.from(n.entries()).reduce((b,S)=>{let[s,o]=S;return o==="on"&&b.push(s),b},[]).length===0?m:n},in:(t,a,l)=>{let n=new Map;for(const r of t||[])n=i.select({id:r,value:!0,selected:n,children:a,parents:l});return n},out:(t,a)=>{const l=[];for(const[n,r]of t.entries())r==="on"&&!a.has(n)&&l.push(n);return l}};return i},N=Symbol.for("vuetify:nested"),Ne={id:x(),root:{register:()=>null,unregister:()=>null,parents:L(new Map),children:L(new Map),open:()=>null,openOnSelect:()=>null,activate:()=>null,select:()=>null,activatable:L(!1),selectable:L(!1),opened:L(new Set),activated:L(new Set),selected:L(new Map),selectedValues:L([]),getPath:()=>[]}},Bt=T({activatable:Boolean,selectable:Boolean,activeStrategy:[String,Function,Object],selectStrategy:[String,Function,Object],openStrategy:[String,Object],opened:null,activated:null,selected:null,mandatory:Boolean},"nested"),_t=e=>{let i=!1;const t=L(new Map),a=L(new Map),l=Q(e,"opened",e.opened,s=>new Set(s),s=>[...s.values()]),n=g(()=>{if(typeof e.activeStrategy=="object")return e.activeStrategy;if(typeof e.activeStrategy=="function")return e.activeStrategy(e.mandatory);switch(e.activeStrategy){case"leaf":return wt(e.mandatory);case"single-leaf":return It(e.mandatory);case"independent":return le(e.mandatory);case"single-independent":default:return Fe(e.mandatory)}}),r=g(()=>{if(typeof e.selectStrategy=="object")return e.selectStrategy;if(typeof e.selectStrategy=="function")return e.selectStrategy(e.mandatory);switch(e.selectStrategy){case"single-leaf":return Lt(e.mandatory);case"leaf":return Vt(e.mandatory);case"independent":return ie(e.mandatory);case"single-independent":return Ge(e.mandatory);case"classic":default:return Ot(e.mandatory)}}),u=g(()=>{if(typeof e.openStrategy=="object")return e.openStrategy;switch(e.openStrategy){case"list":return At;case"single":return Pt;case"multiple":default:return De}}),m=Q(e,"activated",e.activated,s=>n.value.in(s,t.value,a.value),s=>n.value.out(s,t.value,a.value)),c=Q(e,"selected",e.selected,s=>r.value.in(s,t.value,a.value),s=>r.value.out(s,t.value,a.value));ye(()=>{i=!0});function y(s){const o=[];let v=s;for(;v!=null;)o.unshift(v),v=a.value.get(v);return o}const d=et("nested"),b=new Set,S={id:x(),root:{opened:l,activatable:w(e,"activatable"),selectable:w(e,"selectable"),activated:m,selected:c,selectedValues:g(()=>{const s=[];for(const[o,v]of c.value.entries())v==="on"&&s.push(o);return s}),register:(s,o,v)=>{if(b.has(s)){y(s).map(String).join(" -> "),y(o).concat(s).map(String).join(" -> ");return}else b.add(s);o&&s!==o&&a.value.set(s,o),v&&t.value.set(s,[]),o!=null&&t.value.set(o,[...t.value.get(o)||[],s])},unregister:s=>{if(i)return;b.delete(s),t.value.delete(s);const o=a.value.get(s);if(o){const v=t.value.get(o)??[];t.value.set(o,v.filter(p=>p!==s))}a.value.delete(s)},open:(s,o,v)=>{d.emit("click:open",{id:s,value:o,path:y(s),event:v});const p=u.value.open({id:s,value:o,opened:new Set(l.value),children:t.value,parents:a.value,event:v});p&&(l.value=p)},openOnSelect:(s,o,v)=>{const p=u.value.select({id:s,value:o,selected:new Map(c.value),opened:new Set(l.value),children:t.value,parents:a.value,event:v});p&&(l.value=p)},select:(s,o,v)=>{d.emit("click:select",{id:s,value:o,path:y(s),event:v});const p=r.value.select({id:s,value:o,selected:new Map(c.value),children:t.value,parents:a.value,event:v});p&&(c.value=p),S.root.openOnSelect(s,o,v)},activate:(s,o,v)=>{if(!e.activatable)return S.root.select(s,!0,v);d.emit("click:activate",{id:s,value:o,path:y(s),event:v});const p=n.value.activate({id:s,value:o,activated:new Set(m.value),children:t.value,parents:a.value,event:v});p&&(m.value=p)},children:t,parents:a,getPath:y}};return z(N,S),S.root},Ee=(e,i)=>{const t=H(N,Ne),a=Symbol(tt()),l=g(()=>e.value!==void 0?e.value:a),n={...t,id:l,open:(r,u)=>t.root.open(l.value,r,u),openOnSelect:(r,u)=>t.root.openOnSelect(l.value,r,u),isOpen:g(()=>t.root.opened.value.has(l.value)),parent:g(()=>t.root.parents.value.get(l.value)),activate:(r,u)=>t.root.activate(l.value,r,u),isActivated:g(()=>t.root.activated.value.has(k(l.value))),select:(r,u)=>t.root.select(l.value,r,u),isSelected:g(()=>t.root.selected.value.get(k(l.value))==="on"),isIndeterminate:g(()=>t.root.selected.value.get(k(l.value))==="indeterminate"),isLeaf:g(()=>!t.root.children.value.get(l.value)),isGroupActivator:t.isGroupActivator};return ge(()=>{!t.isGroupActivator&&t.root.register(l.value,t.id.value,i)}),ye(()=>{!t.isGroupActivator&&t.root.unregister(l.value)}),i&&z(N,n),n},jt=()=>{const e=H(N,Ne);z(N,{...e,isGroupActivator:!0})},Mt=at({name:"VListGroupActivator",setup(e,i){let{slots:t}=i;return jt(),()=>{var a;return(a=t.default)==null?void 0:a.call(t)}}}),Tt=T({activeColor:String,baseColor:String,color:String,collapseIcon:{type:M,default:"$collapse"},expandIcon:{type:M,default:"$expand"},prependIcon:M,appendIcon:M,fluid:Boolean,subgroup:Boolean,title:String,value:null,...$(),...R()},"VListGroup"),ve=D()({name:"VListGroup",props:Tt(),setup(e,i){let{slots:t}=i;const{isOpen:a,open:l,id:n}=Ee(w(e,"value"),!0),r=g(()=>`v-list-group--id-${String(n.value)}`),u=xe(),{isBooted:m}=Ct();function c(S){S.stopPropagation(),l(!a.value,S)}const y=g(()=>({onClick:c,class:"v-list-group__header",id:r.value})),d=g(()=>a.value?e.collapseIcon:e.expandIcon),b=g(()=>({VListItem:{active:a.value,activeColor:e.activeColor,baseColor:e.baseColor,color:e.color,prependIcon:e.prependIcon||e.subgroup&&d.value,appendIcon:e.appendIcon||!e.subgroup&&d.value,title:e.title,value:e.value}}));return E(()=>f(e.tag,{class:["v-list-group",{"v-list-group--prepend":u==null?void 0:u.hasPrepend.value,"v-list-group--fluid":e.fluid,"v-list-group--subgroup":e.subgroup,"v-list-group--open":a.value},e.class],style:e.style},{default:()=>[t.activator&&f(ee,{defaults:b.value},{default:()=>[f(Mt,null,{default:()=>[t.activator({props:y.value,isOpen:a.value})]})]}),f(nt,{transition:{component:lt},disabled:!m.value},{default:()=>{var S;return[be(f("div",{class:"v-list-group__items",role:"group","aria-labelledby":r.value},[(S=t.default)==null?void 0:S.call(t)]),[[it,a.value]])]}})]})),{isOpen:a}}}),xt=T({opacity:[Number,String],...$(),...R()},"VListItemSubtitle"),Ft=D()({name:"VListItemSubtitle",props:xt(),setup(e,i){let{slots:t}=i;return E(()=>f(e.tag,{class:["v-list-item-subtitle",e.class],style:[{"--v-list-item-subtitle-opacity":e.opacity},e.style]},t)),{}}}),Dt=st("v-list-item-title"),Gt=T({active:{type:Boolean,default:void 0},activeClass:String,activeColor:String,appendAvatar:String,appendIcon:M,baseColor:String,disabled:Boolean,lines:[Boolean,String],link:{type:Boolean,default:void 0},nav:Boolean,prependAvatar:String,prependIcon:M,ripple:{type:[Boolean,Object],default:!0},slim:Boolean,subtitle:[String,Number],title:[String,Number],value:null,onClick:G(),onClickOnce:G(),...Be(),...$(),...Oe(),...Le(),...Ve(),...Ae(),...ft(),...R(),...Pe(),...Ie({variant:"text"})},"VListItem"),fe=D()({name:"VListItem",directives:{Ripple:rt},props:Gt(),emits:{click:e=>!0},setup(e,i){let{attrs:t,slots:a,emit:l}=i;const n=ut(e,t),r=g(()=>e.value===void 0?n.href.value:e.value),{activate:u,isActivated:m,select:c,isOpen:y,isSelected:d,isIndeterminate:b,isGroupActivator:S,root:s,parent:o,openOnSelect:v,id:p}=Ee(r,!1),C=xe(),P=g(()=>{var h;return e.active!==!1&&(e.active||((h=n.isActive)==null?void 0:h.value)||(s.activatable.value?m.value:d.value))}),B=g(()=>e.link!==!1&&n.isLink.value),_=g(()=>!!C&&(s.selectable.value||s.activatable.value||e.value!=null)),A=g(()=>!e.disabled&&e.link!==!1&&(e.link||n.isClickable.value||_.value)),X=g(()=>e.rounded||e.nav),q=g(()=>e.color??e.activeColor),W=g(()=>({color:P.value?q.value??e.baseColor:e.baseColor,variant:e.variant}));ot(()=>{var h;return(h=n.isActive)==null?void 0:h.value},h=>{h&&U()}),ge(()=>{var h;(h=n.isActive)!=null&&h.value&&U()});function U(){o.value!=null&&s.open(o.value,!0),v(!0)}const{themeClasses:Y}=Se(e),{borderClasses:j}=he(e),{colorClasses:I,colorStyles:F,variantClasses:Ke}=ct(W),{densityClasses:He}=pe(e),{dimensionStyles:ze}=Ce(e),{elevationClasses:Xe}=ke(e),{roundedClasses:qe}=we(X),We=g(()=>e.lines?`v-list-item--${e.lines}-line`:void 0),J=g(()=>({isActive:P.value,select:c,isOpen:y.value,isSelected:d.value,isIndeterminate:b.value}));function Ye(h){var K;l("click",h),A.value&&((K=n.navigate)==null||K.call(n,h),!S&&(s.activatable.value?u(!m.value,h):(s.selectable.value||e.value!=null)&&c(!d.value,h)))}function Je(h){(h.key==="Enter"||h.key===" ")&&(h.preventDefault(),h.target.dispatchEvent(new MouseEvent("click",h)))}return E(()=>{const h=B.value?"a":e.tag,K=a.title||e.title!=null,Ze=a.subtitle||e.subtitle!=null,se=!!(e.appendAvatar||e.appendIcon),Qe=!!(se||a.append),re=!!(e.prependAvatar||e.prependIcon),Z=!!(re||a.prepend);return C==null||C.updateHasPrepend(Z),e.activeColor&&dt("active-color",["color","base-color"]),be(f(h,te({class:["v-list-item",{"v-list-item--active":P.value,"v-list-item--disabled":e.disabled,"v-list-item--link":A.value,"v-list-item--nav":e.nav,"v-list-item--prepend":!Z&&(C==null?void 0:C.hasPrepend.value),"v-list-item--slim":e.slim,[`${e.activeClass}`]:e.activeClass&&P.value},Y.value,j.value,I.value,He.value,Xe.value,We.value,qe.value,Ke.value,e.class],style:[F.value,ze.value,e.style],tabindex:A.value?C?-2:0:void 0,"aria-selected":_.value?s.activatable.value?m.value:s.selectable.value?d.value:P.value:void 0,onClick:Ye,onKeydown:A.value&&!B.value&&Je},n.linkProps),{default:()=>{var ue;return[mt(A.value||P.value,"v-list-item"),Z&&f("div",{key:"prepend",class:"v-list-item__prepend"},[a.prepend?f(ee,{key:"prepend-defaults",disabled:!re,defaults:{VAvatar:{density:e.density,image:e.prependAvatar},VIcon:{density:e.density,icon:e.prependIcon},VListItemAction:{start:!0}}},{default:()=>{var V;return[(V=a.prepend)==null?void 0:V.call(a,J.value)]}}):f(oe,null,[e.prependAvatar&&f(ce,{key:"prepend-avatar",density:e.density,image:e.prependAvatar},null),e.prependIcon&&f(de,{key:"prepend-icon",density:e.density,icon:e.prependIcon},null)]),f("div",{class:"v-list-item__spacer"},null)]),f("div",{class:"v-list-item__content","data-no-activator":""},[K&&f(Dt,{key:"title"},{default:()=>{var V;return[((V=a.title)==null?void 0:V.call(a,{title:e.title}))??e.title]}}),Ze&&f(Ft,{key:"subtitle"},{default:()=>{var V;return[((V=a.subtitle)==null?void 0:V.call(a,{subtitle:e.subtitle}))??e.subtitle]}}),(ue=a.default)==null?void 0:ue.call(a,J.value)]),Qe&&f("div",{key:"append",class:"v-list-item__append"},[a.append?f(ee,{key:"append-defaults",disabled:!se,defaults:{VAvatar:{density:e.density,image:e.appendAvatar},VIcon:{density:e.density,icon:e.appendIcon},VListItemAction:{end:!0}}},{default:()=>{var V;return[(V=a.append)==null?void 0:V.call(a,J.value)]}}):f(oe,null,[e.appendIcon&&f(de,{key:"append-icon",density:e.density,icon:e.appendIcon},null),e.appendAvatar&&f(ce,{key:"append-avatar",density:e.density,image:e.appendAvatar},null)]),f("div",{class:"v-list-item__spacer"},null)])]}}),[[vt("ripple"),A.value&&e.ripple]])}),{activate:u,isActivated:m,isGroupActivator:S,isSelected:d,list:C,select:c,root:s,id:p}}}),Nt=T({color:String,inset:Boolean,sticky:Boolean,title:String,...$(),...R()},"VListSubheader"),Et=D()({name:"VListSubheader",props:Nt(),setup(e,i){let{slots:t}=i;const{textColorClasses:a,textColorStyles:l}=yt(w(e,"color"));return E(()=>{const n=!!(t.default||e.title);return f(e.tag,{class:["v-list-subheader",{"v-list-subheader--inset":e.inset,"v-list-subheader--sticky":e.sticky},a.value,e.class],style:[{textColorStyles:l},e.style]},{default:()=>{var r;return[n&&f("div",{class:"v-list-subheader__text"},[((r=t.default)==null?void 0:r.call(t))??e.title])]}})}),{}}}),Rt=T({items:Array,returnObject:Boolean},"VListChildren"),Re=D()({name:"VListChildren",props:Rt(),setup(e,i){let{slots:t}=i;return Te(),()=>{var a,l;return((a=t.default)==null?void 0:a.call(t))??((l=e.items)==null?void 0:l.map(n=>{var b,S;let{children:r,props:u,type:m,raw:c}=n;if(m==="divider")return((b=t.divider)==null?void 0:b.call(t,{props:u}))??f(kt,u,null);if(m==="subheader")return((S=t.subheader)==null?void 0:S.call(t,{props:u}))??f(Et,u,null);const y={subtitle:t.subtitle?s=>{var o;return(o=t.subtitle)==null?void 0:o.call(t,{...s,item:c})}:void 0,prepend:t.prepend?s=>{var o;return(o=t.prepend)==null?void 0:o.call(t,{...s,item:c})}:void 0,append:t.append?s=>{var o;return(o=t.append)==null?void 0:o.call(t,{...s,item:c})}:void 0,title:t.title?s=>{var o;return(o=t.title)==null?void 0:o.call(t,{...s,item:c})}:void 0},d=ve.filterProps(u);return r?f(ve,te({value:u==null?void 0:u.value},d),{activator:s=>{let{props:o}=s;const v={...u,...o,value:e.returnObject?c:u.value};return t.header?t.header({props:v}):f(fe,v,y)},default:()=>f(Re,{items:r,returnObject:e.returnObject},t)}):t.item?t.item({props:u}):f(fe,te(u,{value:e.returnObject?c:u.value}),y)}))}}}),$t=T({items:{type:Array,default:()=>[]},itemTitle:{type:[String,Array,Function],default:"title"},itemValue:{type:[String,Array,Function],default:"value"},itemChildren:{type:[Boolean,String,Array,Function],default:"children"},itemProps:{type:[Boolean,String,Array,Function],default:"props"},returnObject:Boolean,valueComparator:Function},"list-items");function ne(e,i){const t=O(i,e.itemTitle,i),a=O(i,e.itemValue,t),l=O(i,e.itemChildren),n=e.itemProps===!0?typeof i=="object"&&i!=null&&!Array.isArray(i)?"children"in i?Me(i,["children"]):i:void 0:O(i,e.itemProps),r={title:t,value:a,...n};return{title:String(r.title??""),value:r.value,props:r,children:Array.isArray(l)?$e(e,l):void 0,raw:i}}function $e(e,i){const t=je(e,["itemTitle","itemValue","itemChildren","itemProps","returnObject","valueComparator"]),a=[];for(const l of i)a.push(ne(t,l));return a}function Wt(e){const i=g(()=>$e(e,e.items)),t=g(()=>i.value.some(u=>u.value===null)),a=x(new Map),l=x([]);gt(()=>{const u=i.value,m=new Map,c=[];for(let y=0;y<u.length;y++){const d=u[y];if(_e(d.value)||d.value===null){let b=m.get(d.value);b||(b=[],m.set(d.value,b)),b.push(d)}else c.push(d)}a.value=m,l.value=c});function n(u){const m=k(u),c=a.value,y=i.value,d=l.value,b=t.value,S=e.returnObject,s=!!e.valueComparator,o=e.valueComparator||bt,v=je(e,["itemTitle","itemValue","itemChildren","itemProps","returnObject","valueComparator"]),p=[];e:for(const C of m){if(!b&&C===null)continue;if(S&&typeof C=="string"){p.push(ne(v,C));continue}const P=c.get(C);if(s||!P){for(const B of s?y:d)if(o(C,B.value)){p.push(B);continue e}p.push(ne(v,C));continue}p.push(...P)}return p}function r(u){return e.returnObject?u.map(m=>{let{raw:c}=m;return c}):u.map(m=>{let{value:c}=m;return c})}return{items:i,transformIn:n,transformOut:r}}function Ut(e,i){const t=O(i,e.itemType,"item"),a=_e(i)?i:O(i,e.itemTitle),l=O(i,e.itemValue,void 0),n=O(i,e.itemChildren),r=e.itemProps===!0?Me(i,["children"]):O(i,e.itemProps),u={title:a,value:l,...r};return{type:t,title:u.title,value:u.value,props:u,children:t==="item"&&n?Ue(e,n):void 0,raw:i}}function Ue(e,i){const t=[];for(const a of i)t.push(Ut(e,a));return t}function Kt(e){return{items:g(()=>Ue(e,e.items))}}const Ht=T({baseColor:String,activeColor:String,activeClass:String,bgColor:String,disabled:Boolean,expandIcon:M,collapseIcon:M,lines:{type:[Boolean,String],default:"one"},slim:Boolean,nav:Boolean,"onClick:open":G(),"onClick:select":G(),"onUpdate:opened":G(),...Bt({selectStrategy:"single-leaf",openStrategy:"list"}),...Be(),...$(),...Oe(),...Le(),...Ve(),itemType:{type:String,default:"type"},...$t(),...Ae(),...R(),...Pe(),...Ie({variant:"text"})},"VList"),Yt=D()({name:"VList",props:Ht(),emits:{"update:selected":e=>!0,"update:activated":e=>!0,"update:opened":e=>!0,"click:open":e=>!0,"click:activate":e=>!0,"click:select":e=>!0},setup(e,i){let{slots:t}=i;const{items:a}=Kt(e),{themeClasses:l}=Se(e),{backgroundColorClasses:n,backgroundColorStyles:r}=St(w(e,"bgColor")),{borderClasses:u}=he(e),{densityClasses:m}=pe(e),{dimensionStyles:c}=Ce(e),{elevationClasses:y}=ke(e),{roundedClasses:d}=we(e),{children:b,open:S,parents:s,select:o,getPath:v}=_t(e),p=g(()=>e.lines?`v-list--${e.lines}-line`:void 0),C=w(e,"activeColor"),P=w(e,"baseColor"),B=w(e,"color");Te(),ht({VListGroup:{activeColor:C,baseColor:P,color:B,expandIcon:w(e,"expandIcon"),collapseIcon:w(e,"collapseIcon")},VListItem:{activeClass:w(e,"activeClass"),activeColor:C,baseColor:P,color:B,density:w(e,"density"),disabled:w(e,"disabled"),lines:w(e,"lines"),nav:w(e,"nav"),slim:w(e,"slim"),variant:w(e,"variant")}});const _=x(!1),A=L();function X(I){_.value=!0}function q(I){_.value=!1}function W(I){var F;!_.value&&!(I.relatedTarget&&((F=A.value)!=null&&F.contains(I.relatedTarget)))&&j()}function U(I){const F=I.target;if(!(!A.value||["INPUT","TEXTAREA"].includes(F.tagName))){if(I.key==="ArrowDown")j("next");else if(I.key==="ArrowUp")j("prev");else if(I.key==="Home")j("first");else if(I.key==="End")j("last");else return;I.preventDefault()}}function Y(I){_.value=!0}function j(I){if(A.value)return pt(A.value,I)}return E(()=>f(e.tag,{ref:A,class:["v-list",{"v-list--disabled":e.disabled,"v-list--nav":e.nav,"v-list--slim":e.slim},l.value,n.value,u.value,m.value,y.value,p.value,d.value,e.class],style:[r.value,c.value,e.style],tabindex:e.disabled||_.value?-1:0,role:"listbox","aria-activedescendant":void 0,onFocusin:X,onFocusout:q,onFocus:W,onKeydown:U,onMousedown:Y},{default:()=>[f(Re,{items:a.value,returnObject:e.returnObject},t)]})),{open:S,select:o,focus:j,children:b,parents:s,getPath:v}}});export{Yt as V,fe as a,Dt as b,$t as m,Wt as u};
