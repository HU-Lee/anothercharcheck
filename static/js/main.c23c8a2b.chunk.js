(this.webpackJsonpanothercharcheck=this.webpackJsonpanothercharcheck||[]).push([[0],{120:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(24),i=n.n(c),l=(n(99),n(123)),s=n(124),o=n(27),d=n(130),m=n(56),j=n(39),u=n(25),h="SET_CHARACTER",p="DELETE_CHARACTER",b="TOGGLE_LINKED",f=function(e){return{type:h,array:e}},O=n(22),x=n(2);var y=function(e){var t=e.character,n=Object(u.b)(),c=JSON.parse(window.localStorage.getItem("characterinfo"))?JSON.parse(window.localStorage.getItem("characterinfo")):[],i=c.find((function(e){return e.id===t.id}))?c.find((function(e){return e.id===t.id})):{normal:0,another:!1,extra:!1},l=Object(a.useState)(O.only5Char.indexOf(t.name)>=0?0:i.normal),s=Object(j.a)(l,2),o=s[0],h=s[1],p=Object(a.useState)(O.only5Char.indexOf(t.name)>=0?i.normal:0),b=Object(j.a)(p,2),y=b[0],w=b[1],g=Object(a.useState)(i.another),S=Object(j.a)(g,2),v=S[0],k=S[1],N=Object(a.useState)(i.extra),C=Object(j.a)(N,2),_=C[0],A=C[1];return Object(a.useEffect)((function(){!function(){var e,a=JSON.parse(window.localStorage.getItem("characterinfo"))?JSON.parse(window.localStorage.getItem("characterinfo")):[],r={id:t.id,normal:y+o,another:v,extra:_};e=0!==r.normal||r.another||r.extra?[].concat(Object(m.a)(a.filter((function(e){return e.id!==r.id}))),[r]):a.filter((function(e){return e.id!==r.id})),window.localStorage.setItem("characterinfo",JSON.stringify(e)),n(f(e))}()}),[o,y,_,v]),O.only5Char.indexOf(t.name)>=0?Object(x.jsx)(d.a,{title:t.name,children:Object(x.jsx)("img",{onClick:function(){w((y+1)%2)},className:0===y?"gray":null,src:"images/character_base/".concat(t.id,"_1.png"),style:{width:70}})}):t.style<3?Object(x.jsxs)(r.a.Fragment,{children:[Object(x.jsx)(d.a,{title:"".concat(t.name).concat(2===o&&t.nonormal?"(AS)":""),children:Object(x.jsxs)("div",{onClick:function(){h((o+1)%3)},style:{position:"relative",width:70,display:"inline-block"},children:[Object(x.jsx)("div",{className:"rank4",children:1===o?"4":null}),Object(x.jsx)("img",{className:0===o?"gray":null,src:"images/character_base/".concat(t.id,"_").concat(2===o?1:0,".png"),style:{width:70}})]})}),t.style>1?Object(x.jsx)(d.a,{title:"".concat(t.name,"(AS)"),children:Object(x.jsx)("img",{className:v?null:"gray",onClick:function(){k(!v)},src:"images/character_base/".concat(t.id,"_2.png"),style:{width:70}})}):null]}):Object(x.jsx)(d.a,{title:"".concat(t.name,"(ES)"),children:Object(x.jsx)("img",{className:_?null:"gray",onClick:function(){A(!_)},src:"images/character_base/".concat(t.id,"_3.png"),style:{width:70}})})},w=["\ubd88","\ubb3c","\ubc14\ub78c","\ub545"],g=["\uc74c","\ub1cc","\uc815"];var S=function(e){var t=e.data,n=e.weapon,a=t.filter((function(e){return e.weapon===n&&!e.free}));return Object(x.jsxs)("tr",{children:[Object(x.jsx)("th",{className:"align-middle",children:Object(x.jsx)(d.a,{title:n,children:Object(x.jsx)("img",{style:{width:"100%"},src:"images/weapons/".concat(n,".png")})})}),w.map((function(e,t){return Object(x.jsx)("th",{className:"align-middle",children:a.filter((function(t){return t.element===e})).map((function(e,t){return Object(x.jsx)(y,{character:e},t)}))},t)})),Object(x.jsx)("th",{className:"align-middle",children:g.map((function(e){return a.filter((function(t){return t.element===e})).map((function(e,t){return Object(x.jsx)(y,{character:e},t)}))}))})]})},v=n(16),k=["\uc9c0\ud321\uc774","\uac80","\ub3c4","\ub3c4\ub07c","\ucc3d","\ud65c","\uad8c\uac11","\ub9dd\uce58"],N=["\ubd88","\ubb3c","\ubc14\ub78c","\ub545"],C=["\uc74c","\ub1cc","\uc815"];var _=Object(v.e)((function(e){var t=o.filter((function(e){return e.free})),n=Object(u.c)((function(e){return e.linked}));return Object(a.useEffect)((function(){n&&e.history.push("/result")}),[]),Object(x.jsx)(l.a,{fluid:!0,style:{textAlign:"center",margin:"0 auto"},children:Object(x.jsx)("div",{children:Object(x.jsxs)(s.a,{className:"checker",responsive:!0,striped:!0,bordered:!0,style:{width:1280,margin:"0 auto"},children:[Object(x.jsx)("thead",{children:Object(x.jsxs)("tr",{children:[Object(x.jsx)("th",{style:{width:70}}),N.map((function(e,t){return Object(x.jsx)("th",{style:{width:240},children:Object(x.jsx)("img",{style:{width:"20%"},src:"images/elements/".concat(e,".png")})},t)})),Object(x.jsx)("th",{style:{width:240},children:C.map((function(e,t){return Object(x.jsx)("img",{style:{width:"20%"},src:"images/elements/".concat(e,".png")},t)}))})]})}),Object(x.jsxs)("tbody",{children:[k.map((function(e,t){return Object(x.jsx)(S,{data:o,weapon:e},t)})),Object(x.jsxs)("tr",{children:[Object(x.jsx)("td",{className:"align-middle",children:Object(x.jsx)("b",{children:"\ubc30\ud3ec"})}),Object(x.jsx)("td",{className:"align-middle",colSpan:5,children:t.map((function(e,t){return Object(x.jsx)(y,{character:e},t)}))})]})]})]})})})})),A=n(48),E=n(131),J=n(132),I=n(91),B=n(85),L=n.n(B),T=n(86),R=n.n(T);var F=function(e){var t=e.realLink;return Object(x.jsx)(J.a,{xs:12,md:4,children:Object(x.jsx)("div",{className:"buttonbar",children:Object(x.jsx)(I.a,{type:"primary",onClick:function(){var e=navigator.userAgent.toLowerCase();e.indexOf("iphone")>-1||e.indexOf("ipad")>-1||e.indexOf("ipod")>-1?R()(document.querySelector(".checker"),{onrendered:function(e){var n=document.createElement("a");n.href=e.toDataURL("image/jpeg").replace("image/jpeg","image/octet-stream"),n.download="character".concat(t?"_result":"_table",".png"),n.click()}}):L.a.toJpeg(document.querySelector(".checker"),{quality:1}).then((function(e){var n=document.createElement("a");n.download="character".concat(t?"_result":"_table",".png"),n.href=e,n.click()}))},style:{margin:"1rem"},children:"Download"})})})},D=n(88),z=n(126),P=n(127),W=n(129),q=z.a.TabPane,H=P.a.TextArea;var G=function(){var e=Object(u.b)(),t=Object(a.useState)(""),n=Object(j.a)(t,2),r=n[0],c=n[1],i=Object(u.c)((function(e){return e.info}));return JSON.parse(window.localStorage.getItem("characterinfo"))&&(i=JSON.parse(window.localStorage.getItem("characterinfo"))),Object(x.jsx)(E.a,{justify:"center",children:Object(x.jsx)(J.a,{span:20,style:{marginBottom:"30px"},children:Object(x.jsxs)(z.a,{type:"card",children:[Object(x.jsxs)(q,{tab:"\ub370\uc774\ud130 \ubcf5\uc0ac",children:[Object(x.jsx)(W.a,{style:{width:"70%",height:"40px",marginRight:"20px"},placeholder:JSON.stringify(i),readOnly:!0}),Object(x.jsx)(D.CopyToClipboard,{text:JSON.stringify(i),onCopy:function(){return alert("\uccb4\ud06c\ud45c \ub370\uc774\ud130\uac00 \ubcf5\uc0ac\ub418\uc5c8\uc2b5\ub2c8\ub2e4.")},children:Object(x.jsx)(I.a,{style:{height:"40px"},children:"Copy"})})]},"1"),Object(x.jsxs)(q,{tab:"\ub370\uc774\ud130 \ub85c\ub4dc",children:[Object(x.jsx)(H,{style:{width:"70%",height:"40px",marginRight:"20px"},value:r,onChange:function(e){c(e.target.value)},placeholder:"\uac00\uc9c0\uace0 \uc788\ub294 \ub370\uc774\ud130\ub97c \uc785\ub825\ud558\uc138\uc694"}),Object(x.jsx)(I.a,{style:{height:"40px"},onClick:function(){try{var t="object"===typeof JSON.parse(r);console.log(t),t&&(window.localStorage.setItem("characterinfo",r),e(f(r)),alert("\ub370\uc774\ud130 \ub85c\ub4dc\uc5d0 \uc131\uacf5\ud558\uc600\uc2b5\ub2c8\ub2e4."),window.location.reload())}catch(n){return void alert("\ub370\uc774\ud130 \ub85c\ub4dc\uc5d0 \uc2e4\ud328\ud558\uc600\uc2b5\ub2c8\ub2e4. \ub2e4\uc2dc \ud55c \ubc88 \ud655\uc778\ud574 \uc8fc\uc138\uc694. "+n)}},children:"Load"})]},"2")]})})})};var K=function(){var e=Object(u.b)(),t=Object(u.c)((function(e){return e.linked})),n=Object(a.useState)(t),r=Object(j.a)(n,2),c=r[0],i=r[1];return Object(x.jsxs)(l.a,{fluid:!0,style:{maxWidth:"1200px",textAlign:"center",margin:"1rem auto"},children:[Object(x.jsxs)(E.a,{justify:"center",align:"middle",style:{marginBottom:"20px"},children:[Object(x.jsx)(F,{realLink:c}),Object(x.jsx)(J.a,{xs:12,md:4,children:Object(x.jsx)(A.b,{style:{textDecoration:"none"},to:"/".concat(c?"":"result"),children:Object(x.jsx)("div",{onClick:function(){var n=!t;e({type:b,linked:n}),window.localStorage.setItem("linked",n),i(n)},style:{backgroundColor:"gray",color:"white",fontWeight:600,height:"35px",lineHeight:"35px",borderRadius:"5px"},children:c?"\uccb4\ud06c\ud45c":"\uacb0\uacfc"})})}),Object(x.jsx)(J.a,{xs:24,md:16,children:Object(x.jsxs)("b",{style:{fontSize:"0.8rem"},children:["5\uc131 \uce90\ub9ad\ud130\ub9cc \uc815\ubcf4\uac00 \uc81c\uacf5\ub429\ub2c8\ub2e4.",Object(x.jsx)("br",{}),"\ub8e8\ub098\ud2f1 \uce90\ub9ad\ud130\ub97c \uc81c\uc678\ud558\uace0, \ubcf4\ub4dc\uc758 \uc18d\uc131\uc744 \uae30\uc900\uc73c\ub85c \ubd84\ub958\ud569\ub2c8\ub2e4.",Object(x.jsx)("br",{}),"ex) \ub9c8\ub9ac\uc5d8-\ubc14\ub78c, \uc5d8\uac00-\ub545, \uc2e0\uc2dc\uc544-\ubc14\ub78c ",Object(x.jsx)("br",{}),Object(x.jsx)("br",{}),"iOS \uc77c\ubd80 \uae30\uae30\uc5d0\uc11c \ub2e4\uc6b4\ub85c\ub4dc \ubc84\ud2bc\uc774 \ub3d9\uc791\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4."]})})]}),Object(x.jsx)(G,{})]})},U=n(128),M=n(125);var Q=function(e){var t=e.character,n=e.lower;return Object(x.jsx)(d.a,{title:"".concat(t.name).concat("3"===n?"(ES)":""),children:Object(x.jsx)("img",{src:"images/character_base/".concat(t.id,"_").concat(n||"1",".png"),style:{width:70},className:O.japOnly.includes(t.name)||"3"===n&&O.notES.includes(t.name)?"half":null})})};var V=function(e){var t=e.character,n=e.refer;return O.only5Char.indexOf(t.name)>=0?Object(x.jsx)(d.a,{title:t.name,children:Object(x.jsx)("img",{src:"images/character_base/".concat(t.id,"_1.png"),style:{width:70}})}):t.style<3?Object(x.jsxs)(r.a.Fragment,{children:[2===n.normal?Object(x.jsx)(d.a,{title:"".concat(t.name).concat(t.nonormal?"(AS)":""),children:Object(x.jsx)("img",{src:"images/character_base/".concat(t.id,"_1.png"),style:{width:70}})}):null,n.another?Object(x.jsx)(d.a,{title:"".concat(t.name,"(AS)"),children:Object(x.jsx)("img",{src:"images/character_base/".concat(t.id,"_2.png"),style:{width:70}})}):null]}):Object(x.jsx)(r.a.Fragment,{children:n.extra&&Object(x.jsx)(d.a,{title:"".concat(t.name,"(ES)"),children:Object(x.jsx)("img",{src:"images/character_base/".concat(t.id,"_3.png"),style:{width:70}})})})};var X=function(e){var t=e.character;return Object(x.jsx)(d.a,{title:"".concat(t.name,"(AS)"),children:Object(x.jsx)("img",{src:"images/character_base/".concat(t.id,"_").concat(t.nonormal?"1":"2",".png"),style:{width:70},className:O.notAS.includes(t.name)?"half":null})})};var Y=function(){return Object(x.jsxs)("div",{children:[Object(x.jsxs)(E.a,{children:[Object(x.jsx)(J.a,{span:24,children:Object(x.jsx)(M.a,{style:{fontSize:"1.1rem"},children:Object(x.jsx)("b",{children:"\uc77c\ubcf8\ud310\uc5d0\ub9cc \uc788\ub294 \uce90\ub9ad\ud130(\uc6d0\ud310)"})})}),Object(x.jsx)(J.a,{span:24,children:0!==O.japOnly.length?o.filter((function(e){return O.japOnly.includes(e.name)&&e.id<300})).map((function(e,t){return Object(x.jsx)(Q,{character:e},t)})):"\uc5c6\uc74c"})]}),Object(x.jsxs)(E.a,{children:[Object(x.jsx)(J.a,{span:24,children:Object(x.jsx)(M.a,{style:{fontSize:"1.1rem"},children:Object(x.jsx)("b",{children:"\uae00\ub85c\ubc8c\ud310\uc5d0\ub9cc \uc788\ub294 \uce90\ub9ad\ud130(\uc6d0\ud310)"})})}),Object(x.jsx)(J.a,{span:24,style:{marginBottom:"30px"},children:0!==O.korOnly.length?o.filter((function(e){return O.korOnly.includes(e.name)&&e.id<300})).map((function(e,t){return Object(x.jsx)(Q,{character:e},t)})):"\uc5c6\uc74c"})]})]})},Z=U.a.Panel,$=["\ubd88","\ubb3c","\ubc14\ub78c","\ub545"],ee=["\uc74c","\ub1cc","\uc815"];var te=Object(v.e)((function(e){var t=JSON.parse(window.localStorage.getItem("characterinfo"))?JSON.parse(window.localStorage.getItem("characterinfo")):[],n=Object(u.c)((function(e){return e.linked}));Object(a.useEffect)((function(){n||e.history.push("/")}),[]);var r=function(e){return t.map((function(e){return o.find((function(t){return t.id===e.id}))})).filter((function(t){return t.element===e})).map((function(e,n){return Object(x.jsx)(V,{character:e,refer:t.find((function(t){return t.id===e.id}))},n)}))};return Object(x.jsxs)("div",{style:{maxWidth:"1000px",textAlign:"center",margin:"0 auto"},children:[Object(x.jsx)(M.a,{style:{fontSize:"1.1rem"},children:Object(x.jsx)("b",{children:"\uc81c\ubaa9\uc744 \ub20c\ub7ec \ud56d\ubaa9\uc744 \ud3bc\uce58\uace0 \uc811\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4."})}),Object(x.jsx)("div",{className:"checker",children:Object(x.jsxs)(U.a,{defaultActiveKey:["1","2","3","4"],style:{fontSize:"1rem",fontWeight:600},children:[Object(x.jsx)(Z,{header:"\uba85\ud568\ub3c4 \uc5c6\ub294 \uce90\ub9ad\ud130",children:Object(x.jsx)(E.a,{justify:"center",style:{marginBottom:"30px"},children:Object(x.jsx)(J.a,{span:24,children:function(){var e=t.map((function(e){return e.id%300}));return o.filter((function(t){return!e.includes(t.id%300)&&t.id<300&&!t.free})).map((function(e,t){return Object(x.jsx)(Q,{character:e},t)}))}()})})},"1"),Object(x.jsx)(Z,{header:"4.5\uc131\ub9cc \uc788\ub294 \uce90\ub9ad\ud130(\ubc30\ud3ec \uc81c\uc678)",children:Object(x.jsx)(E.a,{justify:"center",style:{marginBottom:"30px"},children:Object(x.jsx)(J.a,{span:24,children:t.filter((function(e){return 1===e.normal&&!e.another&&!e.extra})).map((function(e){return o.find((function(t){return t.id===e.id}))})).filter((function(e){return!e.free})).map((function(e,t){return Object(x.jsx)(Q,{character:e,lower:"0"},t)}))})})},"2"),Object(x.jsxs)(Z,{header:"\ud074\ub798\uc2a4 \uccb4\uc778\uc9c0(\uac1c\ubc29) \uac00\ub2a5 \uce90\ub9ad\ud130",children:["(\ud14c\uc77c\uc988 \uce90\ub9ad\ud130\ub294 \uc81c\uc678\ub41c \uacb0\uacfc\uc785\ub2c8\ub2e4.)",Object(x.jsxs)(E.a,{align:"middle",children:[Object(x.jsx)(J.a,{span:4,children:Object(x.jsx)("h4",{children:Object(x.jsx)("b",{children:"NS"})})}),Object(x.jsx)(J.a,{span:20,style:{textAlign:"left",marginBottom:"5px"},children:function(){var e=t.filter((function(e){return 2!==e.normal&&(!t.find((function(t){return t.id===e.id%300}))||2!==t.find((function(t){return t.id===e.id%300})).normal)}));return Object(m.a)(new Set(e.map((function(e){return o.find((function(t){return t.id===e.id%300}))})))).filter((function(e){return!O.only5Char.includes(e.name)&&e.style<=2&&!e.nonormal})).map((function(e,t){return Object(x.jsx)(Q,{character:e},t)}))}()}),Object(x.jsx)(J.a,{span:4,children:Object(x.jsx)("h4",{children:Object(x.jsx)("b",{children:"AS"})})}),Object(x.jsx)(J.a,{span:20,style:{textAlign:"left",marginBottom:"5px"},children:function(){var e=t.filter((function(e){return!e.another&&(!t.find((function(t){return t.id===e.id%300}))||!t.find((function(t){return t.id===e.id%300})).another)}));return Object(m.a)(new Set(e.map((function(e){return o.find((function(t){return t.id===e.id%300}))})))).filter((function(e){return 2===e.style||1===e.style&&e.nonormal&&2!==t.find((function(t){return t.id===e.id})).normal})).map((function(e,t){return Object(x.jsx)(X,{character:e},t)}))}()}),Object(x.jsx)(J.a,{span:4,children:Object(x.jsx)("h4",{children:Object(x.jsx)("b",{children:"ES"})})}),Object(x.jsx)(J.a,{span:20,style:{textAlign:"left",marginBottom:"5px"},children:function(){var e=t.map((function(e){return e.id}));return o.filter((function(t){return t.id>300&&!e.includes(t.id)&&e.includes(t.id%300)})).map((function(e,t){return Object(x.jsx)(Q,{character:e,lower:"3"},t)}))}()})]})]},"3"),Object(x.jsxs)(Z,{header:"\ubcf4\uc720 5\uc131 \uce90\ub9ad\ud130",children:[$.map((function(e,t){return Object(x.jsxs)(E.a,{align:"middle",style:{marginBottom:"5px"},children:[Object(x.jsx)(J.a,{span:4,children:Object(x.jsx)("img",{style:{width:"40px"},src:"images/elements/".concat(e,".png")})}),Object(x.jsx)(J.a,{span:20,style:{textAlign:"left"},children:r(e)})]},t)})),Object(x.jsxs)(E.a,{align:"middle",children:[Object(x.jsx)(J.a,{span:4,children:Object(x.jsx)("h4",{children:Object(x.jsx)("b",{children:"\uae30\ud0c0"})})}),Object(x.jsx)(J.a,{span:20,style:{textAlign:"left",marginBottom:"15px"},children:ee.map((function(e){return r(e)}))})]})]},"4")]})}),Object(x.jsx)(Y,{})]})}));var ne=function(){return Object(x.jsxs)(A.a,{basename:"/anothercharcheck",children:[Object(x.jsx)(K,{}),Object(x.jsx)(v.a,{exact:!0,path:"/",component:_}),Object(x.jsx)(v.a,{exact:!0,path:"/result",component:te})]})},ae=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,133)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),a(e),r(e),c(e),i(e)}))},re=(n(118),n(119),n(59)),ce=n(46),ie={linked:"true"===window.localStorage.getItem("linked")||!1,info:[]},le=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ie,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case b:return Object(ce.a)(Object(ce.a)({},e),{},{linked:t.linked});case h:return Object(ce.a)(Object(ce.a)({},e),{},{info:t.array});case p:return Object(ce.a)(Object(ce.a)({},e),{},{info:e.info.filter((function(e){return e.id!==t.id}))});default:return e}},se=Object(re.b)(le);i.a.render(Object(x.jsx)(u.a,{store:se,children:Object(x.jsx)(ne,{})}),document.getElementById("root")),ae()},22:function(e){e.exports=JSON.parse('{"only5Char":["\ub808\ube44\uc544","\ubc14\uc774\uc62c\ub81b","\uc2a4\uceec","\ubaa8\ub974\uac00\ub098","\ub9c8\ub098","\uc54c\ud14c\ub098","\uc9da\ub3cc\uc774","\ud074\ub808\uc2a4","\uc720\ub9ac","\ubca8\ubcb3","\ubbf8\ub77c"],"japOnly":["\ubbf8\ub974\uc0e4","\uc774\uc6e8\ub77c"],"korOnly":[],"notAS":["\ud638\uc624\uc988\ud0a4","\uc774\ub8e8\ub8e8","\uc720\uc778","\ud788\uc2a4\uba54\ub098","\ub77c\ub514\uce74","\ubbf8\uc720","\ub4c0\ub098\ub9ac\uc2a4","\uc2dc\uad6c\ub808","\ud2f0\ub77c\ubbf8\uc218"],"notES":["\uba54\ub9ac\ub098"]}')},27:function(e){e.exports=JSON.parse('[{"id":1,"style":1,"name":"\uae38\ub4dc\ub108","element":"\ubd88","weapon":"\uac80","free":true},{"id":2,"style":2,"name":"\uba54\ub9ac\ub098","element":"\ubb3c","weapon":"\ub9dd\uce58"},{"id":302,"style":3,"name":"\uba54\ub9ac\ub098","element":"\ub1cc","weapon":"\uad8c\uac11"},{"id":3,"style":1,"name":"\uc544\uce74\ub124","element":"\ubd88","weapon":"\ub3c4","nonormal":true},{"id":4,"style":2,"name":"\ubca0\uc774\ub098","element":"\ubc14\ub78c","weapon":"\uc9c0\ud321\uc774"},{"id":5,"style":2,"name":"\ub9c8\ub9ac\uc5d8","element":"\ubc14\ub78c","weapon":"\uc9c0\ud321\uc774"},{"id":6,"style":2,"name":"\ub4c0\ub098\ub9ac\uc2a4","element":"\ubc14\ub78c","weapon":"\uc9c0\ud321\uc774"},{"id":7,"style":2,"name":"\ub9c8\uc774\ud2f0","element":"\ubb3c","weapon":"\uc9c0\ud321\uc774"},{"id":8,"style":2,"name":"\ud22c\ubc14","element":"\ub545","weapon":"\uc9c0\ud321\uc774"},{"id":9,"style":1,"name":"\ube44\ubca0\ud2b8","element":"\ubd88","weapon":"\uc9c0\ud321\uc774"},{"id":10,"style":2,"name":"\uac00\ub9ac\uc720","element":"\ubd88","weapon":"\uc9c0\ud321\uc774","free":true},{"id":11,"style":2,"name":"\uc720\ub098","element":"\ubb3c","weapon":"\uc9c0\ud321\uc774"},{"id":12,"style":2,"name":"\ub77c\ub514\uce74","element":"\ubd88","weapon":"\uc9c0\ud321\uc774"},{"id":13,"style":2,"name":"\ubbac\ub8e8\uc2a4","element":"\ub545","weapon":"\uc9c0\ud321\uc774"},{"id":14,"style":1,"name":"\uc0ac\ud0a4","element":"\ubb3c","weapon":"\uc9c0\ud321\uc774","nonormal":true,"free":true},{"id":15,"style":2,"name":"\ub85c\uc81c\ud0c0","element":"\ubd88","weapon":"\uc9c0\ud321\uc774"},{"id":16,"style":1,"name":"\ud074\ub77c\ub974\ud14c","element":"\uc815","weapon":"\uc9c0\ud321\uc774","free":true},{"id":17,"style":2,"name":"\uc544\ub098\ubca8","element":"\ubb3c","weapon":"\uac80"},{"id":18,"style":1,"name":"\ub8e8\uc774\ub098","element":"\ubc14\ub78c","weapon":"\uac80","nonormal":true},{"id":19,"style":1,"name":"\ub808\ube44\uc544","element":"\ubb3c","weapon":"\uc9c0\ud321\uc774","free":true},{"id":20,"style":2,"name":"\ubbf8\uc720","element":"\ubd88","weapon":"\uac80"},{"id":21,"style":1,"name":"\ub514\uc544\ub4dc\ub77c","element":"\ub545","weapon":"\uac80","free":true},{"id":22,"style":2,"name":"\uc170\uc774\ub124","element":"\ubb3c","weapon":"\uac80"},{"id":23,"style":2,"name":"\uc100\ub10c","element":"\ubc14\ub78c","weapon":"\uac80"},{"id":24,"style":1,"name":"\uc2e0\uc2dc\uc544","element":"\ubc14\ub78c","weapon":"\uac80"},{"id":25,"style":1,"name":"\ub77c\ub514\uc544\uc2a4","element":"\ubd88","weapon":"\uac80"},{"id":26,"style":1,"name":"\ud2f8\ub9b4","element":"\uc74c","weapon":"\uac80"},{"id":27,"style":1,"name":"\uc544\uc790\ubbf8","element":"\ubc14\ub78c","weapon":"\ub3c4","free":true},{"id":28,"style":1,"name":"\ub2c8\ucf00","element":"\ubb3c","weapon":"\ub3c4","nonormal":true},{"id":29,"style":2,"name":"\uc2dc\uc628","element":"\ubd88","weapon":"\ub3c4"},{"id":30,"style":2,"name":"\uc774\uc2a4\uce74","element":"\ubc14\ub78c","weapon":"\ub3c4"},{"id":31,"style":2,"name":"\uce20\ud0a4\ud558","element":"\ubd88","weapon":"\ub3c4"},{"id":32,"style":2,"name":"\uc5d8\uac00","element":"\ub545","weapon":"\ub3c4"},{"id":33,"style":2,"name":"\uc2dc\uad6c\ub808","element":"\ubb3c","weapon":"\ub3c4"},{"id":34,"style":1,"name":"\ube45\ud2b8","element":"\ub1cc","weapon":"\ub3c4"},{"id":35,"style":1,"name":"\ud788\uc774\ub098","element":"\ubc14\ub78c","weapon":"\ub3c4"},{"id":36,"style":1,"name":"\uba5c\ub9ac\uc0ac","element":"\uc815","weapon":"\ub3c4"},{"id":37,"style":2,"name":"\ub098\uae30","element":"\ub545","weapon":"\ub3c4\ub07c"},{"id":38,"style":2,"name":"\ub80c\ub9ac","element":"\ubd88","weapon":"\ub3c4\ub07c"},{"id":39,"style":2,"name":"\uc774\ub8e8\ub8e8","element":"\ubc14\ub78c","weapon":"\ub3c4\ub07c"},{"id":40,"style":1,"name":"\ud544\ub85c","element":"\ubb3c","weapon":"\ub3c4\ub07c"},{"id":41,"style":1,"name":"\ud0a4\ucfc4","element":"\ubc14\ub78c","weapon":"\ub3c4\ub07c"},{"id":42,"style":1,"name":"\uc81c\ube4c\ub85c","element":"\ubb3c","weapon":"\ub3c4\ub07c"},{"id":43,"style":1,"name":"\uc18c\ud53c\uc544","element":"\ubb3c","weapon":"\ub3c4\ub07c","free":true},{"id":44,"style":2,"name":"\uc218\uc81c\ud2b8","element":"\ubc14\ub78c","weapon":"\ucc3d"},{"id":45,"style":1,"name":"\ud3ec\ub780","element":"\ubb3c","weapon":"\ucc3d","nonormal":true},{"id":46,"style":2,"name":"\uc138\ud2f0","element":"\ubd88","weapon":"\ucc3d"},{"id":47,"style":2,"name":"\ubca0\ub974\ud2b8\ub791","element":"\ub545","weapon":"\ucc3d"},{"id":48,"style":1,"name":"\uc81c\uc774\ub4dc","element":"\ubd88","weapon":"\ucc3d","free":true},{"id":49,"style":2,"name":"\ud788\uc2a4\uba54\ub098","element":"\ubb3c","weapon":"\ucc3d"},{"id":50,"style":2,"name":"\ud2f0\ub77c\ubbf8\uc218","element":"\ub545","weapon":"\ucc3d"},{"id":51,"style":1,"name":"\ubbf8\ub974\uc0e4","element":"\uc74c","weapon":"\ucc3d"},{"id":52,"style":1,"name":"\uc774\uc6e8\ub77c","element":"\uc815","weapon":"\ucc3d"},{"id":53,"style":2,"name":"\uc2dc\uc5d8","element":"\ub545","weapon":"\ud65c"},{"id":54,"style":2,"name":"\ub77c\ud074\ub808\uc5b4","element":"\ubb3c","weapon":"\ud65c"},{"id":55,"style":2,"name":"\ud074\ub85c\ub4dc","element":"\ubc14\ub78c","weapon":"\ud65c"},{"id":56,"style":2,"name":"\ud638\uc624\uc988\ud0a4","element":"\ubd88","weapon":"\ud65c"},{"id":57,"style":1,"name":"\ud504\ub808\uba54\uc544","element":"\ub545","weapon":"\ud65c"},{"id":58,"style":1,"name":"\ubbf8\uc2a4\ud2b8\ub808\uc544","element":"\uc815","weapon":"\ud65c"},{"id":59,"style":1,"name":"\uc720\ud0a4\ub178","element":"\ubb3c","weapon":"\ud65c"},{"id":60,"style":2,"name":"\ub85c\ud0a4\ub4dc","element":"\ub545","weapon":"\uad8c\uac11"},{"id":61,"style":1,"name":"\uc140\ub9ac\ub290","element":"\ub545","weapon":"\uad8c\uac11","free":true},{"id":62,"style":2,"name":"\ud3a0\ubbf8\ub098","element":"\ubc14\ub78c","weapon":"\uad8c\uac11"},{"id":63,"style":1,"name":"\ub4c0\uc774","element":"\ubb3c","weapon":"\uad8c\uac11"},{"id":64,"style":1,"name":"\uce20\ubc14\uba54","element":"\ub545","weapon":"\uad8c\uac11"},{"id":65,"style":1,"name":"\ub7ec\ube14\ub9ac","element":"\ubd88","weapon":"\uad8c\uac11"},{"id":66,"style":1,"name":"\ud558\ub514","element":"\ubd88","weapon":"\uad8c\uac11"},{"id":67,"style":2,"name":"\uc720\uc778","element":"\ubd88","weapon":"\ub9dd\uce58"},{"id":68,"style":1,"name":"\ube44\uc544\uce74","element":"\ubc14\ub78c","weapon":"\ub9dd\uce58"},{"id":69,"style":1,"name":"\ubc0d\ud654","element":"\ub545","weapon":"\ub9dd\uce58"},{"id":70,"style":1,"name":"\uc774\ud504","element":"\ubc14\ub78c","weapon":"\ub9dd\uce58"},{"id":71,"style":1,"name":"\ube0c\ub9ac\uc544","element":"\ubb3c","weapon":"\ucc3d"},{"id":72,"style":1,"name":"\uc9da\ub3cc\uc774","element":"\uc815","weapon":"\uad8c\uac11","free":true},{"id":73,"style":1,"name":"\uc2a4\uceec","element":"\ub1cc","weapon":"\ub9dd\uce58","free":true},{"id":74,"style":1,"name":"\ubc14\uc774\uc62c\ub81b","element":"\ub545","weapon":"\uac80","free":true},{"id":75,"style":1,"name":"\uc870\ucee4","element":"\ubd88","weapon":"\uac80","free":true},{"id":76,"style":1,"name":"\ubaa8\ub974\uac00\ub098","element":"\ubc14\ub78c","weapon":"\uac80","free":true},{"id":77,"style":1,"name":"\ud074\ub808\uc2a4","element":"\ubd88","weapon":"\uac80","free":true},{"id":78,"style":1,"name":"\uc720\ub9ac","element":"\ubc14\ub78c","weapon":"\ub3c4","free":true},{"id":79,"style":1,"name":"\ubbf8\ub77c","element":"\ubb3c","weapon":"\uac80","free":true},{"id":80,"style":1,"name":"\ubca8\ubcb3","element":"\ub545","weapon":"\uac80","free":true},{"id":81,"style":1,"name":"\ud5ec\ub808\ub098","element":"\ub545","weapon":"\uc9c0\ud321\uc774","free":true},{"id":82,"style":1,"name":"\uc54c\ub3c4","element":"\ubd88","weapon":"\uac80","free":true},{"id":83,"style":1,"name":"\uc54c\ud14c\ub098","element":"\uc815","weapon":"\ud65c","free":true},{"id":84,"style":1,"name":"\uc0ac\uc774\ub7ec\uc2a4","element":"\ubb3c","weapon":"\ub3c4","free":true},{"id":85,"style":1,"name":"\uc5d0\uc774\ubbf8","element":"\ubc14\ub78c","weapon":"\uad8c\uac11","free":true},{"id":86,"style":1,"name":"\ub9ac\uc774\uce74","element":"\ub545","weapon":"\ub9dd\uce58","free":true},{"id":87,"style":1,"name":"\ub9c8\ub098","element":"\ub545","weapon":"\ud65c","free":true}]')},99:function(e,t,n){}},[[120,1,2]]]);
//# sourceMappingURL=main.c23c8a2b.chunk.js.map