(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{288:function(t,e,r){var content=r(315);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(106).default)("095a59f6",content,!0,{sourceMap:!1})},314:function(t,e,r){"use strict";r(288)},315:function(t,e,r){var o=r(105)(!1);o.push([t.i,'a[data-v-3c1f57cd]{text-decoration:none;color:inherit}.flex-row-center[data-v-3c1f57cd]{align-items:center;justify-content:center}.flex-row-avg[data-v-3c1f57cd],.flex-row-center[data-v-3c1f57cd]{display:flex;flex-direction:row}.flex-row-avg[data-v-3c1f57cd]{align-items:stretch}.flex-row-avg div[data-v-3c1f57cd]{flex:1 1 0}.fill-box[data-v-3c1f57cd]{width:100%;height:100%;top:0;left:0;position:absolute}.full-screen[data-v-3c1f57cd]{width:100vw;height:100vh;top:0;left:0;position:fixed}#navbar[data-v-3c1f57cd]{height:60px;border-bottom:1px solid #ccc;bottom:0;transition:opacity .3s;z-index:20}#navbar .navline-line[data-v-3c1f57cd]{width:1px;height:80%;margin:0 10px;background-color:#ccc;transform:rotate(30deg)}#navbar .navlink div[data-v-3c1f57cd]{transition:background-color .3s;background-color:transparent}#navbar .navlink div[data-v-3c1f57cd]:after,#navbar .navlink div[data-v-3c1f57cd]:before{position:absolute;content:"";top:0;width:0;height:0;transition:border-color .3s}#navbar .navlink div[data-v-3c1f57cd]:before{right:100%;border-bottom:43px solid transparent;border-left:24.82679px solid transparent}#navbar .navlink div[data-v-3c1f57cd]:after{left:100%;border-top:43px solid transparent;border-right:24.82679px solid transparent}#navbar .navlink div.current[data-v-3c1f57cd],#navbar .navlink div[data-v-3c1f57cd]:hover{background-color:rgba(0,0,0,.6)}#navbar .navlink div.current[data-v-3c1f57cd]:before,#navbar .navlink div[data-v-3c1f57cd]:hover:before{border-bottom-color:rgba(0,0,0,.6)}#navbar .navlink div.current[data-v-3c1f57cd]:after,#navbar .navlink div[data-v-3c1f57cd]:hover:after{border-top-color:rgba(0,0,0,.6)}#cover[data-v-3c1f57cd]{transition:height .3s,padding .3s;z-index:-5}#cover #title-text[data-v-3c1f57cd]{padding-top:50vh}#cover #title-text.scroll-index[data-v-3c1f57cd]{opacity:1}#cover #title-text.scroll-intro[data-v-3c1f57cd],#cover #title-text.scroll-pages[data-v-3c1f57cd]{opacity:0}#cover #bg-image-container[data-v-3c1f57cd]{top:0;right:0;bottom:0;left:0;z-index:-1}#cover #title-text[data-v-3c1f57cd]{font-family:Noto Sans;text-shadow:0 0 10px #000}#cover #title-text #title[data-v-3c1f57cd]{font-size:6rem;font-weight:300}#cover #title-text #subtitle[data-v-3c1f57cd]{font-size:3rem;font-weight:300}#cover #scroll-down[data-v-3c1f57cd]{font-size:9rem;bottom:0;transition:opacity .3s}#cover #scroll-down.scroll-intro[data-v-3c1f57cd],#cover #scroll-down.scroll-pages[data-v-3c1f57cd]{z-index:-10}#page-container[data-v-3c1f57cd]{min-height:100vh;padding-bottom:60px}#navbar.scroll-index[data-v-3c1f57cd]{opacity:0}#navbar.scroll-intro[data-v-3c1f57cd],#navbar.scroll-pages[data-v-3c1f57cd]{opacity:1}',""]),t.exports=o},326:function(t,e,r){"use strict";r.r(e);r(166);var o=r(42),c=r(36),n=r(47),l=r(77),d=r(107),f=r(59),v=r(58),h=(r(89),r(14),r(277)),x=r(0),w=r(295),k=r.n(w);function m(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,o=Object(f.a)(t);if(e){var c=Object(f.a)(this).constructor;r=Reflect.construct(o,arguments,c)}else r=o.apply(this,arguments);return Object(d.a)(this,r)}}var y,C=function(t,e,r,desc){var o,c=arguments.length,n=c<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,r):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(v.a)(Reflect))&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,r,desc);else for(var i=t.length-1;i>=0;i--)(o=t[i])&&(n=(c<3?o(n):c>3?o(e,r,n):o(e,r))||n);return c>3&&n&&Object.defineProperty(e,r,n),n},R=[{route:"/kiara/intro",text:"Intro"},{route:"/kiara/timeline",text:"Timeline"},{route:"/kiara/videos",text:"Videos"},{route:"/kiara/music",text:"Music"},{route:"/kiara/twitter",text:"Twitter"},{route:"/kiara/kfp",text:"KFP"}];!function(t){t.INDEX="scroll-index",t.INTRO="scroll-intro",t.PAGES="scroll-pages"}(y||(y={})),h.a.registerHooks(["beforeRouteUpdate"]);var O=function(t){Object(l.a)(f,t);var e,r,d=m(f);function f(){var t;return Object(c.a)(this,f),(t=d.apply(this,arguments)).pages=R,t.fanarts=[],t.scrollStatus=y.INDEX,t.path=t.$route.path,t}return Object(n.a)(f,[{key:"setScrollStatus",value:function(t){switch(this.path=t.path,t.path){case"/kiara":this.scrollStatus=y.INDEX;break;case"/kiara/intro":this.scrollStatus=y.INTRO;break;default:this.scrollStatus=y.PAGES}}},{key:"beforeRouteUpdate",value:(r=Object(o.a)(regeneratorRuntime.mark((function t(e,r,o){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:this.setScrollStatus(e),o();case 2:case"end":return t.stop()}}),t,this)}))),function(t,e,o){return r.apply(this,arguments)})},{key:"mounted",value:(e=Object(o.a)(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,k.a.get("".concat("http://cloud.harlos.me:2434/","COVERFANARTS"));case 2:e=t.sent,this.fanarts=e.data,this.setScrollStatus(this.$route);case 5:case"end":return t.stop()}}),t,this)}))),function(){return e.apply(this,arguments)})}]),f}(h.c),S=O=C([Object(h.a)({components:{BIconChevronCompactDown:x.Vg}})],O),j=(r(314),r(78)),component=Object(j.a)(S,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"d-flex flex-column position-relative w-100 vh-100",attrs:{id:"kiara"}},[r("div",{staticClass:"full-screen",class:t.scrollStatus,attrs:{id:"cover"}},[r("div",{staticClass:"fill-box",attrs:{id:"bg-image-container"}},[r("CoverArtCarousel",{staticClass:"fill-box",attrs:{fanarts:t.fanarts}})],1),r("div",{staticClass:"text-center text-white",class:t.scrollStatus,attrs:{id:"title-text"}},[r("div",{attrs:{id:"title"}},[t._v("Takanashi Kiara")]),r("div",{attrs:{id:"subtitle"}},[t._v("The Majestic Phoenix")])]),r("div",{staticClass:"position-absolute w-100 text-center text-white",class:t.scrollStatus,attrs:{id:"scroll-down"}},[r("NuxtLink",{attrs:{to:"/kiara/intro"}},[r("BIconChevronCompactDown")],1)],1)]),r("div",{attrs:{id:"page-container"}},[r("NuxtChild")],1),r("div",{staticClass:"flex-row-center position-fixed w-100 px-5 py-2",class:t.scrollStatus,attrs:{id:"navbar"}},[t._l(t.pages,(function(e,o){return[o?r("div",{staticClass:"navline-line"}):t._e(),r("NuxtLink",{staticClass:"navlink flex-fill h-100 mx-2 text-center text-white",attrs:{to:e.route}},[r("div",{staticClass:"flex-row-center position-relative h-100",class:{current:e.route===t.path}},[r("h3",{staticClass:"w-100 m-0 pb-1"},[t._v(t._s(e.text))])])])]}))],2)])}),[],!1,null,"3c1f57cd",null);e.default=component.exports;installComponents(component,{CoverArtCarousel:r(325).default,Template:r(279).default})}}]);