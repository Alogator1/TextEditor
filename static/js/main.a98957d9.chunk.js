(this.webpackJsonptexteditor=this.webpackJsonptexteditor||[]).push([[0],{53:function(e,t,a){e.exports=a(65)},58:function(e,t,a){},59:function(e,t,a){},65:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),l=a(7),r=a.n(l),c=(a(58),a(13)),i=(a(59),a(104)),u=a(101),d=a(103),s=a(102),m=a(100),E=a(36);var f=Object(E.b)((function(e){return{spans:e.spans}}),(function(e){return{onAddSpan:function(t){e({type:"ADD_SPAN",payload:t})},onDeleteSpan:function(t){e({type:"DELETE_SPAN",payload:t})},onChangeSpan:function(t){e({type:"CHANGE_SPAN",payload:t})}}}))((function(e){var t=Object(n.useState)("red"),a=Object(c.a)(t,2),l=a[0],r=a[1],E=Object(n.useState)("red"),f=Object(c.a)(E,2),b=f[0],g=f[1],v=Object(n.useState)(14),p=Object(c.a)(v,2),h=p[0],O=p[1],S=Object(n.useState)(""),y=Object(c.a)(S,2),x=y[0],C=y[1],N=Object(n.useState)(0),k=Object(c.a)(N,2),w=k[0],D=k[1];function _(e){switch(e.target.name){case"color":r(e.target.value);break;case"font":O(e.target.value);break;case"bg":g(e.target.value);break;default:console.log("No data!")}}return o.a.createElement("div",{className:"App"},o.a.createElement("h1",null,"Text editor"),o.a.createElement("h5",null,"To change/delete span, select params, then click on it and press button"),o.a.createElement("form",{noValidate:!0,autoComplete:"off",onSubmit:function(t){t.preventDefault(),x?(e.onAddSpan({color:l,bgcolor:b,fontsize:+h,text:x,id:(new Date).valueOf()}),C("")):alert("Enter some text!")}},o.a.createElement(d.a,{id:"label"},"Color"),o.a.createElement(u.a,{labelId:"label",id:"selectColor",onChange:_,name:"color",defaultValue:"red",value:l},o.a.createElement(i.a,{value:"red"},"Red"),o.a.createElement(i.a,{value:"green"},"Green"),o.a.createElement(i.a,{value:"blue"},"Blue"),o.a.createElement(i.a,{value:"black"},"Black"),o.a.createElement(i.a,{value:"white"},"White")),o.a.createElement(d.a,{id:"bg"},"Bg color"),o.a.createElement(u.a,{labelId:"bg",id:"selectBg",onChange:_,name:"bg",defaultValue:"red",value:b},o.a.createElement(i.a,{value:"red"},"Red"),o.a.createElement(i.a,{value:"green"},"Green"),o.a.createElement(i.a,{value:"blue"},"Blue"),o.a.createElement(i.a,{value:"black"},"Black"),o.a.createElement(i.a,{value:"white"},"White")),o.a.createElement(d.a,{id:"font"},"Font size"),o.a.createElement(u.a,{labelId:"font",id:"selectFontSize",onChange:_,name:"font",defaultValue:"18",value:h},o.a.createElement(i.a,{value:"12"},"12"),o.a.createElement(i.a,{value:"14"},"14"),o.a.createElement(i.a,{value:"16"},"16"),o.a.createElement(i.a,{value:"18"},"18"),o.a.createElement(i.a,{value:"20"},"20"),o.a.createElement(i.a,{value:"22"},"22"),o.a.createElement(i.a,{value:"24"},"24")),o.a.createElement(d.a,{id:"text"},"Text"),o.a.createElement(s.a,{id:"standard-basic",name:"text",label:"Enter text",value:x,onChange:function(e){C(e.target.value)}}),o.a.createElement("div",{className:"buttons"},o.a.createElement(m.a,{variant:"contained",color:"primary",type:"submit"},"ADD"),o.a.createElement(m.a,{variant:"contained",color:"secondary",onClick:function(){w?(e.onDeleteSpan(w),D(0)):alert("Choose text to delete!")}},"DELETE"),o.a.createElement(m.a,{variant:"contained",color:"default",onClick:function(){w?e.onChangeSpan({color:l,bgcolor:b,fontsize:+h,text:x,id:w}):alert("Choose text to change!")}},"CHANGE"))),o.a.createElement("div",{className:"spans"},e.spans.map((function(e,t){return o.a.createElement("span",{key:t,style:{color:e.color,backgroundColor:e.bgcolor,fontSize:e.fontsize,marginRight:"5px"},spanid:e.id,onClick:function(){return t=e.id,void D(t);var t}},e.text)}))),o.a.createElement(m.a,{variant:"contained",color:"default",onClick:function(){console.log(JSON.stringify(e.spans))}},"GET JSON"))}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var b=a(24),g=a(11),v=[{color:"blue",bgcolor:"green",fontsize:20,text:"Hello world",id:(new Date).valueOf()}];function p(e,t,a){var n=e[t],o=e[a];if(n.color!=o.color||n.bgcolor!=o.bgcolor||n.fontsize!=o.fontsize)return!1;e[t].text=e[t].text+e[a].text,e.splice(a,1)}var h=Object(b.b)({spans:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,t=arguments.length>1?arguments[1]:void 0;if("ADD_SPAN"==t.type){var a=e.concat();return a.push(t.payload),1!=a.length&&p(a,a.length-2,a.length-1),Object(g.a)(a)}if("DELETE_SPAN"==t.type){var n=e.concat(),o=n.findIndex((function(e){return e.id==t.payload}));return n.splice(o,1),console.log("index of deleteble",o,n.length),1!=n.length&&o!=n.length&&p(n,o-1,o),Object(g.a)(n)}if("CHANGE_SPAN"==t.type){var l=e.concat(),r=l.findIndex((function(e){return e.id==t.payload.id}));return l[r]={color:t.payload.color,bgcolor:t.payload.bgcolor,fontsize:t.payload.fontsize,text:t.payload.text,id:t.payload.id},1==l.length?Object(g.a)(l):(console.log(r),r==l.length-1?p(l,r-1,r):0==r?p(l,0,1):p(l,r,r+1)||p(l,r,r-1),Object(g.a)(l))}return e}}),O=Object(b.c)(h,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());r.a.render(o.a.createElement(E.a,{store:O},o.a.createElement(f,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[53,1,2]]]);
//# sourceMappingURL=main.a98957d9.chunk.js.map