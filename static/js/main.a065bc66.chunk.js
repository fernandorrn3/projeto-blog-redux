(this["webpackJsonpblog-redux"]=this["webpackJsonpblog-redux"]||[]).push([[0],{59:function(e,t,c){},60:function(e,t,c){},61:function(e,t){},62:function(e,t,c){},63:function(e,t,c){},70:function(e,t,c){},71:function(e,t,c){},72:function(e,t,c){},73:function(e,t,c){},74:function(e,t,c){},75:function(e,t,c){},76:function(e,t,c){},80:function(e,t,c){},81:function(e,t,c){},85:function(e,t,c){},86:function(e,t,c){},87:function(e,t,c){},88:function(e,t,c){},89:function(e,t,c){},90:function(e,t,c){},91:function(e,t,c){},92:function(e,t,c){"use strict";c.r(t);var a=c(0),n=c.n(a),i=c(19),o=c.n(i),s=(c(59),c(60),c(61),c(62),c(63),c(5)),r=c(12),d=c(1),l=function(){var e=Object(s.c)((function(e){return e.post})).filter((function(e){return e}));function t(e){var t=e.split("/");return new Date(t[2],t[1]-1,t[0])}e.sort((function(e,c){return new Date(t(e.data))-new Date(t(c.data))}));var c=e.slice(-2);return Object(d.jsxs)("div",{className:"coluna1",children:[Object(d.jsx)("div",{className:"noticia1",children:Object(d.jsx)(r.b,{className:"link",to:"/post/".concat(c[1].id),children:Object(d.jsx)("div",{className:"cp22",style:{width:"100%",minHeight:"360px",backgroundImage:"url(".concat(c[1].imagem,")"),backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundSize:"cover"},children:Object(d.jsx)("div",{className:"textoetitulocards",children:Object(d.jsxs)("div",{children:[Object(d.jsx)("h4",{children:c[1].titulo.substr(0,20)}),Object(d.jsx)("p",{children:c[1].conteudo.substr(0,30)})]})})})})}),Object(d.jsx)("div",{className:"noticia2",children:Object(d.jsxs)(r.b,{className:"link",to:"/post/".concat(c[0].id),children:[" ",Object(d.jsx)("div",{className:"cp23",style:{width:"100%",minHeight:"360px",backgroundImage:"url("+c[0].imagem+")",backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundSize:"cover"},children:Object(d.jsx)("div",{className:"textoetitulocards",children:Object(d.jsxs)("div",{children:[Object(d.jsxs)("h4",{children:[c[0].titulo.substr(0,20),"..."]}),Object(d.jsx)("p",{children:c[0].conteudo.substr(0,30)})]})})})]})})]})},j=(c(70),function(){Object(s.b)();var e=Object(s.c)((function(e){return e.post})),t=(Object(s.c)((function(e){return e.excluir})),e.filter((function(e){return e})));function c(e){var t=e.split("/");return new Date(t[2],t[1]-1,t[0])}t.sort((function(e,t){return new Date(c(e.data))-new Date(c(t.data))}));var a=t.slice(-3,-2);return Object(d.jsx)("div",{className:"coluna2",children:Object(d.jsxs)(r.b,{className:"link",to:"/post/".concat(a[0].id),children:["  ",Object(d.jsx)("div",{className:"noticia22",style:{backgroundImage:"url("+a[0].imagem+")",backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundSize:"cover",width:"100%",minHeight:"380px"},children:Object(d.jsx)("div",{className:"textoetitulocards",children:Object(d.jsxs)("div",{children:[Object(d.jsx)("h4",{children:a[0].titulo.substr(0,20)}),Object(d.jsx)("p",{children:a[0].conteudo.substr(0,30)})]})})})]})})}),u=(c(71),function(){Object(s.b)();var e=Object(s.c)((function(e){return e.post})),t=(Object(s.c)((function(e){return e.excluir})),e.filter((function(e){return e})));function c(e){var t=e.split("/");return new Date(t[2],t[1]-1,t[0])}t.sort((function(e,t){return new Date(c(e.data))-new Date(c(t.data))}));var a=t.slice(-9,-3),n=a.slice(-3),i=a.slice(-6,-3),o=n.map((function(e){return Object(d.jsx)("div",{className:"columnnoticia3",children:Object(d.jsxs)(r.b,{className:"link",to:"/post/".concat(e.id),children:["  ",Object(d.jsx)("div",{className:"noticiacol3",style:{width:"100%",minHeight:"255px",backgroundImage:"url("+e.imagem+")",backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundSize:"cover",display:"flex",flexDirection:"column",justifyContent:"end"},children:Object(d.jsx)("div",{className:"textoetitulocards",children:Object(d.jsxs)("div",{children:[Object(d.jsx)("h4",{children:e.titulo.substr(0,20)}),Object(d.jsx)("p",{children:e.conteudo.substr(0,30)})]})})})]})})})),l=i.map((function(e){return Object(d.jsx)("div",{className:"columnnoticia3",children:Object(d.jsxs)(r.b,{className:"link",to:"/post/".concat(e.id),children:[" ",Object(d.jsx)("div",{className:"noticiacol3",style:{width:"100%",minHeight:"255px",backgroundImage:"url("+e.imagem+")",backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundSize:"cover",display:"flex",flexDirection:"column",justifyContent:"end"},children:Object(d.jsx)("div",{className:"textoetitulocards",children:Object(d.jsxs)("div",{children:[Object(d.jsx)("h4",{children:e.titulo.substr(0,20)}),Object(d.jsx)("p",{children:e.conteudo.substr(0,30)})]})})})]})})}));return Object(d.jsxs)("div",{className:"coluna3",children:[Object(d.jsx)("div",{className:"coluna33",children:o}),Object(d.jsx)("div",{className:"coluna35",children:l})]})}),b=(c(72),function(){var e=Object(s.c)((function(e){return e.post})),t=(Object(s.c)((function(e){return e.excluir})),e.filter((function(e){return e})));function c(e){var t=e.split("/");return new Date(t[2],t[1]-1,t[0])}t.sort((function(e,t){return new Date(c(e.data))-new Date(c(t.data))}));var a=t.slice(-11,-9);return Object(d.jsxs)("div",{className:"coluna1",children:[Object(d.jsx)("div",{className:"noticia1",children:Object(d.jsxs)(r.b,{className:"link",to:"post/".concat(a[0].id),children:["   ",Object(d.jsx)("div",{className:"cp22",style:{width:"100%",minHeight:"360px",backgroundImage:"url(".concat(a[0].imagem,")"),backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundSize:"cover"},children:Object(d.jsx)("div",{className:"textoetitulocards",children:Object(d.jsxs)("div",{children:[Object(d.jsx)("h4",{children:a[0].titulo.substr(0,20)}),Object(d.jsx)("p",{children:a[0].conteudo.substr(0,30)})]})})})]})}),Object(d.jsx)("div",{className:"noticia2",children:Object(d.jsx)(r.b,{className:"link",to:"post/".concat(a[1].id),children:Object(d.jsx)("div",{className:"cp22",style:{width:"100%",minHeight:"360px",backgroundImage:"url(".concat(a[1].imagem,")"),backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundSize:"cover"},children:Object(d.jsx)("div",{className:"textoetitulocards",children:Object(d.jsxs)("div",{children:[Object(d.jsx)("h4",{children:a[1].titulo.substr(0,20)}),Object(d.jsx)("p",{children:a[1].conteudo.substr(0,30)})]})})})})})]})}),O=(c(73),function(){return Object(d.jsx)("div",{className:"coluna5",children:Object(d.jsx)("div",{className:"newcaster",style:{width:"100%",minHeight:"317px",backgroundImage:"url(/Rectangle4.png)",backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundSize:"cover"},children:Object(d.jsxs)("div",{className:"newcastertextos",children:[Object(d.jsx)("div",{children:Object(d.jsx)("h1",{children:"ola mundo"})}),Object(d.jsx)("div",{children:Object(d.jsx)("p",{children:"is simply dummy text of the printing and typesetting industry."})})]})})})}),x=function(){Object(s.c)((function(e){return e.post})),Object(s.c)((function(e){return e.excluir}));return Object(d.jsx)("div",{id:"conteudo",children:Object(d.jsxs)(n.a.Fragment,{children:[Object(d.jsx)(l,{}),Object(d.jsx)(j,{}),Object(d.jsx)(u,{},3),Object(d.jsx)(b,{}),Object(d.jsx)(O,{})]})})},m=(c(74),function(){return Object(d.jsxs)("div",{className:"footer",children:[Object(d.jsx)("p",{children:"is simply dummy text of the printing and typesetting industry."}),Object(d.jsx)("p",{children:"Footer do blog "})]})}),h=(c(75),c(47)),p=(c(76),c(95)),g=c(94),v=c(96),f=(c(77),function(){var e=Object(s.c)((function(e){return e.post})).map((function(e){return e.categoria})),t=e.filter((function(t,c){return e.indexOf(t)===c}));return Object(d.jsx)(p.a,{collapseOnSelect:!0,expand:"lg",bg:"dark",variant:"dark",children:Object(d.jsxs)(g.a,{children:[Object(d.jsx)(p.a.Brand,{children:Object(d.jsx)(r.b,{className:"linksbrand",to:"/",children:" Personal blog"})}),Object(d.jsx)(p.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),Object(d.jsx)(p.a.Collapse,{id:"responsive-navbar-nav",children:Object(d.jsx)(v.a,{className:"ms-auto",children:t.map((function(e){return Object(d.jsxs)(v.a.Link,{children:[" ",Object(d.jsx)(r.b,{className:"linkscategoria",to:"/categoria/".concat(e),children:e})]})}))})})]})})}),N=function(){var e=Object(s.c)((function(e){return e.post})).slice(-5);return console.log(e),Object(d.jsxs)("div",{children:[Object(d.jsx)(f,{}),Object(d.jsx)("div",{className:"slidercontent",children:Object(d.jsxs)("div",{className:"headerslider",children:[Object(d.jsx)(h.a,{children:e.map((function(e){return Object(d.jsxs)(h.a.Item,{children:[Object(d.jsx)("img",{className:"d-block w-100 imgslider",src:"/projeto-blog-redux"+"".concat(e.imagem),alt:"First slide"}),Object(d.jsxs)(h.a.Caption,{children:[Object(d.jsxs)("h3",{children:[e.titulo.substr(0,20),"..."]}),Object(d.jsxs)("p",{children:[e.conteudo.substr(0,30),"..."]})]})]})}))})," "]})})]})};function k(){return Object(d.jsxs)(n.a.Fragment,{children:[Object(d.jsx)(N,{}),Object(d.jsx)(x,{}),Object(d.jsx)(m,{})]})}var y=c(3),w=(c(80),c(81),c(23)),S=c(14),z=function(e){return Object(d.jsxs)("div",{className:e.barraadm,children:[Object(d.jsx)("div",{className:"gruposidebar1",children:Object(d.jsxs)(r.b,{to:"/:user/adm/addPost",className:"linkaddpost",children:[Object(d.jsx)("div",{className:"iconsidebar",children:Object(d.jsx)(w.a,{size:"2x",icon:S.c})}),Object(d.jsx)("div",{className:"linksidebar",children:Object(d.jsx)("p",{children:Object(d.jsx)("b",{children:"Add Post"})})})]})}),Object(d.jsx)("div",{className:"gruposidebar2",children:Object(d.jsxs)(r.b,{to:"/:user/adm/editpost",className:"linkaddpost",children:[Object(d.jsx)("div",{className:"iconsidebar",children:Object(d.jsx)(w.a,{size:"2x",icon:S.b})}),Object(d.jsx)("div",{className:"linksidebar",children:Object(d.jsx)("p",{children:Object(d.jsx)("b",{children:"Editar Post"})})})]})})]})},D=(c(85),c(4)),C=function(e){return Object(d.jsx)("div",{className:e.conteudo,children:Object(d.jsx)(D.a,{})})},P=function(){var e=Object(a.useState)(!1),t=Object(y.a)(e,2),c=t[0],n=t[1],i=Object(a.useState)("conteudoadm"),o=Object(y.a)(i,2),s=o[0],r=o[1],l=Object(a.useState)("sidebar"),j=Object(y.a)(l,2),u=j[0],b=j[1],O=Object(a.useState)("botao"),x=Object(y.a)(O,2),m=x[0],h=x[1],p=Object(a.useState)(),g=Object(y.a)(p,2);g[0],g[1];return window.location.pathname.includes("adm")?Object(d.jsxs)("div",{className:"adm",children:[Object(d.jsx)("div",{children:Object(d.jsx)(z,{barraadm:u})}),Object(d.jsxs)("div",{className:"conteudobtncontent",children:[Object(d.jsx)("div",{className:"botaoabrir",children:Object(d.jsx)(w.a,{className:m,onClick:function(){n(!c),c?(r("conteudoadm"),b("sidebar"),h("botao"),console.log(c)):(r("conteudoadm2"),b("sidebaradm2"),h("botao2"),console.log(c))},size:"2x",icon:S.a})}),Object(d.jsx)(C,{conteudo:s})]})]}):Object(d.jsx)("div",{children:Object(d.jsx)("h1",{children:"rota nao existe"})})},R=(c(86),c(34)),I=(c(87),c(54)),E=c.n(I),F=(new Date).toLocaleDateString(),H=function(){var e=Object(s.c)((function(e){return e.post})).map((function(e){return Object(d.jsx)(q,{id:e.id,titulo:e.titulo,conteudo:e.conteudo,autor:e.autor,categoria:e.categoria,data:e.data,imagem:e.imagem,idbtn:e.id,titulotxt:e.titulo,conteudotxt:e.conteudo,imagetxt:e.imagem,categoriatxt:e.categoria},e.id)}));return Object(d.jsx)("div",{children:e})},q=function(e){var t=Object(s.b)(),c=Object(a.useState)(!0),n=Object(y.a)(c,2),i=n[0],o=n[1],r=Object(a.useState)(),l=Object(y.a)(r,2),j=l[0],u=l[1],b=Object(a.useState)(!0),O=Object(y.a)(b,2),x=O[0],m=O[1],h=Object(a.useState)(e.id),p=Object(y.a)(h,2),g=p[0],v=(p[1],Object(a.useState)(e.titulo)),f=Object(y.a)(v,2),N=f[0],k=f[1],z=Object(a.useState)(e.conteudo),D=Object(y.a)(z,2),C=D[0],P=D[1],R=Object(a.useState)(e.categoria),I=Object(y.a)(R,2),H=I[0],q=I[1],A=Object(a.useState)(e.autor),J=Object(y.a)(A,2),V=J[0],X=(J[1],Object(a.useState)(e.imagem)),W=Object(y.a)(X,2),_=W[0],G=W[1],K=Object(a.useState)(F),Q=Object(y.a)(K,2),U=Q[0],Y=(Q[1],Object(s.c)((function(e){return e.post})),function(e){m(!x)}),Z=function(){console.log(i),i?(u("editposting"),o(!1)):(u("editpostingaberto"),o(!0))};Object(a.useEffect)((function(){u("editpostingaberto")}),[]);return Object(d.jsx)("div",{className:"editpost",children:Object(d.jsx)(E.a,{trigger:Object(d.jsx)(L,{}),className:"colapseedit",triggerWhenOpen:Object(d.jsx)(T,{}),onOpen:Z,onClose:Z,children:x?Object(d.jsxs)("div",{className:j,id:e.id,children:[Object(d.jsxs)("div",{className:"title",children:[" ",Object(d.jsx)("h4",{children:"titulo"}),"   ",e.titulo]}),Object(d.jsxs)("div",{className:"title",children:[Object(d.jsx)("h4",{children:"conteudo"})," ",e.conteudo]}),Object(d.jsxs)("div",{className:"autor",children:[Object(d.jsx)("h4",{children:"Autor"}),e.autor]}),Object(d.jsxs)("div",{className:"categoria",children:[Object(d.jsx)("h4",{children:"Categproa"}),e.categoria]}),Object(d.jsxs)("div",{className:"date",children:[Object(d.jsx)("h4",{children:"Data"}),e.data]}),Object(d.jsxs)("div",{className:"image",children:[Object(d.jsx)("h4",{children:"imagem"}),Object(d.jsx)("div",{className:"imgedit",children:Object(d.jsx)("img",{src:e.imagem})})]}),Object(d.jsxs)("div",{className:"grupobotaoeditar",children:[Object(d.jsx)("div",{className:"grupoeditardelete",children:Object(d.jsxs)("a",{href:"#",onClick:function(){t(M({id:g}))},children:[Object(d.jsx)(w.a,{className:"delete",size:"1x",icon:S.f}),"Delete"]})}),Object(d.jsx)("div",{className:"grupoeditardelete",children:Object(d.jsxs)("a",{href:"#",onClick:Y,children:[Object(d.jsx)(w.a,{className:"editar",size:"1x",icon:S.b}),"Editar"]})})]})]}):Object(d.jsxs)("div",{className:j,children:[Object(d.jsx)("label",{children:Object(d.jsx)("b",{children:"Edite o titulo"})}),Object(d.jsx)("br",{}),Object(d.jsx)("textarea",{className:"campotextoedit",onChange:function(e){return k(e.target.value)},defaultValue:e.titulotxt}),Object(d.jsx)("br",{}),Object(d.jsx)("label",{children:Object(d.jsx)("b",{children:"Edite o conteudo"})})," ",Object(d.jsx)("br",{}),Object(d.jsx)("textarea",{className:"campotextoedit",onChange:function(e){return P(e.target.value)},defaultValue:e.conteudotxt}),Object(d.jsx)("br",{})," ",Object(d.jsx)("label",{children:Object(d.jsx)("b",{children:"Edite a categoria"})})," ",Object(d.jsx)("br",{}),Object(d.jsx)("textarea",{className:"campotextoedit",onChange:function(e){return q(e.target.value)},defaultValue:e.categoriatxt}),Object(d.jsx)("br",{})," ",Object(d.jsx)("label",{children:Object(d.jsx)("b",{children:"Edite a imagem"})})," ",Object(d.jsx)("br",{}),Object(d.jsx)("input",{type:"file",onChange:function(e){var t=new FormData;t.append("image",e.target.files[0]);var c=new XMLHttpRequest;c.onload=function(){var e=JSON.parse(c.responseText);G(e.data.url)},c.open("post","https://api.imgbb.com/1/upload?key=9e481d21945658079d809f93dcf0b98c",!0),c.send(t)}}),Object(d.jsx)("br",{})," ",Object(d.jsx)("label",{children:Object(d.jsx)("b",{children:"Salvar"})})," ",Object(d.jsx)("br",{}),Object(d.jsx)("input",{type:"button",value:"salvar",onClick:function(){t(B({id:g,titulo:N,conteudo:C,autor:V,categoria:H,imagem:_,data:U}))}}),Object(d.jsx)("input",{type:"button",value:"voltar",onClick:Y})]})})})},L=function(){return Object(d.jsx)("div",{className:"botaoedit",children:Object(d.jsx)(w.a,{size:"2x",icon:S.d})})},T=function(){return Object(d.jsx)("div",{className:"botaoedit",children:Object(d.jsx)(w.a,{size:"2x",icon:S.e})})},A=(new Date,Object(R.b)({name:"post",initialState:[{id:0,titulo:"Melhores formas de aproveitar sua viagem de carro neste fim de ano",conteudo:"conteudo um",categoria:"trips",data:"22/12/2021",autor:"marcelo",imagem:"/layertrip1.png"},{id:1,titulo:"titulo dois",conteudo:"conteudo dois",categoria:"tech",data:"12/12/2021",autor:"fernando",imagem:"/layertech1.png"},{id:2,titulo:"titulo treis",conteudo:"conteudo treis",categoria:"peoople",data:"11/02/2021",autor:"juliana",imagem:"/layerpeople1.png"},{id:3,titulo:"titulo quatro",conteudo:"conteudo quatro",categoria:"nature",data:"05/12/2021",autor:"manel",imagem:"/layernature1.png"},{id:4,titulo:"titulo cinco",conteudo:"conteudo cinco",categoria:"fashion",data:"08/12/2021",autor:"zeca",imagem:"/layerfashion1.png"},{id:5,titulo:"titulo seis",conteudo:"conteudo seis",categoria:"peoople",data:"07/05/2021",autor:"jao",imagem:"/layerpeople2.jpg"},{id:6,titulo:"titulo sete",conteudo:"conteudo sete",categoria:"trips",data:"12/08/2021",autor:"fernando",imagem:"/layertrip2.png"},{id:7,titulo:"titulo oito",conteudo:"conteudo oito",categoria:"tech",data:"11/12/2021",autor:"mariana",imagem:"/layerfashion1.png"},{id:8,titulo:"titulo nove",conteudo:"conteudo nove",categoria:"nature",data:"10/12/2021",autor:"fernando",imagem:"/layernature2.jpg"},{id:9,titulo:"titulo dez",conteudo:"conteudo dez",categoria:"tech",data:"11/12/2021",autor:"joao",imagem:"/layertech2.png"},{id:10,titulo:"titulo onze",conteudo:"conteudo onze",categoria:"nature",data:"12/12/2021",autor:"bruno",imagem:"/layernature3.jpg"},{id:11,titulo:"titulo douze",conteudo:"conteudo douze",categoria:"trips",data:"04/12/2021",autor:"bruno",imagem:"/layertrip2.png"},{id:12,titulo:"titulo treze",conteudo:"conteudo treze",categoria:"trips",data:"06/12/2021",autor:"bruno",imagem:"/layertrip3.png"},{id:13,titulo:"titulo quatorze",conteudo:"conteudo quatorze",categoria:"animal",data:"07/12/2021",autor:"bruno viana",imagem:"/layeranimals1.jpg"},{id:14,titulo:"titulo quinze",conteudo:"conteudo quinze",categoria:"animal",data:"11/12/2021",autor:"jessica lima",imagem:"/layeranimals2.jpg"}],reducers:{addpost:function(e,t){var c={id:t.payload.id,autor:t.payload.autor,titulo:t.payload.titulo,conteudo:t.payload.conteudo,categoria:t.payload.categoria,imagem:t.payload.imagem,data:t.payload.data},a=e.slice();return a.push(c),e=a,a},Editarpost:function(e,t){console.log(t.payload.id),e[t.payload.id]=t.payload},removePost:function(e,t){return console.log(t.payload.id),e.filter((function(e,c){return c!==t.payload.id}))}}})),J=A.actions,V=J.addpost,B=J.Editarpost,M=J.removePost,X=A.reducer,W=function(){var e=Object(s.b)(),t=Object(s.c)((function(e){return e.post})),c=Object(a.useState)(),n=Object(y.a)(c,2),i=n[0],o=n[1],r=Object(a.useState)(),l=Object(y.a)(r,2),j=l[0],u=l[1],b=Object(a.useState)(),O=Object(y.a)(b,2),m=O[0],h=O[1],p=Object(a.useState)(),g=Object(y.a)(p,2),v=g[0],f=g[1],N=Object(a.useState)(),k=Object(y.a)(N,2),w=k[0],S=k[1],z=new Date;return Object(d.jsxs)("div",{className:"addPost",children:[Object(d.jsx)("h1",{children:"add post"}),Object(d.jsx)("input",{type:"text",name:"titulo",onChange:function(e){return u(e.target.value)},placeholder:"titulo",className:"inputtitulo"}),Object(d.jsx)("textarea",{id:"textopost",onChange:function(e){return o(e.target.value)},placeholder:"Add post",rows:"4"}),Object(d.jsx)("input",{type:"text",name:"categoria",onChange:function(e){return S(e.target.value)},placeholder:"categoria",className:"inputcategoria"}),Object(d.jsx)("input",{type:"file",onChange:function(e){var t=new FormData;t.append("image",e.target.files[0]),console.log(t);var c=new XMLHttpRequest;c.onload=function(){var e=JSON.parse(c.responseText);f(e.data.display_url)},c.open("post","https://api.imgbb.com/1/upload?key=9e481d21945658079d809f93dcf0b98c"),c.send(t)},name:"file",placeholder:"enviar foto"}),Object(d.jsxs)("select",{name:"usuarios",onChange:function(e){return h(e.target.value)},id:"usuarios",children:[Object(d.jsx)("option",{children:" "}),Object(d.jsx)("option",{value:"volvo",children:"Volvo"})]}),Object(d.jsx)("input",{type:"button",onClick:function(c){e(V({id:t.length,titulo:j,conteudo:i,categoria:w,imagem:v,data:z.toLocaleDateString(),autor:m}))},value:"enviar"}),Object(d.jsx)("input",{type:"button",onClick:function(){console.log(t)},value:"novadata"}),Object(d.jsx)(x,{})]})},_=(c(88),function(){var e=n.a.createRef(),t=Object(D.h)();console.log(t);var c=Object(s.c)((function(e){return e.post})).find((function(e){return e.id==t.post})),a=Object(s.c)((function(e){return e.post})).filter((function(e){return e}));function i(e){var t=e.split("/");return new Date(t[2],t[1]-1,t[0])}a.sort((function(e,t){return new Date(i(e.data))-new Date(i(t.data))}));var o=a.slice(-5).map((function(e){return Object(d.jsxs)("div",{className:"elementosbarrasingle",children:[Object(d.jsx)("div",{children:Object(d.jsx)("h4",{children:e.titulo})}),Object(d.jsx)("div",{children:Object(d.jsx)("p",{children:e.conteudo})})]})}));return Object(d.jsxs)("div",{className:"singlepost",children:[Object(d.jsx)(f,{}),Object(d.jsxs)("div",{className:"conteudosinglepost",children:[Object(d.jsx)("div",{className:"imgsinglepost",children:Object(d.jsx)("div",{ref:e,style:{backgroundImage:"url(".concat(c.imagem,")"),height:"400px",width:"100%",backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundSize:"cover"}})}),Object(d.jsxs)("div",{className:"corposinglepost",children:[Object(d.jsxs)("div",{className:"conteudo",children:[Object(d.jsx)("div",{className:"tituloconteudosingle",children:Object(d.jsx)("h2",{children:c.titulo})}),Object(d.jsx)("div",{className:"paragrafosingle",children:Object(d.jsx)("p",{children:c.conteudo})})]}),Object(d.jsx)("div",{className:"barra",children:o})]})]})]})}),G=(c(89),c(90),function(){var e=Object(D.h)();console.log(e.categoria);var t=Object(s.c)((function(e){return e.post})).filter((function(t){return t.categoria==e.categoria}));return Object(d.jsxs)("div",{className:"categoriasesao",children:[Object(d.jsx)(f,{}),Object(d.jsx)("div",{className:"contentcategoria",children:Object(d.jsx)("div",{className:"postcategorias",children:t.map((function(e){return Object(d.jsx)(K,{image:e.imagem,conteudo:e.conteudo,titulo:e.titulo,data:e.data})}))})}),Object(d.jsx)(m,{})]})}),K=function(e){return Object(d.jsxs)("div",{className:"cardcategoria",children:[Object(d.jsx)("div",{className:"titulocardcat",children:Object(d.jsx)("h1",{children:e.titulo})}),Object(d.jsx)("div",{className:"infoscardcat",children:Object(d.jsx)("p",{children:e.data})}),Object(d.jsxs)("div",{className:"corpocardcat",children:[Object(d.jsx)("div",{className:"corpoimgcard",children:Object(d.jsx)("div",{className:"imgcard",style:{height:"260px",width:"400px",backgroundImage:"url(".concat(e.image,")"),backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundSize:"cover"}})}),Object(d.jsx)("div",{className:"corpocard",children:Object(d.jsx)("p",{children:e.conteudo})})]})]})},Q=(c(91),function(){return Object(d.jsx)("div",{className:"dashboard",children:Object(d.jsx)("h1",{children:"dashboard "})})});var U=function(){return Object(d.jsx)("div",{className:"App",children:Object(d.jsxs)(D.d,{children:[Object(d.jsx)(D.b,{path:"/",element:Object(d.jsx)(k,{})}),Object(d.jsxs)(D.b,{path:"/:user/adm",element:Object(d.jsx)(P,{}),children:[Object(d.jsx)(D.b,{index:!0,element:Object(d.jsx)(Q,{})}),Object(d.jsx)(D.b,{path:"addpost",element:Object(d.jsx)(W,{})}),Object(d.jsx)(D.b,{path:"editpost",element:Object(d.jsx)(H,{})})]}),Object(d.jsx)(D.b,{path:"/post/:post",element:Object(d.jsx)(_,{})}),Object(d.jsx)(D.b,{path:"/categoria/:categoria",element:Object(d.jsx)(G,{})})]})})},Y=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,97)).then((function(t){var c=t.getCLS,a=t.getFID,n=t.getFCP,i=t.getLCP,o=t.getTTFB;c(e),a(e),n(e),i(e),o(e)}))},Z=Object(R.b)({name:"excluidos",initialState:[],reducers:{excluirid:function(e,t){var c=t.payload,a=e.slice();return a.push(c),e=a,a},atualizaexcludeid:function(e,t){}}}),$=Z.actions,ee=($.excluirid,$.atualizaexcludeid,Z.reducer),te=Object(R.a)({reducer:{post:X,excluir:ee}});o.a.render(Object(d.jsx)(r.a,{basename:"/projeto-blog-redux",children:Object(d.jsx)(s.a,{store:te,children:Object(d.jsx)(U,{})})}),document.getElementById("root")),Y()}},[[92,1,2]]]);
//# sourceMappingURL=main.a065bc66.chunk.js.map