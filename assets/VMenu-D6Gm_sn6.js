import{g as T,p as I,q as O,r as S,f as K,aI as U,c as w,v as B,aB as N,s as z,b as F,bL as H,Q,bi as E,w as j,M as A,A as q,bM as k,L as P,b5 as W,aL as $,bN as G,by as J,bO as g,bP as X,bQ as V,bg as h,O as Y,az as Z,bR as _}from"./index-DKEa1WkU.js";const ee=I({id:String,submenu:Boolean,...$(G({closeDelay:250,closeOnContentClick:!0,locationStrategy:"connected",location:void 0,openDelay:300,scrim:!1,scrollStrategy:"reposition",transition:{component:J}}),["absolute"])},"VMenu"),ne=T()({name:"VMenu",props:ee(),emits:{"update:modelValue":n=>!0},setup(n,C){let{slots:c}=C;const s=O(n,"modelValue"),{scopeId:D}=S(),{isRtl:f}=K(),d=U(),m=w(()=>n.id||`v-menu-${d}`),o=B(),a=N(V,null),v=z(new Set);Z(V,{register(){v.value.add(d)},unregister(){v.value.delete(d)},closeParents(e){setTimeout(()=>{var t;!v.value.size&&!n.persistent&&(e==null||(t=o.value)!=null&&t.contentEl&&!_(e,o.value.contentEl))&&(s.value=!1,a==null||a.closeParents())},40)}}),F(()=>{a==null||a.unregister(),document.removeEventListener("focusin",b)}),H(()=>s.value=!1);async function b(e){var u,r,i;const t=e.relatedTarget,l=e.target;await Q(),s.value&&t!==l&&((u=o.value)!=null&&u.contentEl)&&((r=o.value)!=null&&r.globalTop)&&![document,o.value.contentEl].includes(l)&&!o.value.contentEl.contains(l)&&((i=E(o.value.contentEl)[0])==null||i.focus())}j(s,e=>{e?(a==null||a.register(),h&&document.addEventListener("focusin",b,{once:!0})):(a==null||a.unregister(),h&&document.removeEventListener("focusin",b))},{immediate:!0});function L(e){a==null||a.closeParents(e)}function R(e){var t,l,u,r,i;if(!n.disabled)if(e.key==="Tab"||e.key==="Enter"&&!n.closeOnContentClick){if(e.key==="Enter"&&(e.target instanceof HTMLTextAreaElement||e.target instanceof HTMLInputElement&&e.target.closest("form")))return;e.key==="Enter"&&e.preventDefault(),X(E((t=o.value)==null?void 0:t.contentEl,!1),e.shiftKey?"prev":"next",M=>M.tabIndex>=0)||(s.value=!1,(u=(l=o.value)==null?void 0:l.activatorEl)==null||u.focus())}else n.submenu&&e.key===(f.value?"ArrowRight":"ArrowLeft")&&(s.value=!1,(i=(r=o.value)==null?void 0:r.activatorEl)==null||i.focus())}function y(e){var l;if(n.disabled)return;const t=(l=o.value)==null?void 0:l.contentEl;t&&s.value?e.key==="ArrowDown"?(e.preventDefault(),e.stopImmediatePropagation(),g(t,"next")):e.key==="ArrowUp"?(e.preventDefault(),e.stopImmediatePropagation(),g(t,"prev")):n.submenu&&(e.key===(f.value?"ArrowRight":"ArrowLeft")?s.value=!1:e.key===(f.value?"ArrowLeft":"ArrowRight")&&(e.preventDefault(),g(t,"first"))):(n.submenu?e.key===(f.value?"ArrowLeft":"ArrowRight"):["ArrowDown","ArrowUp"].includes(e.key))&&(s.value=!0,e.preventDefault(),setTimeout(()=>setTimeout(()=>y(e))))}const p=w(()=>A({"aria-haspopup":"menu","aria-expanded":String(s.value),"aria-controls":m.value,onKeydown:y},n.activatorProps));return q(()=>{const e=k.filterProps(n);return P(k,A({ref:o,id:m.value,class:["v-menu",n.class],style:n.style},e,{modelValue:s.value,"onUpdate:modelValue":t=>s.value=t,absolute:!0,activatorProps:p.value,location:n.location??(n.submenu?"end":"bottom"),"onClick:outside":L,onKeydown:R},D),{activator:c.activator,default:function(){for(var t=arguments.length,l=new Array(t),u=0;u<t;u++)l[u]=arguments[u];return P(Y,{root:"VMenu"},{default:()=>{var r;return[(r=c.default)==null?void 0:r.call(c,...l)]}})}})}),W({id:m,ΨopenChildren:v},o)}});export{ne as V};
