(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-55c3ba3c"],{"13fd":function(e,t,o){"use strict";o.r(t);var i=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"overflow-auto"},[e._v(" Rapor Id : "+e._s(e.$route.params.raporId)+" Group Id : "+e._s(e.$route.params.groupId)+" "),o("loading",{attrs:{active:e.isLoading,"can-cancel":!0,"on-cancel":e.onCancel,"is-full-page":e.fullPage},on:{"update:active":function(t){e.isLoading=t}}}),o("input",{directives:[{name:"model",rawName:"v-model",value:e.$route.params.groupId,expression:"$route.params.groupId"}],attrs:{type:"hidden"},domProps:{value:e.$route.params.groupId},on:{input:function(t){t.target.composing||e.$set(e.$route.params,"groupId",t.target.value)}}}),o("div",{attrs:{id:"refreshDiv"}})],1)},r=[],n=(o("b0c0"),o("7599")),a=o("9062"),s=o.n(a),c=(o("e40d"),o("4a7a"),o("4360"),o("223c"),o("c878"),o("2b0e")),l=o("049c"),d=o.n(l),u=o("bc3a"),p=o.n(u);c["default"].use(d.a);var h={components:{Loading:s.a},data:function(){return{dynamicId:1,divStatus:!0,accessTokenText:"",raporId:this.$route.params.raporId,groupId:this.$route.params.groupId,isLoading:!1,fullPage:!0}},created:function(){},watch:{$route:function(e,t){this.PowerBIReport()}},mounted:function(){this.PowerBIReport()},computed:{},methods:{PowerBIReport:function(){var e=this;this.isLoading=!0;var t=this;this.$nextTick((function(){console.log(e.$route.name);var o={kullaniciAdi:"Adem.KALEM@alisangroup.com",sifre:"123456",token:"string",isIcMusteri:!1},i="https://localhost:5001/api/Kullanici";p.a.post(i,o,{headers:{"content-type":"application/json"}}).then((function(o){console.log(o),console.log("Login success."),t.accessTokenText=o.data.powerBIToken,console.log(t.accessTokenText);var i=e.$route.params.raporId;console.log(i);var r=e.$route.params.groupId;console.log(r);var a="https://app.powerbi.com/reportEmbed?reportId="+i+"&groupId="+r,s=n["models"].Permissions.All,c={type:"report",tokenType:n["models"].TokenType.Aad,accessToken:t.accessTokenText,embedUrl:a,id:i,permissions:s,settings:{panes:{filters:{visible:!0},pageNavigation:{visible:!0}}}},l=new n["service"].Service(n["factories"].hpmFactory,n["factories"].wpmpFactory,n["factories"].routerFactory),d="dynamicId"+e.dynamicId;$("#refreshDiv").html(""),$("#refreshDiv").html('<div id="'+d+'" style="width: 100%; height: 800px"></div></div>');var u=document.getElementById(d),p=l.embed(u,c);e.dynamicId=e.dynamicId+1,p.off("loaded"),p.off("rendered",(function(){})),p.on("error",(function(){}))})).catch((function(e){console.error("Login failed.",e)}))})),setTimeout((function(){e.isLoading=!1}),5e3)},onCancel:function(){console.log("User cancelled the loader.")}}},m=h,f=(o("19fb"),o("2877")),g=Object(f["a"])(m,i,r,!1,null,null,null);t["default"]=g.exports},"19fb":function(e,t,o){"use strict";o("97c6")},9062:function(e,t,o){!function(t,i){e.exports=i(o("2b0e"))}(self,(function(e){return(()=>{"use strict";var t={982:t=>{t.exports=e}},o={};function i(e){var r=o[e];if(void 0!==r)return r.exports;var n=o[e]={exports:{}};return t[e](n,n.exports,i),n.exports}i.d=(e,t)=>{for(var o in t)i.o(t,o)&&!i.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);var r={};return(()=>{i.d(r,{default:()=>k});var e=i(982);const t="undefined"!=typeof window?window.HTMLElement:Object,o={class:"vld-icon"},n={mounted(){this.enforceFocus&&document.addEventListener("focusin",this.focusIn)},methods:{focusIn(e){if(!this.isActive)return;if(e.target===this.$refs.root||this.$refs.root.contains(e.target))return;let t=this.container?this.container:this.isFullPage?null:this.$refs.root.parentElement;(this.isFullPage||t&&t.contains(e.target))&&(e.preventDefault(),this.$refs.root.focus())}},beforeUnmount(){document.removeEventListener("focusin",this.focusIn)}},a=(0,e.createVNode)("g",{fill:"none","fill-rule":"evenodd"},[(0,e.createVNode)("g",{transform:"translate(1 1)","stroke-width":"2"},[(0,e.createVNode)("circle",{"stroke-opacity":".25",cx:"18",cy:"18",r:"18"}),(0,e.createVNode)("path",{d:"M36 18c0-9.94-8.06-18-18-18"},[(0,e.createVNode)("animateTransform",{attributeName:"transform",type:"rotate",from:"0 18 18",to:"360 18 18",dur:"0.8s",repeatCount:"indefinite"})])])],-1),s=(0,e.defineComponent)({name:"spinner",props:{color:{type:String,default:"#000"},height:{type:Number,default:64},width:{type:Number,default:64}}});s.render=function(t,o,i,r,n,s){return(0,e.openBlock)(),(0,e.createBlock)("svg",{viewBox:"0 0 38 38",xmlns:"http://www.w3.org/2000/svg",width:t.width,height:t.height,stroke:t.color},[a],8,["width","height","stroke"])};const c=s,l=(0,e.createVNode)("circle",{cx:"15",cy:"15",r:"15"},[(0,e.createVNode)("animate",{attributeName:"r",from:"15",to:"15",begin:"0s",dur:"0.8s",values:"15;9;15",calcMode:"linear",repeatCount:"indefinite"}),(0,e.createVNode)("animate",{attributeName:"fill-opacity",from:"1",to:"1",begin:"0s",dur:"0.8s",values:"1;.5;1",calcMode:"linear",repeatCount:"indefinite"})],-1),d=(0,e.createVNode)("circle",{cx:"60",cy:"15",r:"9","fill-opacity":"0.3"},[(0,e.createVNode)("animate",{attributeName:"r",from:"9",to:"9",begin:"0s",dur:"0.8s",values:"9;15;9",calcMode:"linear",repeatCount:"indefinite"}),(0,e.createVNode)("animate",{attributeName:"fill-opacity",from:"0.5",to:"0.5",begin:"0s",dur:"0.8s",values:".5;1;.5",calcMode:"linear",repeatCount:"indefinite"})],-1),u=(0,e.createVNode)("circle",{cx:"105",cy:"15",r:"15"},[(0,e.createVNode)("animate",{attributeName:"r",from:"15",to:"15",begin:"0s",dur:"0.8s",values:"15;9;15",calcMode:"linear",repeatCount:"indefinite"}),(0,e.createVNode)("animate",{attributeName:"fill-opacity",from:"1",to:"1",begin:"0s",dur:"0.8s",values:"1;.5;1",calcMode:"linear",repeatCount:"indefinite"})],-1),p=(0,e.defineComponent)({name:"dots",props:{color:{type:String,default:"#000"},height:{type:Number,default:240},width:{type:Number,default:60}}});p.render=function(t,o,i,r,n,a){return(0,e.openBlock)(),(0,e.createBlock)("svg",{viewBox:"0 0 120 30",xmlns:"http://www.w3.org/2000/svg",fill:t.color,width:t.width,height:t.height},[l,d,u],8,["fill","width","height"])};const h=p,m=(0,e.createVNode)("rect",{x:"0",y:"13",width:"4",height:"5"},[(0,e.createVNode)("animate",{attributeName:"height",attributeType:"XML",values:"5;21;5",begin:"0s",dur:"0.6s",repeatCount:"indefinite"}),(0,e.createVNode)("animate",{attributeName:"y",attributeType:"XML",values:"13; 5; 13",begin:"0s",dur:"0.6s",repeatCount:"indefinite"})],-1),f=(0,e.createVNode)("rect",{x:"10",y:"13",width:"4",height:"5"},[(0,e.createVNode)("animate",{attributeName:"height",attributeType:"XML",values:"5;21;5",begin:"0.15s",dur:"0.6s",repeatCount:"indefinite"}),(0,e.createVNode)("animate",{attributeName:"y",attributeType:"XML",values:"13; 5; 13",begin:"0.15s",dur:"0.6s",repeatCount:"indefinite"})],-1),g=(0,e.createVNode)("rect",{x:"20",y:"13",width:"4",height:"5"},[(0,e.createVNode)("animate",{attributeName:"height",attributeType:"XML",values:"5;21;5",begin:"0.3s",dur:"0.6s",repeatCount:"indefinite"}),(0,e.createVNode)("animate",{attributeName:"y",attributeType:"XML",values:"13; 5; 13",begin:"0.3s",dur:"0.6s",repeatCount:"indefinite"})],-1),v=(0,e.defineComponent)({name:"bars",props:{color:{type:String,default:"#000"},height:{type:Number,default:40},width:{type:Number,default:40}}});v.render=function(t,o,i,r,n,a){return(0,e.openBlock)(),(0,e.createBlock)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 30 30",height:t.height,width:t.width,fill:t.color},[m,f,g],8,["height","width","fill"])};const b={Spinner:c,Dots:h,Bars:v},y=(0,e.defineComponent)({name:"vue-loading",mixins:[n],props:{active:Boolean,programmatic:Boolean,container:[Object,Function,t],isFullPage:{type:Boolean,default:!0},enforceFocus:{type:Boolean,default:!0},lockScroll:{type:Boolean,default:!1},transition:{type:String,default:"fade"},canCancel:Boolean,onCancel:{type:Function,default:()=>{}},color:String,backgroundColor:String,blur:{type:String,default:"2px"},opacity:Number,width:Number,height:Number,zIndex:Number,loader:{type:String,default:"spinner"}},emits:["hide","update:active"],data(){return{isActive:this.active}},components:b,mounted(){document.addEventListener("keyup",this.keyPress)},methods:{cancel(){this.canCancel&&this.isActive&&(this.hide(),this.onCancel.apply(null,arguments))},hide(){this.$emit("hide"),this.$emit("update:active",!1),this.programmatic&&(this.isActive=!1,setTimeout(()=>{const t=this.$refs.root.parentElement;var o,i;(0,e.render)(null,t),void 0!==(o=t).remove?o.remove():null===(i=o.parentNode)||void 0===i||i.removeChild(o)},150))},disableScroll(){this.isFullPage&&this.lockScroll&&document.body.classList.add("vld-shown")},enableScroll(){this.isFullPage&&this.lockScroll&&document.body.classList.remove("vld-shown")},keyPress(e){27===e.keyCode&&this.cancel()}},watch:{active(e){this.isActive=e},isActive(e){e?this.disableScroll():this.enableScroll()}},computed:{bgStyle(){return{background:this.backgroundColor,opacity:this.opacity,backdropFilter:`blur(${this.blur})`}}},beforeUnmount(){document.removeEventListener("keyup",this.keyPress)}});y.render=function(t,i,r,n,a,s){return(0,e.openBlock)(),(0,e.createBlock)(e.Transition,{ref:"root",name:t.transition},{default:(0,e.withCtx)(()=>[(0,e.withDirectives)((0,e.createVNode)("div",{tabindex:"0",class:["vld-overlay is-active",{"is-full-page":t.isFullPage}],"aria-busy":t.isActive,"aria-label":"Loading",style:{zIndex:t.zIndex}},[(0,e.createVNode)("div",{class:"vld-background",onClick:i[1]||(i[1]=(0,e.withModifiers)((...e)=>t.cancel&&t.cancel(...e),["prevent"])),style:t.bgStyle},null,4),(0,e.createVNode)("div",o,[(0,e.renderSlot)(t.$slots,"before"),(0,e.renderSlot)(t.$slots,"default",{},()=>[((0,e.openBlock)(),(0,e.createBlock)((0,e.resolveDynamicComponent)(t.loader),{color:t.color,width:t.width,height:t.height},null,8,["color","width","height"]))]),(0,e.renderSlot)(t.$slots,"after")])],14,["aria-busy"]),[[e.vShow,t.isActive]])]),_:3},8,["name"])};const w=y;function N(t={},o={}){return{show(i=t,r=o){const n=Object.assign({},t,i,{programmatic:!0,lockScroll:!0,isFullPage:!1,active:!0});let a=n.container;n.container||(a=document.body,n.isFullPage=!0);const s=Object.assign({},o,r);return{hide:function(t,o,i,r={}){const n=(0,e.h)(t,o,r),a=document.createElement("div");return a.classList.add("vld-container"),i.appendChild(a),(0,e.render)(n,a),n.component}(w,n,a,s).ctx.hide}}}}w.install=(e,t={},o={})=>{const i=N(t,o);e.config.globalProperties.$loading=i,e.provide("$loading",i)};const k=w})(),r.default})()}))},"97c6":function(e,t,o){},c878:function(e,t,o){"use strict";var i=o("bc3a"),r=o.n(i),n=r.a.create({baseURL:"http://10.16.15.90:5703/",withCredentials:!1});n.interceptors.request.use((function(e){var t=e.method.toUpperCase();return"OPTIONS"!==t&&(e.headers={"Content-Type":"application/json","Access-Control-Allow-Origin":"*","Access-Control-Allow-Credentials":"true"}),e}))},e40d:function(e,t,o){}}]);
//# sourceMappingURL=chunk-55c3ba3c.6cc97505.js.map