import{f as r,h as i,r as n,o,c,F as g,j as b,u as v,b as s,t as $,a as t,w as f,ah as x,s as h,v as j,d as S}from"../app.4a218467.js";const w={class:"demo-image"},z={class:"demonstration"},O="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",k=i({__name:"basic-usage",setup(e){const _=["fill","contain","cover","none","scale-down"];return(p,l)=>{const a=n("el-image");return o(),c("div",w,[(o(!0),c(g,null,b(v(_),d=>(o(),c("div",{key:d,class:"block"},[s("span",z,$(d),1),t(a,{style:{width:"100px",height:"100px"},src:O,fit:d},null,8,["fit"])]))),128))])}}});var I=r(k,[["__scopeId","data-v-4237d7ec"]]),se=Object.freeze(Object.defineProperty({__proto__:null,default:I},Symbol.toStringTag,{value:"Module"}));const P={class:"demo-image__preview"},T="https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg",C=i({__name:"image-preview",setup(e){const _=["https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg","https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg","https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg","https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg","https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg","https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg","https://fuss10.elemecdn.com/2/11/6535bcfb26e4c79b48ddde44f4b6fjpeg.jpeg"];return(p,l)=>{const a=n("el-image");return o(),c("div",P,[t(a,{style:{width:"100px",height:"100px"},src:T,"zoom-rate":1.2,"max-scale":7,"min-scale":.2,"preview-src-list":_,"initial-index":4,fit:"cover"},null,8,["zoom-rate","min-scale"])])}}});var L=r(C,[["__scopeId","data-v-0ce597d7"]]),te=Object.freeze(Object.defineProperty({__proto__:null,default:L},Symbol.toStringTag,{value:"Module"}));const M={class:"demo-image__lazy"},F=i({__name:"lazy-load",setup(e){const _=["https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg","https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg","https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg","https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg","https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg","https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg","https://fuss10.elemecdn.com/2/11/6535bcfb26e4c79b48ddde44f4b6fjpeg.jpeg"];return(p,l)=>{const a=n("el-image");return o(),c("div",M,[(o(),c(g,null,b(_,d=>t(a,{key:d,src:d,lazy:""},null,8,["src"])),64))])}}});var B=r(F,[["__scopeId","data-v-3f471bb0"]]),ae=Object.freeze(Object.defineProperty({__proto__:null,default:B},Symbol.toStringTag,{value:"Module"}));const y=e=>(h("data-v-c1e72660"),e=e(),j(),e),D={class:"demo-image__error"},N={class:"block"},V=y(()=>s("span",{class:"demonstration"},"Default",-1)),U={class:"block"},E=y(()=>s("span",{class:"demonstration"},"Custom",-1)),q={class:"image-slot"},A=i({__name:"load-failed",setup(e){return(_,p)=>{const l=n("el-image"),a=n("el-icon");return o(),c("div",D,[s("div",N,[V,t(l)]),s("div",U,[E,t(l,null,{error:f(()=>[s("div",q,[t(a,null,{default:f(()=>[t(v(x))]),_:1})])]),_:1})])])}}});var G=r(A,[["__scopeId","data-v-c1e72660"]]),oe=Object.freeze(Object.defineProperty({__proto__:null,default:G},Symbol.toStringTag,{value:"Module"}));const H={},m=e=>(h("data-v-6b0684da"),e=e(),j(),e),J={class:"demo-image__placeholder"},K={class:"block"},Q=m(()=>s("span",{class:"demonstration"},"Default",-1)),R={class:"block"},W=m(()=>s("span",{class:"demonstration"},"Custom",-1)),X=m(()=>s("div",{class:"image-slot"},[S("Loading"),s("span",{class:"dot"},"...")],-1));function Y(e,_,p,l,a,d){const u=n("el-image");return o(),c("div",J,[s("div",K,[Q,t(u,{src:e.src},null,8,["src"])]),s("div",R,[W,t(u,{src:e.src},{placeholder:f(()=>[X]),_:1},8,["src"])])])}var Z=r(H,[["render",Y],["__scopeId","data-v-6b0684da"]]),ce=Object.freeze(Object.defineProperty({__proto__:null,default:Z},Symbol.toStringTag,{value:"Module"}));export{se as _,te as a,ae as b,oe as c,ce as d};