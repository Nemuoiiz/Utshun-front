import{g as te,p as se,q as oe,aG as re,aH as ue,c as ae,A as ne,aI as ie,aJ as K,L as l,M as Q,aK as de,aL as me,ak as ce,aM as ve,v as g,ar as pe,a4 as ge,X as Ve,U as T,a3 as o,Z as be,am as $,S as O,aj as j,a5 as V,_ as P,Y as fe,V as ye,an as ke,aN as z,aO as xe,a6 as s,aP as Ce,aQ as Ue,aR as Ae,aS as Fe,aT as Pe,P as Se}from"./index-C1Wq3k6J.js";import{c as Me,a as S,b as X,d as we,u as Ne,e as v}from"./index.esm-DLt04wSt.js";import{V as De,a as E,b as Y}from"./route-block-CQ7mDXys.js";import{V as Be}from"./VDivider-BkKwZ4LZ.js";import{a as Z,m as Ie,V as Te,b as W}from"./VDataTable-CuWpI_Xi.js";import{V as $e}from"./VToolbar-C-7fkpaW.js";import{V as he}from"./VContainer-fQhPXwuc.js";import{V as qe}from"./VForm-Ca6y0Dak.js";import{V as _}from"./VTextarea-drrx0Cn_.js";import"./VPagination-BvyZGVvP.js";import"./VList-BbMxmHzA.js";import"./ssrBoot-DK_TeqiD.js";import"./VMenu-DGLWbXyo.js";const Re=se({...me(),...de(Ie(),["inline"])},"VCheckbox"),ee=te()({name:"VCheckbox",inheritAttrs:!1,props:Re(),emits:{"update:modelValue":i=>!0,"update:focused":i=>!0},setup(i,A){let{attrs:b,slots:p}=A;const c=oe(i,"modelValue"),{isFocused:h,focus:M,blur:n}=re(i),w=ue(),N=ae(()=>i.id||`checkbox-${w}`);return ne(()=>{const[f,F]=ie(b),q=K.filterProps(i),R=Z.filterProps(i);return l(K,Q({class:["v-checkbox",i.class]},f,q,{modelValue:c.value,"onUpdate:modelValue":y=>c.value=y,id:N.value,focused:h.value,style:i.style}),{...p,default:y=>{let{id:L,messagesId:k,isDisabled:x,isReadonly:C,isValid:d}=y;return l(Z,Q(R,{id:L.value,"aria-describedby":k.value,disabled:x.value,readonly:C.value},F,{error:d.value===!1,modelValue:c.value,"onUpdate:modelValue":m=>c.value=m,onFocus:M,onBlur:n}),p)}})}),{}}}),Le={__name:"products",setup(i){const{apiAuth:A}=pe(),b=ce(),p=ve([]),c=g(""),h=[{title:"ID",key:"_id",sortable:!0},{title:"圖片",key:"image",sortable:!1},{title:"名稱",key:"name",sortable:!0},{title:"類別",key:"category",sortable:!0},{title:"售價",key:"price",sortable:!0},{title:"說明",key:"description",sortable:!1},{title:"新舊狀態",key:"used",sortable:!0},{title:"二手情形說明",key:"usedNote",sortable:!1},{title:"販售狀態",key:"sell",sortable:!0},{title:"建立時間",key:"createdAt",sortable:!0},{title:"更新時間",key:"updatedAt",sortable:!0},{title:"編輯商品",key:"edit",sortable:!1}],M=async()=>{var t,e;try{const{data:u}=await A.get("/product/all");p.push(...u.result)}catch(u){console.log(u),b({text:((e=(t=u==null?void 0:u.response)==null?void 0:t.data)==null?void 0:e.message)||"發生未知錯誤",snackbarProps:{color:"red"}})}};M();const n=g({open:!1,id:""}),w=t=>{t?(n.value.id=t._id,k.value.value=t.name,x.value.value=t.price,C.value.value=t.description,d.value.value=t.category.main,m.value.value=t.category.sub,D.value.value=t.used,B.value.value=t.usedNote,I.value.value=t.sell):(d.value.value="",m.value.value=""),J(),n.value.open=!0},N=()=>{L(),n.value.id="",n.value.open=!1,G.value.deleteFileRecord(),d.value.value="",m.value.value=""},f=g([{text:"臉部彩妝",value:"臉部彩妝",subcategories:["粉底","修容","打亮","腮紅"]},{text:"眼部彩妝",value:"眼部彩妝",subcategories:["眼彩","眉彩"]},{text:"唇部彩妝",value:"唇部彩妝",subcategories:[]},{text:"日常保養",value:"日常保養",subcategories:["保養品","乳液乳霜","面膜","化妝水"]},{text:"臉部清潔",value:"臉部清潔",subcategories:["卸妝品","洗面乳"]},{text:"上妝用具",value:"上妝用具",subcategories:["刷具","粉底刮刀","美妝蛋"]}]),F=g([]),q=ae(()=>Me({name:S().required("商品名稱必填"),price:we().typeError("商品價格必填").required("商品價格必填").min(0,"價格區間不符"),description:S().required("商品說明必填"),category:S().required("請選擇主分類").oneOf(f.value.map(t=>t.value),"分類不存在"),subcategory:S().test("subcategory","請選擇子分類",function(t){const e=f.value.find(u=>u.value===this.parent.category);return e?this.parent.category==="唇部彩妝"?!0:e.subcategories.includes(t):!1}),sell:X().required("販售狀態必填"),used:X().required("二手狀態必填"),usedNote:S().nullable()})),{handleSubmit:R,isSubmitting:y,resetForm:L}=Ne({validationSchema:q,initialValues:{name:"",price:null,category:"",subcategory:"",sell:!1,used:!1,description:"",usedNote:""}}),k=v("name"),x=v("price"),C=v("description"),d=v("category"),m=v("subcategory"),D=v("used"),B=v("usedNote"),I=v("sell"),G=g(null),U=g([]),H=g([]),J=(t=!1)=>{const e=f.value.find(u=>u.value===d.value.value);F.value=e?e.subcategories:[],t&&m.resetField()},le=R(async t=>{var e,u,a;if(console.log("handleSubmit的地方"),!((e=U.value[0])!=null&&e.error)){if(n.value.id.length===0&&U.value.length===0){b({text:"商品圖片必填",snackbarProps:{color:"red"}});return}try{const r=new FormData;r.append("name",t.name),r.append("price",t.price),r.append("description",t.description),r.append("category.main",t.category),r.append("category.sub",t.subcategory),r.append("sell",t.sell),r.append("used",t.used),r.append("usedNote",t.usedNote),U.value.length>0&&r.append("image",U.value[0].file),n.value.id.length>0?await A.patch("/product/"+n.value.id,r):await A.post("/product",r),p.splice(0,p.length),M(),b({text:n.value.id.length>0?"商品編輯成功":"商品新增成功",snackbarProps:{color:"green"}}),N()}catch(r){console.log(r),b({text:((a=(u=r==null?void 0:r.response)==null?void 0:u.data)==null?void 0:a.message)||"發生未知錯誤",snackbarProps:{color:"red"}})}}});return(t,e)=>{const u=ge("VueFileAgent");return T(),Ve(Se,null,[l(he,null,{default:o(()=>[l(De,null,{default:o(()=>[l(E,{cols:"12"},{default:o(()=>e[14]||(e[14]=[be("h1",{class:"text-center"},"商品管理",-1)])),_:1}),l(Be),l(E,{cols:"12"},{default:o(()=>[l(Te,{items:p,headers:h,search:c.value},{top:o(()=>[l($e,null,{default:o(()=>[l($,{onClick:e[0]||(e[0]=a=>w(null))},{default:o(()=>e[15]||(e[15]=[V("新增商品")])),_:1}),l(ke),l(E,{cols:"3"},{default:o(()=>[l(z,{modelValue:c.value,"onUpdate:modelValue":e[1]||(e[1]=a=>c.value=a),density:"compact",label:"Search","prepend-inner-icon":"mdi-magnify",variant:"solo-filled",flat:"","hide-details":"","single-line":""},null,8,["modelValue"])]),_:1})]),_:1})]),"item.image":o(({value:a})=>[l(ye,{src:a,height:"50"},null,8,["src"])]),"item.sell":o(({value:a})=>[a?(T(),O(j,{key:0,icon:"mdi-check"})):fe("",!0)]),"item.createdAt":o(({value:a})=>[V(P(new Date(a).toLocaleString()),1)]),"item.updatedAt":o(({value:a})=>[V(P(new Date(a).toLocaleString()),1)]),"item.category":o(({value:a})=>[V(P(a.main)+" - "+P(a.sub),1)]),"item.used":o(({value:a})=>[a?(T(),O(j,{key:0,icon:"mdi-new-box"})):(T(),O(j,{key:1,icon:"mdi-bandage"}))]),"item.edit":o(({item:a})=>[l($,{icon:"mdi-pencil",variant:"text",onClick:r=>w(a)},null,8,["onClick"])]),_:2},1032,["items","search"])]),_:1})]),_:1})]),_:1}),l(Pe,{modelValue:n.value.open,"onUpdate:modelValue":e[13]||(e[13]=a=>n.value.open=a),persistent:""},{default:o(()=>[l(qe,{disabled:s(y),onSubmit:xe(s(le),["prevent"])},{default:o(()=>[l(Ce,null,{default:o(()=>[l(Ue,null,{default:o(()=>[V(P(n.value.id?"編輯商品":"新增商品"),1)]),_:1}),l(Ae,null,{default:o(()=>[l(z,{modelValue:s(k).value.value,"onUpdate:modelValue":e[2]||(e[2]=a=>s(k).value.value=a),label:"商品名稱","error-messages":s(k).errorMessage.value},null,8,["modelValue","error-messages"]),l(z,{modelValue:s(x).value.value,"onUpdate:modelValue":e[3]||(e[3]=a=>s(x).value.value=a),label:"商品價格","error-messages":s(x).errorMessage.value,type:"number",min:"0"},null,8,["modelValue","error-messages"]),l(W,{modelValue:s(d).value.value,"onUpdate:modelValue":[e[4]||(e[4]=a=>s(d).value.value=a),e[5]||(e[5]=a=>J(!0))],"error-messages":s(d).errorMessage.value,items:f.value,label:"商品主分類","item-title":"text","item-value":"value"},null,8,["modelValue","error-messages","items"]),l(W,{modelValue:s(m).value.value,"onUpdate:modelValue":e[6]||(e[6]=a=>s(m).value.value=a),"error-messages":s(m).errorMessage.value,items:F.value,label:"商品子分類","item-title":"text","item-value":"value",disabled:F.value.length===0},null,8,["modelValue","error-messages","items","disabled"]),l(ee,{modelValue:s(I).value.value,"onUpdate:modelValue":e[7]||(e[7]=a=>s(I).value.value=a),label:"販售狀態","error-messages":s(I).errorMessage.value},null,8,["modelValue","error-messages"]),l(ee,{modelValue:s(D).value.value,"onUpdate:modelValue":e[8]||(e[8]=a=>s(D).value.value=a),label:"是否為新品","error-messages":s(D).errorMessage.value},null,8,["modelValue","error-messages"]),l(_,{modelValue:s(C).value.value,"onUpdate:modelValue":e[9]||(e[9]=a=>s(C).value.value=a),label:"商品說明","error-messages":s(C).errorMessage.value},null,8,["modelValue","error-messages"]),l(_,{modelValue:s(B).value.value,"onUpdate:modelValue":e[10]||(e[10]=a=>s(B).value.value=a),label:"二手情形說明","error-messages":s(B).errorMessage.value},null,8,["modelValue","error-messages"]),l(u,{ref_key:"fileAgent",ref:G,modelValue:U.value,"onUpdate:modelValue":e[11]||(e[11]=a=>U.value=a),"raw-model-value":H.value,"onUpdate:rawModelValue":e[12]||(e[12]=a=>H.value=a),accept:"image/jpeg,image/png",deletable:"","max-size":"1MB","help-text":"點擊或拖曳檔案至此","error-text":{type:"檔案類型錯誤",size:"檔案尺寸超過 1MB"}},null,8,["modelValue","raw-model-value"])]),_:1}),l(Fe,null,{default:o(()=>[l($,{onClick:N},{default:o(()=>e[16]||(e[16]=[V("取消")])),_:1}),l($,{type:"submit",loading:s(y)},{default:o(()=>e[17]||(e[17]=[V("確認")])),_:1},8,["loading"])]),_:1})]),_:1})]),_:1},8,["disabled","onSubmit"])]),_:1},8,["modelValue"])],64)}}};typeof Y=="function"&&Y(Le);export{Le as default};
