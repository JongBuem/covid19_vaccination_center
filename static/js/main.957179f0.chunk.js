(this.webpackJsonptest=this.webpackJsonptest||[]).push([[0],{15:function(e,t,a){},24:function(e,t,a){},43:function(e,t,a){},45:function(e,t,a){"use strict";a.r(t);var n=a(2),c=a(16),i=a.n(c),r=a(6),s=a.n(r),o=a(3),d=a(17),l=a(4),m=(a(24),a(18)),u=a.n(m),j=(a(43),a(15),a(0)),v=window.kakao;function f(e){var t=e.lat,a=e.lng,c=e.zoom,i=e.arrLat,r=e.arrLng,s=e.arrFacilityName,o=null;return!1===c?o={center:new v.maps.LatLng(a,t),level:10}:!0===c&&(o={center:new v.maps.LatLng(a,t),level:5}),Object(n.useEffect)((function(){for(var e=document.getElementById("map"),t=new v.maps.Map(e,o),a=0;a<i.length;a++){var n=new v.maps.LatLng(r[a],i[a]),c=new v.maps.Marker({position:n});c.setMap(t);var d='<div class="customoverlay">'+s[a]+"</div>",l=new v.maps.CustomOverlay({position:n,content:d});v.maps.event.addListener(c,"mouseover",m(t,c,l)),v.maps.event.addListener(c,"mouseout",u(l)),v.maps.event.addListener(c,"click",m(t,c,l)),v.maps.event.addListener(t,"click",u(l))}function m(e,t,a){return function(){a.setMap(e)}}function u(e){return function(){e.setMap(null)}}}),[a]),Object(j.jsx)("div",{id:"map",className:"map"})}var p=[100],b=[100],O=[100];function y(e){e.id;var t=e.sido,a=e.city,c=e.centerName,i=e.facilityName,r=(e.zipCode,e.address,e.centerType,e.lat),s=e.lng,d=e.zom,m=r,u=s,v=i,y=Object(n.useState)({lat:m,lng:u,facilityName:v,mode:!0,zoom:d}),g=Object(l.a)(y,2),h=g[0],x=g[1];Object(n.useEffect)((function(){p=[],b=[],O=[]}),[a]);return t!==a?(t=null,c=null,i="",null,null,r=null,s=null,Object(j.jsx)("div",{})):t===a?(p.push(h.lat),b.push(h.lng),O.push(h.facilityName),Object(j.jsxs)("div",{className:"center",children:[Object(j.jsx)("div",{className:"center_info",onClick:function(){!0===h.mode?x(Object(o.a)(Object(o.a)({},h),{},{lat:r-1e-6,lng:s-1e-6,mode:!1,zoom:!0})):x(Object(o.a)(Object(o.a)({},h),{},{lat:r,lng:s,mode:!0,zoom:!0}))},children:Object(j.jsxs)("div",{children:[Object(j.jsx)("div",{className:"centerName",children:c}),Object(j.jsxs)("div",{className:"facilityName",children:["[",i,"]"]})]})}),Object(j.jsx)("div",{children:Object(j.jsx)(f,{lat:h.lat,lng:h.lng,zoom:h.zoom,arrLat:p,arrLng:b,arrFacilityName:O})})]})):void 0}function g(e){for(var t=e.info,a=e.isLoading,c=t,i=Object(n.useState)({mode:null,zom:!1}),r=Object(l.a)(i,2),s=r[0],o=r[1],d=[{area:"\uc11c\uc6b8\ud2b9\ubcc4\uc2dc",city:"\uc11c\uc6b8"},{area:"\uc778\ucc9c\uad11\uc5ed\uc2dc",city:"\uc778\ucc9c"},{area:"\uc138\uc885\ud2b9\ubcc4\uc790\uce58\uc2dc",city:"\uc138\uc885"},{area:"\ub300\uc804\uad11\uc5ed\uc2dc",city:"\ub300\uc804"},{area:"\ub300\uad6c\uad11\uc5ed\uc2dc",city:"\ub300\uad6c"},{area:"\uc6b8\uc0b0\uad11\uc5ed\uc2dc",city:"\uc6b8\uc0b0"},{area:"\ubd80\uc0b0\uad11\uc5ed\uc2dc",city:"\ubd80\uc0b0"},{area:"\uad11\uc8fc\uad11\uc5ed\uc2dc",city:"\uad11\uc8fc"},{area:"\uacbd\uae30\ub3c4",city:"\uacbd\uae30\ub3c4"},{area:"\uac15\uc6d0\ub3c4",city:"\uac15\uc6d0\ub3c4"},{area:"\ucda9\uccad\ubd81\ub3c4",city:"\ucda9\uccad\ubd81\ub3c4"},{area:"\ucda9\uccad\ub0a8\ub3c4",city:"\ucda9\uccad\ub0a8\ub3c4"},{area:"\uacbd\uc0c1\ubd81\ub3c4",city:"\uacbd\uc0c1\ubd81\ub3c4"},{area:"\uacbd\uc0c1\ub0a8\ub3c4",city:"\uacbd\uc0c1\ub0a8\ub3c4"},{area:"\uc804\ub77c\ubd81\ub3c4",city:"\uc804\ub77c\ubd81\ub3c4"},{area:"\uc804\ub77c\ub0a8\ub3c4",city:"\uc804\ub77c\ub0a8\ub3c4"},{area:"\uc81c\uc8fc\ud2b9\ubcc4\uc790\uce58\ub3c4",city:"\uc81c\uc8fc\ub3c4"}],m=[],u=function(e){m[e]=Object(j.jsx)("div",{onClick:function(){return o({state:s,mode:d[e].area})},children:d[e].city},e)},v=0;v<d.length;v++)u(v);var f=m.map((function(e){return e}));return Object(j.jsxs)("div",{className:"home",children:[Object(j.jsx)("div",{className:"navigation",children:Object(j.jsx)("div",{className:"city",children:f})}),Object(j.jsx)("div",{className:"Location",children:Object(j.jsx)("div",{children:a?Object(j.jsx)("div",{children:Object(j.jsx)("span",{children:"Loading..."})}):Object(j.jsx)("div",{className:"centers",children:c.map((function(e){return Object(j.jsx)(y,{id:e.id,sido:e.sido,city:s.mode,centerName:e.centerName,facilityName:e.facilityName,zipCode:e.zipCode,address:e.address,centerType:e.centerType,lat:e.lat,lng:e.lng,zom:s.zom},e.id)}))})})})]})}function h(){var e=Object(n.useState)({isLoading:!0,covid:null}),t=Object(l.a)(e,2),a=t[0],c=t[1];return Object(n.useEffect)((function(){Object(d.a)(s.a.mark((function e(){var t,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.a.get("https://api.odcloud.kr/api/15077586/v1/centers?page=1&perPage=".concat(204,"&GETcenters&serviceKey=").concat("IvWsWLdmfiX2Gk3YCwkCMMEagPINpXdfgfhnec0s6HBid05ffim7vLRJZKl%2BrMVXqWa%2BRI20AwUDZ%2FXX5ABEvg%3D%3D"));case 2:t=e.sent,n=t.data.data,c(Object(o.a)(Object(o.a)({},a),{},{isLoading:!1,covid:n}));case 5:case"end":return e.stop()}}),e)})))()}),[]),Object(j.jsx)("div",{children:Object(j.jsx)(g,{info:a.covid,isLoading:a.isLoading})})}i.a.render(Object(j.jsx)(h,{}),document.getElementById("root"))}},[[45,1,2]]]);
//# sourceMappingURL=main.957179f0.chunk.js.map