(window.webpackJsonp=window.webpackJsonp||[]).push([[9,3,4,7],{375:function(t,e,r){"use strict";r.d(e,"a",(function(){return l}));var n=r(47),o=(r(95),r(30),r(377)),c=r.n(o),l=function(){var t=Object(n.a)(regeneratorRuntime.mark((function t(e){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.a.get("".concat("https://cloud.harlos.me:2434/").concat(e));case 2:return r=t.sent,t.abrupt("return",r.data);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},376:function(t,e,r){var content=r(380);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(135).default)("563d830b",content,!0,{sourceMap:!1})},378:function(t,e,r){var content=r(388);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(135).default)("e6a301c8",content,!0,{sourceMap:!1})},379:function(t,e,r){"use strict";r(376)},380:function(t,e,r){var n=r(134)(!1);n.push([t.i,".flex-column[data-v-85ffe0aa],.flex-row[data-v-85ffe0aa]{display:flex}.middle-center[data-v-85ffe0aa]{justify-content:center;align-items:center}.stretch-center[data-v-85ffe0aa]{justify-content:center;align-items:stretch}.fill-screen[data-v-85ffe0aa]{width:100%;height:100vh}.fill-box[data-v-85ffe0aa]{width:100%;height:100%;top:0;left:0;position:absolute}.full-screen[data-v-85ffe0aa]{width:100vw;height:100vh;top:0;left:0;position:fixed}.fanart .blur[data-v-85ffe0aa]{background-position:50%;background-size:cover;background-repeat:no-repeat;filter:blur(16px);transform:scale(1.1);position:absolute;top:0;left:0;z-index:-1}",""]),t.exports=n},381:function(t,e,r){var content=r(390);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(135).default)("ca80d1b4",content,!0,{sourceMap:!1})},385:function(t,e,r){"use strict";r.r(e);r(13),r(12),r(9),r(14),r(10),r(15);var n=r(3),o=r(133);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function l(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var d=Object(o.b)({props:{imageUrl:{type:String,required:!0},artist:{type:String,required:!0},link:{type:String,required:!0},imageStyle:{type:Object,default:function(){return{}}},artistStyle:{type:Object,default:function(){return{}}}},setup:function(t){var e=Object(o.g)(t),r=e.imageUrl,n=e.imageStyle,c=e.artistStyle,d={backgroundPosition:"center",backgroundSize:"auto 100%",backgroundRepeat:"no-repeat"},f={position:"absolute",right:".3rem",top:0,fontSize:"1rem",fontFamily:"monospace",color:"#FFFFFF99",textShadow:"0 0 5px black",zIndex:100};return{combinedImageStyle:Object(o.a)((function(){return l(l({backgroundImage:"url('".concat(r.value,"')")},d),n)})),combinedArtistStyle:Object(o.a)((function(){return l(l({},f),c)}))}}}),f=(r(379),r(94)),component=Object(f.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"fanart w-100 h-100 position-relative overflow-hidden"},[r("div",{staticClass:"blur w-100 h-100",style:{backgroundImage:"url('"+t.imageUrl+"')"}}),r("div",{staticClass:"image w-100 h-100",style:t.combinedImageStyle},[r("a",{staticClass:"artist",style:t.combinedArtistStyle,attrs:{href:t.link,target:"_blank"}},[t._v(t._s(t.artist))])])])}),[],!1,null,"85ffe0aa",null);e.default=component.exports},387:function(t,e,r){"use strict";r(378)},388:function(t,e,r){var n=r(134)(!1);n.push([t.i,".flex-column,.flex-row{display:flex}.middle-center{justify-content:center;align-items:center}.stretch-center{justify-content:center;align-items:stretch}.fill-screen{width:100%;height:100vh}.fill-box{width:100%;height:100%;top:0;left:0;position:absolute}.full-screen{width:100vw;height:100vh;top:0;left:0;position:fixed}.carousel-inner{height:100%}.carousel-item{width:100%;height:100%;background-position:50%;background-size:cover}",""]),t.exports=n},389:function(t,e,r){"use strict";r(381)},390:function(t,e,r){var n=r(134)(!1);n.push([t.i,'.flex-column[data-v-ad592206],.flex-row[data-v-ad592206]{display:flex}.middle-center[data-v-ad592206]{justify-content:center;align-items:center}.stretch-center[data-v-ad592206]{justify-content:center;align-items:stretch}.fill-screen[data-v-ad592206]{width:100%;height:100vh}.fill-box[data-v-ad592206]{width:100%;height:100%;top:0;left:0;position:absolute}.full-screen[data-v-ad592206]{width:100vw;height:100vh;top:0;left:0;position:fixed}a[data-v-ad592206]{text-decoration:none;color:inherit}.page-container[data-v-ad592206]{padding:1.5rem 3rem}.page-container .page-title[data-v-ad592206]{font-size:2rem;margin:1rem 0}.page-enter-active[data-v-ad592206],.page-leave-active[data-v-ad592206]{transition:opacity .2s}.page-enter[data-v-ad592206],.page-leave-to[data-v-ad592206]{opacity:0}#navbar[data-v-ad592206]{background-color:#8acfc2;border-bottom:1px solid #1c110a;transition:opacity .3s}#navbar #navbar-name[data-v-ad592206]{font-size:2rem}#navbar #sidebar[data-v-ad592206]{background-color:#8acfc2;top:65px;left:100%;width:300px;padding:1rem 5rem;z-index:300}#navbar .navline-line[data-v-ad592206]{width:1px;height:2em;margin:0 10px;background-color:#1c110a;transform:rotate(33deg)}#navbar .navline-h[data-v-ad592206]{height:1px;background-color:#1c110a}#navbar .navlink+#sidebar.open[data-v-ad592206]{left:unset;right:0}#navbar .navlink div[data-v-ad592206]{transition:background-color .3s;background-color:transparent;color:#1c110a}#navbar .navlink div[data-v-ad592206]:after,#navbar .navlink div[data-v-ad592206]:before{position:absolute;content:"";top:0;width:0;height:0;transition:border-color .3s}#navbar .navlink div[data-v-ad592206]:before{right:100%;border-bottom:2.5em solid transparent;border-left:25px solid transparent}#navbar .navlink div[data-v-ad592206]:after{left:100%;border-top:2.5em solid transparent;border-right:25px solid transparent}#navbar .navlink div.current[data-v-ad592206],#navbar .navlink div[data-v-ad592206]:hover{background-color:#eb5e33;color:#fff}#navbar .navlink div.current[data-v-ad592206]:before,#navbar .navlink div[data-v-ad592206]:hover:before{border-bottom-color:#eb5e33}#navbar .navlink div.current[data-v-ad592206]:after,#navbar .navlink div[data-v-ad592206]:hover:after{border-top-color:#eb5e33}',""]),t.exports=n},405:function(t,e,r){var content=r(438);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(135).default)("5e0ebd10",content,!0,{sourceMap:!1})},406:function(t,e,r){var content=r(440);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(135).default)("8f9b58cc",content,!0,{sourceMap:!1})},414:function(t,e,r){"use strict";r.r(e);var n=r(133),o=Object(n.b)({props:{fanarts:{type:Array,required:!0}},setup:function(){return{}}}),c=(r(387),r(94)),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("b-carousel",{attrs:{"img-height":"100%","no-hover-pause":!1}},t._l(t.fanarts,(function(e,i){return r("b-carousel-slide",{key:i,scopedSlots:t._u([{key:"img",fn:function(){return[r("Fanart",t._b({},"Fanart",e,!1))]},proxy:!0}],null,!0)})})),1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Fanart:r(385).default})},415:function(t,e,r){"use strict";r.r(e);r(163),r(198);var n=r(133),o=Object(n.b)({setup:function(){var t=Object(n.h)(),e=[{route:"/intro",text:"Intro"},{route:"/lore",text:"Lore"},{route:"/history",text:"History"},{route:"/timeline",text:"Timeline"},{route:"/videos",text:"Videos"},{route:"/music",text:"Music"},{route:"/kfp",text:"KFP"}],r=Object(n.a)((function(){return e.find((function(p){return t.value.path.startsWith(p.route)}))})),o=Object(n.e)(!1);return{pages:e,thisPage:r,navbarOpen:o,triggerNavbar:function(){o.value=!o.value}}}}),c=(r(389),r(94)),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"flex-row middle-center w-100 px-3 px-lg-5 py-2",attrs:{id:"navbar"}},[r("span",{staticClass:"mr-3 mr-lg-5",attrs:{id:"navbar-name"}},[r("NuxtLink",{attrs:{to:"/"}},[t._v("Takanashi Kiara")])],1),r("div",{staticClass:"d-none d-md-flex flex-row middle-center flex-fill"},[t._l(t.pages,(function(e,n){return[n?r("div",{staticClass:"navline-line"}):t._e(),r("NuxtLink",{staticClass:"navlink flex-fill mx-3 text-center text-white",attrs:{to:e.route}},[r("div",{staticClass:"flex-row-center position-relative h-100 py-2",class:{current:t.$route.path.startsWith(e.route)}},[r("span",{staticClass:"h6 w-100 m-0 pb-1"},[t._v(t._s(e.text))])])])]}))],2),r("div",{staticClass:"d-flex d-md-none flex-fill"}),r("div",{staticClass:"d-flex d-md-none mr-5 flex-row"},[t.thisPage?r("div",{staticClass:"navlink mx-3 text-center text-white",on:{click:t.triggerNavbar}},[r("div",{staticClass:"flex-row-center position-relative h-100 py-2 current"},[r("span",{staticClass:"h6 w-100 m-0 pb-1"},[t._v(t._s(t.thisPage.text))])])]):t._e(),r("div",{staticClass:"position-fixed",class:{open:t.navbarOpen},attrs:{id:"sidebar"},on:{click:t.triggerNavbar}},[t._l(t.pages,(function(e,n){return[n?r("div",{staticClass:"navline-h"}):t._e(),r("NuxtLink",{staticClass:"navlink flex-fill mx-5 text-center text-white",attrs:{to:e.route}},[r("div",{staticClass:"flex-row-center position-relative h-100 py-2",class:{current:t.$route.path.startsWith(e.route)}},[r("span",{staticClass:"h6 w-100 m-0 pb-1"},[t._v(t._s(e.text))])])])]}))],2)])])}),[],!1,null,"ad592206",null);e.default=component.exports},437:function(t,e,r){"use strict";r(405)},438:function(t,e,r){var n=r(134)(!1);n.push([t.i,".flex-column,.flex-row{display:flex}.middle-center{justify-content:center;align-items:center}.stretch-center{justify-content:center;align-items:stretch}.fill-screen{width:100%;height:100vh}.fill-box{width:100%;height:100%;top:0;left:0;position:absolute}.full-screen{width:100vw;height:100vh;top:0;left:0;position:fixed}@media screen and (max-width:768px){html{font-size:10px}}",""]),t.exports=n},439:function(t,e,r){"use strict";r(406)},440:function(t,e,r){var n=r(134)(!1);n.push([t.i,".flex-column[data-v-527166f3],.flex-row[data-v-527166f3]{display:flex}.middle-center[data-v-527166f3]{justify-content:center;align-items:center}.stretch-center[data-v-527166f3]{justify-content:center;align-items:stretch}.fill-screen[data-v-527166f3]{width:100%;height:100vh}.fill-box[data-v-527166f3]{width:100%;height:100%;top:0;left:0;position:absolute}.full-screen[data-v-527166f3]{width:100vw;height:100vh;top:0;left:0;position:fixed}a[data-v-527166f3]{text-decoration:none;color:inherit}.page-container[data-v-527166f3]{padding:1.5rem 3rem}.page-container .page-title[data-v-527166f3]{font-size:2rem;margin:1rem 0}.page-enter-active[data-v-527166f3],.page-leave-active[data-v-527166f3]{transition:opacity .2s}.page-enter[data-v-527166f3],.page-leave-to[data-v-527166f3]{opacity:0}#kiara[data-v-527166f3]{color:#1c110a}#kiara #bg-image-container[data-v-527166f3]{top:0;right:0;bottom:0;left:0}#kiara #page-container[data-v-527166f3]{height:100vh;overflow-y:auto;position:relative;margin-top:65px;background-color:rgba(28,17,10,.75)}#kiara #page-container #back[data-v-527166f3]{opacity:1;bottom:1rem;right:1rem;transition:opacity .3s}#kiara #navbar[data-v-527166f3]{opacity:1;top:0;z-index:200;height:65px;transition:opacity .3s}#kiara.index #page-container[data-v-527166f3]{background-color:transparent}#kiara.index #navbar[data-v-527166f3]{pointer-events:none;opacity:0}#kiara.intro #page-container[data-v-527166f3]{background-color:rgba(28,17,10,.75)}#kiara.intro #navbar[data-v-527166f3]{opacity:1}",""]),t.exports=n},457:function(t,e,r){"use strict";r.r(e);var n=r(47),o=(r(95),r(133)),c=r(375),l=Object(o.b)({setup:function(){var t=Object(o.h)(),e=Object(o.e)([]),r=Object(o.a)((function(){return/^\/?$/.test(t.value.path)})),l=Object(o.a)((function(){return/^\/?intro\/?$/.test(t.value.path)}));return Object(o.d)(Object(n.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,Object(c.a)("COVERFANARTS");case 2:e.value=r.sent,console.log(t.value.path);case 4:case"end":return r.stop()}}),r)})))),{fanarts:e,isIndex:r,isIntro:l}}}),d=(r(437),r(439),r(94)),component=Object(d.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"d-flex flex-column position-relative w-100 vh-100",class:{index:t.isIndex,intro:t.isIntro},attrs:{id:"kiara"}},[r("div",{staticClass:"fill-box",attrs:{id:"bg-image-container"}},[r("CoverArtCarousel",{staticClass:"fill-box",attrs:{fanarts:t.fanarts}})],1),r("Navbar",{staticClass:"position-fixed",attrs:{id:"navbar"}}),r("div",{attrs:{id:"page-container"}},[r("NuxtChild")],1)],1)}),[],!1,null,"527166f3",null);e.default=component.exports;installComponents(component,{CoverArtCarousel:r(414).default,Navbar:r(415).default})}}]);