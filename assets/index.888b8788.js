import{T as c,k as s,l,r as i,o as p,c as v,w as e,h as o,j as t}from"./vendor.7f5277dd.js";import{_ as b}from"./index.23c2581e.js";const f={name:"common-basic-bar",components:{[c.name]:c,[s.name]:s},setup(){return{active:l(0)}}},u=t("\u5BB6\u4EBA"),x=t("\u901A\u8BAF\u5F55"),h=t("\u53D1\u73B0"),$=t("\u4E2A\u4EBA\u4E2D\u5FC3");function V(d,n,B,r,C,T){const a=i("van-tabbar-item"),_=i("van-tabbar");return p(),v(_,{modelValue:r.active,"onUpdate:modelValue":n[0]||(n[0]=m=>r.active=m)},{default:e(()=>[o(a,{icon:"home-o",badge:"3",replace:"",to:"/home"},{default:e(()=>[u]),_:1}),o(a,{icon:"friends-o",replace:"",to:"/contact"},{default:e(()=>[x]),_:1}),o(a,{icon:"search",replace:"",to:"/search"},{default:e(()=>[h]),_:1}),o(a,{icon:"setting-o",replace:"",to:"/user"},{default:e(()=>[$]),_:1})]),_:1},8,["modelValue"])}var g=b(f,[["render",V]]);export{g as C};