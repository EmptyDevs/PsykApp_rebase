(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["view-Profile-vue"],{"59ca":function(t,a,s){"use strict";function e(t){return t&&"object"===typeof t&&"default"in t?t["default"]:t}var i=e(s("c23d")),n="firebase",r="7.7.0";
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
i.registerVersion(n,r,"app"),t.exports=i},c66d:function(t,a,s){"use strict";s.r(a);var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[t.user.is_logged_in?s("v-card",[s("v-card-text",[s("p",{staticClass:"display-1 text--primary"},[t._v(" Profile ")]),s("div",{staticClass:"text--primary"},[s("span",{staticClass:"font-weight-medium"},[t._v(" UID:")]),t.user.data.uid?s("span",{staticClass:"font-weight-light"},[t._v(" "+t._s(t.user.data.uid))]):s("span",{staticClass:"font-weight-regular font-italic"},[t._v(" non disponible")])]),s("div",{staticClass:"text--primary"},[s("span",{staticClass:"font-weight-medium"},[t._v(" Prénom Nom:")]),t.user.data.displayName?s("span",{staticClass:"font-weight-light"},[t._v(" "+t._s(t.user.data.displayName))]):s("span",{staticClass:"font-weight-regular font-italic"},[t._v(" non disponible")])]),s("div",{staticClass:"text--primary"},[s("span",{staticClass:"font-weight-medium"},[t._v(" Email:")]),t.user.data.email?s("span",{staticClass:"font-weight-light"},[t._v(" "+t._s(t.user.data.email))]):s("span",{staticClass:"font-weight-regular font-italic"},[t._v(" non disponible")])]),s("div",{staticClass:"text--primary"},[s("span",{staticClass:"font-weight-medium"},[t._v(" Numéro de téléphone:")]),t.user.data.phoneNumber?s("span",{staticClass:"font-weight-light"},[t._v(" "+t._s(t.user.data.phoneNumber))]):s("span",{staticClass:"font-weight-regular font-italic"},[t._v(" non disponible")])])]),s("v-card-actions",[s("v-spacer"),s("v-btn",{attrs:{color:"red white--text"},on:{click:t.signOut}},[t._v("Logout")])],1)],1):t._e()],1)},i=[],n=s("2f62"),r=s("59ca"),o={name:"home",data(){return{}},computed:{...Object(n["c"])({user:"UserModule/getUser"}),userInfo(){var t=r["auth"]().currentUser;return t||null}},methods:{...Object(n["b"])("UserModule",["fetchUser"]),signOut(t){t.stopPropagation(),r["auth"]().signOut()},debug(){this.fetchUser(r["auth"]().currentUser),console.log(JSON.stringify(this.user))}}},l=o,u=s("2877"),c=s("6544"),d=s.n(c),p=s("8336"),f=s("b0af"),g=s("99d9"),h=s("2fa4"),v=Object(u["a"])(l,e,i,!1,null,null,null);a["default"]=v.exports;d()(v,{VBtn:p["a"],VCard:f["a"],VCardActions:g["a"],VCardText:g["b"],VSpacer:h["a"]})}}]);
//# sourceMappingURL=view-Profile-vue.effccf49.js.map