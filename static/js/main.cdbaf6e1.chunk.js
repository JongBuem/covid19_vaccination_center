(this.webpackJsonptest=this.webpackJsonptest||[]).push([[0],{40:function(e,t,n){},59:function(e,t,n){},61:function(e,t,n){},67:function(e,t,n){"use strict";n.r(t);var c=n(0),i=n.n(c),a=n(26),r=n.n(a),s=n(14),d=n.n(s),o=n(27),l=n(28),j=n(29),u=n(34),m=n(33),v=(n(40),n(30)),b=n.n(v),O=n(11),f=n(10),h=(n(59),n(1)),x=window.kakao;function p(e){var t=e.lat,n=e.lng;return Object(c.useEffect)((function(){var e=document.getElementById("map"),c={center:new x.maps.LatLng(n,t),level:5},i=new x.maps.Map(e,c),a=new x.maps.LatLng(n,t);new x.maps.Marker({position:a}).setMap(i)}),[n]),Object(h.jsx)("div",{id:"map",className:"map"})}function g(e){e.id;var t=e.sido,n=e.city,i=e.centerName,a=e.facilityName,r=(e.zipCode,e.address,e.centerType,e.lat),s=e.lng,d=Object(c.useState)({lat:127.344399,lng:36.378512,mode:!1}),o=Object(O.a)(d,2),l=o[0],j=o[1];l.mode;if(t!==n.mode)return t=null,i=null,a="",null,null,r=null,s=null,Object(h.jsx)("div",{});if(t===n.mode){return Object(h.jsxs)("div",{className:"center",onClick:function(){!0===l.mode?j(Object(f.a)(Object(f.a)({},l),{},{lat:r-1e-6,lng:s-1e-6,mode:!1})):j(Object(f.a)(Object(f.a)({},l),{},{lat:r,lng:s,mode:!0}))},children:[Object(h.jsx)("div",{className:"center_info",children:Object(h.jsxs)("div",{children:[Object(h.jsx)("div",{className:"centerName",children:i}),Object(h.jsxs)("div",{className:"facilityName",children:["[",a,"]"]})]})}),Object(h.jsx)("div",{children:Object(h.jsx)(p,{lat:l.lat,lng:l.lng})})]})}}n(61);function k(e){var t=e.info,n=e.isLoading,i=t,a=Object(c.useState)({mode:null}),r=Object(O.a)(a,2),s=r[0],d=r[1];return Object(h.jsxs)("div",{className:"navigation",children:[Object(h.jsxs)("div",{className:"area",children:[Object(h.jsxs)("div",{className:"city",children:[Object(h.jsx)("div",{onClick:function(){return d({state:s,mode:"\uc11c\uc6b8\ud2b9\ubcc4\uc2dc"})},children:"\uc11c\uc6b8"}),Object(h.jsx)("div",{onClick:function(){return d({state:s,mode:"\uc778\ucc9c\uad11\uc5ed\uc2dc"})},children:"\uc778\ucc9c"}),Object(h.jsx)("div",{onClick:function(){return d({state:s,mode:"\ub300\uc804\uad11\uc5ed\uc2dc"})},children:"\ub300\uc804"}),Object(h.jsx)("div",{onClick:function(){return d({state:s,mode:"\ub300\uad6c\uad11\uc5ed\uc2dc"})},children:"\ub300\uad6c"}),Object(h.jsx)("div",{onClick:function(){return d({state:s,mode:"\uc6b8\uc0b0\uad11\uc5ed\uc2dc"})},children:"\uc6b8\uc0b0"}),Object(h.jsx)("div",{onClick:function(){return d({state:s,mode:"\ubd80\uc0b0\uad11\uc5ed\uc2dc"})},children:"\ubd80\uc0b0"}),Object(h.jsx)("div",{onClick:function(){return d({state:s,mode:"\uad11\uc8fc\uad11\uc5ed\uc2dc"})},children:"\uad11\uc8fc"})]}),Object(h.jsxs)("div",{className:"city",children:[Object(h.jsx)("div",{onClick:function(){return d({state:s,mode:"\uacbd\uae30\ub3c4"})},children:"\uacbd\uae30\ub3c4"}),Object(h.jsx)("div",{onClick:function(){return d({state:s,mode:"\uac15\uc6d0\ub3c4"})},children:"\uac15\uc6d0\ub3c4"}),Object(h.jsx)("div",{onClick:function(){return d({state:s,mode:"\ucda9\uccad\ubd81\ub3c4"})},children:"\ucda9\uccad\ubd81\ub3c4"}),Object(h.jsx)("div",{onClick:function(){return d({state:s,mode:"\ucda9\uccad\ub0a8\ub3c4"})},children:"\ucda9\uccad\ub0a8\ub3c4"}),Object(h.jsx)("div",{onClick:function(){return d({state:s,mode:"\uacbd\uc0c1\ubd81\ub3c4"})},children:"\uacbd\uc0c1\ubd81\ub3c4"}),Object(h.jsx)("div",{onClick:function(){return d({state:s,mode:"\uacbd\uc0c1\ub0a8\ub3c4"})},children:"\uacbd\uc0c1\ub0a8\ub3c4"}),Object(h.jsx)("div",{onClick:function(){return d({state:s,mode:"\uc804\ub77c\ubd81\ub3c4"})},children:"\uc804\ub77c\ubd81\ub3c4"}),Object(h.jsx)("div",{onClick:function(){return d({state:s,mode:"\uc804\ub77c\ub0a8\ub3c4"})},children:"\uc804\ub77c\ub0a8\ub3c4"}),Object(h.jsx)("div",{onClick:function(){return d({state:s,mode:"\uc81c\uc8fc\ud2b9\ubcc4\uc790\uce58\ub3c4"})},children:"\uc81c\uc8fc\ub3c4"})]})]}),Object(h.jsxs)("div",{className:"Location",children:[Object(h.jsx)("div",{children:n?Object(h.jsx)("div",{children:Object(h.jsx)("span",{children:"Loading..."})}):Object(h.jsx)("div",{className:"centers",children:i.map((function(e){return Object(h.jsx)(g,{id:e.id,sido:e.sido,city:s,centerName:e.centerName,facilityName:e.facilityName,zipCode:e.zipCode,address:e.address,centerType:e.centerType,lat:e.lat,lng:e.lng},e.id)}))})}),Object(h.jsx)("div",{})]})]})}var C=n(31),N=n(2),y="IvWsWLdmfiX2Gk3YCwkCMMEagPINpXdfgfhnec0s6HBid05ffim7vLRJZKl%2BrMVXqWa%2BRI20AwUDZ%2FXX5ABEvg%3D%3D",w=function(e){Object(u.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(l.a)(this,n);for(var c=arguments.length,i=new Array(c),a=0;a<c;a++)i[a]=arguments[a];return(e=t.call.apply(t,[this].concat(i))).state={isLoading:!0,covid:null},e.getWeather=Object(o.a)(d.a.mark((function t(){var n,c;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,b.a.get("https://api.odcloud.kr/api/15077586/v1/centers?page=1&perPage=".concat(204,"&GETcenters&serviceKey=").concat(y));case 2:n=t.sent,c=n.data.data,e.setState({isLoading:!1,covid:c});case 5:case"end":return t.stop()}}),t)}))),e}return Object(j.a)(n,[{key:"componentDidMount",value:function(){this.getWeather()}},{key:"render",value:function(){var e=this.state,t=e.covid,n=e.isLoading;return Object(h.jsx)(C.a,{children:Object(h.jsx)(N.a,{path:"/",render:function(){return Object(h.jsx)(k,{info:t,isLoading:n})}})})}}]),n}(i.a.Component);r.a.render(Object(h.jsx)(w,{}),document.getElementById("root"))}},[[67,1,2]]]);
//# sourceMappingURL=main.cdbaf6e1.chunk.js.map