import{_ as m,q as c,o as i,t as f,v as e,y as t,R as n,p as u,r as C,u as d,c as v,a}from"./framework.CKY1kIjS.js";import{r as b}from"./theme.BbXZfSOh.js";const B={};function k(p,r){const o=c("el-button"),l=c("el-popconfirm");return i(),f(l,{title:"Are you sure to delete this?"},{reference:e(()=>[t(o,null,{default:e(()=>[n("Delete")]),_:1})]),_:1})}const y=m(B,[["render",k]]),A=u({__name:"customize",setup(p){const r=C(!1);function o(){r.value=!0}return(l,x)=>{const s=c("el-button"),_=c("el-popconfirm");return i(),f(_,{width:"220",icon:d(b),"icon-color":"#626AEF",title:"Are you sure to delete this?",onCancel:o},{reference:e(()=>[t(s,null,{default:e(()=>[n("Delete")]),_:1})]),actions:e(({confirm:h,cancel:g})=>[t(s,{size:"small",onClick:g},{default:e(()=>[n("No!")]),_:2},1032,["onClick"]),t(s,{type:"danger",size:"small",disabled:!r.value,onClick:h},{default:e(()=>[n(" Yes? ")]),_:2},1032,["disabled","onClick"])]),_:1},8,["icon"])}}}),E={};function w(p,r){const o=c("el-button"),l=c("el-popconfirm");return i(),v("div",{class:"popconfirm-base-box"},[a("div",{class:"row center"},[t(l,{class:"box-item",title:"Top Left prompts info",placement:"top-start"},{reference:e(()=>[t(o,null,{default:e(()=>[n("top-start")]),_:1})]),_:1}),t(l,{class:"box-item",title:"Top Center prompts info",placement:"top"},{reference:e(()=>[t(o,null,{default:e(()=>[n("top")]),_:1})]),_:1}),t(l,{class:"box-item",title:"Top Right prompts info",placement:"top-end"},{reference:e(()=>[t(o,null,{default:e(()=>[n("top-end")]),_:1})]),_:1})]),a("div",{class:"row"},[t(l,{class:"box-item",title:"Left Top prompts info",placement:"left-start"},{reference:e(()=>[t(o,null,{default:e(()=>[n("left-start")]),_:1})]),_:1}),t(l,{class:"box-item",title:"Right Top prompts info",placement:"right-start"},{reference:e(()=>[t(o,null,{default:e(()=>[n("right-start")]),_:1})]),_:1})]),a("div",{class:"row"},[t(l,{class:"box-item",title:"Left Center prompts info",placement:"left"},{reference:e(()=>[t(o,{class:"mt-3 mb-3"},{default:e(()=>[n("left")]),_:1})]),_:1}),t(l,{class:"box-item",title:"Right Center prompts info",placement:"right"},{reference:e(()=>[t(o,null,{default:e(()=>[n("right")]),_:1})]),_:1})]),a("div",{class:"row"},[t(l,{class:"box-item",title:"Left Bottom prompts info",placement:"left-end"},{reference:e(()=>[t(o,null,{default:e(()=>[n("left-end")]),_:1})]),_:1}),t(l,{class:"box-item",title:"Right Bottom prompts info",placement:"right-end"},{reference:e(()=>[t(o,null,{default:e(()=>[n("right-end")]),_:1})]),_:1})]),a("div",{class:"row center"},[t(l,{class:"box-item",title:"Bottom Left prompts info",placement:"bottom-start"},{reference:e(()=>[t(o,null,{default:e(()=>[n("bottom-start")]),_:1})]),_:1}),t(l,{class:"box-item",title:"Bottom Center prompts info",placement:"bottom"},{reference:e(()=>[t(o,null,{default:e(()=>[n("bottom")]),_:1})]),_:1}),t(l,{class:"box-item",title:"Bottom Right prompts info",placement:"bottom-end"},{reference:e(()=>[t(o,null,{default:e(()=>[n("bottom-end")]),_:1})]),_:1})])])}const L=m(E,[["render",w]]),N=u({__name:"trigger-event",setup(p){const r=()=>{console.log("confirm!")},o=()=>{console.log("cancel!")};return(l,x)=>{const s=c("el-button"),_=c("el-popconfirm");return i(),f(_,{"confirm-button-text":"Yes","cancel-button-text":"No",icon:d(b),"icon-color":"#626AEF",title:"Are you sure to delete this?",onConfirm:r,onCancel:o},{reference:e(()=>[t(s,null,{default:e(()=>[n("Delete")]),_:1})]),_:1},8,["icon"])}}});export{L as E,A as _,y as a,N as b};
