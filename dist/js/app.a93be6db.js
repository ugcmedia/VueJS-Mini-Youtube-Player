(function(t){function e(e){for(var i,n,r=e[0],c=e[1],o=e[2],u=0,v=[];u<r.length;u++)n=r[u],Object.prototype.hasOwnProperty.call(a,n)&&a[n]&&v.push(a[n][0]),a[n]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(t[i]=c[i]);d&&d(e);while(v.length)v.shift()();return l.push.apply(l,o||[]),s()}function s(){for(var t,e=0;e<l.length;e++){for(var s=l[e],i=!0,r=1;r<s.length;r++){var c=s[r];0!==a[c]&&(i=!1)}i&&(l.splice(e--,1),t=n(n.s=s[0]))}return t}var i={},a={app:0},l=[];function n(e){if(i[e])return i[e].exports;var s=i[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,n),s.l=!0,s.exports}n.m=t,n.c=i,n.d=function(t,e,s){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(s,i,function(e){return t[e]}.bind(null,i));return s},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var o=0;o<r.length;o++)e(r[o]);var d=c;l.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},4678:function(t,e,s){var i={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function a(t){var e=l(t);return s(e)}function l(t){if(!s.o(i,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return i[t]}a.keys=function(){return Object.keys(i)},a.resolve=l,t.exports=a,a.id="4678"},"56d7":function(t,e,s){"use strict";s.r(e);s("e260"),s("e6cf"),s("cca6"),s("a79d");var i=s("2b0e"),a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("Player")],1)},l=[],n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"wrapper"},[i("div",{staticClass:"player"},[i("div",{staticClass:"player__top"},[i("div",{staticClass:"player-cover"},[i("div",{staticClass:"video"},[t.playing?t._e():i("img",{staticClass:"default-image",attrs:{src:s("b2f3"),alt:"Default Image"}}),i("div",{attrs:{id:"youtube-player"}})])]),i("div",{staticClass:"player-controls"},[i("div",{staticClass:"player-controls__item -favorite",class:{active:t.current_video.favorite},on:{click:t.favorite}},[i("svg",{staticClass:"icon"},[i("use",{attrs:{"xlink:href":"#icon-heart-o"}})])]),i("div",{staticClass:"player-controls__item next",on:{click:t.nextTrack}},[i("svg",{staticClass:"icon"},[i("use",{attrs:{"xlink:href":"#icon-next"}})])]),i("div",{staticClass:"player-controls__item prev",on:{click:t.prevTrack}},[i("svg",{staticClass:"icon"},[i("use",{attrs:{"xlink:href":"#icon-prev"}})])]),i("div",{staticClass:"player-controls__item -xl js-play play",on:{click:t.play}},[i("svg",{staticClass:"icon"},[t.isTimerPlaying?i("use",{attrs:{"xlink:href":"#icon-pause"}}):i("use",{attrs:{"xlink:href":"#icon-play"}})])])])]),i("div",{ref:"progress",staticClass:"progress"},[i("div",{staticClass:"album-info__name"},[t._v(t._s(t.current_video.title))]),i("div",{staticClass:"progress__top"},[i("div",{staticClass:"progress__duration"},[t._v(t._s(t.current_video.duration))])]),i("div",{staticClass:"progress__bar",on:{click:t.clickProgress}},[i("div",{staticClass:"progress__current",style:{width:t.barWidth}})]),t.currentTime?t._e():i("div",{staticClass:"progress__time"},[t._v("00:00")]),t.currentTime?i("div",{staticClass:"progress__time"},[t._v(t._s(t.currentTime))]):t._e()]),i("div",{staticClass:"add_link"},[i("label",{staticClass:"youtube_link_label",attrs:{for:"youtube_link"}},[t._v("FREE: Add A Youtube Video")]),i("div",{staticClass:"add_block"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.url,expression:"url"}],staticClass:"youtube_link_input",attrs:{type:"text",id:"youtube_link",placeholder:"https://..Paste Your Youtube URL Link here"},domProps:{value:t.url},on:{input:function(e){e.target.composing||(t.url=e.target.value)}}}),i("svg",{staticClass:"svg-inline--fa fa-plus-circle fa-w-16 add_svg",attrs:{"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"plus-circle",role:"img",height:"35",width:"35",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},on:{click:t.addInPlaylist}},[i("path",{attrs:{fill:"currentColor",d:"M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm144 276c0 6.6-5.4 12-12 12h-92v92c0 6.6-5.4 12-12 12h-56c-6.6 0-12-5.4-12-12v-92h-92c-6.6 0-12-5.4-12-12v-56c0-6.6 5.4-12 12-12h92v-92c0-6.6 5.4-12 12-12h56c6.6 0 12 5.4 12 12v92h92c6.6 0 12 5.4 12 12v56z"}})])])]),t._m(0)]),i("transition",{attrs:{name:"slide"}},[t.show_playlist&&!t.note?i("div",{staticClass:"playlist"},[i("div",{staticClass:"next-video-title"},[t._v("Next Video")]),i("div",{staticClass:"video-detail"},[t.playlist.length>1?i("div",[t.current_video.number<t.playlist.length?i("div",{staticClass:"video-title"},[t._v(" "+t._s(t.playlist[t.current_video.number].number)+". "+t._s(t.playlist[t.current_video.number].title)+" ")]):i("div",{staticClass:"video-title"},[t._v(" "+t._s(t.playlist[0].number)+". "+t._s(t.playlist[0].title)+" ")])]):t._e(),t.playlist.length>1?i("div",{staticClass:"video-duration-container"},[t.current_video.number<t.playlist.length?i("div",{staticClass:"video-duration"},[t._v(" "+t._s(t.playlist[t.current_video.number].duration)+" ")]):i("div",{staticClass:"video-duration"},[t._v(" "+t._s(t.playlist[0].duration)+" ")]),i("svg",{staticClass:"ellipses svg-inline--fa fa-ellipsis-v fa-w-2",attrs:{height:"20",width:"10","aria-hidden":"true",focusable:"false","data-prefix":"fal","data-icon":"ellipsis-v",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 64 512"}},[i("path",{attrs:{fill:"currentColor",d:"M32 224c17.7 0 32 14.3 32 32s-14.3 32-32 32-32-14.3-32-32 14.3-32 32-32zM0 136c0 17.7 14.3 32 32 32s32-14.3 32-32-14.3-32-32-32-32 14.3-32 32zm0 240c0 17.7 14.3 32 32 32s32-14.3 32-32-14.3-32-32-32-32 14.3-32 32z"}})])]):t._e()]),t.playlist.length>1?i("div",{staticClass:"que-list-container",attrs:{id:"style-1"}},[i("div",{staticClass:"que-title"},[t._v("QueList")]),t._l(t.playlist,(function(e,s){return i("div",{key:s},[t.playlist.length>1?i("div",{staticClass:"video-detail"},[i("div",{staticClass:"video-title",class:{active:e.number==t.playlist[t.playlist.length-1].number}},[t._v(" "+t._s(e.number)+". "+t._s(e.title)+" ")]),i("div",{staticClass:"video-duration-container"},[i("div",{staticClass:"video-duration",class:{active:e.number==t.playlist[t.playlist.length-1].number}},[t._v(" "+t._s(e.duration)+" ")]),i("svg",{staticClass:"ellipses svg-inline--fa fa-ellipsis-v fa-w-2",attrs:{height:"20",width:"10","aria-hidden":"true",focusable:"false","data-prefix":"fal","data-icon":"ellipsis-v",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 64 512"}},[i("path",{attrs:{fill:"currentColor",d:"M32 224c17.7 0 32 14.3 32 32s-14.3 32-32 32-32-14.3-32-32 14.3-32 32-32zM0 136c0 17.7 14.3 32 32 32s32-14.3 32-32-14.3-32-32-32-32 14.3-32 32zm0 240c0 17.7 14.3 32 32 32s32-14.3 32-32-14.3-32-32-32-32 14.3-32 32z"}})])])]):t._e(),t.playlist.length>1?i("hr",{staticClass:"playlist-hr"}):t._e()])}))],2):t._e(),i("div",{staticClass:"vip-section"},[i("div",[i("div",{staticClass:"vip-top"},[t._v(" Get in the "),i("span",{staticClass:"vip-que"},[t._v("VIP QueList")])]),i("div",{staticClass:"vip-bottom"},[t._v(" Jump the line for only $1.00 ")])]),i("button",{staticClass:"priority-btn"},[t._v("Add Priority")])])]):t._e()]),t.note?i("div",{staticClass:"notification-container"},[i("svg",{staticClass:"list-svg svg-inline--fa fa-list-alt fa-w-16",attrs:{"aria-hidden":"true",focusable:"false","data-prefix":"fal","data-icon":"list-alt",height:"40",width:"40",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"}},[i("path",{attrs:{fill:"currentColor",d:"M464 64c8.823 0 16 7.178 16 16v352c0 8.822-7.177 16-16 16H48c-8.823 0-16-7.178-16-16V80c0-8.822 7.177-16 16-16h416m0-32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V80c0-26.51-21.49-48-48-48zm-336 96c-17.673 0-32 14.327-32 32s14.327 32 32 32 32-14.327 32-32-14.327-32-32-32zm0 96c-17.673 0-32 14.327-32 32s14.327 32 32 32 32-14.327 32-32-14.327-32-32-32zm0 96c-17.673 0-32 14.327-32 32s14.327 32 32 32 32-14.327 32-32-14.327-32-32-32zm288-148v-24a6 6 0 0 0-6-6H198a6 6 0 0 0-6 6v24a6 6 0 0 0 6 6h212a6 6 0 0 0 6-6zm0 96v-24a6 6 0 0 0-6-6H198a6 6 0 0 0-6 6v24a6 6 0 0 0 6 6h212a6 6 0 0 0 6-6zm0 96v-24a6 6 0 0 0-6-6H198a6 6 0 0 0-6 6v24a6 6 0 0 0 6 6h212a6 6 0 0 0 6-6z"}})]),i("div",{staticClass:"note"},[t._v(t._s(t.note))]),i("svg",{staticClass:"times-svg svg-inline--fa fa-times fa-w-10",attrs:{"aria-hidden":"true",focusable:"false","data-prefix":"fal","data-icon":"times",height:"26",width:"26",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 320 512"},on:{click:t.removeNote}},[i("path",{attrs:{fill:"currentColor",d:"M193.94 256L296.5 153.44l21.15-21.15c3.12-3.12 3.12-8.19 0-11.31l-22.63-22.63c-3.12-3.12-8.19-3.12-11.31 0L160 222.06 36.29 98.34c-3.12-3.12-8.19-3.12-11.31 0L2.34 120.97c-3.12 3.12-3.12 8.19 0 11.31L126.06 256 2.34 379.71c-3.12 3.12-3.12 8.19 0 11.31l22.63 22.63c3.12 3.12 8.19 3.12 11.31 0L160 289.94 262.56 392.5l21.15 21.15c3.12 3.12 8.19 3.12 11.31 0l22.63-22.63c3.12-3.12 3.12-8.19 0-11.31L193.94 256z"}})])]):t._e(),t.note?t._e():i("svg",{staticClass:"playlist-toggler",attrs:{width:"246px",height:"30px",viewBox:"0 0 246 30",version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"},on:{click:t.togglePlaylist}},[i("title",[t._v("Group")]),i("g",{attrs:{id:"Page-1",stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"}},[i("g",{attrs:{id:"#121436",transform:"translate(-189.000000, -407.000000)"}},[i("g",{attrs:{id:"Group",transform:"translate(189.000000, 407.000000)"}},[i("path",{attrs:{d:"M25,0 L221,0 C225.602373,9.30914651e-16 229.333333,3.73096042 229.333333,8.33333333 C229.333333,10.9563109 228.098382,13.4262135 226,15 L208.4,28.2 C206.842134,29.3683992 204.947332,30 203,30 L43,30 C41.0526681,30 39.1578655,29.3683992 37.6,28.2 L20,15 C16.3181017,12.2385763 15.5719096,7.01523167 18.3333333,3.33333333 C19.9071198,1.23495131 22.3770225,2.25818999e-15 25,0 Z",id:"Rectangle",fill:"#121436"}}),i("rect",{attrs:{id:"Rectangle","fill-opacity":"0.2",fill:"#FFFFFF",x:"72",y:"20",width:"102",height:"5",rx:"2.5"}})])])])])],1),i("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",hidden:"","xmlns:xlink":"http://www.w3.org/1999/xlink"}},[i("defs",[i("symbol",{attrs:{id:"icon-heart-o",viewBox:"0 0 32 32"}},[i("title",[t._v("icon-heart-o")]),i("path",{attrs:{d:"M22.88 1.952c-2.72 0-5.184 1.28-6.88 3.456-1.696-2.176-4.16-3.456-6.88-3.456-4.48 0-9.024 3.648-9.024 10.592 0 7.232 7.776 12.704 15.072 17.248 0.256 0.16 0.544 0.256 0.832 0.256s0.576-0.096 0.832-0.256c7.296-4.544 15.072-10.016 15.072-17.248 0-6.944-4.544-10.592-9.024-10.592zM16 26.56c-4.864-3.072-12.736-8.288-12.736-14.016 0-5.088 3.040-7.424 5.824-7.424 2.368 0 4.384 1.504 5.408 4.032 0.256 0.608 0.832 0.992 1.472 0.992s1.248-0.384 1.472-0.992c1.024-2.528 3.040-4.032 5.408-4.032 2.816 0 5.824 2.304 5.824 7.424 0.064 5.728-7.808 10.976-12.672 14.016z"}}),i("path",{attrs:{d:"M16 30.144c-0.32 0-0.64-0.096-0.896-0.256-7.296-4.576-15.104-10.048-15.104-17.344 0-7.008 4.576-10.688 9.12-10.688 2.656 0 5.152 1.216 6.88 3.392 1.728-2.144 4.224-3.392 6.88-3.392 4.544 0 9.12 3.68 9.12 10.688 0 7.296-7.808 12.768-15.104 17.344-0.256 0.16-0.576 0.256-0.896 0.256zM9.12 2.048c-4.448 0-8.928 3.616-8.928 10.496 0 7.168 7.744 12.64 15.008 17.152 0.48 0.288 1.12 0.288 1.568 0 7.264-4.544 15.008-9.984 15.008-17.152 0-6.88-4.48-10.496-8.928-10.496-2.656 0-5.088 1.216-6.816 3.392l-0.032 0.128-0.064-0.096c-1.696-2.176-4.192-3.424-6.816-3.424zM16 26.688l-0.064-0.032c-3.808-2.4-12.768-8.032-12.768-14.112 0-5.152 3.072-7.52 5.952-7.52 2.432 0 4.48 1.536 5.504 4.096 0.224 0.576 0.768 0.928 1.376 0.928s1.152-0.384 1.376-0.928c1.024-2.56 3.072-4.096 5.504-4.096 2.848 0 5.952 2.336 5.952 7.52 0 6.080-8.96 11.712-12.768 14.112l-0.064 0.032zM9.12 5.248c-2.752 0-5.728 2.304-5.728 7.328 0 5.952 8.8 11.488 12.608 13.92 3.808-2.4 12.608-7.968 12.608-13.92 0-5.024-2.976-7.328-5.728-7.328-2.336 0-4.32 1.472-5.312 3.968-0.256 0.64-0.864 1.056-1.568 1.056s-1.312-0.416-1.568-1.056c-0.992-2.496-2.976-3.968-5.312-3.968z"}}),i("path",{attrs:{d:"M6.816 20.704c0.384 0.288 0.512 0.704 0.48 1.12 0.224 0.256 0.384 0.608 0.384 0.96 0 0.032 0 0.032 0 0.064 0.16 0.128 0.32 0.256 0.48 0.384 0.128 0.064 0.256 0.16 0.384 0.256 0.096 0.064 0.192 0.16 0.256 0.224 0.8 0.576 1.632 1.12 2.496 1.664 0.416 0.128 0.8 0.256 1.056 0.32 1.984 0.576 4.064 0.8 6.112 0.928 2.688-1.92 5.312-3.904 8-5.792 0.896-1.088 1.92-2.080 2.912-3.104v-7.552c-0.096-0.128-0.192-0.288-0.32-0.416-0.768-1.024-1.184-2.176-1.6-3.296-0.768-0.416-1.536-0.8-2.336-1.12-0.128-0.064-0.256-0.096-0.384-0.16h-21.568v12.992c1.312 0.672 2.496 1.6 3.648 2.528z"}})]),i("symbol",{attrs:{id:"icon-heart",viewBox:"0 0 32 32"}},[i("title",[t._v("icon-heart")]),i("path",{attrs:{d:"M22.88 1.952c-2.72 0-5.184 1.28-6.88 3.456-1.696-2.176-4.16-3.456-6.88-3.456-4.48 0-9.024 3.648-9.024 10.592 0 7.232 7.776 12.704 15.072 17.248 0.256 0.16 0.544 0.256 0.832 0.256s0.576-0.096 0.832-0.256c7.296-4.544 15.072-10.016 15.072-17.248 0-6.944-4.544-10.592-9.024-10.592zM16 26.56c-4.864-3.072-12.736-8.288-12.736-14.016 0-5.088 3.040-7.424 5.824-7.424 2.368 0 4.384 1.504 5.408 4.032 0.256 0.608 0.832 0.992 1.472 0.992s1.248-0.384 1.472-0.992c1.024-2.528 3.040-4.032 5.408-4.032 2.816 0 5.824 2.304 5.824 7.424 0.064 5.728-7.808 10.976-12.672 14.016z"}}),i("path",{attrs:{d:"M16 30.144c-0.32 0-0.64-0.096-0.896-0.256-7.296-4.576-15.104-10.048-15.104-17.344 0-7.008 4.576-10.688 9.12-10.688 2.656 0 5.152 1.216 6.88 3.392 1.728-2.144 4.224-3.392 6.88-3.392 4.544 0 9.12 3.68 9.12 10.688 0 7.296-7.808 12.768-15.104 17.344-0.256 0.16-0.576 0.256-0.896 0.256zM9.12 2.048c-4.448 0-8.928 3.616-8.928 10.496 0 7.168 7.744 12.64 15.008 17.152 0.48 0.288 1.12 0.288 1.568 0 7.264-4.544 15.008-9.984 15.008-17.152 0-6.88-4.48-10.496-8.928-10.496-2.656 0-5.088 1.216-6.816 3.392l-0.032 0.128-0.064-0.096c-1.696-2.176-4.192-3.424-6.816-3.424zM16 26.688l-0.064-0.032c-3.808-2.4-12.768-8.032-12.768-14.112 0-5.152 3.072-7.52 5.952-7.52 2.432 0 4.48 1.536 5.504 4.096 0.224 0.576 0.768 0.928 1.376 0.928s1.152-0.384 1.376-0.928c1.024-2.56 3.072-4.096 5.504-4.096 2.848 0 5.952 2.336 5.952 7.52 0 6.080-8.96 11.712-12.768 14.112l-0.064 0.032zM9.12 5.248c-2.752 0-5.728 2.304-5.728 7.328 0 5.952 8.8 11.488 12.608 13.92 3.808-2.4 12.608-7.968 12.608-13.92 0-5.024-2.976-7.328-5.728-7.328-2.336 0-4.32 1.472-5.312 3.968-0.256 0.64-0.864 1.056-1.568 1.056s-1.312-0.416-1.568-1.056c-0.992-2.496-2.976-3.968-5.312-3.968z"}})]),i("symbol",{attrs:{id:"icon-pause",viewBox:"0 0 32 32"}},[i("title",[t._v("icon-pause")]),i("path",{attrs:{d:"M16 0.32c-8.64 0-15.68 7.040-15.68 15.68s7.040 15.68 15.68 15.68 15.68-7.040 15.68-15.68-7.040-15.68-15.68-15.68zM16 29.216c-7.296 0-13.216-5.92-13.216-13.216s5.92-13.216 13.216-13.216 13.216 5.92 13.216 13.216-5.92 13.216-13.216 13.216z"}}),i("path",{attrs:{d:"M16 32c-8.832 0-16-7.168-16-16s7.168-16 16-16 16 7.168 16 16-7.168 16-16 16zM16 0.672c-8.448 0-15.328 6.88-15.328 15.328s6.88 15.328 15.328 15.328c8.448 0 15.328-6.88 15.328-15.328s-6.88-15.328-15.328-15.328zM16 29.568c-7.488 0-13.568-6.080-13.568-13.568s6.080-13.568 13.568-13.568c7.488 0 13.568 6.080 13.568 13.568s-6.080 13.568-13.568 13.568zM16 3.104c-7.104 0-12.896 5.792-12.896 12.896s5.792 12.896 12.896 12.896c7.104 0 12.896-5.792 12.896-12.896s-5.792-12.896-12.896-12.896z"}}),i("path",{attrs:{d:"M12.16 22.336v0c-0.896 0-1.6-0.704-1.6-1.6v-9.472c0-0.896 0.704-1.6 1.6-1.6v0c0.896 0 1.6 0.704 1.6 1.6v9.504c0 0.864-0.704 1.568-1.6 1.568z"}}),i("path",{attrs:{d:"M19.84 22.336v0c-0.896 0-1.6-0.704-1.6-1.6v-9.472c0-0.896 0.704-1.6 1.6-1.6v0c0.896 0 1.6 0.704 1.6 1.6v9.504c0 0.864-0.704 1.568-1.6 1.568z"}})]),i("symbol",{attrs:{id:"icon-play",viewBox:"0 0 32 32"}},[i("title",[t._v("icon-play")]),i("path",{attrs:{d:"M21.216 15.168l-7.616-5.088c-0.672-0.416-1.504 0.032-1.504 0.832v10.176c0 0.8 0.896 1.248 1.504 0.832l7.616-5.088c0.576-0.416 0.576-1.248 0-1.664z"}}),i("path",{attrs:{d:"M13.056 22.4c-0.224 0-0.416-0.064-0.608-0.16-0.448-0.224-0.704-0.672-0.704-1.152v-10.176c0-0.48 0.256-0.928 0.672-1.152s0.928-0.224 1.344 0.064l7.616 5.088c0.384 0.256 0.608 0.672 0.608 1.088s-0.224 0.864-0.608 1.088l-7.616 5.088c-0.192 0.16-0.448 0.224-0.704 0.224zM13.056 10.272c-0.096 0-0.224 0.032-0.32 0.064-0.224 0.128-0.352 0.32-0.352 0.576v10.176c0 0.256 0.128 0.48 0.352 0.576 0.224 0.128 0.448 0.096 0.64-0.032l7.616-5.088c0.192-0.128 0.288-0.32 0.288-0.544s-0.096-0.416-0.288-0.544l-7.584-5.088c-0.096-0.064-0.224-0.096-0.352-0.096z"}}),i("path",{attrs:{d:"M16 0.32c-8.64 0-15.68 7.040-15.68 15.68s7.040 15.68 15.68 15.68 15.68-7.040 15.68-15.68-7.040-15.68-15.68-15.68zM16 29.216c-7.296 0-13.216-5.92-13.216-13.216s5.92-13.216 13.216-13.216 13.216 5.92 13.216 13.216-5.92 13.216-13.216 13.216z"}}),i("path",{attrs:{d:"M16 32c-8.832 0-16-7.168-16-16s7.168-16 16-16 16 7.168 16 16-7.168 16-16 16zM16 0.672c-8.448 0-15.328 6.88-15.328 15.328s6.88 15.328 15.328 15.328c8.448 0 15.328-6.88 15.328-15.328s-6.88-15.328-15.328-15.328zM16 29.568c-7.488 0-13.568-6.080-13.568-13.568s6.080-13.568 13.568-13.568c7.488 0 13.568 6.080 13.568 13.568s-6.080 13.568-13.568 13.568zM16 3.104c-7.104 0-12.896 5.792-12.896 12.896s5.792 12.896 12.896 12.896c7.104 0 12.896-5.792 12.896-12.896s-5.792-12.896-12.896-12.896z"}})]),i("symbol",{attrs:{id:"icon-next",viewBox:"0 0 32 32"}},[i("title",[t._v("next")]),i("path",{attrs:{d:"M2.304 18.304h14.688l-4.608 4.576c-0.864 0.864-0.864 2.336 0 3.232 0.864 0.864 2.336 0.864 3.232 0l8.448-8.48c0.864-0.864 0.864-2.336 0-3.232l-8.448-8.448c-0.448-0.448-1.056-0.672-1.632-0.672s-1.184 0.224-1.632 0.672c-0.864 0.864-0.864 2.336 0 3.232l4.64 4.576h-14.688c-1.248 0-2.304 0.992-2.304 2.272s1.024 2.272 2.304 2.272z"}}),i("path",{attrs:{d:"M29.696 26.752c1.248 0 2.304-1.024 2.304-2.304v-16.928c0-1.248-1.024-2.304-2.304-2.304s-2.304 1.024-2.304 2.304v16.928c0.064 1.28 1.056 2.304 2.304 2.304z"}})]),i("symbol",{attrs:{id:"icon-prev",viewBox:"0 0 32 32"}},[i("title",[t._v("prev")]),i("path",{attrs:{d:"M29.696 13.696h-14.688l4.576-4.576c0.864-0.864 0.864-2.336 0-3.232-0.864-0.864-2.336-0.864-3.232 0l-8.448 8.48c-0.864 0.864-0.864 2.336 0 3.232l8.448 8.448c0.448 0.448 1.056 0.672 1.632 0.672s1.184-0.224 1.632-0.672c0.864-0.864 0.864-2.336 0-3.232l-4.608-4.576h14.688c1.248 0 2.304-1.024 2.304-2.304s-1.024-2.24-2.304-2.24z"}}),i("path",{attrs:{d:"M2.304 5.248c-1.248 0-2.304 1.024-2.304 2.304v16.928c0 1.248 1.024 2.304 2.304 2.304s2.304-1.024 2.304-2.304v-16.928c-0.064-1.28-1.056-2.304-2.304-2.304z"}})])])])])},r=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"vip"},[t._v(" Add my video to the "),s("span",{staticClass:"vip-list"},[t._v(" VIP QueList ")]),t._v(" for $1.00 "),s("input",{attrs:{type:"checkbox",id:"checkbox",checked:""}})])}],c=(s("99af"),s("c740"),s("c975"),s("13d5"),s("ac1f"),s("1276"),s("1157")),o=s.n(c),d=s("c1df"),u=s("4623");u(d);var v,f=s("9546"),h=null,p={name:"Player",data:function(){return{api_key:"AIzaSyDPJij3UftO9ExSYMsqvVwMn4uc1O25_4Y",circleLeft:null,barWidth:null,currentTime:null,isTimerPlaying:!1,videotime:0,playing:!1,show_playlist:!1,current_video:{number:0,video_id:"",title:"Title",duration:"00:00",favorite:!1},url:"",playlist:[],note:""}},mounted:function(){v=new f("#youtube-player",{width:350,height:200,controls:!1,annotations:!1,related:!1,info:!1,modestBranding:!1,events:{onReady:this.onPlayerReady()}})},methods:{getVideoId:function(t){var e=t.split("v=")[1],s=e.indexOf("&");return-1!=s&&(e=e.substring(0,s)),e},addInPlaylist:function(){var t=this;if(""!==this.url){var e={},s=this.getVideoId(this.url);o.a.getJSON("https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails&id=".concat(s,"&key=").concat(this.api_key),(function(i){e.video_id=s,e.title=i.items[0].snippet.title,e.duration=d.duration(i.items[0].contentDetails.duration).format("hh:mm:ss"),e.number=t.playlist.length+1,e.favorite=!1,0==t.playlist.length?(t.current_video.favorite=!1,t.current_video.number=e.number,t.current_video.video_id=s,t.current_video.title=i.items[0].snippet.title,t.current_video.duration=d.duration(i.items[0].contentDetails.duration).format("hh:mm:ss"),t.playlist.push(e),t.loadVideo(),t.playing=!0):(t.playlist.push(e),t.note="You are ".concat(e.number," in the list"),setTimeout((function(){t.note=""}),2e3)),t.url=""}))}else this.note="Please enter a valid link!",setTimeout((function(){t.note=""}),2e3)},loadVideo:function(){var t=this;v.load(this.current_video.video_id,!0),v.setVolume(100),v.on("playing",(function(){t.isTimerPlaying=!0})),v.on("paused",(function(){t.isTimerPlaying=!1})),v.on("ended",(function(){t.nextTrack()}))},play:function(){var t=this;0==this.playlist.length?(this.note="Playlist is empty!",setTimeout((function(){t.note=""}),2e3)):0==this.isTimerPlaying?(v.play(),this.isTimerPlaying=!0):(v.pause(),this.isTimerPlaying=!1)},removeNote:function(){this.note=""},togglePlaylist:function(){this.show_playlist=!this.show_playlist},generateTime:function(t){var e=this.getTimeinSeconds(this.current_video.duration),s=100/e*t;this.barWidth=s+"%",this.circleLeft=s+"%";var i=Math.floor(t/60),a=Math.floor(t-60*i);i<10&&(i="0"+i),a<10&&(a="0"+a),this.currentTime=i+":"+a},updateBar:function(t){var e=this.$refs.progress,s=this.getTimeinSeconds(this.current_video.duration),i=t-e.offsetLeft,a=100*i/e.offsetWidth;a>100&&(a=100),a<0&&(a=0),this.barWidth=a+"%",this.circleLeft=a+"%";var l=s*a/100;v.seek(l)},clickProgress:function(t){this.updateBar(t.pageX)},prevTrack:function(){var t=this;if(0===this.playlist.length)this.note="Playlist is empty!",setTimeout((function(){t.note=""}),2e3);else{var e=this.playlist.findIndex((function(e){return e.number===t.current_video.number}));0==e?(this.current_video=this.playlist[this.playlist.length-1],this.loadVideo()):(this.current_video=this.playlist[e-1],this.loadVideo())}},nextTrack:function(){var t=this;if(0===this.playlist.length)this.note="Playlist is empty!",setTimeout((function(){t.note=""}),2e3);else{var e=this.playlist.findIndex((function(e){return e.number===t.current_video.number}));e==this.playlist.length-1?(this.current_video=this.playlist[0],this.loadVideo()):(this.current_video=this.playlist[e+1],this.loadVideo())}},favorite:function(){var t=this;0===this.playlist.length?(this.note="Playlist is empty!",setTimeout((function(){t.note=""}),2e3)):this.playlist[this.current_video.number-1].favorite=!this.playlist[this.current_video.number-1].favorite},onPlayerReady:function(){var t=this;function e(){var e=t.videotime;v&&v.getCurrentTime&&(t.videotime=v.getCurrentTime()),t.videotime!==e&&t.generateTime(t.videotime)}h=setInterval(e,100),console.log(h,"updater")},getTimeinSeconds:function(t){return t.split(":").reverse().reduce((function(t,e,s){return t+e*Math.pow(60,s)}),0)}}},m=p,b=s("2877"),y=Object(b["a"])(m,n,r,!1,null,null,null),g=y.exports,j={name:"App",components:{Player:g}},_=j,w=Object(b["a"])(_,a,l,!1,null,null,null),z=w.exports;s("5aea");i["a"].config.productionTip=!1,new i["a"]({render:function(t){return t(z)}}).$mount("#app")},"5aea":function(t,e,s){},b2f3:function(t,e,s){t.exports=s.p+"img/cover.e1480c60.jpg"}});
//# sourceMappingURL=app.a93be6db.js.map