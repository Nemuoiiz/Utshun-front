import{bZ as P,am as w,a2 as F,al as B,v as C,as as M,X as v,U as y,L as a,a3 as r,Z as i,_ as l,V as N,Y as R,aP as U,a6 as u,aO as A,an as D,a5 as E,bM as I,P as L}from"./index-DKEa1WkU.js";import{c as O,d as T,u as Z,e as $}from"./index.esm-D06QsNWf.js";import{b}from"./route-block-B_A1xBdJ.js";import{a as j,b as d,V as X}from"./VRow-B33K4c04.js";import{V as Y}from"./VDivider-G0b3u0EU.js";import{V as z}from"./VForm-C-L3kyI2.js";const G={class:"text-center"},H={key:0},J={__name:"[id]",setup(K){const{api:V,apiAuth:_}=M(),m=P(),h=w(),p=F(),g=B(),e=C({_id:"",name:"",price:0,description:"",image:"",sell:!0,category:"臉部彩妝"});(async()=>{try{const{data:o}=await V.get("/product/"+m.params.id);e.value=o.result,document.title=e.value.name+" ｜ 購物網站"}catch(o){console.log(o),m.push("/")}})();const x=O({quantity:T().typeError("商品數量錯誤").required("商品數量必填").positive("商品數量須大於 0").integer("商品數量必須為整數")}),{handleSubmit:k,isSubmitting:f}=Z({validationSchema:x,initialValues:{quantity:1}}),c=$("quantity"),S=k(async o=>{var t,n;if(!p.isLoggedIn){h.push("/login");return}try{const{data:s}=await _.patch("/user/cart",{product:e.value._id,quantity:o.quantity});p.cart=s.result,g({text:"商品已加入購物車",snackbarProps:{color:"green"}})}catch(s){console.log(s),g({text:((n=(t=s==null?void 0:s.response)==null?void 0:t.data)==null?void 0:n.message)||"未知錯誤",snackbarProps:{color:"red"}})}});return(o,t)=>(y(),v(L,null,[a(X,null,{default:r(()=>[a(j,null,{default:r(()=>[a(d,{cols:"12"},{default:r(()=>[i("h1",G,l(e.value.name),1)]),_:1}),a(Y),a(d,{cols:"12",md:"6"},{default:r(()=>[a(N,{src:e.value.image},null,8,["src"])]),_:1}),a(d,{cols:"12",md:"6"},{default:r(()=>{var n,s;return[e.value?(y(),v("p",H," 商品類別："+l(((n=e.value.category)==null?void 0:n.main)||"未分類")+l((s=e.value.category)!=null&&s.sub?"．"+e.value.category.sub:""),1)):R("",!0),i("p",null,l(e.value.price),1),i("p",null,l(e.value.description),1),a(z,{disabled:u(f),onSubmit:U(u(S),["prevent"])},{default:r(()=>[a(A,{modelValue:u(c).value.value,"onUpdate:modelValue":t[0]||(t[0]=q=>u(c).value.value=q),modelModifiers:{number:!0},type:"number","error-messages":u(c).errorMessage.value},null,8,["modelValue","error-messages"]),a(D,{type:"submit","prepend-icon":"mdi-cart",loading:u(f)},{default:r(()=>t[1]||(t[1]=[E("加入購物車")])),_:1},8,["loading"])]),_:1},8,["disabled","onSubmit"])]}),_:1})]),_:1})]),_:1}),a(I,{"model-value":!e.value.sell,class:"align-center justify-center",scrim:"black",opacity:"0.8",persistent:""},{default:r(()=>t[2]||(t[2]=[i("h1",{class:"text-center"},l("商品未上架"),-1)])),_:1},8,["model-value"])],64))}};typeof b=="function"&&b(J);export{J as default};
