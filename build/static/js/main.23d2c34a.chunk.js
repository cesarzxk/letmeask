(this.webpackJsonpletmeask=this.webpackJsonpletmeask||[]).push([[0],{24:function(e,t,n){},26:function(e,t,n){},37:function(e,t,n){},49:function(e,t,n){},50:function(e,t,n){},51:function(e,t,n){},52:function(e,t,n){"use strict";n.r(t);var a=n(3),r=n.n(a),c=n(27),s=n.n(c),i=n(5),o=n.n(i),u=n(8),l=n(9),d=n.p+"static/media/illustration.ae7276f0.svg",j=n.p+"static/media/logo.d836d165.svg",b=(n(24),n(30)),h=n(31),p=(n(37),n(1));function m(e){var t=e.isOutlined,n=void 0!==t&&t,a=Object(h.a)(e,["isOutlined"]);return Object(p.jsx)("button",Object(b.a)({className:"button ".concat(n?"outlined":"")},a))}var f=n(6),x=n(14),O=n(18);n(39),n(43);try{O.a.initializeApp({apiKey:"AIzaSyCVQlvxj3dLgsOW2BAC_bsgDlGBnzjOiSw",authDomain:"letmeask-zxk.firebaseapp.com",databaseURL:"https://letmeask-zxk-default-rtdb.firebaseio.com",projectId:"letmeask-zxk",storageBucket:"letmeask-zxk.appspot.com",messagingSenderId:"609455535342",appId:"1:609455535342:web:2798f9345d7a0667b9efff",measurementId:"G-F6E5MSZXPE"})}catch(P){console.log("Erro ".concat(P))}var v=O.a.auth(),g=O.a.database(),k=Object(a.createContext)({});function w(e){var t=e.children,n=Object(a.useState)(),r=Object(l.a)(n,2),c=r[0],s=r[1];function i(){return(i=Object(u.a)(o.a.mark((function e(){var t,n,a,r,c,i;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=new O.a.auth.GoogleAuthProvider,e.next=3,v.signInWithPopup(t);case 3:if(!(n=e.sent).user){e.next=9;break}if(a=n.user,r=a.displayName,c=a.photoURL,i=a.uid,r&&c){e.next=8;break}throw new Error("Missing information from Google Account.");case 8:s({id:i,name:r,avatar:c});case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(a.useEffect)((function(){var e=v.onAuthStateChanged((function(e){if(e){var t=e.displayName,n=e.photoURL,a=e.uid;if(!t||!n)throw new Error("Missing information from Google Account.");s({id:a,name:t,avatar:n})}}));return function(){e()}}),[]),Object(p.jsx)(k.Provider,{value:{signInWithGoogle:function(){return i.apply(this,arguments)},user:c},children:t})}function y(){var e=Object(a.useState)(""),t=Object(l.a)(e,2),n=t[0],r=t[1],c=Object(a.useContext)(k).user,s=Object(f.f)(),i=Object(a.useState)(""),b=Object(l.a)(i,2),h=b[0],O=b[1];function v(){return(v=Object(u.a)(o.a.mark((function e(t){var a,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),""!==n.trim()){e.next=3;break}return e.abrupt("return");case 3:return a=g.ref("rooms"),e.next=6,a.push({title:n,authorId:null===c||void 0===c?void 0:c.id,url:h});case 6:r=e.sent,s.push("/rooms/".concat(r.key));case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(p.jsxs)("div",{id:"page-auth",children:[Object(p.jsxs)("aside",{children:[Object(p.jsx)("img",{src:d,alt:"Ilustra\xe7\xe3o"}),Object(p.jsx)("strong",{children:"Crie salas de Q&A ao-vivo"}),Object(p.jsx)("p",{children:"Tire as d\xfavidas da sua audi\xeancia em tempo real."})]}),Object(p.jsx)("main",{children:Object(p.jsxs)("div",{className:"main-content",children:[Object(p.jsx)("img",{src:j,alt:"LetmeAsk"}),Object(p.jsx)("h2",{children:"Crie uma nova sala."}),Object(p.jsxs)("form",{onSubmit:function(e){return v.apply(this,arguments)},children:[Object(p.jsx)("input",{type:"text",name:"",id:"",onChange:function(e){return r(e.target.value)},value:n,placeholder:"Nome da sala."}),Object(p.jsx)("input",{value:h,onChange:function(e){return O(e.target.value)},type:"text",name:"",id:"",placeholder:"Linke da sua live (opcional)."}),Object(p.jsx)(m,{type:"submit",children:"Entrar na sala"})]}),Object(p.jsxs)("p",{children:["Quer entrar em alguma sala? ",Object(p.jsx)(x.b,{to:"/",children:"click aqui."})]})]})})]})}var C=n.p+"static/media/google-icon.df15d8e5.svg";function A(){var e=Object(a.useContext)(k),t=e.signInWithGoogle,n=e.user,r=Object(f.f)(),c=Object(a.useState)(""),s=Object(l.a)(c,2),i=s[0],b=s[1];function h(){return(h=Object(u.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n){e.next=3;break}return e.next=3,t();case 3:r.push("/rooms/new");case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function x(){return(x=Object(u.a)(o.a.mark((function e(t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),""!==i.trim()){e.next=3;break}return e.abrupt("return");case 3:return e.next=5,g.ref("rooms/".concat(i)).get();case 5:if((n=e.sent).exists()){e.next=9;break}return alert("Room does not exists."),e.abrupt("return");case 9:if(!n.val().endedAt){e.next=12;break}return alert("Essa sala foi encerrada!"),e.abrupt("return");case 12:r.push("/rooms/".concat(i));case 13:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(p.jsxs)("div",{id:"page-auth",children:[Object(p.jsxs)("aside",{children:[Object(p.jsx)("img",{src:d,alt:"Ilustra\xe7\xe3o"}),Object(p.jsx)("strong",{children:"Crie salas de Q&A ao-vivo"}),Object(p.jsx)("p",{children:"Tire as d\xfavidas da sua audi\xeancia em tempo real."})]}),Object(p.jsx)("main",{children:Object(p.jsxs)("div",{className:"main-content",children:[Object(p.jsx)("img",{src:j,alt:"LetmeAsk"}),Object(p.jsxs)("button",{onClick:function(){return h.apply(this,arguments)},className:"create-room",children:[Object(p.jsx)("img",{src:C,alt:"Logo google"}),"Crie sua sala com o google"]}),Object(p.jsx)("div",{className:"separator",children:"ou entre em uma sala"}),Object(p.jsxs)("form",{onSubmit:function(e){return x.apply(this,arguments)},children:[Object(p.jsx)("input",{value:i,onChange:function(e){return b(e.target.value)},type:"text",name:"",id:"",placeholder:"Digite o codigo da sala"}),Object(p.jsx)(m,{type:"submit",children:"Entrar na sala"})]})]})})]})}var N=n.p+"static/media/copy.2f36f99e.svg";n(49);function S(e){return Object(p.jsxs)("button",{onClick:function(){navigator.clipboard.writeText(e.code)},className:"room-code",children:[Object(p.jsx)("div",{children:Object(p.jsx)("img",{src:N,alt:"Copy room code"})}),Object(p.jsxs)("span",{children:["Sala: #",e.code]})]})}n(50);var q=n(29),I=n.n(q);function E(e){var t=e.content,n=e.auth,a=e.isAnswered,r=void 0!==a&&a,c=e.isHighlighted,s=void 0!==c&&c,i=e.children;return Object(p.jsxs)("div",{className:I()("question",{highlighted:s},{answered:r}),children:[Object(p.jsx)("p",{children:t}),Object(p.jsxs)("footer",{children:[Object(p.jsxs)("div",{className:"user-info",children:[Object(p.jsx)("img",{src:n.avatar,alt:n.name}),Object(p.jsx)("span",{children:n.name})]}),Object(p.jsx)("div",{children:i})]})]})}n(26);function L(e){var t=Object(a.useContext)(k).user,n=Object(a.useState)([]),r=Object(l.a)(n,2),c=r[0],s=r[1],i=Object(a.useState)(""),o=Object(l.a)(i,2),u=o[0],d=o[1],j=Object(a.useState)(""),b=Object(l.a)(j,2),h=b[0],p=b[1];return Object(a.useEffect)((function(){var n=g.ref("rooms/".concat(e));return n.on("value",(function(e){var n,a=e.val(),r=null!==(n=a.questions)&&void 0!==n?n:{},c=Object.entries(r).map((function(e){var n,a,r,c=Object(l.a)(e,2),s=c[0],i=c[1];return{id:s,content:i.content,author:i.author,isHighlighted:i.isHighlighted,isAnswered:i.isAnswered,likeCount:Object.values(null!==(n=i.likes)&&void 0!==n?n:{}).length,likeId:null===(a=Object.entries(null!==(r=i.likes)&&void 0!==r?r:{}).find((function(e){var n=Object(l.a)(e,2);n[0];return n[1].authorId===(null===t||void 0===t?void 0:t.id)})))||void 0===a?void 0:a[0]}}));p(a.url),d(a.title),s(c)})),function(){n.off("value")}}),[e,null===t||void 0===t?void 0:t.id]),{questions:c,title:u,url:h}}function H(){var e=Object(a.useContext)(k).user,t=Object(f.g)(),n=Object(a.useState)(""),r=Object(l.a)(n,2),c=r[0],s=r[1],i=L(t.id),d=i.questions,b=i.title,h=i.url;function x(){return(x=Object(u.a)(o.a.mark((function n(a){var r;return o.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(a.preventDefault(),""!==c.trim()){n.next=3;break}return n.abrupt("return");case 3:if(e){n.next=5;break}throw new Error("You mus be logged in");case 5:return r={content:c,author:{id:e.id,name:e.name,avatar:e.avatar},isHighlighted:!1,isAnswered:!1},n.next=8,g.ref("/rooms/".concat(t.id,"/questions")).push(r);case 8:s("");case 9:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function O(){return(O=Object(u.a)(o.a.mark((function n(a,r){return o.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!r){n.next=5;break}return n.next=3,g.ref("rooms/".concat(t.id,"/questions/").concat(a,"/likes/").concat(r)).remove();case 3:n.next=7;break;case 5:return n.next=7,g.ref("rooms/".concat(t.id,"/questions/").concat(a,"/likes")).push({authorId:null===e||void 0===e?void 0:e.id});case 7:case"end":return n.stop()}}),n)})))).apply(this,arguments)}return Object(p.jsxs)("div",{id:"page-room",children:[Object(p.jsx)("header",{children:Object(p.jsxs)("div",{className:"content",children:[Object(p.jsx)("img",{src:j,alt:"Letmeask"}),Object(p.jsx)(S,{code:t.id})]})}),h&&Object(p.jsx)("section",{className:"video",children:Object(p.jsx)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/".concat(function(){var e;return null===(e=h.split("/"))||void 0===e?void 0:e[3]}()),allowFullScreen:!0})}),Object(p.jsxs)("main",{children:[Object(p.jsxs)("div",{className:"room-title",children:[Object(p.jsxs)("h1",{children:["Sala ",b]}),d.length>0&&Object(p.jsxs)("span",{children:[d.length," perguntas"]})]}),Object(p.jsxs)("form",{onSubmit:function(e){return x.apply(this,arguments)},children:[Object(p.jsx)("textarea",{onChange:function(e){return s(e.target.value)},value:c,placeholder:"Q que voc\xea quer perguntar?"}),Object(p.jsxs)("div",{className:"form-footer",children:[e?Object(p.jsxs)("div",{className:"user-info",children:[Object(p.jsx)("img",{src:e.avatar,alt:e.name}),Object(p.jsx)("span",{children:e.name})]}):Object(p.jsxs)("span",{children:["Para enviar uma pergunta ",Object(p.jsx)("button",{children:"fa\xe7a seu login"}),"."]}),Object(p.jsx)(m,{disabled:!e,type:"submit",children:"Enviar pergunta"})]})]}),Object(p.jsx)("div",{className:"question-list",children:d.map((function(e){return Object(p.jsx)(E,{auth:e.author,content:e.content,isAnswered:e.isAnswered,isHighlighted:e.isHighlighted,children:!e.isAnswered&&Object(p.jsxs)("button",{onClick:function(){return function(e,t){return O.apply(this,arguments)}(e.id,e.likeId)},className:"like-button ".concat(e.likeId?"liked":""),type:"button","aria-label":"Marcar como gostei",children:[e.likeCount>0&&Object(p.jsx)("span",{children:e.likeCount}),Object(p.jsx)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(p.jsx)("path",{d:"M7 22H4C3.46957 22 2.96086 21.7893 2.58579 21.4142C2.21071 21.0391 2 20.5304 2 20V13C2 12.4696 2.21071 11.9609 2.58579 11.5858C2.96086 11.2107 3.46957 11 4 11H7M14 9V5C14 4.20435 13.6839 3.44129 13.1213 2.87868C12.5587 2.31607 11.7956 2 11 2L7 11V22H18.28C18.7623 22.0055 19.2304 21.8364 19.5979 21.524C19.9654 21.2116 20.2077 20.7769 20.28 20.3L21.66 11.3C21.7035 11.0134 21.6842 10.7207 21.6033 10.4423C21.5225 10.1638 21.3821 9.90629 21.1919 9.68751C21.0016 9.46873 20.7661 9.29393 20.5016 9.17522C20.2371 9.0565 19.9499 8.99672 19.66 9H14Z",stroke:"#737380",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})]})},e.id)}))})]})]})}n(51);var D=n.p+"static/media/delete.22ba6e00.svg",z=n.p+"static/media/answer.4502a8d5.svg",M=n.p+"static/media/check.5dfa6ed6.svg";function G(){var e=Object(f.g)(),t=L(e.id),n=t.questions,a=t.title,r=Object(f.f)();function c(){return(c=Object(u.a)(o.a.mark((function t(){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,g.ref("rooms/".concat(e.id)).update({endedAt:new Date});case 2:r.push("/");case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function s(){return(s=Object(u.a)(o.a.mark((function t(n){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!window.confirm("Tem certeza que voc\xea deseja excluir essa pergunta?")){t.next=3;break}return t.next=3,g.ref("rooms/".concat(e.id,"/questions/").concat(n)).remove();case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function i(){return(i=Object(u.a)(o.a.mark((function t(n){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,g.ref("rooms/".concat(e.id,"/questions/").concat(n)).update({isAnswered:!0});case 2:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function l(){return(l=Object(u.a)(o.a.mark((function t(n){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,g.ref("rooms/".concat(e.id,"/questions/").concat(n)).update({isHighlighted:!0});case 2:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return Object(p.jsxs)("div",{id:"page-room",children:[Object(p.jsx)("header",{children:Object(p.jsxs)("div",{className:"content",children:[Object(p.jsx)("img",{src:j,alt:"Letmeask"}),Object(p.jsxs)("div",{children:[Object(p.jsx)(S,{code:e.id}),Object(p.jsx)(m,{onClick:function(){return function(){return c.apply(this,arguments)}()},isOutlined:!0,children:"Encerrar sala"})]})]})}),Object(p.jsxs)("main",{children:[Object(p.jsxs)("div",{className:"room-title",children:[Object(p.jsxs)("h1",{children:["Sala ",a]}),n.length>0&&Object(p.jsxs)("span",{children:[n.length," perguntas"]})]}),Object(p.jsx)("div",{className:"question-list",children:n.map((function(e){return Object(p.jsxs)(E,{isAnswered:e.isAnswered,isHighlighted:e.isHighlighted,auth:e.author,content:e.content,children:[!e.isAnswered&&Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("button",{type:"button",onClick:function(){!function(e){i.apply(this,arguments)}(e.id)},children:Object(p.jsx)("img",{src:M,alt:"Marcar como respondida."})}),Object(p.jsx)("button",{type:"button",onClick:function(){!function(e){l.apply(this,arguments)}(e.id)},children:Object(p.jsx)("img",{src:z,alt:"Dar destaque na pergunta.."})})]}),Object(p.jsx)("button",{type:"button",onClick:function(){!function(e){s.apply(this,arguments)}(e.id)},children:Object(p.jsx)("img",{src:D,alt:"Deletar pergunta."})})]},e.id)}))})]})]})}var B=function(){return Object(p.jsx)("div",{children:Object(p.jsx)(w,{children:Object(p.jsx)(x.a,{children:Object(p.jsxs)(f.c,{children:[Object(p.jsx)(f.a,{path:"/",exact:!0,component:A}),Object(p.jsx)(f.a,{path:"/rooms/new",exact:!0,component:y}),Object(p.jsx)(f.a,{path:"/rooms/:id",component:H}),Object(p.jsx)(f.a,{path:"/admin/rooms/:id",component:G})]})})})})};s.a.render(Object(p.jsx)(r.a.StrictMode,{children:Object(p.jsx)(B,{})}),document.getElementById("root"))}},[[52,1,2]]]);
//# sourceMappingURL=main.23d2c34a.chunk.js.map