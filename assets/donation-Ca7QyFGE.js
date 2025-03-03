import{b as A}from"./route-block-B_A1xBdJ.js";import{a as D,b as E,V as X}from"./VRow-B33K4c04.js";import{g as k,p as C,aB as R,aD as Y,A as S,L as n,ah as j,ai as Z,aV as H,aE as J,J as B,aX as M,j as F,at as Q,c as b,ay as K,O as z,aj as W,av as h,af as L,aC as ee,k as le,m as ne,D as G,E as ae,aF as te,G as se,az as oe,ax as ie,h as ue,z as de,t as u,B as re,aY as ce,aZ as fe,v as ve,o as pe,a_ as xe,X as me,U as be,a3 as s,Z as i,a5 as o,aO as w,an as Pe,a$ as Ve,P as ye}from"./index-DKEa1WkU.js";import{V as ge}from"./VForm-C-L3kyI2.js";import{V as Ee}from"./VTextarea-DdsWQCk-.js";const y=Symbol.for("vuetify:v-expansion-panel"),U=C({...B(),...J()},"VExpansionPanelText"),x=k()({name:"VExpansionPanelText",props:U(),setup(e,r){let{slots:t}=r;const a=R(y);if(!a)throw new Error("[Vuetify] v-expansion-panel-text needs to be placed inside v-expansion-panel");const{hasContent:l,onAfterLeave:v}=Y(e,a.isSelected);return S(()=>n(H,{onAfterLeave:v},{default:()=>{var c;return[j(n("div",{class:["v-expansion-panel-text",e.class],style:e.style},[t.default&&l.value&&n("div",{class:"v-expansion-panel-text__wrapper"},[(c=t.default)==null?void 0:c.call(t)])]),[[Z,a.isSelected.value]])]}})),{}}}),$=C({color:String,expandIcon:{type:L,default:"$expand"},collapseIcon:{type:L,default:"$collapse"},hideActions:Boolean,focusable:Boolean,static:Boolean,ripple:{type:[Boolean,Object],default:!1},readonly:Boolean,...B(),...h()},"VExpansionPanelTitle"),m=k()({name:"VExpansionPanelTitle",directives:{Ripple:M},props:$(),setup(e,r){let{slots:t}=r;const a=R(y);if(!a)throw new Error("[Vuetify] v-expansion-panel-title needs to be placed inside v-expansion-panel");const{backgroundColorClasses:l,backgroundColorStyles:v}=F(e,"color"),{dimensionStyles:c}=Q(e),p=b(()=>({collapseIcon:e.collapseIcon,disabled:a.disabled.value,expanded:a.isSelected.value,expandIcon:e.expandIcon,readonly:e.readonly})),I=b(()=>a.isSelected.value?e.collapseIcon:e.expandIcon);return S(()=>{var P;return j(n("button",{class:["v-expansion-panel-title",{"v-expansion-panel-title--active":a.isSelected.value,"v-expansion-panel-title--focusable":e.focusable,"v-expansion-panel-title--static":e.static},l.value,e.class],style:[v.value,c.value,e.style],type:"button",tabindex:a.disabled.value?-1:void 0,disabled:a.disabled.value,"aria-expanded":a.isSelected.value,onClick:e.readonly?void 0:a.toggle},[n("span",{class:"v-expansion-panel-title__overlay"},null),(P=t.default)==null?void 0:P.call(t,p.value),!e.hideActions&&n(z,{defaults:{VIcon:{icon:I.value}}},{default:()=>{var g;return[n("span",{class:"v-expansion-panel-title__icon"},[((g=t.actions)==null?void 0:g.call(t,p.value))??n(W,null,null)])]}})]),[[K("ripple"),e.ripple]])}),{}}}),q=C({title:String,text:String,bgColor:String,...se(),...te(),...ae(),...G(),...$(),...U()},"VExpansionPanel"),V=k()({name:"VExpansionPanel",props:q(),emits:{"group:selected":e=>!0},setup(e,r){let{slots:t}=r;const a=ee(e,y),{backgroundColorClasses:l,backgroundColorStyles:v}=F(e,"bgColor"),{elevationClasses:c}=le(e),{roundedClasses:p}=ne(e),I=b(()=>(a==null?void 0:a.disabled.value)||e.disabled),P=b(()=>a.group.items.value.reduce((f,d,T)=>(a.group.selected.value.includes(d.id)&&f.push(T),f),[])),g=b(()=>{const f=a.group.items.value.findIndex(d=>d.id===a.id);return!a.isSelected.value&&P.value.some(d=>d-f===1)}),N=b(()=>{const f=a.group.items.value.findIndex(d=>d.id===a.id);return!a.isSelected.value&&P.value.some(d=>d-f===-1)});return oe(y,a),S(()=>{const f=!!(t.text||e.text),d=!!(t.title||e.title),T=m.filterProps(e),O=x.filterProps(e);return n(e.tag,{class:["v-expansion-panel",{"v-expansion-panel--active":a.isSelected.value,"v-expansion-panel--before-active":g.value,"v-expansion-panel--after-active":N.value,"v-expansion-panel--disabled":I.value},p.value,l.value,e.class],style:[v.value,e.style]},{default:()=>[n("div",{class:["v-expansion-panel__shadow",...c.value]},null),n(z,{defaults:{VExpansionPanelTitle:{...T},VExpansionPanelText:{...O}}},{default:()=>{var _;return[d&&n(m,{key:"title"},{default:()=>[t.title?t.title():e.title]}),f&&n(x,{key:"text"},{default:()=>[t.text?t.text():e.text]}),(_=t.default)==null?void 0:_.call(t)]}})]})}),{groupItem:a}}}),ke=["default","accordion","inset","popout"],Ce=C({flat:Boolean,...fe(),...ce(q(),["bgColor","collapseIcon","color","eager","elevation","expandIcon","focusable","hideActions","readonly","ripple","rounded","tile","static"]),...re(),...B(),...G(),variant:{type:String,default:"default",validator:e=>ke.includes(e)}},"VExpansionPanels"),Se=k()({name:"VExpansionPanels",props:Ce(),emits:{"update:modelValue":e=>!0},setup(e,r){let{slots:t}=r;const{next:a,prev:l}=ie(e,y),{themeClasses:v}=ue(e),c=b(()=>e.variant&&`v-expansion-panels--variant-${e.variant}`);return de({VExpansionPanel:{bgColor:u(e,"bgColor"),collapseIcon:u(e,"collapseIcon"),color:u(e,"color"),eager:u(e,"eager"),elevation:u(e,"elevation"),expandIcon:u(e,"expandIcon"),focusable:u(e,"focusable"),hideActions:u(e,"hideActions"),readonly:u(e,"readonly"),ripple:u(e,"ripple"),rounded:u(e,"rounded"),static:u(e,"static")}}),S(()=>n(e.tag,{class:["v-expansion-panels",{"v-expansion-panels--flat":e.flat,"v-expansion-panels--tile":e.tile},v.value,c.value,e.class],style:e.style},{default:()=>{var p;return[(p=t.default)==null?void 0:p.call(t,{prev:l,next:a})]}})),{next:a,prev:l}}}),Ie=""+new URL("nature-fjA6703H.png",import.meta.url).href,Te=""+new URL("go018_1-C_m-lbfA.png",import.meta.url).href,we={__name:"donation",setup(e){const r=ve("#000"),t=()=>{const a=window.scrollY;r.value=a>1100?"#ff4081":"#000"};return pe(()=>{window.addEventListener("scroll",t)}),xe(()=>{window.removeEventListener("scroll",t)}),(a,l)=>(be(),me(ye,null,[n(X,null,{default:s(()=>[l[14]||(l[14]=i("h2",{class:"mt-10"},"Donation info",-1)),n(D,{class:"d-flex justify-center align-center"},{default:s(()=>[n(E,{cols:"6"},{default:s(()=>l[0]||(l[0]=[i("img",{src:Ie,alt:"捐贈資訊"},null,-1)])),_:1}),n(E,{cols:"6"},{default:s(()=>l[1]||(l[1]=[i("p",{class:"mb-4"}," 您的捐贈將幫助許多有需要的人。無論是美妝產品、保養品，還是上妝工具，您的心意將帶來改變。 ",-1)])),_:1})]),_:1}),l[15]||(l[15]=i("h2",{class:"mt-10 mb-10"},"Q & A",-1)),n(Se,{variant:"accordion"},{default:s(()=>[n(V,null,{default:s(()=>[n(m,null,{default:s(()=>l[2]||(l[2]=[o("可以捐贈哪些彩妝品？")])),_:1}),n(x,null,{default:s(()=>l[3]||(l[3]=[o(" 我們接受未過期或剛過期不久的彩妝，包含："),i("br",null,null,-1),o(" - 全新未使用或已使用但狀況良好的產品"),i("br",null,null,-1),o(" - 粉餅、眼影、腮紅、口紅、睫毛膏、眉筆等各類彩妝"),i("br",null,null,-1),o(" - 保養品、化妝工具（如刷具、粉撲），但需乾淨可再利用 ")])),_:1})]),_:1}),n(V,null,{default:s(()=>[n(m,null,{default:s(()=>l[4]||(l[4]=[o("什麼情況的彩妝品不收？")])),_:1}),n(x,null,{default:s(()=>l[5]||(l[5]=[o(" - 已完全用完（如見底的粉餅、擠不出的粉底）"),i("br",null,null,-1),o(" - 包裝嚴重破損或外觀髒污，無法清理"),i("br",null,null,-1),o(" - 產品發霉、變質、有異味（如結塊、分層、油耗味）"),i("br",null,null,-1),o(" - 個人衛生用品（如假睫毛、已使用的睫毛夾、唇刷） ")])),_:1})]),_:1}),n(V,null,{default:s(()=>[n(m,null,{default:s(()=>l[6]||(l[6]=[o("捐贈方式與寄送地址？")])),_:1}),n(x,null,{default:s(()=>l[7]||(l[7]=[o(" 您可將符合條件的彩妝品包裝妥善後，寄送至以下地址："),i("br",null,null,-1),o(" 📍 台中市西屯區○○路○○號 ū-tshun（有賰）捐贈小組"),i("br",null,null,-1),o(" 📞 聯絡電話：09XX-XXX-XXX"),i("br",null,null,-1),o(" ✉ 電子信箱：support@u-tshun.com ")])),_:1})]),_:1}),n(V,null,{default:s(()=>[n(m,null,{default:s(()=>l[8]||(l[8]=[o("捐贈的彩妝會如何處理？")])),_:1}),n(x,null,{default:s(()=>l[9]||(l[9]=[o(" - 可再次販售的彩妝：清潔與整理後，放上平台，幫助資源再利用"),i("br",null,null,-1),o(" - 適合公益用途的彩妝：轉贈至偏鄉機構、庇護中心、女性重建團體等，讓美麗延續"),i("br",null,null,-1),o(" - 無法使用的彩妝：盡可能回收，減少對環境的負擔 ")])),_:1})]),_:1}),n(V,null,{default:s(()=>[n(m,null,{default:s(()=>l[10]||(l[10]=[o("我可以獲得回饋嗎？")])),_:1}),n(x,null,{default:s(()=>l[11]||(l[11]=[o(" 您的捐贈將幫助環保與公益，我們會不定期提供感謝禮（如購物折扣、品牌小禮等）"),i("br",null,null,-1),o(" 並寄送捐贈成果報告，讓您知道這些彩妝的去向！ ")])),_:1})]),_:1})]),_:1}),l[16]||(l[16]=i("h2",{class:"mt-10 mb-10"},"Donation Form",-1)),n(D,{class:"d-flex justify-center align-center"},{default:s(()=>[n(E,{cols:"6"},{default:s(()=>[n(ge,null,{default:s(()=>[n(w,{label:"寄件人姓名",required:""}),n(w,{label:"聯絡電話",required:""}),n(w,{label:"寄件地址",required:""}),n(Ee,{label:"捐贈內容描述",rows:"3"}),n(Pe,{color:"primary",class:"mt-4"},{default:s(()=>l[12]||(l[12]=[o("提交")])),_:1})]),_:1})]),_:1}),n(E,{cols:"4"},{default:s(()=>l[13]||(l[13]=[i("img",{src:Te,alt:"捐贈資訊"},null,-1)])),_:1})]),_:1})]),_:1}),n(X,null,{default:s(()=>[i("h1",{style:Ve({color:r.value,transition:"color 0.3s"})}," 滾動看看標題變色！ ",4),l[17]||(l[17]=i("div",{style:{height:"2000px","padding-top":"20px"}}," 往下滾動看看效果～ ",-1))]),_:1})],64))}};typeof A=="function"&&A(we);export{we as default};
