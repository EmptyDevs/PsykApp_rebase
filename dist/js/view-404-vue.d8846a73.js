(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["view-404-vue"],{"62ad":function(t,e,a){"use strict";a("4b85");var l=a("2b0e"),r=a("d9f7"),n=a("80d2");const o=["sm","md","lg","xl"],s=(()=>o.reduce((t,e)=>(t[e]={type:[Boolean,String,Number],default:!1},t),{}))(),i=(()=>o.reduce((t,e)=>(t["offset"+Object(n["B"])(e)]={type:[String,Number],default:null},t),{}))(),c=(()=>o.reduce((t,e)=>(t["order"+Object(n["B"])(e)]={type:[String,Number],default:null},t),{}))(),u={col:Object.keys(s),offset:Object.keys(i),order:Object.keys(c)};function d(t,e,a){let l=t;if(null!=a&&!1!==a){if(e){const a=e.replace(t,"");l+=`-${a}`}return"col"!==t||""!==a&&!0!==a?(l+=`-${a}`,l.toLowerCase()):l.toLowerCase()}}const f=new Map;e["a"]=l["a"].extend({name:"v-col",functional:!0,props:{cols:{type:[Boolean,String,Number],default:!1},...s,offset:{type:[String,Number],default:null},...i,order:{type:[String,Number],default:null},...c,alignSelf:{type:String,default:null,validator:t=>["auto","start","end","center","baseline","stretch"].includes(t)},tag:{type:String,default:"div"}},render(t,{props:e,data:a,children:l,parent:n}){let o="";for(const r in e)o+=String(e[r]);let s=f.get(o);if(!s){let t;for(t in s=[],u)u[t].forEach(a=>{const l=e[a],r=d(t,a,l);r&&s.push(r)});const a=s.some(t=>t.startsWith("col-"));s.push({col:!a||!e.cols,[`col-${e.cols}`]:e.cols,[`offset-${e.offset}`]:e.offset,[`order-${e.order}`]:e.order,[`align-self-${e.alignSelf}`]:e.alignSelf}),f.set(o,s)}return t(e.tag,Object(r["a"])(a,{class:s}),l)}})},"8cdb":function(t,e,a){"use strict";a.r(e);var l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("v-layout",{staticStyle:{background:"white"},attrs:{"align-center":"","justify-center":"","fill-height":""}},[a("v-dialog",{staticStyle:{background:"white"},attrs:{persistent:"",fullscreen:""},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[a("v-card",{staticStyle:{height:"100%",width:"100%",background:"white"},attrs:{flat:""}},[a("v-container",{staticClass:"text-center",staticStyle:{height:"calc(100vh - 58px)"},attrs:{"fill-height":""}},[a("v-row",{attrs:{align:"center"}},[a("v-col",[a("h1",{staticClass:"display-2",staticStyle:{color:"#7DBF73"}},[t._v("Whoops, 404")]),a("h1",{staticClass:"display-1",staticStyle:{color:"#7DBF73"}},[t._v(" Cette page n'existe pas ")]),a("v-btn",{staticStyle:{"margin-top":"3%"},attrs:{color:"#121040",outlined:""},on:{click:function(e){return t.goTo()}}},[t._v(" Revenir au menu principal ")])],1)],1)],1)],1)],1)],1)],1)},r=[],n={name:"FourOhFour",props:{lang:{type:String,default:"fr"}},data(){return{dialog:!0}},created(){this.$ssrContext&&this.$ssrContext.res.status(404)},methods:{goTo(){this.$router.push({name:"About"})}}},o=n,s=a("2877"),i=a("6544"),c=a.n(i),u=a("8336"),d=a("b0af"),f=a("62ad"),g=a("a523"),p=a("169a"),h=a("a722"),b=a("0fd9"),y=Object(s["a"])(o,l,r,!1,null,null,null);e["default"]=y.exports;c()(y,{VBtn:u["a"],VCard:d["a"],VCol:f["a"],VContainer:g["a"],VDialog:p["a"],VLayout:h["a"],VRow:b["a"]})},a722:function(t,e,a){"use strict";a("20f6");var l=a("e8f2");e["a"]=Object(l["a"])("layout")}}]);
//# sourceMappingURL=view-404-vue.d8846a73.js.map